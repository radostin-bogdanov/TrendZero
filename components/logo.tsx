"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * TrendZero Logo Component
 * Uses Logo2-2.png image with optional TrendZero text
 * Matches the brand identity with blue "Trend" and white "Zero"
 */
export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-auto",
    md: "h-16 w-auto",
    lg: "h-20 w-auto",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative ${sizeClasses[size]}`}
      >
        <Image
          src="/Logo2-2.png"
          alt="TrendZero Logo"
          width={200}
          height={60}
          className="h-full w-auto object-contain"
          priority
        />
      </motion.div>

      {/* Optional TrendZero text - only shown if showText is true and logo doesn't already include text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-bold ${textSizes[size]} tracking-tight`}
        >
          <span className="text-primary">Trend</span>
          <span className="text-foreground">Zero</span>
        </motion.div>
      )}
    </div>
  );
}

