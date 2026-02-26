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
    const initialTheme = savedTheme || 'night'
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
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
    { name: 'Ecommerce SEO Audit', href: '/services/ecommerce-seo-audit', description: 'Complete technical and strategic analysis', icon: 'A' },
    { name: 'Technical SEO for Ecommerce', href: '/services/technical-ecommerce-seo', description: 'Fix crawl issues and site speed', icon: 'T' },
    { name: 'Ecommerce Keyword Research', href: '/services/ecommerce-keyword-research', description: 'Strategic keyword mapping', icon: 'K' },
    { name: 'Product Page SEO', href: '/services/product-page-seo', description: 'Optimize for commercial keywords', icon: 'P' },
    { name: 'Category Page SEO', href: '/services/category-page-seo', description: 'Capture high-volume searches', icon: 'C' },
    { name: 'Ecommerce Content Strategy', href: '/services/ecommerce-content-strategy', description: 'Build topical authority', icon: 'S' },
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
      <div
        className="relative z-50"
        style={{
          background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))',
          color: '#ffffff',
          padding: '0.55rem 0',
          textAlign: 'center',
          fontSize: '0.78rem',
          fontWeight: 500,
          letterSpacing: '0.03em',
        }}
      >
        <div className="container flex items-center justify-center gap-3">
          <span className="hidden sm:inline" style={{ opacity: 0.9 }}>&#9733; Free Ecommerce SEO Audit Available</span>
          <span className="sm:hidden" style={{ opacity: 0.9 }}>Free SEO Audit</span>
          <a
            href="#audit-form"
            className="inline-flex items-center gap-1 font-semibold transition-all duration-200 hover:scale-105"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.15)',
              padding: '0.2rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            Claim Now
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{ marginTop: isScrolled ? '0' : '33px' }}
      >
        <div
          className="transition-all duration-700"
          style={{
            background: isScrolled
              ? 'var(--glass-bg)'
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
            boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          <div className="container max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between" style={{ height: isScrolled ? '60px' : '70px', transition: 'height 0.5s ease' }}>
              {/* Left - Branding */}
              <Link href="/" className="flex items-center gap-3 group">
                <div
                  className="flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    boxShadow: '0 0 20px var(--accent-glow)',
                  }}
                >
                  <span className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                    Moaz Haider
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                    Ecommerce SEO
                  </span>
                </div>
              </Link>

              {/* Center - Navigation (Desktop) */}
              <nav className="hidden lg:flex items-center gap-0.5">
                <Link href="/" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>
                  Home
                </Link>

                {/* Services Dropdown */}
                <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <Link href="/services" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 flex items-center gap-1 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>
                    Services
                    <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className={`dropdown-menu ${servicesOpen ? 'open' : ''}`} style={{ minWidth: '640px' }}>
                    <div className="px-1 pb-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-2 mb-1" style={{ color: 'var(--accent)' }}>SEO Services</div>
                      <div className="grid grid-cols-2 gap-1">
                        {servicePages.map((service, index) => (
                          <Link key={index} href={service.href} className="dropdown-item">
                            <div className="dropdown-icon">{service.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-[13px] mb-0.5" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{service.name}</div>
                              <div className="text-[11px] leading-snug" style={{ color: 'var(--text-secondary)' }}>{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 pt-3 px-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <Link href="/services" className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-200 hover:gap-2.5" style={{ color: 'var(--accent)' }}>
                        View all services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Platforms Dropdown */}
                <div className="relative" onMouseEnter={() => setPlatformsOpen(true)} onMouseLeave={() => setPlatformsOpen(false)}>
                  <Link href="/platforms" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 flex items-center gap-1 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>
                    Platforms
                    <svg className={`w-3 h-3 transition-transform duration-200 ${platformsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className={`dropdown-menu ${platformsOpen ? 'open' : ''}`} style={{ minWidth: '440px' }}>
                    <div className="px-1 pb-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-2 mb-1" style={{ color: 'var(--accent)' }}>Platform Expertise</div>
                      <div className="grid grid-cols-2 gap-1">
                        {platformPages.map((platform, index) => (
                          <Link key={index} href={platform.href} className="dropdown-item">
                            <div className="dropdown-icon" style={{ width: '36px', height: '36px', fontSize: '0.75rem' }}>{platform.icon}</div>
                            <div className="flex-1"><div className="font-semibold text-[13px]" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{platform.name}</div></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 pt-3 px-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <Link href="/platforms" className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-200 hover:gap-2.5" style={{ color: 'var(--accent)' }}>
                        View all platforms <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Industries Dropdown */}
                <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
                  <Link href="/industries" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 flex items-center gap-1 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>
                    Industries
                    <svg className={`w-3 h-3 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className={`dropdown-menu ${industriesOpen ? 'open' : ''}`} style={{ minWidth: '440px' }}>
                    <div className="px-1 pb-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-2 mb-1" style={{ color: 'var(--accent)' }}>Industry Specialization</div>
                      <div className="grid grid-cols-2 gap-1">
                        {industryPages.map((industry, index) => (
                          <Link key={index} href={industry.href} className="dropdown-item">
                            <div className="dropdown-icon" style={{ width: '36px', height: '36px', fontSize: '0.75rem' }}>{industry.icon}</div>
                            <div className="flex-1"><div className="font-semibold text-[13px]" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{industry.name}</div></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 pt-3 px-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <Link href="/industries" className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-200 hover:gap-2.5" style={{ color: 'var(--accent)' }}>
                        View all industries <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>About</Link>
                <Link href="/case-studies" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>Case Studies</Link>
                <Link href="/contact" className="px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 hover:text-[var(--accent)]" style={{ color: 'var(--text)', letterSpacing: '0.01em' }}>Contact</Link>
              </nav>

              {/* Right - Theme Toggle + CTA + Mobile Menu */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
                >
                  {theme === 'day' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  )}
                </button>

                <Link
                  href="#audit-form"
                  className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 20px var(--accent-glow)' }}
                  aria-label="Get your free ecommerce SEO audit"
                >
                  Free SEO Audit
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>

                {/* Mobile Hamburger */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ background: 'var(--bg)', paddingTop: '110px', overflowY: 'auto' }}>
          <nav className="container py-4">
            <div className="flex flex-col gap-0.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Platforms', href: '/platforms' },
                { name: 'Industries', href: '/industries' },
                { name: 'About', href: '/about' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  {link.name}
                  <svg className="w-4 h-4" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-3 px-4" style={{ color: 'var(--accent)' }}>Quick Links &mdash; Services</h4>
                <div className="grid grid-cols-2 gap-1">
                  {servicePages.map((service) => (
                    <Link key={service.name} href={service.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200" style={{ color: 'var(--text-secondary)' }}>{service.name}</Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-3 px-4" style={{ color: 'var(--accent)' }}>Quick Links &mdash; Platforms</h4>
                <div className="grid grid-cols-2 gap-1">
                  {platformPages.map((platform) => (
                    <Link key={platform.name} href={platform.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200" style={{ color: 'var(--text-secondary)' }}>{platform.name}</Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 px-4">
                <a href="#audit-form" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 20px var(--accent-glow)' }}>
                  Get Free SEO Audit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
