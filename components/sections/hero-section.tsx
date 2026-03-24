"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/components/analytics";
import { APP_URL } from "@/lib/config";
import { WaveDivider } from "./wave-divider";

/**
 * Hero section component
 * Split layout on desktop: text left, video right
 * Punchier headline, gradient badge, stronger CTA
 */
export function HeroSection() {
  const handleGetStartedClick = () => {
    trackCTAClick("hero_section", "Get Started");
    window.open(APP_URL, "_blank", "noopener,noreferrer");
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLElement>(null);

  const springConfig = { damping: 50, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
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
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.07) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--primary) / 0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--primary) / 0.05) 0px, transparent 50%)",
            backgroundSize: "200% 200%",
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: backgroundX, y: backgroundY }}
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/6 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(backgroundX, (v) => -v * 1.5),
            y: useTransform(backgroundY, (v) => v * 1.5),
          }}
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            className="absolute"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 30}%` }}
          >
            <div className={`h-2 w-2 rounded-full bg-primary/18 ${i % 2 === 0 ? "blur-sm" : ""}`} />
          </motion.div>
        ))}
      </div>

      {/* Content - split layout on lg */}
      <div className="relative mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Now live badge - gradient border, shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/25 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-1.5 text-sm font-semibold text-primary shadow-md shadow-primary/8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Now live
                <span className="absolute inset-0 -z-10 rounded-full bg-primary/12 blur-lg opacity-40" />
              </span>
            </motion.div>

            {/* Punchier headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-heading mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="block">Spot SaaS Trends</span>
              <span className="bg-gradient-to-r from-primary via-primary to-primary/75 bg-clip-text text-transparent">
                Before Everyone Else
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto mb-8 max-w-xl text-lg leading-8 text-muted-foreground lg:mx-0"
            >
              <span className="font-semibold text-foreground">TrendZero</span> tracks early signals across the web and shows you which SaaS topics are accelerating, so you can act first.
            </motion.p>

            {/* CTA - gradient border, stronger shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 lg:items-start"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <Button
                  size="lg"
                  onClick={handleGetStartedClick}
                  className="relative overflow-hidden border border-primary/40 bg-primary px-8 text-base font-semibold shadow-lg shadow-primary/18 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                >
                  Get Started
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
                <a href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  View Pricing
                </a>
              </motion.div>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure
              </p>
            </motion.div>
          </div>

          {/* Right: Video - stacked on mobile, side-by-side on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-10 flex-1 lg:mt-0 lg:min-w-0"
          >
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-black/20 ring-1 ring-primary/8">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src="https://www.youtube.com/embed/YFraolt5VqE"
                  title="Platform Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider to Problem section */}
      <WaveDivider />
    </section>
  );
}
