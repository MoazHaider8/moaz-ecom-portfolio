'use client'

import { useEffect, useRef, useState } from 'react'

const comparisons = [
  { feature: 'Ecommerce-Only Focus', me: true, others: false },
  { feature: 'Platform-Specific SEO Knowledge', me: true, others: false },
  { feature: 'Data-Driven Strategy (Not Guesswork)', me: true, others: false },
  { feature: 'Product & Category Page Expertise', me: true, others: false },
  { feature: 'International Ecommerce SEO', me: true, others: false },
  { feature: 'No Long-Term Contracts', me: true, others: false },
  { feature: 'Monthly Transparent Reporting', me: true, others: true },
  { feature: 'Generic "One Size Fits All" SEO', me: false, others: true },
]

export default function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--surface-alt)' }}>
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '36px 36px', opacity: 0.4 }} />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 block" style={{ color: 'var(--accent)' }}>
            Comparison
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', lineHeight: '1.1' }}>
            Why Specialist<br className="hidden md:block" />
            <span style={{ color: 'var(--accent)' }}> Over Generalist?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Most agencies offer SEO as one of 15 services. Here&apos;s what changes when you work with an ecommerce SEO specialist.
          </p>
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden transition-all duration-700"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {/* Header row */}
          <div className="grid grid-cols-12 items-center" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="col-span-6 sm:col-span-7 px-6 lg:px-8 py-5">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Feature</span>
            </div>
            <div className="col-span-3 sm:col-span-2.5 text-center py-5 relative">
              <div className="absolute inset-0" style={{ background: 'var(--accent-light)' }} />
              <span className="relative z-10 text-sm font-bold" style={{ color: 'var(--accent)' }}>Me</span>
            </div>
            <div className="col-span-3 sm:col-span-2.5 text-center py-5">
              <span className="text-sm font-bold" style={{ color: 'var(--muted)' }}>Agencies</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center group transition-all duration-300 hover:bg-[var(--accent-light)]"
              style={{
                borderBottom: index < comparisons.length - 1 ? '1px solid var(--border)' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, background-color 0.3s ease`,
              }}
            >
              {/* Feature name */}
              <div className="col-span-6 sm:col-span-7 px-6 lg:px-8 py-4">
                <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{row.feature}</span>
              </div>

              {/* Me column */}
              <div className="col-span-3 sm:col-span-2.5 text-center py-4 relative">
                <div className="absolute inset-0" style={{ background: 'var(--accent-light)', opacity: 0.5 }} />
                <span className="relative z-10">
                  {row.me ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                      <svg className="w-4 h-4" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                  )}
                </span>
              </div>

              {/* Others column */}
              <div className="col-span-3 sm:col-span-2.5 text-center py-4">
                {row.others ? (
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <svg className="w-4 h-4" style={{ color: '#EF4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to work with a specialist who truly understands ecommerce SEO?
          </p>
          <a href="#audit-form" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 30px var(--accent-glow)' }}>
            Get Your Free Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
