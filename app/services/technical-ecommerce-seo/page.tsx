import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO for Ecommerce Websites | Moaz Haider',
  description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture for growth-focused online stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/technical-ecommerce-seo',
  },
  openGraph: {
    title: 'Technical SEO for Ecommerce Websites | Moaz Haider',
    description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture for growth-focused online stores.',
    url: 'https://moazhaider.com/services/technical-ecommerce-seo',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO for Ecommerce Websites | Moaz Haider',
    description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture for growth-focused online stores.',
  },
}

export default function TechnicalEcommerceSEOPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/technical-ecommerce-seo#service',
        name: 'Technical SEO for Ecommerce',
        serviceType: 'Technical Ecommerce SEO',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/technical-ecommerce-seo',
        description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture for growth-focused online stores.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is technical SEO a one-time fix or ongoing work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Technical SEO is foundational but not static. Initial fixes establish architecture, but ongoing maintenance is required as catalogs grow, platforms update, and search algorithms evolve. Most ecommerce sites benefit from quarterly technical reviews.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does technical SEO differ for ecommerce vs other sites?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce technical SEO deals with unique challenges: faceted navigation creating infinite URL combinations, inventory-driven content changes, platform-imposed URL structures, dynamic pricing affecting crawl patterns, and category hierarchies requiring careful canonicalization. These aren\'t concerns for content sites or SaaS.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do ecommerce platforms limit what technical SEO can achieve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, platforms impose constraints—especially SaaS platforms like Shopify or BigCommerce. However, most technical SEO goals can be achieved within platform limitations through strategic workarounds, app integrations, or Liquid/theme-level modifications. Custom platforms offer more control but require more development resources.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can technical SEO be implemented without a full site rebuild?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Most technical SEO improvements are incremental: schema additions, crawl directive updates, performance optimizations, and indexation control can be implemented without rebuilding the site. Major URL restructures or architecture changes may require migration planning.',
            },
          },
          {
            '@type': 'Question',
            name: 'What tools are required for technical ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enterprise crawlers (Screaming Frog, Sitebulb), Google Search Console for indexation monitoring, PageSpeed Insights for Core Web Vitals, log file analyzers for crawl behavior, and platform-specific diagnostic tools. I provide these as part of technical SEO engagements.',
            },
          },
        ],
      },
    ],
  }

  const architectureLayers = [
    { 
      layer: 'Application',
      depth: '4',
      desc: 'User-facing product & category pages',
      critical: 'Page templates, dynamic content, JavaScript frameworks',
      dependency: 'Performance Layer',
    },
    { 
      layer: 'Crawl Control',
      depth: '3',
      desc: 'Governs search engine access & discovery',
      critical: 'Robots.txt, XML sitemaps, crawl directives, parameter handling',
      dependency: 'Index Layer',
    },
    { 
      layer: 'Index Strategy',
      depth: '2',
      desc: 'Controls what enters search indices',
      critical: 'Canonicals, noindex rules, hreflang, duplicate prevention',
      dependency: 'Performance Layer',
    },
    { 
      layer: 'Performance',
      depth: '1',
      desc: 'Foundation: speed, rendering, server response',
      critical: 'Core Web Vitals, TTFB, LCP, CLS, CDN, caching',
      dependency: 'None (foundational)',
    },
  ]

  const systemFailures = [
    {
      failure: 'Crawl Budget Exhaustion',
      cause: 'Infinite faceted URLs, parameter-driven pages',
      impact: 'High-value pages undercrawled',
      scale: 'Compounds at 10K+ SKUs',
    },
    {
      failure: 'Index Bloat',
      cause: 'Missing canonicals, URL parameter indexation',
      impact: 'Diluted ranking signals, duplicate content',
      scale: 'Degrades with catalog growth',
    },
    {
      failure: 'Performance Collapse',
      cause: 'Heavy category pages, unoptimized images, JS overhead',
      impact: 'CWV failures, ranking penalties',
      scale: 'Worsens with inventory expansion',
    },
  ]

  const technicalLayers = [
    {
      layer: 'L1',
      title: 'Crawl & Index Control Layer',
      desc: 'Governs search engine resource allocation and page discovery',
      tradeoffs: 'Blocking low-value URLs saves crawl budget but risks hiding edge cases',
      constraints: ['Crawl budget limits', 'Faceted nav complexity', 'Parameter explosion'],
      technical: [
        'Robots.txt directive hierarchy (user-agent specific rules)',
        'XML sitemap prioritization (last-mod signals for fresh inventory)',
        'Canonical consolidation (variant → parent, filter → clean URL)',
        'Parameter handling (noindex vs canonical vs robots for filters)',
      ],
    },
    {
      layer: 'L2',
      title: 'Architecture & Link Distribution',
      desc: 'Internal linking structure that balances crawl depth with authority flow',
      tradeoffs: 'Shallow architecture aids crawl efficiency but may dilute category authority',
      constraints: ['Platform URL patterns', 'Breadcrumb limitations', 'Menu depth restrictions'],
      technical: [
        'Category hierarchy design (max 3 levels to prevent orphaned pages)',
        'Internal link equity flow (strategic anchor text, link placement)',
        'Pagination SEO (rel=next/prev deprecation, view-all considerations)',
        'Orphaned product prevention (ensure every SKU has category path)',
      ],
    },
    {
      layer: 'L3',
      title: 'Performance & Rendering',
      desc: 'Speed, rendering strategy, and resource optimization for crawlers + users',
      tradeoffs: 'Client-side rendering improves UX but complicates bot accessibility',
      constraints: ['Platform server limits', 'Third-party script bloat', 'Image CDN costs'],
      technical: [
        'Core Web Vitals optimization (LCP <2.5s, CLS <0.1, INP <200ms)',
        'Rendering strategy (SSR for products, CSR for filters, hybrid for scale)',
        'Resource prioritization (critical CSS, async JS, image lazy-loading)',
        'Server response time (TTFB <200ms via CDN, caching, DB optimization)',
      ],
    },
    {
      layer: 'L4',
      title: 'Platform Constraints & Schema',
      desc: 'Working within or around platform-imposed technical limitations',
      tradeoffs: 'SaaS platforms limit customization but reduce dev overhead',
      constraints: ['URL structure rigidity', 'App ecosystem dependencies', 'Theme limitations'],
      technical: [
        'Platform-specific workarounds (Shopify /collections/, Magento layered nav)',
        'JavaScript framework SEO (React/Vue hydration, pre-rendering)',
        'Schema implementation (Product, Offer, AggregateRating, Breadcrumb)',
        'Mobile-first indexing compliance (responsive vs adaptive vs m. subdomain)',
      ],
    },
  ]

  const outcomes = [
    {
      title: 'Cleaner Indexation',
      desc: 'Eliminate low-value pages from search engine indices, focusing crawl budget on revenue-generating pages',
      metric: 'Index efficiency',
    },
    {
      title: 'Faster Page Discovery',
      desc: 'New products and categories surface in search results within days, not weeks',
      metric: 'Crawl velocity',
    },
    {
      title: 'Improved Ranking Stability',
      desc: 'Reduce ranking volatility caused by technical issues, canonicalization conflicts, or crawl errors',
      metric: 'Rank consistency',
    },
    {
      title: 'Catalog Scalability',
      desc: 'Technical foundation that supports catalog growth without SEO degradation',
      metric: 'Growth readiness',
    },
  ]

  const implementationPhases = [
    { phase: 'Technical Assessment', what: 'Crawl analysis, indexation audit, performance baseline, platform constraint mapping' },
    { phase: 'Priority Mapping', what: 'Identify high-impact fixes, resource requirements, implementation sequence' },
    { phase: 'Implementation', what: 'Execute technical changes via platform config, theme edits, or dev collaboration' },
    { phase: 'Validation & Monitoring', what: 'Confirm changes via crawl verification, GSC monitoring, performance tracking' },
  ]

  const faqs = [
    {
      question: 'Is technical SEO a one-time fix or ongoing work?',
      answer: 'Technical SEO is foundational but not static. Initial fixes establish architecture, but ongoing maintenance is required as catalogs grow, platforms update, and search algorithms evolve. Most ecommerce sites benefit from quarterly technical reviews.',
    },
    {
      question: 'How does technical SEO differ for ecommerce vs other sites?',
      answer: 'Ecommerce technical SEO deals with unique challenges: faceted navigation creating infinite URL combinations, inventory-driven content changes, platform-imposed URL structures, dynamic pricing affecting crawl patterns, and category hierarchies requiring careful canonicalization. These aren\'t concerns for content sites or SaaS.',
    },
    {
      question: 'Do ecommerce platforms limit what technical SEO can achieve?',
      answer: 'Yes, platforms impose constraints—especially SaaS platforms like Shopify or BigCommerce. However, most technical SEO goals can be achieved within platform limitations through strategic workarounds, app integrations, or Liquid/theme-level modifications. Custom platforms offer more control but require more development resources.',
    },
    {
      question: 'Can technical SEO be implemented without a full site rebuild?',
      answer: 'Absolutely. Most technical SEO improvements are incremental: schema additions, crawl directive updates, performance optimizations, and indexation control can be implemented without rebuilding the site. Major URL restructures or architecture changes may require migration planning.',
    },
    {
      question: 'What tools are required for technical ecommerce SEO?',
      answer: 'Enterprise crawlers (Screaming Frog, Sitebulb), Google Search Console for indexation monitoring, PageSpeed Insights for Core Web Vitals, log file analyzers for crawl behavior, and platform-specific diagnostic tools. I provide these as part of technical SEO engagements.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* 1. HERO - ARCHITECTURAL FOUNDATION */}
        <section className="py-20 md:py-24" style={{ paddingTop: '140px' }}>
          <div className="container">
            <div className="mb-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ecommerce SEO Services
              </Link>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-start">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>Infrastructure & Scale</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text)' }}>
                  Technical SEO for Ecommerce
                </h1>
                <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Foundation-level technical architecture for ecommerce sites that need to control crawl behavior, manage indexation at scale, and maintain performance under catalog growth.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-lg" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div>
                    <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>4</div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>Technical Layers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>∞</div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>Scale Capacity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>5+</div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>Platforms</div>
                  </div>
                </div>

                <Link href="/contact" className="btn btn-primary">
                  Request Technical SEO Review
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: Stack Architecture Visualization */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--muted)' }}>System Architecture</div>
                <div className="space-y-0 relative">
                  {/* Connection Lines */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
                  
                  {architectureLayers.map((layer, index) => (
                    <div key={index} className="relative">
                      <div
                        className="p-5 relative"
                        style={{
                          background: index === 0 ? 'var(--accent)' : 'var(--card)',
                          color: index === 0 ? 'white' : 'var(--text)',
                          border: index === 0 ? 'none' : '2px solid var(--border)',
                          borderTopLeftRadius: index === 0 ? '12px' : '0',
                          borderTopRightRadius: index === 0 ? '12px' : '0',
                          borderBottomLeftRadius: index === 3 ? '12px' : '0',
                          borderBottomRightRadius: index === 3 ? '12px' : '0',
                          marginLeft: `${index * 12}px`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div
                                className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                                style={{
                                  background: index === 0 ? 'rgba(255,255,255,0.2)' : 'var(--surface)',
                                  color: index === 0 ? 'white' : 'var(--text)',
                                }}
                              >
                                L{layer.depth}
                              </div>
                              <div className="text-sm font-bold">{layer.layer}</div>
                            </div>
                            <div className="text-xs opacity-80">{layer.desc}</div>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(parseInt(layer.depth))].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-6 rounded-full"
                                style={{ background: index === 0 ? 'rgba(255,255,255,0.3)' : 'var(--accent)' }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs" style={{ color: 'var(--muted)' }}>↑ Dependency flow: Top layer requires all layers below</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SYSTEM FAILURE ANALYSIS */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Why Ecommerce Technical SEO Breaks at Scale
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Common failure modes that emerge as catalogs grow beyond platform defaults
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
                  <thead>
                    <tr style={{ background: 'var(--card)', borderBottom: '2px solid var(--border)' }}>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)' }}>System Failure</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)' }}>Root Cause</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)' }}>SEO Impact</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)' }}>Scale Factor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systemFailures.map((failure, index) => (
                      <tr
                        key={index}
                        className="hover:opacity-90 transition-opacity"
                        style={{
                          background: index % 2 === 0 ? 'var(--surface)' : 'var(--card)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <td className="p-4">
                          <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{failure.failure}</div>
                        </td>
                        <td className="p-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{failure.cause}</td>
                        <td className="p-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{failure.impact}</td>
                        <td className="p-4">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
                            style={{ background: '#FEE2E2', color: '#DC2626' }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {failure.scale}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--card)', border: '2px solid var(--accent)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text)' }}>Engineering reality:</strong> SaaS platforms prioritize merchant ease over search engine efficiency. Shopify's /collections/ rigidity, WooCommerce's plugin conflicts, Magento's resource overhead—each platform introduces technical debt that compounds with growth. Most stores hit performance walls at 5K-10K SKUs without architectural intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL LAYER SYSTEM */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                The Four-Layer Technical System
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Interdependent technical layers—each with trade-offs, constraints, and implementation considerations
              </p>
            </div>

            {/* Horizontal Layer Cards */}
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {technicalLayers.map((layer, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div
                      className="h-full p-6 rounded-lg relative"
                      style={{
                        background: 'var(--card)',
                        border: '2px solid var(--border)',
                      }}
                    >
                      {/* Large Layer Number */}
                      <div
                        className="text-6xl font-bold mb-4 opacity-10 absolute top-4 right-4"
                        style={{ color: 'var(--accent)' }}
                      >
                        {layer.layer}
                      </div>

                      {/* Layer Badge */}
                      <div className="relative z-10 mb-4">
                        <div
                          className="inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                          style={{ background: 'var(--accent)', color: 'white' }}
                        >
                          {layer.layer}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: 'var(--text)' }}>
                        {layer.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs mb-4 leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                        {layer.desc}
                      </p>

                      {/* Divider */}
                      <div className="h-px mb-4" style={{ background: 'var(--border)' }} />

                      {/* Trade-off */}
                      <div className="mb-4">
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-bold uppercase" style={{ color: '#F59E0B' }}>Trade-off</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {layer.tradeoffs}
                        </p>
                      </div>

                      {/* Constraints */}
                      <div className="mb-4">
                        <div className="text-xs font-bold uppercase mb-2" style={{ color: 'var(--muted)' }}>
                          Constraints
                        </div>
                        <div className="space-y-1">
                          {layer.constraints.map((constraint, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{constraint}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px mb-4" style={{ background: 'var(--border)' }} />

                      {/* Technical Points */}
                      <div>
                        <div className="text-xs font-bold uppercase mb-3" style={{ color: 'var(--muted)' }}>
                          Implementation
                        </div>
                        <div className="space-y-2">
                          {layer.technical.map((point, i) => (
                            <div
                              key={i}
                              className="p-2 rounded text-xs leading-relaxed"
                              style={{ background: 'var(--surface)', color: 'var(--text-secondary)' }}
                            >
                              <span className="font-bold" style={{ color: 'var(--accent)' }}>{i + 1}.</span> {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connection Arrow (desktop only) */}
                    {index < 3 && (
                      <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Summary */}
              <div className="mt-10 text-center">
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  ← Foundational layers on the left | Application layers on the right →
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SYSTEM OUTCOMES */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                What This Technical Foundation Enables
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Measured system-level outcomes, not vanity metrics
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-5">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg relative overflow-hidden"
                    style={{
                      background: 'var(--card)',
                      border: '2px solid var(--border)',
                    }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5" style={{ background: 'var(--accent)' }} />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                          {outcome.title}
                        </h3>
                        <div
                          className="px-2 py-1 rounded text-xs font-mono font-semibold"
                          style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
                        >
                          {outcome.metric}
                        </div>
                      </div>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {outcome.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Crawl Flow Diagram */}
              <div className="mt-12 p-8 rounded-lg" style={{ background: 'var(--card)', border: '3px solid var(--accent)' }}>
                <div className="text-xs font-bold uppercase tracking-wide mb-6 text-center" style={{ color: 'var(--muted)' }}>Optimized Crawl → Index → Rank Flow</div>
                <div className="flex items-center justify-between gap-4">
                  {[
                    { label: 'Crawl Entry', sub: 'XML Sitemap + Internal Links', icon: '🕷️' },
                    { label: 'Budget Allocation', sub: 'Priority Pages First', icon: '⚡' },
                    { label: 'Index Decision', sub: 'Canonical + Quality Signals', icon: '📑' },
                    { label: 'Ranking', sub: 'Performance + Relevance', icon: '📈' },
                  ].map((step, index) => (
                    <div key={index} className="flex-1 text-center">
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <div className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>{step.label}</div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{step.sub}</div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 translate-x-full w-8 h-0.5" style={{ background: 'var(--accent)', left: '0' }}>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2" style={{ borderColor: 'var(--accent)' }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.5. PLATFORM CONSTRAINTS MATRIX */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Platform Constraints & Technical Overhead
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Each ecommerce platform introduces unique technical limitations that must be understood and navigated
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    platform: 'Shopify',
                    color: '#95BF47',
                    constraints: [
                      { type: 'URL Structure', severity: 'High', note: '/collections/ and /products/ fixed' },
                      { type: 'JavaScript Control', severity: 'Medium', note: 'Liquid template limits' },
                      { type: 'Server Access', severity: 'Critical', note: 'No server-level control' },
                    ],
                  },
                  {
                    platform: 'WooCommerce',
                    color: '#7F54B3',
                    constraints: [
                      { type: 'Plugin Conflicts', severity: 'High', note: 'Performance degradation' },
                      { type: 'Server Resources', severity: 'Medium', note: 'Shared hosting limits' },
                      { type: 'Speed Optimization', severity: 'High', note: 'WordPress bloat' },
                    ],
                  },
                  {
                    platform: 'Magento',
                    color: '#EE672F',
                    constraints: [
                      { type: 'Layered Navigation', severity: 'Critical', note: 'URL explosion risk' },
                      { type: 'Resource Overhead', severity: 'High', note: 'Heavy server demands' },
                      { type: 'Dev Dependency', severity: 'Medium', note: 'Technical expertise required' },
                    ],
                  },
                  {
                    platform: 'BigCommerce',
                    color: '#1D4E89',
                    constraints: [
                      { type: 'Template Access', severity: 'High', note: 'Limited customization' },
                      { type: 'Faceted URLs', severity: 'High', note: 'Parameter indexation' },
                      { type: 'API Limits', severity: 'Medium', note: 'Rate limiting constraints' },
                    ],
                  },
                  {
                    platform: 'Custom Build',
                    color: '#6366F1',
                    constraints: [
                      { type: 'Documentation', severity: 'Medium', note: 'Undocumented architecture' },
                      { type: 'Dev Resources', severity: 'High', note: 'Ongoing development needs' },
                      { type: 'Technical Debt', severity: 'Variable', note: 'Legacy code issues' },
                    ],
                  },
                  {
                    platform: 'Headless',
                    color: '#10B981',
                    constraints: [
                      { type: 'Rendering', severity: 'Critical', note: 'JS rendering complexity' },
                      { type: 'Crawl Budget', severity: 'High', note: 'Client-side hydration' },
                      { type: 'Implementation', severity: 'High', note: 'Technical sophistication required' },
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg"
                    style={{
                      background: 'var(--card)',
                      border: '2px solid var(--border)',
                      borderTop: `4px solid ${item.color}`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.platform.charAt(0)}
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                        {item.platform}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {item.constraints.map((constraint, i) => (
                        <div key={i} className="p-3 rounded" style={{ background: 'var(--surface)' }}>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>{constraint.type}</div>
                            <span
                              className="px-2 py-0.5 rounded text-xs font-semibold"
                              style={{
                                background: constraint.severity === 'Critical' ? '#FEE2E2' : constraint.severity === 'High' ? '#FEF3C7' : '#E0E7FF',
                                color: constraint.severity === 'Critical' ? '#DC2626' : constraint.severity === 'High' ? '#F59E0B' : '#6366F1',
                              }}
                            >
                              {constraint.severity}
                            </span>
                          </div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{constraint.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/platforms" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Platform-specific technical SEO strategies
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS / IS NOT FOR */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              {/* IS FOR */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                    This Is For:
                  </h2>
                </div>
                <ul className="space-y-4">
                  {[
                    'Stores with 500+ products experiencing indexation bloat',
                    'Growing international ecommerce brands',
                    'Platform-based sites (Shopify, Magento, WooCommerce)',
                    'Teams planning catalog expansion or migrations',
                    'Brands with Core Web Vitals issues impacting rankings',
                    'Sites requiring engineering-level SEO collaboration',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IS NOT FOR */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--muted)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                    This Is Not For:
                  </h2>
                </div>
                <ul className="space-y-4">
                  {[
                    'Small brochure sites with under 50 products',
                    'One-page or single-category stores',
                    'Projects seeking short-term ranking hacks',
                    'Teams without development resources or access',
                    'Sites prioritizing quick wins over structural fixes',
                    'Businesses unwilling to implement technical changes',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. IMPLEMENTATION SEQUENCE */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Technical Implementation Sequence
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Dependency-based rollout—not arbitrary task lists
                </p>
              </div>

              <div className="relative">
                {/* Vertical Connection Line */}
                <div className="absolute left-8 top-8 bottom-8 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

                {implementationPhases.map((phase, index) => (
                  <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                    <div className="relative z-10">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
                        style={{ background: 'var(--accent)', color: 'white' }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-3">
                      <div
                        className="p-6 rounded-lg"
                        style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                      >
                        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                          {phase.phase}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {phase.what}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-lg text-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Need baseline diagnostic data before technical work?
                </p>
                <Link href="/services/ecommerce-seo-audit" className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Start with an Ecommerce SEO Audit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TECHNICAL FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Technical SEO Questions
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

        {/* 8. ENGINEERING-LEVEL CTA */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                Build an Ecommerce Foundation That Scales
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Fix structural technical issues before they limit catalog growth, international expansion, or platform migrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn btn-primary">
                  Request Technical SEO Review
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Platform-agnostic solutions • Engineering collaboration • Scalable architecture
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
