import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditForm from '@/components/AuditForm'
import ConnectPanel from '@/components/ConnectPanel'
import Timeline from '@/components/Timeline'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.moazhaider.com/#person',
        name: 'Moaz Haider',
        jobTitle: 'Ecommerce SEO Consultant',
        url: 'https://www.moazhaider.com',
        sameAs: [
          'https://www.linkedin.com/in/moaz-haider/',
          'https://www.facebook.com/moaz.haider.14',
          'https://x.com/MoazHaider71',
          'https://www.instagram.com/moazhaider5/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.moazhaider.com/#website',
        url: 'https://www.moazhaider.com',
        name: 'Moaz Haider - Ecommerce SEO Consultant',
        publisher: { '@id': 'https://www.moazhaider.com/#person' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.moazhaider.com/#webpage',
        url: 'https://www.moazhaider.com',
        name: 'Ecommerce SEO Consultant | Moaz Haider',
        isPartOf: { '@id': 'https://www.moazhaider.com/#website' },
        about: { '@id': 'https://www.moazhaider.com/#person' },
        description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores across international markets.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO is the process of optimizing online stores to rank higher in search engines like Google, driving organic traffic to product and category pages to increase sales.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does ecommerce SEO take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO typically takes 3-6 months to show significant results, depending on competition, current site authority, and implementation speed.',
            },
          },
        ],
      },
    ],
  }

  const services = [
    {
      title: 'Ecommerce SEO Audit',
      description: 'Comprehensive technical and strategic analysis of your online store to identify opportunities and quick wins.',
      featured: true,
    },
    {
      title: 'Ecommerce Keyword Research + Mapping',
      description: 'Strategic keyword research mapped to product and category pages for maximum search visibility.',
    },
    {
      title: 'Product Page SEO',
      description: 'Optimization of product pages to rank for commercial keywords and drive qualified traffic.',
    },
    {
      title: 'Category / Collection Page SEO',
      description: 'Strategic category page optimization to capture broader search intent and high-volume keywords.',
    },
    {
      title: 'Technical SEO for Ecommerce',
      description: 'Fix crawl issues, improve site speed, and optimize architecture for better indexing and ranking.',
    },
    {
      title: 'Ecommerce Content Strategy',
      description: 'Editorial content strategy to build topical authority and support your ecommerce SEO goals.',
    },
  ]

  const platforms = [
    { name: 'Shopify SEO', description: 'Expert SEO optimization for Shopify stores across all industries and markets.' },
    { name: 'WooCommerce SEO', description: 'WordPress ecommerce SEO services tailored for WooCommerce platforms.' },
    { name: 'Magento SEO', description: 'Advanced technical SEO for Magento and Adobe Commerce stores.' },
    { name: 'BigCommerce SEO', description: 'Strategic SEO implementation for BigCommerce enterprise stores.' },
    { name: 'Wix SEO (Ecommerce)', description: 'SEO optimization for Wix ecommerce stores despite platform limitations.' },
    { name: 'Custom Ecommerce SEO', description: 'Tailored SEO strategies for custom-built ecommerce platforms.' },
  ]

  const industries = [
    { name: 'Fashion & Clothing Brands', description: 'SEO strategies for apparel, accessories, and fashion ecommerce brands.', challenge: 'High competition, seasonal trends' },
    { name: 'Electronics & Gadgets Stores', description: 'Technical product SEO for consumer electronics and tech retailers.', challenge: 'Spec-driven content, price competition' },
    { name: 'Beauty & Skincare Ecommerce', description: 'Content-driven SEO for beauty, cosmetics, and skincare online stores.', challenge: 'Influencer market, ingredient focus' },
    { name: 'Home Decor & Lifestyle Stores', description: 'Visual and editorial SEO for home goods and lifestyle brands.', challenge: 'Visual search, style categorization' },
    { name: 'Furniture & Interior Products', description: 'Category-focused SEO for furniture and interior design ecommerce.', challenge: 'Large product catalogs, shipping complexity' },
    { name: 'Health & Supplements Brands', description: 'Compliance-aware SEO for health, wellness, and supplement stores.', challenge: 'Regulatory compliance, claims restrictions' },
  ]

  const locations = [
    { country: 'United States', flag: '🇺🇸', abbrev: 'USA', description: 'Ecommerce SEO services for US-based online stores and brands.' },
    { country: 'United Kingdom', flag: '🇬🇧', abbrev: 'UK', description: 'SEO for ecommerce websites targeting UK markets and audiences.' },
    { country: 'Canada', flag: '🇨🇦', abbrev: 'CA', description: 'Strategic SEO for Canadian ecommerce businesses and retailers.' },
    { country: 'Australia', flag: '🇦🇺', abbrev: 'AU', description: 'Ecommerce SEO consulting for Australian online stores.' },
    { country: 'United Arab Emirates', flag: '🇦🇪', abbrev: 'UAE', description: 'International SEO for UAE-based ecommerce and retail brands.' },
    { country: 'Germany', flag: '🇩🇪', abbrev: 'DE', description: 'Technical ecommerce SEO for German markets and EU expansion.' },
  ]

  const whyChoose = [
    { title: 'Ecommerce-First Expertise', description: 'Specialized solely in ecommerce SEO, not generic digital marketing.' },
    { title: 'Data-Driven Strategy', description: 'Every recommendation backed by search data and competitive analysis.' },
    { title: 'International Experience', description: 'Proven track record across USA, UK, Canada, Australia, UAE, and Germany.' },
    { title: 'Platform Agnostic', description: 'Deep experience with Shopify, WooCommerce, Magento, and custom builds.' },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive SEO audit of your store, competitors, and market opportunity.',
      deliverable: 'Full SEO Audit Report',
    },
    {
      step: '02',
      title: 'Strategy & Roadmap',
      description: 'Detailed SEO strategy with prioritized recommendations and timeline.',
      deliverable: 'Strategic Roadmap',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and strategic changes.',
      deliverable: 'Optimized Store',
    },
    {
      step: '04',
      title: 'Monitor & Scale',
      description: 'Track rankings, traffic, and revenue while scaling what works.',
      deliverable: 'Monthly Reports',
    },
  ]

  const faqs = [
    {
      question: 'What is ecommerce SEO?',
      answer: 'Ecommerce SEO is the process of optimizing online stores to rank higher in search engines like Google, driving organic traffic to product and category pages to increase sales.',
    },
    {
      question: 'How long does ecommerce SEO take?',
      answer: 'Ecommerce SEO typically takes 3-6 months to show significant results, depending on competition, current site authority, and implementation speed.',
    },
    {
      question: 'Do you work with all ecommerce platforms?',
      answer: 'Yes, I work with Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms.',
    },
    {
      question: 'What makes ecommerce SEO different from regular SEO?',
      answer: 'Ecommerce SEO focuses on commercial intent keywords, product and category page optimization, technical challenges like pagination and faceted navigation, and conversion-focused content.',
    },
    {
      question: 'Do you offer international SEO services?',
      answer: 'Yes, I specialize in international ecommerce SEO across markets including USA, UK, Canada, Australia, UAE, and Germany.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* 1. HERO - Two Column with Audit Form */}
        <section className="section" style={{ paddingTop: '140px' }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{ color: 'var(--text)' }}
                >
                  Ecommerce SEO Consultant
                </h1>

                <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Strategic <strong>ecommerce SEO services</strong> for ambitious online stores. Expert in{' '}
                  <strong>SEO for ecommerce websites</strong>, product page optimization, and{' '}
                  <strong>international ecommerce SEO</strong> across global markets.
                </p>

                {/* Trust Chips */}
                <div className="flex flex-wrap gap-3">
                  {['Keyword Mapping', 'Product & Category SEO', 'International Markets'].map((chip) => (
                    <span key={chip} className="badge">{chip}</span>
                  ))}
                </div>
              </div>

              {/* Right Column - Audit Form */}
              <div>
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST STRIP */}
        <section className="section-sm surface">
          <div className="container">
            <p className="text-center text-sm font-medium mb-6" style={{ color: 'var(--muted)' }}>
              Trusted by ecommerce brands in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['USA', 'UK', 'Canada', 'Australia', 'UAE', 'Germany'].map((country) => (
                <span key={country} className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  {country}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CASE STUDIES PREVIEW */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Case Studies
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Real results from ecommerce SEO campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { platform: 'Shopify', country: 'USA', metric: '+185% Organic Traffic' },
                { platform: 'WooCommerce', country: 'UK', metric: '+240% Revenue from SEO' },
                { platform: 'Magento', country: 'Australia', metric: '+320% Keyword Rankings' },
              ].map((study, i) => (
                <div key={i} className="card p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="chip">{study.platform}</span>
                    <span className="chip">{study.country}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                    Ecommerce Store
                  </h3>
                  <p className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
                    {study.metric}
                  </p>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/case-studies" className="btn btn-secondary">
                View All Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. ABOUT - Two Column with Connect Panel */}
        <section className="section surface-alt">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - About Text */}
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  About Moaz Haider
                </h2>
                <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    I'm an <strong>ecommerce SEO consultant</strong> specializing in strategic SEO for online stores across international markets.
                  </p>
                  <p>
                    With deep expertise in platforms like Shopify, WooCommerce, and Magento, I help ecommerce brands increase organic traffic, improve rankings, and drive revenue through data-driven SEO strategies.
                  </p>
                  <p>
                    My focus is on <strong>technical SEO for ecommerce</strong>, ecommerce keyword research, product page optimization, and international expansion.
                  </p>
                </div>
              </div>

              {/* Right - Connect Panel */}
              <div>
                <ConnectPanel />
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES - Bento Grid */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Ecommerce SEO Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive SEO services tailored for ecommerce websites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-8 ${service.featured ? 'card-featured md:col-span-2 lg:col-span-1 lg:row-span-2' : 'card'}`}
                >
                  {service.featured && (
                    <div className="badge mb-4">Featured</div>
                  )}
                  <h3 className={`font-bold mb-3 ${service.featured ? 'text-2xl' : 'text-lg'}`} style={{ color: 'var(--text)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services" className="btn btn-secondary">
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. PLATFORMS - Logo Style Cards */}
        <section className="section surface">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Ecommerce Platforms
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Expert SEO for all major ecommerce platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="card p-8 text-center group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl font-bold"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all" style={{ color: 'var(--text)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/platforms" className="btn btn-secondary">
                Explore All Platforms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. INDUSTRIES - Editorial Tiles with Challenges */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Industries Served
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Specialized ecommerce SEO across diverse verticals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {industries.map((industry, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    {industry.name}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {industry.description}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>
                      {industry.challenge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/industries" className="btn btn-secondary">
                Explore All Industries
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. LOCATIONS - Country Cards */}
        <section className="section surface-alt">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                International Markets
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Ecommerce SEO services across global markets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {locations.map((location, index) => (
                <div key={index} className="card p-6 text-center group cursor-pointer">
                  <div className="text-5xl mb-3">{location.flag}</div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    {location.abbrev}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all" style={{ color: 'var(--text)' }}>
                    {location.country}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {location.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/locations" className="btn btn-secondary">
                View All Locations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. WHY CHOOSE ME - Two Column */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Left - Headline */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Why Choose Me
                </h2>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                  Ecommerce-first SEO expertise that drives results
                </p>
              </div>

              {/* Right - Benefits Grid */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. PROCESS - Timeline */}
        <section className="section surface">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                The Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A structured approach to ecommerce SEO success
              </p>
            </div>

            <Timeline steps={processSteps} />
          </div>
        </section>

        {/* 11. TESTIMONIALS */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Client Testimonials
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                What clients say about working with me
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah J.', role: 'CEO, Fashion Brand', rating: 5, text: 'Moaz transformed our ecommerce SEO strategy. Organic traffic increased significantly within 6 months.' },
                { name: 'Michael K.', role: 'Director, Electronics Store', rating: 5, text: 'His expertise in technical SEO and keyword mapping delivered measurable results for our product pages.' },
                { name: 'Emma L.', role: 'Founder, Beauty Brand', rating: 5, text: 'Working with Moaz was a game changer. Revenue from organic search grew consistently month over month.' },
              ].map((testimonial, i) => (
                <div key={i} className="card p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FAQs */}
        <section className="section surface-alt">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Common questions about ecommerce SEO services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="section">
          <div className="container">
            <div className="card-featured p-12 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Ready to Scale Your Ecommerce SEO?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Get a free ecommerce SEO audit and discover opportunities to increase your organic traffic and revenue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#audit-form" className="btn btn-primary">
                  Get Your Free Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 14. CONTACT STRIP */}
        <section className="section-sm surface">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Let's Discuss Your Ecommerce SEO Goals
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Book a free consultation to discuss your ecommerce SEO strategy
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Me
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
