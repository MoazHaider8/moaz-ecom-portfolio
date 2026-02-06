'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function FashionEcommerceSEOPage() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Fashion Ecommerce SEO | SEO for Clothing & Apparel Brands – Moaz Haider'
    
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

    updateMetaTag('description', 'Fashion ecommerce SEO strategies built for clothing brands—focused on collections, seasonality, and how fashion is searched and bought online.')
    updateMetaTag('og:title', 'Fashion Ecommerce SEO | SEO for Clothing & Apparel Brands – Moaz Haider', true)
    updateMetaTag('og:description', 'Fashion ecommerce SEO strategies built for clothing brands—focused on collections, seasonality, and how fashion is searched and bought online.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/industries/fashion-ecommerce-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Fashion Ecommerce SEO | SEO for Clothing & Apparel Brands – Moaz Haider')
    updateMetaTag('twitter:description', 'Fashion ecommerce SEO strategies built for clothing brands—focused on collections, seasonality, and how fashion is searched and bought online.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/fashion-ecommerce-seo')
  }, [])
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/industries/fashion-ecommerce-seo#webpage',
        url: 'https://moazhaider.com/industries/fashion-ecommerce-seo',
        name: 'Fashion Ecommerce SEO',
        description: 'Fashion ecommerce SEO strategies built for clothing brands—focused on collections, seasonality, and how fashion is searched and bought online.',
        isPartOf: {
          '@id': 'https://www.moazhaider.com/#website',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/industries/fashion-ecommerce-seo#service',
        name: 'Fashion Ecommerce SEO',
        serviceType: 'Fashion Ecommerce SEO Consulting',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/industries/fashion-ecommerce-seo',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://moazhaider.com/industries/fashion-ecommerce-seo#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is fashion ecommerce SEO competitive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, especially for generic product categories and high-volume keywords. However, long-tail opportunities exist through specific style descriptors, seasonal collections, and niche positioning. Fashion SEO is less about competing on broad terms and more about building topical authority through collection structure, visual optimization, and strategic content depth.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you handle seasonal fashion SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seasonal collections should be structured to preserve SEO equity year over year. Use consistent URL patterns, maintain seasonal category pages even when collections change, redirect discontinued products appropriately, and build supporting content that remains relevant beyond the season. The goal is compounding authority, not starting fresh every season.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do fashion brands need category-first SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Fashion shoppers discover through categories and collections before drilling into individual products. Strong category SEO—optimized for collection names, styles, occasions, and attributes—captures broader search intent and supports internal linking architecture. Product pages alone cannot compete in fashion ecommerce.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does fashion SEO take to work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fashion ecommerce SEO typically shows initial traction within 8-12 weeks for collection pages and long-tail keywords, with sustained growth building over 6-12 months. Seasonal collections can rank faster if the brand already has domain authority. The timeline depends on current site structure, catalog depth, and competitive positioning.',
            },
          },
        ],
      },
    ],
  }

  const faqs = [
    {
      question: 'Is fashion ecommerce SEO competitive?',
      answer: 'Yes, especially for generic product categories and high-volume keywords. However, long-tail opportunities exist through specific style descriptors, seasonal collections, and niche positioning. Fashion SEO is less about competing on broad terms and more about building topical authority through collection structure, visual optimization, and strategic content depth.',
    },
    {
      question: 'How do you handle seasonal fashion SEO?',
      answer: 'Seasonal collections should be structured to preserve SEO equity year over year. Use consistent URL patterns, maintain seasonal category pages even when collections change, redirect discontinued products appropriately, and build supporting content that remains relevant beyond the season. The goal is compounding authority, not starting fresh every season.',
    },
    {
      question: 'Do fashion brands need category-first SEO?',
      answer: 'Absolutely. Fashion shoppers discover through categories and collections before drilling into individual products. Strong category SEO—optimized for collection names, styles, occasions, and attributes—captures broader search intent and supports internal linking architecture. Product pages alone cannot compete in fashion ecommerce.',
    },
    {
      question: 'How long does fashion SEO take to work?',
      answer: 'Fashion ecommerce SEO typically shows initial traction within 8-12 weeks for collection pages and long-tail keywords, with sustained growth building over 6-12 months. Seasonal collections can rank faster if the brand already has domain authority. The timeline depends on current site structure, catalog depth, and competitive positioning.',
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
        
        {/* HERO — MODERN FASHION SHOWCASE */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '5rem',
            background: 'var(--bg)',
            overflow: 'hidden',
          }}
        >
          {/* Gradient Background */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: '0.06',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Breadcrumb */}
            <div style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
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

            {/* Split Layout */}
            <div style={{ 
              display: 'grid', 
              gap: '5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Left: Content */}
              <div>
                {/* Badge */}
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
                  marginBottom: '2rem',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                  }} />
                  FASHION INDUSTRY SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: '800',
                  lineHeight: '1',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.04em',
                }}>
                  Fashion
                  <br />
                  Ecommerce
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    SEO
                  </span>
                </h1>

                <p style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '2.5rem',
                  maxWidth: '540px',
                }}>
                  SEO strategies built for how fashion brands are discovered, searched, and bought online.
                </p>

                {/* CTA Button */}
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
                  Discuss Fashion Ecommerce SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {/* Key Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem',
                  marginTop: '3rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  {[
                    { label: 'Visual First', value: '👗' },
                    { label: 'Seasonal', value: '🔄' },
                    { label: 'Collections', value: '✨' },
                  ].map((metric, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '2rem',
                        lineHeight: '1',
                        marginBottom: '0.5rem',
                      }}>
                        {metric.value}
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600',
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Modern Visual Grid */}
              <div style={{
                position: 'relative',
                height: '650px',
              }}>
                {/* Bento Grid Layout */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(3, 1fr)',
                  gap: '1rem',
                  height: '100%',
                }}>
                  
                  {/* Large Feature Card - Top Left */}
                  <div style={{
                    gridColumn: 'span 2',
                    gridRow: 'span 2',
                    background: 'linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)',
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
                        marginBottom: '1rem',
                        fontWeight: '700',
                      }}>
                        Fashion Discovery
                      </div>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        lineHeight: '1.2',
                      }}>
                        Browse<br />Collections<br />First
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-30px',
                      width: '150px',
                      height: '150px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                    }} />
                  </div>

                  {/* Small Cards - Top Right Column */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎨</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text)' }}>Style</div>
                  </div>

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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📏</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text)' }}>Fit</div>
                  </div>

                  {/* Bottom Row */}
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
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌈</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text)' }}>Color</div>
                  </div>

                  <div style={{
                    gridColumn: 'span 2',
                    background: 'var(--surface)',
                    border: '2px solid var(--accent)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      lineHeight: 1,
                    }}>
                      🔍
                    </div>
                    <div>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        Attribute-Based Search
                      </div>
                      <div style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                      }}>
                        Material, Season, Occasion
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HOW SEO WORKS DIFFERENTLY FOR FASHION BRANDS */}
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
                  How SEO Works Differently for Fashion Brands
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Fashion ecommerce SEO is not the same as selling electronics, furniture, or supplements. The entire approach must adapt to the reality of how fashion is discovered and purchased.
                </p>
              </div>

              {/* Key Differences Grid */}
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
              className="lg:grid-cols-3"
              >
                {[
                  {
                    title: 'Discovery Pattern',
                    conventional: 'Product → Purchase',
                    fashion: 'Browse → Vibe → Filter → Product',
                    icon: '👗',
                  },
                  {
                    title: 'Search Intent',
                    conventional: 'Specific product specs',
                    fashion: 'Style, occasion, aesthetic',
                    icon: '🔍',
                  },
                  {
                    title: 'Content Priority',
                    conventional: 'Features & specifications',
                    fashion: 'Collections & visual curation',
                    icon: '✨',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    className="hover:shadow-lg"
                  >
                    {/* Top accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                    }} />
                    
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                    
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '1rem',
                    }}>
                      {item.title}
                    </div>

                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      <div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: 'var(--muted)',
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          Conventional
                        </div>
                        <div style={{
                          fontSize: '0.9375rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5',
                        }}>
                          {item.conventional}
                        </div>
                      </div>

                      <div style={{
                        height: '1px',
                        background: 'var(--border)',
                        margin: '0.25rem 0',
                      }} />

                      <div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: 'var(--accent)',
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: '600',
                        }}>
                          Fashion
                        </div>
                        <div style={{
                          fontSize: '0.9375rem',
                          color: 'var(--text)',
                          lineHeight: '1.5',
                          fontWeight: '500',
                        }}>
                          {item.fashion}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom insight */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 2.5rem',
              }}>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  <strong style={{ color: 'var(--text)', fontWeight: '600' }}>This reality demands SEO built around collection architecture, seasonal content strategy, and understanding how fashion brands scale catalogs without diluting authority.</strong> Every decision—from URL structure to internal linking—must serve how fashion is actually searched and bought.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FASHION ECOMMERCE SEARCH BEHAVIOR (CORE) */}
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
                  Fashion Ecommerce Search Behavior
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '48rem',
                }}>
                  Understanding how shoppers search for clothing drives every SEO decision.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '1.5rem',
              }}
              className="lg:grid-cols-2"
              >
                
                {[
                  {
                    label: 'Category-First Discovery',
                    insight: 'Fashion shoppers begin with broad categories—dresses, jackets, sneakers—before narrowing by attributes. Collection pages capture more traffic and convert better than product pages in isolation.',
                  },
                  {
                    label: 'Attribute-Based Search',
                    insight: 'Searches include style descriptors (cropped, oversized, high-waisted), materials (linen, silk, denim), and colors. SEO must support faceted navigation without creating duplicate content.',
                  },
                  {
                    label: 'Seasonal Spikes',
                    insight: 'Fashion search volume follows trends and seasons. Fall collections, summer dresses, holiday outfits—each creates predictable traffic spikes that must be captured and sustained year over year.',
                  },
                  {
                    label: 'Brand + Product Hybrid Intent',
                    insight: 'Users search for brand names blended with product types or styles. Fashion SEO must balance brand positioning with product discoverability, often in the same query.',
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
                      width: '4px',
                      height: '100%',
                      background: 'var(--accent)',
                    }} />
                    
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      marginBottom: '1rem',
                    }}>
                      {item.label}
                    </div>
                    
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      {item.insight}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY & COLLECTION SEO FOR FASHION STORES */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '3rem',
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
                  Category & Collection SEO for Fashion Stores
                </h2>
              </div>

              <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                }}>
                  Fashion brands live or die by their collection structure. A well-optimized category page can drive more organic traffic than hundreds of product pages combined. This is where SEO architecture matters most.
                </p>

                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                  }}>
                    Collection SEO Strategy
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      'Build collections around how users search—not just how you organize inventory internally',
                      'Optimize for both broad categories (dresses, jackets) and specific styles (midi dresses, bomber jackets)',
                      'Manage faceted navigation to avoid duplicate or thin content across filter combinations',
                      'Use strategic internal linking between related collections to reinforce topical authority',
                    ].map((point, i) => (
                      <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--accent-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '0.25rem',
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
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

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

        {/* PRODUCT PAGE SEO FOR FASHION ITEMS */}
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
                  Product Page SEO for Fashion Items
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                }}>
                  Fashion product pages face unique SEO challenges: variants (size, color), naming conventions, seasonal turnover, and thin content risks. Getting product SEO right requires understanding these constraints and building around them strategically.
                </p>
              </div>

              {/* Challenge → Solution Grid */}
              <div style={{ 
                display: 'grid', 
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  {
                    challenge: 'Product Naming Challenges',
                    solution: 'Fashion product names are often brand-specific or style codes. SEO-friendly naming must balance brand language with searchable descriptors without keyword stuffing.',
                    icon: '🏷️',
                  },
                  {
                    challenge: 'Variant Handling (Size, Color)',
                    solution: 'Each color or size should not create a separate URL. Use canonical tags, structured data, and parameters correctly to consolidate authority while maintaining user experience.',
                    icon: '🎨',
                  },
                  {
                    challenge: 'Duplicate Product Risks',
                    solution: 'Similar products across collections or seasonal re-releases can create duplicate content. Strategic canonicalization and variation in supporting content are essential.',
                    icon: '⚠️',
                  },
                  {
                    challenge: 'Content Depth Without Stuffing',
                    solution: 'Fashion product pages need more than generic descriptions. Focus on fit, material, styling suggestions, and care instructions—content that serves users and supports ranking.',
                    icon: '📝',
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
                    {/* Gradient accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />

                    {/* Icon */}
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '1.25rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>

                    {/* Challenge label */}
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
                      Challenge
                    </div>

                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '1.25rem',
                      lineHeight: '1.3',
                    }}>
                      {item.challenge}
                    </div>

                    {/* Divider arrow */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                    }}>
                      <div style={{
                        flex: 1,
                        height: '1px',
                        background: 'var(--border)',
                      }} />
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div style={{
                        flex: 1,
                        height: '1px',
                        background: 'var(--border)',
                      }} />
                    </div>

                    {/* Solution label */}
                    <div style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.875rem',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--border)',
                      color: 'var(--accent)',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1rem',
                    }}>
                      Solution
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
                href="/services/product-page-seo"
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
                Learn About Product Page SEO
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

            </div>
          </div>
        </section>

        {/* SEASONAL & TREND-BASED SEO IN FASHION */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
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
                  Seasonal & Trend-Based SEO in Fashion
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '48rem',
                  lineHeight: '1.6',
                }}>
                  Fashion brands must balance seasonal relevance with evergreen SEO equity.
                </p>
              </div>

              {/* Strategic Approach Cards */}
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}>
                {[
                  {
                    icon: '🔄',
                    type: 'EVERGREEN',
                    title: 'Seasonal Collections vs Evergreen Categories',
                    strategy: 'Seasonal collections (Spring/Summer 2024) should exist as sub-pages within permanent category structures. Do not start fresh each season—build on existing authority. Use consistent URL patterns, update product inventory, and maintain historical seasonal pages for long-tail ranking opportunities.',
                  },
                  {
                    icon: '📈',
                    type: 'TRENDS',
                    title: 'Trend Pages vs Permanent Collections',
                    strategy: 'Trends come and go. Creating dedicated landing pages for micro-trends can capture short-term traffic, but should not replace core collection SEO. Use trends to support permanent collections through internal linking, not as standalone SEO bets.',
                  },
                  {
                    icon: '🏗️',
                    type: 'EQUITY',
                    title: 'Preserving SEO Equity Year Over Year',
                    strategy: 'Fashion SEO is not cyclical—it is cumulative. Every season should build on the previous. Strategic redirects, consistent category structures, and archival content strategy ensure authority compounds rather than resets.',
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
                    {/* Gradient accent */}
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
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                    }}>
                      {/* Icon */}
                      <div style={{
                        fontSize: '2.5rem',
                        lineHeight: 1,
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>

                      <div style={{ flex: 1 }}>
                        {/* Type badge */}
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
                          {item.type}
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: '1.375rem',
                          fontWeight: '600',
                          color: 'var(--text)',
                          marginBottom: '1rem',
                          lineHeight: '1.3',
                        }}>
                          {item.title}
                        </h3>

                        {/* Strategy */}
                        <p style={{
                          fontSize: '0.9375rem',
                          lineHeight: '1.75',
                          color: 'var(--text-secondary)',
                          margin: 0,
                        }}>
                          {item.strategy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SEO CHALLENGES IN FASHION ECOMMERCE */}
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
                  Technical SEO Challenges in Fashion Ecommerce
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                  lineHeight: '1.6',
                }}>
                  Fashion ecommerce introduces complex technical SEO challenges that require strategic solutions.
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
                    challenge: 'Crawl Budget with Large Catalogs',
                    impact: 'Fashion stores with thousands of SKUs risk wasting crawl budget on low-value pages. Strategic use of robots.txt, XML sitemaps, and pagination controls ensure search engines prioritize high-value collections and products.',
                  },
                  {
                    icon: '🎛️',
                    challenge: 'Faceted Navigation',
                    impact: 'Filters by size, color, price, and style can generate thousands of duplicate or thin URLs. Managing these through canonicalization, URL parameter handling, and selective indexation is critical.',
                  },
                  {
                    icon: '🖼️',
                    challenge: 'Image-Heavy Pages',
                    impact: 'Fashion sites are inherently visual. Optimizing image load times, implementing lazy loading, using modern formats (WebP, AVIF), and proper alt text strategy all affect both SEO and Core Web Vitals.',
                  },
                  {
                    icon: '🎯',
                    challenge: 'Indexation Control',
                    impact: 'Not every product or variant should be indexed. Out-of-stock products, discontinued items, and low-value filter pages should be managed proactively to preserve crawl budget and ranking focus.',
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
                    {/* Gradient accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />

                    {/* Icon */}
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '1.25rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>

                    {/* Challenge badge */}
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

                    {/* Title */}
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                    }}>
                      {item.challenge}
                    </div>

                    {/* Impact */}
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.impact}
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

        {/* FASHION ECOMMERCE SEO ACROSS PLATFORMS */}
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
                  Fashion Ecommerce SEO Across Platforms
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '50rem',
                }}>
                  Fashion SEO strategy remains consistent, but execution differs by platform. Understanding platform-specific considerations ensures SEO scales effectively within architectural boundaries.
                </p>
              </div>

              {/* Platform Cards */}
              <div style={{ 
                display: 'grid', 
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
              className="lg:grid-cols-2"
              >
                {[
                  { 
                    platform: 'Shopify',
                    icon: '🛍️',
                    note: 'Limited URL control, managed hosting, theme-driven collection structures',
                    color: 'var(--accent)',
                  },
                  { 
                    platform: 'WooCommerce',
                    icon: '🔧',
                    note: 'Full control over URLs and structure, but performance depends on hosting quality',
                    color: 'var(--accent)',
                  },
                  { 
                    platform: 'Magento',
                    icon: '⚡',
                    note: 'Enterprise-level flexibility with layered navigation complexity',
                    color: 'var(--accent)',
                  },
                  { 
                    platform: 'Custom',
                    icon: '💻',
                    note: 'Maximum control but requires disciplined technical SEO architecture',
                    color: 'var(--accent)',
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
                    {/* Top accent */}
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
                      {/* Icon */}
                      <div style={{
                        fontSize: '2rem',
                        lineHeight: 1,
                      }}>
                        {item.icon}
                      </div>

                      {/* Platform name */}
                      <div style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                      }}>
                        {item.platform}
                      </div>
                    </div>

                    {/* Platform badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.875rem',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--border)',
                      color: 'var(--accent)',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1rem',
                    }}>
                      Platform
                    </div>

                    {/* Note */}
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      {item.note}
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

        {/* WHO FASHION ECOMMERCE SEO IS FOR */}
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
                      'Fashion brands scaling organically through SEO',
                      'Multi-collection apparel stores with seasonal catalogs',
                      'Competitive fashion niches requiring strategic positioning',
                      'DTC clothing brands building long-term search visibility',
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
                      'Single-product or one-off apparel items',
                      'Short-term trend dropshipping without brand equity',
                      'Print-on-demand stores with no catalog depth',
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
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '3rem',
              }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <FAQAccordion faqs={faqs} />

            </div>
          </div>
        </section>

        {/* FINAL CTA (EDITORIAL CLOSE) */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
            opacity: '0.15',
            pointerEvents: 'none',
          }} />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '4rem 3rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                }} />
                
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.1',
                  }}
                >
                  SEO built for how fashion brands<br />grow organically.
                </h2>
                
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2.5rem',
                  maxWidth: '42rem',
                  margin: '0 auto 2.5rem',
                }}>
                  Strategic SEO for clothing brands that understand organic growth is a long-term investment.
                </p>

                <Link
                  href="/contact"
                  className="hover:shadow-xl hover:gap-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.125rem 2.5rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Discuss Fashion Ecommerce SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
