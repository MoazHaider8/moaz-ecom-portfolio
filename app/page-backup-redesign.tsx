import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    {
      name: 'Shopify SEO',
      description: 'Expert SEO optimization for Shopify stores across all industries and markets.',
    },
    {
      name: 'WooCommerce SEO',
      description: 'WordPress ecommerce SEO services tailored for WooCommerce platforms.',
    },
    {
      name: 'Magento SEO',
      description: 'Advanced technical SEO for Magento and Adobe Commerce stores.',
    },
    {
      name: 'BigCommerce SEO',
      description: 'Strategic SEO implementation for BigCommerce enterprise stores.',
    },
    {
      name: 'Wix SEO (Ecommerce)',
      description: 'SEO optimization for Wix ecommerce stores despite platform limitations.',
    },
    {
      name: 'Custom Ecommerce SEO',
      description: 'Tailored SEO strategies for custom-built ecommerce platforms.',
    },
  ]

  const industries = [
    {
      name: 'Fashion & Clothing Brands',
      description: 'SEO strategies for apparel, accessories, and fashion ecommerce brands.',
    },
    {
      name: 'Electronics & Gadgets Stores',
      description: 'Technical product SEO for consumer electronics and tech retailers.',
    },
    {
      name: 'Beauty & Skincare Ecommerce',
      description: 'Content-driven SEO for beauty, cosmetics, and skincare online stores.',
    },
    {
      name: 'Home Decor & Lifestyle Stores',
      description: 'Visual and editorial SEO for home goods and lifestyle brands.',
    },
    {
      name: 'Furniture & Interior Products',
      description: 'Category-focused SEO for furniture and interior design ecommerce.',
    },
    {
      name: 'Health & Supplements Brands',
      description: 'Compliance-aware SEO for health, wellness, and supplement stores.',
    },
  ]

  const locations = [
    {
      country: 'United States',
      flag: '🇺🇸',
      description: 'Ecommerce SEO services for US-based online stores and brands.',
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      description: 'SEO for ecommerce websites targeting UK markets and audiences.',
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      description: 'Strategic SEO for Canadian ecommerce businesses and retailers.',
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      description: 'Ecommerce SEO consulting for Australian online stores.',
    },
    {
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      description: 'International SEO for UAE-based ecommerce and retail brands.',
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      description: 'Technical ecommerce SEO for German markets and EU expansion.',
    },
  ]

  const whyChoose = [
    {
      title: 'Ecommerce-First Expertise',
      description: 'Specialized solely in ecommerce SEO, not generic digital marketing.',
    },
    {
      title: 'Data-Driven Strategy',
      description: 'Every recommendation backed by search data and competitive analysis.',
    },
    {
      title: 'International Experience',
      description: 'Proven track record across USA, UK, Canada, Australia, UAE, and Germany.',
    },
    {
      title: 'Platform Agnostic',
      description: 'Deep experience with Shopify, WooCommerce, Magento, and custom builds.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive SEO audit of your store, competitors, and market opportunity.',
    },
    {
      step: '02',
      title: 'Strategy & Roadmap',
      description: 'Detailed SEO strategy with prioritized recommendations and timeline.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and strategic changes.',
    },
    {
      step: '04',
      title: 'Monitor & Scale',
      description: 'Track rankings, traffic, and revenue while scaling what works.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '140px' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--accent)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  International Ecommerce SEO
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Ecommerce SEO Consultant
              </h1>

              <p
                className="text-xl md:text-2xl mb-10 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Strategic ecommerce SEO services for ambitious online stores. Expert in ecommerce keyword research, product page SEO, and technical SEO for ecommerce websites across international markets.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 inline-flex items-center gap-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Get a Free SEO Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="section-tight" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Trusted by ecommerce brands in
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>
              {['USA', 'UK', 'Canada', 'Australia', 'UAE', 'Germany'].map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Case Studies
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Real results from ecommerce SEO campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card p-8">
                  <div className="mb-4">
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                      Case Study #{i}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Fashion Ecommerce
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    +287% organic traffic, +192% revenue from SEO in 6 months
                  </p>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                View All Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                About Moaz Haider
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  I'm an ecommerce SEO consultant specializing in strategic SEO for online stores across international markets.
                </p>
                <p>
                  With deep expertise in platforms like Shopify, WooCommerce, and Magento, I help ecommerce brands increase organic traffic, improve rankings, and drive revenue through data-driven SEO strategies.
                </p>
                <p>
                  My focus is on technical SEO for ecommerce, ecommerce keyword research, product page optimization, and international expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ecommerce SEO Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive SEO services tailored for ecommerce websites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {services.map((service, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
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
                  className="p-6 text-center rounded-xl transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/platforms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                Explore All Platforms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Industries Served
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Specialized ecommerce SEO across diverse verticals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {industries.map((industry, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {industry.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                Explore All Industries
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                International Markets
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Ecommerce SEO services across global markets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="text-4xl mb-3">{location.flag}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {location.country}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {location.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                View All Locations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Why Choose Me
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Ecommerce-first SEO expertise that drives results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                The Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A structured approach to ecommerce SEO success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="card p-6 text-center">
                  <div
                    className="text-5xl font-bold mb-4"
                    style={{ color: 'var(--accent)', opacity: 0.3 }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Client Testimonials
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                What clients say about working with me
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card p-8">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl" style={{ color: 'var(--accent)' }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    "Moaz transformed our ecommerce SEO strategy. Organic traffic increased by 250% and revenue from SEO doubled in 6 months."
                  </p>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      Sarah Johnson
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      CEO, Fashion Brand
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Common questions about ecommerce SEO services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <summary
                    className="cursor-pointer p-6 font-semibold flex items-center justify-between"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {faq.question}
                    <svg
                      className="w-5 h-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div
              className="max-w-4xl mx-auto text-center p-12 rounded-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to Scale Your Ecommerce SEO?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Get a free ecommerce SEO audit and discover opportunities to increase your organic traffic and revenue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 inline-flex items-center gap-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Get Your Free Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="section-tight" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Let's Discuss Your Ecommerce SEO Goals
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Book a free consultation to discuss your ecommerce SEO strategy
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--accent)' }}
              >
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
