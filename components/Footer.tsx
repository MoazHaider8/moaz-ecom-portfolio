'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--accent) 0.5px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.02 }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Big CTA heading */}
        <div className="py-16 lg:py-24 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--accent)' }}>
            Ready to grow?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', lineHeight: '1.1' }}>
            Let&apos;s make your store<br className="hidden md:block" />
            <span style={{ color: 'var(--accent)' }}> rank & convert.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 30px var(--accent-glow)' }}
            >
              Get Your Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid lg:grid-cols-12 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-105" style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 20px var(--accent-glow)' }}>
                <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>M</span>
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Moaz Haider</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>Ecommerce SEO Consultant</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Strategic SEO for ambitious ecommerce brands. Helping online stores rank higher, convert more, and grow revenue across international markets.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5">
              {[
                { href: 'https://www.linkedin.com/in/moaz-haider/', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: 'https://www.youtube.com/@moazhaider', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { href: 'https://x.com/MoazHaider71', label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }} aria-label={social.label}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Services',
                links: [
                  { name: 'SEO Audit', href: '/services/ecommerce-seo-audit' },
                  { name: 'Technical SEO', href: '/services/technical-ecommerce-seo' },
                  { name: 'Keyword Research', href: '/services/ecommerce-keyword-research' },
                  { name: 'Product Page SEO', href: '/services/product-page-seo' },
                  { name: 'Category Page SEO', href: '/services/category-page-seo' },
                  { name: 'Content Strategy', href: '/services/ecommerce-content-strategy' },
                ],
              },
              {
                title: 'Platforms',
                links: [
                  { name: 'Shopify SEO', href: '/platforms/shopify-seo' },
                  { name: 'WooCommerce SEO', href: '/platforms/woocommerce-seo' },
                  { name: 'Magento SEO', href: '/platforms/magento-seo' },
                  { name: 'BigCommerce SEO', href: '/platforms/bigcommerce-seo' },
                  { name: 'Wix SEO', href: '/platforms/wix-seo' },
                  { name: 'Custom Ecommerce', href: '/platforms/custom-ecommerce-seo' },
                ],
              },
              {
                title: 'Industries',
                links: [
                  { name: 'Fashion & Apparel', href: '/industries/fashion-ecommerce-seo' },
                  { name: 'Beauty & Cosmetics', href: '/industries/beauty-skincare-ecommerce-seo' },
                  { name: 'Electronics', href: '/industries/electronics-ecommerce-seo' },
                  { name: 'Home & Furniture', href: '/industries/furniture-home-decor-seo' },
                  { name: 'Health & Wellness', href: '/industries/health-supplements-ecommerce-seo' },
                  { name: 'Jewelry', href: '/industries/jewelry-accessories-ecommerce-seo' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { name: 'About', href: '/about' },
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  { name: 'Disclaimer', href: '/disclaimer' },
                  { name: 'Terms', href: '/terms' },
                ],
              },
            ].map((column) => (
              <div key={column.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--accent)' }}>{column.title}</div>
                <div className="space-y-2.5">
                  {column.links.map((link) => (
                    <Link key={link.name} href={link.href} className="block text-[13px] font-medium transition-all duration-200 hover:translate-x-1 hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>{link.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8" style={{ borderTop: '1px solid var(--border)' }}>
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
                  <Link href={link.href} className="text-[12px] font-medium transition-all duration-200 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>{link.name}</Link>
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
