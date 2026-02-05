'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'w-[95%] max-w-7xl' : 'w-[98%] max-w-[1600px]'
      }`}
    >
      <nav
        className={`glass rounded-full px-6 md:px-8 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left - Name & Role */}
          <Link href="/" className="flex flex-col group">
            <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
              Moaz Haider
            </span>
            <span className="text-xs text-text-secondary">
              Ecommerce SEO
            </span>
          </Link>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Services', href: '/services' },
              { name: 'Case Studies', href: '/case-studies' },
              { name: 'Platforms', href: '/platforms' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right - Theme Toggle & CTA */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-hover transition-all"
            >
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
