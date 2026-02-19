import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trendzero.io";

export const metadata: Metadata = {
  title: "TrendZero — Discover Emerging SaaS Trends | Now Live",
  description:
    "TrendZero is live at app.trendzero.io. Discover emerging SaaS trends before they peak. Pricing from $29/mo. Track acceleration signals and build what's about to trend.",
  keywords: [
    "SaaS trend detection",
    "early SaaS trends",
    "trend prediction",
    "market signals",
    "SaaS analytics",
    "trend analysis",
    "pricing",
    "TrendZero",
    "live platform",
  ],
  authors: [{ name: "TrendZero" }],
  creator: "TrendZero",
  publisher: "TrendZero",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TrendZero — Discover Emerging SaaS Trends | Now Live",
    description:
      "Live at app.trendzero.io. Spot emerging SaaS topics before they peak. Pricing from $29/mo.",
    url: baseUrl,
    siteName: "TrendZero",
    images: [
      {
        url: `${baseUrl}/Logo2-2.png`,
        width: 1200,
        height: 630,
        alt: "TrendZero Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendZero — Discover Emerging SaaS Trends | Now Live",
    description:
      "Live at app.trendzero.io. Discover emerging SaaS trends. Pricing from $29/mo.",
    images: [`${baseUrl}/Logo2-2.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root layout component
 * Sets up dark mode by default and provides global structure
 * Includes TrendZero header with logo
 * Adds structured data (JSON-LD) for better SEO indexing
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO - Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TrendZero",
    url: baseUrl,
    logo: `${baseUrl}/Logo2-2.png`,
    description:
      "Track acceleration signals to spot emerging SaaS topics. Know what's about to trend before it's obvious.",
    sameAs: [],
  };

  // Structured data for SEO - WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrendZero",
    url: baseUrl,
    description:
      "Identify SaaS trends early by tracking acceleration signals. Build what's about to trend before your competitors.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Structured data for SEO - SoftwareApplication schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrendZero",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://app.trendzero.io",
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
    },
    description:
      "SaaS trend detection platform that tracks acceleration signals and trend momentum. Identify emerging trends before they peak.",
    featureList: [
      "Early SaaS trend detection",
      "Real market signal analysis",
      "Trend acceleration tracking",
      "Actionable insights",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {/* Subtle noise overlay for premium depth */}
        <div className="noise-overlay" aria-hidden />
        {/* Google Analytics 4 */}
        <GoogleAnalytics />
        
        {/* Structured data for better SEO indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}

