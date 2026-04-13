import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import db, { queries } from './db.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const uploadsDir = path.join(rootDir, 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${uuidv4()}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
    files: 5 // Max 5 files per request
  },
  fileFilter: (_req, file, cb) => {
    // Allow common image and document types
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/heic',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images and PDFs are allowed.'));
    }
  }
});

const app = express();
const port = Number(process.env.PORT || 3002);

const allowedProjectTypes = new Set([
  'Garage Builders',
  'Room Additions',
  'Deck Builders',
  'Aluminum Screened Enclosures',
  'ADUs',
  'Detached ADUs',
  'Detached Garages',
  'Attached Garages',
  'Garage With Apartment / Storage Above',
  'Second Story Additions',
  'Bump-Out Additions',
  'Covered Decks',
  'Composite Decks',
  'Screened Patio Enclosures',
  'Screen Rooms',
  'Backyard ADUs',
  'Detached Guest Houses / ADU-Style Options / In-Law Suites'
]);

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests"
  );

  next();
});
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false, limit: '100kb' }));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'remodeling-sc-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Authentication middleware
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ ok: false, error: 'Authentication required' });
  }
  next();
}

const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 6,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    error: 'Too many requests. Please wait and try again.'
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(input, maxLen) {
  return String(input || '')
    .replace(/\0/g, '')
    .trim()
    .slice(0, maxLen);
}

function validateLead(body) {
  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 160);
  const phone = sanitizeText(body.phone, 40);
  const projectType = sanitizeText(body.projectType, 80);
  const details = sanitizeText(body.details, 3000);
  const budgetMin = body.budgetMin ? parseInt(body.budgetMin) : null;
  const budgetMax = body.budgetMax ? parseInt(body.budgetMax) : null;
  const website = sanitizeText(body.website, 120);
  const startedAt = Number(body.startedAt || 0);

  if (website) {
    return { ok: true, isBot: true };
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 2500) {
    return { ok: false, error: 'Request rejected.' };
  }

  if (!name || name.length < 2) {
    return { ok: false, error: 'Please enter your name.' };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  if (!allowedProjectTypes.has(projectType)) {
    return { ok: false, error: 'Please select a valid project type.' };
  }

  return {
    ok: true,
    isBot: false,
    lead: {
      name,
      email,
      phone,
      projectType,
      details,
      budgetMin,
      budgetMax
    }
  };
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: smtpPort,
    secure,
    auth: {
      user,
      pass
    }
  });
}

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token, remoteIp) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('Turnstile secret key not configured');
    return true; // Allow if not configured (development)
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: remoteIp
      })
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// ============================================================================
// AUTHENTICATION ENDPOINTS
// ============================================================================

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ ok: false, error: 'Username and password required' });
  }

  try {
    const user = queries.getUserByUsername.get(username);
    
    if (!user) {
      return res.status(401).json({ ok: false, error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    
    if (!isValidPassword) {
      return res.status(401).json({ ok: false, error: 'Invalid credentials' });
    }

    // Set session
    req.session.userId = user.id;
    req.session.username = user.username;

    res.json({
      ok: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ ok: false, error: 'Login failed' });
  }
});

// Logout endpoint
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ ok: false, error: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ ok: true });
  });
});

// Check session endpoint
app.get('/api/auth/session', (req, res) => {
  if (req.session.userId) {
    res.json({
      ok: true,
      authenticated: true,
      user: {
        id: req.session.userId,
        username: req.session.username
      }
    });
  } else {
    res.json({
      ok: true,
      authenticated: false
    });
  }
});

