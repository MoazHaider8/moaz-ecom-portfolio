import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
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
    description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture.',
    url: 'https://moazhaider.com/services/technical-ecommerce-seo',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO for Ecommerce Websites | Moaz Haider',
    description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture.',
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
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/technical-ecommerce-seo',
        description: 'Technical SEO for ecommerce sites focused on crawl efficiency, indexation control, site performance, and scalable architecture.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is technical SEO a one-time fix or ongoing work?', acceptedAnswer: { '@type': 'Answer', text: 'Technical SEO is foundational but not static. Initial fixes establish architecture, but ongoing maintenance is required as catalogs grow, platforms update, and search algorithms evolve. Most ecommerce sites benefit from quarterly technical reviews.' } },
          { '@type': 'Question', name: 'How does technical SEO differ for ecommerce vs other sites?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce technical SEO deals with unique challenges: faceted navigation creating infinite URL combinations, inventory-driven content changes, platform-imposed URL structures, dynamic pricing affecting crawl patterns, and category hierarchies requiring careful canonicalization.' } },
          { '@type': 'Question', name: 'Do ecommerce platforms limit what technical SEO can achieve?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, platforms impose constraints—especially SaaS platforms like Shopify or BigCommerce. However, most technical SEO goals can be achieved within platform limitations through strategic workarounds, app integrations, or theme-level modifications.' } },
          { '@type': 'Question', name: 'Can technical SEO be implemented without a full site rebuild?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Most technical SEO improvements are incremental: schema additions, crawl directive updates, performance optimizations, and indexation control can be implemented without rebuilding the site.' } },
          { '@type': 'Question', name: 'What tools are required for technical ecommerce SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Enterprise crawlers (Screaming Frog, Sitebulb), Google Search Console for indexation monitoring, PageSpeed Insights for Core Web Vitals, log file analyzers for crawl behavior, and platform-specific diagnostic tools.' } },
        ],
      },
    ],
  }

  const architectureLayers = [
    { layer: 'Application', depth: '4', desc: 'User-facing product & category pages', critical: 'Page templates, dynamic content, JavaScript frameworks' },
    { layer: 'Crawl Control', depth: '3', desc: 'Governs search engine access & discovery', critical: 'Robots.txt, XML sitemaps, crawl directives, parameter handling' },
    { layer: 'Index Strategy', depth: '2', desc: 'Controls what enters search indices', critical: 'Canonicals, noindex rules, hreflang, duplicate prevention' },
    { layer: 'Performance', depth: '1', desc: 'Foundation: speed, rendering, server response', critical: 'Core Web Vitals, TTFB, LCP, CLS, CDN, caching' },
  ]

  const systemFailures = [
    { failure: 'Crawl Budget Exhaustion', cause: 'Infinite faceted URLs, parameter-driven pages', impact: 'High-value pages undercrawled', scale: 'Compounds at 10K+ SKUs' },
    { failure: 'Index Bloat', cause: 'Missing canonicals, URL parameter indexation', impact: 'Diluted ranking signals, duplicate content', scale: 'Degrades with catalog growth' },
    { failure: 'Performance Collapse', cause: 'Heavy category pages, unoptimized images, JS overhead', impact: 'CWV failures, ranking penalties', scale: 'Worsens with inventory expansion' },
  ]

  const technicalLayers = [
    {
      layer: 'L1', title: 'Crawl & Index Control Layer', desc: 'Governs search engine resource allocation and page discovery',
      tradeoffs: 'Blocking low-value URLs saves crawl budget but risks hiding edge cases',
      constraints: ['Crawl budget limits', 'Faceted nav complexity', 'Parameter explosion'],
      technical: ['Robots.txt directive hierarchy', 'XML sitemap prioritization', 'Canonical consolidation', 'Parameter handling strategy'],
    },
    {
      layer: 'L2', title: 'Architecture & Link Distribution', desc: 'Internal linking structure that balances crawl depth with authority flow',
      tradeoffs: 'Shallow architecture aids crawl efficiency but may dilute category authority',
      constraints: ['Platform URL patterns', 'Breadcrumb limitations', 'Menu depth restrictions'],
      technical: ['Category hierarchy design (max 3 levels)', 'Internal link equity flow', 'Pagination SEO strategy', 'Orphaned product prevention'],
    },
    {
      layer: 'L3', title: 'Performance & Rendering', desc: 'Speed, rendering strategy, and resource optimization for crawlers + users',
      tradeoffs: 'Client-side rendering improves UX but complicates bot accessibility',
      constraints: ['Platform server limits', 'Third-party script bloat', 'Image CDN costs'],
      technical: ['Core Web Vitals optimization', 'Rendering strategy (SSR vs CSR)', 'Resource prioritization', 'Server response time (<200ms)'],
    },
    {
      layer: 'L4', title: 'Platform Constraints & Schema', desc: 'Working within or around platform-imposed technical limitations',
      tradeoffs: 'SaaS platforms limit customization but reduce dev overhead',
      constraints: ['URL structure rigidity', 'App ecosystem dependencies', 'Theme limitations'],
      technical: ['Platform-specific workarounds', 'JavaScript framework SEO', 'Schema implementation', 'Mobile-first compliance'],
    },
  ]

  const outcomes = [
    { title: 'Cleaner Indexation', desc: 'Eliminate low-value pages from indices, focusing crawl budget on revenue-generating pages', metric: 'Index efficiency' },
    { title: 'Faster Page Discovery', desc: 'New products and categories surface in search results within days, not weeks', metric: 'Crawl velocity' },
    { title: 'Improved Ranking Stability', desc: 'Reduce ranking volatility caused by technical issues or canonicalization conflicts', metric: 'Rank consistency' },
    { title: 'Catalog Scalability', desc: 'Technical foundation that supports catalog growth without SEO degradation', metric: 'Growth readiness' },
  ]

  const implementationPhases = [
    { phase: 'Technical Assessment', what: 'Crawl analysis, indexation audit, performance baseline, platform constraint mapping' },
    { phase: 'Priority Mapping', what: 'Identify high-impact fixes, resource requirements, implementation sequence' },
    { phase: 'Implementation', what: 'Execute technical changes via platform config, theme edits, or dev collaboration' },
    { phase: 'Validation & Monitoring', what: 'Confirm changes via crawl verification, GSC monitoring, performance tracking' },
  ]

  const faqs = [
    { question: 'Is technical SEO a one-time fix or ongoing work?', answer: 'Technical SEO is foundational but not static. Initial fixes establish architecture, but ongoing maintenance is required as catalogs grow, platforms update, and search algorithms evolve. Most ecommerce sites benefit from quarterly technical reviews.' },
    { question: 'How does technical SEO differ for ecommerce vs other sites?', answer: 'Ecommerce technical SEO deals with unique challenges: faceted navigation creating infinite URL combinations, inventory-driven content changes, platform-imposed URL structures, dynamic pricing affecting crawl patterns, and category hierarchies requiring careful canonicalization. These aren\'t concerns for content sites or SaaS.' },
    { question: 'Do ecommerce platforms limit what technical SEO can achieve?', answer: 'Yes, platforms impose constraints—especially SaaS platforms like Shopify or BigCommerce. However, most technical SEO goals can be achieved within platform limitations through strategic workarounds, app integrations, or Liquid/theme-level modifications. Custom platforms offer more control but require more development resources.' },
    { question: 'Can technical SEO be implemented without a full site rebuild?', answer: 'Absolutely. Most technical SEO improvements are incremental: schema additions, crawl directive updates, performance optimizations, and indexation control can be implemented without rebuilding the site. Major URL restructures or architecture changes may require migration planning.' },
    { question: 'What tools are required for technical ecommerce SEO?', answer: 'Enterprise crawlers (Screaming Frog, Sitebulb), Google Search Console for indexation monitoring, PageSpeed Insights for Core Web Vitals, log file analyzers for crawl behavior, and platform-specific diagnostic tools. I provide these as part of technical SEO engagements.' },
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
                  Infrastructure &amp; Scale
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Technical <span className="gold-gradient-text">Ecommerce SEO</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Foundation-level technical architecture for ecommerce sites that need to control crawl behavior, manage indexation at scale, and maintain performance under catalog growth.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  {[{ num: '4', label: 'Technical Layers' }, { num: '∞', label: 'Scale Capacity' }, { num: '5+', label: 'Platforms' }].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{stat.num}</div>
                      <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Request Technical Review
                  </Link>
                  <Link href="/services/ecommerce-seo-audit" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    Start with Audit
                  </Link>
                </div>
              </div>

              {/* Right: Stack Architecture Visual */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>System Architecture</div>
                <div className="space-y-2">
                  {architectureLayers.map((layer, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ background: i === 0 ? 'var(--accent)' : 'var(--surface)', color: i === 0 ? 'white' : 'var(--text)', border: i === 0 ? 'none' : '1px solid var(--border)', marginLeft: `${i * 8}px` }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: i === 0 ? 'rgba(255,255,255,0.2)' : 'var(--card)', color: i === 0 ? 'white' : 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                            L{layer.depth}
                          </span>
                          <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{layer.layer}</span>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(parseInt(layer.depth))].map((_, j) => (
                            <div key={j} className="w-1 h-5 rounded-full" style={{ background: i === 0 ? 'rgba(255,255,255,0.3)' : 'var(--accent)' }} />
                          ))}
                        </div>
                      </div>
                      <div className="text-xs mt-1 opacity-80">{layer.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>↑ Dependency flow: Top layer requires all layers below</div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. SYSTEM FAILURES ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Why Technical SEO <span className="gold-gradient-text">Breaks at Scale</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Common failure modes that emerge as catalogs grow beyond platform defaults
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-bold rounded-tl-xl" style={{ background: 'var(--card)', color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>System Failure</th>
                    <th className="text-left p-4 text-sm font-bold" style={{ background: 'var(--card)', color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Root Cause</th>
                    <th className="text-left p-4 text-sm font-bold" style={{ background: 'var(--card)', color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>SEO Impact</th>
                    <th className="text-left p-4 text-sm font-bold rounded-tr-xl" style={{ background: 'var(--card)', color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Scale Factor</th>
                  </tr>
                </thead>
                <tbody>
                  {systemFailures.map((f, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--card)' }}>
                      <td className="p-4 text-sm font-semibold" style={{ color: 'var(--text)' }}>{f.failure}</td>
                      <td className="p-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{f.cause}</td>
                      <td className="p-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{f.impact}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium" style={{ background: 'var(--status-danger-light)', color: 'var(--status-danger)' }}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                          {f.scale}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ━━━ 3. FOUR-LAYER SYSTEM ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Four-Layer <span className="gold-gradient-text">Technical System</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Interdependent layers—each with trade-offs, constraints, and implementation considerations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {technicalLayers.map((layer, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ background: 'var(--accent)', color: 'white' }}>{layer.layer}</span>
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{layer.title}</h3>
                    </div>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{layer.desc}</p>

                    {/* Trade-off */}
                    <div className="flex items-start gap-2 mb-4 p-3 rounded-xl" style={{ background: 'var(--status-warning-light)' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--status-warning)' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                      <div>
                        <span className="text-xs font-bold uppercase" style={{ color: 'var(--status-warning)' }}>Trade-off: </span>
                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{layer.tradeoffs}</span>
                      </div>
                    </div>

                    {/* Constraints */}
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>Constraints</div>
                      <div className="flex flex-wrap gap-2">
                        {layer.constraints.map((c, j) => (
                          <span key={j} className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--surface)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{c}</span>
                        ))}
                      </div>
                    </div>

                    {/* Technical points */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>Implementation</div>
                      <ul className="space-y-1.5">
                        {layer.technical.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 4. OUTCOMES ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Results
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                What This <span className="gold-gradient-text">Foundation Enables</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Measured system-level outcomes, not vanity metrics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {outcomes.map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{item.metric}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
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
                  {['Stores with 500+ products experiencing indexation issues', 'Growing international ecommerce brands', 'Platform-based sites (Shopify, Magento, WooCommerce)', 'Teams planning catalog expansion or migrations', 'Brands with Core Web Vitals issues impacting rankings'].map((item, i) => (
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
                  {['Small brochure sites with under 50 products', 'One-page or single-category stores', 'Projects seeking short-term ranking hacks', 'Teams without development resources or access', 'Businesses unwilling to implement technical changes'].map((item, i) => (
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

        {/* ━━━ 6. IMPLEMENTATION ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Implementation <span className="gold-gradient-text">Sequence</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Dependency-based rollout — not arbitrary task lists
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {implementationPhases.map((phase, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="p-6 rounded-2xl flex-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{phase.phase}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{phase.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 7. FAQs ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Technical SEO <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ━━━ 8. CTA ━━━ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Build a Foundation{' '}
                <span className="gold-gradient-text">That Scales</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Fix structural technical issues before they limit catalog growth, international expansion, or platform migrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Request Technical Review
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Platform-agnostic &middot; Engineering collaboration &middot; Scalable architecture
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
