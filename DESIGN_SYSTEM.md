# Design System & Style Guide

## Overview
This document contains the complete design system, color palette, typography, spacing, and component styles used in the TrendZero landing page. Use this as a reference when applying the same design to other projects.

---

## 🎨 Color Palette

### Light Mode Colors
```css
--background: 0 0% 100%           /* Pure white */
--foreground: 222.2 84% 4.9%      /* Dark blue-black */
--primary: 221.2 83.2% 53.3%      /* Bright blue */
--primary-foreground: 210 40% 98% /* Off-white */
--secondary: 210 40% 96.1%        /* Light gray */
--secondary-foreground: 222.2 47.4% 11.2% /* Dark gray */
--muted: 210 40% 96.1%            /* Light gray background */
--muted-foreground: 215.4 16.3% 46.9% /* Medium gray text */
--accent: 210 40% 96.1%           /* Light gray accent */
--accent-foreground: 222.2 47.4% 11.2% /* Dark text */
--border: 214.3 31.8% 91.4%       /* Light border */
--input: 214.3 31.8% 91.4%        /* Input border */
--ring: 221.2 83.2% 53.3%         /* Focus ring (blue) */
--radius: 0.75rem                  /* 12px border radius */
```

### Dark Mode Colors (Default)
```css
--background: 222.2 84% 4.9%      /* Dark blue-black */
--foreground: 210 40% 98%          /* Off-white */
--primary: 217.2 91.2% 59.8%       /* Bright blue */
--primary-foreground: 222.2 47.4% 11.2% /* Dark text */
--secondary: 217.2 32.6% 17.5%     /* Dark gray */
--secondary-foreground: 210 40% 98% /* Light text */
--muted: 217.2 32.6% 17.5%         /* Dark gray background */
--muted-foreground: 215 20.2% 65.1% /* Medium gray text */
--accent: 217.2 32.6% 17.5%        /* Dark gray accent */
--accent-foreground: 210 40% 98%   /* Light text */
--border: 217.2 32.6% 17.5%        /* Dark border */
--input: 217.2 32.6% 17.5%         /* Dark input border */
--ring: 224.3 76.3% 94.1%          /* Light focus ring */
```

### Tailwind Color Usage
- `bg-background` - Main background color
- `text-foreground` - Primary text color
- `bg-primary` / `text-primary` - Primary accent (blue)
- `bg-muted` / `text-muted-foreground` - Muted backgrounds/text
- `border-border` - Border color
- `bg-accent` / `text-accent-foreground` - Accent colors

### Gradient Colors
- `bg-gradient-to-r from-foreground via-foreground to-primary` - Text gradient
- `bg-gradient-to-r from-primary to-primary/80` - Primary gradient
- `bg-gradient-to-br from-emerald-500/20 to-green-600/20` - Green accent gradient
- `bg-gradient-to-br from-red-500/20 to-rose-600/20` - Red accent gradient
- `bg-gradient-to-br from-purple-600/20 to-indigo-700/20` - Purple accent gradient

---

## 📝 Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: `system-ui, sans-serif`
- **CSS Variable**: `--font-geist-sans`

### Font Sizes & Line Heights
```css
/* Headings */
text-6xl  /* 3.75rem / 60px - Hero H1 */
text-5xl  /* 3rem / 48px - Large H1 */
text-4xl  /* 2.25rem / 36px - H2 */
text-3xl  /* 1.875rem / 30px - H2 (mobile) */
text-2xl  /* 1.5rem / 24px - H3 */
text-xl   /* 1.25rem / 20px - H3, large body */
text-lg   /* 1.125rem / 18px - Body text */
text-base /* 1rem / 16px - Default */
text-sm   /* 0.875rem / 14px - Small text */

/* Line Heights */
leading-8   /* 2rem / 32px - Body text */
leading-relaxed /* 1.625 - Comfortable reading */
```

### Typography Patterns

**Hero Headline (H1)**
```tsx
className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
// With gradient text:
className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
```

**Section Headings (H2)**
```tsx
className="text-3xl font-bold tracking-tight sm:text-4xl"
```

**Subheadings (H3)**
```tsx
className="text-xl font-semibold text-foreground"
// or
className="text-2xl font-bold tracking-tight"
```

**Body Text**
```tsx
className="text-lg leading-8 text-muted-foreground"
// Max width for readability:
className="max-w-2xl" // or max-w-3xl
```

**Small Text / Captions**
```tsx
className="text-sm text-muted-foreground"
```

