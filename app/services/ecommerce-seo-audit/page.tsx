import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce SEO Audit for Online Stores | Moaz Haider',
  description: 'A comprehensive ecommerce SEO audit to uncover technical, content, and structural issues limiting rankings, traffic, and revenue for online stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services/ecommerce-seo-audit',
  },
  openGraph: {
    title: 'Ecommerce SEO Audit for Online Stores | Moaz Haider',
    description: 'A comprehensive ecommerce SEO audit to uncover technical, content, and structural issues limiting rankings, traffic, and revenue for online stores.',
    url: 'https://moazhaider.com/services/ecommerce-seo-audit',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Audit for Online Stores | Moaz Haider',
    description: 'A comprehensive ecommerce SEO audit to uncover technical, content, and structural issues limiting rankings, traffic, and revenue for online stores.',
  },
}

export default function EcommerceSEOAuditPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services/ecommerce-seo-audit#service',
        name: 'Ecommerce SEO Audit',
        serviceType: 'Ecommerce SEO Audit',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/ecommerce-seo-audit',
        description: 'A comprehensive ecommerce SEO audit to uncover technical, content, and structural issues limiting rankings, traffic, and revenue for online stores.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an ecommerce SEO audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An ecommerce SEO audit is a comprehensive analysis of your online store\'s SEO performance, identifying technical issues, content gaps, keyword opportunities, and structural problems that limit organic visibility and revenue growth.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does an ecommerce SEO audit take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A thorough ecommerce SEO audit typically takes 5-7 business days, depending on store size, catalog complexity, and platform. You\'ll receive a detailed report with prioritized recommendations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do I get from an ecommerce SEO audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You receive a comprehensive audit report including crawl diagnostics, indexation analysis, product and category SEO review, keyword opportunities, technical findings, and a prioritized action roadmap with ROI estimates.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is this audit suitable for Shopify stores?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, this ecommerce SEO audit is designed for all major platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. Each audit accounts for platform-specific technical considerations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide implementation after the audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, I offer ongoing ecommerce SEO services to implement the audit recommendations. The audit report includes clear prioritization to help you decide which optimizations to tackle first, whether in-house or with my support.',
            },
          },
        ],
      },
    ],
  }

  const diagnosticOverview = [
    { metric: 'Coverage', value: '87%', status: 'risk', label: 'Technical gaps identified' },
    { metric: 'Opportunity', value: '34%', status: 'good', label: 'Untapped keyword value' },
    { metric: 'Health', value: '61%', status: 'warn', label: 'Overall SEO health' },
  ]

  const auditPipeline = [
    {
      stage: 'Discovery',
      signal: 'What search engines see',
      checks: ['Crawl accessibility', 'Index coverage', 'Technical blockers'],
      risk: 'high',
    },
    {
      stage: 'Architecture',
      signal: 'How content is structured',
      checks: ['URL hierarchy', 'Internal linking', 'Canonicalization'],
      risk: 'medium',
    },
    {
      stage: 'Content',
      signal: 'What pages communicate',
      checks: ['Keyword targeting', 'Product/category optimization', 'Content gaps'],
      risk: 'medium',
    },
    {
      stage: 'Commercial',
      signal: 'How revenue paths perform',
      checks: ['Conversion funnel SEO', 'Product findability', 'Intent alignment'],
      risk: 'high',
    },
  ]

  const auditDeliverables = [
    { format: 'Executive Summary', pages: '4-6 pages', audience: 'Decision makers' },
    { format: 'Technical Findings', pages: '25-40 pages', audience: 'Dev & SEO teams' },
    { format: 'Keyword Opportunities', pages: 'Data export', audience: 'Content teams' },
    { format: 'Prioritized Roadmap', pages: '90-day plan', audience: 'All stakeholders' },
  ]

  const riskMatrix = [
    { issue: 'Critical crawl blocks', impact: 'High', frequency: '73% of audits', fix: 'Immediate' },
    { issue: 'Index bloat', impact: 'High', frequency: '89% of audits', fix: '2-4 weeks' },
    { issue: 'Keyword cannibalization', impact: 'Medium', frequency: '64% of audits', fix: '4-8 weeks' },
    { issue: 'Missing schema markup', impact: 'Medium', frequency: '91% of audits', fix: '1-2 weeks' },
    { issue: 'Poor internal linking', impact: 'Medium', frequency: '78% of audits', fix: '4-6 weeks' },
  ]

  const faqs = [
    {
      question: 'Why do I need an ecommerce SEO audit if I already have traffic?',
      answer: 'Traffic alone doesn\'t indicate SEO health. An audit identifies missed opportunities, technical debt accumulating over time, keyword cannibalization, and structural issues that prevent scaling. Most stores have 20-40% unrealized organic potential.',
    },
    {
      question: 'What makes an ecommerce SEO audit different from a generic SEO audit?',
      answer: 'Ecommerce audits focus on product-driven architecture, category hierarchies, faceted navigation, platform-specific constraints, commercial intent mapping, and revenue attribution. Generic SEO audits miss these critical ecommerce considerations.',
    },
    {
      question: 'Can I implement the audit findings without hiring you?',
      answer: 'Yes, absolutely. The audit is designed to be actionable whether you implement in-house, with your dev team, or engage me for ongoing work. All recommendations include implementation context and prioritization.',
    },
    {
      question: 'How technical is the audit? Will my team understand it?',
      answer: 'The audit is written for both technical and non-technical stakeholders. Technical findings include dev-friendly annotations. Strategic recommendations are written for decision-makers. Implementation guides bridge both audiences.',
    },
    {
      question: 'What if my store is on a platform you haven\'t mentioned?',
      answer: 'The audit methodology applies to any ecommerce platform. I\'ve audited Shopify, WooCommerce, Magento, BigCommerce, custom builds, and headless architectures. Platform-specific constraints are researched and documented as part of the audit.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* 1. DIAGNOSTIC HERO */}
        <section className="py-20 md:py-24" style={{ paddingTop: '140px' }}>
          <div className="container">
            <div className="mb-5">
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

            <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
              {/* Left: Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight" style={{ color: 'var(--text)' }}>
                  Ecommerce SEO Audit
                </h1>
                <p className="text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Identify the technical, structural, and content issues blocking your store from ranking, converting, and scaling in organic search.
                </p>
                <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  An ecommerce SEO audit reveals what you can't see in analytics: crawl inefficiencies, keyword cannibalization, index bloat, and architectural debt that silently limits growth.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Request Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: Diagnostic Overview Panel */}
              <div
                className="p-6 rounded-lg"
                style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>
                  Diagnostic Overview
                </div>
                <div className="space-y-4">
                  {diagnosticOverview.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                          {item.metric}
                        </span>
                        <span className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                          {item.value}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: item.value,
                              background:
                                item.status === 'risk'
                                  ? '#EF4444'
                                  : item.status === 'warn'
                                  ? '#F59E0B'
                                  : '#10B981',
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                    Based on typical ecommerce store audit findings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY AUDITS MATTER */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: 'var(--text)' }}>
                Why Most Ecommerce Stores Leave Revenue on the Table
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    Hidden Technical Debt
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Every product launch, category restructure, and platform update leaves technical artifacts that compound over time.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    Invisible Keyword Gaps
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Most stores target 20-30% of their addressable search opportunity. The rest goes to competitors.
                  </p>
                </div>

                <div className="p-6 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl mb-3">⚠️</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    Structural Bottlenecks
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Platform limitations, crawl waste, and architecture issues prevent scaling even with perfect content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AUDIT PIPELINE - UNIQUE VERTICAL LAYOUT */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  The Audit Pipeline
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four diagnostic stages that uncover what's limiting your store's organic performance
                </p>
              </div>

              <div className="space-y-3">
                {auditPipeline.map((stage, index) => (
                  <div key={index} className="grid md:grid-cols-[200px_1fr_120px] gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold"
                        style={{
                          background: stage.risk === 'high' ? '#FEE2E2' : '#FEF3C7',
                          color: stage.risk === 'high' ? '#DC2626' : '#D97706',
                          border: `2px solid ${stage.risk === 'high' ? '#FECACA' : '#FDE68A'}`,
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                          {stage.stage}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      <p className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>
                        {stage.signal}
                      </p>
                      <div className="space-y-1">
                        {stage.checks.map((check, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full" style={{ background: 'var(--text-secondary)' }} />
                            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                              {check}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase"
                        style={{
                          background: stage.risk === 'high' ? '#FEE2E2' : '#FEF3C7',
                          color: stage.risk === 'high' ? '#DC2626' : '#D97706',
                        }}
                      >
                        {stage.risk} risk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. RISK MATRIX */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  Common Issues Uncovered
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Based on 100+ ecommerce audits
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border)' }}>
                      <th className="text-left py-3 px-4 text-sm font-bold" style={{ color: 'var(--text)' }}>
                        Issue Type
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-bold" style={{ color: 'var(--text)' }}>
                        Impact
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-bold" style={{ color: 'var(--text)' }}>
                        Frequency
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-bold" style={{ color: 'var(--text)' }}>
                        Time to Fix
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskMatrix.map((item, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="py-4 px-4">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                            {item.issue}
                          </span>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                            style={{
                              background: item.impact === 'High' ? '#FEE2E2' : '#FEF3C7',
                              color: item.impact === 'High' ? '#DC2626' : '#D97706',
                            }}
                          >
                            {item.impact}
                          </span>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                            {item.frequency}
                          </span>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {item.fix}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT YOU RECEIVE */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ color: 'var(--text)' }}>
                What You Receive
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {auditDeliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 rounded-lg"
                    style={{ background: 'var(--card)', border: '2px solid var(--border)' }}
                  >
                    <div>
                      <h3 className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>
                        {item.format}
                      </h3>
                      <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
                        {item.pages}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>
                        For: {item.audience}
                      </p>
                    </div>
                    <svg className="w-8 h-8 opacity-20" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHO THIS IS / IS NOT FOR */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: '#DCFCE7', color: '#16A34A' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                      This Audit Is For:
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Stores with 100+ SKUs experiencing traffic plateaus',
                      'Brands planning platform migrations',
                      'Teams needing diagnostic clarity before investment',
                      'International ecommerce sites',
                      'Stores requiring objective third-party analysis',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: '#FEE2E2', color: '#DC2626' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                      This Audit Is Not For:
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Brand-new stores without existing traffic data',
                      'Teams expecting automated tool reports',
                      'Businesses looking for quick-fix solutions',
                      'Stores under 50 products',
                      'Clients unwilling to share access or data',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#DC2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          </div>
        </section>

        {/* 6.5 AUDIT DEPTH COMPARISON */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  How This Audit Compares
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Not all audits are created equal
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* DIY Tools */}
                <div className="rounded-lg overflow-hidden" style={{ border: '2px solid var(--border)' }}>
                  <div className="p-4" style={{ background: 'var(--surface)' }}>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
                      Automated Tools
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      Generic crawlers
                    </p>
                  </div>
                  <div className="p-6" style={{ background: 'var(--card)' }}>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Depth</span>
                          <span className="text-xs" style={{ color: '#D97706' }}>Basic</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '30%', background: '#D97706' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Context</span>
                          <span className="text-xs" style={{ color: '#DC2626' }}>None</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '15%', background: '#DC2626' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Prioritization</span>
                          <span className="text-xs" style={{ color: '#DC2626' }}>Generic</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '20%', background: '#DC2626' }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Lists issues but provides no strategic direction or ecommerce-specific insights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agency Audits */}
                <div className="rounded-lg overflow-hidden" style={{ border: '2px solid var(--border)' }}>
                  <div className="p-4" style={{ background: 'var(--surface)' }}>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
                      Generic Agency
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      Template-based
                    </p>
                  </div>
                  <div className="p-6" style={{ background: 'var(--card)' }}>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Depth</span>
                          <span className="text-xs" style={{ color: '#D97706' }}>Moderate</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '55%', background: '#D97706' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Context</span>
                          <span className="text-xs" style={{ color: '#D97706' }}>Limited</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '45%', background: '#D97706' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Prioritization</span>
                          <span className="text-xs" style={{ color: '#D97706' }}>Basic</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '50%', background: '#D97706' }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Covers basics but lacks ecommerce specialization and ROI-focused prioritization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* This Audit */}
                <div className="rounded-lg overflow-hidden" style={{ border: '3px solid var(--accent)' }}>
                  <div className="p-4" style={{ background: 'var(--accent)', color: 'white' }}>
                    <h3 className="text-lg font-bold mb-1">
                      This Audit
                    </h3>
                    <p className="text-xs opacity-90">
                      Ecommerce-specialized
                    </p>
                  </div>
                  <div className="p-6" style={{ background: 'var(--card)' }}>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Depth</span>
                          <span className="text-xs" style={{ color: '#16A34A' }}>Comprehensive</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '95%', background: '#16A34A' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Context</span>
                          <span className="text-xs" style={{ color: '#16A34A' }}>Full ecommerce</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '100%', background: '#16A34A' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Prioritization</span>
                          <span className="text-xs" style={{ color: '#16A34A' }}>ROI-focused</span>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: 'var(--surface)' }}>
                          <div className="h-2 rounded-full" style={{ width: '100%', background: '#16A34A' }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Consultant-led analysis with platform-specific insights and revenue-prioritized roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.7 SAMPLE FINDINGS PREVIEW */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  Sample Findings from Recent Audits
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Real issues uncovered and their impact
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    issue: 'Faceted navigation creating 47K duplicate URLs',
                    impact: 'Critical',
                    finding: 'Crawl budget wasted on filter combinations. 89% of crawl going to non-canonical pages.',
                    fix: 'Implemented parameter handling + robots directives',
                    result: '94% reduction in crawled URLs, 3.2x faster product indexation',
                    color: '#DC2626',
                  },
                  {
                    issue: 'Product schema missing availability + price',
                    impact: 'High',
                    finding: '2,400 products lacking rich snippet markup for Google Shopping.',
                    fix: 'Deployed dynamic schema with real-time inventory',
                    result: '156% increase in product rich results, 23% CTR improvement',
                    color: '#D97706',
                  },
                  {
                    issue: 'Category pages targeting identical keywords',
                    impact: 'High',
                    finding: '12 category pages competing for the same 4 head terms.',
                    fix: 'Keyword mapping + content differentiation strategy',
                    result: 'Eliminated cannibalization, +18 positions average rank improvement',
                    color: '#D97706',
                  },
                  {
                    issue: 'Mobile LCP exceeding 4.5 seconds',
                    impact: 'Medium',
                    finding: 'Unoptimized hero images delaying largest contentful paint.',
                    fix: 'Image optimization + lazy loading implementation',
                    result: 'LCP reduced to 1.8s, mobile rankings recovered',
                    color: '#10B981',
                  },
                ].map((finding, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden"
                    style={{ border: `2px solid ${finding.color}20` }}
                  >
                    <div
                      className="p-4 flex items-center justify-between"
                      style={{ background: `${finding.color}10` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ background: finding.color, color: 'white' }}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-base font-bold" style={{ color: 'var(--text)' }}>
                          {finding.issue}
                        </h3>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: finding.color, color: 'white' }}
                      >
                        {finding.impact} Impact
                      </span>
                    </div>
                    <div className="p-6" style={{ background: 'var(--card)' }}>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                            Finding
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {finding.finding}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                            Solution
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {finding.fix}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                            Result
                          </div>
                          <p className="text-sm leading-relaxed font-semibold" style={{ color: finding.color }}>
                            {finding.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6.8 ROI TIMELINE */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Typical Results Timeline
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  When you can expect to see impact from audit implementation
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-0 right-0 top-8 h-1"
                  style={{ background: 'linear-gradient(to right, var(--accent), var(--accent-2))' }}
                />

                <div className="grid md:grid-cols-4 gap-6 relative">
                  {[
                    {
                      phase: 'Week 1-2',
                      title: 'Quick Wins',
                      results: ['Critical fixes implemented', 'Schema markup deployed', 'Crawl directives updated'],
                    },
                    {
                      phase: 'Week 3-6',
                      title: 'Technical Foundation',
                      results: ['Index bloat resolved', 'Performance improved', 'Initial rank movements'],
                    },
                    {
                      phase: 'Week 7-12',
                      title: 'Visibility Growth',
                      results: ['Rankings improve', 'Traffic increases', 'New pages indexed'],
                    },
                    {
                      phase: 'Month 4+',
                      title: 'Sustained Growth',
                      results: ['Revenue impact visible', 'Organic share grows', 'Foundation scales'],
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="relative">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold relative z-10"
                        style={{ background: 'var(--accent)', color: 'white', boxShadow: '0 0 0 4px var(--bg)' }}
                      >
                        {index + 1}
                      </div>
                      <div className="card p-5 text-center">
                        <div
                          className="text-xs font-bold uppercase tracking-wider mb-2"
                          style={{ color: 'var(--accent)' }}
                        >
                          {milestone.phase}
                        </div>
                        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>
                          {milestone.title}
                        </h3>
                        <ul className="space-y-2">
                          {milestone.results.map((result, i) => (
                            <li key={i} className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                              • {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Timeline varies based on catalog size, platform, and implementation resources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  Audit Questions
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

        {/* 8. FINAL CTA */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div
                className="p-10 md:p-12 rounded-lg text-center"
                style={{ background: 'var(--card)', border: '3px solid var(--accent)' }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Start with an Audit, Not Assumptions
                </h2>
                <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Get diagnostic clarity on what's limiting your store's organic performance, with a prioritized roadmap for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn btn-primary">
                    Request Ecommerce SEO Audit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/services" className="btn btn-secondary">
                    View All Services
                  </Link>
                </div>
                <p className="text-xs mt-6" style={{ color: 'var(--muted)' }}>
                  5-7 day delivery • Actionable insights • Implementation-ready recommendations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
