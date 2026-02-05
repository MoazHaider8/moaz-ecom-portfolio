'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Moaz Haider
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Ecommerce SEO Consultant
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Strategic SEO for ambitious ecommerce brands across international markets.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Services
            </div>
            <div className="space-y-2">
              <Link
                href="/services/ecommerce-seo-audit"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Ecommerce SEO Audit
              </Link>
              <Link
                href="/services/technical-ecommerce-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Technical SEO
              </Link>
              <Link
                href="/services/ecommerce-keyword-research"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Keyword Research
              </Link>
              <Link
                href="/services/product-page-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Product Page SEO
              </Link>
              <Link
                href="/services/category-page-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Category Page SEO
              </Link>
              <Link
                href="/services/ecommerce-content-strategy"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Content Strategy
              </Link>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Platforms
            </div>
            <div className="space-y-2">
              <Link
                href="/platforms/shopify-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Shopify
              </Link>
              <Link
                href="/platforms/woocommerce-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                WooCommerce
              </Link>
              <Link
                href="/platforms/magento-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Magento
              </Link>
              <Link
                href="/platforms/bigcommerce-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                BigCommerce
              </Link>
              <Link
                href="/platforms/wix-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Wix
              </Link>
              <Link
                href="/platforms/custom-ecommerce-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Custom Ecommerce
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Industries
            </div>
            <div className="space-y-2">
              <Link
                href="/industries/fashion-ecommerce-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Fashion & Apparel
              </Link>
              <Link
                href="/industries/beauty-cosmetics-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Beauty & Cosmetics
              </Link>
              <Link
                href="/industries/electronics-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Electronics
              </Link>
              <Link
                href="/industries/home-furniture-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Home & Furniture
              </Link>
              <Link
                href="/industries/health-wellness-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Health & Wellness
              </Link>
              <Link
                href="/industries/food-beverage-seo"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Food & Beverage
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Pages
            </div>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Contact
              </Link>
              <Link
                href="/case-studies"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Case Studies
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="block text-sm transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="text-sm text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} Moaz Haider. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
