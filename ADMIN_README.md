# Admin System Documentation

## Overview

Professional admin dashboard for managing leads with comprehensive features:

- ✅ **Secure Authentication** - Login/logout with session management
- ✅ **Lead Management** - View, edit, delete leads with full CRUD operations
- ✅ **File Uploads** - Clients can attach photos/documents with lead submissions
- ✅ **Budget Tracking** - Min/max budget fields for project estimation
- ✅ **Status Workflow** - Track leads through: New → Contacted → In Progress → Quoted → Won/Lost
- ✅ **Priority System** - High/Normal/Low priority flags
- ✅ **Activity Logging** - Full audit trail of all lead changes
- ✅ **Spam Protection** - Cloudflare Turnstile integration
- ✅ **Dashboard Statistics** - Real-time lead metrics and counts
- ✅ **Search & Filter** - Find leads quickly by name, email, or project type
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## Quick Start

### 1. Environment Setup

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Edit `.env` and configure:

```env
# Required - Generate secure session secret
SESSION_SECRET=$(openssl rand -base64 32)

# Email configuration (for lead notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Cloudflare Turnstile (spam protection)
TURNSTILE_SECRET_KEY=0x4AAA...  # From Cloudflare dashboard
VITE_TURNSTILE_SITE_KEY=0x4AAA...  # From Cloudflare dashboard
```

### 2. Initialize Database

The database is automatically created on first server start:

```bash
npm run dev
```

Database location: `data/leads.db` (SQLite)

### 3. Default Admin Credentials

```
Username: admin
Password: admin123
```

**⚠️ IMPORTANT:** Change the password immediately after first login!

## Admin Access

### Login

Navigate to: `https://your-domain.com/admin/login`

Or locally: `http://localhost:3002/admin/login`

### Dashboard

After login, you'll see:
- **Statistics Cards** - Total leads, breakdown by status
- **Leads Table** - All leads with search/filter
- **Quick Actions** - View details, delete leads

### Lead Details

Click any lead to view full details:
- Contact information
- Project details and budget
- Attached files (download/delete)
- Admin notes (internal only)
- Status and priority
- Activity log (audit trail)

### Managing Leads

**Edit Lead:**
1. Click lead to view details
2. Click "Edit" button
3. Modify any field
4. Click "Save Changes"

**Delete Lead:**
1. Click trash icon in table, OR
2. View lead details → "Delete" button
3. Confirm deletion

**Download Attachments:**
1. View lead details
2. Find "Attachments" section
3. Click download icon for any file

## Lead Form Features

### Public-Facing Form

The estimate form (on Contact page) now includes:

1. **Basic Fields:**
   - Name, Email, Phone
   - Project Type (dropdown)
   - Project Details (textarea)

2. **Budget Range:**
   - Optional min/max budget sliders
   - Helps with project scoping

3. **File Uploads:**
   - Up to 5 files
   - 10MB max per file
   - Accepted: Images, PDFs, DOC/DOCX
   - Photos of site, inspiration images, etc.

4. **Spam Protection:**
   - Cloudflare Turnstile (invisible challenge)
   - Honeypot field
   - Time-based submission validation

## Getting Cloudflare Turnstile Keys

1. Go to https://dash.cloudflare.com/
2. Select your account
3. Click "Turnstile" in sidebar
4. Click "Add Widget"
5. Choose "Managed" mode
6. Copy both keys:
   - **Site Key** (starts with 0x...) → `VITE_TURNSTILE_SITE_KEY`
   - **Secret Key** (starts with 0x...) → `TURNSTILE_SECRET_KEY`

### Testing Mode

Use visible test keys (always passes):
```env
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

## Database Schema

### Tables

**users** - Admin users
- id, username, password_hash, email, created_at

**leads** - Customer leads
- id, name, email, phone, project_type, details
- budget_min, budget_max
- status (new/contacted/in-progress/quoted/won/lost)
- priority (low/normal/high)
- assigned_to, notes
- created_at, updated_at

**lead_attachments** - Uploaded files
- id, lead_id, filename, original_filename, filepath
- mimetype, size, created_at

**lead_activity** - Audit log
- id, lead_id, action, description, user_id, created_at

## Security Features

1. **Session-based Authentication**
   - Secure HTTP-only cookies
   - Automatic session expiration (24 hours)
   - Protection against session fixation

2. **Password Security**
   - BCrypt hashing (10 rounds)
   - Minimum 8 characters
   - Salted and peppered

3. **Spam Protection**
   - Cloudflare Turnstile verification
   - Honeypot fields (hidden from users)
   - Time-based submission checks (min 2.5s)
   - Rate limiting (6 requests per 15 minutes)

4. **File Upload Safety**
   - MIME type validation
   - File size limits (10MB)
   - Unique filenames (UUID-based)
   - Allowed types: images, PDFs, docs only

5. **SQL Injection Prevention**
   - Parameterized queries (prepared statements)
   - No raw SQL concatenation

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/session` - Check session status
- `POST /api/auth/change-password` - Change password

