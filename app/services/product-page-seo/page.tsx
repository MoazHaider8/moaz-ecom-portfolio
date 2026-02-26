import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Page SEO for Ecommerce Stores | Moaz Haider',
  description: 'Optimize ecommerce product pages to rank for commercial keywords, drive qualified traffic, and increase conversions with strategic product page SEO.',
  alternates: {
    canonical: 'https://moazhaider.com/services/product-page-seo',
  },
  openGraph: {
    title: 'Product Page SEO for Ecommerce Stores | Moaz Haider',
    description: 'Optimize ecommerce product pages to rank for commercial keywords and drive qualified traffic that converts.',
    url: 'https://moazhaider.com/services/product-page-seo',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Page SEO for Ecommerce Stores | Moaz Haider',
    description: 'Optimize ecommerce product pages to rank for commercial keywords and drive qualified traffic that converts.',
  },
}

export default function ProductPageSEOPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/product-page-seo#service',
        name: 'Product Page SEO',
        serviceType: 'Product Page SEO Optimization',
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/product-page-seo',
        description: 'Optimize ecommerce product pages to rank for commercial keywords, drive qualified traffic, and increase conversions.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is product page SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Product page SEO is the process of optimizing individual product pages to rank in search engines for transactional and commercial keywords. It includes optimizing titles, descriptions, images, schema markup, internal linking, and page structure to improve both rankings and conversion rates.' } },
          { '@type': 'Question', name: 'How do you optimize product pages for SEO without hurting conversions?', acceptedAnswer: { '@type': 'Answer', text: 'Product page SEO and conversion optimization work together. SEO-optimized product titles attract the right searchers, structured content helps buyers make decisions, and schema markup enhances search appearance — all of which improve both organic traffic and conversion rates.' } },
          { '@type': 'Question', name: 'Do you handle product schema markup?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, product schema markup is a core component. I implement Product, Offer, AggregateRating, and Review schema to enable rich snippets showing price, availability, and ratings directly in search results.' } },
          { '@type': 'Question', name: 'How many product pages can you optimize?', acceptedAnswer: { '@type': 'Answer', text: 'Product page optimization is scalable. I create optimization frameworks and templates that can be applied across your entire catalog, with hands-on optimization for high-priority product pages and training for your team to maintain standards.' } },
          { '@type': 'Question', name: 'Will product page SEO work for my platform?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, product page SEO applies to all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom builds. Implementation methods vary by platform, but the strategic framework is consistent.' } },
        ],
      },
    ],
  }

  const buyerJourney = [
    { stage: 'Discovery', intent: 'Awareness', desc: 'Searcher is exploring options, comparing categories', keywords: 'best [product type], [product] guide, top [product] 2024', color: 'var(--accent)' },
    { stage: 'Evaluation', intent: 'Consideration', desc: 'Comparing specific products, reading reviews', keywords: '[product] vs [product], [product] review, is [product] worth it', color: 'var(--accent)' },
    { stage: 'Purchase', intent: 'Transaction', desc: 'Ready to buy, seeking best price or availability', keywords: 'buy [product], [product] price, [product] free shipping', color: 'var(--accent)' },
  ]

  const optimizationLayers = [
    {
      title: 'On-Page Foundations',
      desc: 'Title tags, meta descriptions, URL structure, and heading hierarchy optimized for target keywords and click-through rates.',
      items: ['Keyword-optimized product titles', 'Compelling meta descriptions', 'Clean URL structures', 'Strategic heading hierarchy'],
    },
    {
      title: 'Content & Copy',
      desc: 'Product descriptions that serve both search engines and buyers — unique, benefit-focused content that differentiates from manufacturer copy.',
      items: ['Unique product descriptions', 'Feature-benefit content blocks', 'Buyer objection addressing', 'Related product suggestions'],
    },
    {
      title: 'Technical & Schema',
      desc: 'Structured data markup, image optimization, page speed, and technical elements that enhance search appearance and crawlability.',
      items: ['Product schema with rich snippets', 'Image alt text and compression', 'Core Web Vitals optimization', 'Canonical and variant handling'],
    },
    {
      title: 'Internal Linking & UX',
      desc: 'Strategic internal linking that distributes authority and guides both search engines and users through your product catalog.',
      items: ['Breadcrumb optimization', 'Related products linking', 'Category-to-product linking', 'Cross-sell / upsell SEO'],
    },
  ]

  const faqs = [
    { question: 'What is product page SEO?', answer: 'Product page SEO is the process of optimizing individual product pages to rank in search engines for transactional and commercial keywords. It includes optimizing titles, descriptions, images, schema markup, internal linking, and page structure to improve both rankings and conversion rates.' },
    { question: 'How do you optimize product pages for SEO without hurting conversions?', answer: 'Product page SEO and conversion optimization work together. SEO-optimized product titles attract the right searchers, structured content helps buyers make decisions, and schema markup enhances search appearance — all of which improve both organic traffic and conversion rates.' },
    { question: 'Do you handle product schema markup?', answer: 'Yes, product schema markup is a core component. I implement Product, Offer, AggregateRating, and Review schema to enable rich snippets showing price, availability, and ratings directly in search results.' },
    { question: 'How many product pages can you optimize?', answer: 'Product page optimization is scalable. I create optimization frameworks and templates that can be applied across your entire catalog, with hands-on optimization for high-priority product pages and training for your team to maintain standards.' },
    { question: 'Will product page SEO work for my platform?', answer: 'Yes, product page SEO applies to all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom builds. Implementation methods vary by platform, but the strategic framework is consistent.' },
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
                  Page-Level Optimization
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Product Page <span className="gold-gradient-text">SEO</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Turn your product pages into ranking machines — optimized for commercial keywords, structured for rich snippets, and designed to convert organic visitors into buyers.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Optimize Your Products
                  </Link>
                  <Link href="/services/ecommerce-seo-audit" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    Start with Audit
                  </Link>
                </div>
              </div>

              {/* Right: Buyer Journey Flow */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--muted)' }}>Buyer Journey Optimization</div>
                <div className="space-y-4">
                  {buyerJourney.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)' }}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <div className="text-sm font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.stage}</div>
                            <div className="text-xs" style={{ color: 'var(--accent)' }}>{item.intent}</div>
                          </div>
                        </div>
                        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                        <div className="text-xs font-mono p-2 rounded" style={{ background: 'var(--card)', color: 'var(--muted)' }}>{item.keywords}</div>
                      </div>
                      {i < 2 && (
                        <div className="flex justify-center py-1">
                          <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. WHY PRODUCTS FAIL ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Why Product Pages <span className="gold-gradient-text">Fail to Rank</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Most product pages use manufacturer descriptions, lack schema, and have zero keyword strategy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '📝', title: 'Duplicate Content', desc: 'Manufacturer descriptions copied across dozens of competing stores create zero differentiation in search results.' },
                { icon: '🏷️', title: 'Missing Schema', desc: 'Without Product and Offer schema, your products miss rich snippets showing price, availability, and reviews in Google.' },
                { icon: '🔗', title: 'Weak Internal Linking', desc: 'Product pages orphaned from category structure and related products miss critical ranking signals and authority flow.' },
              ].map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 3. OPTIMIZATION LAYERS ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Product SEO <span className="gold-gradient-text">Engine</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four interconnected optimization layers that make every product page work harder in search
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {optimizationLayers.map((layer, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-4" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{layer.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{layer.desc}</p>
                    <ul className="space-y-2">
                      {layer.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 4. WHO THIS IS FOR / NOT FOR ━━━ */}
        <section className="py-20 lg:py-28">
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
                  {['Stores with 100+ product pages needing optimization', 'Brands using manufacturer descriptions on products', 'Ecommerce sites missing product schema markup', 'Stores with poor product page conversion rates', 'Brands wanting to dominate transactional keywords'].map((item, i) => (
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
                  {['Single-product or dropshipping stores', 'Stores without product inventory control', 'Projects needing only paid ad landing pages', 'Sites without product data to optimize', 'Teams unable to update product content'].map((item, i) => (
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

        {/* ━━━ 5. FAQs ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Product SEO <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ━━━ 6. CTA ━━━ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Turn Products Into{' '}
                <span className="gold-gradient-text">Ranking Machines</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Optimize your product pages to capture transactional search traffic and convert organic visitors into paying customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Optimize Your Products
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Schema markup included &middot; All platforms &middot; Scalable frameworks
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
