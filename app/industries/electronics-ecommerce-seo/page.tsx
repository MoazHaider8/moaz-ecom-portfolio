'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function ElectronicsEcommerceSEOPage() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Electronics Ecommerce SEO | SEO for Electronics & Gadget Stores – Moaz Haider'
    
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

    updateMetaTag('description', 'Electronics ecommerce SEO strategies built for spec-driven products, comparison searches, and trust-based buying decisions.')
    updateMetaTag('og:title', 'Electronics Ecommerce SEO | SEO for Electronics & Gadget Stores – Moaz Haider', true)
    updateMetaTag('og:description', 'Electronics ecommerce SEO strategies built for spec-driven products, comparison searches, and trust-based buying decisions.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries/electronics-ecommerce-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Electronics Ecommerce SEO | SEO for Electronics & Gadget Stores – Moaz Haider')
    updateMetaTag('twitter:description', 'Electronics ecommerce SEO strategies built for spec-driven products, comparison searches, and trust-based buying decisions.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/electronics-ecommerce-seo')
  }, [])
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries/electronics-ecommerce-seo#webpage',
        url: 'https://moazhaider.com/industries/electronics-ecommerce-seo',
        name: 'Electronics Ecommerce SEO',
        description: 'Electronics ecommerce SEO strategies built for spec-driven products, comparison searches, and trust-based buying decisions.',
        isPartOf: {
          '@id': 'https://www.moazhaider.com/#website',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/industries/electronics-ecommerce-seo#service',
        name: 'Electronics Ecommerce SEO',
        serviceType: 'Electronics Ecommerce SEO Consulting',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/industries/electronics-ecommerce-seo',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://moazhaider.com/industries/electronics-ecommerce-seo#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is electronics ecommerce SEO competitive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Electronics is a high-value, high-consideration category with established brands and marketplaces dominating search results. However, opportunities exist through long-tail specification queries, comparison content, and technical product depth. Success requires strategic positioning around underserved research intent and sustained authority building.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you handle product specifications in SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Specifications must be structured, indexed, and presented in a way that supports both user evaluation and search engine understanding. This includes proper heading hierarchy, structured data markup, spec tables for crawlability, and strategic integration of spec terms into content without keyword stuffing. Specs should inform, not clutter.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do electronics stores need comparison pages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Electronics buyers actively search for comparisons before purchasing. Well-structured comparison pages capture high-intent traffic and support decision-making. However, they must be comprehensive, honest, and regularly updated. Superficial comparison content creates duplicate content risks without ranking value.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does electronics SEO take to work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Electronics SEO typically shows initial movement within 10-14 weeks for long-tail spec queries and niche subcategories, with sustained growth building over 6-12 months. Competitive product categories require longer positioning timelines. The timeline depends on domain authority, catalog depth, technical foundation, and competitive landscape.',
            },
          },
        ],
      },
    ],
  }

  const faqs = [
    {
      question: 'Is electronics ecommerce SEO competitive?',
      answer: 'Yes. Electronics is a high-value, high-consideration category with established brands and marketplaces dominating search results. However, opportunities exist through long-tail specification queries, comparison content, and technical product depth. Success requires strategic positioning around underserved research intent and sustained authority building.',
    },
    {
      question: 'How do you handle product specifications in SEO?',
      answer: 'Specifications must be structured, indexed, and presented in a way that supports both user evaluation and search engine understanding. This includes proper heading hierarchy, structured data markup, spec tables for crawlability, and strategic integration of spec terms into content without keyword stuffing. Specs should inform, not clutter.',
    },
    {
      question: 'Do electronics stores need comparison pages?',
      answer: 'Absolutely. Electronics buyers actively search for comparisons before purchasing. Well-structured comparison pages capture high-intent traffic and support decision-making. However, they must be comprehensive, honest, and regularly updated. Superficial comparison content creates duplicate content risks without ranking value.',
    },
    {
      question: 'How long does electronics SEO take to work?',
      answer: 'Electronics SEO typically shows initial movement within 10-14 weeks for long-tail spec queries and niche subcategories, with sustained growth building over 6-12 months. Competitive product categories require longer positioning timelines. The timeline depends on domain authority, catalog depth, technical foundation, and competitive landscape.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        
        {/* HERO — PREMIUM TECHNICAL SHOWCASE */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '6rem',
            background: 'var(--bg)',
            overflow: 'hidden',
          }}
        >
          {/* Premium Gradient Background */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-15%',
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.04',
            pointerEvents: 'none',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.03',
            pointerEvents: 'none',
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

            {/* Premium Two-Column Hero */}
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
                {/* Premium Eyebrow */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  marginBottom: '2.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.75px',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                  }} />
                  Electronics Industry SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3.25rem, 8vw, 6.5rem)',
                  fontWeight: '800',
                  lineHeight: '1',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.04em',
                }}>
                  Electronics
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
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
                  SEO strategies built for how electronics products are researched, compared, and purchased online.
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
                    className="hover:shadow-xl"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.125rem 2rem',
                      background: 'var(--accent)',
                      color: '#ffffff',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Discuss Electronics SEO
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      padding: '1.125rem 2rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    How It Works
                  </Link>
                </div>

                {/* Premium Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2.5rem',
                  paddingTop: '2.5rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  {[
                    { stat: 'Spec-Driven', label: 'Search Behavior' },
                    { stat: 'Research → Buy', label: 'Journey Model' },
                    { stat: 'Trust-Based', label: 'Conversion' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '1.375rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        lineHeight: '1',
                        marginBottom: '0.5rem',
                      }}>
                        {item.stat}
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.25px',
                      }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Premium Data Visualization */}
              <div style={{
                position: 'relative',
                height: '650px',
              }}>
                {/* Premium Bento Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(4, 1fr)',
                  gap: '1rem',
                  height: '100%',
                }}>
                  
                  {/* Large Feature: Research Flow */}
                  <div style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
                    borderRadius: 'var(--radius-lg)',
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
                        letterSpacing: '1px',
                        opacity: 0.9,
                        marginBottom: '1.5rem',
                        fontWeight: '700',
                      }}>
                        Buying Journey
                      </div>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                      }}>
                        Research →
                        <br />
                        Compare →
                        <br />
                        Decide
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-40px',
                      right: '-40px',
                      width: '180px',
                      height: '180px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '50%',
                    }} />
                  </div>

                  {/* Specs Icon */}
                  <div style={{
                    gridRow: 'span 1',
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📊</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Specs</div>
                  </div>

                  {/* Compare Icon */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '2px solid var(--accent)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚖️</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Compare</div>
                  </div>

                  {/* Specs Table Visual */}
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
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                    }}>
                      Specifications
                    </div>
                    {[85, 70, 95, 60].map((width, i) => (
                      <div key={i} style={{
                        height: '6px',
                        background: 'var(--border)',
                        borderRadius: 'var(--radius)',
                        width: `${width}%`,
                      }} />
                    ))}
                  </div>

                  {/* Trust Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Trust</div>
                  </div>

                  {/* Reviews Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⭐</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Reviews</div>
                  </div>

                  {/* Decision Support */}
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
                    <div style={{ fontSize: '2rem' }}>🎯</div>
                    <div>
                      <div style={{
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        Decision Support
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}>
                        Content-Driven Confidence
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HOW SEO WORKS DIFFERENTLY FOR ELECTRONICS STORES */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  How SEO Works Differently for Electronics Stores
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Electronics ecommerce is fundamentally different from other industries. It is not impulse buying. It is research, comparison, and confidence building.
                </p>
              </div>

              {/* Key Differences Grid */}
              <div style={{
                display: 'grid',
                gap: '1.5rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    title: 'High-Consideration Buying Cycles',
                    explanation: 'Electronics purchases are rarely impulsive. Buyers spend days or weeks researching specifications, reading reviews, and comparing alternatives. SEO must support this entire journey—from initial research queries to final product selection.',
                    icon: '🔍',
                  },
                  {
                    title: 'Research-Driven Intent',
                    explanation: 'Most electronics searches begin with informational intent. Users want to understand features, capabilities, and differences before even considering purchase. Content must build knowledge and authority before asking for conversion.',
                    icon: '📊',
                  },
                  {
                    title: 'Comparison-First Discovery',
                    explanation: 'Electronics buyers actively compare products, brands, and specifications. Search results are filled with "X vs Y" and "best Z" queries. Ranking requires content that directly addresses comparative decision-making.',
                    icon: '⚖️',
                  },
                  {
                    title: 'Trust and Credibility Signals',
                    explanation: 'Electronics buyers need confidence. Product authenticity, warranty clarity, technical accuracy, and review legitimacy all influence both conversion and organic visibility. Trust signals are ranking factors in competitive categories.',
                    icon: '✓',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2.5rem',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:shadow-lg"
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '1.25rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>

                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                    }}>
                      {item.title}
                    </div>

                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ELECTRONICS ECOMMERCE SEARCH BEHAVIOR (CORE) */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Electronics Ecommerce Search Behavior
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '48rem',
                }}>
                  Understanding how electronics buyers search drives every strategic decision in SEO.
                </p>
              </div>

              {/* Search Flow Grid */}
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}>
                
                {/* Flow Visualization */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem',
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '2rem',
                  }}
                  className="lg:grid-cols-3"
                  >
                    {[
                      {
                        stage: 'Informational',
                        query: '"What is the difference between..."',
                        intent: 'Learning & feature understanding',
                      },
                      {
                        stage: 'Commercial',
                        query: '"Best laptops for..."',
                        intent: 'Shortlist building & comparison',
                      },
                      {
                        stage: 'Transactional',
                        query: '"MacBook Pro M3 buy"',
                        intent: 'Purchase decision',
                      },
                    ].map((phase, i) => (
                      <div key={i} style={{
                        position: 'relative',
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.75px',
                          marginBottom: '0.75rem',
                        }}>
                          {phase.stage}
                        </div>
                        <div style={{
                          fontSize: '0.9375rem',
                          fontWeight: '600',
                          color: 'var(--text)',
                          marginBottom: '0.5rem',
                          fontStyle: 'italic',
                        }}>
                          {phase.query}
                        </div>
                        <div style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.6',
                        }}>
                          {phase.intent}
                        </div>
                        
                        {i < 2 && (
                          <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '-1rem',
                            fontSize: '1.5rem',
                            color: 'var(--muted)',
                            display: 'none',
                          }}
                          className="lg:block"
                          >
                            →
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavior Patterns */}
                <div style={{
                  display: 'grid',
                  gap: '1.5rem',
                }}
                className="lg:grid-cols-2"
                >
                  {[
                    {
                      pattern: 'Spec-Based Queries',
                      detail: 'Electronics buyers search with technical specifications: processor type, memory capacity, resolution, connectivity standards. SEO must make these specs discoverable and understandable.',
                    },
                    {
                      pattern: 'Model Numbers & Variants',
                      detail: 'Exact model numbers, SKU variations, and version differences drive high-intent searches. Proper handling of product variants and nomenclature is essential for ranking.',
                    },
                    {
                      pattern: 'Comparison & Review Searches',
                      detail: 'Comparative queries dominate research phases. Users want side-by-side feature analysis, expert reviews, and user feedback before committing to purchase decisions.',
                    },
                    {
                      pattern: 'Use Case & Application Queries',
                      detail: 'Many electronics searches focus on use cases: "laptop for video editing," "camera for wildlife photography." Content must connect specifications to real-world applications.',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                      }}
                    >
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.75rem',
                      }}>
                        {item.pattern}
                      </div>
                      <p style={{
                        fontSize: '0.9375rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}>
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY & SUBCATEGORY SEO FOR ELECTRONICS */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Category & Subcategory SEO for Electronics
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Electronics catalogs require deep, well-structured category hierarchies to support both user navigation and search engine crawling.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}>
                {[
                  {
                    challenge: 'Deep Category Trees',
                    approach: 'Electronics stores often have 4-6 levels of categorization (Computers > Laptops > Gaming Laptops > 15-inch > Under $1500). Each level must serve a clear purpose, avoid thin content, and support internal linking architecture without creating crawl inefficiencies.',
                  },
                  {
                    challenge: 'Managing Overlapping Specs',
                    approach: 'Products often fit multiple categories based on different attributes (processor, size, use case). Strategic canonicalization and faceted navigation control ensure one authoritative URL per product while still serving varied discovery paths.',
                  },
                  {
                    challenge: 'Avoiding Thin Subcategories',
                    approach: 'Not every specification combination deserves a category page. Creating subcategories with 2-3 products dilutes authority and wastes crawl budget. Category creation must be demand-driven, not catalog-driven.',
                  },
                  {
                    challenge: 'Internal Linking at Scale',
                    approach: 'Large electronics catalogs require systematic internal linking logic. Links should flow from broad categories to specific subcategories, from comparison pages to product pages, and from supporting content to commercial pages based on topical relevance.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2.5rem',
                      display: 'grid',
                      gap: '1rem',
                    }}
                    className="lg:grid-cols-[220px_1fr]"
                  >
                    <div style={{
                      fontSize: '1.0625rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                    }}>
                      {item.challenge}
                    </div>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.approach}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/services/category-page-seo"
                className="hover:gap-3"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--text)',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Learn About Category Page SEO
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

            </div>
          </div>
        </section>

        {/* PRODUCT PAGE SEO FOR TECHNICAL PRODUCTS */}
        <section id="product-seo" style={{ 
          paddingTop: 'var(--spacing-section)', 
          paddingBottom: 'var(--spacing-section)', 
          background: 'var(--bg)',
          position: 'relative',
        }}>
          {/* Subtle Background Gradient */}
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '5%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.02',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Product Page Optimization
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Product Page SEO for Technical Products
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Electronics product pages must balance technical precision with SEO best practices.
                </p>
              </div>

              {/* Premium Product SEO Cards */}
              <div style={{ 
                display: 'grid', 
                gap: '1.75rem', 
                marginBottom: '4rem',
                position: 'relative',
                zIndex: 1,
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    focus: 'Spec Presentation & Hierarchy',
                    implementation: 'Specifications are the core of electronics product pages. They must be structured with proper heading hierarchy, presented in crawlable tables, and integrated naturally into supporting content. Specs inform buying decisions and search engine understanding simultaneously.',
                    icon: '📋',
                  },
                  {
                    focus: 'Model/Version Handling',
                    implementation: 'Electronics products often have multiple versions, configurations, and SKU variants. Each should not create a separate indexed page. Use canonical tags, parameter handling, or variant selectors to consolidate authority while maintaining user choice.',
                    icon: '🔄',
                  },
                  {
                    focus: 'Duplicate Content Risks',
                    implementation: 'Manufacturer-provided product descriptions create duplicate content across retailers. Original content—use case explanations, compatibility notes, setup guidance—differentiates your pages and improves ranking potential.',
                    icon: '⚠️',
                  },
                  {
                    focus: 'Content Depth Without Stuffing',
                    implementation: 'Electronics product pages need more than spec lists. Add setup instructions, compatibility information, common use cases, and troubleshooting guidance. Content should serve user needs, not keyword density targets.',
                    icon: '📝',
                  },
                  {
                    focus: 'Schema & Structured Data',
                    implementation: 'Product schema with technical specifications, aggregate review ratings, offer details, and availability status improves rich result eligibility. Schema is not optional for electronics SEO - it is table stakes.',
                    icon: '🏗️',
                  },
                  {
                    focus: 'Review Integration',
                    implementation: 'User reviews provide unique content, trust signals, and keyword variation. Reviews mentioning specific use cases or technical performance add contextual relevance that manufacturer descriptions cannot.',
                    icon: '⭐',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-xl"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.75rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Subtle gradient accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '140px',
                      height: '140px',
                      background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                      opacity: '0.05',
                    }} />
                    
                    <div style={{ 
                      fontSize: '2.75rem', 
                      marginBottom: '1.75rem',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.icon}
                    </div>

                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1.25rem',
                      letterSpacing: '-0.02em',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.focus}
                    </h3>

                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.implementation}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
              }}>
                <Link
                  href="/services/product-page-seo"
                  className="hover:shadow-xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Deep Dive: Product Page SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON & RESEARCH-DRIVEN SEO */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Comparison & Research-Driven SEO
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Electronics buyers actively compare before purchasing. SEO must support this research process.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.5rem',
              }}>
                {[
                  {
                    type: 'Comparison Pages (X vs Y)',
                    strategy: 'Direct product comparisons capture high-intent traffic. These pages must be honest, comprehensive, and regularly updated. Include side-by-side spec tables, use case differentiation, and clear recommendations. Avoid superficial comparisons that create thin content risks.',
                    badge: 'High Intent',
                  },
                  {
                    type: '"Best" and Shortlist Searches',
                    strategy: 'Queries like "best wireless earbuds 2024" dominate electronics search. These pages require editorial depth, clear evaluation criteria, transparent affiliate disclosure if applicable, and regular updates as products evolve. They are competitive but valuable.',
                    badge: 'Competitive',
                  },
                  {
                    type: 'Review-Led Discovery',
                    strategy: 'Many electronics buying journeys begin with review searches. While you cannot fake user reviews, you can create expert review content, buying guides, and in-depth analysis that supports decision-making and builds topical authority.',
                    badge: 'Authority Building',
                  },
                  {
                    type: 'Decision-Support Content',
                    strategy: 'Content that helps buyers understand specifications, evaluate trade-offs, and make confident decisions ranks well and converts better. This includes "how to choose" guides, spec explainers, and use case scenarios tailored to different buyer personas.',
                    badge: 'Educational',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />

                    <div style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.875rem',
                      background: 'var(--accent)',
                      color: '#ffffff',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1rem',
                    }}>
                      {item.badge}
                    </div>

                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                    }}>
                      {item.type}
                    </div>

                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.strategy}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* TRUST, REVIEWS & AUTHORITY IN ELECTRONICS SEO */}
        <section style={{ 
          paddingTop: 'var(--spacing-section)', 
          paddingBottom: 'var(--spacing-section)', 
          background: 'var(--bg)',
          position: 'relative',
        }}>
          {/* Subtle Background Gradient */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.02',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Trust & Authority
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Trust, Reviews & Authority in Electronics SEO
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Electronics buyers need credibility before committing. Trust signals directly impact both ranking and conversion.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
                position: 'relative',
                zIndex: 1,
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    signal: 'Role of Reviews in Organic Search',
                    impact: 'User reviews influence organic rankings indirectly through user engagement, dwell time, and content freshness. Search engines recognize that buyers trust other buyers. Legitimate review volume and recency support SEO performance.',
                    icon: '⭐',
                  },
                  {
                    signal: 'Authority & Trust Signals',
                    impact: 'Established brands, authoritative backlinks, expert content authorship, and technical accuracy all contribute to trustworthiness. In competitive electronics categories, domain authority and content expertise are ranking prerequisites.',
                    icon: '🏆',
                  },
                  {
                    signal: 'Product Authenticity & Warranty Confidence',
                    impact: 'Clear warranty information, authorized retailer status, and product authenticity guarantees reduce buyer hesitation. These elements also provide content opportunities and differentiation in search results.',
                    icon: '✅',
                  },
                  {
                    signal: 'Conceptual Structured Data Relevance',
                    impact: 'While structured data alone does not guarantee rankings, proper implementation supports search engine understanding of product specifications, reviews, pricing, and availability. It is a baseline technical requirement.',
                    icon: '🛡️',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-xl"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.75rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '140px',
                      height: '140px',
                      background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                      opacity: '0.05',
                    }} />

                    <div style={{ 
                      fontSize: '2.75rem', 
                      marginBottom: '1.75rem',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.icon}
                    </div>

                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1.25rem',
                      letterSpacing: '-0.02em',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.signal}
                    </h3>

                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SEO CHALLENGES IN ELECTRONICS ECOMMERCE */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Technical SEO Challenges in Electronics Ecommerce
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Electronics catalogs introduce complex technical SEO requirements that demand strategic solutions.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '1.5rem', 
                marginBottom: '3rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    icon: '🤖',
                    challenge: 'Crawl Budget for Large Catalogs',
                    solution: 'Electronics stores with thousands of SKUs must prioritize crawl efficiency. Use robots.txt strategically, maintain clean XML sitemaps, control pagination, and avoid wasting crawl budget on low-value filter combinations or out-of-stock products.',
                  },
                  {
                    icon: '🎛️',
                    challenge: 'Faceted Navigation Control',
                    solution: 'Filters by brand, price, specs, and features can generate millions of URL combinations. Manage these through canonicalization, URL parameter handling in Search Console, and selective indexation to avoid duplicate content penalties.',
                  },
                  {
                    icon: '🔗',
                    challenge: 'Duplicate URLs & Parameters',
                    solution: 'Tracking parameters, session IDs, and sorting options create duplicate URL versions of the same content. Implement canonical tags correctly, use parameter handling, and maintain consistent URL structures across the site.',
                  },
                  {
                    icon: '⚡',
                    challenge: 'Performance Under Scale',
                    solution: 'Large product catalogs with spec-heavy pages can suffer from slow load times. Optimize images, implement lazy loading, minimize JavaScript bloat, and ensure Core Web Vitals remain competitive as the catalog grows.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:shadow-lg"
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />

                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '1.25rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>

                    <div style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.875rem',
                      background: 'var(--accent)',
                      color: '#ffffff',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1rem',
                    }}>
                      Technical Challenge
                    </div>

                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                    }}>
                      {item.challenge}
                    </div>

                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/services/technical-ecommerce-seo"
                className="hover:gap-3"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--text)',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Learn About Technical Ecommerce SEO
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

            </div>
          </div>
        </section>

        {/* ELECTRONICS ECOMMERCE SEO ACROSS PLATFORMS */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Electronics Ecommerce SEO Across Platforms
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                }}>
                  Platform choice impacts electronics SEO execution. Understanding platform-specific tradeoffs ensures strategic alignment.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  { 
                    platform: 'SaaS Platforms (Shopify, BigCommerce)',
                    consideration: 'Limited technical flexibility but optimized for speed and reliability. Good for small-to-mid-sized electronics catalogs that prioritize ease of use over deep customization.',
                    icon: '🛒',
                  },
                  { 
                    platform: 'Enterprise Platforms (Magento, Salesforce)',
                    consideration: 'Maximum flexibility for complex spec handling, faceted navigation, and large-scale catalogs. Requires technical expertise and ongoing maintenance but supports sophisticated electronics SEO needs.',
                    icon: '⚡',
                  },
                  { 
                    platform: 'WordPress + WooCommerce',
                    consideration: 'Full control over SEO implementation with plugin ecosystem support. Performance depends on hosting quality and technical maintenance. Suitable for content-heavy electronics stores.',
                    icon: '🔧',
                  },
                  { 
                    platform: 'Custom Development',
                    consideration: 'Complete control over every SEO element but requires disciplined technical architecture. Best for electronics brands with unique catalog requirements and in-house development resources.',
                    icon: '💻',
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:shadow-lg"
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        lineHeight: 1,
                      }}>
                        {item.icon}
                      </div>

                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                      }}>
                        {item.platform}
                      </div>
                    </div>

                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.consideration}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/platforms"
                className="hover:gap-3"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius)',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Platform-Specific SEO
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

            </div>
          </div>
        </section>

        {/* WHO ELECTRONICS ECOMMERCE SEO IS FOR */}
        <section style={{ 
          paddingTop: 'var(--spacing-section)', 
          paddingBottom: 'var(--spacing-section)', 
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          {/* Subtle Background Gradient */}
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '5%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.02',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Right-Fit Criteria
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Who Electronics Ecommerce SEO Is For
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  This approach is built for businesses selling technical products that require informed buying decisions.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
              className="lg:grid-cols-2"
              >
                
                {/* For */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
                  border: '2px solid var(--accent)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    opacity: '0.08',
                  }} />

                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '2.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    This Is For
                  </div>

                  <div style={{ display: 'grid', gap: '1.75rem', position: 'relative', zIndex: 1 }}>
                    {[
                      'Electronics retailers with spec-heavy products',
                      'Gadget brands building direct-to-consumer channels',
                      'Stores with comparison-driven buying cycles',
                      'Technical product catalogs requiring authority',
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          color: 'var(--accent)',
                          flexShrink: 0,
                          fontWeight: '700',
                        }}>
                          ✓
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          color: 'var(--text)',
                          lineHeight: '1.6',
                          fontWeight: '500',
                        }}>
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not For */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '2.5rem',
                  }}>
                    Not Designed For
                  </div>

                  <div style={{ display: 'grid', gap: '1.75rem' }}>
                    {[
                      'Single-product dropshipping operations',
                      'Trend-only sellers without catalog depth',
                      'Businesses expecting instant results',
                      'Stores unwilling to invest in content quality',
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          color: 'var(--muted)',
                          flexShrink: 0,
                          fontWeight: '700',
                          opacity: 0.5,
                        }}>
                          ×
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.6',
                        }}>
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ 
          paddingTop: 'var(--spacing-section)', 
          paddingBottom: 'var(--spacing-section)', 
          background: 'var(--bg)',
          position: 'relative',
        }}>
          {/* Subtle Background Gradient */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '15%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.02',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Frequently Asked Questions
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Questions About Electronics SEO
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Common questions about electronics ecommerce SEO strategy and execution.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <FAQAccordion faqs={faqs} />
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem', 
          background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Premium Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
            opacity: '0.04',
            pointerEvents: 'none',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
            opacity: '0.03',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}>
              
              {/* Premium Eyebrow */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                fontSize: '0.8125rem',
                fontWeight: '600',
                color: 'var(--accent)',
                marginBottom: '2.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.75px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                }} />
                Ready to Start?
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '2rem',
                letterSpacing: '-0.04em',
              }}>
                SEO Built for Complex{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Electronics Journeys
                </span>
              </h2>

              <p style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '3.5rem',
                maxWidth: '720px',
                margin: '0 auto 3.5rem',
              }}>
                Electronics SEO requires precision, technical depth, and understanding of how buyers research and compare products before purchasing.
              </p>

              <Link
                href="/contact"
                className="hover:shadow-2xl"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.375rem 2.5rem',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                }}
              >
                Discuss Electronics Ecommerce SEO
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
