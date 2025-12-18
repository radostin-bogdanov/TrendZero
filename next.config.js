/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  /**
   * Note: HTTP to HTTPS redirects are handled by middleware.ts
   * Most hosting platforms (Vercel, Netlify) also handle this automatically,
   * but the middleware ensures proper 301 redirects for SEO purposes.
   */
};

module.exports = nextConfig;

