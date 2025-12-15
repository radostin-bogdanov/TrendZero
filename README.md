# TrendZero - Landing Page

A beautiful, conversion-focused pre-launch landing page built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimalistic UI following 2025 design trends
- 🌙 **Dark Mode**: First-class dark mode support
- 📱 **Mobile-First**: Fully responsive design optimized for mobile devices
- ⚡ **Fast**: Lightweight and optimized for performance
- ♿ **Accessible**: WCAG 2.2 AA compliant with ARIA support
- 🎭 **Animated**: Subtle micro-animations using Framer Motion
- 📝 **Waitlist**: Integrated Supabase waitlist signup functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui patterns with Radix UI primitives
- **Animations**: Framer Motion
- **Database**: Supabase
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account and project

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Update the following variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `NEXT_PUBLIC_SITE_URL`: Your production site URL (default: https://trendzero.io)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 Measurement ID (optional, format: G-XXXXXXXXXX)

3. Set up Supabase database:

Create a table named `waitlist_signups` with the following schema:

```sql
create table waitlist_signups (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  role text,
  source text default 'landing',
  created_at timestamp with time zone default now()
);
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── waitlist/          # API route for waitlist signups
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx              # Root layout component
│   └── page.tsx               # Main landing page
├── components/
│   ├── sections/              # Landing page sections
│   │   ├── hero-section.tsx
│   │   ├── problem-section.tsx
│   │   ├── solution-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── what-you-get-section.tsx
│   │   ├── who-its-for-section.tsx
│   │   ├── credibility-section.tsx
│   │   ├── final-cta-section.tsx
│   │   └── footer.tsx
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   └── waitlist-form.tsx      # Waitlist signup form
├── lib/
│   ├── supabase.ts           # Supabase client configuration
│   └── utils.ts              # Utility functions
└── package.json
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors */
}
```

### Content

All copy and content can be found in the section components under `components/sections/`. Update these files to modify the landing page content.

### Contact Email

Update the contact email in `components/sections/footer.tsx`:

```tsx
<a href="mailto:your-email@example.com">Contact</a>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## Analytics

Google Analytics 4 (GA4) is integrated and ready to use:

1. **Set up GA4**: Get your Measurement ID from [Google Analytics](https://analytics.google.com/)
2. **Add to environment variables**: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to your `.env.local`
3. **Automatic tracking**: The following events are automatically tracked:
   - Page views (on route changes)
   - CTA clicks (`cta_click` event with location and button text)
   - Waitlist signups (`waitlist_signup` event with location)

### Custom Event Tracking

You can track custom events using the helper functions from `components/analytics.tsx`:

```tsx
import { trackEvent, trackCTAClick, trackWaitlistSignup } from "@/components/analytics";

// Track custom event
trackEvent("custom_event_name", { param1: "value1", param2: 123 });

// Track CTA click
trackCTAClick("section_name", "Button Text");

// Track waitlist signup
trackWaitlistSignup("section_name");
```

## License

Private - All rights reserved

## Support

For questions or issues, please contact the development team.

# TrendZero
