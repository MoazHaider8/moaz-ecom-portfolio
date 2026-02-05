'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [theme, setTheme] = useState<'day' | 'night'>('day')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Left - Branding */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              Moaz Haider
            </span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Ecommerce SEO Consultant
            </span>
          </Link>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Services', href: '/services' },
              { name: 'Platforms', href: '/platforms' },
              { name: 'Industries', href: '/industries' },
              { name: 'Case Studies', href: '/case-studies' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right - Theme Toggle + CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
              }}
              aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
            >
              {theme === 'day' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)' }}
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
