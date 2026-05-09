import { submitToIndexNow } from '@/lib/indexNow';

/**
 * POST /api/index-now
 * 
 * Submits URLs to Google's Index Now API to trigger immediate indexing.
 * Secured with INDEX_NOW_KEY environment variable.
 * 
 * Request body:
 * {
 *   "urls": ["https://remodelingcontractorsc.com/page1", "https://remodelingcontractorsc.com/page2"],
 *   "key": "your-index-now-key"
 * }
 * 
 * Response:
 * { "success": true, "message": "Submitted 2 URLs for indexing", "count": 2 }
 */
export async function POST(request) {
  try {
    const { urls, key } = await request.json();

    // Validate the request
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return Response.json(
        { success: false, error: 'URLs array is required and must not be empty' },
        { status: 400 }
      );
    }

    // Validate the key
    const expectedKey = process.env.INDEX_NOW_KEY;
    if (!expectedKey) {
      return Response.json(
        { success: false, error: 'Index Now is not configured on this server' },
        { status: 500 }
      );
    }

    if (key !== expectedKey) {
      return Response.json(
        { success: false, error: 'Invalid Index Now key' },
        { status: 401 }
      );
    }

    // Validate URLs
    const validUrls = urls.filter((url) => {
      try {
        new URL(url);
        return url.startsWith('https://remodelingcontractorsc.com');
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return Response.json(
        { success: false, error: 'No valid URLs from remodelingcontractorsc.com provided' },
        { status: 400 }
      );
    }

    // Submit to Index Now
    const success = await submitToIndexNow(validUrls, 'remodelingcontractorsc.com');

    if (success) {
      return Response.json(
        { 
          success: true, 
          message: `Submitted ${validUrls.length} URL(s) to Index Now (Bing + Google)`,
          count: validUrls.length,
          urls: validUrls,
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        { success: false, error: 'Index Now submission failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Index Now API error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/index-now
 * Returns current Index Now configuration status (no sensitive data)
 */
export async function GET() {
  const hasKey = !!process.env.INDEX_NOW_KEY;
  
  return Response.json({
    status: hasKey ? 'configured' : 'not-configured',
    endpoint: 'https://remodelingcontractorsc.com/api/index-now',
    message: hasKey
      ? 'Index Now is configured. POST URLs to this endpoint for indexing.'
      : 'INDEX_NOW_KEY environment variable is not set.',
  });
}
