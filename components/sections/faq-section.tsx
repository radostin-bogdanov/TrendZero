"use client";

import { motion } from "framer-motion";

/**
 * FAQ section component
 * Displays frequently asked questions with answers
 * Includes JSON-LD schema for rich results in search engines
 */
export function FAQSection() {
  const faqs = [
    {
      question: "What sources do we track?",
      answer:
        "We track a wide range of early signal sources across the web, including developer forums, technical communities, product launch platforms, social media discussions, and emerging content patterns. Our system aggregates signals from multiple channels to identify trends before they become mainstream.",
    },
    {
      question: "How is this different from Google Trends / SEO tools?",
      answer:
        "Google Trends and traditional SEO tools show you what's already popular or trending. TrendZero focuses on early detection — we identify signals before they peak. While Google Trends tells you what's hot now, we show you what's about to become hot, giving you weeks or months of lead time to build or create content around emerging trends.",
    },
    {
      question: "How early are trends detected?",
      answer:
        "Our system detects trends weeks to months before they reach peak popularity. By tracking early signals and acceleration patterns, we can identify emerging topics while they're still in their growth phase, giving you a significant advantage in timing your products, content, or marketing efforts.",
    },
    {
      question: "Who is TrendZero not for?",
      answer:
        "TrendZero is not ideal for those looking for instant, already-popular trends or for businesses that need to react to trends that are already at their peak. If you're looking for what's trending right now rather than what will trend next, traditional trend analysis tools might be a better fit for your needs.",
    },
    {
      question: "When will early access open?",
      answer:
        "We're currently building TrendZero and will be opening early access soon. Join our waitlist to be notified as soon as we're ready to onboard early users. Early access members will get priority access and the opportunity to shape the product with their feedback.",
    },
  ];

  // FAQ schema for rich results (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema for FAQ rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            FAQ
          </motion.h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl bg-muted/50 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