### Font Weights
- `font-bold` - Headings (700)
- `font-semibold` - Subheadings, emphasis (600)
- `font-medium` - Navigation, buttons (500)
- Regular (400) - Body text

### Text Colors
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary/muted text
- `text-primary` - Accent text
- `text-transparent` - For gradient text (with bg-clip-text)

---

## 📐 Spacing & Layout

### Container Patterns
```tsx
// Section container
className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"

// Content container
className="mx-auto max-w-3xl" // or max-w-4xl, max-w-5xl

// Text container
className="mx-auto max-w-2xl" // or max-w-3xl
```

### Vertical Spacing
- `py-16 sm:py-24` - Section padding (64px / 96px)
- `mb-6` - Small margin (24px)
- `mb-8` - Medium margin (32px)
- `mb-10` - Large margin (40px)
- `mb-12` - Extra large margin (48px)
- `space-y-8` - Vertical spacing between items (32px)
- `space-y-4` - Small vertical spacing (16px)

### Horizontal Spacing
- `px-4 sm:px-6 lg:px-8` - Responsive horizontal padding
- `gap-6` - Navigation/item gaps (24px)
- `gap-3` - Small gaps (12px)

### Max Widths
- `max-w-2xl` - Text content (672px)
- `max-w-3xl` - Medium content (768px)
- `max-w-4xl` - Large content (896px)
- `max-w-5xl` - Extra large content (1024px)

---

## 🎭 Border Radius

```css
--radius: 0.75rem; /* 12px base radius */
```

### Border Radius Classes
- `rounded-xl` - Default (12px) - Buttons, cards, inputs
- `rounded-2xl` - Large (16px) - Hero sections, large cards
- `rounded-lg` - Medium (8px) - Small buttons
- `rounded-full` - Full (9999px) - Pills, badges, scrollbar

---

## 🌑 Shadows

### Shadow Classes
- `shadow-sm` - Subtle shadow
- `shadow-md` - Default shadow (buttons, cards)
- `shadow-lg` - Large shadow
- `shadow-xl` - Extra large shadow
- `shadow-2xl` - Maximum shadow
- `shadow-primary/20` - Colored shadow with opacity
- `shadow-black/10` - Dark shadow with opacity

### Shadow Patterns
```tsx
// Button shadow
className="shadow-md shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"

// Card shadow
className="shadow-xl shadow-black/10"
```

---

## 🎬 Animations (Framer Motion)

### Installation
```bash
npm install framer-motion
```

### Common Animation Patterns

**Fade In + Slide Up**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**Scroll Into View**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

**Staggered Children**
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
))}
```

**Hover Scale**
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
```

**Gradient Background Animation**
```tsx
<motion.div
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%"],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  }}
  style={{
    backgroundImage: "radial-gradient(...)",
    backgroundSize: "200% 200%",
  }}
/>
```

### Animation Timing
- **Duration**: 0.2s (micro), 0.4-0.6s (standard), 1s+ (slow)
- **Easing**: `easeOut`, `easeInOut`, `linear`
- **Delays**: 0.1s increments for staggered animations

---

## 🧩 Component Styles

### Button Component

**Variants:**
- `default` - Primary button (blue background)
- `outline` - Outlined button
- `ghost` - Transparent button
- `link` - Text link style

**Sizes:**
- `sm` - Small (h-9, px-4)
- `default` - Default (h-11, px-6)
- `lg` - Large (h-12, px-8)

**Button Styles:**
```tsx
className="rounded-xl text-sm font-medium
  bg-primary text-primary-foreground
  hover:bg-primary/90
  shadow-md shadow-primary/20
  transition-colors"
```

### Input Component

**Input Styles:**
```tsx
className="h-11 w-full rounded-xl
  border border-input bg-background
  px-4 py-2 text-sm
  placeholder:text-muted-foreground
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2"
```

### Card/Section Styles

**Basic Card:**
```tsx
className="rounded-xl bg-muted/50 p-6"
```

**Enhanced Card:**
```tsx
className="rounded-2xl border-2 border-primary/20
  bg-gradient-to-br from-primary/5 to-primary/10
  backdrop-blur-md shadow-xl shadow-black/10
  hover:shadow-2xl hover:scale-[1.02]
  transition-all duration-300"
```

**Section Container:**
```tsx
className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
```

**Section with Border:**
```tsx
className="border-y border-border/50 bg-muted/30
  px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
```

---

## 🎨 Background Patterns

