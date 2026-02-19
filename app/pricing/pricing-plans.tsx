"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

const plans = [
  {
    name: "Explorer",
    priceMonthly: 29,
    priceAnnual: 278,
    audience: "For getting started",
    niches: 1,
    trends: "Top 10",
    updateFreq: "Every 14 days (bi-weekly)",
    confidenceGate: "0.35",
    features: [
      "Full trend details",
      "AI explanations and actions",
      "Historical data + projections",
      "More trends shown (lower confidence threshold)",
    ],
  },
  {
    name: "Builder",
    priceMonthly: 49,
    priceAnnual: 470,
    audience: "Solo founders (Popular plan)",
    niches: 3,
    trends: "Top 20",
    updateFreq: "Weekly",
    confidenceGate: "0.40",
    features: [
      "Everything in Explorer",
      "Data export (CSV/JSON)",
      "Priority support",
      "Higher quality filter (fewer, higher-confidence trends)",
    ],
  },
  {
    name: "Studio",
    priceMonthly: 79,
    priceAnnual: 758,
    audience: "Small SaaS teams",
    niches: 5,
    trends: "Top 20",
    updateFreq: "2x per week",
    confidenceGate: "0.45",
    features: [
      "Everything in Builder",
      "Early access to new niches",
      "Data export (CSV/JSON)",
      "Even tighter quality filter",
    ],
  },
  {
    name: "Founder+",
    priceMonthly: 149,
    priceAnnual: 1430,
    audience: "Serious founders",
    niches: "Unlimited",
    trends: "Top 20",
    updateFreq: "Daily",
    confidenceGate: "0.50",
    features: [
      "Everything in Studio",
      "API access",
      "Custom keywords",
      "Highest quality filter (only best-supported trends)",
    ],
  },
];

/**
 * Pricing plans grid with full plan details
 * Comparison table and individual plan cards
 */
export function PricingPlans() {
  return (
    <>
      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 overflow-x-auto"
      >
        <h2 className="mb-6 text-2xl font-bold">Plan comparison</h2>
        <table className="w-full min-w-[600px] border-collapse rounded-xl border border-border overflow-hidden">
          <thead>
            <tr className="bg-muted/50">
              <th className="border-b border-border p-4 text-left font-semibold">Plan</th>
              <th className="border-b border-border p-4 text-left font-semibold">Niches</th>
              <th className="border-b border-border p-4 text-left font-semibold">Trends</th>
              <th className="border-b border-border p-4 text-left font-semibold">Update frequency</th>
              <th className="border-b border-border p-4 text-left font-semibold">Confidence gate</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name} className="border-b border-border last:border-0">
                <td className="p-4 font-medium">{plan.name}</td>
                <td className="p-4 text-muted-foreground">{plan.niches}</td>
                <td className="p-4 text-muted-foreground">{plan.trends}</td>
                <td className="p-4 text-muted-foreground">{plan.updateFreq}</td>
                <td className="p-4 text-muted-foreground">{plan.confidenceGate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Confidence gate:</strong> Minimum confidence below which trends are hidden. Higher value = fewer but higher-quality trends.
        </p>
      </motion.div>

      {/* Plan cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-border bg-muted/20 p-8"
          >
            <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
            <p className="mb-6 text-sm text-muted-foreground">{plan.audience}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.priceMonthly}</span>
              <span className="text-muted-foreground">/month</span>
              <p className="mt-1 text-sm text-muted-foreground">
                ${plan.priceAnnual}/year (save ~20%)
              </p>
            </div>

            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <svg
                  className="ml-2 h-4 w-4 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Annual discount note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center text-sm text-muted-foreground"
      >
        Annual plans give approximately 20% discount compared to monthly billing.
      </motion.p>
    </>
  );
}
