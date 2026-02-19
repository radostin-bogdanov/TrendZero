import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "./pricing-plans";

export const metadata: Metadata = {
  title: "Pricing — TrendZero",
  description:
    "Choose the right plan for your needs. Explorer from $29/mo, Builder $49/mo, Studio $79/mo, Founder+ $149/mo. Discover emerging SaaS trends before they peak.",
  openGraph: {
    title: "Pricing — TrendZero",
    description:
      "Choose the right plan. From $29/mo for Explorer to $149/mo for Founder+. Discover emerging SaaS trends.",
  },
};

/**
 * Pricing page
 * Full description of all plans with CTA to app.trendzero.io
 */
export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your workflow. All plans include emerging trend detection, AI explanations, and actionable insights.
          </p>
        </div>

        <PricingPlans />
      </div>
    </main>
  );
}