### Gradient Backgrounds
```tsx
// Radial gradient overlay
className="absolute inset-0 -z-10"
style={{
  backgroundImage: "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.15) 0px, transparent 50%)",
}}
```

### Gradient Orbs
```tsx
className="absolute top-20 left-10 h-72 w-72 rounded-full
  bg-primary/10 blur-3xl"
```

### Gradient Fade
```tsx
className="absolute bottom-0 left-0 right-0 h-48
  bg-gradient-to-t from-background via-background/80 to-transparent"
```

### Backdrop Blur
```tsx
className="bg-background/80 backdrop-blur-sm" // Header
className="backdrop-blur-md" // Cards
```

---

## 📱 Responsive Breakpoints

### Tailwind Default Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Common Responsive Patterns
```tsx
// Text sizes
className="text-4xl sm:text-5xl lg:text-6xl"

// Padding
className="px-4 sm:px-6 lg:px-8"
className="py-16 sm:py-24"

// Grid
className="grid gap-8 sm:gap-12 sm:grid-cols-3"

// Max width
className="max-w-2xl sm:max-w-3xl lg:max-w-4xl"
```

---

## 🎯 Design Principles

### 1. Dark Mode First
- Site defaults to dark mode
- All colors work in both light and dark
- Use semantic color variables

### 2. Generous Spacing
- Large vertical rhythm (py-16 to py-24)
- Comfortable reading widths (max-w-2xl to max-w-3xl)
- Consistent gaps between elements

### 3. Subtle Animations
- Smooth, not jarring
- 200-600ms duration
- Ease-out curves
- Respects prefers-reduced-motion

### 4. Soft Corners
- Rounded-xl (12px) as default
- Rounded-2xl (16px) for emphasis
- Creates modern, friendly feel

### 5. Layered Depth
- Subtle shadows for elevation
- Backdrop blur for glassmorphism
- Gradient overlays for depth

### 6. Typography Hierarchy
- Clear size progression
- Bold headings, regular body
- Muted colors for secondary text
- Max width for readability

---

## 🔧 Utility Classes

### Common Combinations

**Centered Container:**
```tsx
className="mx-auto max-w-3xl text-center"
```

**Flex Navigation:**
```tsx
className="flex items-center gap-6"
```

**Text Link:**
```tsx
className="text-sm font-medium text-muted-foreground
  transition-colors hover:text-foreground"
```

**Icon Container:**
```tsx
className="flex h-20 w-20 items-center justify-center
  rounded-2xl bg-gradient-to-br from-primary/20
  border-2 border-primary/20"
```

**Badge/Number:**
```tsx
className="inline-flex h-10 w-10 items-center justify-center
  rounded-xl bg-gradient-to-br from-primary/20
  border-2 border-primary/20 text-sm font-bold"
```

---

## 📦 Dependencies

### Required Packages
```json
{
  "framer-motion": "^11.0.0",
  "tailwindcss": "^3.4.0",
  "@radix-ui/react-slot": "^1.0.2",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0"
}
```

### Font Setup
```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
```

---

## 🎨 CSS Custom Properties Setup

### globals.css Structure
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light mode colors */
  }
  
  .dark {
    /* Dark mode colors */
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-background;
}
::-webkit-scrollbar-thumb {
  @apply bg-muted rounded-full;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-muted-foreground/50;
}
```

---

## 📋 Quick Reference Checklist

When applying this design system to a new project:

- [ ] Set up Tailwind CSS with custom color variables
- [ ] Configure dark mode (class-based)
- [ ] Import Inter font from Google Fonts
- [ ] Set up CSS custom properties for colors
- [ ] Install Framer Motion for animations
- [ ] Create button component with variants
- [ ] Create input component with focus states
- [ ] Set up smooth scrolling
- [ ] Configure custom scrollbar styles
- [ ] Use semantic color classes (bg-background, text-foreground, etc.)
- [ ] Apply consistent spacing (py-16 sm:py-24)
- [ ] Use rounded-xl for default border radius
- [ ] Implement scroll-into-view animations
- [ ] Add hover states with transitions
- [ ] Ensure responsive breakpoints (sm, lg)

---

## 🚀 Example Component Template

```tsx
"use client";

import { motion } from "framer-motion";

export function ExampleSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Section Title
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-lg leading-8 text-muted-foreground"
        >
          Section description text goes here.
        </motion.p>
      </div>
    </section>
  );
}
```

---

**Last Updated**: 2025
**Design System Version**: 1.0

