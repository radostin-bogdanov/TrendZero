import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";
import { WhoItsForSection } from "@/components/sections/who-its-for-section";
import { CredibilitySection } from "@/components/sections/credibility-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/sections/footer";

/**
 * Main landing page component
 * Composes all sections in the order specified by the BRD
 * Single-page layout optimized for conversion
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <WhoItsForSection />
      <CredibilitySection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

