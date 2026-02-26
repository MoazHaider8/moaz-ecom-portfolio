import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
  description: 'Strategic ecommerce keyword research mapped to product and category pages. Intent-driven keyword strategy for online stores to capture high-value commercial search traffic.',
  alternates: {
    canonical: 'https://moazhaider.com/services/ecommerce-keyword-research',
  },
  openGraph: {
    title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
    description: 'Strategic ecommerce keyword research mapped to product and category pages for maximum search visibility and commercial intent.',
    url: 'https://moazhaider.com/services/ecommerce-keyword-research',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Keyword Research & Mapping | Moaz Haider',
    description: 'Strategic ecommerce keyword research mapped to product and category pages for maximum search visibility and commercial intent.',
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
        provider: { '@type': 'Person', name: 'Moaz Haider', url: 'https://moazhaider.com' },
        areaServed: 'International',
        url: 'https://moazhaider.com/services/ecommerce-keyword-research',
        description: 'Strategic ecommerce keyword research mapped to product and category pages for maximum search visibility and commercial intent.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How is ecommerce keyword research different from regular keyword research?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce keyword research focuses on commercial and transactional intent keywords mapped to product pages, category pages, and buyer journey stages. It accounts for product variations, seasonal trends, and purchase intent signals that generic keyword research ignores.' } },
          { '@type': 'Question', name: 'How do you map keywords to existing pages?', acceptedAnswer: { '@type': 'Answer', text: 'Keywords are mapped based on search intent alignment, page type (product vs category vs content), existing rankings, and commercial value. The mapping identifies gaps where new pages are needed and pages that are cannibalizing each other.' } },
          { '@type': 'Question', name: 'Do you research competitor keywords?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, competitor keyword analysis is a core component. I identify keywords your competitors rank for that you don\'t, gaps in their strategy you can exploit, and keyword opportunities based on competitive difficulty assessment.' } },
          { '@type': 'Question', name: 'How many keywords will I receive?', acceptedAnswer: { '@type': 'Answer', text: 'The deliverable typically includes 500-2000+ keyword opportunities depending on your catalog size and market. Keywords are organized by intent, priority, and page mapping — not just a raw list.' } },
          { '@type': 'Question', name: 'Can keyword research be done for international markets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, I conduct keyword research for international ecommerce markets including US, UK, Canada, Australia, UAE, and Germany. Each market has unique search patterns and language variations that require localized research.' } },
        ],
      },
    ],
  }

  const strategyComponents = [
    {
      title: 'Intent Classification',
      desc: 'Categorize every keyword by buyer intent stage — navigational, informational, commercial investigation, and transactional — to match content to purpose.',
      icon: '🎯',
      outputs: ['Intent-mapped keyword clusters', 'Funnel stage assignment', 'Content type recommendations'],
    },
    {
      title: 'Competitive Gap Analysis',
      desc: 'Identify high-value keywords your competitors rank for that you don\'t — and keywords where you can realistically outrank stronger domains.',
      icon: '📊',
      outputs: ['Competitor keyword overlap matrix', 'Difficulty vs. opportunity scoring', 'Market share analysis'],
    },
    {
      title: 'Page-Level Mapping',
      desc: 'Match keywords to existing product, category, and content pages. Identify gaps where new pages are needed and conflicts where pages cannibalize.',
      icon: '🗺️',
      outputs: ['Product page keyword assignments', 'Category keyword targets', 'New page recommendations'],
    },
    {
      title: 'Priority Scoring',
      desc: 'Rank every keyword opportunity by commercial value, ranking difficulty, and traffic potential to build an actionable implementation sequence.',
      icon: '⚡',
      outputs: ['Weighted priority scores', 'Quick win identification', '90-day targeting roadmap'],
    },
  ]

  const opportunityMatrix = [
    { quadrant: 'Quick Wins', desc: 'High volume, low competition keywords you can rank for within 30-60 days', priority: 'Immediate' },
    { quadrant: 'Strategic Long-Term', desc: 'High volume, high competition keywords requiring sustained authority building', priority: 'Ongoing' },
    { quadrant: 'Niche Opportunities', desc: 'Lower volume, low competition keywords with high conversion potential', priority: 'Parallel' },
    { quadrant: 'Authority Builders', desc: 'Informational keywords that build topical authority supporting commercial rankings', priority: 'Foundation' },
  ]

  const faqs = [
    { question: 'How is ecommerce keyword research different from regular keyword research?', answer: 'Ecommerce keyword research focuses on commercial and transactional intent keywords mapped to product pages, category pages, and buyer journey stages. It accounts for product variations, seasonal trends, and purchase intent signals that generic keyword research ignores.' },
    { question: 'How do you map keywords to existing pages?', answer: "Keywords are mapped based on search intent alignment, page type (product vs category vs content), existing rankings, and commercial value. The mapping identifies gaps where new pages are needed and pages that are cannibalizing each other." },
    { question: 'Do you research competitor keywords?', answer: "Yes, competitor keyword analysis is a core component. I identify keywords your competitors rank for that you don't, gaps in their strategy you can exploit, and keyword opportunities based on competitive difficulty assessment." },
    { question: 'How many keywords will I receive?', answer: 'The deliverable typically includes 500-2000+ keyword opportunities depending on your catalog size and market. Keywords are organized by intent, priority, and page mapping — not just a raw list.' },
    { question: 'Can keyword research be done for international markets?', answer: 'Yes, I conduct keyword research for international ecommerce markets including US, UK, Canada, Australia, UAE, and Germany. Each market has unique search patterns and language variations that require localized research.' },
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
                  Research & Strategy
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Ecommerce <span className="gold-gradient-text">Keyword Research</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Strategic keyword research mapped to your product catalog, category structure, and buyer journey — targeting the commercial keywords that drive revenue.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  {[
                    { val: '500+', label: 'Keywords per project' },
                    { val: '4', label: 'Intent categories' },
                    { val: '90', label: 'Day roadmap' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{s.val}</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Start Keyword Research
                  </Link>
                  <Link href="/services/ecommerce-seo-audit" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    Or Start with Audit
                  </Link>
                </div>
              </div>

              {/* Right: 2×2 Opportunity Matrix Preview */}
              <div className="p-6 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--muted)' }}>Opportunity Scoring Matrix</div>
                <div className="grid grid-cols-2 gap-3">
                  {opportunityMatrix.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div className="text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.quadrant}</div>
                      <p className="text-xs mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 2. WHY KEYWORD STRATEGIES FAIL ━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Problem
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Why Keyword Strategies <span className="gold-gradient-text">Fail</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Most ecommerce keyword research is just volume chasing — missing the intent layer that connects keywords to revenue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Volume Without Intent', desc: 'Chasing high-volume keywords without understanding whether searchers want to research, compare, or buy leads to traffic that doesn\'t convert.' },
                { icon: '🗺️', title: 'No Page Mapping', desc: 'Raw keyword lists without mapping to product pages, category pages, and content create confusion about what to optimize where.' },
                { icon: '📊', title: 'Ignoring Architecture', desc: 'Keywords selected without considering your existing site structure lead to cannibalization, orphaned pages, and wasted effort.' },
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

        {/* ━━━ 3. STRATEGY SYSTEM ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                The Keyword Research <span className="gold-gradient-text">System</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Four integrated components that turn keyword data into an actionable ecommerce strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {strategyComponents.map((item, i) => (
                <div key={i} className="group p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                    </div>
                    <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>Outputs</div>
                      <ul className="space-y-1.5">
                        {item.outputs.map((out, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {out}
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
                  {['Brands expanding into new product categories', 'Stores entering new international markets', 'Teams with content resources ready to execute', 'Ecommerce brands with 100+ SKUs needing strategy', 'Stores experiencing keyword cannibalization'].map((item, i) => (
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
                  {['Stores with fewer than 20 products', 'Projects needing only 10-15 keywords', 'Teams without resources to implement findings', 'Businesses in zero-competition niches', 'Dropshipping stores with no brand identity'].map((item, i) => (
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

        {/* ━━━ 5. PLATFORMS ━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Platform Coverage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Platform-Aware <span className="gold-gradient-text">Research</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Shopify', color: '#95BF47', href: '/platforms/shopify-seo' },
                { name: 'WooCommerce', color: '#7F54B3', href: '/platforms/woocommerce-seo' },
                { name: 'Magento', color: '#EE672F', href: '/platforms/magento-seo' },
                { name: 'BigCommerce', color: '#1D4E89', href: '/platforms/bigcommerce-seo' },
                { name: 'Wix', color: '#0C6EFC', href: '/platforms/wix-seo' },
                { name: 'Custom', color: '#6366F1', href: '/platforms/custom-ecommerce-seo' },
              ].map((p, i) => (
                <Link key={i} href={p.href} className="group block" style={{ textDecoration: 'none' }}>
                  <div className="p-5 rounded-2xl text-center transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center text-sm font-bold" style={{ background: `${p.color}15`, color: p.color }}>{p.name.charAt(0)}</div>
                    <div className="text-xs font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{p.name}</div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: p.color }} />
                  </div>
                </Link>
              ))}
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
                Keyword Research <span className="gold-gradient-text">Questions</span>
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
                Target the Keywords That{' '}
                <span className="gold-gradient-text">Drive Revenue</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Stop guessing which keywords matter. Get an intent-driven keyword strategy mapped to your store&apos;s architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Start Keyword Research
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                500-2000+ keywords &middot; Intent-mapped &middot; Implementation roadmap included
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
