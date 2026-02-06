'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [theme, setTheme] = useState<'day' | 'night'>('day')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [platformsOpen, setPlatformsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'day' | 'night' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'night' : 'day')
    setTheme(initialTheme)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!mounted) return null

  const servicePages = [
    { name: 'Ecommerce SEO Audit', href: '/services/ecommerce-seo-audit' },
    { name: 'Technical SEO for Ecommerce', href: '/services/technical-ecommerce-seo' },
    { name: 'Ecommerce Keyword Research', href: '/services/ecommerce-keyword-research' },
    { name: 'Product Page SEO', href: '/services/product-page-seo' },
    { name: 'Category Page SEO', href: '/services/category-page-seo' },
    { name: 'Ecommerce Content Strategy', href: '/services/ecommerce-content-strategy' },
  ]

  const platformPages = [
    { name: 'Shopify SEO', href: '/platforms/shopify-seo' },
    { name: 'WooCommerce SEO', href: '/platforms/woocommerce-seo' },
    { name: 'Magento SEO', href: '/platforms/magento-seo' },
    { name: 'BigCommerce SEO', href: '/platforms/bigcommerce-seo' },
    { name: 'Wix SEO', href: '/platforms/wix-seo' },
    { name: 'Custom Ecommerce SEO', href: '/platforms/custom-ecommerce-seo' },
  ]

  const industryPages = [
    { name: 'Fashion / Clothing', href: '/industries/fashion-ecommerce-seo' },
    { name: 'Electronics & Gadgets', href: '/industries/electronics-ecommerce-seo' },
    { name: 'Beauty & Skincare', href: '/industries/beauty-skincare-ecommerce-seo' },
    { name: 'Furniture & Home Decor', href: '/industries/furniture-home-decor-seo' },
    { name: 'Health & Supplements', href: '/industries/health-supplements-ecommerce-seo' },
    { name: 'Jewelry & Accessories', href: '/industries/jewelry-accessories-ecommerce-seo' },
  ]

  const navItems = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'top-0' : ''
      }`}
      style={{ padding: '0 1.5rem' }}
    >
      <div
        className={`container transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: isScrolled ? '0' : '1rem',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Left - Branding */}
          <Link href="/" className="flex flex-col group">
            <span
              className="text-lg font-bold transition-colors"
              style={{ color: 'var(--text)' }}
            >
              Moaz Haider
            </span>
            <span
              className="text-xs transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              Ecommerce SEO Consultant
            </span>
          </Link>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group"
                style={{ color: 'var(--text)' }}
              >
                <span className="group-hover:opacity-70 transition-opacity">Services</span>
                <svg className="w-3 h-3 inline-block ml-1 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 rounded-lg shadow-lg overflow-hidden"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {servicePages.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-3 text-sm font-medium transition-colors"
                      style={{
                        color: 'var(--text)',
                        borderBottom: index < servicePages.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platforms Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformsOpen(true)}
              onMouseLeave={() => setPlatformsOpen(false)}
            >
              <Link
                href="/platforms"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group"
                style={{ color: 'var(--text)' }}
              >
                <span className="group-hover:opacity-70 transition-opacity">Platforms</span>
                <svg className="w-3 h-3 inline-block ml-1 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {platformsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 rounded-lg shadow-lg overflow-hidden"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {platformPages.map((platform, index) => (
                    <Link
                      key={index}
                      href={platform.href}
                      className="block px-4 py-3 text-sm font-medium transition-colors"
                      style={{
                        color: 'var(--text)',
                        borderBottom: index < platformPages.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {platform.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <Link
                href="/industries"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group"
                style={{ color: 'var(--text)' }}
              >
                <span className="group-hover:opacity-70 transition-opacity">Industries</span>
                <svg className="w-3 h-3 inline-block ml-1 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {industriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 rounded-lg shadow-lg overflow-hidden"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {industryPages.map((industry, index) => (
                    <Link
                      key={index}
                      href={industry.href}
                      className="block px-4 py-3 text-sm font-medium transition-colors"
                      style={{
                        color: 'var(--text)',
                        borderBottom: index < industryPages.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-all rounded-lg group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--surface-alt)' }}
                />
              </Link>
            ))}
          </nav>

          {/* Right - Theme Toggle + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
              aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
            >
              {theme === 'day' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <Link
              href="#audit-form"
              className="hidden sm:inline-flex btn btn-primary"
            >
              Free SEO Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
