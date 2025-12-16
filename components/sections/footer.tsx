import { Logo } from "@/components/logo";
import Link from "next/link";

/**
 * Footer component
 * Simple footer with essential links and copyright
 * Minimal design to keep focus on conversion
 * Features TrendZero logo
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <Logo size="md" showText={false} />

          {/* Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            aria-label="Footer navigation"
          >
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} TrendZero
          </div>
        </div>
      </div>
    </footer>
  );
}