### Public
- `POST /api/lead` - Submit lead (with file uploads)

### Admin (requires login)
- `GET /api/admin/leads` - List all leads
- `GET /api/admin/leads/:id` - Get lead details
- `PUT /api/admin/leads/:id` - Update lead
- `DELETE /api/admin/leads/:id` - Delete lead
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/attachments/:id` - Download attachment
- `DELETE /api/admin/attachments/:id` - Delete attachment

## Deployment

### Production Checklist

1. **Change Default Password**
   ```
   Login → Settings → Change Password
   ```

2. **Set Environment Variables**
   ```bash
   # Generate secure session secret
   openssl rand -base64 32

   # Set in .env or hosting environment
   SESSION_SECRET=<generated-secret>
   NODE_ENV=production
   ```

3. **Configure Email**
   ```env
   SMTP_HOST=smtp.your-provider.com
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-password
   ```

4. **Configure Turnstile**
   ```env
   TURNSTILE_SECRET_KEY=0x...production-key
   VITE_TURNSTILE_SITE_KEY=0x...production-key
   ```

5. **Create Required Directories**
   ```bash
   mkdir -p data uploads
   chmod 700data uploads
   ```

6. **Deploy to VPS**
   ```bash
   git push origin main
   ssh root@your-vps
   cd /var/www/remodelingcontractorsc
   git pull
   npm install
   npm run build
   pm2 restart remodelingcontractorsc
   ```

### VPS-Specific Notes

The `data/` and `uploads/` directories are excluded from git (.gitignore).

On first deployment to VPS:
1. SSH into server
2. Create directories:
   ```bash
   cd /var/www/remodelingcontractorsc
   mkdir -p data uploads
   chmod 700 data uploads
   ```
3. Database will auto-create on first server start
4. Default admin user auto-creates if no users exist

## Backup & Maintenance

### Backup Database

```bash
# Local backup
cp data/leads.db data/leads.db.backup

# Remote backup (from local machine)
scp root@your-vps:/var/www/remodelingcontractorsc/data/leads.db ./backup/leads-$(date +%Y%m%d).db
```

### Backup Uploads

```bash
# From VPS
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz uploads/

# Download to local
scp root@your-vps:/var/www/remodelingcontractorsc/uploads-backup-*.tar.gz ./backup/
```

### Adding Admin Users

Currently, only one admin user is supported. To add more:

1. Connect to database:
   ```bash
   sqlite3 data/leads.db
   ```

2. Insert new user:
   ```sql
   -- First, generate password hash with bcrypt (use online tool or script)
   INSERT INTO users (username, password_hash, email)
   VALUES ('newadmin', '$2a$10$hashed_password_here', 'admin2@example.com');
   ```

## Troubleshooting

### Can't Login

1. Check session secret is set in `.env`
2. Check database exists: `ls -la data/leads.db`
3. Try default credentials: `admin` / `admin123`
4. Check server logs for errors

### File Uploads Failing

1. Check uploads directory exists: `mkdir -p uploads`
2. Check permissions: `chmod 700 uploads`
3. Check file size (max 10MB)
4. Check file type (images, PDFs, docs only)

### Turnstile Not Working

1. Verify keys in `.env`:
   - `TURNSTILE_SECRET_KEY` (server)
   - `VITE_TURNSTILE_SITE_KEY` (frontend)
2. Check domain is whitelisted in Cloudflare
3. Use test keys for development
4. Check browser console for errors

### Email Notifications Not Sending

1. Check SMTP configuration in `.env`
2. Test with Gmail:
   - Use App Password (not account password)
   - Enable "Less secure app access" if needed
3. Check server logs for SMTP errors
4. Verify recipient email: `estimates@remodelingcontractorsc.com`

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Database: SQLite (fast for <100k records)
- File uploads: Local filesystem
- Session storage: In-memory (default)
- Build size: ~329KB JS, ~29KB CSS (gzipped)

## Future Enhancements

Possible additions:
- Multi-user support with roles
- Email templates customization
- Export leads to CSV
- Lead assignment and notifications
- Calendar integration
- Project timeline tracking
- Quote generation
- Customer portal

## Support

For issues or questions:
- Check server logs: `pm2 logs remodelingcontractorsc`
- Check browser console (F12)
- Review environment variables
- Verify database permissions

## License

Proprietary - Remodeling Contractors SC
