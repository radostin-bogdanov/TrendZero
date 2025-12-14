import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrendZero — Know What's About to Trend",
  description:
    "Know what your users will care about next — before it's obvious. Track early signals and build what's about to trend.",
  keywords: ["SaaS", "trend prediction", "early access", "waitlist", "TrendZero"],
};

/**
 * Root layout component
 * Sets up dark mode by default and provides global structure
 * Includes TrendZero header with logo
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

