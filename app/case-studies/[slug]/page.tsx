import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import InteractiveLink from './InteractiveLink'
import FAQAccordion from '@/components/FAQAccordion'
import { caseStudies, getCaseStudyBySlug, getAllCaseStudySlugs } from '@/content/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.title} | Ecommerce SEO Case Study – Moaz Haider`,
    description: study.summary,
    alternates: {
      canonical: `https://moazhaider.com/case-studies/${study.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${study.title} | Ecommerce SEO Case Study`,
      description: study.summary,
      url: `https://moazhaider.com/case-studies/${study.slug}`,
      type: 'article',
      siteName: 'Moaz Haider',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Ecommerce SEO Case Study`,
      description: study.summary,
    },
  }
}

// Helper function to get case study FAQs
function getCaseStudyFAQs(study: any) {
  // Use case study-specific FAQs if available
  if (study.faqs && study.faqs.length > 0) {
    return study.faqs
  }

  // Otherwise use base FAQs
  const baseFAQs = [
    {
      question: `What makes this ${study.type} SEO case study relevant to my business?`,
      answer: `This case study demonstrates proven strategies for ${
        study.type === 'industry'
          ? 'industry-specific'
          : study.type === 'platform'
          ? 'platform-specific'
          : study.type === 'international'
          ? 'multi-market'
          : study.type
      } ecommerce SEO challenges. The methodologies shown are adaptable to similar business contexts and can be customized based on your specific goals, competition level, and current site authority.`,
    },
    {
      question: 'How long does it typically take to see results like these?',
      answer: `SEO is a long-term investment. Most significant improvements take 3-6 months to materialize, with initial momentum typically visible within 60-90 days. Timeline varies based on factors like site age, existing authority, competition intensity, technical foundation, and implementation quality. Projects with strong technical foundations often show faster results.`,
    },
    {
      question: `Can these strategies work for my ecommerce platform?`,
      answer: `Yes. While this case study focuses on ${
        study.tags.find((t: string) => t.toLowerCase().includes('shopify') || t.toLowerCase().includes('magento') || t.toLowerCase().includes('woo')) || 'specific platforms'
      }, the core SEO principles apply universally across Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. Implementation tactics may differ slightly per platform, but the strategic approach remains consistent.`,
    },
    {
      question: `What kind of results should I realistically expect?`,
      answer: `Results vary significantly based on your starting point, market competition, site authority, and implementation quality. The outcomes shown represent actual project results but are not typical or guaranteed. Every business has unique challenges and opportunities. Schedule a free audit to get personalized projections based on your specific situation.`,
    },
  ]

  return baseFAQs
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)

  if (!study) {
    notFound()
  }

  const faqs = getCaseStudyFAQs(study)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://moazhaider.com/case-studies/${study.slug}#article`,
        headline: study.title,
        description: study.summary,
        datePublished: study.lastUpdated,
        dateModified: study.lastUpdated,
        author: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
        publisher: {
          '@type': 'Person',
          name: 'Moaz Haider',
          url: 'https://moazhaider.com',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://moazhaider.com/case-studies/${study.slug}#breadcrumb`,
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
            name: 'Case Studies',
            item: 'https://moazhaider.com/case-studies',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: study.title,
            item: `https://moazhaider.com/case-studies/${study.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://moazhaider.com/case-studies/${study.slug}#faq`,
        mainEntity: faqs.map((faq: { question: string; answer: string }) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  // Get related case studies (same type)
  const relatedStudies = caseStudies
    .filter((s) => s.type === study.type && s.slug !== study.slug)
    .slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* Breadcrumb */}
        <section style={{ padding: '2rem 0 1rem', background: 'var(--bg)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', paddingLeft: '0', paddingRight: '0' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ color: 'var(--text-secondary)' }}>/</span>
              <Link href="/case-studies" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Case Studies
              </Link>
              <span style={{ color: 'var(--text-secondary)' }}>/</span>
              <span style={{ color: 'var(--text)' }}>{study.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section style={{ padding: '3rem 0 4rem', background: 'var(--bg)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            {/* Type Badge */}
            <div
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent)',
                borderRadius: 'var(--radius)',
                fontSize: '0.8125rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}
            >
              {study.type} Case Study
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              {study.title}
            </h1>

            {/* Summary */}
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
              }}
            >
              {study.summary}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {study.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.375rem 0.875rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta Info */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div>
                <strong style={{ color: 'var(--text)' }}>Last Updated:</strong>{' '}
                {new Date(study.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
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
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                  }}
                >
                  ⚠️
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                  }}
                >
                  The Challenge
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  {study.problem}
                </p>
              </div>

              {/* Approach */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
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
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                  }}
                >
                  💡
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                  }}
                >
                  The Approach
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  {study.approach}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '2rem',
                textAlign: 'center',
              }}
            >
              Results Achieved
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {study.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '2rem 1.5rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {outcome.match(/[+\d%.,-]+/)?.[0] || '✓'}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {outcome.replace(/[+\d%.,-]+/, '').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Context */}
        {study.clientContext && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                Context
              </h2>
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                  }}
                >
                  {study.clientContext}
                </p>
                {(study.platform || study.timeline) && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '2rem',
                      marginTop: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border)',
                      fontSize: '0.9375rem',
                    }}
                  >
                    {study.platform && (
                      <div>
                        <strong style={{ color: 'var(--text-secondary)' }}>Platform: </strong>
                        <span style={{ color: 'var(--text)' }}>{study.platform}</span>
                      </div>
                    )}
                    {study.timeline && (
                      <div>
                        <strong style={{ color: 'var(--text-secondary)' }}>Timeline: </strong>
                        <span style={{ color: 'var(--text)' }}>{study.timeline}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Challenges */}
        {study.challenges && study.challenges.length > 0 && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  textAlign: 'center',
                }}
              >
                Key Challenges
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {study.challenges.map((challenge: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      padding: '2rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderLeft: '4px solid var(--accent)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {challenge.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Strategy Pillars */}
        {study.strategyPillars && study.strategyPillars.length > 0 && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  textAlign: 'center',
                }}
              >
                Strategic Approach
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                {study.strategyPillars.map((pillar: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      padding: '2rem',
                      background: 'var(--card)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          minWidth: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '1.125rem',
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'var(--text)',
                            marginBottom: '0.75rem',
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Execution Steps */}
        {study.executionSteps && study.executionSteps.length > 0 && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  textAlign: 'center',
                }}
              >
                Execution Timeline
              </h2>
              <div style={{ position: 'relative' }}>
                {/* Timeline line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '19px',
                    top: '40px',
                    bottom: '40px',
                    width: '2px',
                    background: 'var(--border)',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {study.executionSteps.map((step: any, idx: number) => (
                    <div key={idx} style={{ position: 'relative', paddingLeft: '60px' }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '0',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          border: '4px solid var(--background)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '0.875rem',
                          zIndex: 1,
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div
                        style={{
                          padding: '1.5rem',
                          background: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-lg)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.8125rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: 'var(--accent)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {step.phase}
                        </div>
                        <h3
                          style={{
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            color: 'var(--text)',
                            marginBottom: '0.75rem',
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.9375rem',
                            lineHeight: '1.7',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Key Takeaways */}
        {study.keyTakeaways && study.keyTakeaways.length > 0 && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  textAlign: 'center',
                }}
              >
                Key Takeaways
              </h2>
              <div
                style={{
                  padding: '2.5rem',
                  background: 'var(--card)',
                  border: '2px solid var(--accent)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {study.keyTakeaways.map((takeaway: string, idx: number) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          minWidth: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '700',
                          marginTop: '2px',
                        }}
                      >
                        ✓
                      </div>
                      <p
                        style={{
                          flex: 1,
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text)',
                        }}
                      >
                        {takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Learnings */}
        {study.learnings && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  textAlign: 'center',
                }}
              >
                What We Learned
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.learnings.whatWorked && study.learnings.whatWorked.length > 0 && (
                  <div
                    style={{
                      padding: '2rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#10b981',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>✓</span> What Worked
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                      {study.learnings.whatWorked.map((item: string, idx: number) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.9375rem',
                            lineHeight: '1.6',
                            color: 'var(--text-secondary)',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: '0',
                              color: '#10b981',
                              fontWeight: '700',
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {study.learnings.whatDidnt && study.learnings.whatDidnt.length > 0 && (
                  <div
                    style={{
                      padding: '2rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#f59e0b',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>⚠</span> What Didn't Work
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                      {study.learnings.whatDidnt.map((item: string, idx: number) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.9375rem',
                            lineHeight: '1.6',
                            color: 'var(--text-secondary)',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: '0',
                              color: '#f59e0b',
                              fontWeight: '700',
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {study.learnings.surprises && study.learnings.surprises.length > 0 && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '2rem',
                    background: 'var(--card)',
                    border: '2px dashed var(--accent)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>💡</span> Unexpected Insights
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                    {study.learnings.surprises.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--accent)',
                            fontWeight: '700',
                          }}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Related Links */}
        {(study.relatedLinks.services || study.relatedLinks.platforms || study.relatedLinks.industries) && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}
              >
                Related Resources
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {study.relatedLinks.services && study.relatedLinks.services.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '1rem',
                      }}
                    >
                      Related Services
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {study.relatedLinks.services.map((link, idx) => (
                        <InteractiveLink
                          key={idx}
                          href={link}
                          style={{
                            padding: '0.75rem 1.25rem',
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            fontSize: '0.9375rem',
                            fontWeight: '600',
                            color: 'var(--text)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                          hoverStyle={{
                            borderColor: 'var(--accent)',
                            transform: 'translateX(4px)',
                          }}
                        >
                          {link.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </InteractiveLink>
                      ))}
                    </div>
                  </div>
                )}

                {study.relatedLinks.platforms && study.relatedLinks.platforms.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '1rem',
                      }}
                    >
                      Related Platforms
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {study.relatedLinks.platforms.map((link, idx) => (
                        <InteractiveLink
                          key={idx}
                          href={link}
                          style={{
                            padding: '0.75rem 1.25rem',
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            fontSize: '0.9375rem',
                            fontWeight: '600',
                            color: 'var(--text)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                          hoverStyle={{
                            borderColor: 'var(--accent)',
                            transform: 'translateX(4px)',
                          }}
                        >
                          {link.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </InteractiveLink>
                      ))}
                    </div>
                  </div>
                )}

                {study.relatedLinks.industries && study.relatedLinks.industries.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '1rem',
                      }}
                    >
                      Related Industries
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {study.relatedLinks.industries.map((link, idx) => (
                        <InteractiveLink
                          key={idx}
                          href={link}
                          style={{
                            padding: '0.75rem 1.25rem',
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            fontSize: '0.9375rem',
                            fontWeight: '600',
                            color: 'var(--text)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                          hoverStyle={{
                            borderColor: 'var(--accent)',
                            transform: 'translateX(4px)',
                          }}
                        >
                          {link.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </InteractiveLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '2.5rem',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--surface)' }}>
            <div style={{ width: '100%', padding: 0 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}
              >
                More {study.type.charAt(0).toUpperCase() + study.type.slice(1)} Case Studies
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedStudies.map((related) => (
                  <InteractiveLink
                    key={related.slug}
                    href={`/case-studies/${related.slug}`}
                    style={{
                      display: 'block',
                      padding: '1.5rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    hoverStyle={{
                      transform: 'translateY(-4px)',
                      borderColor: 'var(--accent)',
                      boxShadow: 'var(--shadow)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '0.75rem',
                        lineHeight: '1.3',
                      }}
                    >
                      {related.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      {related.summary.slice(0, 80)}...
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {related.outcomes.slice(0, 2).map((outcome, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.25rem 0.625rem',
                            background: 'var(--accent-light)',
                            border: '1px solid var(--accent)',
                            borderRadius: 'var(--radius)',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: 'var(--accent)',
                          }}
                        >
                          {outcome.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </InteractiveLink>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg)' }}>
          <div style={{ width: '100%', padding: 0 }}>
            <div
              style={{
                padding: 'clamp(3rem, 5vw, 4rem)',
                background: 'var(--card)',
                border: '2px solid var(--accent)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}
              >
                Ready to achieve similar results?
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
                Let's discuss your ecommerce store and create a strategic SEO roadmap tailored to your goals.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <InteractiveLink
                  href="/contact"
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
                  hoverStyle={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 0 40px var(--glow-purple)',
                  }}
                >
                  Get a Free Audit
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </InteractiveLink>
                <InteractiveLink
                  href="/case-studies"
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
                  hoverStyle={{
                    borderColor: 'var(--accent)',
                    transform: 'translateY(-2px)',
                  }}
                >
                  View All Case Studies
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </InteractiveLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
