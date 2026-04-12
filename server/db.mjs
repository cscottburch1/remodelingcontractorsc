import Database from 'better-sqlite3';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database file location (one level up from server folder)
const dbPath = path.join(__dirname, '..', 'data', 'leads.db');

// Create database connection
const db = new Database(dbPath);

// Enable foreign keys and WAL mode for better concurrent access
db.pragma('foreign_keys = ON');
db.pragma('journal_mode = WAL');

// Initialize database schema
function initDatabase() {
  // Users table (for admin authentication)
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
    )
  `);

  // Leads table with comprehensive fields
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      project_type TEXT NOT NULL,
      details TEXT,
      budget_min INTEGER,
      budget_max INTEGER,
      status TEXT NOT NULL DEFAULT 'new',
      priority TEXT DEFAULT 'normal',
      assigned_to TEXT,
      notes TEXT,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
      updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
    )
  `);

  // Lead attachments table
  db.exec(`
    CREATE TABLE IF NOT EXISTS lead_attachments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id INTEGER NOT NULL,
      filename TEXT NOT NULL,
      original_filename TEXT NOT NULL,
      filepath TEXT NOT NULL,
      mimetype TEXT,
      size INTEGER,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
      FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
    )
  `);

  // Lead activity log table
  db.exec(`
    CREATE TABLE IF NOT EXISTS lead_activity (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id INTEGER NOT NULL,
      action TEXT NOT NULL,
      description TEXT,
      user_id INTEGER,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
      FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
    )
  `);

  // Create indexes for performance
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_attachments_lead_id ON lead_attachments(lead_id);
    CREATE INDEX IF NOT EXISTS idx_activity_lead_id ON lead_activity(lead_id);
  `);

  // Create default admin user if none exists
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get();
  if (userCount.count === 0) {
    const defaultPassword = 'admin123'; // User should change this immediately
    const passwordHash = bcrypt.hashSync(defaultPassword, 10);
    
    db.prepare(`
      INSERT INTO users (username, password_hash, email)
      VALUES (?, ?, ?)
    `).run('admin', passwordHash, 'admin@remodelingcontractorsc.com');
    
    console.log('✓ Default admin user created (username: admin, password: admin123)');
    console.log('⚠️  IMPORTANT: Please change the default password immediately!');
  }
}

// Initialize the database
initDatabase();

// Prepared statements for common operations
export const queries = {
  // User queries
  getUserByUsername: db.prepare('SELECT * FROM users WHERE username = ?'),
  createUser: db.prepare('INSERT INTO users (username, password_hash, email) VALUES (?, ?, ?)'),
  
  // Lead queries
  getAllLeads: db.prepare(`
    SELECT 
      l.*,
      COUNT(DISTINCT la.id) as attachment_count
    FROM leads l
    LEFT JOIN lead_attachments la ON l.id = la.lead_id
    GROUP BY l.id
    ORDER BY l.created_at DESC
  `),
  
  getLeadById: db.prepare('SELECT * FROM leads WHERE id = ?'),
  
  createLead: db.prepare(`
    INSERT INTO leads (
      name, email, phone, project_type, details, 
      budget_min, budget_max, status, priority
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),
  
  updateLead: db.prepare(`
    UPDATE leads 
    SET name = ?, email = ?, phone = ?, project_type = ?, 
        details = ?, budget_min = ?, budget_max = ?, 
        status = ?, priority = ?, assigned_to = ?, notes = ?,
        updated_at = strftime('%s', 'now')
    WHERE id = ?
  `),
  
  deleteLead: db.prepare('DELETE FROM leads WHERE id = ?'),
  
  // Attachment queries
  getLeadAttachments: db.prepare('SELECT * FROM lead_attachments WHERE lead_id = ?'),
  
  createAttachment: db.prepare(`
    INSERT INTO lead_attachments (
      lead_id, filename, original_filename, filepath, mimetype, size
    ) VALUES (?, ?, ?, ?, ?, ?)
  `),
  
  deleteAttachment: db.prepare('DELETE FROM lead_attachments WHERE id = ?'),
  getAttachmentById: db.prepare('SELECT * FROM lead_attachments WHERE id = ?'),
  
  // Activity log queries
  getLeadActivity: db.prepare(`
    SELECT la.*, u.username
    FROM lead_activity la
    LEFT JOIN users u ON la.user_id = u.id
    WHERE la.lead_id = ?
    ORDER BY la.created_at DESC
  `),
  
  logActivity: db.prepare(`
    INSERT INTO lead_activity (lead_id, action, description, user_id)
    VALUES (?, ?, ?, ?)
  `)
};

export default db;
