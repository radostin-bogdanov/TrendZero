"use client";

import { motion } from "framer-motion";

/**
 * Credibility section component
 * Light social proof without fake testimonials
 * Uses subtle messaging for pre-launch phase
 */
export function CredibilitySection() {
  const points = [
    "TrendZero is built by SaaS founders, for SaaS founders",
    "Designed for fast decisions, not dashboards",
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          {points.map((point, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="text-lg text-muted-foreground"
            >
              {point}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

