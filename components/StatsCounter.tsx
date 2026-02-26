'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 7, suffix: '+', label: 'Years Experience', description: 'Dedicated exclusively to ecommerce SEO' },
  { value: 50, suffix: '+', label: 'Stores Optimized', description: 'Across fashion, beauty, electronics & more' },
  { value: 6, suffix: '', label: 'Countries Served', description: 'USA, UK, Canada, AU, UAE & Germany' },
  { value: 285, suffix: '%', label: 'Avg. Traffic Growth', description: 'Organic traffic increase for clients' },
]

function AnimatedNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
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
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.3 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 block" style={{ color: 'var(--accent)' }}>
            The Numbers
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', lineHeight: '1.1' }}>
            Results That Speak<br className="hidden md:block" /> for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px var(--accent-glow)' }} />

              {/* Number */}
              <div
                className="text-4xl lg:text-5xl xl:text-6xl font-black mb-3 transition-all duration-500"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Label */}
              <h3 className="text-sm lg:text-base font-bold mb-2" style={{ color: 'var(--text)' }}>
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500 rounded-full" style={{ background: 'var(--accent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
