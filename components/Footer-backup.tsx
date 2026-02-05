'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            {/* Left - Brand Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-3xl font-bold text-text-primary mb-2">
                  Moaz Haider
                </div>
                <div className="text-text-secondary">
                  Ecommerce SEO Consultant
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed max-w-md">
                Strategic SEO for ambitious ecommerce brands. Proven results across 
                6 international markets.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/moaz-haider/' },
                  { name: 'Twitter', href: 'https://x.com/MoazHaider71' },
                  { name: 'Instagram', href: 'https://www.instagram.com/moazhaider5/' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-all"
                    aria-label={social.name}
                  >
                    <span className="text-sm">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Navigation Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-12">
              <div>
                <div className="text-sm font-semibold text-text-primary mb-4">
                  Services
                </div>
                <div className="space-y-3">
                  {['SEO Strategy', 'Technical SEO', 'Keyword Research', 'International SEO'].map((item) => (
                    <Link
                      key={item}
                      href="/services"
                      className="block text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-text-primary mb-4">
                  Platforms
                </div>
                <div className="space-y-3">
                  {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'].map((item) => (
                    <Link
                      key={item}
                      href="/platforms"
                      className="block text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-text-primary mb-4">
                  Company
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Case Studies', href: '/case-studies' },
                    { name: 'Contact', href: '/contact' },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-secondary">
              © {currentYear} Moaz Haider. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-text-secondary">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
