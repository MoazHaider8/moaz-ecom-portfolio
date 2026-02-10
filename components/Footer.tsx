'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-0" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                  Moaz Haider
                </div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>
                  Ecommerce SEO
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Strategic SEO for ambitious ecommerce brands across international markets.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/moaz-haider/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@moazhaider"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Services
            </div>
            <div className="space-y-3">
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
                  className="block text-sm transition-all hover:translate-x-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms Column */}
          <div>
            <div className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Platforms
            </div>
            <div className="space-y-3">
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
                  className="block text-sm transition-all hover:translate-x-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Column */}
          <div>
            <div className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Industries
            </div>
            <div className="space-y-3">
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
                  className="block text-sm transition-all hover:translate-x-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <div className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Company
            </div>
            <div className="space-y-3">
              {[
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Disclaimer', href: '/disclaimer' },
                { name: 'Terms', href: '/terms' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm transition-all hover:translate-x-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 mt-10" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: 'var(--muted)' }}>
              © {currentYear} Moaz Haider. All rights reserved.
            </div>
            <div className="flex gap-6">
              {[
                { name: 'Terms', href: '/terms' },
                { name: 'Privacy', href: '/privacy-policy' },
                { name: 'Sitemap', href: '/sitemap.xml' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--muted)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
