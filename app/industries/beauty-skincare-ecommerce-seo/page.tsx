'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export default function BeautySkincareEcommerceSEOPage() {
  
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Beauty & Skincare Ecommerce SEO | SEO for Beauty Brands – Moaz Haider'
    
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

    updateMetaTag('description', 'Beauty and skincare ecommerce SEO focused on trust, ingredients, and education—built for brands where credibility drives organic growth.')
    updateMetaTag('og:title', 'Beauty & Skincare Ecommerce SEO | SEO for Beauty Brands – Moaz Haider', true)
    updateMetaTag('og:description', 'Beauty and skincare ecommerce SEO focused on trust, ingredients, and education—built for brands where credibility drives organic growth.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries/beauty-skincare-ecommerce-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Beauty & Skincare Ecommerce SEO | SEO for Beauty Brands – Moaz Haider')
    updateMetaTag('twitter:description', 'Beauty and skincare ecommerce SEO focused on trust, ingredients, and education—built for brands where credibility drives organic growth.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/beauty-skincare-ecommerce-seo')
  }, [])
  
  // FAQs for schema and display
  const faqs = [
    {
      question: 'Is beauty ecommerce SEO competitive?',
      answer: 'Beauty and skincare SEO is highly competitive, particularly for established ingredient trends and concern-based queries. Success requires content depth, brand authority, and responsible positioning. Newer or niche ingredients and specific skin concerns can offer strategic entry points with less competition.'
    },
    {
      question: 'How do you handle ingredient-based SEO?',
      answer: 'Ingredient SEO combines education with product discovery. We create ingredient explanation pages that clarify benefits, usage, and compatibility—then link those pages to relevant products. This supports both informational queries and product searches while building topical authority.'
    },
    {
      question: 'Can skincare SEO work without medical claims?',
      answer: 'Absolutely. Effective skincare SEO focuses on education, transparency, and user experience rather than health claims. Content can explain what ingredients do, how products are formulated, and what customers report—without crossing into medical advice or making prohibited claims.'
    },
    {
      question: 'How long does beauty SEO take to show results?',
      answer: 'Beauty SEO typically shows initial traction in 3-6 months for less competitive keywords and 6-12+ months for established ingredient or concern-based terms. Trust signals, content depth, and brand authority accumulate over time. Quick wins exist, but sustainable growth requires patience and consistency.'
    },
  ]
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries/beauty-skincare-ecommerce-seo',
        url: 'https://moazhaider.com/industries/beauty-skincare-ecommerce-seo',
        name: 'Beauty & Skincare Ecommerce SEO',
        description: 'Beauty and skincare ecommerce SEO focused on trust, ingredients, and education—built for brands where credibility drives organic growth.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://moazhaider.com',
        },
      },
      {
        '@type': 'Service',
        name: 'Beauty & Skincare Ecommerce SEO',
        serviceType: 'Beauty & Skincare Ecommerce SEO Consulting',
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

        {/* HERO — TRUST-FIRST FRAMING */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '6rem',
            background: 'var(--bg)',
            overflow: 'hidden',
          }}
        >
          {/* Soft Background Gradient */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(232, 194, 181, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-5%',
            left: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
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
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: '#d5b3c7',
                  marginBottom: '2.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.75px',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: '#d5b3c7',
                    borderRadius: '50%',
                  }} />
                  Beauty & Skincare Industry SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3.25rem, 8vw, 6.5rem)',
                  fontWeight: '800',
                  lineHeight: '1',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.04em',
                }}>
                  Beauty & Skincare
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #d5b3c7 0%, var(--text) 100%)',
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
                  SEO strategies built for beauty brands where trust, ingredients, and education drive buying decisions.
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
                      background: '#d5b3c7',
                      color: '#ffffff',
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Discuss Beauty Ecommerce SEO
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
                    { stat: 'Trust-First', label: 'Search Approach' },
                    { stat: 'Ingredient-Led', label: 'Content Strategy' },
                    { stat: 'Education-Driven', label: 'Authority Building' },
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

              {/* Right: Organic Ingredient Grid */}
              <div style={{
                position: 'relative',
                height: '650px',
              }}>
                {/* Soft, Organic Layout */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(4, 1fr)',
                  gap: '1rem',
                  height: '100%',
                }}>
                  
                  {/* Large Feature: Trust Circle */}
                  <div style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: 'linear-gradient(135deg, #d5b3c7 0%, #c4a0b4 100%)',
                    borderRadius: '24px',
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
                        Discovery Journey
                      </div>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                      }}>
                        Concern →
                        <br />
                        Ingredient →
                        <br />
                        Trust
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

                  {/* Ingredients Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧪</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Ingredients</div>
                  </div>

                  {/* Education Icon */}
                  <div style={{
                    background: 'var(--surface)',
                    border: '2px solid #d5b3c7',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📚</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Education</div>
                  </div>

                  {/* Concern-Based Visual */}
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
                      color: '#d5b3c7',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                    }}>
                      Skin Concerns
                    </div>
                    {[75, 90, 65, 85].map((width, i) => (
                      <div key={i} style={{
                        height: '6px',
                        background: 'var(--border)',
                        borderRadius: 'var(--radius)',
                        width: `${width}%`,
                      }} />
                    ))}
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

                  {/* Clean Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✨</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Clean</div>
                  </div>

                  {/* Brand Trust */}
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
                    <div style={{ fontSize: '2rem' }}>🛡️</div>
                    <div>
                      <div style={{
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        Brand Trust
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}>
                        Credibility Over Volume
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY SEO WORKS DIFFERENTLY FOR BEAUTY & SKINCARE */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: '700',
                color: '#d5b3c7',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Why It's Different
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                textAlign: 'center',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Why SEO Works Differently for Beauty & Skincare
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Beauty and skincare products are applied to the body. This creates unique search behavior patterns driven by trust, education, and reassurance.
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
                  title: 'Trust-Sensitive Search Behavior',
                  explanation: 'People applying products to their skin require credibility before purchase. They search for ingredient safety, brand reputation, and user experiences. SEO must support trust-building, not just product promotion.',
                  icon: '🛡️',
                },
                {
                  title: 'Ingredient & Concern-Based Queries',
                  explanation: 'Beauty searches often begin with skin concerns (acne, aging, sensitivity) or ingredient curiosity (retinol, vitamin C, niacinamide). Content must connect concerns to ingredients and ingredients to products.',
                  icon: '🧪',
                },
                {
                  title: 'Long Research and Reassurance Cycles',
                  explanation: 'Unlike impulse purchases, beauty buying involves extended research phases. Users read reviews, compare formulations, and validate claims across multiple sessions. SEO must support the entire research journey.',
                  icon: '🔍',
                },
                {
                  title: 'Education as a Conversion Driver',
                  explanation: 'Beauty customers convert when they understand what a product does and why it works for them. Educational content is not auxiliary—it is central to discovery, trust, and purchase decisions.',
                  icon: '📚',
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
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(213, 179, 199, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
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
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
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

        {/* BEAUTY & SKINCARE SEARCH BEHAVIOR (CORE) */}
        <section id="search-behavior" style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: '700',
                color: '#d5b3c7',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Search Behavior
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Beauty & Skincare Search Behavior
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Understanding how beauty customers search is fundamental to building an effective SEO strategy.
              </p>
            </div>

            {/* Premium Search Behavior Cards */}
            <div style={{
              display: 'grid',
              gap: '1.75rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Problem-Based Searches */}
              <div className="hover:shadow-xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '140px',
                  height: '140px',
                  background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
                }} />
                <div style={{ fontSize: '2.75rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🎯</div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Problem-Based Searches
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users search with specific skin concerns:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    '"best serum for acne-prone skin"',
                    '"anti-aging routine for sensitive skin"',
                    '"products for hyperpigmentation"',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        fontSize: '0.9375rem',
                        color: 'var(--text)',
                        fontFamily: 'monospace',
                        padding: '0.75rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <span style={{
                        color: '#d5b3c7',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        flexShrink: 0,
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredient-Driven Discovery */}
              <div className="hover:shadow-xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '140px',
                  height: '140px',
                  background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
                }} />
                <div style={{ fontSize: '2.75rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🧪</div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Ingredient-Driven Discovery
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Buyers research specific active ingredients:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    '"retinol serum for beginners"',
                    '"niacinamide vs vitamin C"',
                    '"hyaluronic acid moisturizer"',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        fontSize: '0.9375rem',
                        color: 'var(--text)',
                        fontFamily: 'monospace',
                        padding: '0.75rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <span style={{
                        color: '#d5b3c7',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        flexShrink: 0,
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand + Ingredient Hybrid Queries */}
              <div className="hover:shadow-xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '140px',
                  height: '140px',
                  background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
                }} />
                <div style={{ fontSize: '2.75rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🔗</div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Brand + Ingredient Hybrid Queries
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users combine brand awareness with ingredient interest:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    '"[brand] vitamin C serum review"',
                    '"clean retinol products"',
                    '"fragrance-free niacinamide"',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        fontSize: '0.9375rem',
                        color: 'var(--text)',
                        fontFamily: 'monospace',
                        padding: '0.75rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <span style={{
                        color: '#d5b3c7',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        flexShrink: 0,
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review-First and Trust-Led Intent */}
              <div className="hover:shadow-xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '140px',
                  height: '140px',
                  background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
                }} />
                <div style={{ fontSize: '2.75rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>⭐</div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Review-First and Trust-Led Intent
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Before purchasing, users seek validation:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {[
                    '"[product] reviews sensitive skin"',
                    '"is [brand] cruelty-free"',
                    '"[product] before and after"',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        fontSize: '0.9375rem',
                        color: 'var(--text)',
                        fontFamily: 'monospace',
                        padding: '0.75rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <span style={{
                        color: '#d5b3c7',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        flexShrink: 0,
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

        {/* CATEGORY & COLLECTION SEO FOR BEAUTY STORES */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Category Strategy
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Category & Collection SEO for Beauty Stores
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Beauty catalogs require strategic category structures that support both discovery and trust-building.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
                marginBottom: '4rem',
              }}>
                {[
                  {
                    challenge: 'Concern-Based Categories',
                    approach: 'Beauty customers often navigate by skin concern rather than product type. Categories like "Acne-Prone Skin," "Anti-Aging," or "Sensitive Skin" align with search intent and improve discovery. These pages must educate about the concern while presenting relevant products.',
                  },
                  {
                    challenge: 'Ingredient-Based Collections',
                    approach: 'Collections organized by active ingredients (Retinol, Vitamin C, Hyaluronic Acid) capture ingredient-driven searches. Each collection page should explain what the ingredient does, who it is for, and how to use it—then link to products containing that ingredient.',
                  },
                  {
                    challenge: 'Avoiding Thin or Misleading Pages',
                    approach: 'Not every product attribute deserves a category. Creating collections with only 2-3 products dilutes authority. Similarly, overly specific or misleading categorization (e.g., "miracle cures") damages trust and violates compliance standards.',
                  },
                  {
                    challenge: 'Internal Linking Between Education & Products',
                    approach: 'Category pages should link to educational content (ingredient guides, skin concern hubs) and vice versa. This creates topical authority loops and supports users through the research-to-purchase journey.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-xl lg:grid-cols-[240px_1fr]"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.75rem',
                      display: 'grid',
                      gap: '1.25rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.challenge}
                    </div>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.approach}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/services/category-page-seo"
                  className="hover:shadow-xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2rem',
                    background: '#d5b3c7',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn About Category Page SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* PRODUCT PAGE SEO FOR BEAUTY & SKINCARE PRODUCTS */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
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
                  Product Page SEO for Beauty & Skincare Products
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Beauty product pages must balance trust, transparency, and education with conversion optimization.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
                marginBottom: '4rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    focus: 'Ingredient Transparency',
                    implementation: 'Product pages must clearly list all ingredients, highlight active ingredients, and explain their purpose. Transparency builds trust and supports ingredient-based searches. Ingredient lists should be crawlable, not hidden in images.',
                    icon: '🧪',
                  },
                  {
                    focus: 'Claims vs Compliance Boundaries',
                    implementation: 'Beauty SEO requires careful language. You can explain what ingredients do and what customers report, but not make medical claims or therapeutic promises. Content must be informative without crossing into regulated health advice.',
                    icon: '⚖️',
                  },
                  {
                    focus: 'Content Depth Without Medical Promises',
                    implementation: 'Product pages need detailed content—usage instructions, skin type guidance, ingredient synergies—without implying medical outcomes. Focus on education and transparency rather than exaggerated benefits.',
                    icon: '📚',
                  },
                  {
                    focus: 'Review Context',
                    implementation: 'User reviews add unique content, trust signals, and keyword variation. Reviews mentioning skin types, textures, and usage experiences provide contextual relevance that manufacturer descriptions cannot. Encourage detailed, helpful reviews.',
                    icon: '⭐',
                  },
                  {
                    focus: 'Schema & Structured Data',
                    implementation: 'Product schema with ingredients, review ratings, pricing, and availability improves rich result eligibility. Schema is not optional for beauty SEO - it is foundational for visibility in competitive categories.',
                    icon: '🏗️',
                  },
                  {
                    focus: 'Visual Content Optimization',
                    implementation: 'Beauty products rely heavily on imagery. Images must be optimized for performance (fast loading), accessibility (alt text), and search (descriptive filenames). Product photos should show texture, packaging, and usage context.',
                    icon: '📸',
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
                      background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
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

              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/services/product-page-seo"
                  className="hover:shadow-xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2rem',
                    background: '#d5b3c7',
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

        {/* INGREDIENT & EDUCATIONAL CONTENT SEO */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Educational Strategy
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Ingredient & Educational Content SEO
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Educational content is a beauty-specific differentiator that builds authority, trust, and organic discovery.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
              }}>
                {[
                  {
                    type: 'Ingredient Education Pages',
                    strategy: 'Create dedicated pages explaining what specific ingredients do, how they work, who they are for, and how to use them. These pages capture informational searches and link to products containing those ingredients. They build topical authority and support the research phase of the buying cycle.',
                    badge: 'Authority Building',
                    badgeColor: '#8b5cf6',
                  },
                  {
                    type: 'Skin Concern Hubs',
                    strategy: 'Comprehensive guides addressing specific skin concerns (acne, aging, sensitivity, hyperpigmentation) position your brand as an educational resource. These hubs should explain causes, solutions, recommended ingredients, and product recommendations—while avoiding medical claims.',
                    badge: 'Educational',
                    badgeColor: '#3b82f6',
                  },
                  {
                    type: 'Linking Education → Products',
                    strategy: 'Educational content must link contextually to relevant products. When explaining retinol, link to retinol products. When discussing acne, link to acne-focused collections. This creates topical authority loops and guides users from research to purchase.',
                    badge: 'Conversion Path',
                    badgeColor: '#10b981',
                  },
                  {
                    type: 'Avoiding Misinformation and Overclaims',
                    strategy: 'Educational content must be accurate, sourced, and responsible. Avoid exaggerated claims, unsupported benefits, or misleading comparisons. Trust is earned through accuracy and transparency, not hype. Cite reputable sources when making statements about ingredients or skin science.',
                    badge: 'Trust & Compliance',
                    badgeColor: '#f59e0b',
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
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${item.badgeColor}, transparent)`,
                    }} />

                    <div style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      background: item.badgeColor,
                      color: '#ffffff',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1.5rem',
                    }}>
                      {item.badge}
                    </div>

                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1.25rem',
                      lineHeight: '1.3',
                      letterSpacing: '-0.02em',
                    }}>
                      {item.type}
                    </h3>

                    <p style={{
                      fontSize: '1.0625rem',
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

        {/* TRUST, REVIEWS & COMPLIANCE IN BEAUTY SEO */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
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
                  Trust, Reviews & Compliance in Beauty SEO
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Beauty and skincare SEO success requires credibility, responsible content practices, and ethical positioning.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    signal: 'Reviews in Organic Discovery',
                    impact: 'User reviews influence organic rankings through engagement, content freshness, and keyword variation. Search engines recognize that beauty buyers trust other buyers. Legitimate, detailed reviews improve SEO performance and conversion simultaneously.',
                    icon: '⭐',
                  },
                  {
                    signal: 'Brand Credibility Signals',
                    impact: 'Established beauty brands benefit from domain authority, brand mentions, and authoritative backlinks. Newer brands must build credibility through educational content, transparent practices, and customer validation. Trust is earned gradually.',
                    icon: '🏆',
                  },
                  {
                    signal: 'Responsible Content Practices',
                    impact: 'Beauty and skincare content must avoid medical claims, exaggerated benefits, and misleading comparisons. Focus on education, transparency, and user experiences. Responsible content builds sustainable authority and avoids compliance risks.',
                    icon: '✅',
                  },
                  {
                    signal: 'Authority in Sensitive Categories',
                    impact: 'Beauty and skincare fall into trust-sensitive categories where search engines prioritize authoritative, accurate content. Sites with shallow content, overclaims, or poor user experiences struggle to rank. Authority and trust are prerequisites for visibility.',
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
                      background: 'radial-gradient(circle, rgba(213, 179, 199, 0.12) 0%, transparent 70%)',
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

        {/* TECHNICAL SEO CHALLENGES IN BEAUTY ECOMMERCE */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Technical Foundation
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Technical SEO Challenges in Beauty Ecommerce
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Beauty stores face specific technical SEO requirements driven by large catalogs, image-heavy content, and educational depth.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
                marginBottom: '4rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    icon: '🤖',
                    challenge: 'Crawl Control with Large Catalogs',
                    solution: 'Beauty stores with hundreds or thousands of SKUs must prioritize crawl efficiency. Use robots.txt strategically, maintain clean XML sitemaps, and avoid wasting crawl budget on low-value filter combinations or out-of-stock seasonal products.',
                  },
                  {
                    icon: '📄',
                    challenge: 'Duplicate Educational Content Risks',
                    solution: 'When the same ingredient or concern appears across multiple pages, duplicate content risks emerge. Use canonical tags appropriately, create comprehensive hub pages, and link supporting pages to primary resources rather than duplicating content.',
                  },
                  {
                    icon: '⚡',
                    challenge: 'Image-Heavy Performance',
                    solution: 'Beauty products require high-quality imagery, but large image files hurt Core Web Vitals. Implement lazy loading, modern formats (WebP, AVIF), responsive images, and CDN delivery. Performance impacts both rankings and conversion.',
                  },
                  {
                    icon: '♿',
                    challenge: 'Accessibility Considerations',
                    solution: 'Accessibility improves user experience and SEO. Use descriptive alt text for product images, ensure color contrast for readability, provide text alternatives for visual content, and support keyboard navigation. Accessible sites rank better and convert better.',
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
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #d5b3c7, transparent)',
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
                      background: '#d5b3c7',
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

              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/services/technical-ecommerce-seo"
                  className="hover:shadow-xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2rem',
                    background: '#d5b3c7',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn About Technical Ecommerce SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* BEAUTY ECOMMERCE SEO ACROSS PLATFORMS */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Platform Considerations
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Beauty Ecommerce SEO Across Platforms
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Platform choice impacts beauty SEO execution, particularly for content-heavy stores with educational components.
                </p>
              </div>

              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3.5rem',
                marginBottom: '3rem',
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}>
                  Platform Tradeoffs for Content-Heavy Beauty Stores
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Beauty brands with extensive ingredient education, skin concern hubs, and blog content benefit from platforms offering flexible content management and URL control. SaaS platforms (Shopify, BigCommerce) provide ease of use but may constrain editorial flexibility. Headless or custom solutions offer maximum control but require technical investment.
                </p>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  The optimal platform depends on catalog size, content strategy, technical resources, and SEO priorities. No platform guarantees rankings—execution matters more than platform choice.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/platforms"
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
                  Explore Platform-Specific SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* WHO BEAUTY & SKINCARE ECOMMERCE SEO IS FOR */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
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
                  Who Beauty & Skincare Ecommerce SEO Is For
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  This approach is built for beauty brands committed to trust, transparency, and responsible growth.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '2rem',
              }}
              className="lg:grid-cols-2"
              >
                
                {/* For */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
                  border: '2px solid #d5b3c7',
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
                    background: 'radial-gradient(circle, rgba(213, 179, 199, 0.15) 0%, transparent 70%)',
                  }} />

                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: '#d5b3c7',
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
                      'Skincare brands with ingredient transparency',
                      'Beauty DTC companies building trust',
                      'Ingredient-led ecommerce brands',
                      'Brands committed to responsible content',
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                      }}>
                        <div style={{
                          fontSize: '1.5rem',
                          color: '#d5b3c7',
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
                      'Claim-heavy, non-compliant sellers',
                      'Fast churn product sites',
                      'Businesses expecting instant results',
                      'Brands unwilling to invest in education',
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
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#d5b3c7',
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
                  Questions About Beauty & Skincare SEO
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Common questions about beauty and skincare ecommerce SEO strategy and execution.
                </p>
              </div>

              <FAQAccordion faqs={faqs} />

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
          {/* Soft Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(232, 194, 181, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(213, 179, 199, 0.1) 0%, transparent 60%)',
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
                color: '#d5b3c7',
                marginBottom: '2.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.75px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  background: '#d5b3c7',
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
                SEO Built for Beauty Brands{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #d5b3c7 0%, var(--text) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Where Trust Matters
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
                Beauty and skincare SEO requires patience, transparency, and a commitment to building trust through education and responsible content.
              </p>

              <Link
                href="/contact"
                className="hover:shadow-2xl"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.375rem 2.5rem',
                  background: '#d5b3c7',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(213, 179, 199, 0.2)',
                }}
              >
                Discuss Beauty Ecommerce SEO
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
