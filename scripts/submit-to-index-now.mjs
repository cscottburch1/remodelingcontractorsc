#!/usr/bin/env node

/**
 * Submit all public URLs to Index Now after deployment
 * This notifies Google and Bing to immediately crawl/index the site
 * 
 * Usage:
 *   node scripts/submit-to-index-now.mjs [--all] [--urls url1,url2,url3]
 * 
 * Environment variables:
 *   INDEX_NOW_KEY - API key for Index Now
 *   SITE_URL - Base URL of the site (default: https://remodelingcontractorsc.com)
 * 
 * Examples:
 *   node scripts/submit-to-index-now.mjs              # Submit all URLs
 *   node scripts/submit-to-index-now.mjs --all        # Submit all URLs (explicit)
 *   node scripts/submit-to-index-now.mjs --urls /,/about,/projects
 */

const BING_INDEX_NOW_API = 'https://www.bing.com/indexnow';
const GOOGLE_INDEX_NOW_API = 'https://www.google.com/indexnow';

const DEFAULT_URLS = [
  '/',
  '/about',
  '/projects',
  '/pricing-guide',
  '/contact',
  '/garages',
  '/room-additions',
  '/decks',
  '/screened-porches',
  '/basement-finishing',
  '/adu',
  '/kitchen-remodeling',
  '/bathroom-remodeling',
  '/kitchen-bath-remodeling',
  '/calculator/garages',
  '/calculator/room-additions',
  '/calculator/decks',
  '/calculator/screened-porches',
  '/calculator/basement-finishing',
  '/calculator/adu',
  '/calculator/kitchen-remodeling',
  '/calculator/bathroom-remodeling',
  '/locations/greenville-sc',
  '/locations/simpsonville-sc',
  '/locations/mauldin-sc',
  '/locations/fountain-inn-sc',
  '/locations/greer-sc',
  '/locations/taylors-sc',
  '/locations/travelers-rest-sc',
  '/locations/piedmont-sc',
  '/locations/easley-sc',
];

async function submitToIndexNow(urls, apiKey, baseUrl) {
  const host = new URL(baseUrl).hostname;
  
  const payload = {
    host,
    key: apiKey,
    keyLocation: `${baseUrl}/.index-now-key.txt`,
    urlList: urls,
  };

  try {
    console.log(`\n📤 Submitting ${urls.length} URLs to Index Now...`);
    console.log(`   Host: ${host}`);
    console.log(`   Key Location: ${payload.keyLocation}`);

    // Submit to Bing Index Now
    console.log(`\n→ Bing Index Now API...`);
    const bingResponse = await fetch(BING_INDEX_NOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (bingResponse.ok) {
      console.log(`✓ Bing accepted submission (${bingResponse.status})`);
    } else {
      console.warn(`⚠ Bing responded with ${bingResponse.status}: ${await bingResponse.text()}`);
    }

    // Submit to Google Index Now (same endpoint, handled by Google's network)
    console.log(`\n→ Google Index Now API...`);
    const googleResponse = await fetch(GOOGLE_INDEX_NOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (googleResponse.ok) {
      console.log(`✓ Google accepted submission (${googleResponse.status})`);
    } else {
      console.warn(`⚠ Google responded with ${googleResponse.status}: ${await googleResponse.text()}`);
    }

    console.log(`\n✅ Index Now notification complete!`);
    console.log(`   Search engines will crawl these URLs in the next few minutes.`);
    return true;
  } catch (error) {
    console.error(`\n❌ Index Now submission failed:`, error.message);
    return false;
  }
}

async function main() {
  const apiKey = process.env.INDEX_NOW_KEY;
  const baseUrl = process.env.SITE_URL || 'https://remodelingcontractorsc.com';
  const args = process.argv.slice(2);

  // Validate API key
  if (!apiKey) {
    console.error(`\n❌ ERROR: INDEX_NOW_KEY environment variable not set`);
    console.error(`   Add INDEX_NOW_KEY to your .env.local or GitHub secrets`);
    process.exit(1);
  }

  console.log(`\n🔍 Index Now Deployment Notifier`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Site: ${baseUrl}`);
  console.log(`API Key: ${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`);

  let urlsToSubmit = DEFAULT_URLS.map((path) => `${baseUrl}${path}`);

  // Parse arguments for custom URLs
  if (args.includes('--urls')) {
    const urlsIndex = args.indexOf('--urls');
    if (urlsIndex + 1 < args.length) {
      const customPaths = args[urlsIndex + 1].split(',').map((p) => p.trim());
      urlsToSubmit = customPaths.map((path) => {
        if (path.startsWith('http')) {
          return path;
        }
        return `${baseUrl}${path.startsWith('/') ? path : '/' + path}`;
      });
    }
  }

  console.log(`\nURLs to submit: ${urlsToSubmit.length}`);
  urlsToSubmit.slice(0, 5).forEach((url) => console.log(`  • ${url}`));
  if (urlsToSubmit.length > 5) {
    console.log(`  ... and ${urlsToSubmit.length - 5} more`);
  }

  // Submit to Index Now
  const success = await submitToIndexNow(urlsToSubmit, apiKey, baseUrl);
  process.exit(success ? 0 : 1);
}

main().catch((error) => {
  console.error(`\n❌ Fatal error:`, error);
  process.exit(1);
});
