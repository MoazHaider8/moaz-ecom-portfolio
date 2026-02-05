import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Product Page SEO for Ecommerce Websites | Moaz Haider',
  description: 'Product page SEO focused on search intent, relevance, and conversion to improve rankings and revenue for ecommerce stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/product-page-seo',
  },
}

export default function ProductPageSEO() {
  const failureReasons = [
    {
      problem: 'Thin Content',
      why: 'Manufacturer descriptions, bullet points only, no context',
      revenue: 'Google ranks competitors with richer content'
    },
    {
      problem: 'Duplicate Structure',
      why: 'Similar products = similar pages = cannibalization',
      revenue: 'Your variants compete against each other, not competitors'
    },
    {
      problem: 'Intent Mismatch',
      why: 'Page optimized for product name, not what buyers search',
      revenue: 'Traffic from brand terms only, missing category + problem searches'
    },
  ]

  const conversionEngine = [
    {
      layer: 'Intent Alignment',
      what: 'Match your product content to what buyers actually search—not just product model names',
      signal: 'Commercial keywords',
      example: '"best running shoes for plantar fasciitis" not just "Nike Air Zoom"'
    },
    {
      layer: 'Relevance Signals',
      what: 'Structured data, attributes, use cases, and problem-solving content that search engines understand',
      signal: 'Entity recognition',
      example: 'Product schema + use case content + feature-to-benefit mapping'
    },
    {
      layer: 'Technical Enablers',
      what: 'Canonical control, variant handling, and indexation logic to prevent duplicate product issues',
      signal: 'Crawl efficiency',
      example: 'Parameter handling for size/color variants without creating 50 duplicate pages'
    },
    {
      layer: 'Conversion Support',
      what: 'Clear structure, trust signals, and content hierarchy that supports both ranking and purchase decisions',
      signal: 'User engagement',
      example: 'FAQ schema + comparison tables + trust badges = lower bounce, higher dwell'
    },
  ]

  const outcomes = [
    { outcome: 'Product-level rankings', detail: 'Show up when buyers search for solutions, not just brand names' },
    { outcome: 'Qualified traffic', detail: 'Attract visitors with commercial intent who are ready to evaluate and buy' },
    { outcome: 'Conversion alignment', detail: 'Content that ranks also persuades, supporting both visibility and revenue' },
    { outcome: 'Long-term discoverability', detail: 'Sustainable product visibility that compounds as your catalog grows' },
  ]

  const deliveryStages = [
    { stage: 'Product Audit & Prioritization', action: 'Identify high-value products, map current performance, flag duplication and thin content issues' },
    { stage: 'Intent Mapping & Content Strategy', action: 'Align products with commercial search intent, define content gaps, structure relevance signals' },
    { stage: 'On-Page Optimization', action: 'Implement schema, enrich content, optimize attributes, refine internal linking and canonical structure' },
    { stage: 'Validation & Iteration', action: 'Monitor indexation, track rankings for commercial keywords, adjust based on performance data' },
  ]

  const platforms = [
    { name: 'Shopify', context: 'Variant handling, duplicate prevention, collection-to-product linking strategy' },
    { name: 'WooCommerce', context: 'Attribute optimization, variable product SEO, category hierarchy control' },
    { name: 'Magento', context: 'Configurable products, URL rewrites, layered navigation SEO' },
    { name: 'BigCommerce', context: 'Product options, canonical management, faceted search optimization' },
    { name: 'Custom Platforms', context: 'Tailored product schema implementation, crawl control, custom variant logic' },
  ]

  const faqs = [
    {
      question: 'Can product pages rank without backlinks?',
      answer: 'Yes. Product pages rank through relevance, internal linking, and commercial intent alignment. While backlinks help, well-optimized product pages with strong on-page signals and proper site architecture can rank competitively—especially for long-tail commercial searches where intent match matters more than link volume.'
    },
    {
      question: 'How do you avoid duplicate product SEO issues?',
      answer: 'Through canonical control, parameter handling, and variant logic. We ensure size/color/style variations don\'t create duplicate pages competing against each other. Canonical tags point to the primary version, and we use strategic no-index where needed to prevent crawl waste and ranking dilution.'
    },
    {
      question: 'Does product page SEO improve conversions?',
      answer: 'Indirectly, yes. Product page SEO attracts qualified traffic with commercial intent. When content is optimized for both search engines and buyers, you get visitors who are further along the purchase journey. Better intent match = higher conversion potential. But SEO focuses on visibility and relevance—CRO handles the conversion mechanics.'
    },
    {
      question: 'How do you handle similar products?',
      answer: 'By creating differentiation through content and intent targeting. Similar products get unique content angles—different use cases, buyer personas, or problem-solving contexts. This prevents cannibalization and allows each product to rank for distinct commercial searches while maintaining relevance.'
    },
    {
      question: 'What if I have thousands of products?',
      answer: 'We prioritize by revenue potential and search opportunity. Not every product needs custom optimization. High-value products get deep attention, while lower-priority SKUs benefit from scalable optimization—templates, automated schema, and category-level strategies that lift the entire catalog without manual work on every page.'
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
              name: 'Product Page SEO',
              description: 'Product page SEO focused on search intent, relevance, and conversion to improve rankings and revenue for ecommerce stores.',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
                url: 'https://moazhaider.com',
              },
              serviceType: 'Ecommerce Product Page SEO',
              areaServed: 'International',
              url: 'https://moazhaider.com/services/product-page-seo',
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
        {/* 1. HERO - COMMERCIAL FRAMING */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                <Link href="/services" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Ecommerce SEO Services
                </Link>
                <span>/</span>
                <span>Product Page SEO</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Commercial Performance</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
                    Product Page SEO
                  </h1>

                  <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Rank products buyers are actually searching for—not just your brand names.
                  </p>

                  <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Product page SEO focused on commercial search intent, relevance signals, and conversion alignment. When your products show up for the right searches, visibility turns into revenue.
                  </p>

                  {/* Revenue Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Commercial Intent', value: 'Matched' },
                      { label: 'Qualified Traffic', value: 'Increased' },
                      { label: 'Revenue Impact', value: 'Optimized' },
                    ].map((stat, index) => (
                      <div key={index} className="p-3 rounded-lg text-center" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>{stat.label}</div>
                        <div className="text-sm font-bold" style={{ color: 'var(--text)' }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn btn-primary">
                    Optimize My Product Pages
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right: Buyer Journey Visual */}
                <div className="relative">
                  <div className="p-8 rounded-2xl relative overflow-hidden" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                    {/* Background Gradient Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: 'var(--accent)', filter: 'blur(40px)' }}></div>
                    
                    {/* Intent → Conversion Flow */}
                    <div className="space-y-6 relative z-10">
                      {/* Stage 1: Discovery */}
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative" style={{ background: 'var(--accent)', color: 'white' }}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'white', color: 'var(--accent)' }}>1</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>Discovery</div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Commercial search intent</div>
                          </div>
                        </div>
                        <div className="ml-7 mt-2 h-10 w-1 rounded-full" style={{ background: 'var(--border)' }}></div>
                      </div>

                      {/* Stage 2: Evaluation */}
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative" style={{ background: 'var(--accent)', color: 'white' }}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'white', color: 'var(--accent)' }}>2</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>Evaluation</div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Relevance & product fit</div>
                          </div>
                        </div>
                        <div className="ml-7 mt-2 h-10 w-1 rounded-full" style={{ background: 'var(--border)' }}></div>
                      </div>

                      {/* Stage 3: Conversion */}
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative" style={{ background: 'var(--accent)', color: 'white' }}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'white', color: 'var(--accent)' }}>3</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>Purchase</div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Revenue outcome</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 pt-6 relative z-10" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex items-center justify-center gap-2">
                        <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Visibility</div>
                        <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Intent</div>
                        <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY PRODUCT PAGES FAIL TO RANK */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Why Product Pages Don't Rank
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Most ecommerce stores lose revenue opportunities because their product pages fail basic SEO fundamentals
                </p>
              </div>

              {/* Revenue-Led Failure Insights */}
              <div className="grid md:grid-cols-3 gap-6">
                {failureReasons.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Failure Card */}
                    <div className="p-6 rounded-lg h-full relative overflow-hidden" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                      {/* Warning Icon Background */}
                      <div className="absolute -right-3 -top-3 opacity-5">
                        <svg className="w-24 h-24 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
                        </svg>
                      </div>

                      {/* Problem Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 relative z-10" style={{ background: '#FEE2E2', border: '1px solid #EF4444' }}>
                        <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <span className="text-xs font-bold text-red-600">Failure Point {index + 1}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-4 relative z-10" style={{ color: 'var(--text)' }}>
                        {item.problem}
                      </h3>

                      <div className="space-y-4 relative z-10">
                        <div className="p-3 rounded-lg" style={{ background: 'var(--surface)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Why it happens</div>
                          </div>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.why}</p>
                        </div>

                        <div className="p-3 rounded-lg" style={{ background: 'var(--surface)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-xs font-bold uppercase tracking-wider text-red-600">Revenue impact</div>
                          </div>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.revenue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Insight */}
              <div className="mt-8 p-6 rounded-lg text-center" style={{ background: 'var(--card)', border: '2px dashed var(--border)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  Product page SEO fixes the gap between what you sell and what buyers search for
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE PRODUCT PAGE SEO ENGINE */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Conversion Engine</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Product Page SEO Engine
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four revenue-driving layers that turn product visibility into qualified traffic
                </p>
              </div>

              {/* Engine Layers - Unique Funnel Design */}
              <div className="space-y-5">
                {conversionEngine.map((layer, index) => (
                  <div key={index} className="relative">
                    <div
                      className="relative overflow-hidden rounded-xl group hover:scale-[1.01] transition-transform"
                      style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                    >
                      <div className="grid md:grid-cols-12 gap-6 p-6">
                        {/* Left: Layer Number & Name */}
                        <div className="md:col-span-3 flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0 relative"
                            style={{ background: 'var(--accent)', color: 'white' }}
                          >
                            {index + 1}
                            <div className="absolute inset-0 rounded-xl opacity-20" style={{ background: 'linear-gradient(135deg, transparent 0%, white 100%)' }}></div>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>Layer {index + 1}</div>
                            <div className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                              {layer.layer}
                            </div>
                          </div>
                        </div>

                        {/* Middle: What It Does */}
                        <div className="md:col-span-5">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>What it does</div>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {layer.what}
                          </p>
                        </div>

                        {/* Right: Example */}
                        <div className="md:col-span-4 p-4 rounded-lg relative overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                          <div className="absolute top-2 right-2 w-8 h-8 rounded-full opacity-10" style={{ background: 'var(--accent)' }}></div>
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>{layer.signal}</div>
                          </div>
                          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {layer.example}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--surface)' }}>
                        <div className="h-full" style={{ background: 'var(--accent)', width: `${((index + 1) / conversionEngine.length) * 100}%` }}></div>
                      </div>

                      {/* Watermark Layer Number */}
                      <div
                        className="absolute -right-4 -bottom-4 text-9xl font-bold opacity-5 pointer-events-none"
                        style={{ color: 'var(--accent)' }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    {index < conversionEngine.length - 1 && (
                      <div className="flex justify-center my-3">
                        <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Engine Summary */}
              <div className="mt-8 text-center">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="font-semibold" style={{ color: 'var(--text)' }}>The outcome:</span> Products that rank for commercial searches and convert qualified traffic into revenue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT OPTIMIZED PRODUCT PAGES UNLOCK */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  What Optimized Product Pages Unlock
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Business outcomes from product-level SEO optimization
                </p>
              </div>

              {/* Outcome Flow Bands */}
              <div className="space-y-4">
                {outcomes.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      className="p-6 rounded-xl flex items-center gap-6 group hover:scale-[1.02] transition-all relative overflow-hidden"
                      style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                    >
                      {/* Left Accent Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl" style={{ background: 'var(--accent)' }}></div>

                      {/* Outcome Icon & Number */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ background: 'var(--accent)', color: 'white' }}>
                            {index + 1}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', border: '2px solid var(--card)' }}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Outcome Name */}
                        <div>
                          <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>Outcome {index + 1}</div>
                          <div className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                            {item.outcome}
                          </div>
                        </div>
                      </div>

                      {/* Outcome Detail */}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.detail}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      <svg className="w-7 h-7 flex-shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO PRODUCT PAGE SEO IS / IS NOT FOR */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Is Product Page SEO Right for You?
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* This IS For */}
                <div className="p-8 rounded-lg" style={{ background: '#DCFCE7', border: '3px solid #16A34A' }}>
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
                      'You have a catalog of products competing on search visibility',
                      'Your products are similar to competitors but not ranking',
                      'You want to rank for commercial searches, not just brand terms',
                      'You need scalable SEO that works across hundreds or thousands of SKUs',
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
                <div className="p-8 rounded-lg" style={{ background: '#FEE2E2', border: '3px solid #DC2626' }}>
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
                      'You sell a single product or have a one-page landing page',
                      'Your product launch is temporary or seasonal only',
                      'You only care about traffic volume, not conversion quality',
                      'You expect instant rankings without addressing content or technical gaps',
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

        {/* 6. HOW PRODUCT PAGE SEO IS IMPLEMENTED */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  How Product Page SEO Is Implemented
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Structured execution focused on high-value products and scalable optimization
                </p>
              </div>

              {/* Delivery Flow */}
              <div className="space-y-6">
                {deliveryStages.map((stage, index) => (
                  <div
                    key={index}
                    className="relative pl-16 pb-6"
                    style={{ borderLeft: index < deliveryStages.length - 1 ? '2px solid var(--border)' : 'none' }}
                  >
                    {/* Stage Number Circle */}
                    <div
                      className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold -translate-x-1/2"
                      style={{ background: 'var(--accent)', color: 'white', border: '4px solid var(--bg)' }}
                    >
                      {index + 1}
                    </div>

                    {/* Stage Card */}
                    <div className="p-6 rounded-lg" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                        {stage.stage}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {stage.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Context Link */}
              <div className="mt-10 text-center">
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Want to map commercial keywords to your product catalog first?
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

        {/* 7. PLATFORMS & PRODUCT CONTEXT */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Platform-Specific Product SEO
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Each ecommerce platform has unique product SEO challenges and opportunities
                </p>
              </div>

              {/* Platform List */}
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg flex items-start gap-6"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)', color: 'white' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {platform.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {platform.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/platforms" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  View all platform strategies
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMMERCIAL FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Product Page SEO Questions
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
                Turn Product Visibility Into Revenue
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Rank products buyers are searching for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn btn-primary">
                  Optimize My Product Pages
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Commercial intent • Relevance signals • Conversion alignment
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
