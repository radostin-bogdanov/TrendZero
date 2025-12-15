import { MetadataRoute } from 'next';

/**
 * Sitemap configuration for SEO
 * Helps search engines discover and index all pages on the site
 * 
 * For a single-page landing site, we include the main page
 * Update lastModified with actual deployment dates for better SEO
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - update this with your production domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  // Current date for lastModified
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Landing pages typically don't change frequently
      priority: 1.0, // Highest priority for the main landing page
    },
    // Add more pages here as your site grows
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}

