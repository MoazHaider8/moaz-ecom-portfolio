'use client'

import { useRef } from 'react'
import Link from 'next/link'

export default function ServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const services = [
    {
      title: 'Ecommerce SEO Audit',
      description: 'Comprehensive analysis, every month',
      link: '/services/ecommerce-seo-audit',
      type: 'score',
      score: 94
    },
    {
      title: 'Keyword Research',
      description: 'High-intent keywords mapped',
      link: '/services/ecommerce-keyword-research',
      type: 'chart',
      keywords: 2500
    },
    {
      title: 'Product Page SEO',
      description: 'Optimize products that convert',
      link: '/services/product-page-seo',
      type: 'product',
      rating: 4.8
    },
    {
      title: 'Category Page SEO',
      description: 'High-volume keyword capture',
      link: '/services/category-page-seo',
      type: 'grid'
    },
    {
      title: 'Technical SEO',
      description: 'Foundation that drives rankings',
      link: '/services/technical-ecommerce-seo',
      type: 'speed',
      speed: 98
    },
    {
      title: 'Content Strategy',
      description: 'Editorial content for authority',
      link: '/services/ecommerce-content-strategy',
      type: 'content'
    }
  ]

  return (
    <div className="relative flex items-center gap-6">
      {/* Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className="hidden lg:flex flex-shrink-0 w-14 h-14 rounded-full items-center justify-center transition-all hover:opacity-80"
        style={{
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(50, 50, 50, 0.4)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
        }}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Cards Container */}
      <div className="flex-1 overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            scrollBehavior: 'smooth'
          }}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="flex-none w-full md:w-[310px] lg:w-[315px] snap-start rounded-[28px] p-6 relative group cursor-pointer transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(60, 30, 90, 0.5) 0%, rgba(40, 25, 70, 0.7) 100%)',
                border: '1px solid rgba(100, 70, 140, 0.25)',
                minHeight: '380px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* External Link Icon */}
              <div 
                className="absolute top-6 right-6 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 
                  className="text-[24px] font-bold mb-1 leading-tight"
                  style={{ color: '#ffffff', letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[13px] mb-8 mt-2"
                  style={{ color: 'rgba(180, 180, 180, 0.8)' }}
                >
                  {service.description}
                </p>

                {/* Visual Elements */}
                {service.type === 'score' && (
                  <div className="flex flex-col items-center justify-center mt-6">
                    <div className="relative w-32 h-32">
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="rgba(100, 70, 140, 0.3)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(service.score ?? 0) * 3.51} 351`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(139, 92, 246, 1)" />
                            <stop offset="100%" stopColor="rgba(168, 85, 247, 1)" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-white">{service.score ?? 0}</span>
                        <span className="text-xs text-purple-300">SEO Score</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-400">A+</div>
                        <div className="text-[9px] text-gray-400">Grade</div>
                      </div>
                      <div className="w-px h-10 bg-purple-500/30"></div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-300">Fast</div>
                        <div className="text-[9px] text-gray-400">Performance</div>
                      </div>
                    </div>
                  </div>
                )}

                {service.type === 'chart' && (
                  <div className="mt-4">
                    <div className="flex items-end gap-2 h-32 mb-4">
                      {[65, 45, 80, 55, 90, 70, 95].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full rounded-t-lg transition-all group-hover:scale-105"
                            style={{
                              height: `${height}%`,
                              background: i === 6 ? 'linear-gradient(to top, rgba(168, 85, 247, 0.8), rgba(139, 92, 246, 0.9))' : 
                                         'linear-gradient(to top, rgba(100, 70, 140, 0.4), rgba(120, 90, 160, 0.5))'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: 'rgba(100, 70, 140, 0.25)' }}>
                      <div>
                        <div className="text-2xl font-bold text-purple-300">{(service.keywords ?? 0).toLocaleString()}+</div>
                        <div className="text-[10px] text-gray-400">Keywords Researched</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 12L8 9L12 13L19 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M19 6V10M19 6H15" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm font-bold text-green-400">+127%</span>
                      </div>
                    </div>
                  </div>
                )}

                {service.type === 'product' && (
                  <div className="mt-4">
                    <div className="p-4 rounded-2xl" style={{ background: 'rgba(100, 70, 140, 0.2)', border: '1px solid rgba(120, 90, 160, 0.3)' }}>
                      <div className="flex gap-3 mb-3">
                        <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M9 9h6M9 13h6M9 17h4" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 rounded-full mb-2" style={{ background: 'rgba(139, 92, 246, 0.4)', width: '85%' }}></div>
                          <div className="h-2 rounded-full mb-2" style={{ background: 'rgba(100, 70, 140, 0.3)', width: '60%' }}></div>
                          <div className="flex items-center gap-1 mt-2">
                            {[1,2,3,4,5].map((star) => (
                              <svg key={star} width="12" height="12" viewBox="0 0 12 12" fill={star <= 4 ? "#fbbf24" : "#4b5563"}>
                                <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"/>
                              </svg>
                            ))}
                            <span className="text-[10px] text-purple-300 ml-1">{service.rating ?? 0}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 px-2 py-1.5 rounded-lg text-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                          <div className="text-[9px] text-gray-400">Rich Snippets</div>
                          <div className="text-xs font-bold text-purple-300">✓ Active</div>
                        </div>
                        <div className="flex-1 px-2 py-1.5 rounded-lg text-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                          <div className="text-[9px] text-gray-400">Schema</div>
                          <div className="text-xs font-bold text-purple-300">✓ Valid</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {service.type === 'grid' && (
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-4 gap-2">
                      {[1,2,3,4,5,6,7,8].map((item, i) => (
                        <div 
                          key={i}
                          className="aspect-square rounded-lg flex items-center justify-center transition-all hover:scale-110"
                          style={{ 
                            background: i === 7 ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(139, 92, 246, 0.5))' : 
                                       'rgba(100, 70, 140, 0.25)',
                            border: `1px solid rgba(120, 90, 160, ${i === 7 ? '0.5' : '0.3'})`
                          }}
                        >
                          <div className="w-4 h-4 rounded" style={{ background: i === 7 ? 'rgba(168, 85, 247, 0.8)' : 'rgba(120, 90, 160, 0.4)' }}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between px-4 py-2.5 rounded-xl" style={{ background: 'rgba(100, 70, 140, 0.25)' }}>
                      <span className="text-xs text-gray-300">Filter Navigation</span>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      </div>
                    </div>
                  </div>
                )}

                {service.type === 'speed' && (
                  <div className="mt-6">
                    <div className="relative mb-6">
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <svg width="140" height="80" viewBox="0 0 140 80">
                            <path d="M10 70 Q 70 10, 130 70" fill="none" stroke="rgba(100, 70, 140, 0.3)" strokeWidth="6" strokeLinecap="round"/>
                            <path d="M10 70 Q 70 10, 130 70" fill="none" stroke="url(#speedGradient)" strokeWidth="6" strokeLinecap="round" strokeDasharray="180" strokeDashoffset="20"/>
                            <defs>
                              <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.8)" />
                                <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
                                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                            <div className="text-4xl font-bold text-green-400">{service.speed}</div>
                            <div className="text-[10px] text-gray-400">Performance</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'FCP', value: '0.8s', color: 'green' },
                        { label: 'LCP', value: '1.2s', color: 'green' },
                        { label: 'CLS', value: '0.05', color: 'purple' }
                      ].map((metric, i) => (
                        <div key={i} className="text-center px-2 py-2 rounded-lg" style={{ background: 'rgba(100, 70, 140, 0.25)' }}>
                          <div className="text-[9px] text-gray-400">{metric.label}</div>
                          <div className={`text-sm font-bold ${metric.color === 'green' ? 'text-green-400' : 'text-purple-300'}`}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.type === 'content' && (
                  <div className="mt-4 space-y-2.5">
                    {[
                      { icon: '📝', title: 'Blog Posts', count: '24/mo', color: 'rgba(139, 92, 246, 0.3)' },
                      { icon: '📚', title: 'Buying Guides', count: '8/mo', color: 'rgba(120, 90, 170, 0.3)' },
                      { icon: '🎯', title: 'Landing Pages', count: '12/mo', color: 'rgba(100, 70, 150, 0.3)' }
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group-hover:translate-x-1"
                        style={{ background: item.color, border: '1px solid rgba(130, 90, 180, 0.4)' }}
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <div className="text-[10px] text-purple-300">{item.count}</div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 4l4 4-4 4" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className="hidden lg:flex flex-shrink-0 w-14 h-14 rounded-full items-center justify-center transition-all hover:opacity-80"
        style={{
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(50, 50, 50, 0.4)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
        }}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
