"use client";

import { Logo } from "@/components/logo";
import { motion } from "framer-motion";

/**
 * Header component with TrendZero logo
 * Minimal header for landing page with sticky positioning
 */
export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <Logo size="lg" showText={false} />
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </a>
          <a
            href="/#final-cta"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Get Early Access
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

