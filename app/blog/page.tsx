import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — TrendZero",
  description:
    "Insights, tips, and stories about SaaS trends, solopreneurship, and building successful products.",
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Blog posts data
 * In a real application, this would come from a CMS or database
 */
const blogPosts = [
  {
    slug: "why-most-saas-trends-are-discovered-too-late",
    title: "Why Most SaaS Trends Are Discovered Too Late",
    excerpt:
      "Discover why SaaS founders consistently miss emerging trends and how early signal detection can give you a competitive advantage in product development and marketing.",
    date: "2025-12-22",
    readTime: "8 min",
  },
  {
    slug: "saaS-solopreneurs-challenge-finding-project-ideas",
    title: "The Challenge for SaaS Solopreneurs: Finding the Right Project Idea",
    excerpt:
      "Finding a project idea that the market truly needs is one of the biggest challenges facing solopreneurs in the SaaS industry.",
    date: "2025-12-15",
    readTime: "5 min",
  },
];

/**
 * Blog listing page
 * Displays all blog posts with links to individual articles
 */
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Insights, tips, and stories about SaaS trends, solopreneurship, and building successful products
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-lg border border-border bg-muted/30 p-6 transition-all hover:border-primary/50 hover:bg-muted/50"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-sm font-medium text-primary group-hover:underline">
                    Read more →
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/"
            className="text-primary hover:underline transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

