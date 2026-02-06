'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function IndustriesPage() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Ecommerce SEO by Industry | Industry-Specific SEO Strategies – Moaz Haider'
    
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

    updateMetaTag('description', 'Ecommerce SEO strategies tailored to different industries—designed around how real products are searched, compared, and purchased.')
    updateMetaTag('og:title', 'Ecommerce SEO by Industry | Industry-Specific SEO Strategies – Moaz Haider', true)
    updateMetaTag('og:description', 'Ecommerce SEO strategies tailored to different industries—designed around how real products are searched, compared, and purchased.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Ecommerce SEO by Industry | Industry-Specific SEO Strategies – Moaz Haider')
    updateMetaTag('twitter:description', 'Ecommerce SEO strategies tailored to different industries—designed around how real products are searched, compared, and purchased.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries')
  }, [])
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries#webpage',
        url: 'https://moazhaider.com/industries',
        name: 'Ecommerce SEO by Industry',
        description: 'Ecommerce SEO strategies tailored to different industries—designed around how real products are searched, compared, and purchased.',
        isPartOf: {
          '@id': 'https://www.moazhaider.com/#website',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://moazhaider.com/industries#collectionpage',
        name: 'Ecommerce SEO Industries',
        hasPart: [
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/fashion-ecommerce-seo' },
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/electronics-ecommerce-seo' },
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/beauty-skincare-ecommerce-seo' },
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/furniture-home-decor-seo' },
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/health-supplements-ecommerce-seo' },
          { '@type': 'WebPage', url: 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does ecommerce SEO differ by industry?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, significantly. Search behavior, product complexity, visual vs specification-driven discovery, and competitive density vary dramatically across industries. Fashion relies heavily on imagery and discovery; electronics demand detailed specifications and comparison; supplements require trust signals and compliance. SEO must adapt to how real users search and evaluate products in each vertical.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which ecommerce industries are hardest to rank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Industries with high commercial value, low product differentiation, and dominant incumbent brands are the most challenging. Health supplements, electronics, and jewelry face intense competition and require sustained authority-building. Fashion and home decor offer more opportunities through long-tail keywords and visual discovery. The difficulty is not inherent to the industry but to the competitive landscape and brand strength.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can one SEO strategy work across industries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. While foundational technical SEO principles apply universally, the execution must adapt to industry-specific search patterns. A strategy optimized for fashion catalog discovery will fail for technical product comparison searches. Content depth, internal linking logic, schema markup needs, and conversion optimization differ by how users research and purchase in each vertical.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you approach competitive niches?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Through strategic positioning rather than brute force. Identify under-served long-tail segments, leverage product differentiation through content depth, build topical authority in specific sub-categories, and prioritize user intent alignment over keyword volume. In competitive industries, precision and relevance outperform generic optimization tactics.',
            },
          },
        ],
      },
    ],
  }

  const industries = [
    {
      name: 'Fashion / Clothing Ecommerce',
      description: 'SEO strategies for visual discovery, seasonal trends, and fit-focused search behavior.',
      url: '/industries/fashion-ecommerce-seo',
    },
    {
      name: 'Electronics & Gadgets Ecommerce',
      description: 'Technical specification optimization, comparison-driven content, and product feature targeting.',
      url: '/industries/electronics-ecommerce-seo',
    },
    {
      name: 'Beauty & Skincare Ecommerce',
      description: 'Ingredient transparency, routine-focused content, and concern-based search intent.',
      url: '/industries/beauty-skincare-ecommerce-seo',
    },
    {
      name: 'Furniture & Home Decor Ecommerce',
      description: 'Visual merchandising, room-based navigation, and style-driven search behavior.',
      url: '/industries/furniture-home-decor-seo',
    },
    {
      name: 'Health & Supplements Ecommerce',
      description: 'Compliance-aware optimization, benefit-focused content, and trust signal integration.',
      url: '/industries/health-supplements-ecommerce-seo',
    },
    {
      name: 'Jewelry & Accessories Ecommerce',
      description: 'Occasion-based targeting, material specifications, and luxury positioning strategies.',
      url: '/industries/jewelry-accessories-ecommerce-seo',
    },
  ]

  const faqs = [
    {
      question: 'Does ecommerce SEO differ by industry?',
      answer: 'Yes, significantly. Search behavior, product complexity, visual vs specification-driven discovery, and competitive density vary dramatically across industries. Fashion relies heavily on imagery and discovery; electronics demand detailed specifications and comparison; supplements require trust signals and compliance. SEO must adapt to how real users search and evaluate products in each vertical.',
    },
    {
      question: 'Which ecommerce industries are hardest to rank?',
      answer: 'Industries with high commercial value, low product differentiation, and dominant incumbent brands are the most challenging. Health supplements, electronics, and jewelry face intense competition and require sustained authority-building. Fashion and home decor offer more opportunities through long-tail keywords and visual discovery. The difficulty is not inherent to the industry but to the competitive landscape and brand strength.',
    },
    {
      question: 'Can one SEO strategy work across industries?',
      answer: 'No. While foundational technical SEO principles apply universally, the execution must adapt to industry-specific search patterns. A strategy optimized for fashion catalog discovery will fail for technical product comparison searches. Content depth, internal linking logic, schema markup needs, and conversion optimization differ by how users research and purchase in each vertical.',
    },
    {
      question: 'How do you approach competitive niches?',
      answer: 'Through strategic positioning rather than brute force. Identify under-served long-tail segments, leverage product differentiation through content depth, build topical authority in specific sub-categories, and prioritize user intent alignment over keyword volume. In competitive industries, precision and relevance outperform generic optimization tactics.',
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
        
        {/* HERO — MODERN INDUSTRY SHOWCASE */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 4rem)',
            paddingBottom: '6rem',
            background: 'var(--bg)',
            overflow: 'hidden',
          }}
        >
          {/* Premium Gradient Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 65%)',
            opacity: '0.06',
            pointerEvents: 'none',
            filter: 'blur(60px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.04',
            pointerEvents: 'none',
            filter: 'blur(50px)',
          }} />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Breadcrumb */}
            <div style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
              <Link
                href="/"
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
                Home
              </Link>
            </div>

            {/* Split Hero Layout */}
            <div style={{
              display: 'grid',
              gap: '4rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Left: Content */}
              <div>
                {/* Premium Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
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
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                  Industry-Specific SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.045em',
                }}>
                  SEO That Speaks
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Your Industry
                  </span>
                </h1>

                <p style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                  maxWidth: '580px',
                }}>
                  Every industry sells differently. Fashion is visual discovery. Electronics is spec comparison. Supplements is trust building. Your SEO strategy should reflect how your industry actually converts.
                </p>

                {/* CTA Buttons */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '3rem',
                }}>
                  <Link
                    href="#industries"
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
                    Explore Industries
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  <Link
                    href="/services"
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
                    SEO Services
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
                    { number: '6+', label: 'Industries' },
                    { number: '100%', label: 'Customized' },
                    { number: '∞', label: 'Potential' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '2.25rem',
                        fontWeight: '800',
                        color: 'var(--text)',
                        lineHeight: '1',
                        marginBottom: '0.625rem',
                        background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.75px',
                        fontWeight: '700',
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Dynamic Visual Grid */}
              <div style={{
                position: 'relative',
                height: '600px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
                
                {/* Floating accent orbs in background */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: '0.1',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  animation: 'float 6s ease-in-out infinite',
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '10%',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: '0.08',
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  animation: 'float 8s ease-in-out infinite reverse',
                }} />

                {/* Grid Items - Bento Box Style */}
                {/* Top Row */}
                <div style={{
                  gridColumn: 'span 2',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}>👗</div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Fashion</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Visual Discovery</div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                  }} />
                </div>

                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)' }}>Electronics</div>
                </div>

                {/* Middle Row */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💄</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)' }}>Beauty</div>
                </div>

                <div style={{
                  gridColumn: 'span 2',
                  background: 'var(--surface)',
                  border: '2px dashed var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem',
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '2rem',
                  }}>
                    <span>🛋️</span>
                    <span>💊</span>
                    <span>💍</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--text)', marginBottom: '0.5rem' }}>
                      +3 More Industries
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      Furniture, Health, Jewelry
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div style={{
                  gridColumn: 'span 2',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: 'var(--muted)',
                      marginBottom: '0.5rem',
                      fontWeight: '700',
                    }}>
                      Industry Focus
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      lineHeight: '1.5',
                    }}>
                      SEO tailored to how each industry sells
                    </div>
                  </div>
                  <div style={{
                    fontSize: '3rem',
                    opacity: 0.3,
                  }}>
                    ✨
                  </div>
                </div>

                <Link
                  href="#industries"
                  style={{
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="hover:shadow-xl"
                >
                  <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '0.75rem' }}>
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700' }}>
                    View All
                  </div>
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* WHY INDUSTRY MATTERS IN ECOMMERCE SEO */}
        <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--surface-alt)', position: 'relative' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Strategic Foundation
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Why Industry Matters in Ecommerce SEO
                </h2>
                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Different industries require fundamentally different SEO approaches.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '1.75rem',
              }}
              className="lg:grid-cols-3"
              >
                
                {[
                  {
                    title: 'Search Behavior Differs by Product Type',
                    description: 'Users searching for clothing behave differently than users searching for electronics or supplements. Discovery vs comparison, imagery vs specifications, impulse vs research—these patterns shape keyword targeting, content depth, and conversion optimization.',
                    icon: '🎯',
                  },
                  {
                    title: 'Competition Varies by Vertical',
                    description: 'Ranking difficulty is not universal. Some industries are saturated with dominant brands and paid advertising. Others offer opportunities through long-tail targeting and specialized positioning. Understanding competitive density informs strategic prioritization.',
                    icon: '📈',
                  },
                  {
                    title: 'SEO Priorities Change by Industry Model',
                    description: 'A fashion store with 10,000 SKUs requires different internal linking logic than a furniture store with 300 curated pieces. Catalog depth, product turnover, seasonality, and purchase frequency all influence how SEO is structured and scaled.',
                    icon: '⚙️',
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
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
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
                      pointerEvents: 'none',
                    }} />

                    <div style={{
                      fontSize: '2.75rem',
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
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY CHALLENGES × SEO FOCUS */}
        <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Product Categories
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Industry Characteristics × SEO Focus
                </h2>
                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Different product types demand different strategic priorities.
                </p>
              </div>

              {/* Structured comparison grid */}
              <div style={{
                display: 'grid',
                gap: '1.75rem',
              }}>
                {[
                  {
                    characteristic: 'Visual Products (Fashion, Decor)',
                    seoFocus: 'Discovery & imagery optimization, visual search readiness, style-based navigation, seasonal content planning.',
                    icon: '👗',
                  },
                  {
                    characteristic: 'Technical Products (Electronics, Gadgets)',
                    seoFocus: 'Specification tables, comparison content, feature-driven keywords, model variants and compatibility mapping.',
                    icon: '💻',
                  },
                  {
                    characteristic: 'Regulated Products (Supplements, Health)',
                    seoFocus: 'Trust signals, compliance-aware content, ingredient transparency, benefit-focused optimization within regulatory boundaries.',
                    icon: '💊',
                  },
                  {
                    characteristic: 'High-Value Products (Jewelry, Furniture)',
                    seoFocus: 'Material and craftsmanship details, occasion-based targeting, luxury positioning, conversion-focused content depth.',
                    icon: '💍',
                  },
                  {
                    characteristic: 'Routine Purchases (Beauty, Personal Care)',
                    seoFocus: 'Problem-solution content, routine-driven keywords, subscription optimization, concern-based navigation.',
                    icon: '💄',
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
                    {/* Top gradient accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)',
                      opacity: '0.7',
                    }} />
                    
                    <div style={{
                      display: 'grid',
                      gap: '2rem',
                    }}
                    className="lg:grid-cols-[auto_1fr]"
                    >
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '1rem',
                      }}>
                        <div style={{
                          fontSize: '3rem',
                          lineHeight: 1,
                        }}>
                          {item.icon}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.75px',
                        }}>
                          Industry Type
                        </div>
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: 'var(--text)',
                          lineHeight: '1.3',
                          letterSpacing: '-0.02em',
                          marginBottom: '1.5rem',
                        }}>
                          {item.characteristic}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.75px',
                          marginBottom: '1rem',
                        }}>
                          SEO Focus Areas
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.7',
                        }}>
                          {item.seoFocus}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SPECIALIZE IN (HUB) */}
        <section 
          id="industries"
          style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--surface-alt)' }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Specialty Areas
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Industries We Specialize In
                </h2>
                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Strategic SEO tailored to how products are searched, compared, and purchased in each vertical.
                </p>
              </div>

              {/* Premium Industries Grid */}
              <div style={{
                display: 'grid',
                gap: '1.75rem',
              }}
              className="lg:grid-cols-2"
              >
                {industries.map((industry, i) => {
                  const industryIcons = ['👗', '💻', '💄', '🛋️', '💊', '💍']
                  const industryColors = [
                    'rgba(236, 72, 153, 0.1)',
                    'rgba(59, 130, 246, 0.1)', 
                    'rgba(213, 179, 199, 0.1)',
                    'rgba(168, 145, 109, 0.1)',
                    'rgba(34, 197, 94, 0.1)',
                    'rgba(168, 85, 247, 0.1)'
                  ]
                  return (
                  <Link
                    key={i}
                    href={industry.url}
                    className="group"
                    style={{
                      display: 'block',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '0',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Gradient orb on hover */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-20%',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${industryColors[i]} 0%, transparent 70%)`,
                      opacity: '0',
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                    className="group-hover:opacity-100"
                    />
                    
                    <div style={{ padding: '2.75rem', position: 'relative', zIndex: 1 }}>
                      {/* Icon & Arrow */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '2rem',
                      }}>
                        <div style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: 'var(--radius-lg)',
                          background: industryColors[i],
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                          transition: 'all 0.3s ease',
                        }}
                        className="group-hover:scale-110"
                        >
                          {industryIcons[i]}
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: 'var(--accent)',
                          transition: 'gap 0.3s ease',
                        }}
                        className="group-hover:gap-3"
                        >
                          <span>Explore</span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <h3 style={{
                        fontSize: '1.625rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.25',
                        transition: 'color 0.3s ease',
                      }}
                      className="group-hover:text-accent"
                      >
                        {industry.name}
                      </h3>
                      
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        {industry.description}
                      </p>
                    </div>
                    
                    {/* Bottom premium accent line */}
                    <div style={{
                      height: '4px',
                      background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className="group-hover:scale-x-100"
                    />
                  </Link>
                  )
                })}
              </div>

            </div>
          </div>
        </section>

        {/* HOW ECOMMERCE SEO DIFFERS ACROSS INDUSTRIES */}
        <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Execution Differences
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  How Ecommerce SEO Differs Across Industries
                </h2>
                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Strategic execution varies across fundamental dimensions.
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
                    title: 'Catalog Depth Differences',
                    description: 'A fashion retailer with thousands of SKUs faces different internal linking challenges than a furniture store with hundreds of curated pieces. SEO architecture must scale appropriately to catalog size and product turnover.',
                    icon: '📊',
                  },
                  {
                    title: 'Intent Differences',
                    description: 'Users searching for supplements research benefits and ingredients. Users searching for clothing browse styles and inspiration. Electronics shoppers compare specifications. Each intent pattern requires different content strategies and conversion paths.',
                    icon: '🎯',
                  },
                  {
                    title: 'Content Depth Differences',
                    description: 'Technical products demand detailed specifications and comparison tables. Visual products prioritize imagery and lifestyle context. Regulated industries require compliance-aware content. Depth is not universal—it is strategic and contextual.',
                    icon: '📝',
                  },
                  {
                    title: 'Conversion Behavior Differences',
                    description: 'Jewelry purchases involve higher consideration and emotional decision-making. Beauty products often align with personal care routines. Electronics follow specification-based logic. SEO must support the natural purchase journey of each industry.',
                    icon: '✨',
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
                    {/* Gradient orb */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '140px',
                      height: '140px',
                      background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                      opacity: '0.05',
                      pointerEvents: 'none',
                    }} />
                    
                    <div style={{
                      fontSize: '2.75rem',
                      marginBottom: '1.75rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1.25rem',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.3',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY × PLATFORM × SEO (BRIDGE) */}
        <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--surface-alt)', position: 'relative' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '0',
                overflow: 'hidden',
                position: 'relative',
              }}>
                
                {/* Premium gradient bar */}
                <div style={{
                  height: '5px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)',
                }} />
                
                <div style={{ padding: '3.5rem' }}>
                  <div style={{
                    display: 'grid',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                  className="lg:grid-cols-[1fr_1fr]"
                  >
                    <div>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'var(--accent-light)',
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.75px',
                        borderRadius: 'var(--radius)',
                        marginBottom: '1.5rem',
                      }}>
                        Strategic Integration
                      </div>
                      
                      <h2
                        style={{
                          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                          fontWeight: '700',
                          color: 'var(--text)',
                          marginBottom: '1.5rem',
                          letterSpacing: '-0.02em',
                          lineHeight: '1.2',
                        }}
                      >
                        Industry × Platform × SEO
                      </h2>
                      
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                      }}>
                        A fashion brand on Shopify faces different SEO constraints than the same brand on Magento or a custom platform. The industry defines the strategic direction. The platform defines the execution boundaries.
                      </p>
                      
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                      }}>
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
                          View Platforms
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                        <Link
                          href="/services"
                          className="hover:gap-3"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.875rem 1.75rem',
                            background: 'var(--bg)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            color: 'var(--text)',
                            fontSize: '0.9375rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          View Services
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    <div style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2.5rem',
                    }}>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Effective ecommerce SEO adapts to both—understanding how catalog architecture, product discovery, and conversion optimization must work within the platform's technical reality while serving the industry's search patterns.
                      </p>
                      
                      <div style={{
                        marginTop: '2rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                      }}>
                        {['Industry', 'Platform', 'SEO'].map((item, i) => (
                          <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                              fontSize: '0.75rem',
                              fontWeight: '700',
                              color: 'var(--accent)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
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
            </div>
          </div>
        </section>

        {/* WHO INDUSTRY-SPECIFIC ECOMMERCE SEO IS FOR */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              <div style={{
                display: 'grid',
                gap: '1.5rem',
              }}
              className="lg:grid-cols-2"
              >
                
                {/* For */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius)',
                      background: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                      fontWeight: '700',
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}>
                      Who This Is For
                    </h2>
                  </div>
                  
                  <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {[
                      'Brands in competitive niches requiring strategic differentiation',
                      'Multi-SKU catalogs needing scalable SEO architecture',
                      'Ecommerce businesses prioritizing long-term organic growth',
                      'Stores where search behavior directly impacts conversion',
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          alignItems: 'flex-start',
                          padding: '1rem',
                          background: 'var(--bg)',
                          borderRadius: 'var(--radius)',
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--accent-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.125rem',
                        }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                          }} />
                        </div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                        }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not For */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--border)',
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius)',
                      background: 'var(--bg)',
                      border: '2px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                      fontWeight: '700',
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}>
                      Not For
                    </h2>
                  </div>
                  
                  <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {[
                      'Generic dropshipping stores without differentiation',
                      'Short-term SEO quick fixes or gaming tactics',
                      'Businesses unwilling to invest in content and structure',
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          alignItems: 'flex-start',
                          padding: '1rem',
                          background: 'var(--bg)',
                          borderRadius: 'var(--radius)',
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          flexShrink: 0,
                          marginTop: '0.125rem',
                        }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="9" stroke="var(--border)" strokeWidth="2" />
                            <path d="M13 7L7 13M7 7L13 13" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                        }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--surface-alt)' }}>
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
                  Common Questions
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Frequently Asked Questions
                </h2>

                <p style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Answers to common questions about industry-specific ecommerce SEO.
                </p>
              </div>

              <FAQAccordion faqs={faqs} />

            </div>
          </div>
        </section>

        {/* FINAL CTA (NAVIGATIONAL CLOSE) */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* Premium Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
            opacity: '0.08',
            pointerEvents: 'none',
            filter: 'blur(50px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
            opacity: '0.06',
            pointerEvents: 'none',
            filter: 'blur(40px)',
          }} />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              
              {/* Premium Eyebrow Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                fontSize: '0.8125rem',
                fontWeight: '700',
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
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                Ready to Start?
              </div>
              
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.04em',
                }}
              >
                Find the Right Strategy{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  for Your Industry
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
                Explore industry-specific SEO strategies designed for how your products are actually searched, compared, and purchased.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <Link
                  href="#industries"
                  className="hover:shadow-2xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.375rem 2.5rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Explore Industries
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                
                <Link
                  href="/services"
                  className="hover:shadow-lg hover:border-accent"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.375rem 2.5rem',
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
