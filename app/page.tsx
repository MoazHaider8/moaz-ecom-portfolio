import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditForm from '@/components/AuditForm'
import ConnectPanel from '@/components/ConnectPanel'
import Timeline from '@/components/Timeline'
import FAQAccordion from '@/components/FAQAccordion'
import ServicesCarousel from '@/components/ServicesCarousel'
import Link from 'next/link'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://moazhaider.com/#person',
        name: 'Moaz Haider',
        jobTitle: 'Ecommerce SEO Consultant',
        url: 'https://moazhaider.com',
        sameAs: [
          'https://www.linkedin.com/in/moaz-haider/',
          'https://www.facebook.com/moaz.haider.14',
          'https://x.com/MoazHaider71',
          'https://www.instagram.com/moazhaider5/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moazhaider.com/#website',
        url: 'https://moazhaider.com',
        name: 'Moaz Haider - Ecommerce SEO Consultant',
        publisher: { '@id': 'https://moazhaider.com/#person' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/#webpage',
        url: 'https://moazhaider.com',
        name: 'Ecommerce SEO Consultant | Moaz Haider',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        about: { '@id': 'https://moazhaider.com/#person' },
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
      link: '/services/ecommerce-seo-audit',
    },
    {
      title: 'Ecommerce Keyword Research + Mapping',
      description: 'Strategic keyword research mapped to product and category pages for maximum search visibility.',
      link: '/services/ecommerce-keyword-research',
    },
    {
      title: 'Product Page SEO',
      description: 'Optimization of product pages to rank for commercial keywords and drive qualified traffic.',
      link: '/services/product-page-seo',
    },
    {
      title: 'Category / Collection Page SEO',
      description: 'Strategic category page optimization to capture broader search intent and high-volume keywords.',
      link: '/services/category-page-seo',
    },
    {
      title: 'Technical SEO for Ecommerce',
      description: 'Fix crawl issues, improve site speed, and optimize architecture for better indexing and ranking.',
      link: '/services/technical-ecommerce-seo',
    },
    {
      title: 'Ecommerce Content Strategy',
      description: 'Editorial content strategy to build topical authority and support your ecommerce SEO goals.',
      link: '/services/ecommerce-content-strategy',
    },
  ]

  const platforms = [
    { 
      name: 'Shopify SEO', 
      description: 'Expert SEO optimization for Shopify stores across all industries and markets.',
      color: '#95BF47',
      fixes: ['Theme bloat', 'Duplicate content', 'URL structure'],
      href: '/platforms/shopify-seo'
    },
    { 
      name: 'WooCommerce SEO', 
      description: 'WordPress ecommerce SEO services tailored for WooCommerce platforms.',
      color: '#7F54B3',
      fixes: ['Plugin conflicts', 'Speed optimization', 'Schema markup'],
      href: '/platforms/woocommerce-seo'
    },
    { 
      name: 'Magento SEO', 
      description: 'Advanced technical SEO for Magento and Adobe Commerce stores.',
      color: '#EE672F',
      fixes: ['Layered navigation', 'Indexation control', 'Performance'],
      href: '/platforms/magento-seo'
    },
    { 
      name: 'BigCommerce SEO', 
      description: 'Strategic SEO implementation for BigCommerce enterprise stores.',
      color: '#1D4E89',
      fixes: ['Faceted URLs', 'Pagination', 'Category structure'],
      href: '/platforms/bigcommerce-seo'
    },
    { 
      name: 'Wix SEO (Ecommerce)', 
      description: 'SEO optimization for Wix ecommerce stores despite platform limitations.',
      color: '#0C6EFC',
      fixes: ['Platform limits', 'Mobile optimization', 'Speed issues'],
      href: '/platforms/wix-seo'
    },
    { 
      name: 'Custom Ecommerce SEO', 
      description: 'Tailored SEO strategies for custom-built ecommerce platforms.',
      color: '#6366F1',
      fixes: ['Technical audits', 'Custom solutions', 'Scalability'],
      href: '/platforms/custom-ecommerce-seo'
    },
  ]

  const industries = [
    { name: 'Fashion & Clothing Brands', description: 'SEO strategies for apparel, accessories, and fashion ecommerce brands.', challenge: 'High competition, seasonal trends', href: '/industries/fashion-ecommerce-seo' },
    { name: 'Electronics & Gadgets Stores', description: 'Technical product SEO for consumer electronics and tech retailers.', challenge: 'Spec-driven content, price competition', href: '/industries/electronics-ecommerce-seo' },
    { name: 'Beauty & Skincare Ecommerce', description: 'Content-driven SEO for beauty, cosmetics, and skincare online stores.', challenge: 'Influencer market, ingredient focus', href: '/industries/beauty-skincare-ecommerce-seo' },
    { name: 'Jewelry & Accessories', description: 'Visual and editorial SEO for jewelry, accessories, and luxury items.', challenge: 'Visual search, style categorization', href: '/industries/jewelry-accessories-ecommerce-seo' },
    { name: 'Furniture & Interior Products', description: 'Category-focused SEO for furniture and interior design ecommerce.', challenge: 'Large product catalogs, shipping complexity', href: '/industries/furniture-home-decor-seo' },
    { name: 'Health & Supplements Brands', description: 'Compliance-aware SEO for health, wellness, and supplement stores.', challenge: 'Regulatory compliance, claims restrictions', href: '/industries/health-supplements-ecommerce-seo' },
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
        {/* 1. HERO - Full Viewport Height */}
        <section 
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%)',
            position: 'relative',
            paddingTop: '100px',
            paddingBottom: '60px'
          }}
        >
          {/* Background Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

          <div className="container relative z-10">
            {/* Centered Hero Content */}
            <div className="text-center max-w-6xl mx-auto">
              {/* Top Badge */}
              <div className="inline-flex items-center justify-center mb-4">
                <div 
                  className="px-6 py-3 rounded-full text-base font-medium"
                  style={{
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: '#e9d5ff'
                  }}
                >
                  Scaling Ecommerce Brands Through Strategic SEO
                </div>
              </div>

              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ 
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.1'
                }}
              >
                <div>
                  <span style={{ color: '#e9d5ff' }}>Your Strategic </span>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #e879f9 0%, #d946ef 50%, #f0abfc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Ecommerce SEO Consultant.
                  </span>
                </div>
                <div style={{ color: '#ffffff' }}>
                  Data-Driven Strategy. Built for Scale.
                </div>
              </h1>

              <p 
                className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto font-medium" 
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Achieve faster rankings and higher revenue across ecommerce platforms through strategic SEO systems using proven methodologies to accelerate outcomes.
              </p>

              {/* Email Capture + CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full sm:flex-1 px-6 py-4 rounded-lg text-base"
                  style={{
                    background: '#ffffff',
                    border: 'none',
                    color: '#1e293b',
                    outline: 'none',
                    fontWeight: '400'
                  }}
                />
                <a
                  href="#audit-form"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Get Free SEO Audit
                </a>
              </div>

              {/* Case Study Cards */}
              <div className="grid md:grid-cols-3 gap-5 mt-12 mb-0 max-w-7xl mx-auto">
                {/* Card 1 - Organic Traffic Growth */}
                <div 
                  className="p-8 rounded-3xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(127, 29, 29, 0.2) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#ffffff' }}>
                    Organic Traffic Domination
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(239, 68, 68, 0.3)',
                        border: '1px solid rgba(239, 68, 68, 0.4)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Growth in<br />Organic Traffic
                      </div>
                      <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                        285%
                      </div>
                    </div>
                    
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Increase in<br />Rankings
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        450+
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Revenue Growth
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        320%
                      </div>
                    </div>

                    <div 
                      className="p-5 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <svg className="w-16 h-16" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div 
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        color: '#fca5a5'
                      }}
                    >
                      👗 Fashion
                    </div>
                  </div>
                </div>

                {/* Card 2 - Featured Snippets */}
                <div 
                  className="p-8 rounded-3xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(67, 56, 202, 0.2) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#ffffff' }}>
                    Featured Snippet Wins
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(99, 102, 241, 0.3)',
                        border: '1px solid rgba(99, 102, 241, 0.4)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Boost in<br />Organic Clicks
                      </div>
                      <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                        12x
                      </div>
                    </div>
                    
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Featured<br />Snippets
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        75+
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Traffic Increase
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        425%
                      </div>
                    </div>

                    <div 
                      className="p-5 rounded-2xl relative"
                      style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(99, 102, 241, 0.4)'
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-20 h-20">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="rgba(99, 102, 241, 0.2)"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="#6366f1"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="188.4"
                              strokeDashoffset="47"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div 
                            className="absolute inset-0 flex flex-col items-center justify-center"
                            style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}
                          >
                            <div>42%</div>
                            <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>CTR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div 
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        background: 'rgba(99, 102, 241, 0.2)',
                        color: '#c7d2fe'
                      }}
                    >
                      💄 Beauty
                    </div>
                  </div>
                </div>

                {/* Card 3 - Revenue & Conversion */}
                <div 
                  className="p-8 rounded-3xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 64, 175, 0.2) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#ffffff' }}>
                    Revenue Growth Engine
                  </h3>
                  
                  <div className="mb-6">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(59, 130, 246, 0.3)',
                        border: '1px solid rgba(59, 130, 246, 0.4)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Increase in Monthly Revenue
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                          540%
                        </div>
                        <div 
                          className="text-sm font-semibold px-2 py-1 rounded"
                          style={{
                            background: 'rgba(34, 197, 94, 0.2)',
                            color: '#86efac'
                          }}
                        >
                          ↑ 8 months
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(71, 85, 105, 0.4)',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        CAC Reduced
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        52%
                      </div>
                    </div>

                    <div 
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(59, 130, 246, 0.3)',
                        border: '1px solid rgba(59, 130, 246, 0.4)'
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Conversion Rate
                      </div>
                      <div className="text-3xl font-bold" style={{ color: '#ffffff' }}>
                        8.2x
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-5 rounded-2xl relative overflow-hidden"
                    style={{
                      background: 'rgba(71, 85, 105, 0.4)',
                      border: '1px solid rgba(148, 163, 184, 0.3)'
                    }}
                  >
                    <svg className="w-full h-16" viewBox="0 0 200 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q50,45 100,20 T200,5"
                        fill="url(#growthGradient)"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <div 
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        background: 'rgba(59, 130, 246, 0.2)',
                        color: '#93c5fd'
                      }}
                    >
                      📱 Electronics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUSTED BY - Company Logos */}
        <section 
          className="py-20" 
          style={{ 
            background: '#000000',
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4" 
                style={{ 
                  background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Trusted by
              </h2>
              <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Businesses that scaled smarter with us
              </p>
            </div>

            {/* Infinite Scrolling Logo Strip */}
            <div className="relative overflow-hidden" style={{ height: '100px' }}>
              <div 
                className="logo-scroll flex items-center absolute"
                style={{
                  gap: '80px',
                  whiteSpace: 'nowrap'
                }}
              >
                {/* First set of logos */}
                <img src="/logos/logo1.png" alt="Company 1" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo2.png" alt="Company 2" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo3.png" alt="Company 3" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo4.png" alt="Company 4" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo5.png" alt="Company 5" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo6.png" alt="Company 6" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo7.png" alt="Company 7" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                {/* Duplicate set for seamless loop */}
                <img src="/logos/logo1.png" alt="Company 1" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo2.png" alt="Company 2" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo3.png" alt="Company 3" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo4.png" alt="Company 4" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo5.png" alt="Company 5" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo6.png" alt="Company 6" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
                <img src="/logos/logo7.png" alt="Company 7" style={{ height: '60px', width: 'auto', opacity: 0.8 }} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT - Modern Founder Section */}
        <section 
          className="py-24 lg:py-32 relative overflow-hidden" 
          style={{ 
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left - About Text with Quote */}
              <div>
                {/* Large Quote Marks */}
                <div className="mb-6">
                  <svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48V27.6C0 18.4 2.4 10.8 7.2 4.8C12 1.6 17.6 0 24 0V9.6C20.8 9.6 18.4 10.4 16.8 12C15.2 13.6 14.4 16 14.4 19.2V24H26.4V48H0ZM33.6 48V27.6C33.6 18.4 36 10.8 40.8 4.8C45.6 1.6 51.2 0 57.6 0V9.6C54.4 9.6 52 10.4 50.4 12C48.8 13.6 48 16 48 19.2V24H60V48H33.6Z" fill="url(#gradient1)" fillOpacity="0.15"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="60" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a78bfa"/>
                        <stop offset="1" stopColor="#8b5cf6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="mb-8">
                  <p 
                    className="text-xl lg:text-2xl font-light leading-relaxed italic mb-6"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.95)',
                      lineHeight: '1.8'
                    }}
                  >
                    Ecommerce SEO isn't just about rankings—it's about turning organic traffic into revenue. I help online stores dominate search results through strategic product page optimization, technical SEO excellence, and data-driven keyword strategies that drive qualified buyers to your store. Whether you're on Shopify, WooCommerce, or Magento, my focus is on sustainable growth that scales your business.
                  </p>
                </div>

                {/* Name and Title */}
                <div className="mb-6">
                  <h3 
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: '#ffffff' }}
                  >
                    Moaz Haider
                  </h3>
                  <p 
                    className="text-lg mb-1"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    Ecommerce SEO Consultant | Founder
                  </p>
                  <p 
                    className="text-base"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                  >
                    7+ Years in Ecommerce SEO & Digital Marketing
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/moaz-haider/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: '#0077b5',
                      boxShadow: '0 4px 20px rgba(0, 119, 181, 0.3)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/MoazHaider71" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: '#000000',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/moaz.haider.14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: '#1877f2',
                      boxShadow: '0 4px 20px rgba(24, 119, 242, 0.3)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/moazhaider5/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      boxShadow: '0 4px 20px rgba(225, 48, 108, 0.3)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right - Image with Overlay Text */}
              <div className="relative">
                <div 
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  {/* Profile Image Placeholder */}
                  <div 
                    className="aspect-[4/5] lg:aspect-[3/4] flex items-end justify-center relative"
                    style={{
                      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 27, 75, 0.8) 100%)',
                      minHeight: '500px'
                    }}
                  >
                    {/* Gradient Overlay at bottom */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                      }}
                    />
                    
                    {/* Placeholder - Replace with actual image */}
                    <img 
                      src="/moaz-haider.png" 
                      alt="Moaz Haider" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }} 
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl"
                  style={{ background: 'rgba(139, 92, 246, 0.3)' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* 4. FREE AUDIT FORM SECTION */}
        <section 
          className="py-24 lg:py-32" 
          id="audit-form"
          style={{ background: '#000000' }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span 
                  className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                  style={{ color: '#a78bfa' }}
                >
                  Free SEO Analysis
                </span>
                <h2 
                  className="text-4xl lg:text-5xl font-bold mb-6" 
                  style={{ 
                    color: '#ffffff',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Get Your Free SEO Audit
                </h2>
                <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Comprehensive analysis of your ecommerce store's SEO health
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl"></div>
                <div className="relative">
                  <AuditForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES - Horizontal Carousel */}
        <section 
          className="py-24 lg:py-32"
          style={{ background: '#000000' }}
        >
          <div className="container max-w-7xl mx-auto px-6">
            {/* Title */}
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-16 text-center" 
              style={{ 
                color: '#ffffff',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.2'
              }}
            >
              The Core Ecommerce SEO Services We Execute to Drive Revenue
            </h2>

            {/* Carousel */}
            <ServicesCarousel />
          </div>
        </section>

        {/* 6. PLATFORMS - Colored Icon Squares */}
        <section 
          className="py-24 lg:py-32" 
          style={{ 
            background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)' 
          }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <span 
                className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                style={{ color: '#a78bfa' }}
              >
                Platforms
              </span>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Ecommerce Platforms
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Expert SEO for all major ecommerce platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform, index) => (
                <Link
                  key={index}
                  href={platform.href}
                  className="p-8 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div
                    className="w-16 h-16 mb-5 rounded-xl flex items-center justify-center text-2xl font-bold transition-all group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${platform.color}20`,
                      color: platform.color,
                      border: `2px solid ${platform.color}40`
                    }}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <h3 
                    className="text-lg font-bold mb-3" 
                    style={{ color: '#ffffff' }}
                  >
                    {platform.name}
                  </h3>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {platform.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {platform.fixes.map((fix, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ 
                          background: 'rgba(139, 92, 246, 0.15)', 
                          color: '#a78bfa',
                          border: '1px solid rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        {fix}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/platforms" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#ffffff'
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

        {/* 7. INDUSTRIES - Emoji Icons */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: '#000000' }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <span 
                className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                style={{ color: '#a78bfa' }}
              >
                Industries
              </span>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Industries Served
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Specialized ecommerce SEO across diverse verticals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {industries.map((industry, index) => {
                const industryIcons = ['👗', '📱', '💄', '💍', '🛋️', '💊']
                return (
                  <Link 
                    key={index} 
                    href={industry.href} 
                    className="p-8 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(139, 92, 246, 0.05)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="text-4xl mb-5">{industryIcons[index]}</div>
                    <h3 
                      className="text-lg font-bold mb-3" 
                      style={{ color: '#ffffff' }}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {industry.description}
                    </p>
                    <div 
                      className="flex items-start gap-2 pt-4 border-t" 
                      style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}
                    >
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#a78bfa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        {industry.challenge}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="text-center">
              <Link 
                href="/industries" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#ffffff'
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

        {/* 8. INTERNATIONAL MARKETS - Flag Cards with Glow */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)' }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <span 
                className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                style={{ color: '#a78bfa' }}
              >
                Global Reach
              </span>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                International Markets
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Ecommerce SEO expertise across global markets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="p-8 text-center rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="text-5xl mb-5">
                    {location.flag}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3" 
                    style={{ color: '#ffffff' }}
                  >
                    {location.country}
                  </h3>
                  <p className="text-sm mb-3 font-semibold" style={{ color: '#a78bfa' }}>
                    {location.abbrev}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {location.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. WHY CHOOSE ME - Numbered Benefits */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: '#000000' }}
        >
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left Column - Headline */}
              <div className="lg:col-span-2">
                <span 
                  className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                  style={{ color: '#a78bfa' }}
                >
                  Why Me
                </span>
                <h2 
                  className="text-4xl lg:text-5xl font-bold mb-6" 
                  style={{ 
                    color: '#ffffff',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Ecommerce-First Expertise
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Strategic SEO that drives real business results for online stores
                </p>
              </div>

              {/* Right Column - Benefits Grid */}
              <div className="lg:col-span-3 grid gap-6">
                {whyChoose.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex gap-5 p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1" 
                    style={{ 
                      background: 'rgba(139, 92, 246, 0.05)', 
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-bold"
                      style={{ 
                        background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                        color: '#ffffff',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3" style={{ color: '#ffffff' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. PROCESS - Enhanced Timeline */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)' }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <span 
                className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                style={{ color: '#a78bfa' }}
              >
                Process
              </span>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                How We Work Together
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                A structured, data-driven approach to ecommerce SEO success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 opacity-30 z-0" 
                         style={{ background: 'linear-gradient(to right, #a78bfa, #d946ef)' }} />
                  )}
                  
                  <div className="relative z-10 text-center">
                    {/* Step Number Circle */}
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-5 text-2xl font-bold"
                         style={{ 
                           background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                           boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
                           color: '#ffffff'
                         }}>
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed px-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                         style={{ 
                           background: 'rgba(139, 92, 246, 0.15)', 
                           color: '#a78bfa',
                           border: '1px solid rgba(139, 92, 246, 0.3)'
                         }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                }}
              >
                Start Your SEO Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 11. TESTIMONIALS - Dark Cards with Stars */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: '#000000' }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <span 
                className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                style={{ color: '#a78bfa' }}
              >
                Testimonials
              </span>
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-6" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Client Success Stories
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                What clients say about working with me
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah J.', role: 'CEO, Fashion Brand', rating: 5, text: 'Moaz transformed our ecommerce SEO strategy. Organic traffic increased 185% within 6 months. His expertise in product page optimization delivered real ROI.' },
                { name: 'Michael K.', role: 'Director, Electronics Store', rating: 5, text: 'His technical SEO knowledge and keyword mapping expertise delivered measurable results. Revenue from organic search grew consistently month over month.' },
                { name: 'Emma L.', role: 'Founder, Beauty Brand', rating: 5, text: 'Working with Moaz was game-changing. He understands ecommerce SEO at a deep level. Our rankings and conversions both improved dramatically.' },
              ].map((testimonial, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" style={{ color: '#a78bfa' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-base leading-relaxed mb-6 flex-grow" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                         style={{ 
                           background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)', 
                           color: '#ffffff'
                         }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#ffffff' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FAQ - Dark Accordion with Sidebar */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)' }}
        >
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Column - Intro + CTA */}
              <div className="lg:col-span-1">
                <span 
                  className="text-xs font-semibold uppercase tracking-widest mb-4 block" 
                  style={{ color: '#a78bfa' }}
                >
                  FAQ
                </span>
                <h2 
                  className="text-4xl lg:text-5xl font-bold mb-6" 
                  style={{ 
                    color: '#ffffff',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Common Questions
                </h2>
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Everything you need to know about ecommerce SEO services
                </p>

                {/* CTA Card */}
                <div 
                  className="p-8 rounded-2xl mt-8"
                  style={{
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                    Still have questions?
                  </h3>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Schedule a free consultation to discuss your ecommerce SEO needs and strategy.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                      color: '#ffffff',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                    }}
                  >
                    Contact Me
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="lg:col-span-2">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA - Gradient Card with Buttons */}
        <section 
          className="py-24 lg:py-32" 
          style={{ background: '#000000' }}
        >
          <div className="container">
            <div className="relative max-w-5xl mx-auto">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl" 
                style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%)' }}
              ></div>
              
              {/* Content */}
              <div 
                className="relative p-12 md:p-16 text-center rounded-3xl"
                style={{
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="max-w-3xl mx-auto">
                  <span 
                    className="inline-block text-sm font-bold uppercase tracking-wider mb-6 px-4 py-2 rounded-full"
                    style={{ 
                      background: 'rgba(139, 92, 246, 0.2)', 
                      color: '#a78bfa',
                      border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    Ready to Get Started?
                  </span>
                  
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
                    style={{ 
                      color: '#ffffff',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    Scale Your{' '}
                    <span 
                      style={{ 
                        background: 'linear-gradient(135deg, #a78bfa 0%, #d946ef 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Ecommerce SEO
                    </span>
                  </h2>
                  
                  <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Get a free ecommerce SEO audit and discover opportunities to increase your organic traffic, rankings, and revenue.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="#audit-form" 
                      className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                        color: '#ffffff',
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                      }}
                    >
                      Get Your Free Audit
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90"
                      style={{
                        background: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        color: '#ffffff'
                      }}
                    >
                      Schedule a Call
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t" 
                       style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                    {[
                      { icon: '✓', text: 'No commitment required' },
                      { icon: '✓', text: 'Results-focused approach' },
                      { icon: '✓', text: 'Platform expertise' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        <span className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                              style={{ background: '#a78bfa', color: '#ffffff' }}>
                          {item.icon}
                        </span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. NEWSLETTER - Before Footer */}
        <section 
          className="py-20" 
          style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)' }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4" 
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Stay Updated on Ecommerce SEO
              </h2>
              <p className="text-base mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Get weekly insights, tips, and strategies for ecommerce SEO success
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-5 py-3 rounded-lg"
                  style={{
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                  required
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  Subscribe
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
