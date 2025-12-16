import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Engineering LTD",
  description:
    "Terms of Service for TrendZero. Read our terms and conditions governing the use of our services in compliance with Bulgarian and EU law.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Terms of Service Page
 * Comprehensive terms compliant with:
 * - Bulgarian Consumer Protection Act (Закон за защита на потребителите)
 * - Bulgarian E-Commerce Act (Закон за електронната търговия)
 * - EU e-Commerce Directive (2000/31/EC)
 * - EU Digital Services Act (DSA)
 * - EU AI Act (Regulation 2024/1689)
 * - GDPR (General Data Protection Regulation)
 * 
 * Protects both company interests and user rights
 */
export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">1. Introduction and Acceptance</h2>
            <p className="mb-4 text-muted-foreground">
              Welcome to TrendZero, a service provided by AI Engineering LTD ("we," "our," "us," or "Company"). 
              These Terms of Service ("Terms") govern your access to and use of our website, services, and 
              any related applications (collectively, the "Service").
            </p>
            <p className="mb-4 text-muted-foreground">
              By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. 
              If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p className="text-muted-foreground">
              These Terms are governed by Bulgarian law and comply with applicable European Union legislation, 
              including but not limited to the General Data Protection Regulation (GDPR), the e-Commerce Directive, 
              the Digital Services Act (DSA), and the EU AI Act.
            </p>
          </section>

          {/* Company Information */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">2. Company Information</h2>
            <div className="mb-4 rounded-lg border border-border bg-muted/30 p-6">
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Company Name:</strong> AI Engineering LTD
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong className="text-foreground">Registered Address:</strong> 1715 Sofia, Sofia City Province, Bulgaria
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
              In accordance with Bulgarian law (Закон за електронната търговия), we provide the above information 
              to ensure transparency and enable you to contact us regarding any matters related to our Service.
            </p>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">3. Description of Service</h2>
            <p className="mb-4 text-muted-foreground">
              TrendZero is an early SaaS trend detection platform that uses artificial intelligence and machine 
              learning technologies to analyze market signals and identify emerging trends in the SaaS industry. 
              Our Service provides:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Early detection of SaaS-related trends and topics</li>
              <li>Analysis of market signals from various online sources</li>
              <li>Trend acceleration tracking and validation</li>
              <li>Actionable insights and recommendations</li>
              <li>Waitlist management for early access users</li>
            </ul>
            <p className="text-muted-foreground">
              The Service is currently in early access/pre-launch phase. We reserve the right to modify, suspend, 
              or discontinue any aspect of the Service at any time, with or without notice.
            </p>
          </section>

          {/* AI Act Compliance */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">4. AI Act Compliance and AI System Information</h2>
            <p className="mb-4 text-muted-foreground">
              In compliance with Regulation (EU) 2024/1689 (EU AI Act), we provide the following information 
              about our AI systems:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>AI System Purpose:</strong> Our Service uses AI technologies to analyze market signals, 
                detect patterns, and identify emerging trends in the SaaS industry.
              </li>
              <li>
                <strong>AI System Type:</strong> Our AI systems are designed for trend analysis and pattern 
                recognition. They do not involve high-risk AI applications as defined in the EU AI Act.
              </li>
              <li>
                <strong>Transparency:</strong> We are committed to transparency regarding our use of AI. 
                While our algorithms analyze data to identify trends, we provide explanations for identified 
                trends and their significance.
              </li>
              <li>
                <strong>Human Oversight:</strong> Our AI systems operate under human oversight. All trend 
                identifications and recommendations are reviewed and validated before being presented to users.
              </li>
              <li>
                <strong>Data Quality:</strong> We take measures to ensure the quality and reliability of data 
                used by our AI systems, in accordance with Article 10 of the EU AI Act.
              </li>
              <li>
                <strong>Accuracy and Robustness:</strong> We implement appropriate measures to ensure the accuracy, 
                robustness, and cybersecurity of our AI systems, as required by Article 15 of the EU AI Act.
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              <strong>User Rights Regarding AI:</strong> You have the right to be informed when you are interacting 
              with an AI system. Our Service uses AI technologies, and we clearly indicate this in our communications 
              and service descriptions. You may request information about the logic, significance, and consequences 
              of our AI systems' processing of your data.
            </p>
            <p className="text-muted-foreground">
              If you have concerns about our use of AI or wish to exercise your rights under the EU AI Act, 
              please contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              .
            </p>
          </section>

          {/* Eligibility and Account */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">5. Eligibility and Account Requirements</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Age Requirement:</strong> You must be at least 16 years old to use our Service. If you are 
              under 16, you may only use our Service with the consent and supervision of a parent or legal guardian. 
              In some jurisdictions, the minimum age may be higher (e.g., 18 years).
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Legal Capacity:</strong> By using our Service, you represent and warrant that:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not prohibited from using the Service under applicable laws</li>
              <li>All information you provide is accurate and current</li>
              <li>You will maintain the security of your account credentials</li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Waitlist Signup:</strong> During the early access phase, you may sign up for our waitlist 
              by providing your email address. By signing up, you consent to receive communications from us 
              regarding the Service, including early access notifications and product updates.
            </p>
          </section>

          {/* User Obligations */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">6. User Obligations and Acceptable Use</h2>
            <p className="mb-4 text-muted-foreground">
              You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree 
              NOT to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Use automated systems (bots, scrapers) to access the Service without our express written permission</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use the Service to transmit any malicious code, viruses, or harmful data</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
              <li>Collect or harvest information about other users without their consent</li>
              <li>Use the Service for any commercial purpose without our prior written consent</li>
            </ul>
            <p className="text-muted-foreground">
              Violation of these terms may result in immediate termination of your access to the Service and may 
              subject you to legal liability.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">7. Intellectual Property Rights</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Our Rights:</strong> The Service, including all content, features, functionality, software, 
              algorithms, designs, text, graphics, logos, and other materials, is owned by AI Engineering LTD or 
              its licensors and is protected by Bulgarian and international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable 
              license to access and use the Service for your personal or internal business purposes, subject to 
              these Terms. This license does not include any right to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Resell or commercially use the Service or its content</li>
              <li>Copy, modify, or create derivative works based on the Service</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
              <li>Use any data mining, robots, or similar data gathering or extraction methods</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              <strong>Your Content:</strong> If you submit any content, feedback, or suggestions to us, you grant 
              us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, 
              adapt, publish, translate, and distribute such content for any purpose.
            </p>
            <p className="text-muted-foreground">
              <strong>Trademarks:</strong> "TrendZero" and our logos are trademarks of AI Engineering LTD. You may 
              not use our trademarks without our prior written permission.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">8. Privacy and Data Protection</h2>
            <p className="mb-4 text-muted-foreground">
              Your privacy is important to us. Our collection, use, and protection of your personal data is governed 
              by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you 
              consent to the collection and use of your information as described in our Privacy Policy.
            </p>
            <p className="mb-4 text-muted-foreground">
              In compliance with GDPR and Bulgarian data protection laws (Закон за защита на личните данни), you have 
              certain rights regarding your personal data, including:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
            <p className="text-muted-foreground">
              For more information about your rights and how we process your data, please review our Privacy Policy 
              or contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              .
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">9. Disclaimers and Limitations</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Service Availability:</strong> We strive to provide a reliable Service, but we do not guarantee 
              that the Service will be available at all times or free from errors, interruptions, or defects. The 
              Service is provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Trend Predictions:</strong> Our Service provides trend analysis and predictions based on available 
              data and AI algorithms. However, we do not guarantee the accuracy, completeness, or reliability of any 
              trend predictions or insights provided by the Service. Trends are predictions based on available data and 
              should not be considered as financial, investment, or business advice.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>No Warranties:</strong> To the fullest extent permitted by applicable law, we disclaim all 
              warranties, express or implied, including but not limited to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties regarding the accuracy, reliability, or timeliness of the Service</li>
              <li>Warranties that the Service will meet your requirements or expectations</li>
              <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              <strong>Third-Party Content:</strong> Our Service may contain links to third-party websites or services. 
              We are not responsible for the content, privacy practices, or availability of such third-party sites. 
              Your use of third-party sites is at your own risk.
            </p>
            <p className="text-muted-foreground">
              <strong>Limitation of Liability:</strong> To the maximum extent permitted by Bulgarian and EU law, in no 
              event shall AI Engineering LTD, its directors, employees, or agents be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, use, 
              goodwill, or other intangible losses, resulting from your use or inability to use the Service.
            </p>
          </section>

          {/* Consumer Rights (Bulgarian Law) */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">10. Consumer Rights Under Bulgarian Law</h2>
            <p className="mb-4 text-muted-foreground">
              If you are a consumer as defined under Bulgarian Consumer Protection Act (Закон за защита на потребителите), 
              you have the following rights:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Right to Information:</strong> You have the right to receive clear and comprehensive information 
                about the Service, its features, and any associated costs before entering into an agreement.
              </li>
              <li>
                <strong>Right to Withdraw:</strong> For distance contracts, you have the right to withdraw from the 
                contract within 14 days without giving any reason, in accordance with Directive 2011/83/EU and Bulgarian 
                law. This right applies to paid services. For free services (such as waitlist signup), withdrawal rights 
                may not apply.
              </li>
              <li>
                <strong>Right to Complain:</strong> You have the right to file a complaint with the Commission for 
                Consumer Protection (Комисия за защита на потребителите) if you believe your consumer rights have been 
                violated.
              </li>
              <li>
                <strong>Right to Redress:</strong> You have the right to seek redress for any damages suffered as a 
                result of our failure to comply with consumer protection laws.
              </li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Contact for Consumer Complaints:</strong> If you are a consumer and have a complaint, you may 
              contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              {" "}or file a complaint with the Commission for Consumer Protection at{" "}
              <a
                href="https://kzp.bg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://kzp.bg
              </a>
              .
            </p>
          </section>

          {/* Pricing and Payment */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">11. Pricing and Payment Terms</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Current Status:</strong> The Service is currently in early access/pre-launch phase. Waitlist 
              signup is free, and no payment is required at this time.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Future Pricing:</strong> We reserve the right to introduce pricing for the Service in the future. 
              If and when we introduce paid plans:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>All pricing will be clearly displayed before you commit to a paid plan</li>
              <li>Prices will be in US Dollars (USD), Bulgarian Lev (BGN), or Euro (EUR), as applicable</li>
              <li>Prices include applicable VAT where required by law</li>
              <li>We will provide at least 30 days' notice before implementing any pricing changes for existing users</li>
              <li>Payment terms and methods will be clearly communicated</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              <strong>Refunds:</strong> Refund policies will be clearly stated at the time of purchase. In accordance 
              with Bulgarian consumer protection law, consumers have the right to withdraw from distance contracts 
              within 14 days, subject to certain exceptions.
            </p>
            <p className="text-muted-foreground">
              <strong>Tax Information:</strong> All prices are exclusive of applicable taxes unless otherwise stated. 
              You are responsible for any taxes applicable to your use of the Service in your jurisdiction.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">12. Termination</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Termination by You:</strong> You may stop using the Service at any time. If you have an account, 
              you may request deletion of your account and associated data by contacting us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              .
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your access to the Service 
              at any time, with or without cause or notice, for any reason, including but not limited to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Non-payment of fees (if applicable)</li>
              <li>Extended periods of inactivity</li>
              <li>At our sole discretion, for any other reason</li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately 
              cease. We may delete your account and associated data, subject to our data retention policies and legal 
              obligations. Provisions of these Terms that by their nature should survive termination will survive, 
              including but not limited to intellectual property rights, disclaimers, and limitations of liability.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">13. Indemnification</h2>
            <p className="mb-4 text-muted-foreground">
              You agree to indemnify, defend, and hold harmless AI Engineering LTD, its directors, employees, agents, 
              and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including 
              reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any content you submit, post, or transmit through the Service</li>
            </ul>
            <p className="text-muted-foreground">
              This indemnification obligation will survive termination of these Terms and your use of the Service.
            </p>
          </section>

          {/* Governing Law and Dispute Resolution */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">14. Governing Law and Dispute Resolution</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws 
              of the Republic of Bulgaria, without regard to its conflict of law provisions. However, nothing in these 
              Terms shall limit your rights as a consumer under mandatory provisions of Bulgarian or EU consumer protection law.
            </p>
            <p className="mb-4 text-muted-foreground">
              <strong>Dispute Resolution:</strong> In the event of any dispute arising out of or relating to these Terms 
              or the Service:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>For Consumers:</strong> If you are a consumer, you have the right to bring proceedings in the 
                courts of your country of residence or in the courts of Bulgaria. You may also use the European Online 
                Dispute Resolution platform at{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </li>
              <li>
                <strong>For Businesses:</strong> Any disputes shall be subject to the exclusive jurisdiction of the 
                courts of Sofia, Bulgaria.
              </li>
              <li>
                <strong>Mediation:</strong> Before initiating formal legal proceedings, both parties agree to attempt 
                to resolve disputes through good faith negotiation and, if necessary, mediation.
              </li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Class Action Waiver:</strong> To the extent permitted by law, you agree that any disputes will 
              be resolved individually and not as part of a class action.
            </p>
          </section>

          {/* Digital Services Act Compliance */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">15. Digital Services Act (DSA) Compliance</h2>
            <p className="mb-4 text-muted-foreground">
              In compliance with Regulation (EU) 2022/2065 (Digital Services Act), we provide the following information:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Service Type:</strong> We operate as an online platform providing information society services. 
                Our Service does not currently qualify as a "very large online platform" under the DSA.
              </li>
              <li>
                <strong>Content Moderation:</strong> While our Service primarily provides trend analysis, we reserve the 
                right to remove or restrict access to any content that violates these Terms or applicable laws.
              </li>
              <li>
                <strong>Transparency Reporting:</strong> If we become subject to DSA transparency reporting requirements, 
                we will comply with such obligations.
              </li>
              <li>
                <strong>User Rights:</strong> Users have the right to be informed about content moderation decisions 
                affecting them and to appeal such decisions.
              </li>
            </ul>
            <p className="text-muted-foreground">
              For DSA-related inquiries or to report illegal content, please contact us at{" "}
              <a
                href="mailto:info@ai-eng.tech"
                className="text-primary hover:underline"
              >
                info@ai-eng.tech
              </a>
              .
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">16. Changes to These Terms</h2>
            <p className="mb-4 text-muted-foreground">
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, 
              we will:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Post the updated Terms on this page</li>
              <li>Update the "Last updated" date at the top of these Terms</li>
              <li>Notify registered users via email (if applicable) of material changes</li>
              <li>Provide at least 30 days' notice for material changes affecting paid services</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              <strong>Your Continued Use:</strong> Your continued use of the Service after any changes to these Terms 
              constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must 
              stop using the Service.
            </p>
            <p className="text-muted-foreground">
              <strong>Material Changes:</strong> For material changes that adversely affect your rights, you may have 
              the right to terminate your use of the Service and receive a refund (if applicable) in accordance with 
              applicable consumer protection laws.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">17. Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent 
              jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, 
              and enforceable, or if such modification is not possible, severed from these Terms. The validity, legality, 
              and enforceability of the remaining provisions shall not be affected.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">18. Entire Agreement</h2>
            <p className="text-muted-foreground">
              These Terms, together with our Privacy Policy and any other legal notices published on the Service, 
              constitute the entire agreement between you and AI Engineering LTD regarding your use of the Service 
              and supersede all prior or contemporaneous communications, proposals, and agreements, whether oral or written, 
              relating to the subject matter hereof.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">19. Contact Information</h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
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
              For consumer complaints, you may also contact the Commission for Consumer Protection (Комисия за защита 
              на потребителите) at{" "}
              <a
                href="https://kzp.bg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://kzp.bg
              </a>
              .
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

