import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecommerce Content Strategy for SEO Growth | Moaz Haider',
  description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
  alternates: {
    canonical: 'https://moazhaider.com/services/ecommerce-content-strategy',
  },
}

export default function EcommerceContentStrategy() {
  const missingLayer = [
    {
      layer: 'Product Pages',
      what: 'Convert buyers ready to purchase',
      gap: 'Cannot answer "how to choose" or "why buy" questions'
    },
    {
      layer: 'Category Pages',
      what: 'Capture high-intent commercial searches',
      gap: 'Cannot establish expertise or build trust through education'
    },
    {
      layer: 'Content Layer',
      what: 'Build topical authority and answer discovery-stage questions',
      gap: 'Missing in most ecommerce SEO strategies'
    },
  ]

  const contentTypes = [
    {
      type: 'Pillar Content',
      purpose: 'Establish authority on core topics',
      example: 'Complete Guide to Running Shoe Technology',
      seoValue: 'Ranks for broad informational queries, attracts backlinks',
      depth: 'High'
    },
    {
      type: 'Comparison Content',
      purpose: 'Support product selection and decision-making',
      example: 'Trail Running Shoes vs Road Running Shoes',
      seoValue: 'Captures "vs" and comparison searches, drives qualified traffic',
      depth: 'Medium'
    },
    {
      type: 'Problem-Solution Content',
      purpose: 'Address buyer pain points and use cases',
      example: 'How to Choose Running Shoes for Plantar Fasciitis',
      seoValue: 'Ranks for problem-aware searches, supports product pages',
      depth: 'Medium'
    },
    {
      type: 'Topical Support Content',
      purpose: 'Build semantic relevance and topical depth',
      example: 'Understanding Pronation in Running',
      seoValue: 'Strengthens topic clusters, increases crawl depth',
      depth: 'Low'
    },
  ]

  const contentGapLogic = [
    { question: 'What topics do competitors rank for?', insight: 'Identify authority gaps you can fill' },
    { question: 'What questions do buyers ask before purchasing?', insight: 'Map content to buyer journey stages' },
    { question: 'Where are there keyword opportunities without product pages?', insight: 'Find informational demand to capture' },
    { question: 'Which topics support your product and category pages?', insight: 'Build semantic relevance through clusters' },
  ]

  const strategyPhases = [
    {
      phase: 'Authority Audit',
      what: 'Identify topical gaps, competitor coverage, and content opportunities',
      outcome: 'Clear map of where you lack authority vs competitors'
    },
    {
      phase: 'Cluster Mapping',
      what: 'Define pillar topics and supporting content architecture',
      outcome: 'Strategic content hierarchy aligned with business goals'
    },
    {
      phase: 'Content Production',
      what: 'Create pillar and supporting content with semantic optimization',
      outcome: 'Authority-building content that ranks and earns links'
    },
    {
      phase: 'Integration & Amplification',
      what: 'Internal linking to products/categories, ongoing expansion',
      outcome: 'Compounding authority that lifts entire catalog'
    },
  ]

  const faqs = [
    {
      question: 'How is ecommerce content strategy different from blogging?',
      answer: 'Ecommerce content strategy is architected around topical authority and commercial intent, not traffic volume. Every piece of content serves a strategic purpose: building expertise signals, supporting product/category rankings, or capturing demand that transactional pages cannot. Blogging focuses on publishing frequency; content strategy focuses on authority and semantic relevance.'
    },
    {
      question: 'Does content strategy help product and category pages rank?',
      answer: 'Yes, through topical authority and internal linking. When you build comprehensive content around a topic, Google sees your site as an authority on that subject. Strategic internal links from authoritative content pages to product and category pages strengthen their relevance signals and ranking potential. Content creates the authority halo that lifts your entire catalog.'
    },
    {
      question: 'How long does it take to build topical authority?',
      answer: 'Topical authority compounds over 6-12 months. Initial content may rank within weeks, but authority is earned through depth, consistency, and link acquisition. You need a cluster of related content, not isolated posts. The timeline depends on competition, existing domain authority, and content quality. Authority is a marathon, not a sprint.'
    },
    {
      question: 'Can content strategy work for stores with thousands of products?',
      answer: 'Yes, but the strategy must be selective. You do not need content for every product—you need content for core topics that drive authority and support high-value categories. Content strategy scales through topic clusters, not individual product pages. Focus on pillar topics that cover your catalog, not content for every SKU.'
    },
    {
      question: 'How do you measure content strategy ROI for ecommerce?',
      answer: 'Through assisted conversions, organic traffic growth to product/category pages, and authority metrics. Content rarely converts directly—it builds trust, answers questions, and drives qualified traffic deeper into your catalog. Track rankings for informational keywords, internal link click-through, and how content visitors behave on product pages. Authority is a long-term investment.'
    },
  ]

  return (
    <>
      <div className="jsonld-script">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Ecommerce Content Strategy',
              description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
                url: 'https://moazhaider.com',
              },
              serviceType: 'Ecommerce Content Strategy',
              areaServed: 'International',
              url: 'https://moazhaider.com/services/ecommerce-content-strategy',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>

      <Header />

      <main>
        {/* 1. AUTHORITY-FRAMED HERO */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                <Link href="/services" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Ecommerce SEO Services
                </Link>
                <span>/</span>
                <span>Ecommerce Content Strategy</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Topical Authority</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                    Ecommerce Content Strategy
                  </h1>

                  <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Become the authority in your niche through strategic content that supports product rankings and drives organic growth.
                  </p>

                  <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Content strategy for ecommerce is not blogging—it is building topical authority, establishing expertise signals, and creating the semantic foundation that makes your products and categories rank.
                  </p>

                  {/* Authority Pillars */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['Topical Authority', 'Semantic Relevance', 'Organic Expansion'].map((pillar, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ background: 'var(--card)', border: '2px solid var(--border)', color: 'var(--text)' }}
                      >
                        {pillar}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn btn-primary">
                    Build Content Authority
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right: Topic Cluster Visualization */}
                <div className="relative">
                  <div className="p-10 rounded-2xl relative" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                    {/* Central Pillar */}
                    <div className="relative z-10">
                      <div className="w-40 h-40 mx-auto rounded-2xl flex items-center justify-center relative" style={{ background: 'var(--accent)', color: 'white' }}>
                        <div className="text-center">
                          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="text-sm font-bold">Pillar Topic</div>
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-30 animate-ping" style={{ background: 'var(--accent)' }}></div>
                      </div>

                      {/* Supporting Content Nodes */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                          const radian = (angle * Math.PI) / 180
                          const radius = 120
                          const x = Math.cos(radian) * radius
                          const y = Math.sin(radian) * radius

                          return (
                            <div key={index}>
                              {/* Connection Line */}
                              <svg className="absolute top-1/2 left-1/2 w-full h-full" style={{ transform: 'translate(-50%, -50%)' }}>
                                <line
                                  x1="50%"
                                  y1="50%"
                                  x2={`calc(50% + ${x}px)`}
                                  y2={`calc(50% + ${y}px)`}
                                  stroke="var(--border)"
                                  strokeWidth="2"
                                  strokeDasharray="4 4"
                                  opacity="0.3"
                                />
                              </svg>

                              {/* Support Node */}
                              <div
                                className="absolute w-16 h-16 rounded-lg flex items-center justify-center"
                                style={{
                                  background: 'var(--surface)',
                                  border: '2px solid var(--border)',
                                  left: `calc(50% + ${x}px - 32px)`,
                                  top: `calc(50% + ${y}px - 32px)`,
                                }}
                              >
                                <svg className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Bottom Label */}
                    <div className="mt-20 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                        Topic Cluster Model: 1 Pillar + Supporting Content = Authority
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CONTENT IS THE MISSING LAYER */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Missing Layer in Ecommerce SEO
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Products convert, categories scale, but content builds the authority that makes both rank
                </p>
              </div>

              {/* Three-Layer Stack */}
              <div className="space-y-0 max-w-4xl mx-auto">
                {missingLayer.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      transform: `translateY(-${index * 8}px)`,
                      zIndex: missingLayer.length - index,
                    }}
                  >
                    <div
                      className="p-8 rounded-xl"
                      style={{
                        background: index === 2 ? 'var(--accent)' : 'var(--card)',
                        border: index === 2 ? 'none' : '2px solid var(--border)',
                        color: index === 2 ? 'white' : 'var(--text)',
                      }}
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-20 flex-shrink-0">
                          <div
                            className="text-5xl font-bold opacity-20"
                            style={{ color: index === 2 ? 'white' : 'var(--accent)' }}
                          >
                            {index + 1}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2" style={{ color: index === 2 ? 'white' : 'var(--text)' }}>
                            {item.layer}
                          </h3>
                          <p className="text-base mb-3" style={{ color: index === 2 ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)' }}>
                            {item.what}
                          </p>
                          <div className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4" style={{ color: index === 2 ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span style={{ color: index === 2 ? 'rgba(255,255,255,0.8)' : 'var(--muted)' }}>
                              {item.gap}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Insight */}
              <div className="mt-16 p-6 rounded-xl text-center max-w-3xl mx-auto" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
                  Without strategic content, your ecommerce SEO is incomplete—you capture demand but never build authority
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ECOMMERCE CONTENT AUTHORITY MODEL */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Authority Framework</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Content Authority Model
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four dimensions that transform content from publishing to authority building
                </p>
              </div>

              {/* Authority Matrix - 2x2 Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    dimension: 'Topical Depth',
                    principle: 'Cover topics comprehensively, not superficially',
                    how: 'One pillar topic with 10-20 supporting pieces beats 50 shallow posts on different topics',
                    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  },
                  {
                    dimension: 'Semantic Relationships',
                    principle: 'Connect content through topic clusters and internal links',
                    how: 'Pillar content links to supporting content, all link to relevant products/categories—building semantic webs',
                    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                  },
                  {
                    dimension: 'Commercial Alignment',
                    principle: 'Every piece of content serves a business purpose',
                    how: 'Content supports product discovery, answers buyer questions, or builds category authority—not just traffic',
                    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    dimension: 'Authority Signals',
                    principle: 'Expertise, depth, and backlink-worthy content',
                    how: 'Original research, data-driven insights, comprehensive guides that competitors cannot match',
                    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--accent)', color: 'white' }}>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d={item.icon} />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                      {item.dimension}
                    </h3>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                        <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>Principle</div>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.principle}</p>
                      </div>

                      <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                        <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>How it works</div>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.how}</p>
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--surface)', color: 'var(--accent)' }}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. CONTENT TYPES THAT DRIVE ECOMMERCE SEO */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Content Types That Build Authority
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Strategic content formats designed for ecommerce SEO, not generic blogging
                </p>
              </div>

              {/* Content Type Cards - Depth-based Layout */}
              <div className="space-y-6">
                {contentTypes.map((type, index) => {
                  const depthWidth = type.depth === 'High' ? '100%' : type.depth === 'Medium' ? '85%' : '70%'
                  const depthColor = type.depth === 'High' ? 'var(--accent)' : type.depth === 'Medium' ? 'var(--text)' : 'var(--text-secondary)'
                  
                  return (
                    <div key={index} className="flex justify-center">
                      <div
                        className="p-6 rounded-xl relative"
                        style={{
                          background: 'var(--card)',
                          border: '2px solid var(--border)',
                          width: depthWidth,
                        }}
                      >
                        <div className="grid md:grid-cols-12 gap-6 items-center">
                          {/* Type & Depth Badge */}
                          <div className="md:col-span-3">
                            <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--muted)' }}>Content Type</div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                              {type.type}
                            </h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'var(--surface)' }}>
                              <div className="w-2 h-2 rounded-full" style={{ background: depthColor }}></div>
                              <span className="text-xs font-bold" style={{ color: depthColor }}>{type.depth} Depth</span>
                            </div>
                          </div>

                          {/* Purpose & Example */}
                          <div className="md:col-span-5">
                            <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>Purpose</div>
                            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{type.purpose}</p>
                            <div className="text-xs font-mono p-2 rounded" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                              "{type.example}"
                            </div>
                          </div>

                          {/* SEO Value */}
                          <div className="md:col-span-4">
                            <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                              <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>SEO Value</div>
                              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{type.seoValue}</p>
                            </div>
                          </div>
                        </div>

                        {/* Depth Indicator Bar */}
                        <div className="mt-4 h-1 w-full rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-full rounded-full" style={{ background: depthColor, width: type.depth === 'High' ? '100%' : type.depth === 'Medium' ? '60%' : '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTENT GAP & OPPORTUNITY LOGIC */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Content Gap Analysis
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Strategic questions that reveal authority opportunities
                </p>
              </div>

              {/* Question-Insight Flow */}
              <div className="space-y-6">
                {contentGapLogic.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl flex items-center gap-6"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    {/* Question Icon */}
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)', color: 'white' }}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    {/* Question */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {item.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.insight}</span>
                      </div>
                    </div>

                    {/* Number */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ background: 'var(--surface)', color: 'var(--accent)' }}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 text-center">
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Need keyword mapping to identify content opportunities?
                </p>
                <Link href="/services/ecommerce-keyword-research" className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Explore Ecommerce Keyword Research
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW CONTENT SUPPORTS PRODUCTS & CATEGORIES */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Content-to-Commerce Integration
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  How strategic content strengthens product and category rankings
                </p>
              </div>

              {/* Integration Flow Diagram */}
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Pillar Content */}
                <div className="text-center">
                  <div className="inline-block p-6 rounded-xl" style={{ background: 'var(--accent)', color: 'white' }}>
                    <div className="text-sm font-bold mb-2">PILLAR CONTENT</div>
                    <div className="text-lg">"Complete Guide to Running Shoes"</div>
                  </div>
                  <div className="flex justify-center my-4">
                    <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Supporting Content Layer */}
                <div className="grid md:grid-cols-3 gap-4">
                  {['Trail Running Guide', 'Pronation Explained', 'Shoe Technology'].map((support, idx) => (
                    <div key={idx} className="p-4 rounded-lg text-center" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                      <div className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--accent)' }}>Supporting</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{support}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center my-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-0.5" style={{ background: 'var(--border)' }}></div>
                    <span className="text-xs font-bold uppercase" style={{ color: 'var(--accent)' }}>Internal Links</span>
                    <div className="w-16 h-0.5" style={{ background: 'var(--border)' }}></div>
                  </div>
                </div>

                {/* Commerce Layer */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '3px solid var(--accent)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <div className="text-sm font-bold" style={{ color: 'var(--accent)' }}>CATEGORY PAGES</div>
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Content builds topical authority that lifts category rankings</div>
                  </div>

                  <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '3px solid var(--accent)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <div className="text-sm font-bold" style={{ color: 'var(--accent)' }}>PRODUCT PAGES</div>
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Strategic links drive qualified traffic from educational content</div>
                  </div>
                </div>
              </div>

              {/* Bottom Outcome */}
              <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
                  Authority flows down, traffic flows through, rankings improve across the entire catalog
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. AUTHORITY READINESS ASSESSMENT */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Authority Readiness Assessment
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Where does your ecommerce brand fall on the content maturity scale?
                </p>
              </div>

              {/* Maturity Scale - Horizontal Progression */}
              <div className="space-y-6">
                {[
                  {
                    level: 'No Content',
                    stage: 'Level 0',
                    status: 'High Risk',
                    indicators: ['Only product and category pages exist', 'Zero informational content', 'No topical authority signals', 'Competitors own all educational searches'],
                    action: 'Start building foundational content',
                    color: '#DC2626',
                    bgColor: '#FEE2E2',
                    width: '60%'
                  },
                  {
                    level: 'Basic Blogging',
                    stage: 'Level 1',
                    status: 'Foundational',
                    indicators: ['Occasional blog posts published', 'No strategic topic clustering', 'Content disconnected from products', 'Random keyword targeting'],
                    action: 'Develop strategic content architecture',
                    color: '#EA580C',
                    bgColor: '#FFEDD5',
                    width: '70%'
                  },
                  {
                    level: 'Strategic Content',
                    stage: 'Level 2',
                    status: 'Growing Authority',
                    indicators: ['Topic clusters in place', 'Content supports commercial pages', 'Internal linking strategy exists', 'Some pillar content ranking'],
                    action: 'Scale content production and amplification',
                    color: '#CA8A04',
                    bgColor: '#FEF9C3',
                    width: '85%'
                  },
                  {
                    level: 'Authority Leader',
                    stage: 'Level 3',
                    status: 'Market Leader',
                    indicators: ['Recognized expert in niche', 'Comprehensive topic coverage', 'Earning backlinks organically', 'Content driving category/product rankings'],
                    action: 'Maintain leadership and expand to adjacent topics',
                    color: '#16A34A',
                    bgColor: '#DCFCE7',
                    width: '100%'
                  },
                ].map((maturity, index) => (
                  <div key={index} className="flex justify-center">
                    <div
                      className="p-6 rounded-xl relative overflow-hidden"
                      style={{
                        background: maturity.bgColor,
                        border: `3px solid ${maturity.color}`,
                        width: maturity.width,
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: maturity.color, color: 'white' }}>
                            {index}
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider font-bold" style={{ color: maturity.color, opacity: 0.7 }}>
                              {maturity.stage}
                            </div>
                            <h3 className="text-2xl font-bold" style={{ color: maturity.color }}>
                              {maturity.level}
                            </h3>
                          </div>
                        </div>
                        <div className="px-4 py-1.5 rounded-full text-xs font-bold" style={{ background: maturity.color, color: 'white' }}>
                          {maturity.status}
                        </div>
                      </div>

                      {/* Indicators Grid */}
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        {maturity.indicators.map((indicator, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: maturity.color }}></div>
                            <span className="text-sm" style={{ color: maturity.color }}>{indicator}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="pt-4 border-t flex items-center gap-3" style={{ borderColor: maturity.color, opacity: 0.3 }}>
                        <svg className="w-5 h-5 flex-shrink-0" style={{ color: maturity.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm font-semibold" style={{ color: maturity.color }}>
                          Next Step: {maturity.action}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: maturity.color, opacity: 0.2 }}>
                        <div className="h-full" style={{ background: maturity.color, width: `${(index + 1) * 25}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Insight */}
              <div className="mt-10 text-center">
                <p className="text-base font-semibold" style={{ color: 'var(--text)' }}>
                  Most ecommerce brands are stuck at Level 0-1. Authority leaders invest in Level 3.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. HOW STRATEGY IS BUILT */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Authority Development Process
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four strategic phases that transform content into competitive advantage
                </p>
              </div>

              {/* Grid-Based Process Flow */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {strategyPhases.map((phase, index) => (
                  <div
                    key={index}
                    className="relative p-8 rounded-xl group hover:scale-[1.02] transition-all"
                    style={{ background: 'var(--card)', border: '3px solid var(--border)' }}
                  >
                    {/* Phase Number - Large Background */}
                    <div className="absolute top-6 right-6 text-8xl font-bold opacity-5" style={{ color: 'var(--accent)' }}>
                      {index + 1}
                    </div>

                    {/* Phase Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: 'white' }}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold" style={{ color: 'var(--accent)' }}>
                          Phase {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                          {phase.phase}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                      <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>
                        What Happens
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {phase.what}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'var(--accent)', color: 'white' }}>
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold mb-1" style={{ opacity: 0.9 }}>
                          Outcome
                        </div>
                        <p className="text-sm font-semibold">
                          {phase.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Connector Arrow (for first 3 cards) */}
                    {index < 3 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                        <svg className="w-8 h-8" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Linear Flow */}
              <div className="flex items-center justify-center gap-4 flex-wrap p-6 rounded-xl" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <div className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                  Audit
                </div>
                <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                  Cluster Mapping
                </div>
                <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                  Content Production
                </div>
                <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="px-4 py-2 rounded-lg text-sm font-bold" style={{ background: 'var(--accent)', color: 'white' }}>
                  Authority Achieved
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONTENT INVESTMENT MODEL */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Content Authority Investment Model
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  How content investment compounds over time to build sustainable authority
                </p>
              </div>

              {/* Investment Timeline Visualization */}
              <div className="max-w-5xl mx-auto">
                {/* Timeline Curve */}
                <div className="relative h-96 mb-8" style={{ background: 'var(--card)', border: '2px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
                  {/* Y-axis Label */}
                  <div className="absolute left-4 top-1/2 -rotate-90 origin-center text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)', transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)' }}>
                    Authority Impact
                  </div>

                  {/* X-axis Label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Time Investment
                  </div>

                  {/* Growth Curve Points */}
                  <div className="relative h-full flex items-end justify-around px-12">
                    {[
                      { month: '0-3M', impact: '15%', label: 'Foundation', desc: 'Initial content production' },
                      { month: '3-6M', impact: '35%', label: 'Indexing', desc: 'Content starts ranking' },
                      { month: '6-9M', impact: '60%', label: 'Traction', desc: 'Authority signals build' },
                      { month: '9-12M', impact: '85%', label: 'Momentum', desc: 'Rankings accelerate' },
                      { month: '12M+', impact: '100%', label: 'Authority', desc: 'Compounding returns' },
                    ].map((point, index) => (
                      <div key={index} className="flex flex-col items-center relative" style={{ height: point.impact }}>
                        {/* Connecting Line */}
                        {index < 4 && (
                          <svg className="absolute left-full top-0 w-full h-full" style={{ overflow: 'visible' }}>
                            <line
                              x1="0"
                              y1="0"
                              x2="100%"
                              y2="-20%"
                              stroke="var(--accent)"
                              strokeWidth="3"
                              strokeDasharray="0"
                              opacity="0.3"
                            />
                          </svg>
                        )}

                        {/* Point */}
                        <div className="relative z-10 mb-3">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: 'var(--accent)', color: 'white', border: '4px solid var(--bg)' }}>
                            {index + 1}
                          </div>
                          {/* Pulse Animation for final point */}
                          {index === 4 && (
                            <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'var(--accent)', opacity: 0.3 }}></div>
                          )}
                        </div>

                        {/* Label Card */}
                        <div className="p-3 rounded-lg text-center min-w-[100px]" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                          <div className="text-xs font-bold mb-1" style={{ color: 'var(--accent)' }}>
                            {point.month}
                          </div>
                          <div className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>
                            {point.label}
                          </div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {point.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment Breakdown */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      investment: 'Content Production',
                      what: '10-20 strategic pieces over 6 months',
                      outcome: 'Foundation for topical authority',
                      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    },
                    {
                      investment: 'Strategic Optimization',
                      what: 'Internal linking, semantic clustering, amplification',
                      outcome: 'Authority flows to commercial pages',
                      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    },
                    {
                      investment: 'Long-term Compounding',
                      what: 'Authority strengthens, rankings improve, backlinks earn',
                      outcome: 'Sustainable competitive advantage',
                      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--accent)', color: 'white' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {item.investment}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {item.what}
                      </p>
                      <div className="pt-3 border-t text-xs font-semibold" style={{ borderColor: 'var(--border)', color: 'var(--accent)' }}>
                        → {item.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Insight */}
              <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <p className="text-base font-semibold mb-2" style={{ color: 'var(--text)' }}>
                  Content is not a cost—it is a compounding asset
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  The ROI curve is exponential, not linear. Authority builds slowly, then all at once.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. ADVANCED FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Content Strategy Questions
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="card p-6 group cursor-pointer"
                    open={index === 0}
                  >
                    <summary className="flex items-center justify-between font-semibold text-base list-none cursor-pointer" style={{ color: 'var(--text)' }}>
                      <span className="pr-4">{faq.question}</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. AUTHORITY-FOCUSED FINAL CTA */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                Become the Authority in Your Niche
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Strategic content that builds topical authority, supports rankings, and drives sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn btn-primary">
                  Build Content Authority
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Topical depth • Semantic authority • Scalable expansion
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
