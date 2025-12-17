"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * Header component with TrendZero logo
 * Minimal header for landing page with sticky positioning
 * Includes responsive mobile menu with hamburger icon
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - responsive size */}
        <a href="/" className="flex items-center">
          <div className="md:hidden">
            <Logo size="md" showText={false} />
          </div>
          <div className="hidden md:block">
            <Logo size="lg" showText={false} />
          </div>
        </a>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden items-center gap-6 md:flex">
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
          <Button asChild size="sm" className="shadow-md">
            <a href="/#final-cta">Get Early Access</a>
          </Button>
        </nav>

        {/* Mobile: CTA Button + Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* CTA Button - always visible on mobile */}
          <Button asChild size="sm" className="shadow-md">
            <a href="/#final-cta">Get Early Access</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 transition-colors hover:bg-muted"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-foreground"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-foreground"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-foreground"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - slides down from top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background/95 backdrop-blur-md md:hidden"
            >
              <div className="container mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6">
                <a
                  href="/#how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  How it works
                </a>
                <a
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Blog
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

