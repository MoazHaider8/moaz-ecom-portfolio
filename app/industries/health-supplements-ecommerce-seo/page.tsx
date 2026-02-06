'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export default function HealthSupplementsSEOPage() {
  
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Health & Supplements Ecommerce SEO | Responsible SEO for Supplement Brands – Moaz Haider'
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMetaTag('description', 'Health and supplements ecommerce SEO focused on trust, compliance, and long-term growth—built for responsible supplement brands.')
    updateMetaTag('og:title', 'Health & Supplements Ecommerce SEO | Responsible SEO for Supplement Brands – Moaz Haider', true)
    updateMetaTag('og:description', 'Health and supplements ecommerce SEO focused on trust, compliance, and long-term growth—built for responsible supplement brands.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries/health-supplements-ecommerce-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Health & Supplements Ecommerce SEO | Responsible SEO for Supplement Brands – Moaz Haider')
    updateMetaTag('twitter:description', 'Health and supplements ecommerce SEO focused on trust, compliance, and long-term growth—built for responsible supplement brands.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/health-supplements-ecommerce-seo')
  }, [])
  
  // FAQs for schema and display
  const faqs = [
    {
      question: 'Is supplements ecommerce SEO risky?',
      answer: 'Supplements SEO carries inherent risk if approached aggressively or without compliance awareness. However, when built on educational content, transparent product information, and responsible positioning, SEO supports long-term brand growth while respecting regulatory boundaries. Risk comes from overreach, not from strategic visibility.'
    },
    {
      question: 'How do you handle compliance in SEO?',
      answer: 'Compliance-aware SEO means avoiding medical claims, staying within label-approved language, focusing on ingredients and transparency rather than results, and building authority through education rather than persuasion. Content is reviewed with regulatory sensitivity, and aggressive tactics are avoided in favor of sustainable strategies.'
    },
    {
      question: 'Can supplements rank without medical claims?',
      answer: 'Yes. Supplement brands can rank through ingredient education, category optimization, brand trust building, and transparent product information. Users search for ingredients, formulations, and brand reputation—not just outcome promises. Authority-based SEO outperforms claims-driven shortcuts in the long term.'
    },
    {
      question: 'How long does health ecommerce SEO take?',
      answer: 'Health and supplement SEO requires patience. Initial visibility may take 4-6 months for educational content and ingredient-specific queries, with sustained growth developing over 9-12+ months. Trust-building is slow by design. Brands committed to responsible, long-term strategies see compounding authority over time.'
    },
  ]
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries/health-supplements-ecommerce-seo',
        url: 'https://moazhaider.com/industries/health-supplements-ecommerce-seo',
        name: 'Health & Supplements Ecommerce SEO',
        description: 'Health and supplements ecommerce SEO focused on trust, compliance, and long-term growth—built for responsible supplement brands.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://moazhaider.com',
        },
      },
      {
        '@type': 'Service',
        name: 'Health & Supplements Ecommerce SEO',
        serviceType: 'Health & Supplements Ecommerce SEO Consulting',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
        },
        areaServed: 'International',
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
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>

        {/* HERO — RESPONSIBILITY-FIRST */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '3rem',
            background: 'linear-gradient(to bottom, var(--bg) 0%, var(--surface-alt) 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Background Gradients - Muted Green */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-8%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(22, 163, 74, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(60px)',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Breadcrumb */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
              <Link
                href="/industries"
                className="hover:gap-2"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'gap 0.2s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Industries
              </Link>
            </div>

            {/* Two-Column Hero */}
            <div style={{ 
              display: 'grid', 
              gap: '6rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Left: Content */}
              <div>
                {/* Eyebrow */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'rgb(22, 163, 74)',
                  marginBottom: '2.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: 'rgb(22, 163, 74)',
                    borderRadius: '50%',
                  }} />
                  Health & Supplements Industry SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.045em',
                }}>
                  Health & Supplements
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, rgb(22, 163, 74) 0%, var(--text) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}>
                    Ecommerce SEO
                  </span>
                </h1>

                <p style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                  maxWidth: '560px',
                }}>
                  SEO strategies built for health and supplement brands where trust, transparency, and responsibility come first.
                </p>

                {/* CTAs */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '3rem',
                }}>
                  <Link
                    href="/contact"
                    className="hover:shadow-2xl"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.25rem 2.25rem',
                      background: 'rgb(22, 163, 74)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '700',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 16px rgba(22, 163, 74, 0.2)',
                    }}
                  >
                    Discuss Health Ecommerce SEO
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  <Link
                    href="#search-behavior"
                    className="hover:shadow-lg"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.25rem 2.25rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontSize: '1rem',
                      fontWeight: '700',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    How It Works
                  </Link>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2.5rem',
                  paddingTop: '2.75rem',
                  borderTop: '2px solid',
                  borderImage: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, transparent 100%) 1',
                }}>
                  {[
                    { stat: 'Trust-First', label: 'Approach' },
                    { stat: 'Compliance', label: 'Aware' },
                    { stat: 'Long-Term', label: 'Strategy' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, rgb(22, 163, 74) 0%, var(--text) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: '1',
                        marginBottom: '0.625rem',
                      }}>
                        {item.stat}
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                      }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Scientific Grid */}
              <div style={{
                position: 'relative',
                height: '650px',
              }}>
                {/* Scientific/Formulation Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(4, 1fr)',
                  gap: '1rem',
                  height: '100%',
                }}>
                  
                  {/* Large Feature: Trust & Transparency */}
                  <div style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: 'linear-gradient(135deg, rgb(22, 163, 74) 0%, rgb(21, 128, 61) 100%)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        opacity: 0.95,
                        marginBottom: '1.5rem',
                        fontWeight: '800',
                      }}>
                        Core Principles
                      </div>
                      <div style={{
                        fontSize: '1.625rem',
                        fontWeight: '800',
                        lineHeight: '1.3',
                      }}>
                        Trust →
                        <br />
                        Transparency →
                        <br />
                        Responsibility
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-30px',
                      width: '150px',
                      height: '150px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                    }} />
                  </div>

                  {/* Ingredient Focus */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧪</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--text)' }}>Ingredients</div>
                  </div>

                  {/* Compliance */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '2px solid rgb(22, 163, 74)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'rgb(22, 163, 74)' }}>Compliant</div>
                  </div>

                  {/* Label Information */}
                  <div style={{
                    gridColumn: 'span 2',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'rgb(22, 163, 74)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                    }}>
                      Label Facts
                    </div>
                    {[100, 85, 95, 75].map((width, i) => (
                      <div key={i} style={{
                        height: '6px',
                        background: 'var(--border)',
                        borderRadius: 'var(--radius)',
                        width: `${width}%`,
                      }} />
                    ))}
                  </div>

                  {/* Research */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📖</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--text)' }}>Research</div>
                  </div>

                  {/* Third Party Testing */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔬</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--text)' }}>Testing</div>
                  </div>

                  {/* Trust Signal */}
                  <div style={{
                    gridColumn: 'span 2',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    <div style={{ fontSize: '2rem' }}>⭐</div>
                    <div>
                      <div style={{
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        Verified Reviews
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}>
                        Trust Building Matters
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY SEO WORKS DIFFERENTLY FOR HEALTH & SUPPLEMENTS */}
        <section style={{
          paddingTop: '0',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Industry Context
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Why SEO Works Differently for Health & Supplements
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Health and supplement products require SEO strategies built on trust, compliance, and responsibility—not aggressive tactics.
              </p>
            </div>

            {/* Key Differences Grid */}
            <div style={{
              display: 'grid',
              gap: '1.75rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="lg:grid-cols-2"
            >
              {[
                {
                  title: 'Ingestible Products Require Higher Trust',
                  explanation: 'Users consume supplements directly. Trust thresholds are higher than fashion or electronics. SEO must support confidence through transparency, ingredient education, and brand credibility—not just keyword optimization and conversion tactics.',
                  icon: '💊',
                },
                {
                  title: 'Regulatory Sensitivity and Compliance',
                  explanation: 'Health products face regulatory oversight. Content must stay within label-approved language, avoid medical claims, and respect compliance boundaries. SEO strategies that ignore these constraints create legal and reputational risk.',
                  icon: '⚖️',
                },
                {
                  title: 'Long Research and Evaluation Journeys',
                  explanation: 'Supplement purchases follow extended research cycles. Users compare ingredients, read reviews, verify third-party testing, and evaluate brand transparency. SEO must support the entire journey, not just transactional intent.',
                  icon: '🔍',
                },
                {
                  title: 'Authority Through Education, Not Claims',
                  explanation: 'Aggressive claims-based content creates risk and undermines credibility. Authority is built through educational content, ingredient transparency, science-backed positioning, and responsible brand messaging that respects user intelligence.',
                  icon: '📚',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group hover:shadow-xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Subtle Gradient on Hover */}
                  <div className="group-hover:opacity-100" style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '180px',
                    height: '180px',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                    opacity: '0',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                  }} />

                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1.75rem',
                    lineHeight: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                    lineHeight: '1.25',
                    letterSpacing: '-0.025em',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.75',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* HEALTH & SUPPLEMENTS SEARCH BEHAVIOR */}
        <section
          id="search-behavior"
          style={{
            paddingTop: 'var(--spacing-section)',
            paddingBottom: 'var(--spacing-section)',
            background: 'linear-gradient(to bottom, var(--bg) 0%, var(--surface-alt) 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative Gradient */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Search Behavior
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Health & Supplements Search Behavior
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Supplement buyers research extensively before purchasing. SEO must align with educational intent, ingredient focus, and trust-building journeys.
              </p>
            </div>

            {/* Search Behavior Cards */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Educational-First Journeys */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Top Accent Bar */}
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                {/* Gradient Orb */}
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Educational-First Journeys
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Supplement buyers start with educational intent before reaching product pages. They search for ingredient benefits, usage guidance, and scientific context.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.875rem 1rem',
                  fontSize: '0.9375rem',
                  fontFamily: 'monospace',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: '500',
                }}>
                  "magnesium benefits for sleep"
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    'Ingredient-focused content',
                    'Educational blog structure',
                    'Responsible internal linking to product pages',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{
                        color: 'rgb(22, 163, 74)',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        marginTop: '2px',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredient-Focused Searches */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Ingredient-Focused Searches
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users search for specific ingredients, dosage forms, and formulation types—not just brand names or generic health goals.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.875rem 1rem',
                  fontSize: '0.9375rem',
                  fontFamily: 'monospace',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: '500',
                }}>
                  "methylated b12 supplement"
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    'Ingredient-specific product pages',
                    'Formulation transparency in content',
                    'Dosage and form clarity',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{
                        color: 'rgb(22, 163, 74)',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        marginTop: '2px',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand Trust Queries */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Brand Trust Queries
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Supplement buyers research brand credibility, testing practices, and transparency before purchasing. Trust signals drive visibility.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.875rem 1rem',
                  fontSize: '0.9375rem',
                  fontFamily: 'monospace',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: '500',
                }}>
                  "third party tested supplements"
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    'Transparency pages and certifications',
                    'Brand story and sourcing content',
                    'Testing and quality assurance messaging',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{
                        color: 'rgb(22, 163, 74)',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        marginTop: '2px',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review-Led Discovery */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Review-Led Discovery
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Reviews and user experiences shape organic discovery. Supplement buyers search for real feedback before trusting new brands or products.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.875rem 1rem',
                  fontSize: '0.9375rem',
                  fontFamily: 'monospace',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: '500',
                }}>
                  "[brand name] reviews reddit"
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    'Review schema and structured data',
                    'Verified customer experiences',
                    'Long-form testimonial content',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{
                        color: 'rgb(22, 163, 74)',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        marginTop: '2px',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* CATEGORY & COLLECTION SEO FOR SUPPLEMENT STORES */}
        <section style={{
          paddingTop: 'calc(var(--spacing-section) - 2rem)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Category SEO
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Category SEO for Supplement Stores
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                margin: '0 auto',
              }}>
                Supplement category pages must balance structure, clarity, and compliance—avoiding claims while supporting discovery.
              </p>
            </div>

            {/* Cards Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="lg:grid-cols-3"
            >
              
              {/* Card 1: Goal-Based */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Top Accent Bar */}
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                {/* Gradient Orb */}
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🎯
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Goal-Based Categorization
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users search for supplements aligned with health goals (sleep, immunity, digestion). Category pages can acknowledge these goals without making outcome promises or medical claims.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  SEO aligns with search behavior while staying within label-approved language
                </div>
              </div>

              {/* Card 2: Ingredient-Based */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🧪
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Ingredient-Based Collections
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Collections built around specific ingredients (magnesium, omega-3, probiotics) align with how supplement buyers research and compare products.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Supports educational content and transparent positioning
                </div>
              </div>

              {/* Card 3: Trust-First */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 4px 0',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🔗
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Trust-First Internal Linking
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Internal linking from educational content to category and product pages must feel helpful—not manipulative. Supplement SEO builds authority through trust.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Bridges research-driven content to purchase-ready pages
                </div>
              </div>

            </div>

            {/* CTA Box */}
            <div style={{
              maxWidth: '1000px',
              margin: '4rem auto 0',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Category SEO for supplements</strong> requires structural clarity, compliant positioning, and trust-building content. Learn more about <Link href="/services/category-page-seo" style={{ color: 'rgb(22, 163, 74)', textDecoration: 'underline', fontWeight: '600' }}>category page SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* PRODUCT PAGE SEO FOR HEALTH & SUPPLEMENTS */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Product Page SEO
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Product Page SEO for Health & Supplements
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Supplement product pages require transparency, accuracy, and compliance-aware content that builds trust without overpromising.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: '1.75rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: 'Ingredient Transparency',
                  explanation: 'Product pages must clearly list ingredients, dosages, and formulation details. Users compare supplement facts panels before purchasing. SEO supports discovery when content matches label accuracy and ingredient-focused searches.',
                  icon: '🧪',
                },
                {
                  title: 'Label-Friendly Content',
                  explanation: 'Product copy must stay within label-approved language and avoid unapproved claims. SEO content depth is valuable—but only when it respects compliance boundaries and supports responsible brand positioning.',
                  icon: '📋',
                },
                {
                  title: 'Claims Boundaries',
                  explanation: 'Supplement product pages cannot make disease claims, outcome guarantees, or medical promises. SEO must build visibility through transparency, education, and trust—not aggressive persuasion or misleading language.',
                  icon: '⚖️',
                },
                {
                  title: 'Third-Party Testing & Certifications',
                  explanation: 'Users search for verified quality signals. Product pages that highlight third-party testing, certifications, and quality assurance build trust and support organic discovery for trust-driven queries.',
                  icon: '✓',
                },
                {
                  title: 'Usage & Dosage Clarity',
                  explanation: 'Clear usage instructions and dosage guidance improve user experience and reduce uncertainty. Product pages that answer "how to take" questions support SEO while respecting label compliance.',
                  icon: '📖',
                },
                {
                  title: 'Conservative Content Depth',
                  explanation: 'Supplement product pages benefit from content depth—but restraint matters. Over-optimizing with excessive keywords or borderline claims creates risk. Conservative, accurate content outperforms aggressive tactics long-term.',
                  icon: '🛡️',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group hover:shadow-xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.75rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div className="group-hover:opacity-100" style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                    opacity: '0',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                    filter: 'blur(35px)',
                  }} />

                  <div style={{
                    fontSize: '2.75rem',
                    marginBottom: '1.75rem',
                    lineHeight: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '800',
                    color: 'var(--text)',
                    marginBottom: '1.125rem',
                    lineHeight: '1.25',
                    letterSpacing: '-0.025em',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.75',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              maxWidth: '950px',
              margin: '5rem auto 0',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Supplement product page SEO</strong> must prioritize accuracy, transparency, and compliance over aggressive optimization. Learn more about <Link href="/services/product-page-seo" style={{ color: 'rgb(22, 163, 74)', textDecoration: 'underline', fontWeight: '600' }}>product page SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* EDUCATIONAL & INFORMATIONAL CONTENT SEO — HEALTH-ONLY DIFFERENTIATOR */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Educational Content
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Educational & Informational Content SEO
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Educational content is the foundation of responsible supplement SEO—building authority and trust without crossing compliance boundaries.
              </p>
            </div>

            {/* Cards Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="lg:grid-cols-3"
            >
              
              {/* Card 1 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  📚
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Ingredient Explainers
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Supplement brands build SEO authority through ingredient education—explaining what ingredients are, how they're sourced, and what research says (within appropriate boundaries).
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Supports organic discovery at research stage
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🔗
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Responsible Linking
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Educational content can link to product pages—but the framing must be helpful, not manipulative. Trust-building requires education-first content, not sales funnels.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  User value over conversion pressure
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '2.75rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🛡️
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Avoiding Overreach
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Health content carries responsibility. SEO strategies that prioritize accuracy, avoid exaggeration, and respect research limits protect brand reputation and user trust.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Restraint and credibility over traffic
                </div>
              </div>

            </div>

            {/* CTA Box */}
            <div style={{
              maxWidth: '1000px',
              margin: '4rem auto 0',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Educational content SEO</strong> is non-negotiable for responsible supplement brands. It builds trust, supports discovery, and creates long-term authority without compliance risk.
              </p>
            </div>

          </div>
        </section>

        {/* REVIEWS, TRUST SIGNALS & AUTHORITY */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Trust & Authority
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Reviews, Trust Signals & Authority
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Trust signals are critical for supplement SEO. Reviews, transparency, and credibility markers drive organic visibility and user confidence.
              </p>
            </div>

            {/* Cards Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Card 1 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  ⭐
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Reviews in Organic Discovery
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users search for supplement reviews before purchasing. Review schema, verified customer experiences, and transparent feedback loops support organic discovery. Authentic reviews (not manipulated) build long-term credibility and ranking authority.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🔬
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Brand Transparency & Testing
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Transparency pages explaining sourcing, manufacturing, and third-party testing create SEO value while building trust. Brands that openly share certifications, lab results, and testing protocols rank for trust-related queries and differentiate through credibility.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  📊
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Trust-Building Content Signals
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Content depth, accuracy, expertise, and restraint signal trustworthiness to users and search engines. Supplement SEO that prioritizes these qualities builds authority over time. Conservative, responsible SEO outperforms hype-driven content.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🏆
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Responsible Authority Building
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Authority in supplement SEO is earned through consistent transparency, educational content, verified quality, and brand integrity—not link schemes or keyword manipulation. Long-term strategies prioritize reputation as trust compounds.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* COMPLIANCE & RISK-AWARE SEO STRATEGY — NON-NEGOTIABLE */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Compliance Strategy
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Compliance & Risk-Aware SEO Strategy
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Responsible supplement SEO acknowledges regulatory boundaries and builds visibility within compliant, sustainable frameworks.
              </p>
            </div>

            {/* Cards Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto 3rem',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Card 1 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  ⚖️
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Regulatory Boundaries
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Supplement SEO operates within regulatory frameworks set by authorities like the FDA and FTC. Content must avoid disease claims, unapproved medical terminology, and misleading outcome promises. SEO strategies built on compliance awareness protect brands from regulatory action, legal risk, and reputational damage.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🛡️
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Avoiding Aggressive Tactics
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Aggressive keyword stuffing, claims-heavy content, and manipulative link building create short-term gains but long-term liability. Health products require restraint and strategic discipline. Conservative SEO approaches that prioritize accuracy, transparency, and user value outperform aggressive tactics in regulated categories.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  📈
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Long-Term Sustainability
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Supplement brands benefit from SEO strategies designed for multi-year growth, not quick wins. Authority building, trust accumulation, and compliant content strategies compound over time. Short-term SEO tactics that push compliance boundaries create risk that undermines long-term growth.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  🏅
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Protecting Brand Reputation
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  SEO decisions impact brand perception. Content that overpromises, misleads, or crosses compliance lines damages trust—even if it temporarily improves rankings. Responsible SEO strategies treat brand reputation as a core asset. Visibility is valuable—but not at the cost of credibility.
                </p>
              </div>

            </div>

            {/* CTA Box */}
            <div style={{
              background: 'var(--surface)',
              border: '2px solid rgb(22, 163, 74)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
                textAlign: 'center',
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Compliance-aware SEO</strong> is not optional for supplement brands. It's the foundation of sustainable visibility, risk management, and long-term growth in regulated health categories.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNICAL SEO CHALLENGES IN HEALTH ECOMMERCE */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Technical SEO
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Technical SEO Challenges in Health Ecommerce
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Technical SEO for supplement stores requires disciplined site architecture, crawl efficiency, and educational content management.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: '3rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              
              {[
                {
                  title: 'Crawl Discipline and Indexation Control',
                  explanation: 'Supplement stores often scale educational content, ingredient pages, and product variations quickly. Technical SEO must manage crawl budgets, prevent thin content indexation, and prioritize high-value pages. Disciplined site architecture protects ranking authority.',
                },
                {
                  title: 'Duplicate Educational Content',
                  explanation: 'Ingredient information and educational content can create duplication across category, product, and blog pages. Technical SEO strategies must consolidate, canonicalize, or differentiate content to avoid fragmented authority and ranking dilution.',
                },
                {
                  title: 'Performance and Accessibility',
                  explanation: 'Health ecommerce sites must load quickly and remain accessible across devices. Technical SEO ensures Core Web Vitals compliance, mobile optimization, and accessibility standards—supporting both user experience and ranking factors.',
                },
                {
                  title: 'Schema and Structured Data Management',
                  explanation: 'Product schema, review schema, FAQ schema, and article schema must be implemented accurately across supplement pages. Proper structured data supports rich results, trust signals, and visibility in competitive health queries.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 style={{
                    fontSize: '1.625rem',
                    fontWeight: '800',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.025em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.5rem',
                      height: '2.5rem',
                      background: 'linear-gradient(135deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                      color: '#ffffff',
                      borderRadius: '50%',
                      fontSize: '1rem',
                      fontWeight: '800',
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.75',
                    color: 'var(--text-secondary)',
                    paddingLeft: '3.5rem',
                  }}>
                    {item.explanation}
                  </p>
                </div>
              ))}

            </div>

            <div style={{
              maxWidth: '1200px',
              margin: '5rem auto 0',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
                textAlign: 'center',
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Technical SEO</strong> creates the foundation for scalable, sustainable supplement ecommerce growth. Learn more about <Link href="/services/technical-ecommerce-seo" style={{ color: 'rgb(22, 163, 74)', textDecoration: 'underline', fontWeight: '600' }}>technical ecommerce SEO</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* HEALTH & SUPPLEMENTS SEO ACROSS PLATFORMS */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Platforms
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Health & Supplements SEO Across Platforms
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Platform choice affects SEO flexibility, content control, and compliance management for supplement stores.
              </p>
            </div>

            {/* Cards Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Card 1 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  ⚠️
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Platform Limitations for Regulated Content
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Ecommerce platforms vary in their ability to manage compliance-sensitive content, educational hubs, and structured data. Supplement brands need platforms that support nuanced content strategies—not just product catalogs. SEO flexibility for educational content, ingredient pages, and transparency hubs often requires custom development or platform extensions. Platform evaluation should prioritize content control.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="group hover:shadow-xl"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="group-hover:w-full" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '0',
                  background: 'linear-gradient(90deg, rgb(22, 163, 74) 0%, rgb(34, 197, 94) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  filter: 'blur(40px)',
                }} />

                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  ⚡
                </div>

                <h3 className="group-hover:text-[rgb(22,163,74)]" style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  lineHeight: '1.25',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Control vs. Convenience Tradeoffs
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Hosted platforms (Shopify, BigCommerce) offer speed and simplicity but may limit SEO customization for compliance-heavy brands. Headless or custom platforms provide control but require technical investment. Supplement brands balancing growth and compliance often benefit from platforms that support educational content management, schema flexibility, and long-term SEO strategies without restrictive templates.
                </p>
              </div>

            </div>

            {/* CTA Box */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              marginTop: '3rem',
              maxWidth: '1000px',
              margin: '3rem auto 0',
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                margin: 0,
                textAlign: 'center',
              }}>
                Platform selection impacts long-term SEO flexibility for supplement brands. Learn more about <Link href="/platforms" style={{ color: 'rgb(22, 163, 74)', textDecoration: 'underline', fontWeight: '600' }}>ecommerce platform SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* WHO HEALTH & SUPPLEMENTS ECOMMERCE SEO IS FOR */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Who This Is For
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Who Health & Supplements Ecommerce SEO Is For
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Responsible supplement SEO is built for brands committed to compliance, transparency, and long-term growth.
              </p>
            </div>

            {/* Two-Column Layout */}
            <div style={{
              display: 'grid',
              gap: '3rem',
            }}
            className="md:grid-cols-2"
            >
              
              {/* This Is For */}
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'rgb(22, 163, 74)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.025em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{ fontSize: '1.75rem' }}>✓</span>
                  This Is For
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}>
                  {[
                    'Responsible supplement brands prioritizing customer trust',
                    'Long-term health ecommerce businesses building authority',
                    'Compliance-aware teams protecting brand reputation',
                    'Brands committed to transparency and quality',
                    'Supplement companies seeking sustainable SEO growth',
                    'Health brands willing to invest in education-first content',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{
                        color: 'rgb(22, 163, 74)',
                        fontSize: '1.5rem',
                        lineHeight: '1',
                        flexShrink: 0,
                        marginTop: '0.125rem',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* This Is Not For */}
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'var(--muted)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.025em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{ fontSize: '1.75rem' }}>✗</span>
                  This Is Not For
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}>
                  {[
                    'Aggressive claim sellers pushing regulatory boundaries',
                    'Grey-area products avoiding transparency',
                    'Short-term churn sites prioritizing quick conversions',
                    'Brands seeking SEO shortcuts or manipulative tactics',
                    'Supplement sellers unwilling to invest in educational content',
                    'Companies prioritizing claims over compliance',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--muted)',
                    }}>
                      <span style={{
                        color: 'var(--muted)',
                        fontSize: '1.5rem',
                        lineHeight: '1',
                        flexShrink: 0,
                        marginTop: '0.125rem',
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Responsible supplement SEO</strong> is designed for brands where compliance, transparency, and long-term credibility matter more than quick wins.
              </p>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.03) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(22, 163, 74)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(22, 163, 74)"/>
                </svg>
                Common Questions
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Frequently Asked Questions
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Common questions about health and supplements ecommerce SEO.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />

          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{
          paddingTop: 'calc(var(--spacing-section) + 2rem)',
          paddingBottom: 'calc(var(--spacing-section) + 2rem)',
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Enhanced Gradient Orbs */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.09) 0%, transparent 70%)',
            opacity: 0.8,
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '15%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(22, 163, 74, 0.07) 0%, transparent 70%)',
            opacity: 0.7,
            pointerEvents: 'none',
            filter: 'blur(90px)',
          }} />

          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '2rem',
                letterSpacing: '-0.04em',
              }}>
                SEO Built for Health Brands Where Responsibility Matters
              </h2>

              <p style={{
                fontSize: '1.3125rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                marginBottom: '3.5rem',
                maxWidth: '750px',
                margin: '0 auto 3.5rem',
              }}>
                If you're building a supplement brand focused on trust, transparency, and long-term growth—let's build SEO strategies that respect compliance and deliver sustainable results.
              </p>

              <Link
                href="/contact"
                className="hover:shadow-2xl hover:scale-105"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem 3rem',
                  background: 'rgb(22, 163, 74)',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  fontWeight: '800',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(22, 163, 74, 0.25)',
                }}
              >
                Discuss Health Ecommerce SEO
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div style={{ marginTop: '4rem' }}>
                <Link
                  href="/industries"
                  className="hover:gap-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'gap 0.3s ease',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View All Industry-Specific SEO Services
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
