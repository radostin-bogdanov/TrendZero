"use client";

import { motion } from "framer-motion";

/**
 * How It Works section component
 * Three-step process explanation in minimal infographic style
 * Features vertical colored ribbons with icons and text
 */
export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We identify emerging topics in your SaaS niche by tracking early signals — not just popularity.",
      details: [
        "Monitor multiple data sources in real-time",
        "Detect acceleration patterns before they peak",
        "Filter out noise and focus on meaningful signals",
      ],
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      color: "from-emerald-500/20 to-green-600/20",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/20",
    },
    {
      number: "02",
      title: "Validate",
      description:
        "Each trend is validated across multiple sources and ranked by growth speed and consistency.",
      details: [
        "Cross-reference signals from different platforms",
        "Measure growth velocity and momentum",
        "Rank by reliability and potential impact",
      ],
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-red-500/20 to-rose-600/20",
      bgColor: "bg-red-500/5",
      borderColor: "border-red-500/20",
    },
    {
      number: "03",
      title: "Act",
      description:
        "You get a clear explanation and concrete suggestions for content, features, or positioning.",
      details: [
        "Understand why the trend matters for your niche",
        "Get specific action items you can implement",
        "Prioritize opportunities by potential impact",
      ],
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-purple-600/20 to-indigo-700/20",
      bgColor: "bg-purple-600/5",
      borderColor: "border-purple-600/20",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          How it works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 mx-auto max-w-3xl text-center text-lg leading-8 text-muted-foreground"
        >
          Our platform uses advanced algorithms to perform early SaaS trend detection using real market signals. We monitor conversations, engagement patterns, and growth indicators across multiple platforms simultaneously, identifying acceleration before it becomes obvious. The process is transparent, actionable, and designed for founders who need to move fast.
        </motion.p>

        {/* Process flow with enhanced focus */}
        <div className="relative my-16">
          {/* Process steps container */}
          <div className="relative grid gap-8 sm:gap-12 sm:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative group"
              >
                {/* Process step card with enhanced focus */}
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 ${step.borderColor} bg-gradient-to-br ${step.color} backdrop-blur-md shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
                >
                  {/* Enhanced overlay for better text readability */}
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
                  
                  {/* Step content */}
                  <div className="relative p-8 sm:p-10 text-foreground">
                    {/* Step number badge at top */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} text-sm font-bold text-foreground shadow-lg`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon with enhanced styling */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.2,
                        type: "spring",
                        stiffness: 150,
                      }}
                      className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} text-foreground shadow-lg`}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title with enhanced styling */}
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    {/* Main description */}
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Detailed breakdown */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + 0.4 + detailIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${step.color} opacity-60`} />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced shine effect on hover */}
                  <motion.div
                    initial={{ x: "-100%", skewX: -20 }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting lines between steps */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 pointer-events-none">
            <div className="relative h-full">
              {steps.slice(0, -1).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute top-0 h-full bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-full"
                  style={{
                    left: `calc(${(index + 1) * 33.333}% - 8%)`,
                    width: "16%",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-sm font-medium text-primary mb-3">
            No black boxes. Every trend comes with a clear "why".
          </p>
          <p className="text-sm text-muted-foreground">
            We show you the actual market signals behind each trend—where the data comes from, why it matters, and how you can use it. Early SaaS trend detection using real market signals means transparency, not mystery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

