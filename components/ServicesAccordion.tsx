'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Ecommerce SEO Audit',
    tagline: 'Uncover what\'s holding your store back',
    description: 'A comprehensive, data-driven audit of your online store\'s technical SEO health, keyword positioning, and competitor landscape. I analyze everything from crawl efficiency and indexation to Core Web Vitals, site architecture, and internal linking structure — giving you a clear, prioritized roadmap to higher rankings and more organic revenue.',
    deliverables: ['Technical SEO Health Report', 'Keyword Gap Analysis', 'Competitor Benchmarking', 'Prioritized Action Plan'],
    link: '/services/ecommerce-seo-audit',
  },
  {
    num: '02',
    title: 'Ecommerce Keyword Research',
    tagline: 'Target the keywords your buyers actually search',
    description: 'Strategic keyword research mapped to your specific product catalog, category structure, and buyer journey stages. I identify high-intent commercial keywords, informational opportunities, and long-tail variations that your competitors are missing — so every page on your store targets the right search queries with the right content.',
    deliverables: ['Buyer Intent Keyword Map', 'Category Keyword Strategy', 'Long-Tail Opportunity Report', 'Search Volume & Difficulty Data'],
    link: '/services/ecommerce-keyword-research',
  },
  {
    num: '03',
    title: 'Product Page SEO',
    tagline: 'Turn product pages into ranking machines',
    description: 'Optimize your product pages to rank for transactional keywords and convert organic visitors into customers. I implement product schema markup for rich snippets, write conversion-focused meta titles and descriptions, optimize product content for search intent, and structure your pages to maximize both rankings and add-to-cart rates.',
    deliverables: ['Product Schema Markup', 'Rich Snippet Optimization', 'Conversion-Focused Copy', 'Image & Alt Text Strategy'],
    link: '/services/product-page-seo',
  },
  {
    num: '04',
    title: 'Technical SEO for Ecommerce',
    tagline: 'Fix the technical issues killing your rankings',
    description: 'Ecommerce stores face unique technical SEO challenges that general websites don\'t — faceted navigation creating duplicate content, JavaScript rendering issues, massive product catalogs straining crawl budget, and complex URL structures confusing search engines. I diagnose and fix these platform-specific issues to ensure Google can efficiently crawl, index, and rank every important page on your store.',
    deliverables: ['Core Web Vitals Optimization', 'Crawl Budget Management', 'Faceted Navigation Fixes', 'Site Architecture Audit'],
    link: '/services/technical-ecommerce-seo',
  },
  {
    num: '05',
    title: 'Category Page SEO',
    tagline: 'Capture high-volume commercial keywords',
    description: 'Category and collection pages are where the highest-volume, most commercially valuable keywords live. I optimize your category page structure, add keyword-targeted content that doesn\'t hurt UX, implement proper internal linking hierarchies, and ensure your category taxonomy aligns with how your customers actually search — driving significantly more qualified organic traffic.',
    deliverables: ['Category Content Strategy', 'Internal Linking Architecture', 'Filter & Facet Optimization', 'Taxonomy Alignment'],
    link: '/services/category-page-seo',
  },
  {
    num: '06',
    title: 'Ecommerce Content Strategy',
    tagline: 'Build topical authority that drives sales',
    description: 'A strategic content plan designed specifically for ecommerce — targeting informational queries that lead to purchases, building topical authority in your niche, and creating buying guides, comparison content, and educational resources that capture organic traffic at every stage of the customer journey. Content that doesn\'t just rank — it sells.',
    deliverables: ['Content Calendar & Roadmap', 'Buying Guide Templates', 'Blog & Resource Strategy', 'Topical Authority Map'],
    link: '/services/ecommerce-content-strategy',
  },
]

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      {services.map((service, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="group"
            style={{
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center gap-4 md:gap-6 py-6 md:py-8 text-left transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span
                className="text-sm font-mono font-bold flex-shrink-0 w-10 text-right"
                style={{ color: isOpen ? 'var(--accent)' : 'var(--muted)' }}
              >
                {service.num}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl md:text-2xl font-bold transition-colors duration-200"
                  style={{ color: isOpen ? 'var(--accent)' : 'var(--text)' }}
                >
                  {service.title}
                </h3>
                {!isOpen && (
                  <p className="text-sm mt-1 hidden md:block" style={{ color: 'var(--muted)' }}>
                    {service.tagline}
                  </p>
                )}
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: isOpen ? 'var(--accent)' : 'var(--surface-alt)',
                  border: isOpen ? 'none' : '1px solid var(--border)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke={isOpen ? '#ffffff' : 'var(--text)'}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
              }}
            >
              <div className="min-h-0">
                <div className="pb-8 md:pb-10 pl-14 md:pl-16 pr-4">
                  <p
                    className="text-base leading-relaxed mb-6 max-w-3xl"
                    style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{
                          background: 'var(--accent-light)',
                          color: 'var(--accent)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--accent)' }}
                  >
                    Learn more about {service.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
