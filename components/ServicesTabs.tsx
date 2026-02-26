'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  tagline: string
  description: string
  deliverables: string[]
  featured?: boolean
  link: string
}

export default function ServicesTabs({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <div className="grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      {/* ── Left tab list ── */}
      <div className="lg:col-span-4 relative" style={{ background: 'var(--surface-alt)' }}>
        {/* Decorative vertical accent line */}
        <div className="absolute top-0 bottom-0 right-0 w-px hidden lg:block" style={{ background: 'var(--border)' }} />

        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          {services.map((service, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative flex items-center gap-4 w-full text-left px-6 py-5 lg:px-8 lg:py-6 transition-all duration-300 flex-shrink-0 min-w-[200px] lg:min-w-0"
                style={{
                  background: isActive ? 'var(--surface)' : 'transparent',
                }}
              >
                {/* Active indicator bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] hidden lg:block transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--accent)' : 'transparent',
                  }}
                />
                {/* Mobile active indicator */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-[2px] lg:hidden transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--accent)' : 'transparent',
                  }}
                />

                {/* Number */}
                <span
                  className="text-xs font-mono font-bold flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--accent-light)',
                    color: isActive ? '#ffffff' : 'var(--accent)',
                    fontSize: '0.65rem',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title + tagline */}
                <div className="min-w-0">
                  <h3
                    className="text-sm lg:text-[0.95rem] font-bold truncate transition-colors duration-300"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs mt-0.5 hidden lg:block truncate"
                    style={{ color: isActive ? 'var(--text-secondary)' : 'var(--muted)' }}
                  >
                    {service.tagline}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Right detail panel ── */}
      <div className="lg:col-span-8 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
        {/* Decorative gradient orb */}
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.04,
            transform: 'translate(30%, -40%)',
          }}
        />

        {/* Corner brackets decoration */}
        <div className="absolute top-6 right-6 w-8 h-8 hidden lg:block pointer-events-none" style={{ borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', opacity: 0.15 }} />
        <div className="absolute bottom-6 left-8 w-8 h-8 hidden lg:block pointer-events-none" style={{ borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', opacity: 0.15 }} />

        <div className="p-8 lg:p-12 relative z-10">
          {/* Service number + badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-4xl lg:text-5xl font-black leading-none"
              style={{ color: 'var(--accent)', opacity: 0.15, fontFamily: 'var(--font-heading)' }}
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            {active.featured && (
              <span
                className="text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ background: 'var(--accent)', color: '#ffffff' }}
              >
                Most Popular
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-2xl lg:text-3xl font-bold mb-2"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
          >
            {active.title}
          </h3>

          {/* Tagline */}
          <p
            className="text-sm font-medium italic mb-6"
            style={{ color: 'var(--accent)' }}
          >
            {active.tagline}
          </p>

          {/* Description */}
          <p
            className="text-[0.95rem] leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
          >
            {active.description}
          </p>

          {/* Deliverables */}
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: 'var(--muted)' }}>
              Key Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {active.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.01]"
                  style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-light)' }}
                  >
                    <svg className="w-3 h-3" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Link */}
          <Link
            href={active.link}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 group"
            style={{ color: 'var(--accent)' }}
          >
            Learn more about {active.title}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