// Change password endpoint
app.post('/api/auth/change-password', requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ ok: false, error: 'Current and new password required' });
  }

  if (newPassword.length < 8) {
    return res.status(400).json({ ok: false, error: 'New password must be at least 8 characters' });
  }

  try {
    const user = queries.getUserByUsername.get(req.session.username);
    const isValidPassword = await bcrypt.compare(currentPassword, user.password_hash);
    
    if (!isValidPassword) {
      return res.status(401).json({ ok: false, error: 'Current password is incorrect' });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(newPasswordHash, user.id);

    res.json({ ok: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Password change error:', error);
    res.status(500).json({ ok: false, error: 'Password change failed' });
  }
});

// ============================================================================
// PUBLIC LEAD SUBMISSION ENDPOINT (with file uploads)
// ============================================================================

app.post('/api/lead', leadLimiter, upload.array('attachments', 5), async (req, res) => {
  try {
    // Verify Turnstile token if provided
    const turnstileToken = req.body.turnstileToken;
    if (turnstileToken) {
      const isValidToken = await verifyTurnstile(turnstileToken, req.ip);
      if (!isValidToken) {
        // Clean up uploaded files
        if (req.files) {
          req.files.forEach(file => fs.unlinkSync(file.path));
        }
        return res.status(400).json({ ok: false, error: 'Verification failed. Please try again.' });
      }
    }

    const checked = validateLead(req.body || {});

    if (!checked.ok) {
      // Clean up uploaded files
      if (req.files) {
        req.files.forEach(file => fs.unlinkSync(file.path));
      }
      return res.status(400).json({ ok: false, error: checked.error });
    }

    if (checked.isBot) {
      // Clean up uploaded files
      if (req.files) {
        req.files.forEach(file => fs.unlinkSync(file.path));
      }
      return res.json({ ok: true });
    }

    const lead = checked.lead;
    
    // Save lead to database
    let leadId;
    try {
      const result = queries.createLead.run(
        lead.name,
        lead.email,
        lead.phone || null,
        lead.projectType,
        lead.details || null,
        lead.budgetMin || null,
        lead.budgetMax || null,
        'new',
        'normal'
      );
      leadId = result.lastInsertRowid;
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Clean up uploaded files
      if (req.files) {
        req.files.forEach(file => fs.unlinkSync(file.path));
      }
      return res.status(500).json({ ok: false, error: 'Failed to save lead' });
    }

    // Save attachments to database
    if (req.files && req.files.length > 0) {
      try {
        req.files.forEach(file => {
          queries.createAttachment.run(
            leadId,
            file.filename,
            file.originalname,
            file.path,
            file.mimetype,
            file.size
          );
        });
      } catch (attachError) {
        console.error('Attachment save error:', attachError);
        // Continue even if attachment save fails
      }
    }

    // Log activity
    try {
      queries.logActivity.run(
        leadId,
        'created',
        'Lead submitted from website',
        null
      );
    } catch (logError) {
      console.error('Activity log error:', logError);
    }

    // Send email notification
    const transporter = getTransporter();
    if (transporter) {
      const recipient = 'estimates@remodelingcontractorsc.com';
      const fromEmail = process.env.LEAD_FROM_EMAIL || process.env.SMTP_USER;

      const budgetText = lead.budgetMin && lead.budgetMax
        ? `Budget Range: $${lead.budgetMin.toLocaleString()} - $${lead.budgetMax.toLocaleString()}`
        : lead.budgetMin
        ? `Minimum Budget: $${lead.budgetMin.toLocaleString()}`
        : lead.budgetMax
        ? `Maximum Budget: $${lead.budgetMax.toLocaleString()}`
        : 'Budget: Not specified';

      const textBody = [
        'New estimate request',
        '',
        `Lead ID: #${leadId}`,
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone || 'Not provided'}`,
        `Project Type: ${lead.projectType}`,
        budgetText,
        '',
        'Project Details:',
        lead.details || 'No details provided',
        '',
        req.files && req.files.length > 0
          ? `Attachments: ${req.files.length} file(s) uploaded`
          : 'No attachments',
        '',
        `View in admin: ${process.env.SITE_URL || 'https://remodelingcontractorsc.com'}/admin/leads/${leadId}`
      ].join('\n');

      try {
        await transporter.sendMail({
          from: fromEmail,
          to: recipient,
          replyTo: lead.email,
          subject: `New Estimate Request #${leadId} - ${lead.projectType}`,
          text: textBody
        });
      } catch (emailError) {
        console.error('Email send error:', emailError);
        // Don't fail the request if email fails
      }
    }

    return res.json({ ok: true, leadId });
  } catch (error) {
    console.error('Lead submission error:', error);
    // Clean up uploaded files
    if (req.files) {
      req.files.forEach(file => {
        try {
          fs.unlinkSync(file.path);
        } catch (unlinkError) {
          console.error('File cleanup error:', unlinkError);
        }
      });
    }
    return res.status(500).json({ ok: false, error: 'Failed to process request' });
  }
});

// ============================================================================
// ADMIN LEAD MANAGEMENT ENDPOINTS (requires authentication)
// ============================================================================

// Get all leads
app.get('/api/admin/leads', requireAuth, (req, res) => {
  try {
    const leads = queries.getAllLeads.all();
    res.json({ ok: true, leads });
  } catch (error) {
    console.error('Get leads error:', error);
    res.status(500).json({ ok: false, error: 'Failed to fetch leads' });
  }
});

// Get single lead with details
app.get('/api/admin/leads/:id', requireAuth, (req, res) => {
  try {
    const leadId = parseInt(req.params.id);
    const lead = queries.getLeadById.get(leadId);
    
    if (!lead) {
      return res.status(404).json({ ok: false, error: 'Lead not found' });
    }

    const attachments = queries.getLeadAttachments.all(leadId);
    const activity = queries.getLeadActivity.all(leadId);

    res.json({
      ok: true,
      lead: {
        ...lead,
        attachments,
        activity
      }
    });
  } catch (error) {
    console.error('Get lead error:', error);
    res.status(500).json({ ok: false, error: 'Failed to fetch lead' });
  }
});

