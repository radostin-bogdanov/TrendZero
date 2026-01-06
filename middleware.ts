import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to handle URL canonicalization redirects
 * 
 * This ensures proper SEO by redirecting to the canonical URL:
 * 1. HTTP → HTTPS (security and SEO best practice)
 * 2. www → non-www (canonical domain is trendzero.io without www)
 * 
 * Google Search Console flags pages with redirects, but these are
 * necessary redirects for proper SEO and domain canonicalization.
 * 
 * The redirects are only applied in production to avoid issues during
 * local development.
 */
export function middleware(request: NextRequest) {
  // Skip redirects in development (localhost)
  if (request.nextUrl.hostname.includes('localhost')) {
    return NextResponse.next();
  }

  // Only apply redirects in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  let needsRedirect = false;

  // 1. Redirect HTTP to HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    needsRedirect = true;
  }

  // 2. Redirect www to non-www (canonical domain is trendzero.io)
  // This ensures consistent domain usage for SEO
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace(/^www\./, '');
    needsRedirect = true;
  }

  // Perform redirect if needed
  if (needsRedirect) {
    // Use 301 (permanent redirect) for SEO
    // This tells search engines that the redirect is permanent
    // and they should update their index accordingly
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        // Cache headers help search engines understand this is permanent
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



