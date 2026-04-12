# Admin System Deployment Guide

## ⚠️ CRITICAL: Read Before Deploying

This deployment adds a complete admin system with database and file uploads. Follow these steps carefully to avoid issues.

## Pre-Deployment Checklist

- [ ] Read ADMIN_README.md completely
- [ ] Have Cloudflare Turnstile keys ready
- [ ] Have SMTP credentials ready (for email notifications)
- [ ] Have SSH access to VPS
- [ ] Backup current production if needed

## Step 1: Local Build Verification

```bash
# Verify build succeeds
npm run build

# Check output (should see admin CSS and larger JS bundle)
# - index.css: ~29KB
# - index.js: ~329KB
```

## Step 2: Environment Configuration

### On VPS, create/update `.env`:

```bash
ssh root@72.60.166.68
cd /var/www/remodelingcontractorsc
nano .env
```

Add these new variables:

```env
# Generate secure session secret
SESSION_SECRET=$(openssl rand -base64 32)

# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=0x4AAA...your-secret-key
VITE_TURNSTILE_SITE_KEY=0x4AAA...your-site-key

# Already have these (keep existing values)
PORT=3002
NODE_ENV=production
SMTP_HOST=...
SMTP_USER=...
SMTP_PASS=...
```

To generate session secret on VPS:
```bash
openssl rand -base64 32
```

## Step 3: Create Required Directories

```bash
# On VPS
cd /var/www/remodelingcontractorsc
mkdir -p data uploads
chmod 700 data uploads
```

## Step 4: Deploy Code

### From Local Machine:

```bash
# Commit all changes
git add -A
git commit -m "Add professional admin system with lead management

Features:
- Secure authentication with session management
- Lead CRUD operations (view, edit, delete)
- File upload support for client attachments
- Budget tracking (min/max range)
- Status workflow (new → contacted → in-progress → quoted → won/lost)
- Priority system (low/normal/high)
- Activity logging and audit trail
- Cloudflare Turnstile spam protection
- Dashboard with real-time statistics
- Search and filter capabilities
- Responsive design for all devices

Admin access: /admin/login
Default credentials: admin / admin123 (CHANGE IMMEDIATELY)"

git push origin main
```

### On VPS:

```bash
ssh root@72.60.166.68
cd /var/www/remodelingcontractorsc

# Pull latest code
git pull origin main

# Install new dependencies
npm install

# Build with admin system
npm run build

# Restart PM2
pm2 restart remodelingcontractorsc

# Verify it's running
pm2 logs remodelingcontractorsc --lines 50
```

## Step 5: Database Initialization

The database auto-creates on first server start.

Verify database created:

```bash
cd /var/www/remodelingcontractorsc
ls -lah data/

# Should see:
# leads.db
# leads.db-shm
# leads.db-wal
```

## Step 6: First Login & Password Change

1. Navigate to: `https://remodelingcontractorsc.com/admin/login`

2. Login with default credentials:
   - Username: `admin`
   - Password: `admin123`

3. **IMMEDIATELY** go to Settings and change password:
   - Click "Settings" in header
   - Enter current password: `admin123`
   - Enter new secure password (8+ characters)
   - Confirm new password
   - Click "Change Password"

4. **Write down new password securely!**

## Step 7: Configure Cloudflare Turnstile

### Get Keys:

1. Go to https://dash.cloudflare.com/
2. Select your account
3. Click "Turnstile" in left sidebar
4. Click "Add Widget"
5. Configure:
   - Name: "Remodeling SC Lead Form"
   - Domain: `remodelingcontractorsc.com`
   - Mode: "Managed" (recommended)
6. Copy both keys

### Update .env on VPS:

```bash
nano /var/www/remodelingcontractorsc/.env
```

Add the keys:
```env
TURNSTILE_SECRET_KEY=0x4AAA...your-actual-secret-key
VITE_TURNSTILE_SITE_KEY=0x4AAA...your-actual-site-key
```

Save and restart:
```bash
pm2 restart remodelingcontractorsc
```

### Rebuild Frontend (Turnstile site key is embedded):

```bash
cd /var/www/remodelingcontractorsc
npm run build
pm2 restart remodelingcontractorsc
```

## Step 8: Test All Features

### Test Lead Submission:

1. Go to Contact page: `https://remodelingcontractorsc.com/contact`
2. Fill out form with budget and details
3. Upload 1-2 test images (optional)
4. Submit form
5. Check for success message

### Test Admin Dashboard:

1. Login: `https://remodelingcontractorsc.com/admin/login`
2. Verify dashboard shows statistics
3. Verify lead appears in table
4. Click lead to view details
5. Test editing lead (change status, add notes)
6. Test downloading attachment
7. Test deleting attachment
8. Test deleting lead

