# Luxury Design System - Moaz Haider Portfolio

## Design Philosophy

This homepage embodies a **luxury digital product** aesthetic inspired by:
- Apple (restraint, precision, hierarchy)
- Linear (clean, modern, purposeful)
- Stripe (editorial typography, confidence)
- Vercel (technical excellence, subtle motion)

---

## Color System

### Night Mode (Default)
```
Background: #0a0e14 (deep charcoal)
Surface: #151b24 (elevated surfaces)
Border: #1f2937 (subtle separators)
Text Primary: #f8fafc (soft off-white)
Text Secondary: #94a3b8 (muted gray)
Accent: #06b6d4 (cyan - used sparingly)
```

### Day Mode
```
Background: #fefcf8 (warm off-white)
Surface: #ffffff (pure white)
Border: #e2e8f0 (light gray)
Text Primary: #1e293b (dark slate)
Text Secondary: #475569 (medium gray)
Accent: #0891b2 (darker cyan)
```

**Transitions:** 400ms cubic-bezier for smooth, elegant theme switching

---

## Typography

### Scale
- **Hero H1:** clamp(3rem, 8vw, 6.5rem) - Editorial scale
- **Section H2:** 5xl-6xl (clamp responsive)
- **Body:** 16-20px base, leading-relaxed
- **Small text:** 12-14px for labels

### Hierarchy
1. Large, bold headlines (95% line-height for tightness)
2. Light-weight subheadings (font-light)
3. Medium body text (leading-relaxed)
4. Small uppercase labels (tracking-wide)

---

## Layout Principles

### Asymmetry
- Hero grid: 7 columns content + 5 columns metrics
- Offset section headers
- Varied card arrangements (not repetitive grids)

### Spacing
- Sections: py-32 (generous vertical rhythm)
- Inner padding: px-6 to px-20 (responsive)
- Max-width: 1400px (comfortable reading)

### Alternating Backgrounds
- White → Surface → White pattern
- Creates visual rhythm without boredom

---

## Component Design

### Header (Floating Glass)
- **Position:** Fixed, centered, floating 24px from top
- **Effect:** Backdrop blur with subtle border
- **Behavior:** Shrinks slightly on scroll
- **Layout:** Name (left) + Nav (center) + Toggle+CTA (right)

### Hero Section
- **Composition:** Asymmetrical grid
- **Typography:** Massive H1 with accent color on keyword
- **Metrics:** Interactive cards showing social proof
- **CTA:** Primary (accent) + Secondary (outlined)

### Services
- **Layout:** 3-column grid with hover effects
- **Cards:** Border hover → accent color
- **Typography:** Semibold titles + descriptive text

### Case Studies
- **Layout:** 2-column featured work
- **Highlight:** Left border accent (4px)
- **Metrics:** Large, bold numbers
- **Hover:** Subtle scale (1.02x)

### Platforms
- **Layout:** Horizontal scroll (mobile-friendly)
- **Cards:** Fixed width (256px), overflow-x-auto
- **Effect:** No scrollbar visible

### Process
- **Layout:** Vertical timeline with large numbers
- **Typography:** 6xl numbers (low opacity → full on hover)
- **Spacing:** Generous vertical gaps

### FAQ
- **Style:** Clean, editorial accordion
- **Max-width:** 900px (readability)
- **Animation:** Smooth expand/collapse

### CTA
- **Mood:** Invitation, not sales pressure
- **Typography:** Large, centered, confident
- **Actions:** Primary + Email direct

### Footer
- **Grid:** 5 columns (brand) + 7 columns (links)
- **Social:** Circular icon placeholders
- **Bottom:** Copyright + legal links

---

## Animations

### Reveal Pattern
```css
opacity: 0 → 1
translateY: 40px → 0
duration: 800ms cubic-bezier
```

### Hover States
- Border color transitions (300ms)
- Scale transforms (1.02x for cards)
- Gap increases (buttons with arrows)
- Color shifts (text → accent)

### Scroll Effects
- Header shrinks (py-4 → py-3, width 98% → 95%)
- Elements reveal on intersection

---

## SEO Architecture

### Metadata
- Title: "Ecommerce SEO Consultant | Moaz Haider"
- Description: 150 chars, includes USP + markets
- OG + Twitter cards configured
- Canonical: https://www.moazhaider.com

### Structured Data
- Person schema (Moaz Haider)
- WebSite schema
- WebPage schema
- FAQPage schema (for homepage FAQs)

### Semantic HTML
- One H1 (Hero: "Ecommerce SEO Consultant")
- H2 for each section
- Proper heading hierarchy
- Semantic section tags

### Internal Linking
- Links to: /services, /platforms, /industries, /locations, /case-studies, /contact
- Descriptive anchor text
- Strategic placement

---

## Accessibility

- Focus states: 2px accent outline
- Semantic HTML throughout
- ARIA labels on social links
- Keyboard navigable
- Color contrast: WCAG AA compliant

---

## Technical Stack

```
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS + CSS Variables
Theme: localStorage + system preference detection
Animations: CSS + IntersectionObserver
No external UI libraries
```

---

## Why This Works

1. **Premium feel:** Restraint, space, intentional choices
2. **Not a template:** Every section has unique layout logic
3. **Editorial quality:** Typography-first, hierarchy-driven
4. **Confidence:** No over-selling, just clear value
5. **Technical excellence:** Clean code, proper SEO, accessibility
6. **Memorable:** Stands out from generic SaaS websites

---

## Files Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage (luxury design)
└── globals.css         # CSS variables + utilities

components/
├── Header.tsx          # Floating glass header
├── Footer.tsx          # Editorial footer
├── ThemeToggle.tsx     # Day/Night switcher
└── FAQ.tsx             # Clean accordion
```

---

**This design is built to convert high-value clients by demonstrating expertise through design quality itself.**
