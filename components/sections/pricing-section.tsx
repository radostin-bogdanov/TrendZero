"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * Pricing section component
 * Early Access Founder Special pricing with coming soon badge
 * Highlights benefits and parameters of the early access phase
 */
export function PricingSection() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("final-cta");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Early Access Priority",
      description: "Be among the first to discover trends before they peak",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Founder Special Pricing",
      description: "Lock in $29/month for 12 months - 50% off future pricing",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Shape the Product",
      description: "Your feedback directly influences what we build next",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "7-Day Free Trial",
      description: "Cancel anytime",
    },
  ];

  const parameters = [
    { label: "Price", value: "$29/month" },
    { label: "Annual Option", value: "$290/year (save $58)" },
    { label: "Limited Spots", value: "50 founders only" },
    { label: "Locked Price", value: "Locked for 12 months" },
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Coming Soon
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Early Access: Founder Special
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join the first 50 founders and lock in pricing for 12 months. Help us shape TrendZero while getting early access to trend insights.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 shadow-xl"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

          <div className="relative p-8 sm:p-12">
            {/* Price Display */}
            <div className="mb-8 text-center">
              <div className="mb-2 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">$29</span>
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                or <span className="font-semibold text-foreground">$290/year</span> (save $58)
              </p>
            </div>

            {/* Parameters Grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border/50 bg-muted/30 p-6">
              {parameters.map((param, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {param.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-foreground">
                    {param.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="mb-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 rounded-lg bg-background/50 p-4"
                >
                  <div className="mt-0.5 shrink-0 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Button
                size="lg"
                onClick={scrollToCTA}
                className="w-full text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
              >
                Join Early Access Waitlist
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Limited to 50 founders • Lock in pricing for 12 months
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">What's included:</span> All emerging SaaS trends • Trend direction analysis • Actionable suggestions • Priority support • Product influence
          </p>
        </motion.div>
      </div>
    </section>
  );
}