// Update lead
app.put('/api/admin/leads/:id', requireAuth, (req, res) => {
  try {
    const leadId = parseInt(req.params.id);
    const {
      name,
      email,
      phone,
      projectType,
      details,
      budgetMin,
      budgetMax,
      status,
      priority,
      assignedTo,
      notes
    } = req.body;

    queries.updateLead.run(
      name,
      email,
      phone || null,
      projectType,
      details || null,
      budgetMin || null,
      budgetMax || null,
      status || 'new',
      priority || 'normal',
      assignedTo || null,
      notes || null,
      leadId
    );

    // Log activity
    queries.logActivity.run(
      leadId,
      'updated',
      'Lead updated by admin',
      req.session.userId
    );

    const updatedLead = queries.getLeadById.get(leadId);
    res.json({ ok: true, lead: updatedLead });
  } catch (error) {
    console.error('Update lead error:', error);
    res.status(500).json({ ok: false, error: 'Failed to update lead' });
  }
});

// Delete lead
app.delete('/api/admin/leads/:id', requireAuth, (req, res) => {
  try {
    const leadId = parseInt(req.params.id);
    
    // Get attachments before deleting to clean up files
    const attachments = queries.getLeadAttachments.all(leadId);
    
    // Delete lead (cascade will delete attachments and activity)
    queries.deleteLead.run(leadId);
    
    // Delete attachment files from disk
    attachments.forEach(attachment => {
      try {
        if (fs.existsSync(attachment.filepath)) {
          fs.unlinkSync(attachment.filepath);
        }
      } catch (fileError) {
        console.error('File deletion error:', fileError);
      }
    });

    res.json({ ok: true });
  } catch (error) {
    console.error('Delete lead error:', error);
    res.status(500).json({ ok: false, error: 'Failed to delete lead' });
  }
});

// Download attachment
app.get('/api/admin/attachments/:id', requireAuth, (req, res) => {
  try {
    const attachmentId = parseInt(req.params.id);
    const attachment = queries.getAttachmentById.get(attachmentId);
    
    if (!attachment) {
      return res.status(404).json({ ok: false, error: 'Attachment not found' });
    }

    if (!fs.existsSync(attachment.filepath)) {
      return res.status(404).json({ ok: false, error: 'File not found' });
    }

    res.download(attachment.filepath, attachment.original_filename);
  } catch (error) {
    console.error('Download attachment error:', error);
    res.status(500).json({ ok: false, error: 'Failed to download attachment' });
  }
});

// Delete attachment
app.delete('/api/admin/attachments/:id', requireAuth, (req, res) => {
  try {
    const attachmentId = parseInt(req.params.id);
    const attachment = queries.getAttachmentById.get(attachmentId);
    
    if (!attachment) {
      return res.status(404).json({ ok: false, error: 'Attachment not found' });
    }

    // Delete from database
    queries.deleteAttachment.run(attachmentId);
    
    // Delete file from disk
    if (fs.existsSync(attachment.filepath)) {
      fs.unlinkSync(attachment.filepath);
    }

    // Log activity
    queries.logActivity.run(
      attachment.lead_id,
      'attachment_deleted',
      `Deleted attachment: ${attachment.original_filename}`,
      req.session.userId
    );

    res.json({ ok: true });
  } catch (error) {
    console.error('Delete attachment error:', error);
    res.status(500).json({ ok: false, error: 'Failed to delete attachment' });
  }
});

// Get dashboard statistics
app.get('/api/admin/stats', requireAuth, (req, res) => {
  try {
    const stats = {
      total: db.prepare('SELECT COUNT(*) as count FROM leads').get().count,
      new: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('new').count,
      contacted: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('contacted').count,
      inProgress: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('in-progress').count,
      quoted: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('quoted').count,
      won: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('won').count,
      lost: db.prepare('SELECT COUNT(*) as count FROM leads WHERE status = ?').get('lost').count
    };

    res.json({ ok: true, stats });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ ok: false, error: 'Failed to fetch statistics' });
  }
});

if (fs.existsSync(path.join(publicDir, 'robots.txt'))) {
  app.get('/robots.txt', (_req, res) => {
    res.sendFile(path.join(publicDir, 'robots.txt'));
  });
}

if (fs.existsSync(path.join(publicDir, 'sitemap.xml'))) {
  app.get('/sitemap.xml', (_req, res) => {
    res.sendFile(path.join(publicDir, 'sitemap.xml'));
  });
}

app.use(express.static(distDir, { index: false }));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});