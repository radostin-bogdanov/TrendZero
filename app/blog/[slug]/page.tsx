import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * Blog posts data
 * In a real application, this would come from a CMS or database
 */
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
  }
> = {
  "saaS-solopreneurs-challenge-finding-project-ideas": {
    title: "The Challenge for SaaS Solopreneurs: Finding the Right Project Idea",
    excerpt:
      "Finding a project idea that the market truly needs is one of the biggest challenges facing solopreneurs in the SaaS industry.",
    date: "2025-12-15",
    readTime: "5 min",
    content: (
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          In today's dynamic tech world, SaaS solopreneurs face unique challenges. 
          One of the biggest is finding a project idea that is not only innovative 
          but also addresses a real market need. This is harder than it seems at first glance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Why is it so hard to find the right idea?
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          The market is saturated with thousands of SaaS products competing for users' 
          attention. Many solopreneurs start with an idea that sounds good on paper 
          but doesn't address a real need. The result? Months or even years of work 
          on a product that nobody wants to use.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-4">
          The problem isn't a lack of ideas—in fact, ideas are everywhere. The problem 
          is that it's difficult to distinguish which idea has potential and which is 
          just "good on paper." Many entrepreneurs focus on the technology and features 
          instead of starting with the problem they're solving.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Finding market need
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Finding an idea that the market truly needs requires a deep understanding 
          of the problems people face daily. This means:
        </p>

        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
          <li>Actively listening to future users and understanding their pain points</li>
          <li>Analyzing existing solutions and their shortcomings</li>
          <li>Identifying early signals for new trends and needs</li>
          <li>Testing hypotheses before investing months in development</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          The importance of early signals
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Successful SaaS solopreneurs don't wait for trends to become obvious. They 
          look for early signals of changes in user behavior, new needs in industries, 
          or problems that still don't have good solutions. This is the difference 
          between being next and being first.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-4">
          But how do you identify these early signals? This requires constant monitoring 
          of various sources—social networks, forums, competitive products, industry 
          reports. This is a time-consuming process that many solopreneurs can't afford.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Conclusion
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Finding the right idea for a SaaS project is a challenge that requires not 
          only creativity but also a systematic approach to identifying market needs. 
          Success comes from understanding problems before they become obvious, and 
          from the ability to see opportunities where others see only noise.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          That's why it's important to have tools and processes that help you identify 
          these early signals and make informed decisions about what to build next.
        </p>
      </div>
    ),
  },
};

/**
 * Generate metadata for blog post pages
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found — TrendZero Blog",
    };
  }

  return {
    title: `${post.title} — TrendZero Blog`,
    description: post.excerpt,
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate static params for blog posts
 * In a real application, this would fetch from a CMS or database
 */
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

/**
 * Individual blog post page
 * Displays the full content of a blog post
 */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <article className="max-w-none">
          {post.content}
        </article>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-primary hover:underline transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}

