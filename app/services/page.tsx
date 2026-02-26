import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditForm from '@/components/AuditForm'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services for Online Stores | Moaz Haider',
  description: 'Professional ecommerce SEO services focused on audits, keyword research, product and category optimization, and technical SEO to grow traffic and revenue for online stores.',
  alternates: {
    canonical: 'https://moazhaider.com/services',
  },
  openGraph: {
    title: 'Ecommerce SEO Services for Online Stores | Moaz Haider',
    description: 'Professional ecommerce SEO services designed to increase rankings, traffic, and sales for ecommerce websites.',
    url: 'https://moazhaider.com/services',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Services for Online Stores | Moaz Haider',
    description: 'Professional ecommerce SEO services designed to increase rankings, traffic, and sales for ecommerce websites.',
  },
}

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/services#service',
        name: 'Ecommerce SEO Services',
        serviceType: 'Ecommerce SEO',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/services',
        description: 'Professional ecommerce SEO services focused on audits, keyword research, product and category optimization, and technical SEO to grow traffic and revenue for online stores.',
      },
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Service',
              name: 'Ecommerce SEO Audit',
              description: 'Comprehensive technical and strategic analysis of your online store to identify opportunities and quick wins.',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Service',
              name: 'Ecommerce Keyword Research & Mapping',
              description: 'Strategic keyword research mapped to product and category pages for maximum search visibility.',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Service',
              name: 'Product Page SEO',
              description: 'Optimization of product pages to rank for commercial keywords and drive qualified traffic.',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Service',
              name: 'Category / Collection Page SEO',
              description: 'Strategic category page optimization to capture broader search intent and high-volume keywords.',
            },
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'Service',
              name: 'Technical SEO for Ecommerce',
              description: 'Fix crawl issues, improve site speed, and optimize architecture for better indexing and ranking.',
            },
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'Service',
              name: 'Ecommerce Content Strategy',
              description: 'Editorial content strategy to build topical authority and support your ecommerce SEO goals.',
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are ecommerce SEO services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO services are specialized SEO solutions designed specifically for online stores. They focus on optimizing product pages, category pages, technical architecture, and content to increase organic search visibility and drive revenue.',
            },
          },
          {
            '@type': 'Question',
            name: 'How are ecommerce SEO services different from regular SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO services focus on commercial intent keywords, product and category page optimization, technical challenges like pagination and faceted navigation, internal linking for large catalogs, and conversion-focused content. Regular SEO typically focuses on informational content and blog posts.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide platform-specific ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, I provide platform-specific ecommerce SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical considerations that require specialized optimization approaches.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does ecommerce SEO take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO typically takes 3-6 months to show significant results. The timeline depends on factors like current site authority, competition level, catalog size, implementation speed, and market dynamics.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer international ecommerce SEO services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, I specialize in international ecommerce SEO across markets including USA, UK, Canada, Australia, UAE, and Germany. Services include hreflang implementation, international keyword research, and market-specific optimization strategies.',
            },
          },
        ],
      },
    ],
  }

  const coreServices = [
    {
      title: 'Ecommerce SEO Audit',
      description: 'Comprehensive technical and strategic analysis of your online store to identify opportunities, technical issues, and quick wins.',
      benefits: [
        'Identify critical technical issues affecting rankings',
        'Uncover untapped keyword opportunities',
        'Receive prioritized action plan with ROI estimates',
      ],
      bestFor: 'Stores seeking clarity on SEO performance',
      link: '/services/ecommerce-seo-audit',
      icon: '📊',
    },
    {
      title: 'Keyword Research & Mapping',
      description: 'Strategic keyword research mapped to product and category pages for maximum search visibility and commercial intent.',
      benefits: [
        'Target high-intent commercial keywords',
        'Map keywords to existing page architecture',
        'Identify content gaps and new page opportunities',
      ],
      bestFor: 'Brands expanding product lines or markets',
      link: '/services/ecommerce-keyword-research',
      icon: '🔍',
    },
    {
      title: 'Product Page SEO',
      description: 'Optimization of product pages to rank for commercial keywords, drive qualified traffic, and increase conversions.',
      benefits: [
        'Optimize product titles, descriptions, and schema',
        'Improve product page load speed and UX',
        'Implement conversion-focused content structure',
      ],
      bestFor: 'Stores with large product catalogs',
      link: '/services/product-page-seo',
      icon: '🛍️',
    },
    {
      title: 'Category Page SEO',
      description: 'Strategic category page optimization to capture broader search intent and high-volume keywords.',
      benefits: [
        'Optimize category structure and internal linking',
        'Create SEO-focused category content',
        'Improve faceted navigation and filtering',
      ],
      bestFor: 'Stores targeting high-volume category keywords',
      link: '/services/category-page-seo',
      icon: '📂',
    },
    {
      title: 'Technical SEO for Ecommerce',
      description: 'Fix crawl issues, improve site speed, optimize architecture, and resolve technical barriers to better indexing and ranking.',
      benefits: [
        'Resolve crawl errors and indexation issues',
        'Optimize site speed and Core Web Vitals',
        'Fix duplicate content and canonical issues',
      ],
      bestFor: 'Stores with technical SEO challenges',
      link: '/services/technical-ecommerce-seo',
      icon: '⚙️',
    },
    {
      title: 'Ecommerce Content Strategy',
      description: 'Editorial content strategy to build topical authority, support commercial pages, and drive qualified traffic.',
      benefits: [
        'Build topical authority in your niche',
        'Create content that supports product discovery',
        'Drive traffic at every stage of the funnel',
      ],
      bestFor: 'Brands building long-term organic visibility',
      link: '/services/ecommerce-content-strategy',
      icon: '🎯',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Discovery',
      description: 'Comprehensive SEO audit of your store, competitors, and market opportunity.',
    },
    {
      step: '02',
      title: 'Strategy & Keyword Mapping',
      description: 'Detailed SEO strategy with prioritized recommendations and keyword mapping.',
    },
    {
      step: '03',
      title: 'Optimization & Implementation',
      description: 'Execute technical fixes, content optimization, and strategic changes.',
    },
    {
      step: '04',
      title: 'Measurement & Scaling',
      description: 'Track rankings, traffic, and revenue while scaling what works.',
    },
  ]

  const platforms = [
    { name: 'Shopify', color: '#95BF47', href: '/platforms/shopify-seo' },
    { name: 'WooCommerce', color: '#7F54B3', href: '/platforms/woocommerce-seo' },
    { name: 'Magento', color: '#EE672F', href: '/platforms/magento-seo' },
    { name: 'BigCommerce', color: '#1D4E89', href: '/platforms/bigcommerce-seo' },
    { name: 'Wix', color: '#0C6EFC', href: '/platforms/wix-seo' },
    { name: 'Custom CMS', color: '#6366F1', href: '/platforms/custom-ecommerce-seo' },
  ]

  const outcomes = [
    { metric: 'Higher Rankings', description: 'Rank for high-intent product and category keywords your buyers search for', icon: '📈' },
    { metric: 'More Organic Traffic', description: 'Drive qualified visitors to your store without paid ad dependency', icon: '🚀' },
    { metric: 'Better Conversions', description: 'Optimized pages that turn organic visitors into paying customers', icon: '💰' },
    { metric: 'Scalable Growth', description: 'Build an SEO foundation that compounds as your catalog grows', icon: '🏗️' },
  ]

  const faqs = [
    {
      question: 'What are ecommerce SEO services?',
      answer: 'Ecommerce SEO services are specialized SEO solutions designed specifically for online stores. They focus on optimizing product pages, category pages, technical architecture, and content to increase organic search visibility and drive revenue.',
    },
    {
      question: 'How are ecommerce SEO services different from regular SEO?',
      answer: 'Ecommerce SEO services focus on commercial intent keywords, product and category page optimization, technical challenges like pagination and faceted navigation, internal linking for large catalogs, and conversion-focused content. Regular SEO typically focuses on informational content and blog posts.',
    },
    {
      question: 'Do you provide platform-specific ecommerce SEO?',
      answer: 'Yes, I provide platform-specific ecommerce SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical considerations that require specialized optimization approaches.',
    },
    {
      question: 'How long does ecommerce SEO take?',
      answer: 'Ecommerce SEO typically takes 3-6 months to show significant results. The timeline depends on factors like current site authority, competition level, catalog size, implementation speed, and market dynamics.',
    },
    {
      question: 'Do you offer international ecommerce SEO services?',
      answer: 'Yes, I specialize in international ecommerce SEO across markets including USA, UK, Canada, Australia, UAE, and Germany. Services include hreflang implementation, international keyword research, and market-specific optimization strategies.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. HERO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative overflow-hidden" style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '80px' }}>
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.4 }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.3 }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left — Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                    Ecommerce SEO Services
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  SEO Services Built{' '}
                  <span className="gold-gradient-text">Exclusively for Ecommerce</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Professional <strong>ecommerce SEO services</strong> designed to increase rankings, drive qualified traffic, and grow revenue through organic search. Strategic optimization for product pages, category architecture, and technical foundations.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                    Get Your Free SEO Audit
                  </Link>
                  <Link href="/case-studies" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  {[
                    { label: '6', sub: 'Core Services' },
                    { label: '6+', sub: 'Platforms' },
                    { label: '50+', sub: 'Stores Optimized' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{stat.label}</div>
                      <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Audit Form */}
              <div id="audit-form">
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. WHAT SERVICES COVER
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Service Overview
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                What My <span className="gold-gradient-text">Services Cover</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                End-to-end ecommerce SEO — from initial audit through ongoing optimization and strategic growth
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📊', title: 'Ecommerce SEO Audits', desc: 'Technical and strategic analysis of your store' },
                { icon: '🔍', title: 'Keyword Research & Mapping', desc: 'Intent-driven keyword strategy for your catalog' },
                { icon: '🛍️', title: 'Product & Category Optimization', desc: 'Page-level SEO for commercial rankings' },
                { icon: '⚙️', title: 'Technical SEO for Ecommerce', desc: 'Crawl, index, and performance optimization' },
                { icon: '🎯', title: 'Platform-Specific Execution', desc: 'Shopify, WooCommerce, Magento & more' },
                { icon: '🌍', title: 'International Ecommerce SEO', desc: 'Multi-market targeting and hreflang strategy' },
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. WHY SPECIALIZED ECOMMERCE SEO
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                  Why Specialized
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                  Why <span className="gold-gradient-text">Ecommerce SEO</span> Requires a Specialist
                </h2>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Generic SEO agencies apply the same playbook to every website. Ecommerce stores face unique challenges — faceted navigation, duplicate content from variants, crawl budget at scale, and commercial intent optimization — that generalists simply don&apos;t handle.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
                  Discuss Your Store&apos;s Challenges
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Large Catalog Management', desc: 'Thousands of products need strategic crawl budget allocation, not blanket optimization' },
                  { title: 'Commercial Intent Focus', desc: 'Targeting buyer keywords that drive revenue, not just informational traffic' },
                  { title: 'Platform Constraints', desc: 'Working within Shopify, WooCommerce, or Magento limitations requires platform-specific expertise' },
                  { title: 'Conversion Architecture', desc: 'SEO that considers the entire purchase funnel from discovery to checkout' },
                ].map((item, i) => (
                  <div key={i} className="group p-5 rounded-2xl transition-all duration-500 hover:-translate-y-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
                        <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{item.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. CORE SERVICES GRID
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.15 }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Core Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Ecommerce SEO <span className="gold-gradient-text">Services</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Six specialized services designed to cover every dimension of ecommerce search optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => (
                <Link key={i} href={service.link} className="group block" style={{ textDecoration: 'none' }}>
                  <div className="h-full p-7 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />

                    <div className="relative z-10">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Best for: {service.bestFor}</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            5. EXPECTED OUTCOMES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Expected Outcomes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                What You Can <span className="gold-gradient-text">Expect</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Real, measurable improvements to your store&apos;s organic search performance
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, i) => (
                <div key={i} className="group p-7 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 60px var(--accent-glow)' }} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{outcome.icon}</div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{outcome.metric}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            6. WHO THIS IS FOR / NOT FOR
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Right Fit
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Is This the <span className="gold-gradient-text">Right Fit?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* IS FOR */}
              <div className="p-7 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--status-success-light)', color: 'var(--status-success)' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Built For</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Ecommerce brands with 100+ products',
                    'Stores on Shopify, WooCommerce, Magento, or BigCommerce',
                    'Brands investing in long-term organic growth',
                    'Teams ready to implement strategic recommendations',
                    'Stores targeting competitive commercial keywords',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--status-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IS NOT FOR */}
              <div className="p-7 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--surface)', border: '2px solid var(--border)' }}>
                    <svg className="w-5 h-5" style={{ color: 'var(--muted)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>Not Designed For</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Small brochure sites or personal blogs',
                    'Stores seeking overnight ranking guarantees',
                    'One-product dropshipping stores',
                    'Projects without budget for implementation',
                    'Businesses unwilling to invest 3-6 months',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            7. PROCESS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.1 }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                The Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                How It <span className="gold-gradient-text">Works</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A structured, transparent process from initial audit through ongoing optimization
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-10 bottom-10 w-px" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-8 mb-10 last:mb-0">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold" style={{ background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 0 30px var(--accent-glow)' }}>
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            8. PLATFORMS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                Platforms
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Platform-Specific <span className="gold-gradient-text">Expertise</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Every ecommerce platform has unique technical constraints — I navigate them all
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {platforms.map((platform, i) => (
                <Link key={i} href={platform.href} className="group block" style={{ textDecoration: 'none' }}>
                  <div className="p-5 rounded-2xl text-center transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: `inset 0 0 40px ${platform.color}15` }} />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg font-bold" style={{ background: `${platform.color}15`, color: platform.color }}>
                        {platform.name.charAt(0)}
                      </div>
                      <h3 className="text-sm font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{platform.name}</h3>
                    </div>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: platform.color }} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/platforms" className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
                Explore All Platforms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            9. FAQs
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Frequently Asked <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            10. FINAL CTA
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }}>
                Ready to Grow Your Store&apos;s{' '}
                <span className="gold-gradient-text">Organic Revenue?</span>
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Start with a free audit to understand where your store stands and what&apos;s possible with strategic ecommerce SEO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}>
                  Get Your Free SEO Audit
                </Link>
                <Link href="/case-studies" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                  View Case Studies
                </Link>
              </div>
              <p className="text-sm mt-8" style={{ color: 'var(--muted)' }}>
                No contracts required &middot; Platform-agnostic &middot; International expertise
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
