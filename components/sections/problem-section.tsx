"use client";

import { motion } from "framer-motion";

/**
 * Problem section component
 * Highlights the pain points that the product solves
 * Uses list format for easy scanning
 */
export function ProblemSection() {
  const problems = [
    "You scroll Reddit, Twitter, and Product Hunt hoping to spot ideas",
    "SEO tools show what was popular months ago",
    "Competitors ship features you just started thinking about",
    "Content and roadmap decisions are mostly guesses",
  ];

  return (
    <section className="relative border-y border-border/50 bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Smooth transition from hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Most SaaS teams make decisions too late.
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4 text-lg text-muted-foreground"
        >
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 text-primary">•</span>
              <span>{problem}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl font-semibold"
        >
          Guessing is expensive. Being late is worse.
        </motion.p>
      </div>
    </section>
  );
}

