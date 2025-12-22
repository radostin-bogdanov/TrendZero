import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to handle HTTP to HTTPS redirects
 * 
 * This ensures that all HTTP requests are redirected to HTTPS,
 * which is important for SEO and security. Google Search Console
 * flags pages with redirects, but this is the proper way to handle
 * HTTP to HTTPS migration.
 * 
 * The redirect is only applied in production to avoid issues during
 * local development.
 */
export function middleware(request: NextRequest) {
  // Only redirect HTTP to HTTPS in production
  // Skip redirect in development (localhost) or if already HTTPS
  if (
    process.env.NODE_ENV === 'production' &&
    request.nextUrl.protocol === 'http:' &&
    !request.nextUrl.hostname.includes('localhost')
  ) {
    // Get the HTTPS URL
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = 'https:';
    
    // Redirect with 301 (permanent redirect) for SEO
    return NextResponse.redirect(httpsUrl, {
      status: 301,
      headers: {
        // Add cache headers to help search engines understand this is permanent
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

/**
 * Middleware matcher configuration
 * Apply middleware to all routes except:
 * - API routes (handled separately if needed)
 * - Static files (images, fonts, etc.)
 * - Next.js internal files (_next)
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)',
  ],
};


