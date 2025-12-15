import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for SEO
 * Controls how search engines crawl and index the site
 * 
 * For a landing page, we typically want to allow all crawlers
 * and point them to the sitemap for better indexing
 */
export default function robots(): MetadataRoute.Robots {
  // Base URL - update this with your production domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trendzero.io';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', // Disallow API routes from being indexed
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

