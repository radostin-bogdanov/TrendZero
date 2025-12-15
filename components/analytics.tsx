"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Google Analytics 4 Component - Page View Tracker
 * Tracks page views on route changes using pathname only
 * (Search params tracking removed to avoid Suspense boundary issues)
 */
function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Track page views on route changes
  useEffect(() => {
    if (!gaMeasurementId || typeof window === "undefined") return;

    // Only track if gtag is available
    if (window.gtag) {
      window.gtag("config", gaMeasurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaMeasurementId]);

  return null;
}

/**
 * Google Analytics 4 Component
 * Handles GA4 initialization and page view tracking
 * 
 * Requires NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable
 * Format: G-XXXXXXXXXX
 */
export function GoogleAnalytics() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't render if GA ID is not provided
  if (!gaMeasurementId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 - Global Site Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Page view tracking on route changes */}
      <GoogleAnalyticsTracker />
    </>
  );
}

/**
 * Helper function to track custom events
 * Usage: trackEvent('button_click', { button_name: 'Get Early Access' })
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

/**
 * Helper function to track CTA clicks
 * Usage: trackCTAClick('hero_section', 'Get Early Access')
 */
export function trackCTAClick(location: string, ctaText: string) {
  trackEvent("cta_click", {
    location,
    cta_text: ctaText,
  });
}

/**
 * Helper function to track waitlist signups
 * Usage: trackWaitlistSignup('hero_section')
 */
export function trackWaitlistSignup(location: string) {
  trackEvent("waitlist_signup", {
    location,
  });
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

