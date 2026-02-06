'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export default function FurnitureHomeDecorSEOPage() {
  
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Furniture & Home Decor Ecommerce SEO | SEO for Furniture Brands – Moaz Haider'
    
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

    updateMetaTag('description', 'Furniture and home decor ecommerce SEO strategies designed for long buying cycles, visual discovery, and high-consideration purchases.')
    updateMetaTag('og:title', 'Furniture & Home Decor Ecommerce SEO | SEO for Furniture Brands – Moaz Haider', true)
    updateMetaTag('og:description', 'Furniture and home decor ecommerce SEO strategies designed for long buying cycles, visual discovery, and high-consideration purchases.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries/furniture-home-decor-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Furniture & Home Decor Ecommerce SEO | SEO for Furniture Brands – Moaz Haider')
    updateMetaTag('twitter:description', 'Furniture and home decor ecommerce SEO strategies designed for long buying cycles, visual discovery, and high-consideration purchases.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/furniture-home-decor-seo')
  }, [])
  
  // FAQs for schema and display
  const faqs = [
    {
      question: 'Is furniture ecommerce SEO competitive?',
      answer: 'Furniture and home decor SEO is competitive, particularly for broad category terms and established product types. However, opportunities exist through style-specific positioning, room-based content strategies, and specialized product niches. Long buying cycles mean sustained visibility builds authority over time.'
    },
    {
      question: 'How do you handle large furniture catalogs?',
      answer: 'Large furniture catalogs require strategic internal linking, category hierarchy optimization, and crawl budget management. We prioritize core categories and best-selling products while ensuring style and room-based navigation paths are crawlable and valuable. Not every SKU needs equal SEO investment.'
    },
    {
      question: 'Do furniture stores need inspiration pages?',
      answer: 'Yes. Inspiration and room-based content captures early-stage discovery searches and builds topical authority. These pages should educate, inspire, and link to relevant products—supporting the journey from browsing to consideration. Well-structured inspiration content drives both traffic and conversion.'
    },
    {
      question: 'How long does furniture SEO take to work?',
      answer: 'Furniture SEO typically shows initial movement in 3-6 months for niche categories and style-specific queries, with sustained growth developing over 6-12+ months. The long consideration cycle means SEO compounds over time as authority builds. Patience and consistency are critical.'
    },
  ]
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries/furniture-home-decor-seo',
        url: 'https://moazhaider.com/industries/furniture-home-decor-seo',
        name: 'Furniture & Home Decor Ecommerce SEO',
        description: 'Furniture and home decor ecommerce SEO strategies designed for long buying cycles, visual discovery, and high-consideration purchases.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://moazhaider.com',
        },
      },
      {
        '@type': 'Service',
        name: 'Furniture & Home Decor Ecommerce SEO',
        serviceType: 'Furniture & Home Decor Ecommerce SEO Consulting',
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

        {/* HERO — INSPIRATION + AUTHORITY */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '8rem',
            background: 'linear-gradient(to bottom, var(--bg) 0%, var(--surface-alt) 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Enhanced Background Gradients */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, rgba(168, 145, 109, 0.15) 0%, transparent 65%)',
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-8%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(139, 115, 85, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
            filter: 'blur(60px)',
          }} />
          
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(168, 145, 109, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(100px)',
            transform: 'translateX(-50%)',
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
                  background: 'linear-gradient(135deg, rgba(168, 145, 109, 0.1) 0%, rgba(168, 145, 109, 0.05) 100%)',
                  border: '1px solid rgba(168, 145, 109, 0.2)',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: '#a8916d',
                  marginBottom: '2.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 8px rgba(168, 145, 109, 0.1)',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(168, 145, 109, 0.4)',
                  }} />
                  Furniture & Home Decor Industry SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.045em',
                }}>
                  Furniture & Home Decor
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 50%, var(--text) 100%)',
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
                  SEO strategies built for how furniture and home decor products are discovered, evaluated, and purchased online.
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
                      background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 100%)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '700',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 16px rgba(168, 145, 109, 0.25)',
                    }}
                  >
                    Discuss Furniture Ecommerce SEO
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
                  paddingTop: '2.75rem',
                  borderTop: '2px solid',
                  borderImage: 'linear-gradient(90deg, #a8916d 0%, transparent 100%) 1',
                }}>
                  {[
                    { stat: 'Visual-First', label: 'Discovery' },
                    { stat: 'Long-Cycle', label: 'Consideration' },
                    { stat: 'Space-Driven', label: 'Search Intent' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #a8916d 0%, var(--text) 100%)',
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

              {/* Right: Spatial Layout Grid */}
              <div style={{
                position: 'relative',
                height: '650px',
              }}>
                {/* Architectural Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(4, 1fr)',
                  gap: '1rem',
                  height: '100%',
                }}>
                  
                  {/* Large Feature: Room Context */}
                  <div style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 100%)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(168, 145, 109, 0.2)',
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
                        Buying Journey
                      </div>
                      <div style={{
                        fontSize: '1.625rem',
                        fontWeight: '800',
                        lineHeight: '1.3',
                      }}>
                        Browse →
                        <br />
                        Visualize →
                        <br />
                        Consider
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-40px',
                      right: '-40px',
                      width: '180px',
                      height: '180px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '-20px',
                      width: '120px',
                      height: '120px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '50%',
                      filter: 'blur(30px)',
                    }} />
                  </div>

                  {/* Room Icon */}
                  <div className="hover:shadow-lg" style={{
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
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛋️</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--text)' }}>Rooms</div>
                  </div>

                  {/* Style Icon */}
                  <div className="hover:shadow-lg" style={{
                    background: 'var(--surface)',
                    border: '2px solid #a8916d',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 0 rgba(168, 145, 109, 0)',
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎨</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#a8916d' }}>Styles</div>
                  </div>

                  {/* Dimensions Visual */}
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
                      color: '#a8916d',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '0.25rem',
                    }}>
                      Dimensions
                    </div>
                    {[90, 75, 85, 70].map((width, i) => (
                      <div key={i} style={{
                        height: '6px',
                        background: 'var(--border)',
                        borderRadius: 'var(--radius)',
                        width: `${width}%`,
                      }} />
                    ))}
                  </div>

                  {/* Materials Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🪵</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Materials</div>
                  </div>

                  {/* Space Icon */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📐</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--text)' }}>Space</div>
                  </div>

                  {/* Delivery Consideration */}
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
                    <div style={{ fontSize: '2rem' }}>🚚</div>
                    <div>
                      <div style={{
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        Logistics Trust
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}>
                        Shipping & Returns Matter
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY SEO WORKS DIFFERENTLY FOR FURNITURE & HOME DECOR */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
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
                background: 'linear-gradient(135deg, rgba(168, 145, 109, 0.08) 0%, rgba(168, 145, 109, 0.03) 100%)',
                border: '1px solid rgba(168, 145, 109, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#a8916d"/>
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
                Why SEO Works Differently for Furniture & Home Decor
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Furniture and home decor involve long decision-making cycles, high trust requirements, and visual-first discovery.
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
                  title: 'Long Decision-Making Cycles',
                  explanation: 'Furniture purchases are not impulse decisions. Users research styles, compare options, measure spaces, and evaluate materials over weeks or months. SEO must support the entire consideration journey, not just the final purchase moment.',
                  icon: '⏳',
                },
                {
                  title: 'Visual-First Discovery',
                  explanation: 'Furniture and decor are inherently visual. Users browse by aesthetic before specifications. Images, room context, and lifestyle presentation drive exploration. SEO must prioritize visual search readiness and image optimization.',
                  icon: '👁️',
                },
                {
                  title: 'Room and Lifestyle Context',
                  explanation: 'People search by room (living room sofa, bedroom dresser) and style (modern sectional, farmhouse table). Context-based navigation and content must align with how users mentally categorize and shop for furniture.',
                  icon: '🏠',
                },
                {
                  title: 'High Trust and Logistics Considerations',
                  explanation: 'Shipping, assembly, returns, and durability influence purchase decisions. Trust signals, clear policies, and logistics transparency must be woven into content strategy to reduce friction and build confidence.',
                  icon: '✅',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group hover:shadow-2xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Gradient Orb on Hover */}
                  <div className="group-hover:opacity-100" style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(168, 145, 109, 0.2) 0%, transparent 70%)',
                    opacity: '0',
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                  }} />
                  
                  {/* Accent Border on Hover */}
                  <div className="group-hover:scale-x-100" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #a8916d 0%, #8b7355 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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

                  <h3 className="group-hover:text-[#a8916d]" style={{
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

        {/* FURNITURE & HOME DECOR SEARCH BEHAVIOR (CORE) */}
        <section id="search-behavior" style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'linear-gradient(to bottom, var(--bg) 0%, var(--surface-alt) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative Background Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 145, 109, 0.08) 0%, transparent 70%)',
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
                background: 'linear-gradient(135deg, rgba(168, 145, 109, 0.08) 0%, rgba(168, 145, 109, 0.03) 100%)',
                border: '1px solid rgba(168, 145, 109, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#a8916d"/>
                </svg>
                Search Behavior
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Furniture & Home Decor Search Behavior
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Understanding how furniture buyers search is critical to building an effective SEO strategy.
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
              
              {/* Category-First Discovery */}
              <div className="group hover:shadow-2xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                {/* Animated Gradient on Hover */}
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(168, 145, 109, 0.18) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  filter: 'blur(50px)',
                }} />
                
                {/* Accent Bar */}
                <div className="group-hover:scale-x-100" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #a8916d 0%, #8b7355 100%)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                }} />
                
                <div style={{ fontSize: '3rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🛋️</div>
                <h3 className="group-hover:text-[#a8916d]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Category-First Discovery
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users search by product category as their starting point:
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
                    '"modern sectional sofa"',
                    '"round dining table"',
                    '"floor lamp"',
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
                        padding: '0.875rem 1rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        fontWeight: '500',
                      }}
                    >
                      <span style={{
                        color: '#a8916d',
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

              {/* Room-Based Searches */}
              <div className="group hover:shadow-2xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(168, 145, 109, 0.18) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  filter: 'blur(50px)',
                }} />
                
                <div className="group-hover:scale-x-100" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #a8916d 0%, #8b7355 100%)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                }} />
                <div style={{ fontSize: '2.75rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🏠</div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Room-Based Searches
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Buyers search by the room they are furnishing:
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
                    '"living room furniture"',
                    '"bedroom dresser ideas"',
                    '"home office desk"',
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
                        color: '#a8916d',
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

              {/* Style-Driven Intent */}
              <div className="group hover:shadow-2xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(168, 145, 109, 0.18) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  filter: 'blur(50px)',
                }} />
                
                <div className="group-hover:scale-x-100" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #a8916d 0%, #8b7355 100%)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                }} />
                
                <div style={{ fontSize: '3rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🎨</div>
                <h3 className="group-hover:text-[#a8916d]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Style-Driven Intent
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Style and aesthetic preferences drive exploration:
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
                    '"mid-century modern furniture"',
                    '"farmhouse dining table"',
                    '"minimalist bedroom set"',
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
                        padding: '0.875rem 1rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        fontWeight: '500',
                      }}
                    >
                      <span style={{
                        color: '#a8916d',
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

              {/* Research-Heavy Journeys */}
              <div className="group hover:shadow-2xl" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(168, 145, 109, 0.18) 0%, transparent 70%)',
                  opacity: '0',
                  transition: 'opacity 0.4s ease',
                  filter: 'blur(50px)',
                }} />
                
                <div className="group-hover:scale-x-100" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #a8916d 0%, #8b7355 100%)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                }} />
                
                <div style={{ fontSize: '3rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>🔍</div>
                <h3 className="group-hover:text-[#a8916d]" style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}>
                  Research-Heavy Journeys
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Buyers actively research before purchasing:
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
                    '"best sofa for small space"',
                    '"solid wood vs veneer furniture"',
                    '"leather vs fabric couch"',
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
                        padding: '0.875rem 1rem',
                        background: 'var(--bg)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        fontWeight: '500',
                      }}
                    >
                      <span style={{
                        color: '#a8916d',
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

        {/* CATEGORY & COLLECTION SEO FOR FURNITURE STORES */}
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
                  color: '#a8916d',
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
                  Category & Collection SEO for Furniture Stores
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Furniture catalogs require strategic category structures that support both discovery and consideration.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '1.75rem',
                marginBottom: '4rem',
              }}>
                {[
                  {
                    challenge: 'Deep Category Hierarchies',
                    approach: 'Furniture catalogs require multiple navigation layers—broad categories (living room, bedroom), subcategories (sofas, chairs), and refinements (modern sectionals, leather loveseats). Each level must be crawlable, valuable, and support user browsing patterns without creating thin or duplicate pages.',
                  },
                  {
                    challenge: 'Avoiding Thin Room or Style Pages',
                    approach: 'Not every room or style combination warrants a dedicated page. Creating sparse collections dilutes authority and wastes crawl budget. Category pages should serve strategic search intent, consolidate related products, and provide meaningful navigation value.',
                  },
                  {
                    challenge: 'Internal Linking Between Categories and Inspiration',
                    approach: 'Category pages should link to inspiration guides (e.g., modern living room ideas) and vice versa. This creates topical authority loops and supports users as they move from inspiration to product evaluation. Strategic linking enhances both discoverability and conversion.',
                  },
                  {
                    challenge: 'Managing Large Catalogs Responsibly',
                    approach: 'Large furniture catalogs face crawl budget constraints and indexation challenges. Use pagination strategically, implement canonical tags correctly, and prioritize core categories for SEO investment. Not every SKU or combination requires equal visibility.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-xl lg:grid-cols-[260px_1fr]"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.75rem',
                      display: 'grid',
                      gap: '1.5rem',
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
                    background: '#a8916d',
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

        {/* PRODUCT PAGE SEO FOR FURNITURE ITEMS */}
        <section style={{
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Product Strategy
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Product Page SEO for Furniture Items
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Furniture product pages must educate, reassure, and support long evaluation cycles.
              </p>
            </div>

            {/* Product Page Focus Areas */}
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
                  icon: '📐',
                  title: 'Dimensions & Materials',
                  description: 'Detailed specifications (dimensions, weight, materials, finishes) are critical for furniture buyers. Include structured data and clear content that supports both user decision-making and search engine understanding.',
                },
                {
                  icon: '🎨',
                  title: 'Variant Handling',
                  description: 'Furniture often comes in multiple sizes, colors, and configurations. Handle variants with canonical tags, structured URLs, and clear navigation to avoid duplicate content while maintaining usability.',
                },
                {
                  icon: '📝',
                  title: 'Content Depth',
                  description: 'Product descriptions should educate without overwhelming. Cover materials, construction, care, and styling while maintaining readability. Content depth builds trust and supports long consideration.',
                },
                {
                  icon: '🔍',
                  title: 'SEO for Long Evaluation',
                  description: 'Furniture buyers return multiple times before purchasing. Optimize for branded + product searches, use descriptive titles, and ensure pages are memorable and easy to revisit.',
                },
                {
                  icon: '📸',
                  title: 'Image Optimization',
                  description: 'Multiple high-quality images are essential. Optimize file sizes, use descriptive alt text, implement lazy loading, and consider visual search optimization through structured data.',
                },
                {
                  icon: '⭐',
                  title: 'Reviews & Social Proof',
                  description: 'Customer reviews reduce purchase friction and build confidence. Implement review schema, highlight verified purchases, and use reviews to answer common product questions.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="hover:shadow-xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(168, 145, 109, 0.1) 0%, transparent 70%)',
                  }} />

                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link
                href="/services/product-page-seo"
                className="hover:shadow-xl"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.125rem 2rem',
                  background: '#a8916d',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Learn About Product Page SEO
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* INSPIRATION-LED & ROOM-BASED SEO */}
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Furniture-Specific Strategy
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Inspiration-Led & Room-Based SEO
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Furniture and home decor uniquely benefit from inspiration and room-context content that captures early-stage discovery.
              </p>
            </div>

            {/* Two-Column Layout */}
            <div style={{
              display: 'grid',
              gap: '3rem',
              maxWidth: '1200px',
              margin: '0 auto 4rem',
            }}
            className="lg:grid-cols-2"
            >
              {/* Left: Strategies */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}>
                {[
                  {
                    title: 'Room Inspiration Pages',
                    description: 'Create valuable room-specific content (modern living room ideas, small bedroom furniture) that educates, inspires, and naturally links to relevant products. These pages capture top-of-funnel traffic and build topical authority.',
                  },
                  {
                    title: 'Style & Lifestyle Guides',
                    description: 'Style guides (mid-century modern furniture, farmhouse decor) serve users exploring aesthetic preferences before committing to specific products. Well-structured guides support discovery and drive qualified traffic.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-lg"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.5rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right: Implementation */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}>
                {[
                  {
                    title: 'Linking Inspiration Content to Products',
                    description: 'Inspiration pages should link contextually to relevant products and categories. This supports user journeys from browsing to consideration while creating SEO equity loops that strengthen both content and product page authority.',
                  },
                  {
                    title: 'Preserving SEO Equity in Inspiration Hubs',
                    description: 'Avoid thin inspiration content that dilutes authority. Each page should provide meaningful value, support clear search intent, and link strategically within your site architecture. Quality over quantity is critical.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:shadow-lg"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.5rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insight Callout */}
            <div style={{
              background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              textAlign: 'center',
              color: '#ffffff',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                lineHeight: '1.3',
              }}>
                Inspiration Content Drives Discovery & Authority
              </div>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                opacity: 0.95,
                margin: 0,
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                Furniture buyers browse before they buy. Room and style-based content captures early-stage searches, builds topical authority, and supports the journey from inspiration to purchase.
              </p>
            </div>

          </div>
        </section>

        {/* TRUST, LOGISTICS & CONSIDERATION IN FURNITURE SEO */}
        <section style={{
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Trust & Logistics
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Trust, Logistics & Consideration in Furniture SEO
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                High-consideration furniture purchases require transparent policies and confidence-building content.
              </p>
            </div>

            {/* Trust Cards */}
            <div style={{
              display: 'grid',
              gap: '1.75rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              {[
                {
                  icon: '🚚',
                  title: 'Shipping & Delivery Expectations',
                  explanation: 'Furniture shipping is complex—white glove delivery, curbside drop-off, or in-home setup? Clear shipping policies, timelines, and costs reduce friction. Include this information on product and category pages to support confident decision-making.',
                },
                {
                  icon: '↩️',
                  title: 'Returns & Durability Considerations',
                  explanation: 'Furniture returns are costly and logistically challenging. Transparent return policies, warranty details, and durability information build trust. Users need reassurance before committing to high-ticket, hard-to-return items.',
                },
                {
                  icon: '✅',
                  title: 'Building Confidence in Organic Journeys',
                  explanation: 'Organic traffic often lacks the trust built through brand awareness. Customer reviews, detailed product information, and clear policies compensate for this gap. SEO must support confidence-building throughout the journey.',
                },
                {
                  icon: '🔧',
                  title: 'Reducing Friction Before Conversion',
                  explanation: 'Assembly requirements, material care, and size fit concerns create hesitation. Address these proactively in content—FAQs, guides, and product details that anticipate objections and reduce pre-purchase anxiety.',
                },
              ].map((card, i) => (
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
                    background: 'radial-gradient(circle, rgba(168, 145, 109, 0.12) 0%, transparent 70%)',
                  }} />

                  <div style={{
                    fontSize: '2.75rem',
                    marginBottom: '1.75rem',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.icon}
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
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.explanation}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TECHNICAL SEO CHALLENGES IN FURNITURE ECOMMERCE */}
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Technical SEO
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Technical SEO Challenges in Furniture Ecommerce
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Furniture stores face unique technical challenges—large catalogs, image-heavy pages, and complex variants.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: '1.75rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}>
              {[
                {
                  challenge: 'Crawl Budget with Large SKU Counts',
                  explanation: 'Furniture catalogs can contain thousands of SKUs across categories, styles, and variants. Crawl budget management is critical—prioritize core categories, consolidate thin pages, and use robots.txt and internal linking strategically to guide search engines toward valuable content.',
                  icon: '🤖',
                },
                {
                  challenge: 'Image-Heavy Page Performance',
                  explanation: 'Furniture pages require multiple high-resolution images to support visual decision-making. Optimize file sizes without sacrificing quality, implement lazy loading, use next-gen formats (WebP, AVIF), and ensure Core Web Vitals are within acceptable ranges despite image density.',
                  icon: '📸',
                },
                {
                  challenge: 'Variant and Parameter Handling',
                  explanation: 'Color, size, and configuration variants create URL parameter challenges. Use canonical tags to consolidate duplicate content, implement structured data correctly, and ensure variant selection doesn\'t fragment SEO equity or create indexation issues.',
                  icon: '🔀',
                },
                {
                  challenge: 'Indexation Control at Scale',
                  explanation: 'Not every page deserves indexation—filter combinations, paginated archives, and internal search results can bloat the index. Use noindex strategically, manage faceted navigation crawlability, and ensure only valuable, unique pages are indexed.',
                  icon: '🗂️',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="hover:shadow-xl lg:grid-cols-[80px_200px_1fr]"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.75rem',
                    display: 'grid',
                    gap: '1.75rem',
                    alignItems: 'start',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    fontSize: '3.5rem',
                    lineHeight: 1,
                  }}>
                    {item.icon}
                  </div>
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
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link
                href="/services/technical-ecommerce-seo"
                className="hover:shadow-xl"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.125rem 2rem',
                  background: '#a8916d',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Technical Ecommerce SEO
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* FURNITURE ECOMMERCE SEO ACROSS PLATFORMS */}
        <section style={{
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Platform Flexibility
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Furniture Ecommerce SEO Across Platforms
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                Platform choice impacts how you manage large catalogs, inspiration content, and technical SEO at scale.
              </p>
            </div>

            {/* Platform Considerations */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: '3.5rem',
              maxWidth: '1000px',
              margin: '0 auto 3rem',
            }}>
              <h3 style={{
                fontSize: '1.625rem',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
              }}>
                Platform Tradeoffs for Large Furniture Catalogs
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Furniture catalogs require platforms that support deep category structures, variant management, and image optimization at scale. Shopify and BigCommerce offer simplicity and performance but may limit custom content architecture. Custom solutions provide full control but require ongoing maintenance.
                </p>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Inspiration and room-based content often requires headless or hybrid approaches to maintain SEO flexibility while preserving ecommerce platform strengths. Consider how your platform supports blog-style content, URL structures, and internal linking before committing.
                </p>
              </div>
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
        </section>

        {/* WHO FURNITURE & HOME DECOR ECOMMERCE SEO IS FOR */}
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
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}>
                Who This Is For
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.03em',
              }}>
                Who Furniture & Home Decor Ecommerce SEO Is For
              </h2>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
              }}>
                This approach is built for furniture and home decor businesses that value long-term, sustainable growth.
              </p>
            </div>

            {/* Two-Column: Good Fit vs Not a Fit */}
            <div style={{
              display: 'grid',
              gap: '2.5rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Good Fit */}
              <div style={{
                background: 'var(--surface)',
                border: '2px solid #a8916d',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(168, 145, 109, 0.1)',
                  borderRadius: '999px',
                  marginBottom: '2rem',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#a8916d',
                    borderRadius: '50%',
                  }} />
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: '#a8916d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.75px',
                  }}>
                    Good Fit
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.02em',
                }}>
                  This Is For You If:
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}>
                  {[
                    'You sell furniture, home decor, or multi-category home goods',
                    'You want sustainable, long-term visibility for visual and room-based searches',
                    'You\'re ready to invest in content strategy that supports the full buying journey',
                    'You understand that furniture SEO compounds over time, not overnight',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                        <circle cx="10" cy="10" r="10" fill="#a8916d" fillOpacity="0.15"/>
                        <path d="M6 10L9 13L14 7" stroke="#a8916d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.6',
                        color: 'var(--text)',
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not a Fit */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--bg)',
                  borderRadius: '999px',
                  marginBottom: '2rem',
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--muted)',
                    borderRadius: '50%',
                  }} />
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.75px',
                  }}>
                    Not a Fit
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.02em',
                }}>
                  This Isn't For You If:
                </h3>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}>
                  {[
                    'You sell one-off decorative items without a broader catalog',
                    'You expect immediate results from furniture SEO in weeks',
                    'You rely exclusively on paid ads and aren\'t ready to invest in organic',
                    'You sell trend-driven decor with short product lifecycles',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                        <circle cx="10" cy="10" r="10" fill="var(--border)"/>
                        <path d="M7 7L13 13M13 7L7 13" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* FAQs (FURNITURE-SPECIFIC) */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
          paddingBottom: 'var(--spacing-section)',
          background: 'var(--bg)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(168, 145, 109, 0.08) 0%, rgba(168, 145, 109, 0.03) 100%)',
                border: '1px solid rgba(168, 145, 109, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: '#a8916d',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#a8916d"/>
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
                Furniture Ecommerce SEO FAQs
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Answers to common questions about furniture and home decor ecommerce SEO.
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <FAQAccordion faqs={faqs} />
            </div>

          </div>
        </section>

        {/* FINAL CTA (CALM CLOSE) */}
        <section style={{
          paddingTop: 'calc(var(--spacing-section) + 2rem)',
          paddingBottom: 'calc(var(--spacing-section) + 2rem)',
          background: 'linear-gradient(135deg, #a8916d 0%, #8b7355 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          
          {/* Enhanced Floating Gradient Orbs */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
            filter: 'blur(80px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-8%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
            filter: 'blur(60px)',
          }} />
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(100px)',
            transform: 'translate(-50%, -50%)',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            
            <div style={{ maxWidth: '950px', margin: '0 auto', textAlign: 'center' }}>
              
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                marginBottom: '2.25rem',
                letterSpacing: '-0.04em',
              }}>
                SEO built for long-consideration furniture buying journeys.
              </h2>

              <p style={{
                fontSize: '1.3125rem',
                lineHeight: '1.65',
                marginBottom: '4rem',
                opacity: 0.96,
                maxWidth: '750px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                Let’s build an SEO strategy that supports how furniture buyers browse, evaluate, and purchase—from inspiration to conversion.
              </p>

              <Link
                href="/contact"
                className="hover:shadow-2xl hover:scale-105"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '1.5rem 2.75rem',
                  background: '#ffffff',
                  color: '#a8916d',
                  fontSize: '1.125rem',
                  fontWeight: '800',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                Discuss Furniture Ecommerce SEO
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Subtle Return Link */}
              <div style={{ marginTop: '4rem' }}>
                <Link
                  href="/industries"
                  className="hover:gap-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    opacity: 0.92,
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View All Industries
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
