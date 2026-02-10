import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Moaz Haider | Ecommerce SEO Consultant',
  description: 'Learn about Moaz Haider, an ecommerce SEO consultant helping online stores grow with technical SEO, keyword strategy, and scalable site architecture.',
  alternates: {
    canonical: 'https://moazhaider.com/about',
  },
  openGraph: {
    title: 'About Moaz Haider | Ecommerce SEO Consultant',
    description: 'Learn about Moaz Haider, an ecommerce SEO consultant helping online stores grow with technical SEO, keyword strategy, and scalable site architecture.',
    url: 'https://moazhaider.com/about',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Moaz Haider | Ecommerce SEO Consultant',
    description: 'Learn about Moaz Haider, an ecommerce SEO consultant helping online stores grow with technical SEO, keyword strategy, and scalable site architecture.',
  },
}

export default function AboutPage() {
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
        image: 'https://moazhaider.com/moaz-haider.jpg',
        knowsAbout: [
          'Ecommerce SEO',
          'Technical SEO',
          'Keyword Research',
          'Content Strategy',
          'Product Page Optimization',
          'Category Page Optimization',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/about#webpage',
        url: 'https://moazhaider.com/about',
        name: 'About Moaz Haider | Ecommerce SEO Consultant',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        about: { '@id': 'https://moazhaider.com/#person' },
        description: 'Learn about Moaz Haider, an ecommerce SEO consultant helping online stores grow with technical SEO, keyword strategy, and scalable site architecture.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://moazhaider.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://moazhaider.com/about',
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-[60px] md:pt-[70px]">
        {/* Hero Section */}
        <section className="pt-3 pb-20 md:pt-4 md:pb-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Available for consultation</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text)' }}>
                  Helping Ecommerce Brands Grow Through{' '}
                  <span style={{ color: 'var(--accent)' }}>Strategic SEO</span>
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  I'm Moaz Haider, an ecommerce SEO consultant focused on building scalable SEO strategies 
                  that increase organic traffic, improve rankings, and drive real revenue for online stores.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Let's Talk SEO Strategy
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/services" className="btn btn-secondary">
                    View Services
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="aspect-square rounded-2xl p-8 flex items-center justify-center" 
                       style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <span className="text-white font-bold text-4xl">M</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>Moaz Haider</div>
                        <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Ecommerce SEO Consultant</div>
                      </div>
                      <div className="flex justify-center gap-4 pt-4">
                        <a href="https://www.linkedin.com/in/moaz-haider/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                           style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                           aria-label="LinkedIn">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/MoazHaider71" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                           style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                           aria-label="X (Twitter)">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/moazhaider5/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                           style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                           aria-label="Instagram">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Philosophy Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                   style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Philosophy</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: 'var(--text)' }}>
                My SEO Philosophy
              </h2>

              <div className="prose prose-lg max-w-none space-y-6" style={{ color: 'var(--text-secondary)' }}>
                <p className="text-xl leading-relaxed">
                  Great ecommerce SEO isn't about gaming algorithms—it's about building a site architecture 
                  that search engines understand and users love to navigate.
                </p>

                <p className="text-lg leading-relaxed">
                  I approach every project with <strong style={{ color: 'var(--text)' }}>topical authority</strong> in mind: 
                  creating comprehensive content ecosystems where product pages, category pages, and supporting content 
                  work together to establish your store as the definitive source in your niche.
                </p>

                <p className="text-lg leading-relaxed">
                  This means technical excellence (fast sites, clean code, proper schema), strategic keyword mapping 
                  (commercial intent first), and content that actually helps shoppers make decisions.
                </p>

                <p className="text-lg leading-relaxed">
                  No black-hat shortcuts. No vague promises. Just systematic, scalable SEO that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                   style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Expertise</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                What I Specialize In
              </h2>

              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                Full-spectrum ecommerce SEO services tailored for online stores
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '🎯',
                  title: 'Ecommerce SEO Strategy',
                  description: 'Comprehensive roadmaps aligned with business goals, competitive analysis, and growth targets.',
                },
                {
                  icon: '⚙️',
                  title: 'Technical Ecommerce SEO',
                  description: 'Site speed optimization, crawl budget management, JavaScript rendering, and Core Web Vitals.',
                },
                {
                  icon: '📁',
                  title: 'Category & Product SEO',
                  description: 'Optimizing category pages for high-volume keywords and product pages for commercial intent.',
                  link: '/services/category-page-seo',
                },
                {
                  icon: '🔍',
                  title: 'Keyword Research & Mapping',
                  description: 'Strategic keyword research mapped to site architecture for maximum topical coverage.',
                  link: '/services/ecommerce-keyword-research',
                },
                {
                  icon: '📝',
                  title: 'Content Strategy',
                  description: 'Editorial content planning to build topical authority and support commercial pages.',
                  link: '/services/ecommerce-content-strategy',
                },
                {
                  icon: '🔬',
                  title: 'SEO Audits',
                  description: 'Deep-dive technical and strategic audits to identify opportunities and quick wins.',
                  link: '/services/ecommerce-seo-audit',
                },
              ].map((specialization, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="text-4xl mb-4">{specialization.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                    {specialization.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {specialization.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/services" className="btn btn-primary">
                Explore All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Platforms & Industries Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Platforms */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Platforms</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  Platform Expertise
                </h2>

                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  I work with all major ecommerce platforms, understanding their unique SEO challenges and opportunities.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { name: 'Shopify', icon: 'S' },
                    { name: 'WooCommerce', icon: 'W' },
                    { name: 'Magento', icon: 'M' },
                    { name: 'BigCommerce', icon: 'B' },
                    { name: 'Wix', icon: 'Wx' },
                    { name: 'Custom', icon: 'C' },
                  ].map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                           style={{ backgroundColor: 'var(--surface)', color: 'var(--accent)' }}>
                        {platform.icon}
                      </div>
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>{platform.name}</span>
                    </div>
                  ))}
                </div>

                <Link href="/platforms" className="btn btn-secondary">
                  View All Platforms
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Industries */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Industries</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  Industry Experience
                </h2>

                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Deep experience across multiple ecommerce verticals with unique SEO requirements.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { name: 'Fashion & Clothing', icon: '👗' },
                    { name: 'Electronics & Gadgets', icon: '📱' },
                    { name: 'Beauty & Skincare', icon: '💄' },
                    { name: 'Furniture & Home Decor', icon: '🛋️' },
                    { name: 'Health & Supplements', icon: '💊' },
                    { name: 'Jewelry & Accessories', icon: '💍' },
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                    >
                      <div className="text-2xl">{industry.icon}</div>
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>{industry.name}</span>
                    </div>
                  ))}
                </div>

                <Link href="/industries" className="btn btn-secondary">
                  View All Industries
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility / Process Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>How I Work</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  What Clients Can Expect
                </h2>

                <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                  Transparent, strategic, and results-focused collaboration
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Data-Driven Strategy',
                    description: 'Every recommendation is backed by analytics, competitive research, and keyword data. No guesswork.',
                  },
                  {
                    title: 'Clear Communication',
                    description: 'Regular updates, detailed reports, and plain-language explanations of what we\'re doing and why.',
                  },
                  {
                    title: 'Technical Excellence',
                    description: 'Clean implementation, proper schema markup, optimized site architecture, and adherence to SEO best practices.',
                  },
                  {
                    title: 'Scalable Solutions',
                    description: 'SEO systems that grow with your store—not quick fixes that break when you add 100 new products.',
                  },
                  {
                    title: 'Realistic Expectations',
                    description: 'Honest timelines and transparent about what SEO can (and can\'t) do for your business.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-8 rounded-2xl"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                           style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {item.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                Let's Discuss Your Ecommerce Growth
              </h2>

              <p className="text-xl mb-10" style={{ color: 'var(--text-secondary)' }}>
                Ready to build an SEO strategy that drives real results? Let's talk about your goals, 
                challenges, and how we can work together.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
