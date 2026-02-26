import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
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
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/ecommerce-seo-audit',
        description: 'A comprehensive ecommerce SEO audit to uncover technical, content, and structural issues limiting rankings, traffic, and revenue for online stores.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is an ecommerce SEO audit?', acceptedAnswer: { '@type': 'Answer', text: "An ecommerce SEO audit is a comprehensive analysis of your online store's SEO performance, identifying technical issues, content gaps, keyword opportunities, and structural problems that limit organic visibility and revenue growth." } },
          { '@type': 'Question', name: 'How long does an ecommerce SEO audit take?', acceptedAnswer: { '@type': 'Answer', text: "A thorough ecommerce SEO audit typically takes 5-7 business days, depending on store size, catalog complexity, and platform. You'll receive a detailed report with prioritized recommendations." } },
          { '@type': 'Question', name: 'What do I get from an ecommerce SEO audit?', acceptedAnswer: { '@type': 'Answer', text: 'You receive a comprehensive audit report including crawl diagnostics, indexation analysis, product and category SEO review, keyword opportunities, technical findings, and a prioritized action roadmap with ROI estimates.' } },
          { '@type': 'Question', name: 'Is this audit suitable for Shopify stores?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, this ecommerce SEO audit is designed for all major platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. Each audit accounts for platform-specific technical considerations.' } },
          { '@type': 'Question', name: 'Do you provide implementation after the audit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, I offer ongoing ecommerce SEO services to implement the audit recommendations. The audit report includes clear prioritization to help you decide which optimizations to tackle first, whether in-house or with my support.' } },
        ],
      },
    ],
  }

  const diagnosticOverview = [
    { metric: 'Coverage', value: '87%', status: 'danger', label: 'Technical gaps identified' },
    { metric: 'Opportunity', value: '34%', status: 'success', label: 'Untapped keyword value' },
    { metric: 'Health', value: '61%', status: 'warning', label: 'Overall SEO health' },
  ]

  const auditPipeline = [
    { stage: 'Discovery', signal: 'What search engines see', checks: ['Crawl accessibility', 'Index coverage', 'Technical blockers'] },
    { stage: 'Architecture', signal: 'How content is structured', checks: ['URL hierarchy', 'Internal linking', 'Canonicalization'] },
    { stage: 'Content', signal: 'What pages communicate', checks: ['Keyword targeting', 'Product/category optimization', 'Content gaps'] },
    { stage: 'Commercial', signal: 'How revenue paths perform', checks: ['Conversion funnel SEO', 'Product findability', 'Intent alignment'] },
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
    { question: 'Why do I need an ecommerce SEO audit if I already have traffic?', answer: "Traffic alone doesn't indicate SEO health. An audit identifies missed opportunities, technical debt accumulating over time, keyword cannibalization, and structural issues that prevent scaling. Most stores have 20-40% unrealized organic potential." },
    { question: 'What makes an ecommerce SEO audit different from a generic SEO audit?', answer: 'Ecommerce audits focus on product-driven architecture, category hierarchies, faceted navigation, platform-specific constraints, commercial intent mapping, and revenue attribution. Generic SEO audits miss these critical ecommerce considerations.' },
    { question: 'Can I implement the audit findings without hiring you?', answer: 'Yes, absolutely. The audit is designed to be actionable whether you implement in-house, with your dev team, or engage me for ongoing work. All recommendations include implementation context and prioritization.' },
    { question: 'How technical is the audit? Will my team understand it?', answer: 'The audit is written for both technical and non-technical stakeholders. Technical findings include dev-friendly annotations. Strategic recommendations are written for decision-makers. Implementation guides bridge both audiences.' },
    { question: "What if my store is on a platform you haven't mentioned?", answer: "The audit methodology applies to any ecommerce platform. I've audited Shopify, WooCommerce, Magento, BigCommerce, custom builds, and headless architectures. Platform-specific constraints are researched and documented as part of the audit." },
  ]

  const statusColor = (status: string) => {
    if (status === 'success') return { bg: 'var(--status-success-light)', color: 'var(--status-success)' }
    if (status === 'warning') return { bg: 'var(--status-warning-light)', color: 'var(--status-warning)' }
    return { bg: 'var(--status-danger-light)', color: 'var(--status-danger)' }
  }

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

            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
              <div>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                  Diagnostic & Strategy
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Ecommerce <span className="gold-gradient-text">SEO Audit</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Identify the technical, structural, and content issues blocking your store from ranking, converting, and scaling in organic search.
                </p>
                <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  An ecommerce SEO audit reveals what you can&apos;t see in analytics: crawl inefficiencies, keyword cannibalization, index bloat, and architectural debt that silently limits growth.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Request Audit
                  </Link>
                  <Link href="/case-studies" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* Right: Diagnostic Panel */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--muted)' }}>Sample Diagnostic Overview</div>
                <div className="space-y-5">
                  {diagnosticOverview.map((item, i) => {
                    const sc = statusColor(item.status)
                    return (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{item.metric}</span>
                          <span className="text-lg font-bold" style={{ color: sc.color }}>{item.value}</span>
                        </div>
                        <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface)' }}>
                          <div className="h-full rounded-full transition-all duration-1000" style={{ width: item.value, background: sc.color }} />
                        </div>
                        <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{item.label}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-5 pt-4 text-xs text-center" style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}>
                  Based on typical ecommerce store findings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. WHY AUDITS MATTER ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Why Every Store Needs an <span className="gold-gradient-text">SEO Audit</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Most stores leave 20-40% of their organic potential untapped due to invisible technical and structural issues
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔍', title: 'Invisible Technical Debt', desc: 'Crawl blocks, index bloat, and canonical conflicts accumulate silently. Without an audit, you\'re optimizing on a broken foundation.' },
                { icon: '📉', title: 'Missed Revenue Signals', desc: 'Keyword cannibalization, poor internal linking, and missing schema mean search engines can\'t connect your products to buyer intent.' },
                { icon: '🏗️', title: 'Scaling Without Strategy', desc: 'Adding products to a weak architecture compounds problems. An audit establishes the baseline before optimization begins.' },
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

        {/* ━━━ 3. AUDIT PIPELINE ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Audit Framework
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                The Audit <span className="gold-gradient-text">Pipeline</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four interconnected analysis stages that map your store&apos;s complete SEO landscape
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {auditPipeline.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="h-full p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-4" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.stage}</h3>
                      <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>{item.signal}</p>
                      <ul className="space-y-2">
                        {item.checks.map((check, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {check}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                  </div>
                  {/* Arrow connector */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 4. RISK MATRIX ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Common Findings
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Typical <span className="gold-gradient-text">Risk Matrix</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Issues found across hundreds of ecommerce store audits
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-bold rounded-tl-xl" style={{ color: 'var(--text)', background: 'var(--card)', borderBottom: '2px solid var(--accent)' }}>Issue</th>
                    <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', background: 'var(--card)', borderBottom: '2px solid var(--accent)' }}>Impact</th>
                    <th className="text-left p-4 text-sm font-bold" style={{ color: 'var(--text)', background: 'var(--card)', borderBottom: '2px solid var(--accent)' }}>Frequency</th>
                    <th className="text-left p-4 text-sm font-bold rounded-tr-xl" style={{ color: 'var(--text)', background: 'var(--card)', borderBottom: '2px solid var(--accent)' }}>Fix Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {riskMatrix.map((item, i) => (
                    <tr key={i} className="transition-colors" style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--card)' }}>
                      <td className="p-4 text-sm font-semibold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{item.issue}</td>
                      <td className="p-4" style={{ borderBottom: '1px solid var(--border)' }}>
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold" style={{
                          background: item.impact === 'High' ? 'var(--status-danger-light)' : 'var(--status-warning-light)',
                          color: item.impact === 'High' ? 'var(--status-danger)' : 'var(--status-warning)',
                        }}>
                          {item.impact}
                        </span>
                      </td>
                      <td className="p-4 text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{item.frequency}</td>
                      <td className="p-4 text-sm font-medium" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}>{item.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ━━━ 5. WHAT YOU RECEIVE ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Deliverables
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                What You <span className="gold-gradient-text">Receive</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {auditDeliverables.map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-lg font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 20px var(--accent-glow)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.format}</h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--accent)' }}>{item.pages}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 6. WHO THIS IS FOR / NOT FOR ━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Right Fit
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Is This Audit <span className="gold-gradient-text">Right for You?</span>
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
                  {['Stores with 100+ products seeking clarity', 'Brands experiencing ranking plateaus', 'Teams planning platform migrations', 'Ecommerce sites with growing technical debt', 'Stores launching into new markets'].map((item, i) => (
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
                  {['Brand new stores with no traffic history', 'One-page or single-product stores', 'Projects seeking guaranteed rankings', 'Sites without dev resources for implementation', 'Teams not ready to act on findings'].map((item, i) => (
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

        {/* ━━━ 7. FAQs ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Audit <span className="gold-gradient-text">Questions</span>
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
                Uncover Your Store&apos;s{' '}
                <span className="gold-gradient-text">Hidden Potential</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Get a comprehensive audit that reveals exactly what&apos;s holding your store back — and a clear roadmap to fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Request Your Audit
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                5-7 business days &middot; All platforms &middot; Actionable roadmap included
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
