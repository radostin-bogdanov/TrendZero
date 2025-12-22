import { MetadataRoute } from 'next';

/**
 * Sitemap configuration for SEO
 * Helps search engines discover and index all pages on the site
 * 
 * For a single-page landing site, we include the main page
 * Update lastModified with actual deployment dates for better SEO
 * 
 * This sitemap is automatically available at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - update this with your production domain
  // Ensure no trailing slash for consistency
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://trendzero.io').replace(/\/$/, '');

  // Current date for lastModified - ensure it's a valid Date object
  const currentDate = new Date();

  // Main landing page entry
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/saaS-solopreneurs-challenge-finding-project-ideas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-most-saas-trends-are-discovered-too-late`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return sitemapEntries;
}
