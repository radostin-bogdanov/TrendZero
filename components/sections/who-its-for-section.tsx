"use client";

import { motion } from "framer-motion";

/**
 * Who It's For / Not For section component
 * Clearly defines target audience and who should skip
 * Uses two-column layout for comparison
 */
export function WhoItsForSection() {
  const builtFor = [
    "Solo founders",
    "Indie hackers",
    "Small SaaS teams",
    "Early-stage products",
  ];

  const notFor = [
    "Enterprise companies",
    "Teams looking for historical reports",
    "People who want perfect predictions",
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Who it's for
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
          {/* Built for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Built for
            </h3>
            <ul className="space-y-3">
              {builtFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
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
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="mb-4 text-xl font-semibold text-muted-foreground">
              Not for
            </h3>
            <ul className="space-y-3">
              {notFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-lg font-medium"
        >
          If speed and direction matter more than perfection — this is for you.
        </motion.p>
      </div>
    </section>
  );
}

