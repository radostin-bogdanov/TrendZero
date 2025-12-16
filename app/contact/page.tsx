import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — AI Engineering LTD",
  description:
    "Get in touch with AI Engineering LTD. Find our office location in Sofia, Bulgaria, and contact us via email.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Contact Page
 * Displays company contact information, address with Google Maps,
 * email, and company background information
 */
export default function ContactPage() {
  // Google Maps embed URL for the address
  // Using the address: AI Engineering, 1715 Sofia, Sofia City Province, Bulgaria
  const mapAddress = encodeURIComponent(
    "AI Engineering, 1715 Sofia, Sofia City Province, Bulgaria"
  );
  // Using Google Maps embed without API key requirement
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with AI Engineering LTD
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Company Information */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">About AI Engineering LTD</h2>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="mb-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AI ENGINEERING LTD</strong> was founded in 2025 in Bulgaria. 
                We believe innovation doesn't have to come from giant corporations. With a lean, agile mindset, 
                we focus on building tools that are intuitive, meaningful, and ready to make a difference in everyday life.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    AI Engineering<br />
                    1715 Sofia<br />
                    Sofia City Province<br />
                    Bulgaria (member of EU)
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:info@ai-eng.tech"
                      className="text-primary hover:underline transition-colors"
                    >
                      info@ai-eng.tech
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Website
                  </h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.ai-eng.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors"
                    >
                      https://www.ai-eng.tech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Google Maps */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Find Us</h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={googleMapsEmbedUrl}
                title="AI Engineering LTD Location"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open in Google Maps →
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/"
            className="text-primary hover:underline transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

