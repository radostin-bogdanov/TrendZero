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
    <section className="relative border-y border-border/50 bg-muted/30 px-4 pt-4 sm:pt-8 pb-16 sm:pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Most SaaS teams make decisions too late.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-lg leading-8 text-muted-foreground"
        >
          In today's fast-moving SaaS landscape, timing is everything. While you're researching what worked last quarter, your competitors are already building for what's trending now. The gap between spotting a trend and capitalizing on it is where opportunities are lost and market share shifts. Without the ability to identify SaaS trends early, you're always playing catch-up.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4 text-lg text-muted-foreground"
        >
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-6 text-lg leading-8 text-muted-foreground"
        >
          The problem isn't lack of data, it's having too much of the wrong kind. Historical analytics tell you what already happened, not what's about to happen. By the time a topic appears in your SEO tools or becomes a trending hashtag, the early adopters have already moved on. You need signals that point forward, not backward.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl font-semibold"
        >
          Guessing is expensive. Being late is worse.
        </motion.p>
      </div>
    </section>
  );
}

