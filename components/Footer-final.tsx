'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
              {['SEO Audit', 'Keyword Research', 'Technical SEO', 'International SEO'].map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="block text-sm transition-colors hover:opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Platforms
            </div>
            <div className="space-y-2">
              {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'].map((item) => (
                <Link
                  key={item}
                  href="/platforms"
                  className="block text-sm transition-colors hover:opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Connect
            </div>
            <div className="space-y-2">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/moaz-haider/' },
                { name: 'Twitter', href: 'https://x.com/MoazHaider71' },
                { name: 'Instagram', href: 'https://www.instagram.com/moazhaider5/' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-sm transition-colors hover:opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} Moaz Haider. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="transition-colors hover:opacity-70" style={{ color: 'var(--text-muted)' }}>
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:opacity-70" style={{ color: 'var(--text-muted)' }}>
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
