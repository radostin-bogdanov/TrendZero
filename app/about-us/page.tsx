import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — AI Engineering LTD",
  description:
    "Learn about AI Engineering LTD, the company behind TrendZero. We create smart apps and software powered by artificial intelligence to make everyday life easier, faster, and smarter.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * About Us Page
 * Provides information about AI Engineering LTD and its mission
 * Connects the company story to TrendZero product
 */
export default function AboutUsPage() {
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
            About Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the team behind <span className="font-semibold text-foreground">TrendZero</span>
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Hey, I'm Radostin 👋</h2>
            <p className="mb-4 text-muted-foreground">
              I'm the founder behind <strong className="text-foreground">AI Engineering LTD</strong>, and I build smart apps powered by AI. My goal? Make tools that actually help people — not just big corporations with huge budgets.
            </p>
            <p className="mb-4 text-muted-foreground">
              Here's the thing: I believe AI should be accessible to everyone. You shouldn't need a PhD in machine learning or a team of data scientists to benefit from intelligent software. That's why I'm building tools that feel intuitive, solve real problems, and just... work.
            </p>
            <p className="mb-4 text-muted-foreground">
              I'm a small team (okay, mostly just me right now), but I've got big ambitions. I want to prove that advanced AI can be helpful, enjoyable, and actually useful for regular people. No corporate BS, no overcomplicated features — just tools that make your life easier.
            </p>
            <p className="text-muted-foreground">
              For me, AI isn't about flashy tech demos — it's about empowering people. And honestly? I'm just getting started.
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">What I Believe</h2>
            <p className="mb-4 text-muted-foreground">
              Here's my philosophy: AI should make your life better, not more complicated. Every time I start building something, I ask myself: <em>"Will this actually help someone, or am I just adding another tool to their already-crowded toolbox?"</em>
            </p>
            <p className="mb-4 text-muted-foreground">
              I'm not interested in building flashy demos that look cool but don't actually solve problems. I want to create tools that:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">Just work</strong> — No complicated setup, no learning curve. If you need a manual, I've failed.</li>
              <li><strong className="text-foreground">Solve real problems</strong> — The stuff you actually struggle with, not theoretical use cases</li>
              <li><strong className="text-foreground">Feel smart</strong> — AI that actually helps, not AI that's just there for marketing</li>
              <li><strong className="text-foreground">Look good</strong> — Because life's too short for ugly software</li>
            </ul>
          </section>

          {/* TrendZero: Our First Product */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              Why I Built <span className="text-primary">TrendZero</span>
            </h2>
            <p className="mb-4 text-muted-foreground">
              <span className="font-semibold text-foreground">TrendZero</span> came from my own frustration. As a founder, I kept asking myself: <em>"How do I know what's about to trend before everyone else jumps on it?"</em> Sound familiar?
            </p>
            <p className="mb-4 text-muted-foreground">
              Here's the problem: by the time Google Trends or Twitter shows you what's hot, it's already too late. The market's crowded, everyone's doing it, and you're just another fish in the pond. I wanted to change that.
            </p>
            <p className="mb-4 text-muted-foreground">
              So I built <span className="font-semibold text-foreground">TrendZero</span> — an AI-powered tool that analyzes early signals across the web (developer forums, product launches, social discussions, you name it) and shows you what's <em>about to trend</em>, not what's already trending. Think of it as your early warning system, giving you weeks or months of lead time to build, create, or position yourself before everyone else catches on.
            </p>
            <p className="mb-4 text-muted-foreground">
              But here's what makes it different: when you know what's accelerating before it peaks, you can actually:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Build products people actually want (before they know they want them)</li>
              <li>Create content that hits before your audience even knows they care</li>
              <li>Make decisions based on early signals, not late-stage FOMO</li>
              <li>Find opportunities before they get crowded</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              The best part? You don't need to be a data scientist or have a huge team to use it. I built <span className="font-semibold text-foreground">TrendZero</span> for founders like me, marketers, content creators — basically anyone who's tired of being late to the party.
            </p>
            <p className="mb-4 text-muted-foreground">
              I've spent months refining the AI to actually understand context and spot real signals (not just noise). The result? Insights that are actually useful, not just interesting. When you see something in <span className="font-semibold text-foreground">TrendZero</span>, you know it's worth paying attention to.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">TrendZero</span> is my way of proving that AI can help you see further, act faster, and build smarter — without needing a team of engineers or a massive budget. It's your early warning system, built by someone who's been in your shoes.
            </p>
          </section>

          {/* How We Build */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">How I Build</h2>
            <p className="mb-4 text-muted-foreground">
              Being a solo founder (for now) means I can move fast. No bureaucracy, no endless meetings, no "let's circle back on that." I just build. Here's what I prioritize:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">Ship fast</strong> — Build it, test it, ship it. Then iterate based on what you actually tell me</li>
              <li><strong className="text-foreground">Quality matters</strong> — But perfect is the enemy of done. I'd rather ship something useful than something perfect</li>
              <li><strong className="text-foreground">You come first</strong> — Your needs drive what I build, not vanity metrics or "cool" features</li>
              <li><strong className="text-foreground">No BS</strong> — I'll tell you what I'm building and why. No corporate speak, no marketing fluff</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              My approach? Use AI where it actually helps, not just because it's trendy. Sometimes the best solution is simple. Sometimes it needs some smart AI. I figure out which is which, and build accordingly.
            </p>
            <p className="mb-4 text-muted-foreground">
              When I was building <span className="font-semibold text-foreground">TrendZero</span>, I spent months researching where trends actually start, testing different algorithms, and figuring out how to separate real signals from noise. I analyzed thousands of data points, tried different ML models, and kept refining until I could actually spot what matters. The result? A tool that doesn't just dump data on you — it gives you insights you can actually use.
            </p>
            <p className="mb-4 text-muted-foreground">
              Every feature in <span className="font-semibold text-foreground">TrendZero</span> follows the same process: I start with a real problem I've faced (or you've told me about), build a quick prototype, test it, and keep refining until it feels natural. If you need a manual to use it, I've failed. Great software should feel obvious from the first click.
            </p>
            <p className="text-muted-foreground">
              The best part? When I find a better way to do something, I don't need to wait for quarterly planning or get approval from five different people. I just build it, test it, and ship it. Your feedback shapes everything — and that's exactly how it should be.
            </p>
          </section>

          {/* Our Commitment */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">My Promise to You</h2>
            <p className="mb-4 text-muted-foreground">
              Look, I'm building this for people like you — founders, creators, builders who are trying to make something cool. Here's what I promise:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">Your data stays yours</strong> — I only collect what I need, and I protect it like it's my own. No selling your info, no sketchy stuff.</li>
              <li><strong className="text-foreground">I'll be honest</strong> — I'll tell you how things work and what I'm doing with your data. No hidden agendas.</li>
              <li><strong className="text-foreground">I listen</strong> — Your feedback actually matters. If you tell me something sucks, I'll fix it. If you want a feature, I'll consider it (and probably build it if it makes sense).</li>
              <li><strong className="text-foreground">It works for everyone</strong> — You don't need to be a tech wizard to use my stuff. If it's not simple, I've messed up.</li>
            </ul>
            <p className="text-muted-foreground">
              I'm not building <span className="font-semibold text-foreground">TrendZero</span> in some ivory tower. Your input shapes what I build next. Your feedback makes the AI smarter. Your success stories keep me going. This isn't just a product — it's a partnership. And I take that seriously.
            </p>
          </section>

          {/* The Future */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">What's Next</h2>
            <p className="mb-4 text-muted-foreground">
              <span className="font-semibold text-foreground">TrendZero</span> is just the start. I'm constantly thinking about new ways to use AI to solve real problems — the kind you actually face, not theoretical ones. My roadmap for <span className="font-semibold text-foreground">TrendZero</span> is shaped by what you tell me: deeper insights, better trend analysis, maybe even industry-specific features. And I'm always exploring new ideas that fit my mission: making AI useful for regular people.
            </p>
            <p className="mb-4 text-muted-foreground">
              But here's the thing: I'm not rushing. I'd rather build something great than something fast. Every product I release has to meet the same bar: it has to be useful, intuitive, and actually help you. I'm building for the long haul, not the next funding round. That means solid infrastructure, thoughtful design, and constant improvement based on what you actually need.
            </p>
            <p className="mb-4 text-muted-foreground">
              As I grow (and hopefully add some awesome people to the team), my commitment stays the same: build AI tools that feel natural, solve real problems, and actually make your life easier. No flashy demos. No complex systems only engineers can use. Just products that help you work smarter and make better decisions.
            </p>
            <p className="text-muted-foreground">
              I'm just getting started, and honestly? I'm excited you're here. Whether you're an early adopter of <span className="font-semibold text-foreground">TrendZero</span> or just checking us out for the first time, thanks for being part of this journey. Together, we're proving that AI can be accessible, helpful, and actually useful — one product at a time. And yeah, I'm just getting started.
            </p>
          </section>

          {/* Founder Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Meet the Founder</h2>
            <div className="mb-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Founder Image */}
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 sm:h-56 sm:w-56">
                <Image
                  src="/RBimage.jpg"
                  alt="Radostin Bogdanov - Founder of AI Engineering LTD and TrendZero"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
              
              {/* Founder Information */}
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold">
                  Radostin Bogdanov
                </h3>
                <p className="mb-4 text-lg font-medium text-primary">
                  Founder & CEO, AI Engineering LTD
                </p>
                <p className="mb-4 text-muted-foreground">
                  <span className="font-semibold text-foreground">TrendZero</span> came from my own frustration. As a founder, I kept hitting the same wall: by the time I noticed a trend, it was already too late. Everyone else had jumped on it, the market was crowded, and I was just another fish in the pond. After years of building products and watching opportunities slip away, I realized there had to be a better way — using AI to spot those early signals before they become obvious.
                </p>
                <p className="mb-4 text-muted-foreground">
                  I'm a software engineer by trade, but my real passion is making AI accessible. I started AI Engineering LTD because I wanted to build tools that actually help people — not overwhelm them with complexity. <span className="font-semibold text-foreground">TrendZero</span> is my first shot at that: combining powerful AI with an interface that doesn't make you want to pull your hair out.
                </p>
                <p className="text-muted-foreground">
                  "I've always believed the best tech is invisible — it just works. With <span className="font-semibold text-foreground">TrendZero</span>, I'm not building another trend tool. I'm building something that helps founders, marketers, and creators make better decisions by giving them insights they can actually use. That's what keeps me going every day."
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Let's Talk</h2>
            <p className="mb-4 text-muted-foreground">
              Got questions? Feedback? Ideas? I'd love to hear from you. Want to know more about <span className="font-semibold text-foreground">TrendZero</span>? Have thoughts on what I should build next? Or just want to say hi? Hit me up — I actually read every message.
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ai-eng.tech
                </a>
              </p>
            </div>
            <p className="text-muted-foreground">
              For product inquiries or support related to <span className="font-semibold text-foreground">TrendZero</span>, please reach out through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
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

