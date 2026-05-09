# GitHub Auto-Deploy Setup Guide

## ✅ Current Status
- GitHub Actions workflow configured: `.github/workflows/main.yml`
- Triggers automatically on every push to `main` branch
- Can also trigger manually from GitHub Actions tab

## 🔐 Required: Add Server Password to GitHub Secrets

**Step 1: Go to GitHub Repository Settings**
1. Navigate to: https://github.com/cscottburch1/remodelingcontractorsc/settings/secrets/actions
2. Click "New repository secret"

**Step 2: Add Server Password**
- Name: `SERVER_SSH_PASSWORD`
- Value: `Breana3397@@`
- Click "Add secret"

## 🚀 How Auto-Deploy Works

When you push to `main` branch, GitHub Actions will:
1. ✅ SSH into VPS (72.60.166.68 as root)
2. ✅ Navigate to /var/www/remodelingcontractorsc
3. ✅ Pull latest code from GitHub
4. ✅ Delete old build cache (.next, .swc)
5. ✅ Install dependencies (npm ci)
6. ✅ Build Next.js app (npm run build)
7. ✅ Restart PM2 process
8. ✅ Confirm deployment success

## 📝 Testing the Workflow

**After adding the secret:**
1. Make a small change (e.g., update a comment)
2. Commit and push to main:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   ```
3. Watch deployment progress:
   - Go to: https://github.com/cscottburch1/remodelingcontractorsc/actions
   - Click on your latest workflow run
   - Monitor the deployment logs

## 🔑 SSH Key Information

Your SSH key fingerprint: `SHA256:fMnY4XELgEMvXSpK4Fo1H1CAw1j5bJYIb64wFJuJzA4`

### Alternative: Use SSH Key Authentication (More Secure)

If you prefer SSH key over password:

1. **Get your private key:**
   ```powershell
   Get-Content ~\.ssh\id_rsa
   ```

2. **Add to GitHub Secrets:**
   - Name: `SERVER_SSH_KEY`
   - Value: (paste the entire private key including `-----BEGIN` and `-----END` lines)

3. **Update workflow** (in `.github/workflows/main.yml`):
   ```yaml
   with:
     host: 72.60.166.68
     username: root
     key: ${{ secrets.SERVER_SSH_KEY }}  # Change from password to key
   ```

## 🛡️ Safety Rules (From AGENTS.md)

The deployment workflow is restricted to:
- ✅ Domain: remodelingcontractorsc.com only
- ✅ App Path: /var/www/remodelingcontractorsc
- ✅ PM2 Process: remodelingcontractorsc
- ❌ Will NOT touch burchcontracting.com

## 📊 Monitoring Deployments

**Check deployment status:**
- GitHub Actions: https://github.com/cscottburch1/remodelingcontractorsc/actions
- View logs in real-time during deployment
- Email notifications for failures (configure in GitHub settings)

**Verify on server:**
```bash
ssh root@72.60.166.68
pm2 status
pm2 logs remodelingcontractorsc --lines 50
```

## ⚠️ Troubleshooting

**If deployment fails:**
1. Check GitHub Actions logs for error messages
2. Verify `SERVER_SSH_PASSWORD` secret is set correctly
3. Ensure server has enough disk space
4. Check PM2 process status on server

**Common issues:**
- Build timeout: Increase `command_timeout` in workflow
- Node modules: Clear with `rm -rf node_modules` on server
- Port conflicts: Check if PM2 process is running

## 🎯 Next Steps

1. ✅ Add `SERVER_SSH_PASSWORD` secret to GitHub
2. ✅ Test with a small commit to main branch
3. ✅ Monitor first deployment in GitHub Actions
4. ✅ Verify live site after successful deployment
