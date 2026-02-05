'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ, { FAQItem } from '@/components/FAQ'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
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

  const faqs: FAQItem[] = [
    {
      question: 'How long does ecommerce SEO take to show results?',
      answer: 'Most ecommerce stores see initial improvements in 2-3 months, with significant growth typically occurring between months 4-6. Timeline depends on your site\'s current technical health, competitive landscape, and implementation speed.',
    },
    {
      question: 'What makes your approach different?',
      answer: 'I focus exclusively on ecommerce, understanding the unique challenges of product catalogs, faceted navigation, and transactional intent. Every strategy is built around revenue, not just traffic.',
    },
    {
      question: 'Which platforms do you work with?',
      answer: 'I specialize in Shopify, WooCommerce, Magento, BigCommerce, and custom ecommerce platforms. Each platform has unique SEO considerations I\'ve mastered through years of focused work.',
    },
    {
      question: 'Do you work with international markets?',
      answer: 'Yes. I have extensive experience optimizing stores for USA, UK, Canada, Australia, UAE, and Germany. I understand regional search behavior, local competition, and market-specific optimization strategies.',
    },
    {
      question: 'How do we get started?',
      answer: 'Start with a free SEO audit. I\'ll analyze your site, identify opportunities, and provide strategic recommendations. If it\'s a good fit, I\'ll create a custom proposal outlining scope, timeline, and investment.',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section - Editorial Asymmetrical */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-accent to-transparent opacity-60" />
        
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left - Main Content */}
            <div className="lg:col-span-7 space-y-8 reveal">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Available for select projects
                </div>
                
                <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary">
                  Ecommerce SEO
                  <br />
                  <span className="text-accent">Consultant</span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed font-light">
                I help online stores dominate organic search and scale revenue through 
                strategic SEO—proven across 6 international markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-all duration-300"
                >
                  Get Free SEO Audit
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border rounded-full font-semibold text-text-primary hover:border-accent transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right - Metrics Grid */}
            <div className="lg:col-span-5 reveal" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-surface border border-border rounded-2xl hover:border-accent transition-colors">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-text-secondary">Projects Delivered</div>
                </div>
                <div className="p-8 bg-surface border border-border rounded-2xl hover:border-accent transition-colors">
                  <div className="text-4xl font-bold text-accent mb-2">6</div>
                  <div className="text-sm text-text-secondary">Countries Served</div>
                </div>
                <div className="p-8 bg-surface border border-border rounded-2xl hover:border-accent transition-colors col-span-2">
                  <div className="text-4xl font-bold text-accent mb-2">187%</div>
                  <div className="text-sm text-text-secondary">Average Revenue Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Offset Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-32 reveal">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="text-sm font-medium text-accent mb-4">CORE SERVICES</div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              What I Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Ecommerce SEO Strategy', desc: 'Custom roadmaps aligned with your business goals and competitive landscape.' },
              { title: 'Technical SEO', desc: 'Comprehensive audits and implementation for crawlability and Core Web Vitals.' },
              { title: 'Keyword Research', desc: 'Strategic targeting across categories, products, and content.' },
              { title: 'On-Page SEO', desc: 'Optimized product pages and category structures that convert.' },
              { title: 'International SEO', desc: 'Hreflang implementation and localized strategies for global expansion.' },
              { title: 'SEO Audits', desc: 'Detailed site analysis with prioritized action plans.' },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 bg-surface border border-border rounded-2xl hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Explore all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies - Featured Work */}
      <section className="px-6 md:px-12 lg:px-20 py-32 bg-surface reveal">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="text-sm font-medium text-accent mb-4">PROVEN RESULTS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary">
              Case Studies
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { metric: '+187% Revenue', platform: 'Shopify', market: 'USA', desc: 'Fashion brand scaled from 12K to 78K monthly sessions through category optimization.' },
              { metric: '+240% Rankings', platform: 'WooCommerce', market: 'UK', desc: 'Mapped 450+ keywords to optimized product and category pages.' },
              { metric: '+312% Keywords', platform: 'Magento', market: 'Canada', desc: 'Comprehensive technical audit delivered triple-digit growth.' },
              { metric: '+198% Revenue', platform: 'Custom', market: 'UAE', desc: 'International SEO and Arabic content for Middle East expansion.' },
            ].map((study, i) => (
              <div
                key={i}
                className="p-10 bg-background border-l-4 border-accent rounded-2xl hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl font-bold text-accent">{study.metric}</div>
                  <div className="text-sm text-text-secondary">{study.platform} · {study.market}</div>
                </div>
                <p className="text-text-secondary leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms - Horizontal Scroll */}
      <section className="py-32 reveal">
        <div className="px-6 md:px-12 lg:px-20 mb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-sm font-medium text-accent mb-4">PLATFORM EXPERTISE</div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary">
              Platforms I Master
            </h2>
          </div>
        </div>

        <div className="flex gap-6 px-6 md:px-12 lg:px-20 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { name: 'Shopify', desc: 'Maximum organic visibility' },
            { name: 'WooCommerce', desc: 'WordPress ecommerce SEO' },
            { name: 'Magento', desc: 'Enterprise-level optimization' },
            { name: 'BigCommerce', desc: 'Strategic SEO at scale' },
            { name: 'Wix', desc: 'Ecommerce store optimization' },
            { name: 'Custom', desc: 'Tailored platform SEO' },
          ].map((platform, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 p-8 bg-surface border border-border rounded-2xl hover:border-accent transition-colors cursor-pointer"
            >
              <div className="text-2xl font-bold text-text-primary mb-2">{platform.name}</div>
              <div className="text-sm text-text-secondary">{platform.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process - Timeline */}
      <section className="px-6 md:px-12 lg:px-20 py-32 bg-surface reveal">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="text-sm font-medium text-accent mb-4">HOW IT WORKS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary">
              My Process
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { num: '01', title: 'Audit & Discovery', desc: 'Comprehensive technical audit, competitive analysis, and opportunity identification.' },
              { num: '02', title: 'Strategy & Mapping', desc: 'In-depth keyword research with strategic mapping to revenue-driving pages.' },
              { num: '03', title: 'Implementation', desc: 'Execute technical fixes, on-page optimization, and internal linking.' },
              { num: '04', title: 'Content & Authority', desc: 'Build topical authority through strategic content and link-worthy resources.' },
              { num: '05', title: 'Reporting & Iteration', desc: 'Monthly performance tracking and continuous optimization.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <div className="text-6xl font-bold text-accent opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Clean Editorial */}
      <section className="px-6 md:px-12 lg:px-20 py-32 reveal">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-16">
            <div className="text-sm font-medium text-accent mb-4">QUESTIONS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary">
              Frequently Asked
            </h2>
          </div>

          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA - Invitation */}
      <section className="px-6 md:px-12 lg:px-20 py-32 bg-surface reveal">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary">
              Let's Build Something
              <br />
              <span className="text-accent">Exceptional</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Ready to transform your ecommerce store's organic performance?
              Let's start with a free SEO audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent-hover transition-all"
              >
                Get Your Free Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:contact@moazhaider.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-border rounded-full font-semibold text-text-primary hover:border-accent transition-all"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                name: 'Moaz Haider',
                url: 'https://www.moazhaider.com',
                jobTitle: 'Ecommerce SEO Consultant',
                description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores across international markets.',
                email: 'contact@moazhaider.com',
                sameAs: [
                  'https://www.linkedin.com/in/moaz-haider/',
                  'https://www.facebook.com/moaz.haider.14',
                  'https://x.com/MoazHaider71',
                  'https://www.instagram.com/moazhaider5/'
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
              },
              {
                '@type': 'FAQPage',
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
    </main>
  )
}