### Test Email Notification:

1. Submit a test lead
2. Check email: `estimates@remodelingcontractorsc.com`
3. Verify email received with lead details

## Step 9: NGINX Configuration (If Needed)

The current NGINX config should work, but verify:

```bash
# On VPS
sudo nginx -t

# If any errors, check config:
sudo cat /etc/nginx/sites-enabled/remodelingcontractorsc
```

Make sure these locations are configured:
- Proxy `/api/` to `http://127.0.0.1:3002`
- Serve static files from `/var/www/remodelingcontractorsc/dist`
- SPA fallback: `try_files $uri $uri/ /index.html`

## Step 10: Security Hardening

### File Permissions:

```bash
cd /var/www/remodelingcontractorsc

# Secure data directory
chmod 700 data
chmod 600 data/leads.db*

# Secure uploads directory
chmod 700 uploads

# Secure .env
chmod 600 .env
```

### Firewall (if applicable):

```bash
# Ensure only necessary portsopen
sudo ufw status

# Should see:
# 22/tcp (SSH)
# 80/tcp (HTTP)
# 443/tcp (HTTPS)
```

## Step 11: Backup Strategy

### Automated Database Backup:

Create backup script:

```bash
nano /var/www/remodelingcontractorsc/backup-db.sh
```

Content:
```bash
#!/bin/bash
BACKUP_DIR="/var/www/backups/remodelingcontractorsc"
DATE=$(date +%Y%m%d-%H%M%S)

mkdir -p $BACKUP_DIR

# Backup database
cp /var/www/remodelingcontractorsc/data/leads.db \
   $BACKUP_DIR/leads-$DATE.db

# Keep only last 30 days
find $BACKUP_DIR -name "leads-*.db" -mtime +30 -delete

echo "Backup completed: leads-$DATE.db"
```

Make executable:
```bash
chmod +x backup-db.sh
```

Add to crontab (daily at 2 AM):
```bash
crontab -e

# Add line:
0 2 * * * /var/www/remodelingcontractorsc/backup-db.sh
```

## Troubleshooting

### Database Not Creating:

```bash
# Check server logs
pm2 logs remodelingcontractorsc

# Manually test database
cd /var/www/remodelingcontractorsc
node -e "import('./server/db.mjs').then(() => console.log('DB OK'))"
```

### Login Not Working:

1. Check session secret is set in `.env`
2. Clear browser cookies
3. Check server logs for errors
4. Verify database has users table:
   ```bash
   sqlite3 data/leads.db "SELECT * FROM users;"
   ```

### Uploads Failing:

1. Check `uploads/` directory exists and is writable
2. Check file size (max 10MB)
3. Check server logs
4. Verify multer is installed: `npm list multer`

### Turnstile Not Showing:

1. Verify `VITE_TURNSTILE_SITE_KEY` is set
2. Rebuild frontend: `npm run build`
3. Hard refresh browser (Ctrl+Shift+R)
4. Check browser console for errors

## Post-Deployment Checklist

- [ ] Admin login works
- [ ] Password changed from default
- [ ] Dashboard shows statistics
- [ ] Lead submission works (public form)
- [ ] File uploads work
- [ ] Email notifications received
- [ ] Turnstile challenge appears
- [ ] Edit lead works
- [ ] Delete lead works
- [ ] Download attachments works
- [ ] Search/filter works
- [ ] Mobile responsive (test on phone)
- [ ] Backup script scheduled

## Rollback Plan (If Needed)

If something goes wrong:

```bash
# On VPS
cd /var/www/remodelingcontractorsc

# Revert to previous commit
git log --oneline  # Find previous commit hash
git reset --hard <previous-commit-hash>

# Rebuild
npm install
npm run build
pm2 restart remodelingcontractorsc

# Remove new directories
rm -rf data uploads
```

## Support & Documentation

- **Admin Guide**: See `ADMIN_README.md`
- **API Documentation**: See `ADMIN_README.md` → API Endpoints section
- **Logs**: `pm2 logs remodelingcontractorsc`
- **Database**: SQLite at `data/leads.db`

## Success Criteria

✅ Admin dashboard accessible at `/admin/login`  
✅ Default password changed  
✅ Lead form accepts file uploads  
✅ Turnstile protection active  
✅ Email notifications working  
✅ All CRUD operations functional  
✅ Database backed up automatically  
✅ No console errors  
✅ Mobile responsive confirmed  

## Next Steps After Deployment

1. **Test thoroughly** with real data
2. **Monitor PM2 logs** for first 24 hours
3. **Test backup restoration** procedure
4. **Document any custom workflows** for your team
5. **Set calendar reminder** to rotate session secret quarterly

---

**Deployment completed successfully?** 🎉

Remember to save your changed admin password securely!
