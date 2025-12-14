"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";

/**
 * Final CTA section component
 * Last conversion opportunity before footer
 * Includes waitlist form and compelling copy
 */
export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Be among the first to use it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-lg leading-8 text-muted-foreground"
        >
          We're opening early access to <span className="font-semibold text-foreground">TrendZero</span> for a limited number of founders.
          <br />
          Join the list and help shape the product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-md"
        >
          <WaitlistForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          No credit card required. Early users get special pricing.
        </motion.p>
      </div>
    </section>
  );
}

