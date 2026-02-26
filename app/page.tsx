import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditForm from '@/components/AuditForm'
import FAQAccordion from '@/components/FAQAccordion'
import ServicesTabs from '@/components/ServicesTabs'
import StatsCounter from '@/components/StatsCounter'
import ComparisonTable from '@/components/ComparisonTable'
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
        address: { '@type': 'PostalAddress', addressCountry: 'PK' },
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
          { '@type': 'Question', name: 'What is ecommerce SEO and why does my online store need it?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce SEO is the process of optimizing your online store to rank higher in Google search results for product and category-related keywords. Unlike paid ads, ecommerce SEO drives sustainable organic traffic that continues to grow over time. With Google being the starting point for most online shopping journeys, ranking for high-intent ecommerce keywords directly translates to more traffic, more sales, and lower customer acquisition costs.' } },
          { '@type': 'Question', name: 'How long does ecommerce SEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce SEO typically shows meaningful results within 3-6 months, though some technical fixes and quick wins can appear sooner. Long-term revenue growth from organic search generally develops over 6-12 months as your store builds authority and keyword rankings. I provide monthly reports so you can track progress every step of the way.' } },
          { '@type': 'Question', name: 'Do you work with all ecommerce platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — I provide expert SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical SEO challenges, and I bring deep platform-specific expertise to every engagement.' } },
          { '@type': 'Question', name: 'What makes ecommerce SEO different from regular SEO?', acceptedAnswer: { '@type': 'Answer', text: "Ecommerce SEO involves unique challenges that general SEO doesn't cover: large product catalogs, faceted navigation, duplicate content from product variants, seasonal keyword strategy, product schema markup, category page optimization, and converting transactional search intent into sales. A specialist ecommerce SEO consultant understands these nuances — a generalist often doesn't." } },
          { '@type': 'Question', name: 'What is your ecommerce SEO pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Ecommerce SEO pricing varies based on store size, competition level, and scope of work. I offer flexible packages with no long-term contracts required. Contact me for a free audit and custom quote tailored to your online store\'s needs.' } },
        ],
      },
    ],
  }

  const services = [
    { title: 'Ecommerce SEO Audit', tagline: 'Uncover what\'s holding your store back', description: 'A comprehensive, data-driven audit of your online store\'s technical SEO health, keyword positioning, and competitor landscape. I analyze everything from crawl efficiency and indexation to Core Web Vitals, site architecture, and internal linking structure — giving you a clear, prioritized roadmap to higher rankings and more organic revenue.', deliverables: ['Technical SEO Health Report', 'Keyword Gap Analysis', 'Competitor Benchmarking', 'Prioritized Action Plan'], featured: true, link: '/services/ecommerce-seo-audit' },
    { title: 'Ecommerce Keyword Research', tagline: 'Target the keywords your buyers actually search', description: 'Strategic keyword research mapped to your specific product catalog, category structure, and buyer journey stages. I identify high-intent commercial keywords, informational opportunities, and long-tail variations that your competitors are missing.', deliverables: ['Buyer Intent Keyword Map', 'Category Keyword Strategy', 'Long-Tail Opportunity Report', 'Search Volume & Difficulty Data'], link: '/services/ecommerce-keyword-research' },
    { title: 'Product Page SEO', tagline: 'Turn product pages into ranking machines', description: 'Optimize your product pages to rank for transactional keywords and convert organic visitors into customers. I implement product schema markup for rich snippets, write conversion-focused meta titles and descriptions, and structure your pages to maximize both rankings and add-to-cart rates.', deliverables: ['Product Schema Markup', 'Rich Snippet Optimization', 'Conversion-Focused Copy', 'Image & Alt Text Strategy'], link: '/services/product-page-seo' },
    { title: 'Technical SEO for Ecommerce', tagline: 'Fix the technical issues killing your rankings', description: 'Ecommerce stores face unique technical SEO challenges — faceted navigation creating duplicate content, JavaScript rendering issues, massive product catalogs straining crawl budget, and complex URL structures confusing search engines. I diagnose and fix these platform-specific issues.', deliverables: ['Core Web Vitals Optimization', 'Crawl Budget Management', 'Faceted Navigation Fixes', 'Site Architecture Audit'], link: '/services/technical-ecommerce-seo' },
    { title: 'Category Page SEO', tagline: 'Capture high-volume commercial keywords', description: 'Category and collection pages are where the highest-volume, most commercially valuable keywords live. I optimize your category page structure, add keyword-targeted content, implement proper internal linking hierarchies, and ensure your taxonomy aligns with how your customers actually search.', deliverables: ['Category Content Strategy', 'Internal Linking Architecture', 'Filter & Facet Optimization', 'Taxonomy Alignment'], link: '/services/category-page-seo' },
    { title: 'Ecommerce Content Strategy', tagline: 'Build topical authority that drives sales', description: 'A strategic content plan designed specifically for ecommerce — targeting informational queries that lead to purchases, building topical authority in your niche, and creating buying guides, comparison content, and educational resources that capture organic traffic at every stage of the customer journey.', deliverables: ['Content Calendar & Roadmap', 'Buying Guide Templates', 'Blog & Resource Strategy', 'Topical Authority Map'], link: '/services/ecommerce-content-strategy' },
  ]

  const platforms = [
    { name: 'Shopify SEO', description: 'Expert Shopify SEO consultant services. I solve theme bloat, duplicate content, URL structure issues, and Shopify-specific technical SEO challenges.', color: '#95BF47', fixes: ['Theme bloat', 'Duplicate content', 'URL structure'], href: '/platforms/shopify-seo' },
    { name: 'WooCommerce SEO', description: 'Specialized WooCommerce SEO expert services. From plugin conflicts and schema markup to speed optimization that improves Core Web Vitals.', color: '#7F54B3', fixes: ['Plugin conflicts', 'Speed optimization', 'Schema markup'], href: '/platforms/woocommerce-seo' },
    { name: 'Magento SEO', description: 'Advanced technical SEO for Magento and Adobe Commerce stores. Layered navigation SEO, indexation control, and enterprise-level strategy.', color: '#EE672F', fixes: ['Layered navigation', 'Indexation control', 'Performance'], href: '/platforms/magento-seo' },
    { name: 'BigCommerce SEO', description: 'Strategic BigCommerce SEO implementation — faceted URL management, pagination, and category structure optimization.', color: '#1D4E89', fixes: ['Faceted URLs', 'Pagination', 'Category structure'], href: '/platforms/bigcommerce-seo' },
    { name: 'Wix Ecommerce SEO', description: 'Practical SEO optimization for Wix ecommerce stores despite platform limitations. Mobile optimization and speed improvements.', color: '#0C6EFC', fixes: ['Platform limits', 'Mobile optimization', 'Speed issues'], href: '/platforms/wix-seo' },
    { name: 'Custom Ecommerce SEO', description: 'Tailored ecommerce SEO strategies for custom-built platforms. Technical audits, custom solutions, and scalable architecture.', color: '#6366F1', fixes: ['Technical audits', 'Custom solutions', 'Scalability'], href: '/platforms/custom-ecommerce-seo' },
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

  const processSteps = [
    { step: '01', title: 'Discovery & Ecommerce SEO Audit', description: 'Comprehensive audit of your store\'s technical SEO, keyword gaps, competitor landscape, and market opportunity.', deliverable: 'Full SEO Audit Report' },
    { step: '02', title: 'Keyword Research & Strategy Roadmap', description: 'Detailed ecommerce keyword research mapped to your products, categories, and buyer intent — with a prioritized action plan.', deliverable: 'Strategic Roadmap' },
    { step: '03', title: 'Implementation & Optimization', description: 'Execute technical fixes, product page SEO, content optimization, and schema markup improvements across your online store.', deliverable: 'Optimized Store' },
    { step: '04', title: 'Monitor, Report & Scale', description: 'Track keyword rankings, organic traffic, and revenue impact with monthly reports. Scale what works to increase ecommerce sales.', deliverable: 'Monthly Reports' },
  ]

  const faqs = [
    { question: 'What is ecommerce SEO and why does my online store need it?', answer: 'Ecommerce SEO is the process of optimizing your online store to rank higher in Google search results for product and category-related keywords. Unlike paid ads, ecommerce SEO drives sustainable organic traffic that continues to grow over time. With Google being the starting point for most online shopping journeys, ranking for high-intent ecommerce keywords directly translates to more traffic, more sales, and lower customer acquisition costs.' },
    { question: 'How long does ecommerce SEO take to show results?', answer: 'Ecommerce SEO typically shows meaningful results within 3-6 months, though some technical fixes and quick wins can appear sooner. Long-term revenue growth from organic search generally develops over 6-12 months as your store builds authority and keyword rankings. I provide monthly reports so you can track progress every step of the way.' },
    { question: 'Do you work with all ecommerce platforms?', answer: 'Yes — I provide expert SEO services for Shopify, WooCommerce, Magento, BigCommerce, Wix, and custom-built ecommerce platforms. Each platform has unique technical SEO challenges, and I bring deep platform-specific expertise to every engagement.' },
    { question: 'What makes ecommerce SEO different from regular SEO?', answer: 'Ecommerce SEO involves unique challenges that general SEO doesn\'t cover: large product catalogs, faceted navigation, duplicate content from product variants, seasonal keyword strategy, product schema markup, category page optimization, and converting transactional search intent into sales. A specialist ecommerce SEO consultant understands these nuances — a generalist often doesn\'t.' },
    { question: 'What is your ecommerce SEO pricing?', answer: 'Ecommerce SEO pricing varies based on store size, competition level, and scope of work. I offer flexible packages with no long-term contracts required. Every engagement starts with a free audit so you can see the opportunity before committing. Contact me for a custom quote tailored to your online store\'s needs.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main itemScope itemType="https://schema.org/ProfessionalService">

        {/* --------------------------------------------------
            SECTION 1 — HERO
        -------------------------------------------------- */}
        <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '80px' }}>
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]" style={{ background: 'radial-gradient(ellipse, var(--accent-glow), transparent 70%)', opacity: 0.4 }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.3 }} />
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              {/* LEFT — Text */}
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium" style={{ border: '1px solid var(--border)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                    Freelance Ecommerce SEO Consultant &middot; 7+ Years Experience
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.03em', lineHeight: '1.08', color: 'var(--text)' }} itemProp="name">
                  Ecommerce SEO Consultant{' '}
                  <span className="gold-gradient-text">
                    — I Help Online Stores Rank Higher &amp; Grow Revenue
                  </span>
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I specialize in ecommerce website optimization for Shopify, WooCommerce, and Magento stores. Through data-driven ecommerce SEO strategy, I help online stores rank on Google, attract high-intent buyers, and grow organic revenue — no paid ads required.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <a href="#audit-form" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center btn-hero-cta" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }} aria-label="Get your free ecommerce SEO audit">
                    Get Your Free SEO Audit
                  </a>
                  <Link href="/case-studies" className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base whitespace-nowrap text-center transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', display: 'inline-block' }}>
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  {[
                    { label: '7+', sub: 'Years Experience' },
                    { label: '50+', sub: 'Stores Optimized' },
                    { label: '6', sub: 'Countries Served' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{stat.label}</div>
                      <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Photo */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', boxShadow: '0 0 60px var(--accent-glow)' }}>
                  <div className="aspect-[3/4] relative" style={{ minHeight: '480px' }}>
                    <img src="/moaz-haider.png" alt="Moaz Haider – Freelance Ecommerce SEO Consultant with 7+ years experience" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  {/* Gold accent overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))' }} />
                </div>
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl animate-float-slow pointer-events-none" style={{ border: '1px solid var(--accent)', opacity: 0.15, transform: 'rotate(12deg)' }} />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full animate-float pointer-events-none" style={{ background: 'var(--accent-glow)', opacity: 0.3 }} />
              </div>
            </div>

            {/* Results Strip */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { metric: '285%', label: 'Organic Traffic Growth', client: 'Fashion Brand' },
                { metric: '12x', label: 'Organic Click Increase', client: 'Beauty Store' },
                { metric: '540%', label: 'Revenue Growth', client: 'Electronics Store' },
              ].map((result, i) => (
                <div key={i} className="p-6 rounded-xl text-center transition-all duration-500 hover:-translate-y-2 group" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px var(--accent-glow)' }} />
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>{result.metric}</div>
                  <div className="text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>{result.label}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{result.client}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 2 — STATS COUNTER (NEW)
        -------------------------------------------------- */}
        <StatsCounter />

        {/* --------------------------------------------------
            SECTION 3 — TRUSTED BY
        -------------------------------------------------- */}
        <section className="py-12" style={{ background: 'var(--surface)', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
                Trusted by Growing Ecommerce Brands
              </p>
            </div>
            <div className="relative overflow-hidden" style={{ height: '80px' }}>
              <div className="logo-scroll flex items-center absolute" style={{ gap: '80px', whiteSpace: 'nowrap' }}>
                {[1,2,3,4,5,6,7,1,2,3,4,5,6,7].map((n, i) => (
                  <img key={i} src={`/logos/logo${n}.png`} alt="Ecommerce client of Moaz Haider SEO consultant" style={{ height: '50px', width: 'auto', opacity: 0.5, filter: 'grayscale(100%)' }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 4 — ABOUT BENTO GRID
        -------------------------------------------------- */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg)' }} id="about" itemProp="description">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                SEO Specialist with <span className="gold-gradient-text">Real Results</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 — Main intro */}
              <div className="md:col-span-2 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 relative group" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>Ecommerce SEO Expert</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                  I Live &amp; Breathe Ecommerce SEO
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  I&apos;m Moaz Haider — an ecommerce SEO consultant who has spent 7+ years in the trenches helping online stores scale through organic search. I&apos;ve helped 50+ stores across 6 countries boost organic revenue, fix complex technical SEO issues, and build sustainable growth strategies.
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Unlike agencies that spread thin across 50 clients, I go deep on every project — personally handling strategy, execution, and optimization.
                </p>
              </div>

              {/* Card 2 — Quick stat */}
              <div className="p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 group relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                <div className="text-6xl font-bold mb-3" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>7+</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Years Deep in Ecommerce SEO</div>
                <div className="w-12 h-0.5 rounded-full mt-4" style={{ background: 'var(--accent)' }} />
              </div>

              {/* Card 3 — Specialization */}
              <div className="p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 group relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                <div className="text-4xl mb-4">??</div>
                <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>100% Ecommerce Focused</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I only work with ecommerce brands. Product pages, category optimization, technical SEO for large catalogs — this is all I do, every single day.
                </p>
              </div>

              {/* Card 4 — Approach */}
              <div className="p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 group relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                <div className="text-4xl mb-4">??</div>
                <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>Data-Driven Strategy</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Every strategy is backed by real data — search volume, competitor gaps, crawl audits, and conversion analysis. No guesswork, just results.
                </p>
              </div>

              {/* Card 5 — CTA */}
              <div className="p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1 group relative" style={{ border: '1px solid var(--accent)', background: 'var(--accent-light)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>Ready to Grow?</h4>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Let&apos;s discuss how I can help your store grow organically.
                </p>
                <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--accent)', color: '#fff' }}>
                  Learn More About Me ?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 5 — SERVICES TABS
        -------------------------------------------------- */}
        <section className="py-16 relative" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} id="services">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.15 }} />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                Ecommerce SEO Services That <span className="gold-gradient-text">Drive Revenue</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                From technical audits to content strategy — everything your online store needs to dominate organic search.
              </p>
            </div>

            <ServicesTabs services={services} />

            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--accent)', color: '#fff' }}>
                View All Services ?
              </Link>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 6 — PLATFORMS
        -------------------------------------------------- */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg)' }} id="platforms">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.3 }} />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Platforms
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                SEO for <span className="gold-gradient-text">Every Platform</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Deep platform expertise means better results. I know the technical nuances of each ecommerce system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, i) => (
                <Link key={i} href={platform.href} className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold mb-6" style={{ background: platform.color, color: '#fff' }}>
                    {platform.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {platform.description}
                  </p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                    Learn more <span className="transition-transform duration-300 group-hover:translate-x-1">?</span>
                  </span>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/platforms" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                View All Platforms ?
              </Link>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 7 — INDUSTRIES
        -------------------------------------------------- */}
        <section className="py-16 relative" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} id="industries">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Industries
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                Industry-Specific <span className="gold-gradient-text">SEO Expertise</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Every industry has unique SEO challenges. I understand the search behavior, competition, and conversion patterns specific to your niche.
              </p>
            </div>

            {/* Magazine-style bento layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, i) => (
                <Link key={i} href={industry.href} className={`group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`} style={{ background: 'var(--bg)', border: '1px solid var(--border)', textDecoration: 'none' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mb-5" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>
                    {industry.abbrev}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                    {industry.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {industry.description}
                  </p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-3" style={{ color: 'var(--accent)' }}>
                    Explore <span className="transition-transform duration-300 group-hover:translate-x-1">?</span>
                  </span>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/industries" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                See All Industries ?
              </Link>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 8 — COMPARISON TABLE (NEW)
        -------------------------------------------------- */}
        <ComparisonTable />

        {/* --------------------------------------------------
            SECTION 9 — INTERNATIONAL MARKETS
        -------------------------------------------------- */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg)' }} id="international">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.2 }} />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Global Reach
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                Ecommerce SEO Across <span className="gold-gradient-text">6 Countries</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Helping ecommerce stores dominate organic search in multiple international markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mb-4" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>
                    {loc.abbrev}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                    {loc.country}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {loc.description}
                  </p>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 10 — PROCESS
        -------------------------------------------------- */}
        <section className="py-16 relative" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} id="process">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                My Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                A Proven <span className="gold-gradient-text">4-Step Process</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A systematic approach that turns underperforming stores into organic search powerhouses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-6 transition-all duration-300" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent)', fontFamily: 'var(--font-heading)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5" style={{ background: 'var(--border)' }} />
                  )}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 11 — TESTIMONIALS
        -------------------------------------------------- */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg)' }} id="testimonials">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.2 }} />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                What Store Owners <span className="gold-gradient-text">Say About Me</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Moaz transformed our Shopify store's organic presence. Within 6 months, our organic traffic grew by 285% and revenue from SEO tripled. His deep understanding of ecommerce SEO is unmatched.",
                  name: 'Sarah Mitchell',
                  role: 'Founder, Luxe Fashion Co.',
                  metric: '+285% Traffic',
                },
                {
                  quote: "Working with Moaz was a game-changer for our WooCommerce store. He identified critical technical issues we never knew existed and implemented fixes that boosted our rankings across the board.",
                  name: 'James Chen',
                  role: 'CEO, TechGear Pro',
                  metric: '12x Clicks',
                },
                {
                  quote: "After struggling with multiple agencies, Moaz delivered what none of them could — real, measurable results. Our organic revenue grew by 540% in under a year. Highly recommend.",
                  name: 'Amara Johnson',
                  role: 'Director, Glow Beauty',
                  metric: '+540% Revenue',
                },
              ].map((testimonial, i) => (
                <div key={i} className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 relative flex flex-col" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px var(--accent-glow)' }} />
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} style={{ color: 'var(--accent)', fontSize: '1rem' }}>?</span>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold" style={{ color: 'var(--text)' }}>{testimonial.name}</div>
                        <div className="text-xs" style={{ color: 'var(--muted)' }}>{testimonial.role}</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>
                        {testimonial.metric}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--accent)' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 12 — FAQ
        -------------------------------------------------- */}
        <section className="py-16 relative" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} id="faq">
          <div className="container max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                Common <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 13 — FINAL CTA
        -------------------------------------------------- */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 60%)', opacity: 0.5 }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.2 }} />
          </div>

          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
              Ready to Dominate<br />
              <span className="gold-gradient-text">Organic Search?</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Stop losing organic revenue to your competitors. Get a free, comprehensive SEO audit and see exactly what&apos;s holding your store back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#audit-form" className="px-10 py-5 rounded-lg font-semibold text-lg btn-hero-cta inline-block" style={{ color: '#ffffff', textDecoration: 'none' }}>
                Get Your Free SEO Audit ?
              </a>
              <Link href="/contact" className="px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 inline-block" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none' }}>
                Let&apos;s Talk Strategy
              </Link>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 14 — AUDIT FORM
        -------------------------------------------------- */}
        <section className="py-16 relative" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} id="audit-form">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 0.5px, transparent 0)', backgroundSize: '48px 48px', opacity: 0.15 }} />
          <div className="container max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--accent-light)' }}>
                Free Audit
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                Get Your Free <span className="gold-gradient-text">SEO Audit</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Submit your store URL below and I&apos;ll send you a detailed SEO audit within 48 hours — completely free, no strings attached.
              </p>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <AuditForm />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
