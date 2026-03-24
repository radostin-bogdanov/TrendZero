"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

/**
 * Pricing section component
 * Brief overview of plans with link to full pricing page
 * Replaces Early Access Founder Special with live platform pricing
 */
export function PricingSection() {
  const plans = [
    { name: "Explorer", price: "$29", period: "/mo", annual: "$278/yr", audience: "For getting started", popular: false },
    { name: "Builder", price: "$49", period: "/mo", annual: "$470/yr", audience: "Solo founders", popular: true },
    { name: "Studio", price: "$79", period: "/mo", annual: "$758/yr", audience: "Small SaaS teams", popular: false },
    { name: "Founder+", price: "$149", period: "/mo", annual: "$1,430/yr", audience: "Serious founders", popular: false },
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include full trend details, AI explanations, and actionable insights.
          </p>
        </motion.div>

        {/* Pricing overview - 4 plan cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`group relative rounded-xl border p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/8 ${
                plan.popular
                  ? "border-primary/35 bg-primary/5 shadow-md shadow-primary/8"
                  : "border-border/50 bg-background/50 hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Popular
                </span>
              )}
              <h3 className="mb-1 font-semibold text-foreground">{plan.name}</h3>
              <p className="mb-2 text-xs text-muted-foreground">{plan.audience}</p>
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {plan.annual} billed annually
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - View full pricing or Get Started */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/pricing">See full pricing</Link>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto border border-primary/40 shadow-lg shadow-primary/18 hover:shadow-xl hover:shadow-primary/25">
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
      </div>
    </section>
  );
}
