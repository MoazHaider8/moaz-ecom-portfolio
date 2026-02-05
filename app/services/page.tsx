import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    },
    {
      title: 'Ecommerce Keyword Research & Mapping',
      description: 'Strategic keyword research mapped to product and category pages for maximum search visibility and commercial intent.',
      benefits: [
        'Target high-intent commercial keywords',
        'Map keywords to existing page architecture',
        'Identify content gaps and new page opportunities',
      ],
      bestFor: 'Brands expanding product lines or markets',
      link: '/services/ecommerce-keyword-research',
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
    },
    {
      title: 'Category / Collection Page SEO',
      description: 'Strategic category page optimization to capture broader search intent and high-volume keywords.',
      benefits: [
        'Optimize category structure and internal linking',
        'Create SEO-focused category content',
        'Improve faceted navigation and filtering',
      ],
      bestFor: 'Stores targeting high-volume category keywords',
      link: '/services/category-page-seo',
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
    },
  ]

  const servicesCovered = [
    { icon: '📊', title: 'Ecommerce SEO audits' },
    { icon: '🔍', title: 'Keyword research & mapping' },
    { icon: '🛍️', title: 'Product & category page optimization' },
    { icon: '⚙️', title: 'Technical SEO for ecommerce' },
    { icon: '🎯', title: 'Platform-specific execution' },
    { icon: '🌍', title: 'International ecommerce SEO' },
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
    { name: 'Shopify', color: '#95BF47' },
    { name: 'WooCommerce', color: '#7F54B3' },
    { name: 'Magento', color: '#EE672F' },
    { name: 'BigCommerce', color: '#1D4E89' },
    { name: 'Wix', color: '#0C6EFC' },
    { name: 'Custom CMS', color: '#6366F1' },
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
        {/* 1. HERO - Two Column with Audit Form */}
        <section className="py-24 md:py-28" style={{ paddingTop: '140px' }}>
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-12 items-start">
              {/* Left Column */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight" style={{ color: 'var(--text)' }}>
                  Ecommerce SEO Services
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Professional <strong>ecommerce SEO services</strong> designed exclusively for online stores. Strategic optimization to increase rankings, drive qualified traffic, and grow revenue through organic search.
                </p>

                {/* What You Get */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {[
                      'Comprehensive SEO audits & strategy',
                      'Product & category optimization',
                      'Platform-specific technical execution',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm mb-6 flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted by ecommerce brands across international markets
                </p>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                  About the Consultant
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right Column - Audit Form */}
              <div className="card p-6 lg:p-7 pb-8">
                <h2 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
                  Free Ecommerce SEO Audit
                </h2>
                <p className="text-xs mb-5" style={{ color: 'var(--text-secondary)' }}>
                  Get a comprehensive analysis of your store's SEO performance
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 h-10 rounded-lg text-sm"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 h-10 rounded-lg text-sm"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Website URL *
                    </label>
                    <input
                      type="url"
                      required
                      className="w-full px-4 h-10 rounded-lg text-sm"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      placeholder="https://yourstore.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Platform *
                    </label>
                    <select
                      required
                      className="w-full px-4 h-10 rounded-lg text-sm"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    >
                      <option value="">Select your platform</option>
                      <option value="shopify">Shopify</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="magento">Magento</option>
                      <option value="bigcommerce">BigCommerce</option>
                      <option value="wix">Wix</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center h-10">
                    Get Free SEO Audit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                    No spam. Response within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT MY ECOMMERCE SEO SERVICES COVER */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                What My Ecommerce SEO Services Cover
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive SEO solutions tailored for ecommerce businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {servicesCovered.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.3 BUILT EXCLUSIVELY FOR ECOMMERCE GROWTH */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div
                className="card-featured p-8 md:p-10 text-center relative overflow-hidden"
                style={{
                  background: 'var(--card)',
                  borderLeft: '4px solid var(--accent)',
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ color: 'var(--accent)' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10" style={{ color: 'var(--text)' }}>
                  Built Exclusively for Ecommerce Growth
                </h2>
                <p className="text-base md:text-lg leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                  These ecommerce SEO services are designed for product-driven businesses that need scalable technical architecture, commercial intent optimization, and revenue-focused execution — not generic SEO tactics that ignore the unique challenges of online retail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 WHY ECOMMERCE SEO REQUIRES A SPECIALIZED APPROACH */}
        <section className="py-12 lg:py-16 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text)' }}>
                Why Ecommerce SEO Requires a Specialized Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Ecommerce site architecture & crawl budget',
                  'Product & category-level keyword mapping',
                  'Platform-specific technical limitations',
                  'Commercial intent optimization',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE ECOMMERCE SEO SERVICES */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                Core Ecommerce SEO Services
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Six essential services to grow your online store through organic search
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <div key={index} className="card p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
                      <strong>Best for:</strong> {service.bestFor}
                    </p>
                    {service.link && (
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--accent)' }}
                      >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.5 SERVICE OUTCOMES */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                What You Can Expect
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Measurable outcomes focused on ecommerce growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: '📈', title: 'Increased organic product visibility', gradient: 'from-cyan-500 to-blue-500' },
                { icon: '🎯', title: 'Higher category-level rankings', gradient: 'from-blue-500 to-purple-500' },
                { icon: '⚡', title: 'Improved crawl efficiency', gradient: 'from-purple-500 to-pink-500' },
                { icon: '💰', title: 'Revenue-focused SEO execution', gradient: 'from-pink-500 to-cyan-500' },
              ].map((outcome, index) => (
                <div
                  key={index}
                  className="card p-6 text-center group transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5" style={{ background: 'var(--accent-light)' }} />
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                      style={{ background: 'var(--accent-light)', border: '2px solid var(--accent)' }}
                    >
                      {outcome.icon}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>
                      {outcome.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHO THESE SERVICES ARE FOR */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  These ecommerce SEO services are ideal for
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Shopify & WooCommerce stores',
                  'Ecommerce brands with large catalogs',
                  'International ecommerce businesses',
                  'Growth-focused online stores',
                  'Platform-agnostic ecommerce sites',
                  'Direct-to-consumer (DTC) brands',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-base" style={{ color: 'var(--text)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4.5 WHAT THESE SERVICES ARE NOT */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  What These Services Are Not
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Clear positioning for quality-focused businesses
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { title: 'No Cookie-Cutter Packages', desc: 'Every strategy is custom-built for your store and market' },
                  { title: 'No Link Spam', desc: 'Only white-hat, sustainable optimization practices' },
                  { title: 'No Outsourcing', desc: 'Direct, hands-on work from an experienced consultant' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="card p-6 text-center transition-all hover:shadow-md"
                  >
                    <div
                      className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--surface-alt)', border: '2px solid var(--border)' }}
                    >
                      <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW MY ECOMMERCE SEO PROCESS WORKS */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                How My Ecommerce SEO Process Works
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A structured 4-step approach to ecommerce SEO success
              </p>
            </div>

            <div className="relative">
              {/* Connector Line */}
              <div 
                className="hidden lg:block absolute top-8 left-0 right-0 h-0.5"
                style={{ 
                  background: 'linear-gradient(to right, var(--accent), var(--accent-2))',
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold transition-all group-hover:scale-110 group-hover:shadow-lg"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. PLATFORMS SUPPORTED */}
        <section className="py-16 lg:py-20 surface">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                Platforms Supported
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Expert ecommerce SEO for all major platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {platforms.map((platform, index) => (
                <Link
                  key={index}
                  href="/platforms"
                  className="card p-5 text-center group hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-xl font-bold transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: `${platform.color}20`,
                      color: platform.color,
                      border: `2px solid ${platform.color}30`,
                    }}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <h3 className="text-sm font-semibold group-hover:gradient-text transition-all" style={{ color: 'var(--text)' }}>
                    {platform.name}
                  </h3>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/platforms" className="btn btn-secondary">
                View All Platforms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. ECOMMERCE SEO SERVICES FAQs */}
        <section className="py-16 lg:py-20 surface-alt">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  Ecommerce SEO Services FAQs
                </h2>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                  Common questions about ecommerce SEO services
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="card p-5 group cursor-pointer"
                    open={index === 0}
                  >
                    <summary className="flex items-center justify-between font-semibold text-base list-none cursor-pointer" style={{ color: 'var(--text)' }}>
                      <span>{faq.question}</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-base mb-4" style={{ color: 'var(--text)' }}>
                  Still have questions? Get a free audit.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Contact Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="card-featured p-10 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Ready to Grow Your Ecommerce Store?
              </h2>
              <p className="text-base mb-2 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Get a free ecommerce SEO audit and discover opportunities to increase your organic traffic and revenue.
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                Ecommerce-only focus. International experience. No spam, just actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Get Free Ecommerce SEO Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/" className="btn btn-secondary">
                  Learn About the Consultant
                </Link>
              </div>
              <p className="text-xs mt-5" style={{ color: 'var(--muted)' }}>
                Typical response time: 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
