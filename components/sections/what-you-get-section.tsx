"use client";

import { motion } from "framer-motion";

/**
 * What You Get section component
 * Lists features available in the first version
 * Uses checkmark icons for visual clarity
 */
export function WhatYouGetSection() {
  const features = [
    "Emerging SaaS trends that are accelerating right now",
    "Clear trend direction: growing, peaking, or fading",
    "Simple explanations you can trust",
    "Actionable suggestions for what to build or write next",
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          What you'll get with <span className="text-primary">TrendZero</span>
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 rounded-xl bg-muted/50 p-5"
            >
              <svg
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

