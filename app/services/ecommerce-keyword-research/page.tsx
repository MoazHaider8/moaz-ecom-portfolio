import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
  description: 'Strategic ecommerce keyword research and mapping focused on search intent, prioritization, and scalable growth for online stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/ecommerce-keyword-research',
  },
  openGraph: {
    title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
    description: 'Strategic ecommerce keyword research and mapping focused on search intent, prioritization, and scalable growth for online stores.',
    url: 'https://moazhaider.com/services/ecommerce-keyword-research',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
    description: 'Strategic ecommerce keyword research and mapping focused on search intent, prioritization, and scalable growth for online stores.',
  },
}

export default function EcommerceKeywordResearchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/ecommerce-keyword-research#service',
        name: 'Ecommerce Keyword Research & Mapping',
        serviceType: 'Ecommerce Keyword Research',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/ecommerce-keyword-research',
        description: 'Strategic ecommerce keyword research and mapping focused on search intent, prioritization, and scalable growth for online stores.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How is ecommerce keyword research different from blog SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce keyword research focuses on commercial intent, product and category mapping, and revenue-driven prioritization. Blog SEO targets informational keywords for traffic. Ecommerce requires understanding buying intent, product hierarchy, and how keywords map to specific product or category pages for conversion, not just traffic.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you map keywords to products or categories?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both. Product-level keywords target specific SKUs with transactional intent. Category keywords capture broader search behavior and higher volume. The mapping strategy depends on search volume, intent, catalog structure, and internal linking architecture. High-performing ecommerce SEO requires strategic distribution across both.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you avoid keyword cannibalization in ecommerce?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Through strategic mapping: one primary keyword per page type, clear intent separation between products and categories, canonical consolidation for variants, and internal linking hierarchy that signals priority. Keyword cannibalization happens when multiple pages compete for the same intent without clear prioritization.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can this keyword strategy scale as my catalog grows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The strategy is built on scalable logic: intent classification, page-type mapping rules, and expansion frameworks. As you add products or categories, the same decision model applies. This prevents reactive keyword chasing and ensures consistent SEO structure as inventory scales.',
            },
          },
          {
            '@type': 'Question',
            name: 'What tools do you use for ecommerce keyword research?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tools are inputs, not strategy. I use enterprise tools like Ahrefs, SEMrush, and Google Search Console for data collection, but the value is in strategic interpretation: opportunity scoring, intent classification, competitive gap analysis, and mapping logic tailored to your catalog and business goals.',
            },
          },
        ],
      },
    ],
  }

  const strategicSignals = [
    { label: 'Intent Classification', value: 'Product vs Category' },
    { label: 'Opportunity Scoring', value: 'Volume × Difficulty × Revenue' },
    { label: 'Mapping Logic', value: 'Page Type Alignment' },
  ]

  const failurePoints = [
    {
      failure: 'Volume-Only Thinking',
      why: 'High-volume keywords often have informational intent or are too broad for ecommerce conversion',
      result: 'Traffic without revenue',
    },
    {
      failure: 'No Intent Classification',
      why: 'Treating all keywords equally ignores the difference between product, category, and support queries',
      result: 'Keyword cannibalization',
    },
    {
      failure: 'List Without Mapping',
      why: 'Keyword lists are useless without clear assignments to specific page types and URL structures',
      result: 'Implementation paralysis',
    },
  ]

  const strategyComponents = [
    {
      component: 'Intent Classification',
      purpose: 'Separate keywords by search behavior and buying stage',
      logic: 'Product intent (high specificity, transactional), Category intent (broader, consideration), Informational intent (support, education). Each requires different page types and content approaches.',
      output: 'Clear intent buckets',
    },
    {
      component: 'Opportunity Scoring',
      purpose: 'Prioritize keywords by strategic value, not just volume',
      logic: 'Score = (Search Volume × Revenue Potential) ÷ (Difficulty + Competitive Saturation). Factors in your catalog strengths, existing authority, and commercial alignment.',
      output: 'Priority-ranked targets',
    },
    {
      component: 'Page-Type Mapping',
      purpose: 'Assign keywords to the correct page architecture',
      logic: 'Product pages target SKU-specific keywords. Categories target broader intent. Collections capture thematic searches. Prevents overlap and establishes crawl hierarchy.',
      output: 'Mapping matrix',
    },
    {
      component: 'Expansion Framework',
      purpose: 'Scale keyword strategy as catalog grows',
      logic: 'Template-based logic: new products inherit category intent + add SKU modifiers. New categories follow existing classification rules. Maintains consistency without manual re-mapping.',
      output: 'Scalable growth rules',
    },
  ]

  const mappingExample = [
    { pageType: 'Product Page', intent: 'Transactional', keywordFocus: 'Brand + Product + Modifiers', example: '"Nike Air Max 270 men\'s black"' },
    { pageType: 'Category Page', intent: 'Commercial Investigation', keywordFocus: 'Product Type + Category', example: '"men\'s running shoes"' },
    { pageType: 'Collection Page', intent: 'Thematic Browse', keywordFocus: 'Use Case + Occasion', example: '"best gym shoes for beginners"' },
    { pageType: 'Support/Blog', intent: 'Informational', keywordFocus: 'How-to + Problems', example: '"how to choose running shoes"' },
  ]

  const deliveryWorkflow = [
    { stage: 'Discovery & Audit', what: 'Analyze existing keyword performance, catalog structure, competitive positioning' },
    { stage: 'Intent Classification', what: 'Categorize keyword opportunities by search intent and page-type fit' },
    { stage: 'Opportunity Scoring', what: 'Rank keywords by strategic value: volume, difficulty, revenue alignment' },
    { stage: 'Mapping & Documentation', what: 'Assign keywords to specific pages with implementation priorities and content briefs' },
  ]

  const platforms = [
    { name: 'Shopify', angle: 'Collection-led keyword strategy for Shopify catalog structures' },
    { name: 'WooCommerce', angle: 'Category hierarchy optimization for WordPress taxonomy' },
    { name: 'Magento', angle: 'Complex catalog keyword mapping for enterprise-scale stores' },
    { name: 'BigCommerce', angle: 'Category and faceted navigation keyword alignment' },
    { name: 'Custom', angle: 'Flexible mapping for custom URL structures and taxonomies' },
  ]

  const faqs = [
    {
      question: 'How is ecommerce keyword research different from blog SEO?',
      answer: 'Ecommerce keyword research focuses on commercial intent, product and category mapping, and revenue-driven prioritization. Blog SEO targets informational keywords for traffic. Ecommerce requires understanding buying intent, product hierarchy, and how keywords map to specific product or category pages for conversion, not just traffic.',
    },
    {
      question: 'Do you map keywords to products or categories?',
      answer: 'Both. Product-level keywords target specific SKUs with transactional intent. Category keywords capture broader search behavior and higher volume. The mapping strategy depends on search volume, intent, catalog structure, and internal linking architecture. High-performing ecommerce SEO requires strategic distribution across both.',
    },
    {
      question: 'How do you avoid keyword cannibalization in ecommerce?',
      answer: 'Through strategic mapping: one primary keyword per page type, clear intent separation between products and categories, canonical consolidation for variants, and internal linking hierarchy that signals priority. Keyword cannibalization happens when multiple pages compete for the same intent without clear prioritization.',
    },
    {
      question: 'Can this keyword strategy scale as my catalog grows?',
      answer: 'Yes. The strategy is built on scalable logic: intent classification, page-type mapping rules, and expansion frameworks. As you add products or categories, the same decision model applies. This prevents reactive keyword chasing and ensures consistent SEO structure as inventory scales.',
    },
    {
      question: 'What tools do you use for ecommerce keyword research?',
      answer: 'Tools are inputs, not strategy. I use enterprise tools like Ahrefs, SEMrush, and Google Search Console for data collection, but the value is in strategic interpretation: opportunity scoring, intent classification, competitive gap analysis, and mapping logic tailored to your catalog and business goals.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* 1. HERO - STRATEGIC FRAMING */}
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

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Strategic Decision Framework</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text)' }}>
                  Ecommerce Keyword Research & Mapping
                </h1>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Build an ecommerce SEO strategy around intent, prioritization, and scalable growth—not just keyword lists.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {strategicSignals.map((signal, index) => (
                    <div key={index} className="text-center p-4 rounded-lg" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                        {signal.label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                        {signal.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-primary">
                  Request Keyword Research Strategy
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: Strategy Matrix Visual */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--muted)' }}>Opportunity Scoring Matrix</div>
                <div className="relative p-8 rounded-lg" style={{ background: 'var(--card)', border: '2px solid var(--border)' }}>
                  {/* Y-axis label */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold" style={{ color: 'var(--muted)' }}>
                    Search Volume →
                  </div>

                  {/* Matrix Grid */}
                  <div className="grid grid-cols-2 gap-3 ml-6">
                    {/* High Volume, Low Difficulty */}
                    <div className="aspect-square p-4 rounded-lg flex flex-col items-center justify-center text-center" style={{ background: '#DCFCE7', border: '2px solid #16A34A' }}>
                      <div className="text-xs font-bold mb-1" style={{ color: '#166534' }}>High Priority</div>
                      <div className="text-2xl">🎯</div>
                      <div className="text-xs mt-1" style={{ color: '#166534' }}>High Vol / Low Diff</div>
                    </div>

                    {/* High Volume, High Difficulty */}
                    <div className="aspect-square p-4 rounded-lg flex flex-col items-center justify-center text-center" style={{ background: '#FEF3C7', border: '2px solid #F59E0B' }}>
                      <div className="text-xs font-bold mb-1" style={{ color: '#92400E' }}>Long-term</div>
                      <div className="text-2xl">⏳</div>
                      <div className="text-xs mt-1" style={{ color: '#92400E' }}>High Vol / High Diff</div>
                    </div>

                    {/* Low Volume, Low Difficulty */}
                    <div className="aspect-square p-4 rounded-lg flex flex-col items-center justify-center text-center" style={{ background: '#E0E7FF', border: '2px solid #6366F1' }}>
                      <div className="text-xs font-bold mb-1" style={{ color: '#3730A3' }}>Quick Wins</div>
                      <div className="text-2xl">⚡</div>
                      <div className="text-xs mt-1" style={{ color: '#3730A3' }}>Low Vol / Low Diff</div>
                    </div>

                    {/* Low Volume, High Difficulty */}
                    <div className="aspect-square p-4 rounded-lg flex flex-col items-center justify-center text-center" style={{ background: '#FEE2E2', border: '2px solid #DC2626' }}>
                      <div className="text-xs font-bold mb-1" style={{ color: '#991B1B' }}>Avoid</div>
                      <div className="text-2xl">⛔</div>
                      <div className="text-xs mt-1" style={{ color: '#991B1B' }}>Low Vol / High Diff</div>
                    </div>
                  </div>

                  {/* X-axis label */}
                  <div className="text-center mt-3 text-xs font-bold" style={{ color: 'var(--muted)' }}>
                    ← Keyword Difficulty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY KEYWORD STRATEGIES FAIL */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ color: 'var(--text)' }}>
                Why Most Ecommerce Keyword Strategies Fail
              </h2>

              <div className="space-y-6">
                {failurePoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)', borderLeft: '4px solid #DC2626' }}
                  >
                    <div className="grid md:grid-cols-[200px_1fr_200px] gap-6">
                      <div>
                        <div className="text-sm font-bold mb-1" style={{ color: '#DC2626' }}>Failure Point</div>
                        <div className="text-base font-semibold" style={{ color: 'var(--text)' }}>{point.failure}</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-1" style={{ color: 'var(--muted)' }}>Why It Happens</div>
                        <div className="text-base" style={{ color: 'var(--text-secondary)' }}>{point.why}</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-1" style={{ color: 'var(--muted)' }}>Result</div>
                        <div className="text-base font-semibold" style={{ color: '#DC2626' }}>{point.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--accent-light)', border: '2px solid var(--accent)' }}>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text)' }}>
                  <strong>Strategic reality:</strong> Ecommerce keyword research is a decision framework, not data collection. Success requires understanding intent, prioritizing based on business goals, and mapping keywords to the right page types. Volume and difficulty are inputs—strategy is the output.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STRATEGY SYSTEM */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                The Ecommerce Keyword Strategy System
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four strategic components that turn keyword data into scalable ecommerce SEO decisions
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {strategyComponents.map((component, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg"
                  style={{
                    background: 'var(--card)',
                    border: '2px solid var(--border)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {component.component}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {component.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg mb-4" style={{ background: 'var(--surface)' }}>
                    <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                      Decision Logic
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {component.logic}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                      Output: {component.output}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MAPPING IN ACTION */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Keyword Mapping in Action
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  How page types, search intent, and keyword focus align strategically
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
                  <thead>
                    <tr style={{ background: 'var(--card)' }}>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Page Type</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Search Intent</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Keyword Focus</th>
                      <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', borderBottom: '2px solid var(--border)' }}>Example Pattern</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mappingExample.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          background: index % 2 === 0 ? 'var(--surface)' : 'var(--card)',
                        }}
                      >
                        <td className="p-4">
                          <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{row.pageType}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.intent}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.keywordFocus}</span>
                        </td>
                        <td className="p-4">
                          <code className="px-2 py-1 rounded text-xs font-mono" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                            {row.example}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Mapping prevents keyword cannibalization and ensures every page has a clear strategic purpose
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS / IS NOT FOR */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* IS FOR */}
                <div className="p-8 rounded-lg" style={{ background: '#DCFCE7', border: '3px solid #16A34A' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#16A34A', color: 'white' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: '#166534' }}>
                      This Strategy Is For:
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Ecommerce brands planning growth beyond 100 products',
                      'Stores needing clear SEO prioritization and roadmaps',
                      'Businesses investing in long-term organic revenue',
                      'Brands expanding catalogs or entering new categories',
                      'Teams requiring strategic clarity, not just keyword lists',
                      'International stores needing market-specific strategies',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm" style={{ color: '#166534' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IS NOT FOR */}
                <div className="p-8 rounded-lg" style={{ background: '#FEE2E2', border: '3px solid #DC2626' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#DC2626', color: 'white' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: '#991B1B' }}>
                      This Strategy Is Not For:
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'One-page or single-product stores',
                      'Traffic-only keyword chasing without revenue goals',
                      'Short-term SEO tactics or quick-fix expectations',
                      'Businesses expecting automated keyword tools to replace strategy',
                      'Stores unwilling to implement recommendations',
                      'Projects without catalog growth or SEO investment plans',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#DC2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm" style={{ color: '#991B1B' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DELIVERY WORKFLOW */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  How This Strategy Is Delivered
                </h2>
              </div>

              <div className="space-y-4">
                {deliveryWorkflow.map((phase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 rounded-lg"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {phase.stage}
                      </h3>
                      <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                        {phase.what}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Need baseline diagnostic data first?
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

        {/* 7. PLATFORMS & STRATEGY CONTEXT */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Platform Intelligence</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Platform-Specific Keyword Strategy
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Each ecommerce platform has unique constraints, capabilities, and keyword opportunities that shape research methodology
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform"
                  style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                >
                  {/* Platform Icon Background */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-lg flex items-center justify-center opacity-10">
                    <svg className="w-12 h-12" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    </svg>
                  </div>

                  {/* Platform Indicator */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                      Platform {index + 1}
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                    {platform.name}
                  </h3>

                  {/* Strategy Angle */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {platform.angle}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="h-1 w-12 rounded-full group-hover:w-full transition-all duration-300" style={{ background: 'var(--accent)' }}></div>
                </div>
              ))}
            </div>

            {/* Platform Strategy CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-3 p-6 rounded-lg" style={{ background: 'var(--surface)', border: '2px dashed var(--border)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  Need platform-specific technical architecture guidance?
                </p>
                <Link href="/platforms" className="inline-flex items-center gap-2 text-base font-bold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  Explore Platform SEO Strategies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. STRATEGIC FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Strategic Questions
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
                Build an Ecommerce SEO Strategy That Scales
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Clear priorities. Strategic mapping. No guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn btn-primary">
                  Request Ecommerce Keyword Research
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                Intent-driven research • Strategic prioritization • Scalable mapping
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
