'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ, { FAQItem } from '@/components/FAQ'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // IntersectionObserver for reveal animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Data structures
  const services = [
    {
      title: 'Ecommerce SEO Audit',
      description: 'Comprehensive technical and content audit identifying opportunities across your entire ecommerce site.',
      href: '/services/ecommerce-seo-audit',
    },
    {
      title: 'Ecommerce Keyword Research + Mapping',
      description: 'Strategic keyword research mapped to product, category, and content pages for maximum revenue impact.',
      href: '/services/keyword-research',
    },
    {
      title: 'Product Page SEO',
      description: 'Optimize product titles, descriptions, images, schema, and internal linking for higher rankings.',
      href: '/services/product-page-seo',
    },
    {
      title: 'Category / Collection Page SEO',
      description: 'Turn category pages into revenue-driving assets with strategic optimization and content.',
      href: '/services/category-page-seo',
    },
    {
      title: 'Technical SEO for Ecommerce',
      description: 'Fix crawl errors, speed issues, duplicate content, and technical barriers preventing growth.',
      href: '/services/technical-seo',
    },
    {
      title: 'Ecommerce Content Strategy',
      description: 'Build topical authority through strategic content hubs, guides, and educational resources.',
      href: '/services/content-strategy',
    },
  ]

  const platforms = [
    { name: 'Shopify SEO', description: 'Optimize Shopify stores for maximum organic visibility', href: '/platforms/shopify' },
    { name: 'WooCommerce SEO', description: 'WordPress ecommerce SEO for WooCommerce sites', href: '/platforms/woocommerce' },
    { name: 'Magento SEO', description: 'Enterprise-level Magento platform optimization', href: '/platforms/magento' },
    { name: 'BigCommerce SEO', description: 'Scale BigCommerce stores with strategic SEO', href: '/platforms/bigcommerce' },
    { name: 'Wix SEO', description: 'SEO for Wix ecommerce stores and online shops', href: '/platforms/wix' },
    { name: 'Custom Ecommerce SEO', description: 'Tailored SEO for custom-built ecommerce platforms', href: '/platforms/custom' },
  ]

  const industries = [
    { name: 'Fashion & Clothing Brands', description: 'SEO for apparel, accessories, and fashion ecommerce stores', href: '/industries/fashion' },
    { name: 'Electronics & Gadgets Stores', description: 'Technical product SEO for electronics retailers', href: '/industries/electronics' },
    { name: 'Beauty & Skincare Ecommerce', description: 'Cosmetics and beauty product SEO strategies', href: '/industries/beauty' },
    { name: 'Home Decor & Lifestyle Stores', description: 'Interior design and home goods SEO optimization', href: '/industries/home-decor' },
    { name: 'Furniture & Interior Products', description: 'Large-ticket furniture ecommerce SEO', href: '/industries/furniture' },
    { name: 'Health & Supplements Brands', description: 'Wellness and supplement store SEO compliance', href: '/industries/health' },
  ]

  const countries = [
    { name: 'United States', href: '/locations/usa', flag: '🇺🇸' },
    { name: 'United Kingdom', href: '/locations/uk', flag: '🇬🇧' },
    { name: 'Canada', href: '/locations/canada', flag: '🇨🇦' },
    { name: 'Australia', href: '/locations/australia', flag: '🇦🇺' },
    { name: 'United Arab Emirates', href: '/locations/uae', flag: '🇦🇪' },
    { name: 'Germany', href: '/locations/germany', flag: '🇩🇪' },
  ]

  const caseStudies = [
    {
      metric: '+187% Organic Revenue',
      platform: 'Shopify',
      country: 'USA',
      outcome: 'Scaled organic sessions from 12K to 78K/month through strategic category page optimization',
    },
    {
      metric: '+240% Top 3 Rankings',
      platform: 'WooCommerce',
      country: 'UK',
      outcome: 'Mapped 450+ revenue keywords to optimized product and category pages',
    },
    {
      metric: '+156% Organic Sessions',
      platform: 'BigCommerce',
      country: 'Australia',
      outcome: 'Fixed technical SEO issues and implemented comprehensive content strategy',
    },
    {
      metric: '+312% Keyword Rankings',
      platform: 'Magento',
      country: 'Canada',
      outcome: 'Comprehensive technical audit and product page optimization delivered triple-digit growth',
    },
    {
      metric: '+198% Revenue Growth',
      platform: 'Custom',
      country: 'UAE',
      outcome: 'Strategic international SEO and Arabic content optimization for Middle East expansion',
    },
    {
      metric: '+275% Category Traffic',
      platform: 'WooCommerce',
      country: 'Germany',
      outcome: 'Content-rich category pages and German keyword mapping transformed organic visibility',
    },
  ]

  const usps = [
    {
      title: 'Ecommerce-First Strategy',
      description: 'I specialize exclusively in ecommerce SEO, not generic SEO. Every strategy is built for online stores.',
    },
    {
      title: 'Revenue Page Focus',
      description: 'Strategic keyword mapping ensures your product and category pages target high-intent, revenue-driving keywords.',
    },
    {
      title: 'Technical Depth',
      description: 'Deep expertise in ecommerce platforms, structured data, site speed, and crawl optimization.',
    },
    {
      title: 'International Market Experience',
      description: 'Proven success optimizing stores for USA, UK, Canada, Australia, UAE, Germany, and other global markets.',
    },
    {
      title: 'Transparent Reporting',
      description: 'Clear dashboards tracking rankings, traffic, and most importantly—revenue from organic search.',
    },
    {
      title: 'Scalable Growth Systems',
      description: 'Build repeatable processes for ongoing keyword expansion, content creation, and authority building.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Discovery',
      description: 'Comprehensive technical audit, competitive analysis, and growth opportunity identification.',
    },
    {
      step: '02',
      title: 'Research & Mapping',
      description: 'In-depth keyword research with strategic mapping to product, category, and content pages.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, on-page optimization, schema markup, and internal linking strategy.',
    },
    {
      step: '04',
      title: 'Content & Authority',
      description: 'Build topical authority through strategic content hubs, guides, and link-worthy resources.',
    },
    {
      step: '05',
      title: 'Reporting & Iteration',
      description: 'Monthly performance tracking, insights reporting, and continuous optimization based on data.',
    },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'How long does ecommerce SEO take to show results?',
      answer: 'Most ecommerce stores see initial improvements in 2-3 months, with significant growth typically occurring between months 4-6. Timeline depends on your site\'s current technical health, competitive landscape, and implementation speed. Technical fixes can show faster results, while content and authority building are longer-term investments.',
    },
    {
      question: 'How much do ecommerce SEO services cost?',
      answer: 'Investment varies based on store size, platform complexity, and scope of work. Projects typically start from $2,500/month for ongoing optimization. I offer custom packages based on your specific needs, goals, and growth stage. Contact me for a tailored proposal after your free audit.',
    },
    {
      question: 'Is Shopify good for SEO?',
      answer: 'Yes, Shopify is excellent for SEO when optimized correctly. It offers clean code, fast loading speeds, mobile responsiveness, and easy schema implementation. However, it requires strategic optimization of product pages, collections, URL structures, and content to maximize rankings and traffic.',
    },
    {
      question: 'What pages matter most for ecommerce SEO?',
      answer: 'Category/collection pages are your biggest revenue drivers and should be priority #1. Product pages are essential for long-tail keywords. Homepage targets brand terms. Strategic content pages (guides, comparisons, how-tos) build authority and capture informational intent that converts later.',
    },
    {
      question: 'Do you provide keyword research and mapping?',
      answer: 'Absolutely. Strategic keyword research and mapping is the foundation of every project. I identify high-intent keywords, map them to the most relevant pages (product, category, content), and create a clear implementation roadmap prioritizing revenue potential.',
    },
    {
      question: 'Can you improve category and product page rankings?',
      answer: 'Yes, that\'s my core expertise. I optimize category pages with strategic content, internal linking, and keyword targeting to rank for competitive terms. Product pages get optimized titles, descriptions, schema markup, and supporting content to capture long-tail traffic.',
    },
    {
      question: 'Do you work with international markets?',
      answer: 'Yes, I have extensive experience optimizing ecommerce stores for international markets including USA, UK, Canada, Australia, UAE, Germany, and others. I understand regional search behavior, local competition, and market-specific optimization strategies.',
    },
    {
      question: 'How do we start working together?',
      answer: 'Start with a free ecommerce SEO audit. I\'ll analyze your site, identify opportunities, and provide strategic recommendations. If it\'s a good fit, I\'ll create a custom proposal outlining scope, timeline, and investment. Then we kick off with a comprehensive discovery and planning phase.',
    },
  ]

  const testimonials = [
    {
      quote: 'Moaz transformed our organic traffic. His strategic approach to category page optimization delivered results we didn\'t think were possible.',
      author: 'Founder, DTC Fashion Brand',
    },
    {
      quote: 'Finally, an SEO consultant who understands ecommerce. The keyword mapping alone was worth the investment—every page now has clear purpose.',
      author: 'Marketing Director, Electronics Store',
    },
    {
      quote: 'Technical depth combined with strategic thinking. Moaz fixed issues our previous agency missed and built a scalable growth system.',
      author: 'Owner, Home Decor Ecommerce',
    },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://moazhaider.com/#person',
                name: 'Moaz Haider',
                url: 'https://moazhaider.com',
                image: 'https://moazhaider.com/moaz-haider.jpg',
                jobTitle: 'Ecommerce SEO Consultant',
                description: 'Expert ecommerce SEO consultant specializing in technical SEO, keyword research, and international ecommerce optimization.',
                sameAs: [
                  'https://www.linkedin.com/in/moaz-haider/',
                  'https://x.com/MoazHaider71',
                  'https://www.facebook.com/moaz.haider.14',
                  'https://www.instagram.com/moazhaider5/',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'contact@moazhaider.com',
                  telephone: '+92-302-4698992',
                  contactType: 'Customer Service',
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://moazhaider.com/#website',
                url: 'https://moazhaider.com',
                name: 'Moaz Haider - Ecommerce SEO Consultant',
                publisher: {
                  '@id': 'https://moazhaider.com/#person',
                },
              },
              {
                '@type': 'WebPage',
                '@id': 'https://moazhaider.com/#webpage',
                url: 'https://moazhaider.com',
                name: 'Moaz Haider | Ecommerce SEO Consultant',
                isPartOf: {
                  '@id': 'https://moazhaider.com/#website',
                },
                about: {
                  '@id': 'https://moazhaider.com/#person',
                },
                description: 'Expert ecommerce SEO consultant specializing in ecommerce SEO services, technical SEO for ecommerce, product page SEO, and international ecommerce SEO strategies.',
              },
              {
                '@type': 'ProfessionalService',
                '@id': 'https://moazhaider.com/#service',
                name: 'Moaz Haider Ecommerce SEO Consulting',
                image: 'https://moazhaider.com/og.png',
                url: 'https://moazhaider.com',
                telephone: '+92-302-4698992',
                email: 'contact@moazhaider.com',
                priceRange: '$$',
                areaServed: [
                  { '@type': 'Country', name: 'United States' },
                  { '@type': 'Country', name: 'United Kingdom' },
                  { '@type': 'Country', name: 'Canada' },
                  { '@type': 'Country', name: 'Australia' },
                  { '@type': 'Country', name: 'United Arab Emirates' },
                  { '@type': 'Country', name: 'Germany' },
                ],
                serviceType: 'Ecommerce SEO Consulting',
                provider: {
                  '@id': 'https://moazhaider.com/#person',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://moazhaider.com/#faqpage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-900">
          {/* Animated geometric background - only visible in dark mode */}
          <div className="absolute inset-0 overflow-hidden -z-10 opacity-0 dark:opacity-100">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold text-primary mb-6">
                  Expert Ecommerce SEO Consultant
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Ecommerce SEO
                  </span>
                  <br />
                  Consultant
                </h1>
                <p className="text-xl text-slate-800 dark:text-slate-200 mb-8 leading-relaxed font-medium">
                  I help online stores dominate search rankings and scale organic revenue through 
                  <span className="text-primary font-semibold"> data-driven keyword strategies</span>, 
                  <span className="text-primary font-semibold"> technical excellence</span>, and 
                  <span className="text-primary font-semibold"> conversion-focused optimization</span>—proven across 
                  USA, UK, Canada, Australia, UAE, and Germany.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a Free SEO Audit</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>

              {/* Right - Audit Form */}
              <div className="animate-fade-in">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
                      Get a Free Ecommerce SEO Audit
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-center text-sm">
                      I'll analyze your store's current SEO performance, identify growth opportunities, and provide strategic recommendations—completely free.
                    </p>

                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-400"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <input
                        type="url"
                        placeholder="Website URL"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-400"
                        required
                      />
                      <textarea
                        placeholder="Tell me about your goals (optional)"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none placeholder:text-slate-400"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
                      >
                        Request Free Audit
                      </button>
                    </form>

                    <div className="flex flex-col items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                      <span>Or reach out directly:</span>
                      <div className="flex items-center gap-4">
                        <a
                          href="mailto:contact@moazhaider.com"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Email
                        </a>
                        <a
                          href="https://www.linkedin.com/in/moaz-haider/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">450+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Keywords Mapped</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">6</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">International Markets</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">187%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Avg Traffic Growth</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Ecommerce Focused</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 reveal bg-white dark:bg-slate-950">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Success Stories</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
                Ecommerce SEO Case Studies
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Real results from ecommerce stores across multiple platforms and markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="premium-card rounded-2xl p-8 relative overflow-hidden group"
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="text-3xl font-bold gradient-text mb-4">
                      {study.metric}
                    </div>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {study.platform}
                      </span>
                      <span className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                        {study.country}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-block px-8 py-4 premium-card rounded-full font-semibold hover:scale-105 transition-all"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>

        {/* About Moaz */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 reveal relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - About Content */}
              <div className="relative">
                {/* Accent line */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 text-left">
                  About Moaz Haider
                </h2>
                
                <div className="space-y-6">
                  <div className="premium-card rounded-2xl p-6 border-l-4 border-primary">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      I'm an ecommerce SEO consultant focused on delivering measurable growth for online stores. 
                      My approach combines strategic keyword mapping, technical SEO foundations, and content designed 
                      to build authority and drive revenue.
                    </p>
                  </div>
                  
                  <div className="premium-card rounded-2xl p-6 border-l-4 border-secondary">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Every ecommerce site is different. I start with comprehensive research to understand your market, 
                      competitive landscape, and growth opportunities—then build a custom roadmap prioritizing the 
                      highest-impact optimizations first.
                    </p>
                  </div>
                  
                  <div className="premium-card rounded-2xl p-6 border-l-4 border-accent">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      I work with stores across global markets including the USA, UK, Canada, Australia, UAE, and Germany, 
                      optimizing for both local and international search behavior.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Contact Moaz
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for projects</span>
                  </div>
                </div>
              </div>

              {/* Right - Social Media */}
              <div className="relative">
                <div className="premium-card rounded-3xl p-8 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-2xl -z-10" />
                  
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Let's Connect
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Follow my journey and connect on social media
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/moaz-haider/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-2 border-blue-500/20 hover:border-blue-500 hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            LinkedIn
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Connect professionally
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* X (Twitter) */}
                      <a
                        href="https://x.com/MoazHaider71"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-700/10 to-gray-900/10 border-2 border-gray-700/20 hover:border-gray-700 hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white group-hover:text-gray-700 transition-colors">
                            X (Twitter)
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Latest updates & insights
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/moaz.haider.14"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-2 border-blue-600/20 hover:border-blue-600 hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                            Facebook
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Follow for updates
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/moazhaider5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-600/10 border-2 border-pink-500/20 hover:border-pink-500 hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">
                            Instagram
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Behind the scenes
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Ecommerce SEO Services
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Comprehensive SEO services designed specifically for ecommerce websites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="premium-card rounded-2xl p-8 group relative overflow-hidden"
                >
                  {/* Icon background */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-block px-8 py-4 premium-card rounded-full font-semibold hover:scale-105 transition-all"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Platforms I Optimize
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Expert optimization for all major ecommerce platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform, index) => (
                <Link
                  key={index}
                  href={platform.href}
                  className="premium-card rounded-2xl p-6 group relative overflow-hidden"
                >
                  {/* Platform icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-primary/20">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {platform.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/platforms"
                className="inline-block px-8 py-4 premium-card rounded-full font-semibold hover:scale-105 transition-all"
              >
                Explore All Platforms →
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Ecommerce SEO for Industries
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Specialized strategies for your industry's unique search landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={industry.href}
                  className="premium-card rounded-2xl p-6 group relative overflow-hidden"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/industries"
                className="inline-block px-8 py-4 premium-card rounded-full font-semibold hover:scale-105 transition-all"
              >
                Explore All Industries →
              </Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                International Markets I Serve
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Proven ecommerce SEO strategies across major global markets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {countries.map((country, index) => (
                <Link
                  key={index}
                  href={country.href}
                  className="premium-card rounded-2xl p-8 text-center group relative overflow-hidden"
                >
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{country.flag}</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">
                    {country.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-block px-8 py-4 premium-card rounded-full font-semibold hover:scale-105 transition-all"
              >
                View All Locations →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Why Work With Me
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Strategic, transparent, results-driven ecommerce SEO
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usps.map((usp, index) => (
                <div
                  key={index}
                  className="premium-card rounded-2xl p-8 group relative overflow-hidden"
                >
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary border border-primary/20">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    {usp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                My Ecommerce SEO Process
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                A proven framework for sustainable ecommerce growth
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((process, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover:shadow-xl transition-all flex items-start gap-6"
                >
                  <div className="text-4xl font-bold gradient-text flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {process.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 reveal">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Client Feedback
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                What ecommerce leaders say about working together
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <svg
                    className="w-10 h-10 text-primary mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-slate-900 dark:text-white leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    — {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 reveal">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Ecommerce SEO FAQs
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Common questions about ecommerce SEO services and strategy
              </p>
            </div>

            <FAQ items={faqs} />
          </div>
        </section>

        {/* Contact Strip */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
              <div>
                <div className="text-sm text-slate-700 dark:text-slate-300 mb-1">Email</div>
                <a
                  href="mailto:contact@moazhaider.com"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  contact@moazhaider.com
                </a>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div>
                <div className="text-sm text-slate-700 dark:text-slate-300 mb-1">Phone</div>
                <a
                  href="tel:+923024698992"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  +92 302 4698992
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
