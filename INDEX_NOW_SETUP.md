# Index Now Setup Guide

Index Now is an API that lets you notify Google and Bing instantly when you publish or update content. Instead of waiting days for search engines to crawl your site, Index Now notifies them immediately.

## Quick Start

### 1. Generate an Index Now Key

Run this command to generate a new key:

```bash
npm run index:key:generate
```

This will output something like:
```
a1b2c3d4e5f6g7h8
^ Copy this key to INDEX_NOW_KEY in .env.local and register at https://www.indexnow.org/
```

### 2. Register with Index Now

1. Go to https://www.indexnow.org/
2. Click "Get Started"
3. Choose your site (remodelingcontractorsc.com)
4. Enter your generated key
5. Complete the verification process
6. Add the key to your GitHub Secrets

### 3. Configure in Environment

**Local Development:**
```bash
# In .env.local
INDEX_NOW_KEY=your-generated-key-here
```

**Production (GitHub Actions):**
1. Go to GitHub repo settings → Secrets and Variables → Actions
2. Create new secret: `INDEX_NOW_KEY`
3. Paste your generated key
4. Save

## How It Works

### Automatic Submission

When you push to `main` branch:
1. GitHub Actions runs the deployment workflow
2. After successful build and restart, the Index Now submission script runs automatically
3. All public URLs are submitted to Google and Bing instantly
4. Search engines crawl and index the pages within minutes

### Manual Submission

Submit all URLs:
```bash
npm run index:submit
```

Submit specific URLs:
```bash
npm run index:submit:urls /contact,/about,/projects
```

Or use the API endpoint directly:
```bash
curl -X POST https://remodelingcontractorsc.com/api/index-now \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://remodelingcontractorsc.com/",
      "https://remodelingcontractorsc.com/contact"
    ],
    "key": "your-index-now-key"
  }'
```

## What Gets Submitted

The following URLs are automatically submitted to Index Now:

- Home page and all service pages
- All 8 calculator pages
- All 9 location pages (service areas)
- Info pages (about, projects, pricing guide, contact)

**Total: 31 URLs**

## API Endpoints

### POST /api/index-now
Submit URLs for immediate indexing

**Request:**
```json
{
  "urls": ["https://remodelingcontractorsc.com/page"],
  "key": "your-index-now-key"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Submitted 1 URL to Index Now",
  "count": 1,
  "urls": ["https://remodelingcontractorsc.com/page"]
}
```

### GET /api/index-now
Check Index Now configuration status

**Response:**
```json
{
  "status": "configured",
  "endpoint": "https://remodelingcontractorsc.com/api/index-now",
  "message": "Index Now is configured. POST URLs to this endpoint for indexing."
}
```

## Key File

The verification key is stored at: `public/.index-now-key.txt`

This file is required by Index Now to verify site ownership. It's automatically generated on deployment if `INDEX_NOW_KEY` is configured.

## Monitoring

After submission:

1. **Google Search Console** - Monitor indexing status
2. **Bing Webmaster Tools** - Monitor Bing indexing
3. **GitHub Actions** - Check deployment logs for submission confirmation

## Troubleshooting

**"INDEX_NOW_KEY not set"**
- Ensure the secret is added to GitHub → Settings → Secrets
- Verify the key is in .env.local for local testing

**"Index Now submission failed"**
- Check network connectivity
- Verify the key is valid at https://www.indexnow.org/
- Ensure .index-now-key.txt is accessible at the keyLocation URL

**"No valid URLs provided"**
- URLs must start with https://remodelingcontractorsc.com
- Verify paths are correct

## Best Practices

1. **Regenerate keys periodically** - Update your key every 6-12 months
2. **Monitor submissions** - Check GitHub Actions logs after each deployment
3. **Test locally** - Use `npm run index:submit` before relying on automated submission
4. **Keep it secure** - Never commit INDEX_NOW_KEY to git (use GitHub Secrets only)

## Learn More

- [Index Now Official Docs](https://www.indexnow.org/documentation)
- [Microsoft Index Now](https://learn.microsoft.com/en-us/bing/webmaster-tools/indexnow-overview)
- [Google Search Central](https://developers.google.com/search)

---

**Status:** ✅ Index Now is configured and ready  
**Automatic Submission:** Enabled on deployment  
**API Endpoint:** https://remodelingcontractorsc.com/api/index-now
