import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Engineering LTD",
  description:
    "AI Engineering LTD Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Privacy Policy Page
 * GDPR (EU) and CCPA (USA) compliant privacy policy
 * Covers data collection, usage, rights, and contact information
 */
export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "December 2024";

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
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
            <p className="mb-4 text-muted-foreground">
              Welcome to services provided by AI Engineering LTD ("we," "our," or "us"). 
              AI Engineering LTD is the data controller responsible for this website and 
              the collection and processing of your personal information. We are committed 
              to protecting your privacy and ensuring transparency about how we collect, 
              use, and protect your personal information. This Privacy Policy explains our 
              practices regarding data collection and usage in compliance with the General 
              Data Protection Regulation (GDPR) for users in the European Union and the 
              California Consumer Privacy Act (CCPA) for California residents.
            </p>
            <p className="text-muted-foreground">
              By using our website and services, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Information We Collect
            </h2>
            <p className="mb-4 text-muted-foreground">
              We collect the following types of personal information:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Email Address</strong> - Required for waitlist signup
                and early access notifications
              </li>
              <li>
                <strong>Role Information</strong> - Optional information about
                your role (founder, marketer, developer, or other) to help us
                understand our audience
              </li>
              <li>
                <strong>Usage Data</strong> - Automatically collected
                information including IP address, browser type, device
                information, pages visited, and time spent on pages through
                Google Analytics 4 (anonymized)
              </li>
              <li>
                <strong>Technical Data</strong> - Source information
                (automatically set as "landing") and timestamps for waitlist
                signups
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-muted-foreground">
              We use the collected information for the following purposes:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Waitlist Management</strong> - To manage early access
                signups and notify you when the product becomes available
              </li>
              <li>
                <strong>Product Development</strong> - To understand our
                audience and improve our product based on user needs
              </li>
              <li>
                <strong>Analytics</strong> - To analyze website usage, improve
                user experience, and optimize our marketing efforts
              </li>
              <li>
                <strong>Communication</strong> - To respond to your inquiries
                and provide customer support
              </li>
            </ul>
          </section>

          {/* Legal Basis for Processing (GDPR) */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Legal Basis for Processing (GDPR)
            </h2>
            <p className="mb-4 text-muted-foreground">
              For users in the European Union, we process your personal data
              based on the following legal grounds:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Consent</strong> - When you voluntarily provide your
                email address for waitlist signup, you consent to our
                processing of this data
              </li>
              <li>
                <strong>Legitimate Interest</strong> - We have a legitimate
                interest in analyzing website usage to improve our services and
                user experience
              </li>
            </ul>
            <p className="text-muted-foreground">
              You have the right to withdraw your consent at any time by
              contacting us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              .
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Data Sharing</h2>
            <p className="mb-4 text-muted-foreground">
              We do not sell your personal information to third parties. We may
              share your data with the following service providers who assist us
              in operating our website and conducting our business:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Supabase</strong> - Database hosting and data storage
                services. Supabase may process data in the EU or USA depending on
                your selected region
              </li>
              <li>
                <strong>Google Analytics</strong> - Website analytics and usage
                tracking. Google Analytics data is anonymized and aggregated
              </li>
              <li>
                <strong>Vercel</strong> - Website hosting platform. Vercel may
                process data in various regions globally
              </li>
            </ul>
            <p className="text-muted-foreground">
              All service providers are contractually obligated to protect your
              data and use it only for the purposes we specify. We do not share
              your data with any other third parties without your explicit
              consent, except as required by law.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
            <p className="mb-4 text-muted-foreground">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Waitlist Data</strong> - We retain email addresses and
                associated information for 2 years from the date of collection,
                or until you request deletion, whichever comes first
              </li>
              <li>
                <strong>Analytics Data</strong> - Google Analytics retains data
                according to its own retention policies (typically 14-26 months
                for standard accounts)
              </li>
            </ul>
            <p className="text-muted-foreground">
              After the retention period expires, we will securely delete or
              anonymize your personal information.
            </p>
          </section>

          {/* Your Rights (GDPR) */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Your Rights Under GDPR (EU Users)
            </h2>
            <p className="mb-4 text-muted-foreground">
              If you are located in the European Union, you have the following
              rights regarding your personal data:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Right to Access</strong> - You have the right to
                request copies of your personal data
              </li>
              <li>
                <strong>Right to Rectification</strong> - You have the right to
                request correction of inaccurate or incomplete data
              </li>
              <li>
                <strong>Right to Erasure</strong> - You have the right to
                request deletion of your personal data ("right to be forgotten")
              </li>
              <li>
                <strong>Right to Restrict Processing</strong> - You have the
                right to request restriction of processing your personal data
              </li>
              <li>
                <strong>Right to Data Portability</strong> - You have the right
                to receive your data in a structured, commonly used format
              </li>
              <li>
                <strong>Right to Object</strong> - You have the right to object
                to processing of your personal data
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              . We will respond to your request within 30 days.
            </p>
            <p className="text-muted-foreground">
              You also have the right to lodge a complaint with your local data
              protection authority if you believe we have not handled your
              personal data in accordance with GDPR.
            </p>
          </section>

          {/* Your Rights (CCPA) */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Your Rights Under CCPA (California Residents)
            </h2>
            <p className="mb-4 text-muted-foreground">
              If you are a California resident, you have the following rights:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Right to Know</strong> - You have the right to request
                information about the categories and specific pieces of
                personal information we collect, use, and disclose
              </li>
              <li>
                <strong>Right to Delete</strong> - You have the right to request
                deletion of your personal information
              </li>
              <li>
                <strong>Right to Opt-Out of Sale</strong> - We do not sell your
                personal information. If we were to sell personal information
                in the future, you would have the right to opt-out
              </li>
              <li>
                <strong>Non-Discrimination</strong> - We will not discriminate
                against you for exercising your CCPA rights
              </li>
            </ul>
            <p className="text-muted-foreground">
              To exercise your CCPA rights, please contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              . We will respond to your request within 45 days.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Cookies and Tracking</h2>
            <p className="mb-4 text-muted-foreground">
              We use Google Analytics 4 to track website usage and improve user
              experience. Google Analytics uses cookies and similar tracking
              technologies to collect information about your interactions with
              our website.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Analytics Cookies</strong> - Help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              You can control cookies through your browser settings. However,
              disabling cookies may affect the functionality of our website.
            </p>
            <p className="text-muted-foreground">
              For more information about Google Analytics and how to opt-out,
              visit{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out
              </a>
              .
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
            <p className="mb-4 text-muted-foreground">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Secure database storage through Supabase</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
            </ul>
            <p className="text-muted-foreground">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your data, we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              International Data Transfers
            </h2>
            <p className="mb-4 text-muted-foreground">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              data protection laws that differ from those in your country.
            </p>
            <p className="mb-4 text-muted-foreground">
              Specifically:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Supabase may process data in the EU or USA depending on your
                selected region
              </li>
              <li>
                Google Analytics processes data globally, including in the USA
              </li>
              <li>
                Vercel may process data in various regions globally
              </li>
            </ul>
            <p className="text-muted-foreground">
              We ensure that appropriate safeguards are in place to protect your
              data in accordance with this Privacy Policy and applicable data
              protection laws, including Standard Contractual Clauses (SCCs) for
              EU data transfers.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Children's Privacy</h2>
            <p className="mb-4 text-muted-foreground">
              Our services are not intended for individuals under the age of 16
              (or 13 in the USA). We do not knowingly collect personal
              information from children. If you are a parent or guardian and
              believe your child has provided us with personal information,
              please contact us immediately.
            </p>
            <p className="text-muted-foreground">
              If we become aware that we have collected personal information from
              a child without parental consent, we will take steps to delete
              that information promptly.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4 text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>
                Sending an email notification to registered users (if applicable)
              </li>
            </ul>
            <p className="text-muted-foreground">
              We encourage you to review this Privacy Policy periodically to stay
              informed about how we protect your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mb-4 rounded-lg border border-border bg-muted/30 p-6">
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Company:</strong> AI Engineering LTD
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Address:</strong> 1715 Sofia, Sofia City Province, Bulgaria
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Email:</strong>{" "}
                <a
                  href="mailto:info@ai-eng.tech"
                  className="text-primary hover:underline"
                >
                  info@ai-eng.tech
                </a>
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Website:</strong>{" "}
                <a
                  href="https://ai-eng.tech"
                  className="text-primary hover:underline"
                >
                  https://ai-eng.tech
                </a>
              </p>
            </div>
            <p className="text-muted-foreground">
              For GDPR-related inquiries, you can also contact your local data
              protection authority. For CCPA-related inquiries, California
              residents can contact the California Attorney General's Office.
            </p>
          </section>

          {/* Footer */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

