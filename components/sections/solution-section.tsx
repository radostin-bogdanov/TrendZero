"use client";

import { motion } from "framer-motion";

/**
 * Solution section component
 * Presents the product as the answer to the problems
 * Lists key benefits for quick scanning
 */
export function SolutionSection() {
  const benefits = [
    "Spot trends weeks or months earlier",
    "Make product and content decisions with confidence",
    "Focus on opportunities before they're crowded",
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          We show you what's about to matter.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-lg leading-8 text-muted-foreground"
        >
          <span className="font-semibold text-foreground">TrendZero</span> helps you identify SaaS trends early by tracking acceleration signals from across the web. Instead of waiting for topics to peak, we analyze acceleration patterns, cross-reference multiple data sources, and spot emerging SaaS topics before they become mainstream. Our platform tracks trend velocity and momentum—not just popularity metrics—to show you what's gaining traction right now.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-lg leading-8 text-muted-foreground"
        >
          Every trend comes with context: why it matters, who it's relevant for, and concrete actions you can take. Whether you're planning your next feature, writing content, or positioning your product, you'll know what to focus on before your competitors do. This is how you spot emerging SaaS topics early—the difference between following trends and leading them.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 rounded-xl bg-muted/50 p-4"
            >
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
              <span className="text-lg">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

