# Moaz Haider - Ecommerce SEO Consultant Portfolio

A premium, SEO-first Next.js portfolio website for Moaz Haider, an expert Ecommerce SEO Consultant serving international markets.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Features

✅ **SEO-First Implementation**
- Comprehensive metadata (Open Graph, Twitter Cards, canonical URLs)
- JSON-LD structured data (Person, WebSite, WebPage, ProfessionalService, FAQPage)
- Semantic HTML and proper heading hierarchy
- Internal linking with descriptive anchor text

✅ **Performance Optimized**
- CSS-based animations (no heavy animation libraries)
- IntersectionObserver for on-scroll reveals
- Optimized for Core Web Vitals (LCP, CLS, FID)

✅ **Accessibility**
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High color contrast ratios

✅ **Day/Night Mode**
- Theme toggle in header
- Respects system preference by default
- Preference stored in localStorage
- Smooth transitions between themes

✅ **Premium Design**
- Floating glass navbar with scroll effects
- Signature footer with gradient CTA panel
- Subtle micro-interactions and hover effects
- Mobile-responsive with hamburger menu

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Header.tsx          # Floating glass header with nav
│   ├── Footer.tsx          # Premium footer with links
│   ├── ThemeToggle.tsx     # Day/Night mode toggle
│   └── FAQ.tsx             # Accordion FAQ component
├── public/
│   └── og.png              # Open Graph image (add your own)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Content

All content is hardcoded in `app/page.tsx`. Update the data arrays for:
- Services
- Platforms
- Industries
- Countries/Locations
- Case Studies
- FAQs
- Testimonials

### Add Images

1. Add your Open Graph image as `public/og.png` (1200x630px recommended)
2. Add your profile photo as `public/moaz-haider.jpg`
3. Update image paths in metadata and structured data

### Update Contact Details

Update email, phone, and social media links in:
- `components/Footer.tsx`
- `app/page.tsx` (Contact Strip section)
- `app/layout.tsx` (Structured data)

### Update Domain

Replace `https://moazhaider.com` with your actual domain in:
- `app/layout.tsx` (metadataBase and all metadata)
- `app/page.tsx` (JSON-LD structured data)

### Customize Colors

Edit theme colors in `app/globals.css`:

```css
:root {
  --color-primary: #6366f1;    /* Indigo */
  --color-secondary: #8b5cf6;  /* Purple */
  --color-accent: #ec4899;     /* Pink */
  /* ... */
}
```

## SEO Checklist

- [ ] Add `public/og.png` (1200x630px)
- [ ] Add `public/favicon.ico`
- [ ] Update domain in metadata
- [ ] Add Google Search Console verification code
- [ ] Create `public/robots.txt`
- [ ] Create `public/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Configure domain
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

No environment variables required for basic deployment.

## Future Pages (Linked but Not Built)

The homepage includes internal links to these future pages:
- `/services` - Services hub page
- `/platforms` - Platforms hub page
- `/industries` - Industries hub page
- `/locations` - Locations hub page
- `/case-studies` - Case studies page
- `/blog` - Blog listing page
- `/contact` - Contact form page
- Individual service/platform/industry/location pages

## License

© 2026 Moaz Haider. All rights reserved.

## Support

For questions or support:
- Email: contact@moazhaider.com
- Phone: +92 302 4698992
- LinkedIn: [linkedin.com/in/moazhaider](https://linkedin.com/in/moazhaider)
