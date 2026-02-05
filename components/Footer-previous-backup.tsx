'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { label: 'Ecommerce SEO Audit', href: '/services/ecommerce-seo-audit' },
    { label: 'Keyword Research & Mapping', href: '/services/keyword-research' },
    { label: 'Product Page SEO', href: '/services/product-page-seo' },
    { label: 'Category Page SEO', href: '/services/category-page-seo' },
    { label: 'Technical SEO', href: '/services/technical-seo' },
    { label: 'Content Strategy', href: '/services/content-strategy' },
  ]

  const platforms = [
    { label: 'Shopify SEO', href: '/platforms/shopify' },
    { label: 'WooCommerce SEO', href: '/platforms/woocommerce' },
    { label: 'Magento SEO', href: '/platforms/magento' },
    { label: 'BigCommerce SEO', href: '/platforms/bigcommerce' },
    { label: 'Wix SEO', href: '/platforms/wix' },
    { label: 'Custom Ecommerce', href: '/platforms/custom' },
  ]

  const locations = [
    { label: 'United States', href: '/locations/usa' },
    { label: 'United Kingdom', href: '/locations/uk' },
    { label: 'Canada', href: '/locations/canada' },
    { label: 'Australia', href: '/locations/australia' },
    { label: 'UAE', href: '/locations/uae' },
    { label: 'Germany', href: '/locations/germany' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/moaz-haider/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/moaz.haider.14',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'X (Twitter)',
      href: 'https://x.com/MoazHaider71',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/moazhaider5/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative bg-surface border-t border-border">
      {/* Premium CTA Panel */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Scale Your Ecommerce SEO?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow">
            Get a comprehensive ecommerce SEO audit and strategic roadmap tailored to your store
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Get Your Free Audit
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Moaz Haider</h3>
            <p className="text-text-secondary mb-4 text-sm leading-relaxed">
              Ecommerce SEO consultant delivering strategy-driven, data-backed optimization for online stores across international markets.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Column */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Platforms</h4>
            <ul className="space-y-2">
              {platforms.map((platform) => (
                <li key={platform.href}>
                  <Link
                    href={platform.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {platform.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Locations</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-text-secondary text-center sm:text-left">
              © {currentYear} Moaz Haider. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
