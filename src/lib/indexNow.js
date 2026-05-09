import fs from 'fs';
import path from 'path';

// Index Now API endpoints
const BING_INDEX_NOW_API = 'https://www.bing.com/indexnow';
const GOOGLE_INDEX_NOW_API = 'https://www.google.com/indexnow';

/**
 * Generate a random Index Now key for securing submissions
 * Store this in .env.local or environment variables
 */
export function generateIndexNowKey() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Submit URLs to Index Now API (Bing and Google)
 * This notifies search engines about new/updated content immediately
 */
export async function submitToIndexNow(urls, host = 'remodelingcontractorsc.com') {
  const key = process.env.INDEX_NOW_KEY;

  if (!key) {
    console.error('INDEX_NOW_KEY not set in environment variables');
    return false;
  }

  if (!Array.isArray(urls) || urls.length === 0) {
    console.error('URLs array is empty');
    return false;
  }

  const payload = {
    host,
    key,
    keyLocation: `https://${host}/.index-now-key.txt`,
    urlList: urls,
  };

  try {
    // Submit to Bing Index Now
    const bingResponse = await fetch(BING_INDEX_NOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!bingResponse.ok) {
      console.warn(`Bing Index Now submission status: ${bingResponse.status}`);
    }

    // Submit to Google Index Now (same endpoint, handled by Google's proxy)
    const googleResponse = await fetch(GOOGLE_INDEX_NOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!googleResponse.ok) {
      console.warn(`Google Index Now submission status: ${googleResponse.status}`);
    }

    console.log(`✓ Index Now submitted ${urls.length} URLs to Bing and Google`);
    return true;
  } catch (error) {
    console.error('Index Now submission error:', error.message);
    return false;
  }
}

/**
 * Get all public URLs from the site (useful for full-site reindexing)
 */
export function getAllPublicUrls(baseUrl = 'https://remodelingcontractorsc.com') {
  const urls = [
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

  return urls.map((path) => `${baseUrl}${path}`);
}
