import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditForm from '@/components/AuditForm'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://moazhaider.com/#service',
        name: 'Moaz Haider – Ecommerce SEO Consultant',
        description: 'Freelance ecommerce SEO consultant specializing in Shopify, WooCommerce, and Magento SEO for online stores.',
        url: 'https://moazhaider.com',
        priceRange: '$$',
        telephone: '+92-302-4698992',
        email: 'contact@moazhaider.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PK',
        },
        founder: {
          '@type': 'Person',
          name: 'Moaz Haider',
          jobTitle: 'Freelance Ecommerce SEO Consultant & Expert',
          knowsAbout: ['Ecommerce SEO', 'Shopify SEO', 'WooCommerce SEO', 'Magento SEO', 'Technical SEO', 'Online Store SEO', 'Ecommerce Website Optimization'],
        },
        areaServed: ['US', 'GB', 'CA', 'AU', 'AE', 'DE'],
        serviceType: 'Ecommerce SEO Consulting',
      },
      {
        '@type': 'Person',
        '@id': 'https://moazhaider.com/#person',
        name: 'Moaz Haider',
        jobTitle: 'Freelance Ecommerce SEO Consultant & Expert',
        url: 'https://moazhaider.com',
        image: 'https://moazhaider.com/assets/moaz-haider-ecommerce-seo-consultant.jpg',
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
        name: 'Moaz Haider – Ecommerce SEO Consultant',
        publisher: { '@id': 'https://moazhaider.com/#person' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/#webpage',
        url: 'https://moazhaider.com',
        name: 'Ecommerce SEO Consultant | Moaz Haider – Shopify, WooCommerce & Magento SEO Expert',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        about: { '@id': 'https://moazhaider.com/#person' },
        description: 'Moaz Haider is a freelance ecommerce SEO consultant with 7+ years of experience helping online stores rank higher and grow revenue. Shopify, WooCommerce & Magento SEO expert.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is ecommerce SEO and why does my online store need it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO is the process of optimizing your online store to rank higher in Google search results for product and category-related keywords. Unlike paid ads, ecommerce SEO drives sustainable organic traffic that continues to grow over time. With Google being the starting point for most online shopping journeys, ranking for high-intent ecommerce keywords directly translates to more traffic, more sales, and lower customer acquisition costs.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does ecommerce SEO take to show results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO typically shows meaningful results within 3-6 months, though some technical fixes and quick wins can appear sooner. Long-term revenue growth from organic search generally develops over 6-12 months as your store builds authority and keyword rankings. I provide monthly reports so you can track progress every step of the way.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with all ecommerce platforms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — I provide expert SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical SEO challenges, and I bring deep platform-specific expertise to every engagement.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes ecommerce SEO different from regular SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO involves unique challenges that general SEO doesn\'t cover: large product catalogs, faceted navigation, duplicate content from product variants, seasonal keyword strategy, product schema markup, category page optimization, and converting transactional search intent into sales. A specialist ecommerce SEO consultant understands these nuances — a generalist often doesn\'t.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your ecommerce SEO pricing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO pricing varies based on store size, competition level, and scope of work. I offer flexible packages with no long-term contracts required. Contact me for a free audit and custom quote tailored to your online store\'s needs.',
            },
          },
        ],
      },
    ],
  }

  const services = [
    {
      title: 'Ecommerce SEO Audit',
      description: 'Comprehensive analysis of your online store\'s technical SEO health, keyword gaps, and competitor positioning for ecommerce website optimization.',
      featured: true,
      link: '/services/ecommerce-seo-audit',
    },
    {
      title: 'Ecommerce Keyword Research',
      description: 'High-intent keyword mapping tailored to your product catalog, categories, and buyer journey to increase ecommerce sales with SEO.',
      link: '/services/ecommerce-keyword-research',
    },
    {
      title: 'Product Page SEO',
      description: 'Optimize product pages with schema markup, rich snippets, and conversion-focused content that ranks and converts.',
      link: '/services/product-page-seo',
    },
    {
      title: 'Technical SEO for Ecommerce',
      description: 'Fix crawl issues, site architecture, Core Web Vitals, faceted navigation, and indexation problems specific to ecommerce platforms.',
      link: '/services/technical-ecommerce-seo',
    },
    {
      title: 'Category Page SEO',
      description: 'Optimize category and collection pages to capture high-volume, commercial-intent keywords for your online store.',
      link: '/services/category-page-seo',
    },
    {
      title: 'Ecommerce Content Strategy',
      description: 'Build topical authority with a content strategy that captures informational and transactional ecommerce queries.',
      link: '/services/ecommerce-content-strategy',
    },
  ]

  const platforms = [
    {
      name: 'Shopify SEO',
      description: 'Expert Shopify SEO consultant services. I solve theme bloat, duplicate content, URL structure issues, and Shopify-specific technical SEO challenges.',
      color: '#95BF47',
      fixes: ['Theme bloat', 'Duplicate content', 'URL structure'],
      href: '/platforms/shopify-seo',
    },
    {
      name: 'WooCommerce SEO',
      description: 'Specialized WooCommerce SEO expert services. From plugin conflicts and schema markup to speed optimization that improves Core Web Vitals.',
      color: '#7F54B3',
      fixes: ['Plugin conflicts', 'Speed optimization', 'Schema markup'],
      href: '/platforms/woocommerce-seo',
    },
    {
      name: 'Magento SEO',
      description: 'Advanced technical SEO for Magento and Adobe Commerce stores. Layered navigation SEO, indexation control, and enterprise-level strategy.',
      color: '#EE672F',
      fixes: ['Layered navigation', 'Indexation control', 'Performance'],
      href: '/platforms/magento-seo',
    },
    {
      name: 'BigCommerce SEO',
      description: 'Strategic BigCommerce SEO implementation — faceted URL management, pagination, and category structure optimization.',
      color: '#1D4E89',
      fixes: ['Faceted URLs', 'Pagination', 'Category structure'],
      href: '/platforms/bigcommerce-seo',
    },
    {
      name: 'Wix Ecommerce SEO',
      description: 'Practical SEO optimization for Wix ecommerce stores despite platform limitations. Mobile optimization and speed improvements.',
      color: '#0C6EFC',
      fixes: ['Platform limits', 'Mobile optimization', 'Speed issues'],
      href: '/platforms/wix-seo',
    },
    {
      name: 'Custom Ecommerce SEO',
      description: 'Tailored ecommerce SEO strategies for custom-built platforms. Technical audits, custom solutions, and scalable architecture.',
      color: '#6366F1',
      fixes: ['Technical audits', 'Custom solutions', 'Scalability'],
      href: '/platforms/custom-ecommerce-seo',
    },
  ]

  const industries = [
    { name: 'Fashion & Clothing Brands', description: 'Ecommerce SEO strategies for fashion and apparel brands — seasonal keyword targeting, visual search optimization, and high-competition SERP strategies.', challenge: 'High competition, seasonal trends', href: '/industries/fashion-ecommerce-seo', abbrev: 'Fa' },
    { name: 'Electronics & Gadgets Stores', description: 'Technical product SEO for consumer electronics retailers — spec-driven content, comparison page optimization, and price-competitive keyword targeting.', challenge: 'Spec-driven content, price competition', href: '/industries/electronics-ecommerce-seo', abbrev: 'El' },
    { name: 'Beauty & Skincare Ecommerce', description: 'Content-driven ecommerce SEO for beauty and cosmetics brands — ingredient-focused keyword research, influencer market targeting, and featured snippet wins.', challenge: 'Influencer market, ingredient focus', href: '/industries/beauty-skincare-ecommerce-seo', abbrev: 'Be' },
    { name: 'Jewelry & Accessories', description: 'Visual and editorial SEO for jewelry ecommerce — style categorization, luxury keyword targeting, and visual search optimization.', challenge: 'Visual search, style categorization', href: '/industries/jewelry-accessories-ecommerce-seo', abbrev: 'Je' },
    { name: 'Furniture & Interior Products', description: 'Category-focused SEO for furniture and home decor stores — large product catalog management, shipping-related content, and local ecommerce SEO.', challenge: 'Large product catalogs, shipping complexity', href: '/industries/furniture-home-decor-seo', abbrev: 'Fu' },
    { name: 'Health & Supplements Brands', description: 'Compliance-aware ecommerce SEO for health and wellness brands — navigating claims restrictions while building strong organic visibility.', challenge: 'Regulatory compliance, claims restrictions', href: '/industries/health-supplements-ecommerce-seo', abbrev: 'He' },
  ]

  const locations = [
    { country: 'United States', abbrev: 'US', description: 'Ecommerce SEO consultant serving US-based online stores and DTC brands.' },
    { country: 'United Kingdom', abbrev: 'UK', description: 'SEO for ecommerce websites targeting UK buyers and search markets.' },
    { country: 'Canada', abbrev: 'CA', description: 'Strategic ecommerce SEO for Canadian online retailers and brands.' },
    { country: 'Australia', abbrev: 'AU', description: 'Ecommerce SEO consulting for Australian online stores.' },
    { country: 'United Arab Emirates', abbrev: 'AE', description: 'International ecommerce SEO for UAE-based retail and D2C brands.' },
    { country: 'Germany', abbrev: 'DE', description: 'Technical ecommerce SEO for German markets and EU cross-border expansion.' },
  ]

  const whyChoose = [
    { title: 'Ecommerce-First Expertise', description: 'I specialize exclusively in ecommerce SEO, not generic digital marketing. Every strategy I build is designed around how online shoppers actually search and buy.' },
    { title: 'Data-Driven SEO Strategy', description: 'Every recommendation is backed by keyword research, competitor analysis, and your store\'s actual search data — not guesswork.' },
    { title: 'International SEO Experience', description: 'Proven ecommerce SEO results across USA, UK, Canada, Australia, UAE, and Germany. I understand market-specific search behavior.' },
    { title: 'Platform-Agnostic Expertise', description: 'Deep technical SEO knowledge across Shopify, WooCommerce, Magento, BigCommerce, and custom ecommerce builds.' },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Ecommerce SEO Audit',
      description: 'Comprehensive audit of your store\'s technical SEO, keyword gaps, competitor landscape, and market opportunity.',
      deliverable: 'Full SEO Audit Report',
    },
    {
      step: '02',
      title: 'Keyword Research & Strategy Roadmap',
      description: 'Detailed ecommerce keyword research mapped to your products, categories, and buyer intent — with a prioritized action plan.',
      deliverable: 'Strategic Roadmap',
    },
    {
      step: '03',
      title: 'Implementation & Optimization',
      description: 'Execute technical fixes, product page SEO, content optimization, and schema markup improvements across your online store.',
      deliverable: 'Optimized Store',
    },
    {
      step: '04',
      title: 'Monitor, Report & Scale',
      description: 'Track keyword rankings, organic traffic, and revenue impact with monthly reports. Scale what works to increase ecommerce sales.',
      deliverable: 'Monthly Reports',
    },
  ]

  const faqs = [
    {
      question: 'What is ecommerce SEO and why does my online store need it?',
      answer: 'Ecommerce SEO is the process of optimizing your online store to rank higher in Google search results for product and category-related keywords. Unlike paid ads, ecommerce SEO drives sustainable organic traffic that continues to grow over time. With Google being the starting point for most online shopping journeys, ranking for high-intent ecommerce keywords directly translates to more traffic, more sales, and lower customer acquisition costs.',
    },
    {
      question: 'How long does ecommerce SEO take to show results?',
      answer: 'Ecommerce SEO typically shows meaningful results within 3-6 months, though some technical fixes and quick wins can appear sooner. Long-term revenue growth from organic search generally develops over 6-12 months as your store builds authority and keyword rankings. I provide monthly reports so you can track progress every step of the way.',
    },
    {
      question: 'Do you work with all ecommerce platforms?',
      answer: 'Yes — I provide expert SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical SEO challenges, and I bring deep platform-specific expertise to every engagement.',
    },
    {
      question: 'What makes ecommerce SEO different from regular SEO?',
      answer: 'Ecommerce SEO involves unique challenges that general SEO doesn\'t cover: large product catalogs, faceted navigation, duplicate content from product variants, seasonal keyword strategy, product schema markup, category page optimization, and converting transactional search intent into sales. A specialist ecommerce SEO consultant understands these nuances — a generalist often doesn\'t.',
    },
    {
      question: 'What is your ecommerce SEO pricing?',
      answer: 'Ecommerce SEO pricing varies based on store size, competition level, and scope of work. I offer flexible packages with no long-term contracts required. Every engagement starts with a free audit so you can see the opportunity before committing. Contact me for a custom quote tailored to your online store\'s needs.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main itemScope itemType="https://schema.org/ProfessionalService">

        {/* ══════════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════════ */}
        <section
          className="min-h-screen flex items-center relative overflow-hidden"
          style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '60px' }}
        >
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              {/* LEFT — Text */}
              <div>
                <div className="mb-6">
                  <span
                    className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium"
                    style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    Freelance Ecommerce SEO Consultant &middot; 7+ Years Experience
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6"
                  style={{ letterSpacing: '-0.025em', lineHeight: '1.1', color: 'var(--text)' }}
                  itemProp="name"
                >
                  Ecommerce SEO Consultant{' '}
                  <span style={{ color: 'var(--accent)' }}>
                    — I Help Online Stores Rank Higher &amp; Grow Revenue
                  </span>
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                  I specialize in ecommerce website optimization for Shopify, WooCommerce, and Magento stores. Through data-driven ecommerce SEO strategy, I help online stores rank on Google, attract high-intent buyers, and grow organic revenue — no paid ads required.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <a
                    href="#audit-form"
                    className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta"
                    style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}
                    aria-label="Get your free ecommerce SEO audit"
                  >
                    Get Your Free SEO Audit
                  </a>
                  <Link
                    href="/case-studies"
                    className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}
                  >
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  {[
                    { label: '7+ Years', sub: 'Experience' },
                    { label: '50+', sub: 'Stores Optimized' },
                    { label: '6', sub: 'Countries Served' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{stat.label}</div>
                      <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Photo */}
              <div className="relative hidden lg:block">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}
                >
                  <div className="aspect-[3/4] relative" style={{ minHeight: '480px' }}>
                    <img
                      src="/moaz-haider.png"
                      alt="Moaz Haider – Freelance Ecommerce SEO Consultant with 7+ years experience"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Strip */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { metric: '285%', label: 'Organic Traffic Growth', client: 'Fashion Brand' },
                { metric: '12x', label: 'Organic Click Increase', client: 'Beauty Store' },
                { metric: '540%', label: 'Revenue Growth', client: 'Electronics Store' },
              ].map((result, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)' }}>{result.metric}</div>
                  <div className="text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>{result.label}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{result.client}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 2 — TRUSTED BY
        ══════════════════════════════════════════════════ */}
        <section className="py-20" style={{ background: 'var(--surface-alt)', overflow: 'hidden' }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                Trusted by Growing Ecommerce Brands
              </h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Online stores across fashion, beauty, electronics, and more
              </p>
            </div>
            <div className="relative overflow-hidden" style={{ height: '100px' }}>
              <div className="logo-scroll flex items-center absolute" style={{ gap: '80px', whiteSpace: 'nowrap' }}>
                {[1,2,3,4,5,6,7,1,2,3,4,5,6,7].map((n, i) => (
                  <img key={i} src={`/logos/logo${n}.png`} alt="Ecommerce client of Moaz Haider SEO consultant" style={{ height: '60px', width: 'auto', opacity: 0.7 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 3 — ABOUT (Bento Grid)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div className="max-w-7xl mx-auto">

              {/* Section label with flanking lines */}
              <div className="flex items-center gap-4 justify-center mb-14">
                <div className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--accent)' }} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--accent)' }}>About Me</span>
                <div className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--accent)' }} />
              </div>

              {/* ─── BENTO ROW 1: Profile + Headline ─── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 mb-4 lg:mb-5">

                {/* Profile Card — accent gradient, compact & dense */}
                <div className="lg:col-span-4 relative overflow-hidden rounded-2xl p-8 lg:p-10" style={{ background: 'linear-gradient(145deg, #B8860B 0%, #8B6914 50%, #6B4F10 100%)' }}>
                  {/* Corner brackets */}
                  <div className="absolute top-5 right-5 w-10 h-10 pointer-events-none" style={{ borderTop: '2px solid rgba(255,255,255,0.25)', borderRight: '2px solid rgba(255,255,255,0.25)' }} />
                  <div className="absolute bottom-5 left-5 w-10 h-10 pointer-events-none" style={{ borderBottom: '2px solid rgba(255,255,255,0.25)', borderLeft: '2px solid rgba(255,255,255,0.25)' }} />

                  {/* Profile content */}
                  <div className="relative z-10 flex items-start gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(255,255,255,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
                      <img src="/moaz-haider.png" alt="Moaz Haider — Ecommerce SEO Consultant" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>Moaz Haider</h3>
                      <p className="text-xs text-white/60 uppercase tracking-wider font-medium">Ecommerce SEO Consultant</p>
                    </div>
                  </div>

                  {/* Quick stats inside profile card */}
                  <div className="relative z-10 grid grid-cols-3 gap-3 mb-8">
                    <div className="text-center py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-2xl font-black text-white block" style={{ fontFamily: 'var(--font-heading)' }}>7+</span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider font-medium">Years</span>
                    </div>
                    <div className="text-center py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-2xl font-black text-white block" style={{ fontFamily: 'var(--font-heading)' }}>6</span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider font-medium">Markets</span>
                    </div>
                    <div className="text-center py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
                      <span className="text-2xl font-black text-white block" style={{ fontFamily: 'var(--font-heading)' }}>5+</span>
                      <span className="text-[10px] text-white/60 uppercase tracking-wider font-medium">Platforms</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="relative z-10 text-sm text-white/80 leading-relaxed mb-6">
                    Helping online stores turn organic search into their most profitable channel since 2018.
                  </p>

                  {/* Social links */}
                  <div className="relative z-10 flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/moaz-haider/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110" style={{ background: 'rgba(255,255,255,0.15)' }} aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://x.com/MoazHaider71" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110" style={{ background: 'rgba(255,255,255,0.15)' }} aria-label="X (Twitter)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/moaz.haider.14" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110" style={{ background: 'rgba(255,255,255,0.15)' }} aria-label="Facebook">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/moazhaider5/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110" style={{ background: 'rgba(255,255,255,0.15)' }} aria-label="Instagram">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Headline Card — spans 8 cols */}
                <div className="lg:col-span-8 rounded-2xl p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  {/* Subtle corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'linear-gradient(225deg, var(--accent-light), transparent)' }} />
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 relative z-10" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', lineHeight: '1.15' }}>
                    I don&apos;t offer generic<br className="hidden lg:block" /> digital marketing.
                  </h2>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 relative z-10" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)', lineHeight: '1.15' }}>
                    Everything I do is ecommerce-first.
                  </h2>
                  <p className="text-base lg:text-lg max-w-2xl relative z-10" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Built around how online shoppers actually search, compare, and buy — not generic SEO playbooks that ignore ecommerce realities.
                  </p>
                </div>
              </div>

              {/* ─── BENTO ROW 2: Credentials + Bio ─── */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 mb-4 lg:mb-5">

                {/* Credentials Card — 4 items with icons */}
                <div className="md:col-span-1 lg:col-span-5 rounded-2xl p-8 lg:p-10 relative overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span className="text-xs font-semibold uppercase tracking-widest mb-6 block" style={{ color: 'var(--accent)' }}>What Sets Me Apart</span>
                  <div className="space-y-5">
                    {[
                      { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Ecommerce-Only Focus', desc: 'Not a generalist — 100% dedicated to online store SEO' },
                      { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Data-Driven Strategies', desc: 'Backed by search analytics and competitive intelligence' },
                      { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'International Reach', desc: 'SEO across USA, UK, Canada, AU, UAE & Germany' },
                      { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', title: 'Platform Expert', desc: 'Shopify, WooCommerce, Magento, BigCommerce & more' },
                    ].map((cred, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-light)', border: '1px solid var(--border)' }}>
                          <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={cred.icon} /></svg>
                        </div>
                        <div>
                          <span className="text-sm font-bold block mb-0.5" style={{ color: 'var(--text)' }}>{cred.title}</span>
                          <span className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{cred.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio Card — rich text with links */}
                <div className="md:col-span-1 lg:col-span-7 rounded-2xl p-8 lg:p-10" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span className="text-xs font-semibold uppercase tracking-widest mb-6 block" style={{ color: 'var(--accent)' }}>My Approach</span>
                  <p className="text-base lg:text-lg leading-relaxed mb-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>
                    With over 7 years specializing exclusively in ecommerce SEO, I&apos;ve helped online stores across the USA, UK, Canada, Australia, UAE, and Germany turn organic search into their most profitable channel. If you&apos;re looking to hire the best ecommerce SEO consultant, you&apos;re in the right place.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: '1.85' }}>
                    From <Link href="/services/ecommerce-seo-audit" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Shopify SEO audits</Link> and <Link href="/services/ecommerce-keyword-research" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>WooCommerce keyword research</Link> to <Link href="/platforms/magento-seo" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Magento technical fixes</Link> and <Link href="/services/product-page-seo" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>product page optimization</Link> that actually converts — my ecommerce SEO strategies are backed by data, competitive analysis, and a deep understanding of how online store SEO differs from regular SEO.
                  </p>
                </div>
              </div>

              {/* ─── BENTO ROW 3: Bottom Quote ─── */}
              <div className="relative overflow-hidden rounded-2xl p-8 lg:p-12 text-center" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                {/* Decorative quotes */}
                <div className="absolute top-4 left-6 text-7xl font-bold select-none pointer-events-none leading-none" style={{ color: 'var(--accent)', opacity: 0.1, fontFamily: 'var(--font-heading)' }}>&ldquo;</div>
                <div className="absolute bottom-4 right-6 text-7xl font-bold select-none pointer-events-none leading-none" style={{ color: 'var(--accent)', opacity: 0.1, fontFamily: 'var(--font-heading)' }}>&rdquo;</div>
                <p className="relative z-10 text-xl lg:text-2xl font-medium italic max-w-3xl mx-auto" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', lineHeight: '1.6' }}>
                  Whether you&apos;re a fashion brand fighting seasonal competition, a beauty store trying to win featured snippets, or an electronics retailer scaling internationally — I build a custom ecommerce SEO roadmap that drives sustainable, measurable results.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 4 — SERVICES (Feature Showcase)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container max-w-7xl mx-auto px-6">
            {/* Centered header */}
            <div className="text-center mb-20">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--accent)' }}>
                Services
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.1', fontFamily: 'var(--font-heading)' }}>
                Ecommerce SEO Services<br className="hidden lg:block" /> That Drive Revenue
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Every service is designed to increase organic traffic, improve rankings, and grow revenue for your online store.
              </p>
            </div>

            {/* Featured service — hero card */}
            <Link href={services[0].link} className="group block mb-8">
              <div className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.04, transform: 'translate(30%, -40%)' }} />
                <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.03, transform: 'translate(-20%, 30%)' }} />

                {/* Accent top line */}
                <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

                <div className="p-10 lg:p-14">
                  <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: 'var(--accent)', color: '#ffffff' }}>Featured</span>
                        <span className="text-sm font-mono font-bold" style={{ color: 'var(--accent)' }}>01</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                        {services[0].title}
                      </h3>
                      <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>{services[0].description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                        Explore this service
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {['Technical Health Report', 'Keyword Gap Analysis', 'Competitor Benchmarking', 'Prioritized Action Plan'].map((item, i) => (
                        <div key={i} className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-[1.02]" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--accent-light)' }}>
                            <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--text)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Service cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(1).map((service, index) => (
                <Link key={index} href={service.link} className="group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  {/* Number watermark */}
                  <span className="absolute -right-1 -top-3 text-7xl font-black leading-none select-none pointer-events-none" style={{ color: 'var(--accent)', opacity: 0.06, fontFamily: 'var(--font-heading)' }}>
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6" style={{ background: 'var(--accent-light)', border: '1px solid var(--border)' }}>
                      <span className="text-xs font-mono font-bold" style={{ color: 'var(--accent)' }}>{String(index + 2).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 5 — PLATFORMS (Stacked Showcase)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--surface-alt)' }}>
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--accent)' }}>
                Platforms
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.1', fontFamily: 'var(--font-heading)' }}>
                Platform-Specific SEO Expertise
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Deep technical knowledge of each platform&apos;s unique SEO architecture, challenges, and optimization opportunities.
              </p>
            </div>

            {/* Platform rows */}
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <Link key={index} href={platform.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    {/* Left accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-1.5" style={{ background: platform.color }} />

                    <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 pl-4">
                      {/* Platform identity */}
                      <div className="flex items-center gap-4 lg:min-w-[260px]">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${platform.color}12`, color: platform.color, border: `2px solid ${platform.color}30` }}>
                          {platform.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{platform.name}</h3>
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: platform.color }}>
                            {index === 0 ? 'Most Popular' : `Platform ${String(index + 1).padStart(2, '0')}`}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="flex-1 text-sm leading-relaxed hidden md:block" style={{ color: 'var(--text-secondary)' }}>{platform.description}</p>

                      {/* Fix tags + arrow */}
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="hidden xl:flex flex-wrap gap-2 max-w-[260px]">
                          {platform.fixes.map((fix, i) => (
                            <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--surface-alt)', color: 'var(--text)', border: '1px solid var(--border)' }}>{fix}</span>
                          ))}
                        </div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1" style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                          <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link href="/platforms" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                All Platforms
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 6 — INDUSTRIES (Editorial Grid)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container max-w-7xl mx-auto px-6">
            {/* Split header */}
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--accent)' }}>
                  Industries
                </span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ color: 'var(--text)', lineHeight: '1.1', fontFamily: 'var(--font-heading)' }}>
                  Ecommerce SEO Across Diverse Industries
                </h2>
              </div>
              <div className="flex flex-col lg:items-end gap-6">
                <p className="text-lg max-w-md leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
                  Specialized ecommerce SEO knowledge for your specific industry — because fashion SEO and electronics SEO require very different strategies.
                </p>
                <Link href="/industries" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg self-start lg:self-end" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                  All Industries
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Asymmetric grid: alternating 7/5 and 5/7 column widths */}
            <div className="space-y-6">
              {/* Row 1 — 7 + 5 */}
              <div className="grid lg:grid-cols-12 gap-6">
                {industries.slice(0, 2).map((industry, index) => (
                  <Link key={index} href={industry.href} className={`group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    {/* Large abbreviation watermark */}
                    <div className="absolute -right-4 -bottom-6 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ color: 'var(--text)', opacity: 0.03, fontFamily: 'var(--font-heading)' }}>
                      {industry.abbrev}
                    </div>
                    {/* Accent top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.abbrev}
                        </div>
                        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{industry.name}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.challenge}
                        </span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Row 2 — 5 + 7 (reversed) */}
              <div className="grid lg:grid-cols-12 gap-6">
                {industries.slice(2, 4).map((industry, index) => (
                  <Link key={index} href={industry.href} className={`group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'lg:col-span-5' : 'lg:col-span-7'}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="absolute -right-4 -bottom-6 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ color: 'var(--text)', opacity: 0.03, fontFamily: 'var(--font-heading)' }}>
                      {industry.abbrev}
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.abbrev}
                        </div>
                        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                          {String(index + 3).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{industry.name}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.challenge}
                        </span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Row 3 — 6 + 6 (balanced) */}
              <div className="grid lg:grid-cols-12 gap-6">
                {industries.slice(4, 6).map((industry, index) => (
                  <Link key={index} href={industry.href} className="lg:col-span-6 group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="absolute -right-4 -bottom-6 text-[8rem] font-black leading-none select-none pointer-events-none" style={{ color: 'var(--text)', opacity: 0.03, fontFamily: 'var(--font-heading)' }}>
                      {industry.abbrev}
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.abbrev}
                        </div>
                        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                          {String(index + 5).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{industry.name}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                          {industry.challenge}
                        </span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 7 — INTERNATIONAL MARKETS (Global Showcase)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'var(--surface-alt)' }}>
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)', backgroundSize: '32px 32px', opacity: 0.4 }} />

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--accent)' }}>
                Global Reach
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.1', fontFamily: 'var(--font-heading)' }}>
                International Ecommerce<br className="hidden lg:block" /> SEO Expertise
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Proven results across major global markets with experience in hreflang, international keyword research, and market-specific strategies.
              </p>
            </div>

            {/* Country cards with prominent abbreviations */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {locations.map((location, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  {/* Large abbreviation as visual hero element */}
                  <div className="pt-8 px-8 pb-2">
                    <span className="text-5xl lg:text-6xl font-black leading-none" style={{ color: 'var(--accent)', opacity: 0.12, fontFamily: 'var(--font-heading)' }}>
                      {location.abbrev}
                    </span>
                  </div>
                  <div className="px-8 pb-8">
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{location.country}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{location.description}</p>
                  </div>
                  {/* Bottom accent line — animates on hover */}
                  <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 py-8 px-10 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {[
                { label: 'Countries Served', value: '6+' },
                { label: 'Continents Covered', value: '3' },
                { label: 'Multi-Language SEO', value: 'Yes' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-3xl lg:text-4xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{stat.value}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 8 — WHY CHOOSE ME (Sticky Heading)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Sticky left column */}
              <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
                <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--accent)' }}>Why Me</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.15' }}>
                  Why Hire the Best Ecommerce SEO Consultant vs. a Generic Agency?
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Most agencies offer SEO as one of 15 services. I do one thing — ecommerce SEO — and I do it at an expert level.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                  Let&apos;s Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

              {/* Scrolling right column */}
              <div className="lg:col-span-3 space-y-5">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-5 p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 9 — PROCESS (Horizontal Steps)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--surface-alt)' }}>
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block" style={{ color: 'var(--accent)' }}>
                Process
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.1', fontFamily: 'var(--font-heading)' }}>
                My Ecommerce SEO<br className="hidden lg:block" /> Strategy &amp; Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A structured, 4-step approach to ecommerce SEO that delivers measurable organic growth.
              </p>
            </div>

            {/* Horizontal steps layout */}
            <div className="relative">
              {/* Connector line (desktop only) */}
              <div className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(90deg, var(--border), var(--accent), var(--accent), var(--border))' }} />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center group">
                    {/* Step circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-lg font-bold transition-all duration-300 group-hover:scale-110" style={{ background: 'var(--accent)', color: '#ffffff', boxShadow: '0 0 0 6px var(--surface-alt), 0 0 0 7px var(--border)', fontFamily: 'var(--font-heading)' }}>
                      {step.step}
                    </div>

                    {/* Content card */}
                    <div className="p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                Start Your Ecommerce SEO Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 11 — TESTIMONIALS
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--accent)' }}>Testimonials</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                How Ecommerce SEO Increased Sales for These Online Stores
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Real results from real clients who hired me as their ecommerce SEO consultant
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
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }} itemProp="reviewBody">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: 'var(--text)' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{testimonial.name}</span>
                      </div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
              {['100% focused on ecommerce SEO', 'Real results, real clients', 'No long-term contracts required'].map((item, i) => (
                <span key={i} className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 12 — FAQ
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--surface-alt)' }}>
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--accent)' }}>FAQ</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  Ecommerce SEO — Frequently Asked Questions
                </h2>
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Everything you need to know about ecommerce SEO services and pricing
                </p>
                <div className="p-8 rounded-2xl mt-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>Still have questions?</h3>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Schedule a free consultation to discuss your ecommerce SEO needs and strategy.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                    Contact Me
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 13 — FINAL CTA (Dark Accent Section)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div className="relative max-w-5xl mx-auto">
              <div className="relative p-12 md:p-16 text-center rounded-3xl" style={{ background: 'var(--surface)', border: '2px solid var(--accent)' }}>
                <div className="max-w-3xl mx-auto">
                  <span className="inline-block text-sm font-bold uppercase tracking-wider mb-6 px-4 py-2 rounded-full" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                    Ready to Get Started?
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                    Ready to Hire an{' '}
                    <span style={{ color: 'var(--accent)' }}>Ecommerce SEO Expert?</span>
                    {' '}Get Started Free
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    Get a free ecommerce SEO audit and discover exactly where your online store is losing organic traffic, rankings, and revenue. Flexible ecommerce SEO pricing — no long-term contracts required.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#audit-form" className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg font-semibold transition-all duration-300" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                      Get Your Free SEO Audit
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }}>
                      Schedule a Consultation Call
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                    {[
                      'No commitment required',
                      'Ecommerce-specialist (not a generalist)',
                      'International experience',
                      'Platform expertise across all major stores',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 14 — FREE AUDIT FORM (Relocated)
        ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 relative overflow-hidden" id="audit-form" style={{ background: 'var(--surface-alt)' }}>
          {/* Decorative background accent */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 60%, color-mix(in srgb, var(--accent) 5%, transparent))' }} />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left — Heading & benefits */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: 'var(--accent)' }}>
                  Free SEO Analysis
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text)', lineHeight: '1.15' }}>
                  Get Your Free Ecommerce SEO Audit
                </h2>
                <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I&apos;ll personally analyze your online store&apos;s SEO health, identify keyword opportunities, and show you exactly what&apos;s holding your rankings back — completely free.
                </p>

                {/* Benefits list */}
                <div className="space-y-5 mb-10">
                  {[
                    { title: 'Technical SEO Analysis', desc: 'Site speed, crawlability, indexation, and schema markup review' },
                    { title: 'Keyword Gap Report', desc: 'Find high-intent keywords your competitors rank for but you don\'t' },
                    { title: 'Content & On-Page Audit', desc: 'Product pages, category pages, and internal linking assessment' },
                    { title: 'Actionable Roadmap', desc: 'Prioritized recommendations you can implement immediately' },
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--accent)', color: '#ffffff' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>{benefit.title}</h4>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-4">
                  {['No commitment', '24-48h response', '100% free'].map((item, i) => (
                    <span key={i} className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="p-8 lg:p-10 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
