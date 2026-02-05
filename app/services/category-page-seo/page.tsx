import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Category Page SEO for Ecommerce Websites | Moaz Haider',
  description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/category-page-seo',
  },
}

export default function CategoryPageSEO() {
  const whyCategories = [
    {
      insight: 'Categories capture demand',
      why: 'Buyers search at category level before choosing products—"running shoes" gets 100x the volume of specific models',
      impact: 'Scale'
    },
    {
      insight: 'Google favors strong hubs',
      why: 'Category pages with depth, structure, and internal authority rank faster and hold positions longer than thin product pages',
      impact: 'Authority'
    },
    {
      insight: 'Weak categories cap growth',
      why: 'Even with thousands of products, poor category SEO limits your ceiling—you rank for brand terms only, not commercial demand',
      impact: 'Limitation'
    },
  ]

  const scaleSystem = [
    {
      layer: 'Demand Aggregation',
      principle: 'Category pages consolidate search demand across dozens or hundreds of related products',
      why: 'Single category ranks for 10-100+ high-volume keywords that individual products cannot compete for',
      visual: 'Hub',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
    },
    {
      layer: 'Intent Alignment',
      principle: 'Category pages serve both exploratory searches and high-intent commercial queries',
      why: 'Unlike products (conversion-only) or blogs (information-only), categories bridge the gap and rank across the funnel',
      visual: 'Bridge',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      layer: 'Authority Consolidation',
      principle: 'Category pages act as internal linking hubs that distribute and receive authority across your catalog',
      why: 'Every product links up to its category, every category links to related categories - authority compounds, not fragments',
      visual: 'Network',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      layer: 'Expansion Logic',
      principle: 'Strong category structure enables subcategory growth and long-tail keyword capture without architectural changes',
      why: 'Scale from "shoes" to "running shoes" to "trail running shoes" without rebuilding - SEO compounds at every tier',
      visual: 'Growth',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    },
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
    {
      question: 'Are category pages more important than product pages for SEO?',
      answer: 'Yes, for scale. Category pages capture higher-volume searches and rank faster because they consolidate demand and authority. A strong category can rank for dozens of keywords that individual products can\'t compete for. Product pages matter for conversion, but category pages drive the traffic that makes those conversions possible.'
    },
    {
      question: 'How do you handle faceted navigation SEO?',
      answer: 'Through parameter control and strategic indexation. Faceted navigation creates hundreds of URL variations (filters, sorts, attributes) that can dilute authority and waste crawl budget. We use canonical tags, parameter handling, and selective no-index to ensure only valuable category variations get indexed—maintaining authority without duplication.'
    },
    {
      question: 'How do category pages avoid keyword cannibalization?',
      answer: 'By aligning category intent with search behavior. Each category targets distinct search queries based on product grouping and user intent. "Running shoes" vs "trail running shoes" vs "women\'s running shoes"—clear hierarchy and intent separation prevent categories from competing. Proper internal linking reinforces the structure.'
    },
    {
      question: 'Can category SEO scale across countries or languages?',
      answer: 'Yes, but structure matters more than translation. Category SEO scales through consistent architecture—the same hierarchy works globally with localized content. Use hreflang, maintain category structure across domains, and align with local search behavior. The authority model stays the same; the execution adapts to each market.'
    },
    {
      question: 'What if my category pages are thin or auto-generated?',
      answer: 'Then they won\'t rank. Thin category pages—just product grids with no context—lack the relevance signals Google needs. We enrich categories with use case content, buyer guidance, and structured data while maintaining the product grid. It\'s not about word count; it\'s about creating pages that deserve to rank for commercial searches.'
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
              name: 'Category Page SEO',
              description: 'Category page SEO focused on scaling organic traffic, capturing high-intent searches, and building authority for ecommerce stores.',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
                url: 'https://moazhaider.com',
              },
              serviceType: 'Ecommerce Category Page SEO',
              areaServed: 'International',
              url: 'https://moazhaider.com/services/category-page-seo',
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
        {/* 1. HERO - SCALE FRAMING */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                <Link href="/services" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Ecommerce SEO Services
                </Link>
                <span>/</span>
                <span>Category Page SEO</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Scale & Authority</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                    Category Page SEO
                  </h1>

                  <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Where ecommerce SEO actually scales.
                  </p>

                  <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Turn category pages into high-authority traffic hubs that capture commercial demand, distribute internal linking power, and enable sustainable organic growth across your entire catalog.
                  </p>

                  {/* Scale Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { label: 'Intent Capture', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                      { label: 'Authority Flow', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                      { label: 'Scalable Growth', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                    ].map((metric, index) => (
                      <div key={index} className="p-3 rounded-lg" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                        <svg className="w-5 h-5 mb-2" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.icon} />
                        </svg>
                        <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn btn-primary">
                    Optimize My Category Pages
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right: Hub & Authority Flow Visual */}
                <div className="relative">
                  <div className="p-10 rounded-2xl relative" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                    {/* Central Hub */}
                    <div className="relative">
                      {/* Hub Circle */}
                      <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center relative z-10" style={{ background: 'var(--accent)', color: 'white' }}>
                        <div className="text-center">
                          <svg className="w-12 h-12 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <div className="text-xs font-bold">Category Hub</div>
                        </div>
                      </div>

                      {/* Spoke Products */}
                      <div className="absolute inset-0">
                        {[0, 1, 2, 3, 4, 5].map((index) => {
                          const angle = (index * 60) * (Math.PI / 180)
                          const radius = 100
                          const x = Math.cos(angle) * radius
                          const y = Math.sin(angle) * radius
                          
                          return (
                            <div key={index}>
                              {/* Connection Line */}
                              <div
                                className="absolute top-1/2 left-1/2 origin-left h-0.5 opacity-20"
                                style={{
                                  background: 'var(--accent)',
                                  width: `${radius}px`,
                                  transform: `rotate(${index * 60}deg)`,
                                }}
                              ></div>
                              
                              {/* Product Node */}
                              <div
                                className="absolute w-10 h-10 rounded-full flex items-center justify-center"
                                style={{
                                  background: 'var(--surface)',
                                  border: '2px solid var(--border)',
                                  left: `calc(50% + ${x}px - 20px)`,
                                  top: `calc(50% + ${y}px - 20px)`,
                                }}
                              >
                                <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Bottom Legend */}
                    <div className="mt-16 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex items-center justify-center gap-6 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }}></div>
                          <span style={{ color: 'var(--text-secondary)' }}>Category Authority</span>
                        </div>
                        <svg className="w-4 h-4" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--border)' }}></div>
                          <span style={{ color: 'var(--text-secondary)' }}>Product Pages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRAFFIC MULTIPLICATION MODEL */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Category SEO Multiplier Effect
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  One optimized category page captures demand that 100+ product pages cannot
                </p>
              </div>

              {/* Comparison: Category vs Products */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Product-Level SEO */}
                <div className="p-8 rounded-xl relative overflow-hidden" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                  <div className="absolute top-4 right-4 opacity-10">
                    <svg className="w-24 h-24" style={{ color: 'var(--text)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold mb-3 px-3 py-1 rounded-full inline-block" style={{ background: 'var(--surface)', color: 'var(--muted)' }}>Product-Level</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Fragmented Approach</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>1-3</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Keywords per product page</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>100+</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Pages needed for scale</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>Low</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Individual page authority</div>
                    </div>
                  </div>
                </div>

                {/* Category-Level SEO */}
                <div className="p-8 rounded-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--card) 0%, var(--surface) 100%)', border: '3px solid var(--accent)' }}>
                  <div className="absolute top-4 right-4 opacity-10">
                    <svg className="w-24 h-24" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold mb-3 px-3 py-1 rounded-full inline-block" style={{ background: 'var(--accent)', color: 'white' }}>Category-Level</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Consolidated Authority</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)', border: '2px solid var(--accent)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)' }}>50-200+</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Keywords per category page</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)', border: '2px solid var(--accent)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)' }}>5-10</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Pages needed for scale</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)', border: '2px solid var(--accent)' }}>
                      <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)' }}>High</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Consolidated authority hub</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multiplication Formula */}
              <div className="p-8 rounded-xl text-center" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                <div className="text-sm uppercase tracking-wider font-bold mb-4" style={{ color: 'var(--accent)' }}>Scale Formula</div>
                <div className="flex items-center justify-center gap-4 text-2xl font-bold flex-wrap" style={{ color: 'var(--text)' }}>
                  <span>1 Category Page</span>
                  <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span style={{ color: 'var(--accent)' }}>50-200 Keywords</span>
                  <svg className="w-6 h-6" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span style={{ color: 'var(--accent)' }}>10x-100x ROI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CATEGORY HIERARCHY DEPTH */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Category Hierarchy Architecture
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Strategic depth creates authority at every level
                </p>
              </div>

              {/* Hierarchical Depth Visualization */}
              <div className="space-y-6">
                {/* Level 1: Parent Category */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="w-32 flex-shrink-0">
                      <div className="p-3 rounded-lg text-center" style={{ background: 'var(--accent)', color: 'white' }}>
                        <div className="text-xs font-bold mb-1">LEVEL 1</div>
                        <div className="text-sm font-semibold">Parent</div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 rounded-xl" style={{ background: 'var(--card)', border: '3px solid var(--accent)' }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Running Shoes</div>
                          <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>High-volume category capturing 50K+ monthly searches</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>100+</div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Keywords</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-16 mt-3 mb-3 w-0.5 h-8 rounded-full" style={{ background: 'var(--border)' }}></div>
                </div>

                {/* Level 2: Child Categories */}
                <div className="relative ml-12">
                  <div className="flex items-center gap-6">
                    <div className="w-32 flex-shrink-0">
                      <div className="p-3 rounded-lg text-center" style={{ background: 'var(--surface)', border: '2px solid var(--accent)' }}>
                        <div className="text-xs font-bold mb-1" style={{ color: 'var(--accent)' }}>LEVEL 2</div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Child</div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      {['Trail Running Shoes', 'Road Running Shoes', 'Track Running Shoes'].map((cat, idx) => (
                        <div key={idx} className="p-4 rounded-lg flex items-center justify-between" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                          <div>
                            <div className="text-base font-bold" style={{ color: 'var(--text)' }}>{cat}</div>
                            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Mid-volume specialization</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>30-50</div>
                            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Keywords</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-16 mt-3 mb-3 w-0.5 h-8 rounded-full" style={{ background: 'var(--border)' }}></div>
                </div>

                {/* Level 3: Grandchild Categories */}
                <div className="relative ml-24">
                  <div className="flex items-center gap-6">
                    <div className="w-32 flex-shrink-0">
                      <div className="p-3 rounded-lg text-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                        <div className="text-xs font-bold mb-1" style={{ color: 'var(--muted)' }}>LEVEL 3</div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Grandchild</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-4 rounded-lg flex items-center justify-between" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                        <div>
                          <div className="text-sm font-bold" style={{ color: 'var(--text)' }}>Waterproof Trail Running Shoes</div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Long-tail precision targeting</div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold" style={{ color: 'var(--text)' }}>10-20</div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Keywords</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authority Flow Indicator */}
              <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <div className="flex items-center justify-center gap-3 text-sm font-semibold">
                  <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span style={{ color: 'var(--text)' }}>Authority flows down • Keywords aggregate up • Structure scales infinitely</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE CATEGORY SEO SCALE SYSTEM */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Scale Model</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Category SEO Scale System
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four structural layers that turn category pages into authority hubs
                </p>
              </div>

              {/* Hierarchical Scale Layers */}
              <div className="space-y-8">
                {scaleSystem.map((layer, index) => (
                  <div key={index} className="relative">
                    {/* Layer Card */}
                    <div
                      className="relative overflow-hidden rounded-xl"
                      style={{
                        background: 'var(--card)',
                        border: '3px solid var(--border)',
                        marginLeft: `${index * 20}px`,
                      }}
                    >
                      <div className="p-8">
                        {/* Header Row */}
                        <div className="flex items-start gap-6 mb-6">
                          {/* Icon Badge */}
                          <div className="relative">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)', color: 'white' }}>
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d={layer.icon} />
                              </svg>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'white', color: 'var(--accent)', border: '2px solid var(--accent)' }}>
                              {index + 1}
                            </div>
                          </div>

                          {/* Layer Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full" style={{ background: 'var(--surface)', color: 'var(--accent)' }}>
                                {layer.visual}
                              </div>
                              <div className="text-xs" style={{ color: 'var(--muted)' }}>Layer {index + 1} of 4</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                              {layer.layer}
                            </h3>
                            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                              {layer.principle}
                            </p>
                          </div>
                        </div>

                        {/* Why Section */}
                        <div className="p-5 rounded-lg" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-sm font-bold" style={{ color: 'var(--accent)' }}>Why this works</div>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {layer.why}
                          </p>
                        </div>
                      </div>

                      {/* Watermark Number */}
                      <div
                        className="absolute -right-6 -bottom-6 text-9xl font-bold opacity-5 pointer-events-none"
                        style={{ color: 'var(--accent)' }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Connector */}
                    {index < scaleSystem.length - 1 && (
                      <div className="flex items-center gap-3 my-4" style={{ marginLeft: `${(index + 1) * 20}px` }}>
                        <div className="w-0.5 h-8 rounded-full" style={{ background: 'var(--border)' }}></div>
                        <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* System Summary */}
              <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'var(--surface)', border: '2px dashed var(--border)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  The outcome: Category pages that scale traffic, consolidate authority, and enable sustainable growth across your entire catalog
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STRUCTURAL OUTCOMES PYRAMID */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  What Category SEO Unlocks
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Compounding advantages that product-level SEO cannot deliver
                </p>
              </div>

              {/* Inverted Pyramid Outcomes */}
              <div className="space-y-0">
                {outcomes.map((item, index) => {
                  const width = 100 - (index * 15)
                  return (
                    <div key={index} className="flex justify-center">
                      <div
                        className="p-6 rounded-lg relative"
                        style={{
                          background: index === 0 ? 'var(--accent)' : 'var(--card)',
                          border: index === 0 ? 'none' : '2px solid var(--border)',
                          width: `${width}%`,
                          color: index === 0 ? 'white' : 'var(--text)'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold" style={{ background: index === 0 ? 'rgba(255,255,255,0.2)' : 'var(--accent)', color: index === 0 ? 'white' : 'white' }}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: index === 0 ? 'rgba(255,255,255,0.7)' : 'var(--accent)' }}>{item.tier}</div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: index === 0 ? 'white' : 'var(--text)' }}>
                              {item.outcome}
                            </h3>
                            <p className="text-sm" style={{ color: index === 0 ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)' }}>
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom Summary */}
              <div className="mt-8 text-center">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="font-semibold" style={{ color: 'var(--accent)' }}>Category SEO compounds.</span> Product SEO fragments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO CATEGORY PAGE SEO IS / IS NOT FOR */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Is Category Page SEO Right for You?
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* This IS For */}
                <div className="p-8 rounded-xl" style={{ background: '#DCFCE7', border: '3px solid #16A34A' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#16A34A', color: 'white' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: '#15803D' }}>This IS for you if:</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      'You have multiple product categories and want to scale organic traffic',
                      'You are competing in crowded markets where category-level authority matters',
                      'You want sustainable SEO that grows with your catalog, not against it',
                      'You understand that ranking "running shoes" beats ranking 500 individual models',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base" style={{ color: '#15803D' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* This IS NOT For */}
                <div className="p-8 rounded-xl" style={{ background: '#FEE2E2', border: '3px solid #DC2626' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#DC2626', color: 'white' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: '#991B1B' }}>This is NOT for you if:</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      'You only sell in a single category or have a one-product brand',
                      'You are focused on short-term traffic spikes, not long-term structural growth',
                      'Your category pages are just product grids with no intent to add depth',
                      'You expect instant rankings without addressing architecture or content gaps',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#DC2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base" style={{ color: '#991B1B' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HOW CATEGORY PAGE SEO IS EXECUTED */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  How Category Page SEO Is Executed
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Structured rollout focused on high-value categories and scalable architecture
                </p>
              </div>

              {/* Execution Timeline */}
              <div className="relative">
                {/* Timeline Bar */}
                <div className="absolute left-8 top-0 bottom-0 w-1 rounded-full" style={{ background: 'var(--border)' }}></div>

                <div className="space-y-8">
                  {execution.map((stage, index) => (
                    <div key={index} className="relative flex gap-6">
                      {/* Stage Circle */}
                      <div
                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        style={{ background: 'var(--accent)', color: 'white', border: '4px solid var(--bg)' }}
                      >
                        {index + 1}
                      </div>

                      {/* Stage Content */}
                      <div className="flex-1 pb-8">
                        <div className="p-6 rounded-xl" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>Stage {index + 1}</div>
                          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                            {stage.stage}
                          </h3>
                          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {stage.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contextual Link */}
              <div className="mt-10 text-center">
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Need product-level optimization to complement category strategy?
                </p>
                <Link href="/services/product-page-seo" className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Explore Product Page SEO
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PLATFORM CATEGORY ARCHITECTURE */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Category Architecture by Platform
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Platform constraints shape category hierarchy strategy
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl relative group hover:scale-105 transition-transform"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    {/* Platform Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: 'white', border: '3px solid var(--bg)' }}>
                      {index + 1}
                    </div>

                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ background: 'var(--surface)' }}>
                        <svg className="w-7 h-7" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                        {platform.name}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {platform.context}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-4 h-1 w-full rounded-full" style={{ background: 'var(--surface)' }}>
                      <div className="h-full rounded-full transition-all duration-500 group-hover:w-full" style={{ background: 'var(--accent)', width: '30%' }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'var(--surface)', border: '2px dashed var(--border)' }}>
                <Link href="/platforms" className="inline-flex items-center gap-2 text-base font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Explore platform-specific SEO strategies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CATEGORY-LEVEL FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Category Page SEO Questions
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

        {/* 9. FINAL CTA */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                Scale Ecommerce SEO Where Demand Actually Exists
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Build authority at the category level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn btn-primary">
                  Optimize My Category Pages
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Scale • Structure • Authority
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
