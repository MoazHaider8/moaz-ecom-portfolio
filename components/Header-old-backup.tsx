'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [theme, setTheme] = useState<'day' | 'night'>('night')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [platformsOpen, setPlatformsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'day' | 'night' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'night' : 'day')
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!mounted) return null

  const servicePages = [
    {
      name: 'Ecommerce SEO Audit',
      href: '/services/ecommerce-seo-audit',
      description: 'Complete technical and strategic analysis',
      icon: 'A',
    },
    {
      name: 'Technical SEO for Ecommerce',
      href: '/services/technical-ecommerce-seo',
      description: 'Fix crawl issues and site speed',
      icon: 'T',
    },
    {
      name: 'Ecommerce Keyword Research',
      href: '/services/ecommerce-keyword-research',
      description: 'Strategic keyword mapping',
      icon: 'K',
    },
    {
      name: 'Product Page SEO',
      href: '/services/product-page-seo',
      description: 'Optimize for commercial keywords',
      icon: 'P',
    },
    {
      name: 'Category Page SEO',
      href: '/services/category-page-seo',
      description: 'Capture high-volume searches',
      icon: 'C',
    },
    {
      name: 'Ecommerce Content Strategy',
      href: '/services/ecommerce-content-strategy',
      description: 'Build topical authority',
      icon: 'S',
    },
  ]

  const platformPages = [
    { name: 'Shopify SEO', href: '/platforms/shopify-seo', icon: 'Sh' },
    { name: 'WooCommerce SEO', href: '/platforms/woocommerce-seo', icon: 'Wo' },
    { name: 'Magento SEO', href: '/platforms/magento-seo', icon: 'Ma' },
    { name: 'BigCommerce SEO', href: '/platforms/bigcommerce-seo', icon: 'Bc' },
    { name: 'Wix SEO', href: '/platforms/wix-seo', icon: 'Wx' },
    { name: 'Custom Ecommerce SEO', href: '/platforms/custom-ecommerce-seo', icon: 'Cu' },
  ]

  const industryPages = [
    { name: 'Fashion & Clothing', href: '/industries/fashion-ecommerce-seo', icon: 'Fa' },
    { name: 'Electronics & Gadgets', href: '/industries/electronics-ecommerce-seo', icon: 'El' },
    { name: 'Beauty & Skincare', href: '/industries/beauty-skincare-ecommerce-seo', icon: 'Be' },
    { name: 'Furniture & Home Decor', href: '/industries/furniture-home-decor-seo', icon: 'Fu' },
    { name: 'Health & Supplements', href: '/industries/health-supplements-ecommerce-seo', icon: 'He' },
    { name: 'Jewelry & Accessories', href: '/industries/jewelry-accessories-ecommerce-seo', icon: 'Je' },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container">
          <span>Free Ecommerce SEO Audit Available</span>
          <a href="#audit-form">Get Your Free Audit</a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ marginTop: isScrolled ? '0' : '48px' }}
      >
        <div
          className={`container transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: isScrolled ? '0' : '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left - Branding */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: 'var(--accent)', color: '#ffffff' }}
              >
                <span className="font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold transition-colors" style={{ color: 'var(--text)' }}>
                  Moaz Haider
                </span>
                <span className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                  Ecommerce SEO Consultant
                </span>
              </div>
            </Link>

            {/* Center - Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--text)' }}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                  style={{ color: 'var(--text)' }}
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className={`dropdown-menu ${servicesOpen ? 'open' : ''}`} style={{ minWidth: '680px' }}>
                  <div className="grid grid-cols-2 gap-2">
                    {servicePages.map((service, index) => (
                      <Link key={index} href={service.href} className="dropdown-item">
                        <div className="dropdown-icon">{service.icon}</div>
                        <div className="flex-1">
                          <div className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
                            {service.name}
                          </div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platforms Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPlatformsOpen(true)}
                onMouseLeave={() => setPlatformsOpen(false)}
              >
                <Link
                  href="/platforms"
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                  style={{ color: 'var(--text)' }}
                >
                  Platforms
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className={`dropdown-menu ${platformsOpen ? 'open' : ''}`} style={{ minWidth: '680px' }}>
                  <div className="grid grid-cols-2 gap-2">
                    {platformPages.map((platform, index) => (
                      <Link key={index} href={platform.href} className="dropdown-item">
                        <div className="dropdown-icon">{platform.icon}</div>
                        <div className="flex-1">
                          <div className="font-bold text-sm" style={{ color: 'var(--text)' }}>
                            {platform.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <Link
                  href="/industries"
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                  style={{ color: 'var(--text)' }}
                >
                  Industries
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className={`dropdown-menu ${industriesOpen ? 'open' : ''}`} style={{ minWidth: '680px' }}>
                  <div className="grid grid-cols-2 gap-2">
                    {industryPages.map((industry, index) => (
                      <Link key={index} href={industry.href} className="dropdown-item">
                        <div className="dropdown-icon">{industry.icon}</div>
                        <div className="flex-1">
                          <div className="font-bold text-sm" style={{ color: 'var(--text)' }}>
                            {industry.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--text)' }}
              >
                About
              </Link>

              <Link
                href="/case-studies"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--text)' }}
              >
                Case Studies
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--text)' }}
              >
                Contact
              </Link>
            </nav>

            {/* Right - Theme Toggle + CTA + Mobile Menu */}
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
                aria-label="Get your free ecommerce SEO audit"
              >
                Free SEO Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'var(--bg)', paddingTop: '120px', overflowY: 'auto' }}
        >
          <nav className="container py-6">
            <div className="flex flex-col gap-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Platforms', href: '/platforms' },
                { name: 'Industries', href: '/industries' },
                { name: 'About', href: '/about' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-3 px-4" style={{ color: 'var(--muted)' }}>
                  Services
                </h4>
                {servicePages.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-3 px-4" style={{ color: 'var(--muted)' }}>
                  Platforms
                </h4>
                {platformPages.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {platform.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6 px-4">
                <a
                  href="#audit-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  Get Free SEO Audit
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
