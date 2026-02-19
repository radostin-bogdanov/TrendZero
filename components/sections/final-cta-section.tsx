"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

/**
 * Final CTA section component
 * Launch CTA block - direct call to action to app
 * Replaces waitlist form with Get Started button
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
          className="font-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Start discovering trends today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-lg leading-8 text-muted-foreground"
        >
          <span className="font-semibold text-foreground">TrendZero</span> is live. Explore plans and get started.
        </motion.p>

        {/* Platform screenshot showcasing TrendZero's interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 overflow-hidden rounded-xl border border-border shadow-lg"
        >
          <Image
            src="/platform-screen1.png"
            alt="TrendZero platform interface showing emerging SaaS trends"
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild size="lg" className="border-2 border-primary/50 shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40">
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
