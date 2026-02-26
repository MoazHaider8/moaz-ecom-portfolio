import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Ecommerce Content Strategy for SEO Growth | Moaz Haider',
  description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
  alternates: {
    canonical: 'https://moazhaider.com/services/ecommerce-content-strategy',
  },
  openGraph: {
    title: 'Ecommerce Content Strategy for SEO Growth | Moaz Haider',
    description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
    url: 'https://moazhaider.com/services/ecommerce-content-strategy',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Content Strategy for SEO Growth | Moaz Haider',
    description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
  },
}

export default function EcommerceContentStrategy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/ecommerce-content-strategy#service',
        name: 'Ecommerce Content Strategy',
        description: 'Ecommerce content strategy focused on building topical authority, supporting product and category rankings, and driving scalable organic growth.',
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        serviceType: 'Ecommerce Content Strategy',
        areaServed: 'International',
        url: 'https://moazhaider.com/services/ecommerce-content-strategy',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How is ecommerce content strategy different from blogging?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce content strategy is architected around topical authority and commercial intent, not traffic volume. Every piece of content serves a strategic purpose: building expertise signals, supporting product/category rankings, or capturing demand that transactional pages cannot. Blogging focuses on publishing frequency; content strategy focuses on authority and semantic relevance.' } },
          { '@type': 'Question', name: 'Does content strategy help product and category pages rank?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, through topical authority and internal linking. When you build comprehensive content around a topic, Google sees your site as an authority on that subject. Strategic internal links from authoritative content pages to product and category pages strengthen their relevance signals and ranking potential.' } },
          { '@type': 'Question', name: 'How long does it take to build topical authority?', acceptedAnswer: { '@type': 'Answer', text: 'Topical authority compounds over 6-12 months. Initial content may rank within weeks, but authority is earned through depth, consistency, and link acquisition. You need a cluster of related content, not isolated posts.' } },
          { '@type': 'Question', name: 'Can content strategy work for stores with thousands of products?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the strategy must be selective. You do not need content for every product — you need content for core topics that drive authority and support high-value categories. Content strategy scales through topic clusters, not individual product pages.' } },
          { '@type': 'Question', name: 'How do you measure content strategy ROI for ecommerce?', acceptedAnswer: { '@type': 'Answer', text: 'Through assisted conversions, organic traffic growth to product/category pages, and authority metrics. Content rarely converts directly — it builds trust, answers questions, and drives qualified traffic deeper into your catalog.' } },
        ],
      },
    ],
  }

  const missingLayer = [
    { layer: 'Product Pages', what: 'Convert buyers ready to purchase', gap: 'Cannot answer "how to choose" or "why buy" questions' },
    { layer: 'Category Pages', what: 'Capture high-intent commercial searches', gap: 'Cannot establish expertise or build trust through education' },
    { layer: 'Content Layer', what: 'Build topical authority and answer discovery-stage questions', gap: 'Missing in most ecommerce SEO strategies' },
  ]

  const contentTypes = [
    { type: 'Pillar Content', purpose: 'Establish authority on core topics', example: 'Complete Guide to Running Shoe Technology', seoValue: 'Ranks for broad informational queries, attracts backlinks', depth: 'High' },
    { type: 'Comparison Content', purpose: 'Support product selection and decision-making', example: 'Trail Running Shoes vs Road Running Shoes', seoValue: 'Captures "vs" and comparison searches, drives qualified traffic', depth: 'Medium' },
    { type: 'Problem-Solution Content', purpose: 'Address buyer pain points and use cases', example: 'How to Choose Running Shoes for Plantar Fasciitis', seoValue: 'Ranks for problem-aware searches, supports product pages', depth: 'Medium' },
    { type: 'Topical Support Content', purpose: 'Build semantic relevance and topical depth', example: 'Understanding Pronation in Running', seoValue: 'Strengthens topic clusters, increases crawl depth', depth: 'Low' },
  ]

  const strategyPhases = [
    { phase: 'Authority Audit', what: 'Identify topical gaps, competitor coverage, and content opportunities', outcome: 'Clear map of where you lack authority vs competitors' },
    { phase: 'Cluster Mapping', what: 'Define pillar topics and supporting content architecture', outcome: 'Strategic content hierarchy aligned with business goals' },
    { phase: 'Content Production', what: 'Create pillar and supporting content with semantic optimization', outcome: 'Authority-building content that ranks and earns links' },
    { phase: 'Integration & Amplification', what: 'Internal linking to products/categories, ongoing expansion', outcome: 'Compounding authority that lifts entire catalog' },
  ]

  const faqs = [
    { question: 'How is ecommerce content strategy different from blogging?', answer: 'Ecommerce content strategy is architected around topical authority and commercial intent, not traffic volume. Every piece of content serves a strategic purpose: building expertise signals, supporting product/category rankings, or capturing demand that transactional pages cannot. Blogging focuses on publishing frequency; content strategy focuses on authority and semantic relevance.' },
    { question: 'Does content strategy help product and category pages rank?', answer: 'Yes, through topical authority and internal linking. When you build comprehensive content around a topic, Google sees your site as an authority on that subject. Strategic internal links from authoritative content pages to product and category pages strengthen their relevance signals and ranking potential. Content creates the authority halo that lifts your entire catalog.' },
    { question: 'How long does it take to build topical authority?', answer: 'Topical authority compounds over 6-12 months. Initial content may rank within weeks, but authority is earned through depth, consistency, and link acquisition. You need a cluster of related content, not isolated posts. The timeline depends on competition, existing domain authority, and content quality. Authority is a marathon, not a sprint.' },
    { question: 'Can content strategy work for stores with thousands of products?', answer: 'Yes, but the strategy must be selective. You do not need content for every product—you need content for core topics that drive authority and support high-value categories. Content strategy scales through topic clusters, not individual product pages. Focus on pillar topics that cover your catalog, not content for every SKU.' },
    { question: 'How do you measure content strategy ROI for ecommerce?', answer: 'Through assisted conversions, organic traffic growth to product/category pages, and authority metrics. Content rarely converts directly—it builds trust, answers questions, and drives qualified traffic deeper into your catalog. Track rankings for informational keywords, internal link click-through, and how content visitors behave on product pages. Authority is a long-term investment.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* ━━━ 1. HERO ━━━ */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.4 }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.3 }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-6">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Services
              </Link>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
              <div>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                  Topical Authority
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Ecommerce <span className="gold-gradient-text">Content Strategy</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Become the authority in your niche through strategic content that supports product rankings and drives organic growth. Not blogging — authority building.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['Topical Authority', 'Semantic Relevance', 'Organic Expansion'].map((pillar, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                      {pillar}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Build Content Authority
                  </Link>
                  <Link href="/services/ecommerce-keyword-research" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    Keyword Research First
                  </Link>
                </div>
              </div>

              {/* Right: Topic Cluster Visual */}
              <div className="p-8 rounded-2xl relative" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="relative" style={{ height: '280px' }}>
                  {/* Central Pillar */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl flex items-center justify-center z-10" style={{ background: 'var(--accent)', color: 'white' }}>
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <div className="text-[10px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Pillar Topic</div>
                    </div>
                  </div>

                  {/* Support Nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const radian = (angle * Math.PI) / 180
                    const radius = 110
                    const x = Math.cos(radian) * radius
                    const y = Math.sin(radian) * radius
                    return (
                      <div key={i}>
                        <div className="absolute top-1/2 left-1/2 origin-left h-px opacity-20" style={{ background: 'var(--accent)', width: `${radius}px`, transform: `rotate(${angle}deg)` }} />
                        <div className="absolute w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)', left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)` }}>
                          <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                    Topic Cluster Model: 1 Pillar + Supporting Content = Authority
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. THE MISSING LAYER ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Gap
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                The Missing <span className="gold-gradient-text">Layer</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Products convert, categories scale, but content builds the authority that makes both rank
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {missingLayer.map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden" style={{ background: i === 2 ? 'var(--accent)' : 'var(--card)', border: i === 2 ? 'none' : '1px solid var(--border)' }}>
                  {i !== 2 && <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />}
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-4xl font-bold opacity-20" style={{ fontFamily: 'var(--font-heading)', color: i === 2 ? 'white' : 'var(--accent)' }}>{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: i === 2 ? 'white' : 'var(--text)' }}>{item.layer}</h3>
                      <p className="text-sm mb-3" style={{ color: i === 2 ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)' }}>{item.what}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <svg className="w-4 h-4" style={{ color: i === 2 ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span style={{ color: i === 2 ? 'rgba(255,255,255,0.8)' : 'var(--muted)' }}>{item.gap}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 3. CONTENT TYPES ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Content Types
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Content That <span className="gold-gradient-text">Builds Authority</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Strategic content formats designed for ecommerce SEO, not generic blogging
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {contentTypes.map((type, i) => {
                const depthColor = type.depth === 'High' ? 'var(--accent)' : type.depth === 'Medium' ? 'var(--text)' : 'var(--text-secondary)'
                return (
                  <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{type.type}</h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'var(--surface)', color: depthColor }}>
                          <span className="w-2 h-2 rounded-full" style={{ background: depthColor }} />
                          {type.depth} Depth
                        </span>
                      </div>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{type.purpose}</p>
                      <div className="text-xs font-mono p-3 rounded-xl mb-3" style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                        &ldquo;{type.example}&rdquo;
                      </div>
                      <div className="p-3 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>SEO Value</div>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{type.seoValue}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ━━━ 4. STRATEGY PHASES ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Authority <span className="gold-gradient-text">Development</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four strategic phases that transform content into competitive advantage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {strategyPhases.map((phase, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold" style={{ color: 'var(--accent)' }}>Phase {i + 1}</div>
                        <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{phase.phase}</h3>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--surface)' }}>
                      <div className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--accent)' }}>What Happens</div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{phase.what}</p>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--accent)', color: 'white' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold mb-1 opacity-90">Outcome</div>
                        <p className="text-sm font-semibold">{phase.outcome}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 5. WHO FOR / NOT FOR ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Right Fit
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Is This <span className="gold-gradient-text">Right for You?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-7 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--status-success-light)', color: 'var(--status-success)' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Built For</h3>
                </div>
                <ul className="space-y-3">
                  {['Brands wanting to build topical authority in their niche', 'Stores where competitors own all informational searches', 'Teams ready to invest in long-term organic growth', 'Ecommerce sites needing content to support product rankings'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--status-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                    <svg className="w-5 h-5" style={{ color: 'var(--muted)' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Not Designed For</h3>
                </div>
                <ul className="space-y-3">
                  {['Brands expecting instant traffic from content', 'Stores wanting random blog posts, not strategic content', 'Teams unable to commit to 6+ months of content investment', 'Projects seeking short-term ranking tactics over authority'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 6. FAQs ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Content Strategy <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ━━━ 7. CTA ━━━ */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Become the <span className="gold-gradient-text">Authority</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Strategic content that builds topical authority, supports rankings, and drives sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Build Content Authority
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Topical depth &middot; Semantic authority &middot; Scalable expansion
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
