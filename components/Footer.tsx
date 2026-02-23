'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      {/* Decorative gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      <div className="container max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top row: Brand + Newsletter-style CTA */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{ background: 'var(--accent)', color: '#ffffff' }}
              >
                <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>M</span>
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  Moaz Haider
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--muted)' }}>
                  Ecommerce SEO Consultant
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Strategic SEO for ambitious ecommerce brands. Helping online stores rank higher, convert more, and grow revenue across international markets.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/in/moaz-haider/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@moazhaider"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://x.com/MoazHaider71"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--accent)' }}>
                Services
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'SEO Audit', href: '/services/ecommerce-seo-audit' },
                  { name: 'Technical SEO', href: '/services/technical-ecommerce-seo' },
                  { name: 'Keyword Research', href: '/services/ecommerce-keyword-research' },
                  { name: 'Product Page SEO', href: '/services/product-page-seo' },
                  { name: 'Category Page SEO', href: '/services/category-page-seo' },
                  { name: 'Content Strategy', href: '/services/ecommerce-content-strategy' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[13px] font-medium transition-all duration-200 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--accent)' }}>
                Platforms
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'Shopify SEO', href: '/platforms/shopify-seo' },
                  { name: 'WooCommerce SEO', href: '/platforms/woocommerce-seo' },
                  { name: 'Magento SEO', href: '/platforms/magento-seo' },
                  { name: 'BigCommerce SEO', href: '/platforms/bigcommerce-seo' },
                  { name: 'Wix SEO', href: '/platforms/wix-seo' },
                  { name: 'Custom Ecommerce', href: '/platforms/custom-ecommerce-seo' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[13px] font-medium transition-all duration-200 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--accent)' }}>
                Industries
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'Fashion & Apparel', href: '/industries/fashion-ecommerce-seo' },
                  { name: 'Beauty & Cosmetics', href: '/industries/beauty-skincare-ecommerce-seo' },
                  { name: 'Electronics', href: '/industries/electronics-ecommerce-seo' },
                  { name: 'Home & Furniture', href: '/industries/furniture-home-decor-seo' },
                  { name: 'Health & Wellness', href: '/industries/health-supplements-ecommerce-seo' },
                  { name: 'Jewelry', href: '/industries/jewelry-accessories-ecommerce-seo' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[13px] font-medium transition-all duration-200 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--accent)' }}>
                Company
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'About', href: '/about' },
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  { name: 'Disclaimer', href: '/disclaimer' },
                  { name: 'Terms', href: '/terms' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[13px] font-medium transition-all duration-200 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
              &copy; {currentYear} Moaz Haider &mdash; Freelance Ecommerce SEO Consultant. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
              {[
                { name: 'Terms', href: '/terms' },
                { name: 'Privacy', href: '/privacy-policy' },
                { name: 'Sitemap', href: '/sitemap.xml' },
              ].map((link, i) => (
                <span key={link.name} className="flex items-center gap-5">
                  <Link
                    href={link.href}
                    className="text-[12px] font-medium transition-all duration-200 hover:translate-y-[-1px]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {link.name}
                  </Link>
                  {i < 2 && <span className="w-px h-3" style={{ background: 'var(--border)' }} />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
