import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Category Page SEO for Ecommerce Websites | Moaz Haider',
  description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/category-page-seo',
  },
  openGraph: {
    title: 'Category Page SEO for Ecommerce Websites | Moaz Haider',
    description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
    url: 'https://moazhaider.com/services/category-page-seo',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Category Page SEO for Ecommerce Websites | Moaz Haider',
    description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
  },
}

export default function CategoryPageSEO() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/category-page-seo#service',
        name: 'Category Page SEO',
        description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        serviceType: 'Ecommerce Category Page SEO',
        areaServed: 'International',
        url: 'https://moazhaider.com/services/category-page-seo',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Are category pages more important than product pages for SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for scale. Category pages capture higher-volume searches and rank faster because they consolidate demand and authority. A strong category can rank for dozens of keywords that individual products can\'t compete for. Product pages matter for conversion, but category pages drive the traffic that makes those conversions possible.' } },
          { '@type': 'Question', name: 'How do you handle faceted navigation SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Through parameter control and strategic indexation. Faceted navigation creates hundreds of URL variations (filters, sorts, attributes) that can dilute authority and waste crawl budget. We use canonical tags, parameter handling, and selective no-index to ensure only valuable category variations get indexed—maintaining authority without duplication.' } },
          { '@type': 'Question', name: 'How do category pages avoid keyword cannibalization?', acceptedAnswer: { '@type': 'Answer', text: 'By aligning category intent with search behavior. Each category targets distinct search queries based on product grouping and user intent. "Running shoes" vs "trail running shoes" vs "women\'s running shoes"—clear hierarchy and intent separation prevent categories from competing. Proper internal linking reinforces the structure.' } },
          { '@type': 'Question', name: 'Can category SEO scale across countries or languages?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but structure matters more than translation. Category SEO scales through consistent architecture—the same hierarchy works globally with localized content. Use hreflang, maintain category structure across domains, and align with local search behavior. The authority model stays the same; the execution adapts to each market.' } },
          { '@type': 'Question', name: 'What if my category pages are thin or auto-generated?', acceptedAnswer: { '@type': 'Answer', text: 'Then they won\'t rank. Thin category pages—just product grids with no context—lack the relevance signals Google needs. We enrich categories with use case content, buyer guidance, and structured data while maintaining the product grid. It\'s not about word count; it\'s about creating pages that deserve to rank for commercial searches.' } },
        ],
      },
    ],
  }

  const scaleSystem = [
    { layer: 'Demand Aggregation', principle: 'Category pages consolidate search demand across dozens or hundreds of related products', why: 'Single category ranks for 10-100+ high-volume keywords that individual products cannot compete for', visual: 'Hub' },
    { layer: 'Intent Alignment', principle: 'Category pages serve both exploratory searches and high-intent commercial queries', why: 'Unlike products (conversion-only) or blogs (information-only), categories bridge the gap and rank across the funnel', visual: 'Bridge' },
    { layer: 'Authority Consolidation', principle: 'Category pages act as internal linking hubs that distribute and receive authority across your catalog', why: 'Every product links up to its category, every category links to related categories - authority compounds, not fragments', visual: 'Network' },
    { layer: 'Expansion Logic', principle: 'Strong category structure enables subcategory growth and long-tail keyword capture without architectural changes', why: 'Scale from "shoes" to "running shoes" to "trail running shoes" without rebuilding - SEO compounds at every tier', visual: 'Growth' },
  ]

  const outcomes = [
    { outcome: 'Higher-volume rankings', detail: 'Capture commercial searches with 10x-100x the volume of product-level keywords', tier: 'Volume' },
    { outcome: 'Authority leverage', detail: 'Category pages become internal linking hubs that strengthen your entire catalog', tier: 'Structure' },
    { outcome: 'Crawl efficiency', detail: 'Strong category architecture improves how search engines discover and prioritize your products', tier: 'Technical' },
    { outcome: 'Sustainable growth', detail: 'Category SEO scales with your catalog—more products strengthen existing pages, not dilute them', tier: 'Scale' },
  ]

  const execution = [
    { stage: 'Category Audit & Mapping', action: 'Identify high-value categories, analyze current performance, map keyword opportunities and internal structure' },
    { stage: 'Intent & Demand Alignment', action: 'Match category pages to search behavior, align content with commercial and exploratory intent' },
    { stage: 'Authority & Structure Optimization', action: 'Implement internal linking logic, optimize category hierarchy, enhance content depth and relevance signals' },
    { stage: 'Expansion & Validation', action: 'Monitor rankings for category-level keywords, identify subcategory opportunities, scale based on performance data' },
  ]

  const platforms = [
    { name: 'Shopify', context: 'Collection architecture, automated collections, faceted navigation control, subcategory linking' },
    { name: 'WooCommerce', context: 'Category hierarchy optimization, taxonomy structure, attribute filtering SEO' },
    { name: 'Magento', context: 'Layered navigation, anchor categories, URL structure, category-level canonical control' },
    { name: 'BigCommerce', context: 'Category trees, faceted search optimization, URL rewrites, subcategory logic' },
    { name: 'Custom Platforms', context: 'Tailored category architecture, dynamic filtering SEO, custom hierarchy implementation' },
  ]

  const faqs = [
    { question: 'Are category pages more important than product pages for SEO?', answer: 'Yes, for scale. Category pages capture higher-volume searches and rank faster because they consolidate demand and authority. A strong category can rank for dozens of keywords that individual products can\'t compete for. Product pages matter for conversion, but category pages drive the traffic that makes those conversions possible.' },
    { question: 'How do you handle faceted navigation SEO?', answer: 'Through parameter control and strategic indexation. Faceted navigation creates hundreds of URL variations (filters, sorts, attributes) that can dilute authority and waste crawl budget. We use canonical tags, parameter handling, and selective no-index to ensure only valuable category variations get indexed—maintaining authority without duplication.' },
    { question: 'How do category pages avoid keyword cannibalization?', answer: 'By aligning category intent with search behavior. Each category targets distinct search queries based on product grouping and user intent. "Running shoes" vs "trail running shoes" vs "women\'s running shoes"—clear hierarchy and intent separation prevent categories from competing. Proper internal linking reinforces the structure.' },
    { question: 'Can category SEO scale across countries or languages?', answer: 'Yes, but structure matters more than translation. Category SEO scales through consistent architecture—the same hierarchy works globally with localized content. Use hreflang, maintain category structure across domains, and align with local search behavior. The authority model stays the same; the execution adapts to each market.' },
    { question: 'What if my category pages are thin or auto-generated?', answer: 'Then they won\'t rank. Thin category pages—just product grids with no context—lack the relevance signals Google needs. We enrich categories with use case content, buyer guidance, and structured data while maintaining the product grid. It\'s not about word count; it\'s about creating pages that deserve to rank for commercial searches.' },
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
                  Scale &amp; Authority
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Category Page <span className="gold-gradient-text">SEO</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Where ecommerce SEO actually scales. Turn category pages into high-authority traffic hubs that capture commercial demand and enable sustainable organic growth.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Optimize My Categories
                  </Link>
                  <Link href="/services/ecommerce-seo-audit" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    Start with Audit
                  </Link>
                </div>
              </div>

              {/* Right: Hub & Spoke Visual */}
              <div className="p-8 rounded-2xl relative" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="relative" style={{ height: '280px' }}>
                  {/* Central Hub */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10" style={{ background: 'var(--accent)', color: 'white' }}>
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      <div className="text-[10px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Category Hub</div>
                    </div>
                  </div>

                  {/* Spoke Products */}
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i * 60) * (Math.PI / 180)
                    const radius = 100
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    return (
                      <div key={i}>
                        <div className="absolute top-1/2 left-1/2 origin-left h-px opacity-20" style={{ background: 'var(--accent)', width: `${radius}px`, transform: `rotate(${i * 60}deg)` }} />
                        <div className="absolute w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)', left: `calc(50% + ${x}px - 18px)`, top: `calc(50% + ${y}px - 18px)` }}>
                          <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center justify-center gap-6 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>Category Authority</span>
                    </div>
                    <svg className="w-4 h-4" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--border)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>Product Pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. WHY CATEGORY PAGES MATTER ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Multiplier
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Why Categories <span className="gold-gradient-text">Beat Products</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                One optimized category page captures demand that 100+ product pages cannot
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Product-Level */}
              <div className="p-7 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="text-xs uppercase tracking-wider font-bold mb-4 px-3 py-1.5 rounded-full inline-block" style={{ background: 'var(--surface)', color: 'var(--muted)' }}>Product-Level</div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Fragmented Approach</h3>
                <div className="space-y-3">
                  {[{ num: '1-3', label: 'Keywords per product page' }, { num: '100+', label: 'Pages needed for scale' }, { num: 'Low', label: 'Individual page authority' }].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface)' }}>
                      <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{stat.num}</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category-Level */}
              <div className="group p-7 rounded-2xl relative overflow-hidden" style={{ background: 'var(--card)', border: '2px solid var(--accent)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider font-bold mb-4 px-3 py-1.5 rounded-full inline-block" style={{ background: 'var(--accent)', color: 'white' }}>Category-Level</div>
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Consolidated Authority</h3>
                  <div className="space-y-3">
                    {[{ num: '50-200+', label: 'Keywords per category page' }, { num: '5-10', label: 'Pages needed for scale' }, { num: 'High', label: 'Consolidated authority hub' }].map((stat, i) => (
                      <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--accent)' }}>
                        <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{stat.num}</div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 3. SCALE SYSTEM ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Category SEO <span className="gold-gradient-text">Scale System</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four structural layers that turn category pages into authority hubs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {scaleSystem.map((layer, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full" style={{ background: 'var(--surface)', color: 'var(--accent)' }}>{layer.visual}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{layer.layer}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{layer.principle}</p>
                    <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>Why this works</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{layer.why}</p>
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
                What Category SEO <span className="gold-gradient-text">Unlocks</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Compounding advantages that product-level SEO cannot deliver
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {outcomes.map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)' }}>{i + 1}</div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{item.tier}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.outcome}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
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
                  {['Stores with multiple product categories wanting to scale organic traffic', 'Brands competing in crowded markets where category authority matters', 'Teams wanting sustainable SEO that grows with catalog expansion', 'Stores understanding that ranking "running shoes" beats 500 individual models'].map((item, i) => (
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
                  {['Single-category or one-product brands', 'Short-term traffic spikes over long-term structural growth', 'Category pages with no intent to add depth or content', 'Expecting instant rankings without architecture work'].map((item, i) => (
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

        {/* ━━━ 6. EXECUTION PROCESS ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                How It&apos;s <span className="gold-gradient-text">Executed</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {execution.map((stage, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="p-6 rounded-2xl flex-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{stage.stage}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{stage.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 7. PLATFORMS ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Platforms
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Category Architecture <span className="gold-gradient-text">by Platform</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {platforms.map((platform, i) => (
                <div key={i} className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{platform.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{platform.context}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 8. FAQs ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Category SEO <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ━━━ 9. CTA ━━━ */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Scale Where <span className="gold-gradient-text">Demand Exists</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Build authority at the category level — where ecommerce SEO actually compounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Optimize My Categories
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Scale &middot; Structure &middot; Authority
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
