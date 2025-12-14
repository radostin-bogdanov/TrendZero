# BRD – Pre-Launch Landing Page (Early Access)
Version: 1.0  
Date: 2025-12-13  
Owner: Product / Marketing  
Audience: Product, Engineering (Cursor), Marketing  
Goal: Early access signups (waitlist)

---

## 1. Purpose

The purpose of this landing page is to **validate demand and collect early access signups** for the SaaS Trend Prediction Platform.

This page is:
- Mobile-first
- Lightweight and fast
- Conversion-focused
- Built to communicate value in under 10 seconds

Primary CTA: **Get early access**

---

## 2. Target Audience (ICP)

- Solo founders
- Indie hackers
- Small SaaS teams (1–10 people)
- B2C or PLG B2B SaaS
- Pre-PMF → Early PMF

This page is NOT for:
- Enterprise companies
- Analysts or researchers
- Users looking for historical reports

---

## 3. Core Value Proposition

### One-sentence promise (above the fold)

**Know what your users will care about next — before it’s obvious.**

Alternative:
**Build and market what’s about to trend, not what already peaked.**

---

## 4. Page Structure (Single Page)

1. Hero section (headline + CTA)
2. Problem
3. Solution
4. How it works
5. What you get
6. Who it’s for / not for
7. Credibility
8. Final CTA
9. Footer

---

## 5. Section-by-Section Requirements & Copy

---

## 5.1 Hero Section

### Goal
Immediately communicate value and push the primary CTA.

### Headline
**Build and market what’s about to trend — not what already peaked.**

### Subheadline
We track early signals across the web and show you which SaaS topics are accelerating — so you can act before everyone else.

### Primary CTA
Button: **Get early access**

Microcopy:
Early access · No spam · Cancel anytime

---

## 5.2 Problem Section

### Headline
Most SaaS teams make decisions too late.

### Copy
- You scroll Reddit, Twitter, and Product Hunt hoping to spot ideas  
- SEO tools show what was popular months ago  
- Competitors ship features you just started thinking about  
- Content and roadmap decisions are mostly guesses  

**Guessing is expensive. Being late is worse.**

---

## 5.3 Solution Section

### Headline
We show you what’s about to matter.

### Copy
Our platform detects early acceleration in SaaS-related topics by analyzing real signals from across the web — then explains why they matter and what you should do next.

### Benefits
- Spot trends weeks or months earlier
- Make product and content decisions with confidence
- Focus on opportunities before they’re crowded

---

## 5.4 How It Works

### Headline
How it works

### Step 1 – Discover
We identify emerging topics in your SaaS niche by tracking early signals — not just popularity.

### Step 2 – Validate
Each trend is validated across multiple sources and ranked by growth speed and consistency.

### Step 3 – Act
You get a clear explanation and concrete suggestions for content, features, or positioning.

Trust note:
No black boxes. Every trend comes with a clear “why”.

---

## 5.5 What You Get

### Headline
What you’ll get in the first version

- Emerging SaaS trends that are accelerating right now
- Clear trend direction: growing, peaking, or fading
- Simple explanations you can trust
- Actionable suggestions for what to build or write next

---

## 5.6 Who It’s For / Not For

### Built for
- Solo founders
- Indie hackers
- Small SaaS teams
- Early-stage products

### Not for
- Enterprise companies
- Teams looking for historical reports
- People who want perfect predictions

Closing line:
If speed and direction matter more than perfection — this is for you.

---

## 5.7 Credibility Section (Light)

Options (choose 1–2):
- Built by SaaS founders, for SaaS founders
- Designed for fast decisions, not dashboards
- Tested with early-stage SaaS teams

(No fake testimonials in pre-launch.)

---

## 5.8 Final CTA Section

### Headline
Be among the first to use it.

### Copy
We’re opening early access to a limited number of founders.  
Join the list and help shape the product.

### CTA
Button: **Get early access**

Microcopy:
No credit card required. Early users get special pricing.

---

## 5.9 Footer

- Product name
- Contact email
- Privacy Policy (placeholder)
- Terms of Service (placeholder)
- © 2025

---

## 6. Functional Requirements

### FR-LP-1 – Waitlist Signup
- Email input (required)
- Optional role selector (founder / marketer)
- Submit → success message

### FR-LP-2 – Confirmation
- Inline success confirmation
- Optional confirmation email

### FR-LP-3 – Analytics
- Track page views
- Track CTA clicks
- Track signups

---

## 7. Technical Requirements

### Recommended Stack
- Next.js
- Tailwind CSS
- Server Action or API route for signup
- Supabase table: `waitlist_signups`

### Table: waitlist_signups
- id
- email
- source (landing)
- created_at

---

## 8. Design Guidelines

- Mobile-first
- Large, readable typography
- Plenty of whitespace
- Single primary accent color
- No carousels
- No heavy animations
- CTA always visible or easily reachable

---

## 9. Copy Tone & Style

- Clear and confident
- Founder-to-founder language
- No buzzwords
- Short paragraphs
- Easy to scan

---

## 10. Definition of Done

- Page loads fast on mobile
- Message is clear in under 10 seconds
- CTA is visible above the fold
- Signup works end-to-end
