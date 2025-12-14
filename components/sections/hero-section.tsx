"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

/**
 * Hero section component
 * Above-the-fold content with headline, subheadline, and primary CTA
 * Designed to communicate value in under 10 seconds
 * Enhanced with animated gradient background and floating elements
 */
export function HeroSection() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("final-cta");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 50, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform values for background elements
  const backgroundX = useTransform(x, (value) => value * 0.02);
  const backgroundY = useTransform(y, (value) => value * 0.02);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Animated gradient background - extends beyond section */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient with animation */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--primary) / 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--primary) / 0.1) 0px, transparent 50%)",
            backgroundSize: "200% 200%",
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0"
        />

        {/* Animated gradient orb 1 */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: backgroundX,
            y: backgroundY,
          }}
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Animated gradient orb 2 */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: useTransform(backgroundX, (v) => -v * 1.5),
            y: useTransform(backgroundY, (v) => v * 1.5),
          }}
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
        />

        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0.1,
              scale: 0.8,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          >
            <div
              className={`h-2 w-2 rounded-full bg-primary/30 ${
                i % 2 === 0 ? "blur-sm" : ""
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Content container - no backdrop blur, fully integrated */}
      <div className="relative mx-auto max-w-4xl text-center z-10">
        {/* Headline with enhanced animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl drop-shadow-sm"
        >
          Build and market what's about to trend —{" "}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            not what already peaked.
          </span>
        </motion.h1>

        {/* Subheadline with enhanced styling */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto mb-10 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl drop-shadow-sm"
        >
          <span className="font-semibold text-foreground">TrendZero</span> tracks early signals across the web and shows you which SaaS topics
          are accelerating — so you can act before everyone else.
        </motion.p>

        {/* CTA Button with hover glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToCTA}
              className="relative text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
            >
              Get early access
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth gradient fade to next section - extended and more gradual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
      />
    </section>
  );
}

