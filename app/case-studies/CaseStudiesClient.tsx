'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import { caseStudies, getFeaturedCaseStudies, type CaseStudy } from '@/content/case-studies'

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'impactful' | 'alphabetical'>('newest')

  const featuredStudies = getFeaturedCaseStudies()

  const filteredAndSortedStudies = useMemo(() => {
    let filtered = caseStudies

    // Apply type filter
    if (activeFilter !== 'all') {
      if (['industry', 'platform', 'technical', 'content', 'international'].includes(activeFilter)) {
        filtered = filtered.filter((study) => study.type === activeFilter)
      } else if (activeFilter === 'traffic') {
        filtered = filtered.filter((study) =>
          study.outcomes.some((outcome) => outcome.toLowerCase().includes('traffic'))
        )
      } else if (activeFilter === 'rankings') {
        filtered = filtered.filter((study) =>
          study.outcomes.some((outcome) => outcome.toLowerCase().includes('ranking') || outcome.toLowerCase().includes('position'))
        )
      } else if (activeFilter === 'technical-fixes') {
        filtered = filtered.filter((study) =>
          study.type === 'technical' || study.tags.some((tag) => tag.toLowerCase().includes('technical'))
        )
      }
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(query) ||
          study.summary.toLowerCase().includes(query) ||
          study.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          study.problem.toLowerCase().includes(query) ||
          study.approach.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    const sorted = [...filtered]
    if (sortBy === 'newest') {
      sorted.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    }

    return sorted
  }, [activeFilter, searchQuery, sortBy])

  const faqs = [
    {
      question: 'What metrics do you track in ecommerce SEO case studies?',
      answer: 'I track organic traffic growth, keyword rankings and positions, indexation improvements, Core Web Vitals scores, crawl efficiency, conversion rates, and revenue attribution where applicable. Each case study focuses on metrics most relevant to the specific challenges addressed.',
    },
    {
      question: 'How long does it take to see results in ecommerce SEO?',
      answer: 'Ecommerce SEO typically shows measurable results within 3-6 months. Technical fixes can show improvements faster (2-8 weeks), while content and authority-building strategies may take 4-6 months. Timeline varies based on site authority, competition, and implementation speed.',
    },
    {
      question: 'Do you share client names in case studies?',
      answer: 'Most case studies protect client confidentiality and focus on strategies, challenges, and outcomes rather than brand names. Some clients approve named case studies, which are clearly identified. All metrics shown are real results from actual projects.',
    },
    {
      question: 'Can results vary by platform or industry?',
      answer: 'Yes, results vary significantly based on platform (Shopify, WooCommerce, Magento, etc.), industry competition, current site authority, catalog size, and market dynamics. Each case study provides context about these variables to set realistic expectations.',
    },
    {
      question: 'What is included in a free SEO audit?',
      answer: 'A free SEO audit includes technical analysis (crawl issues, indexation, site speed), on-page review (meta tags, content, structure), competitive gap analysis, and prioritized recommendations. It provides a roadmap for immediate improvements and long-term strategy.',
    },
    {
      question: 'Do you work with international ecommerce stores?',
      answer: 'Yes, I specialize in international ecommerce SEO across markets including USA, UK, Canada, Australia, UAE, and Germany. Services include hreflang implementation, market-specific keyword research, and localized optimization strategies.',
    },
    {
      question: 'How do you measure SEO success for ecommerce?',
      answer: 'SEO success for ecommerce is measured through organic traffic growth to product and category pages, keyword rankings for commercial intent terms, indexation health, site speed improvements, conversion rate trends, and ultimately revenue attribution from organic channels.',
    },
    {
      question: 'What types of ecommerce SEO case studies do you have?',
      answer: 'Case studies cover industry-specific strategies (fashion, electronics, beauty, jewelry, furniture, health), platform optimizations (Shopify, WooCommerce, Magento, BigCommerce), technical fixes (crawl budget, Core Web Vitals, schema), content strategies, and international SEO implementations.',
    },
  ]

  return (
    <main>
      {/* SECTION 1 - HERO */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          paddingTop: '8rem',
          paddingBottom: '5rem',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-[60fr_40fr] gap-12 items-center">
            {/* Left Column */}
            <div>
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{
                  background: 'var(--accent-light)',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Proof & Results
              </div>

              <h1
                className="mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Ecommerce SEO Case Studies
              </h1>

              <p
                className="mb-8"
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '42rem',
                }}
              >
                Real outcomes from strategic SEO execution. Explore detailed case studies showing growth results, technical fixes, and content strategies across ecommerce platforms and industries.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#case-studies-grid"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'var(--shadow-glow)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 40px var(--glow-purple)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
                  }}
                >
                  Explore Case Studies
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'var(--surface)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Discuss Your Store
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Data Visual */}
            <div className="relative hidden lg:block">
              <div
                style={{
                  position: 'relative',
                  height: '400px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {/* Growth Chart Visual */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
                  {[40, 55, 48, 70, 65, 85, 78, 95].map((height, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${height}%`,
                        background: `linear-gradient(180deg, var(--accent) 0%, var(--accent-2) 100%)`,
                        borderRadius: '4px 4px 0 0',
                        opacity: 0.8,
                        animation: `slideUp 0.6s ease-out ${i * 0.1}s backwards`,
                      }}
                    />
                  ))}
                </div>

                {/* Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '1rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>+127%</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Avg Traffic Growth</div>
                  </div>
                  <div
                    style={{
                      padding: '1rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-2)' }}>3-6mo</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Result Timeline</div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, var(--glow-purple) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 0.8;
            }
          }
        `}</style>
      </section>

      {/* SECTION 2 - FILTER BAR */}
      <section
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 40,
          background: 'var(--bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 0',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-secondary)', marginRight: '0.5rem' }}>
                Filter:
              </span>
              {[
                { label: 'All', value: 'all' },
                { label: 'Industry', value: 'industry' },
                { label: 'Platform', value: 'platform' },
                { label: 'Technical', value: 'technical' },
                { label: 'Content', value: 'content' },
                { label: 'International', value: 'international' },
                { label: 'Traffic Growth', value: 'traffic' },
                { label: 'Rankings', value: 'rankings' },
                { label: 'Technical Fixes', value: 'technical-fixes' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid',
                    borderColor: activeFilter === filter.value ? 'var(--accent)' : 'var(--border)',
                    background: activeFilter === filter.value ? 'var(--accent-light)' : 'var(--surface)',
                    color: activeFilter === filter.value ? 'var(--accent)' : 'var(--text)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter.value) {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter.value) {
                      e.currentTarget.style.borderColor = 'var(--border)'
                    }
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 3rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--text)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                />
                <svg
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    color: 'var(--text-secondary)',
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--text)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="newest">Newest First</option>
                <option value="impactful">Most Impactful</option>
                <option value="alphabetical">A–Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FEATURED CASE STUDIES */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              Featured Case Studies
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '48rem', margin: '0 auto' }}>
              Top proven results showcasing strategic SEO execution across ecommerce platforms and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <div
                key={study.slug}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}
                >
                  {study.type}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.3',
                  }}
                >
                  {study.title}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  {study.summary.slice(0, 120)}...
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {study.outcomes.map((outcome, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: 'var(--accent-light)',
                        border: '1px solid var(--accent)',
                        borderRadius: 'var(--radius)',
                        fontSize: '0.8125rem',
                        fontWeight: '600',
                        color: 'var(--accent)',
                      }}
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

              <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    opacity: 0.5,
                  }}
                >
                  Coming soon
                </div>

                {/* Decorative Corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle at top right, var(--glow-purple) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
      {/* For brevity, I'm including a reference to where the rest continues */}
      {/* All remaining sections (4-8) would go here with the same structure as before */}
      
      {/* SECTION 4 - ALL CASE STUDIES GRID */}
      <section
        id="case-studies-grid"
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--surface)',
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              All Case Studies
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              {filteredAndSortedStudies.length} {filteredAndSortedStudies.length === 1 ? 'result' : 'results'} found
            </p>
          </div>

          {filteredAndSortedStudies.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                No case studies match your filters. Try adjusting your search.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedStudies.map((study) => (
                <div
                  key={study.slug}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.boxShadow = 'var(--shadow)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Category Tag */}
                  <div
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      padding: '0.25rem 0.75rem',
                      background: 'var(--accent-light)',
                      border: '1px solid var(--accent)',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--accent)',
                      marginBottom: '1rem',
                    }}
                  >
                    {study.type}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                      lineHeight: '1.3',
                    }}
                  >
                    {study.title}
                  </h3>

                  {/* Problem & Approach */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                        Problem:
                      </span>{' '}
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text)' }}>{study.problem}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                        Approach:
                      </span>{' '}
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text)' }}>{study.approach}</span>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem', flex: 1 }}>
                    {study.outcomes.slice(0, 3).map((outcome, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.25rem 0.625rem',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      opacity: 0.5,
                      marginTop: 'auto',
                    }}
                  >
                    Coming soon
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 - MY APPROACH TO RESULTS */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              My Approach to Results
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '48rem', margin: '0 auto' }}>
              A systematic methodology for achieving measurable SEO outcomes.
            </p>
          </div>

          {/* Timeline Visual */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              position: 'relative',
            }}
          >
            {[
              {
                step: '01',
                title: 'Baseline',
                description: 'Audit current performance, traffic, rankings, and technical health.',
              },
              {
                step: '02',
                title: 'Diagnosis',
                description: 'Identify issues, opportunities, and competitive gaps.',
              },
              {
                step: '03',
                title: 'Strategy',
                description: 'Develop roadmap with prioritized recommendations.',
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Implement technical fixes, content, and optimization.',
              },
              {
                step: '05',
                title: 'Measurement',
                description: 'Track metrics, iterate, and scale what works.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    border: '2px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - CROSS-LINKING BRIDGE - Continuing... */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--surface)',
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              Explore SEO Services & Specializations
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              Discover strategic SEO services, platform expertise, and industry specializations.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1.5rem',
              }}
            >
              SEO Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Ecommerce SEO Audit', href: '/services/ecommerce-seo-audit' },
                { name: 'Technical SEO', href: '/services/technical-ecommerce-seo' },
                { name: 'Product Page SEO', href: '/services/product-page-seo' },
                { name: 'Category Page SEO', href: '/services/category-page-seo' },
                { name: 'Keyword Research', href: '/services/ecommerce-keyword-research' },
                { name: 'Content Strategy', href: '/services/ecommerce-content-strategy' },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)' }}>{service.name}</span>
                  <svg width="16" height="16" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-12">
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1.5rem',
              }}
            >
              Platform Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Shopify SEO', href: '/platforms/shopify-seo' },
                { name: 'WooCommerce SEO', href: '/platforms/woocommerce-seo' },
                { name: 'Magento SEO', href: '/platforms/magento-seo' },
                { name: 'BigCommerce SEO', href: '/platforms/bigcommerce-seo' },
                { name: 'Wix SEO', href: '/platforms/wix-seo' },
                { name: 'Custom Ecommerce SEO', href: '/platforms/custom-ecommerce-seo' },
              ].map((platform) => (
                <Link
                  key={platform.href}
                  href={platform.href}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)' }}>{platform.name}</span>
                  <svg width="16" height="16" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1.5rem',
              }}
            >
              Industry Specializations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Fashion Ecommerce SEO', href: '/industries/fashion-ecommerce-seo' },
                { name: 'Electronics SEO', href: '/industries/electronics-ecommerce-seo' },
                { name: 'Beauty & Skincare SEO', href: '/industries/beauty-skincare-ecommerce-seo' },
                { name: 'Jewelry & Accessories SEO', href: '/industries/jewelry-accessories-ecommerce-seo' },
                { name: 'Furniture & Home Decor SEO', href: '/industries/furniture-home-decor-seo' },
                { name: 'Health Supplements SEO', href: '/industries/health-supplements-ecommerce-seo' },
              ].map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)' }}>{industry.name}</span>
                  <svg width="16" height="16" fill="none" stroke="var(--accent)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              Common questions about ecommerce SEO case studies and results.
            </p>
          </div>

          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'var(--surface)',
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(3rem, 5vw, 4rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}
              >
                Want a strategy like these results?
              </h2>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  maxWidth: '40rem',
                  margin: '0 auto 2rem',
                }}
              >
                Let's discuss your store's goals and create a tailored SEO roadmap to drive measurable growth.
              </p>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2.5rem',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius)',
                  fontWeight: '600',
                  fontSize: '1.0625rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: 'var(--shadow-glow)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 0 40px var(--glow-purple)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
                }}
              >
                Get a Free Audit
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Background Decoration */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, var(--glow-purple) 0%, transparent 70%)',
                opacity: 0.3,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
