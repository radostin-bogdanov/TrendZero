import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trendzero.io";

export const metadata: Metadata = {
  title: "TrendZero — Early SaaS Trend Detection Using Real Market Signals",
  description:
    "Early SaaS trend detection using real market signals. Know what your users will care about next — before it's obvious. Track early signals and build what's about to trend.",
  keywords: [
    "SaaS trend detection",
    "early SaaS trends",
    "trend prediction",
    "market signals",
    "SaaS analytics",
    "trend analysis",
    "early access",
    "waitlist",
    "TrendZero",
  ],
  authors: [{ name: "TrendZero" }],
  creator: "TrendZero",
  publisher: "TrendZero",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TrendZero — Early SaaS Trend Detection Using Real Market Signals",
    description:
      "Early SaaS trend detection using real market signals. Know what your users will care about next — before it's obvious.",
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
    title: "TrendZero — Early SaaS Trend Detection Using Real Market Signals",
    description:
      "Early SaaS trend detection using real market signals. Know what's about to trend before it's obvious.",
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
      "Early SaaS trend detection using real market signals. Know what's about to trend before it's obvious.",
    sameAs: [],
  };

  // Structured data for SEO - WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrendZero",
    url: baseUrl,
    description:
      "Early SaaS trend detection using real market signals. Track early signals and build what's about to trend.",
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Early SaaS trend detection platform using real market signals. Identify emerging trends before they peak.",
    featureList: [
      "Early SaaS trend detection",
      "Real market signal analysis",
      "Trend acceleration tracking",
      "Actionable insights",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
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

