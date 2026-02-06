'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export default function JewelryAccessoriesEcommerceSEO() {
  
  // Metadata management (client-side)
  useEffect(() => {
    // Set page title
    document.title = 'Jewelry & Accessories Ecommerce SEO | SEO for Jewelry Brands – Moaz Haider'
    
    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property'
      let element = document.querySelector(`meta[${attribute}="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Meta description
    updateMetaTag('description', 'Jewelry and accessories ecommerce SEO strategies built for trust, craftsmanship, and high-value buying decisions.', true)
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo')

    // Open Graph tags
    updateMetaTag('og:title', 'Jewelry & Accessories Ecommerce SEO | SEO for Jewelry Brands – Moaz Haider')
    updateMetaTag('og:description', 'Jewelry and accessories ecommerce SEO strategies built for trust, craftsmanship, and high-value buying decisions.')
    updateMetaTag('og:url', 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo')
    updateMetaTag('og:type', 'website')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:title', 'Jewelry & Accessories Ecommerce SEO | SEO for Jewelry Brands – Moaz Haider', true)
    updateMetaTag('twitter:description', 'Jewelry and accessories ecommerce SEO strategies built for trust, craftsmanship, and high-value buying decisions.', true)
  }, [])

  // FAQ data for schema and component
  const faqs = [
    {
      question: 'Is jewelry ecommerce SEO competitive?',
      answer: 'Jewelry ecommerce SEO is highly competitive, especially for high-value categories like engagement rings, fine jewelry, and luxury watches. Success requires brand differentiation, trust-building content, and technical excellence—not just keyword optimization. Established brands and new entrants can both succeed with strategic, patient SEO that prioritizes value and credibility over quick wins.'
    },
    {
      question: 'How do you build trust through SEO for jewelry?',
      answer: 'Trust in jewelry SEO is built through transparency, authenticity signals, and content depth. Product pages must showcase materials, certifications, and craftsmanship details. Brand story pages establish credibility. Reviews, guarantees, and return policies reduce purchase anxiety. SEO strategies that surface these trust elements early in organic discovery create confident, high-value conversions.'
    },
    {
      question: 'Does brand matter more than keywords in jewelry SEO?',
      answer: 'For jewelry ecommerce, brand and keywords work together—but brand often carries more weight in buyer decisions. Users searching for jewelry prioritize trust, reputation, and authenticity. SEO must surface brand story, craftsmanship narratives, and credibility markers alongside product optimization. Keyword-driven traffic without brand trust leads to high bounce rates and low conversions.'
    },
    {
      question: 'How long does jewelry SEO take to show results?',
      answer: 'Jewelry SEO typically requires 4-8 months to show meaningful organic growth, with continued compounding over 12-18 months. High-value categories demand authority building, which takes time. Technical optimization and content creation can begin immediately, but trust signals, brand recognition, and category authority develop gradually. Patient, strategic SEO outperforms aggressive short-term tactics in jewelry ecommerce.'
    }
  ]

  // JSON-LD Schema
  useEffect(() => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo#webpage',
          'url': 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo',
          'name': 'Jewelry & Accessories Ecommerce SEO',
          'description': 'Jewelry and accessories ecommerce SEO strategies built for trust, craftsmanship, and high-value buying decisions.',
          'isPartOf': {
            '@type': 'WebSite',
            '@id': 'https://moazhaider.com/#website',
            'url': 'https://moazhaider.com',
            'name': 'Moaz Haider - Ecommerce SEO Consultant'
          }
        },
        {
          '@type': 'Service',
          '@id': 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo#service',
          'serviceType': 'Jewelry & Accessories Ecommerce SEO Consulting',
          'name': 'Jewelry & Accessories Ecommerce SEO',
          'description': 'Jewelry and accessories ecommerce SEO strategies built for trust, craftsmanship, and high-value buying decisions.',
          'provider': {
            '@type': 'Person',
            'name': 'Moaz Haider',
            'url': 'https://moazhaider.com'
          },
          'areaServed': 'International'
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://moazhaider.com/industries/jewelry-accessories-ecommerce-seo#faq',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schemaData)
    script.id = 'jewelry-seo-schema'
    
    // Remove existing schema if present
    const existing = document.getElementById('jewelry-seo-schema')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      const schemaScript = document.getElementById('jewelry-seo-schema')
      if (schemaScript) {
        schemaScript.remove()
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        
        {/* HERO SECTION — TWO COLUMN */}
        <section style={{
          paddingTop: 'calc(var(--spacing-section) - 2rem)',
          paddingBottom: '3rem',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Breadcrumbs */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--muted)',
              }}>
                <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Home
                </Link>
                <span>/</span>
                <Link href="/industries" style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Industries
                </Link>
                <span>/</span>
                <span style={{ color: 'var(--text-secondary)' }}>Jewelry & Accessories</span>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Left Column — Content */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.15)',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  color: 'rgb(217, 119, 6)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '2rem',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                  </svg>
                  Jewelry & Accessories Industry SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.05',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.035em',
                }}>
                  Jewelry & Accessories Ecommerce SEO
                </h1>

                <p style={{
                  fontSize: '1.375rem',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                  maxWidth: '600px',
                }}>
                  SEO strategies built for jewelry and accessories brands where trust, craftsmanship, and brand value drive buying decisions.
                </p>

                <Link 
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '1rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: 'none',
                  }}
                  className="hover:shadow-xl"
                >
                  Discuss Jewelry Ecommerce SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {/* Stats Section */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem',
                  marginTop: '4rem',
                  paddingTop: '3rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      color: 'rgb(217, 119, 6)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      marginBottom: '0.75rem',
                    }}>
                      Trust-First
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                    }}>
                      SEO built for emotional, high-value purchases
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      color: 'rgb(217, 119, 6)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      marginBottom: '0.75rem',
                    }}>
                      Brand-Led
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                    }}>
                      Craftsmanship and story drive visibility
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      color: 'rgb(217, 119, 6)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      marginBottom: '0.75rem',
                    }}>
                      Refined
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                    }}>
                      Elegant optimization that preserves luxury
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column — Abstract Craftsmanship Grid */}
              <div style={{
                position: 'relative',
                height: '600px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
                {[
                  { label: 'Precision', icon: '◇' },
                  { label: 'Materials', icon: '◊' },
                  { label: 'Craft', icon: '✦' },
                  { label: 'Detail', icon: '◈' },
                  { label: 'Trust', icon: '❖' },
                  { label: 'Value', icon: '◆' },
                  { label: 'Story', icon: '✧' },
                  { label: 'Quality', icon: '◇' },
                  { label: 'Legacy', icon: '◊' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="group-hover:opacity-100" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                    }} />
                    
                    <div style={{
                      fontSize: '2rem',
                      color: 'rgb(217, 119, 6)',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.icon}
                    </div>
                    
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      textAlign: 'center',
                      letterSpacing: '0.5px',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* WHY SEO WORKS DIFFERENTLY FOR JEWELRY & ACCESSORIES */}
        <section style={{
          paddingTop: 0,
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                </svg>
                Industry Positioning
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Why SEO Works Differently for Jewelry & Accessories
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry and accessories ecommerce operates at the intersection of emotion, value, and trust—where SEO must reflect brand credibility, not just keyword rankings.
              </p>
            </div>

            {/* Four-Card Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="lg:grid-cols-2"
            >
              
              {/* Card 1 */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                }}>
                  💎
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                }}>
                  High-Value Purchases
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                }}>
                  Jewelry represents significant financial and emotional investment. SEO must support extended research journeys, build confidence through content, and surface trust signals early in organic discovery. Quick conversions are rare—authority and credibility drive sales.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                }}>
                  ❤️
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                }}>
                  Emotional Decision-Making
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                }}>
                  Jewelry purchases are deeply personal—gifts, milestones, self-expression. SEO strategies must honor emotional intent, not just transactional keywords. Content should resonate with meaning, celebration, and connection, reflecting the significance of each piece.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                }}>
                  🎁
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                }}>
                  Gift-Driven Journeys
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                }}>
                  A significant portion of jewelry searches are gift-related—anniversaries, engagements, holidays. SEO must anticipate occasion-based queries, guide uncertain buyers, and provide clarity around fit, sizing, and presentation. Gift discovery demands empathy and structure.
                </p>
              </div>

              {/* Card 4 */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.75rem',
                  lineHeight: 1,
                }}>
                  🏆
                </div>

                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: '800',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.025em',
                }}>
                  Brand Trust & Authenticity
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                }}>
                  Buyers prioritize authenticity, material quality, and brand reputation. SEO that surfaces craftsmanship stories, certifications, and transparency builds trust that generic product optimization cannot. Brand perception directly impacts organic performance and conversion rates.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* JEWELRY & ACCESSORIES SEARCH BEHAVIOR — CORE SCROLL-STOPPER */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
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
                Jewelry & Accessories Search Behavior
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry search patterns reflect intent layers—category discovery, material preferences, occasion-driven needs, and brand exploration.
              </p>
            </div>

            {/* Four Behavior Cards */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {/* Behavior 1 */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  📂
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Category-Led Discovery
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users begin with broad categories—rings, necklaces, bracelets, watches, earrings. SEO must optimize category pages for clarity, filtering, and visual hierarchy. Strong category structure supports organic discovery and internal navigation.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem' }}>Example searches:</div>
                  <div>→ gold necklaces</div>
                  <div>→ diamond rings</div>
                  <div>→ women's watches</div>
                </div>
              </div>

              {/* Behavior 2 */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  ✨
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Material-Based Searches
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Material drives purchase decisions—gold, silver, platinum, gemstones, diamonds. SEO must integrate material attributes into category pages, filters, and product detail. Material transparency builds credibility and supports refinement.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem' }}>Example searches:</div>
                  <div>→ sterling silver earrings</div>
                  <div>→ 14k gold bracelet</div>
                  <div>→ sapphire necklace</div>
                </div>
              </div>

              {/* Behavior 3 */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  🎉
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Occasion-Driven Intent
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Jewelry searches often reflect life events—engagements, anniversaries, birthdays, holidays. SEO strategies must create occasion-specific landing pages, gift guides, and content that align with celebratory or milestone intent.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem' }}>Example searches:</div>
                  <div>→ engagement rings</div>
                  <div>→ mother's day jewelry</div>
                  <div>→ anniversary gifts</div>
                </div>
              </div>

              {/* Behavior 4 */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  🔍
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Brand + Product Hybrid Queries
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Users combine brand names with product types or materials—showing both brand awareness and exploration. SEO must optimize for branded category pages and brand + attribute combinations to capture this high-intent traffic.
                </p>

                <div style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.25rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem' }}>Example searches:</div>
                  <div>→ [brand] gold rings</div>
                  <div>→ [brand] diamond necklaces</div>
                  <div>→ [brand] bracelets</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CATEGORY & COLLECTION SEO FOR JEWELRY STORES */}
        <section style={{
          paddingTop: 'calc(var(--spacing-section) - 2rem)',
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                </svg>
                Category SEO
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
                Category & Collection SEO for Jewelry Stores
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry category structures must balance product type, materials, occasions, and brand collections—creating clarity without duplication.
              </p>
            </div>

            {/* Three-Column Cards */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1200px',
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  📋
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Product Type Hierarchy
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Primary category structure by product type—rings, necklaces, bracelets, earrings, watches. Clear hierarchy supports user navigation and search engine understanding. Avoid excessive subcategorization that dilutes authority.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Foundation of navigation architecture
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  💍
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Material & Collection Pages
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Secondary collections by material (gold, silver, gemstone) or brand collections. These pages capture refinement searches and support filtering. SEO must ensure collections don't duplicate category intent or create thin pages.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Supports material and brand exploration
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Internal Linking Strategy
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Link related categories, collections, and occasion pages to distribute authority and guide users. Cross-linking between materials, product types, and gift guides creates a cohesive discovery experience.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Authority distribution across site
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
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Jewelry category SEO</strong> requires structural clarity and brand coherence. Learn more about <Link href="/services/category-page-seo" style={{ color: 'rgb(217, 119, 6)', textDecoration: 'underline', fontWeight: '600' }}>category page SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* PRODUCT PAGE SEO FOR HIGH-VALUE JEWELRY */}
        <section style={{
          paddingTop: 'var(--spacing-section)',
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                </svg>
                Product SEO
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
                Product Page SEO for High-Value Jewelry
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry product pages must communicate value, authenticity, and craftsmanship—building confidence in high-investment purchases.
              </p>
            </div>

            {/* Six-Card Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2 lg:grid-cols-3"
            >
              
              {[
                {
                  icon: '📝',
                  title: 'Material Transparency',
                  description: 'Detailed material specifications—metal purity, gemstone origin, carat weight, certifications. Transparency builds trust and supports informed purchasing decisions for high-value items.'
                },
                {
                  icon: '🔍',
                  title: 'Craftsmanship Detail',
                  description: 'Explain how pieces are made—handcrafted elements, production methods, quality control. Craftsmanship narratives differentiate products and justify value propositions.'
                },
                {
                  icon: '📷',
                  title: 'Visual Excellence',
                  description: 'Multiple high-quality images showing detail, scale, and wearability. Image optimization for Core Web Vitals without sacrificing visual impact or product presentation.'
                },
                {
                  icon: '🎯',
                  title: 'Sizing & Fit Information',
                  description: 'Clear sizing guides, ring size charts, length references for necklaces and bracelets. Reducing fit uncertainty lowers return rates and supports confident purchasing.'
                },
                {
                  icon: '✅',
                  title: 'Authenticity Signals',
                  description: 'Certifications, guarantees, return policies, warranties. SEO must surface these trust markers early to reduce purchase anxiety for high-value transactions.'
                },
                {
                  icon: '🚫',
                  title: 'Avoiding Over-Optimization',
                  description: 'Elegant product descriptions that prioritize reader clarity over keyword density. Luxury perception requires restraint—aggressive SEO undermines brand credibility.'
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group hover:shadow-xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    lineHeight: 1,
                  }}>
                    {card.icon}
                  </div>

                  <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
                    fontSize: '1.375rem',
                    fontWeight: '800',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s ease',
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    {card.description}
                  </p>
                </div>
              ))}

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
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Jewelry product page SEO</strong> balances optimization with elegance and trust-building. Learn more about <Link href="/services/product-page-seo" style={{ color: 'rgb(217, 119, 6)', textDecoration: 'underline', fontWeight: '600' }}>product page SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* BRAND, CRAFTSMANSHIP & STORY-DRIVEN SEO — JEWELRY DIFFERENTIATOR */}
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                </svg>
                Brand & Story
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Brand, Craftsmanship & Story-Driven SEO
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry brands differentiate through origin stories, craftsmanship narratives, and values—SEO must elevate these assets without diluting luxury perception.
              </p>
            </div>

            {/* Three-Card Grid */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  📖
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Brand Story Pages
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Origin stories, founder narratives, brand values, and heritage create SEO authority for branded searches. Story pages support discovery for users seeking authenticity and brand connection—not just products.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Builds brand search visibility
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  🛠️
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Craftsmanship Narratives
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Pages explaining production methods, artisan techniques, and quality standards create educational SEO value. Craftsmanship content supports high-intent users researching value and authenticity before purchase.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Differentiates quality positioning
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  🌟
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Preserving Luxury Perception
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  SEO for luxury jewelry requires restraint. Keyword optimization must not undermine brand positioning or create a discount-driven perception. Elegant copy, refined structure, and strategic depth preserve premium value.
                </p>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted)',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  Refinement over aggressive tactics
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* TRUST, AUTHENTICITY & CONSIDERATION IN JEWELRY SEO */}
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
                </svg>
                Trust & Authenticity
              </div>

              <h2 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.05',
                color: 'var(--text)',
                marginBottom: '1.75rem',
                letterSpacing: '-0.035em',
              }}>
                Trust, Authenticity & Consideration in Jewelry SEO
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                High-value jewelry purchases demand extended consideration periods where trust signals, credibility markers, and reassurance reduce purchase friction.
              </p>
            </div>

            {/* Four-Card Grid */}
            <div style={{
              display: 'grid',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
            className="md:grid-cols-2"
            >
              
              {[
                {
                  icon: '🔒',
                  title: 'Trust Signals in Organic Search',
                  description: 'SEO strategies must surface trust signals early—certifications, reviews, guarantees, secure checkout indicators. High-value purchases require reassurance before users engage with product pages. Organic snippets, meta descriptions, and site structure should communicate safety and legitimacy.'
                },
                {
                  icon: '⭐',
                  title: 'Reviews & Social Proof',
                  description: 'Authentic reviews build confidence for jewelry purchases. SEO must integrate review schema, customer testimonials, and third-party ratings to support credibility in search results. Review-driven content creates trust authority that generic product SEO cannot achieve.'
                },
                {
                  icon: '📜',
                  title: 'Certificates & Guarantees',
                  description: 'Gemstone certificates, metal authenticity guarantees, warranty information, and return policies reduce perceived risk. SEO strategies should ensure these reassurance elements are discoverable, clear, and prominent in both organic search and on-site experience.'
                },
                {
                  icon: '🛡️',
                  title: 'Reducing Purchase Friction',
                  description: 'Extended consideration journeys require content that addresses concerns—sizing uncertainty, material authenticity, investment value, return processes. SEO content should anticipate objections and provide clarity, confidence, and support throughout the decision journey.'
                },
              ].map((card, i) => (
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
                  <div className="group-hover:w-full" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '4px',
                    width: '0',
                    background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }} />

                  <div className="group-hover:opacity-100" style={{
                    position: 'absolute',
                    top: '-5%',
                    right: '-5%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                    {card.icon}
                  </div>

                  <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.75',
                    color: 'var(--text-secondary)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {card.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* TECHNICAL SEO CHALLENGES IN JEWELRY ECOMMERCE */}
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
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
                Technical SEO Challenges in Jewelry Ecommerce
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry stores face unique technical SEO demands—image-heavy catalogs, variant complexity, and performance requirements.
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
                  title: 'Image-Heavy Catalogs',
                  explanation: 'Jewelry product pages require multiple high-resolution images to showcase detail, scale, and craftsmanship. Technical SEO must balance image quality with performance—optimizing file sizes, implementing lazy loading, and ensuring Core Web Vitals compliance without sacrificing visual excellence.'
                },
                {
                  title: 'Variant Handling (Size, Material)',
                  explanation: 'Rings come in multiple sizes, necklaces in different lengths, and products in various materials. SEO must manage variants without creating duplicate pages or thin content. Canonical tags, structured data, and variant consolidation strategies prevent indexation issues.'
                },
                {
                  title: 'Crawl Discipline & Performance',
                  explanation: 'Large jewelry catalogs with collections, filters, and variants can overwhelm crawl budgets. Technical SEO ensures high-value pages are prioritized, low-value pages are excluded from indexation, and site architecture supports efficient crawling and discovery.'
                },
                {
                  title: 'Schema & Structured Data',
                  explanation: 'Product schema, review schema, breadcrumb schema, and organization schema support rich results and search visibility. Accurate implementation enhances trust signals in search results and improves click-through rates for competitive jewelry queries.'
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
                      background: 'linear-gradient(135deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
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
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Technical SEO</strong> ensures jewelry ecommerce sites scale elegantly without sacrificing performance or user experience. Learn more about <Link href="/services/technical-ecommerce-seo" style={{ color: 'rgb(217, 119, 6)', textDecoration: 'underline', fontWeight: '600' }}>technical ecommerce SEO</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* JEWELRY ECOMMERCE SEO ACROSS PLATFORMS */}
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
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
                Jewelry Ecommerce SEO Across Platforms
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Platform choice affects SEO flexibility, brand presentation, and control over customer experience for jewelry stores.
              </p>
            </div>

            {/* Two-Card Grid */}
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  🎨
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Platform Tradeoffs for Premium Ecommerce
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Jewelry brands require platforms that support elegant product presentation, brand storytelling, and refined customer experiences. Hosted platforms (Shopify, BigCommerce) offer speed but may limit customization for luxury positioning. Headless and custom solutions provide full control but require technical investment. Platform selection should prioritize brand perception and SEO flexibility.
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
                  background: 'linear-gradient(90deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                <div className="group-hover:opacity-100" style={{
                  position: 'absolute',
                  top: '-5%',
                  right: '-5%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
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
                  ⚙️
                </div>

                <h3 className="group-hover:text-[rgb(217,119,6)]" style={{
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
                  Flexibility vs Control for Brand Presentation
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  Platform templates may not align with premium jewelry brand aesthetics. SEO strategies must work within platform constraints or extend capabilities through custom development. Brands prioritizing luxury perception often require platforms that support editorial storytelling, refined design, and full content control without compromising technical SEO fundamentals.
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
                Platform selection impacts long-term SEO flexibility and brand presentation for jewelry ecommerce. Learn more about <Link href="/platforms" style={{ color: 'rgb(217, 119, 6)', textDecoration: 'underline', fontWeight: '600' }}>ecommerce platform SEO strategies</Link>.
              </p>
            </div>

          </div>
        </section>

        {/* WHO JEWELRY & ACCESSORIES ECOMMERCE SEO IS FOR */}
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
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
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
                Who Jewelry & Accessories Ecommerce SEO Is For
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
              }}>
                Jewelry SEO is built for brands where craftsmanship, trust, and value matter more than volume or price competition.
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
                  color: 'rgb(217, 119, 6)',
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
                    'Jewelry brands prioritizing trust and authenticity',
                    'Premium accessories stores with refined brand identity',
                    'Gift-driven ecommerce brands serving milestone purchases',
                    'Jewelry stores committed to craftsmanship narratives',
                    'Brands building long-term authority in luxury ecommerce',
                    'Stores where brand perception drives conversion',
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
                        color: 'rgb(217, 119, 6)',
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
                    'Low-value bulk jewelry resellers prioritizing volume',
                    'Trend-only dropshipping stores without brand identity',
                    'Discount-driven sellers competing on price alone',
                    'Stores unwilling to invest in trust and credibility',
                    'Brands seeking quick wins over long-term authority',
                    'Ecommerce sites prioritizing traffic over conversion quality',
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
                <strong style={{ color: 'var(--text)', fontWeight: '700' }}>Jewelry SEO</strong> is designed for brands where elegance, trust, and value create competitive advantage—not just keyword rankings.
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
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'rgb(217, 119, 6)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="rgb(217, 119, 6)"/>
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
                Common questions about jewelry and accessories ecommerce SEO.
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
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.09) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.07) 0%, transparent 70%)',
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
                SEO built for jewelry brands<br />where trust and value matter.
              </h2>

              <p style={{
                fontSize: '1.375rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto 3rem',
              }}>
                Strategic, refined, trust-first Ecommerce SEO for jewelry and accessories stores.
              </p>

              <Link 
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.25rem 2.5rem',
                  background: 'linear-gradient(135deg, rgb(217, 119, 6) 0%, rgb(245, 158, 11) 100%)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="hover:shadow-2xl"
              >
                Discuss Jewelry Ecommerce SEO
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
