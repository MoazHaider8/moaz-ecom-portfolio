'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export default function ShopifySEOPage() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Shopify SEO Consultant for Scalable Store Growth | Moaz Haider'
    
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

    updateMetaTag('description', "Shopify SEO tailored to the platform's structure, limitations, and scalability—focused on ranking collections, products, and supporting long-term growth.")
    updateMetaTag('og:title', 'Shopify SEO Consultant for Scalable Store Growth | Moaz Haider', true)
    updateMetaTag('og:description', "Shopify SEO tailored to the platform's structure, limitations, and scalability—focused on ranking collections, products, and supporting long-term growth.", true)
    updateMetaTag('og:url', 'https://moazhaider.com/platforms/shopify-seo', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Shopify SEO Consultant for Scalable Store Growth | Moaz Haider')
    updateMetaTag('twitter:description', "Shopify SEO tailored to the platform's structure, limitations, and scalability—focused on ranking collections, products, and supporting long-term growth.")
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/platforms/shopify-seo')
  }, [])
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/platforms/shopify-seo#webpage',
        url: 'https://moazhaider.com/platforms/shopify-seo',
        name: 'Shopify SEO',
        description: "Shopify SEO tailored to the platform's structure, limitations, and scalability—focused on ranking collections, products, and supporting long-term growth.",
        isPartOf: {
          '@id': 'https://moazhaider.com/#website',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://moazhaider.com/platforms/shopify-seo#service',
        name: 'Shopify SEO',
        serviceType: 'Shopify SEO Consulting',
        provider: {
          '@type': 'Person',
          name: 'Moaz Haider',
        },
        areaServed: 'International',
        url: 'https://moazhaider.com/platforms/shopify-seo',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://moazhaider.com/platforms/shopify-seo#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can Shopify stores rank without heavy backlinks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Shopify stores can rank through strategic internal linking, collection hierarchy optimization, and targeted keyword mapping. While backlinks accelerate authority, a well-structured Shopify store with strong on-page SEO and clear information architecture can achieve competitive rankings in product and collection-focused queries—especially in lower-competition niches.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Shopify limit SEO performance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Shopify imposes structural constraints—limited URL control, fixed navigation patterns, and restricted access to server-level optimizations. However, these constraints do not inherently limit rankings. What matters is working within Shopify\'s architecture strategically: optimizing collection structures, managing duplicate content risks, controlling app bloat, and leveraging Liquid templates effectively. The platform is a framework, not a ceiling.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are Shopify apps bad for SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not inherently, but excessive app use degrades performance, introduces render-blocking scripts, and inflates page weight—all of which impact Core Web Vitals and user experience. Each app should be evaluated for necessity and performance cost. Lightweight apps with minimal DOM impact are fine. Heavy JavaScript-dependent apps that delay interactivity should be avoided or replaced with custom theme code where possible.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Shopify SEO scale internationally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but it requires deliberate planning. Shopify Markets allows multi-currency and regional targeting, but SEO scaling depends on hreflang implementation, localized content strategy, and regional keyword mapping. Language-specific collections and products need individual optimization. International SEO on Shopify is not automatic—it requires market-specific content, structured URL architecture, and ongoing regional performance tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does Shopify SEO take to show results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Collection and product pages can show ranking improvements within 8–12 weeks if the foundational work is strong: optimized metadata, clean URL structure, strategic internal linking, and targeted keywords. Authority-building through content and backlinks extends timelines for competitive terms. Shopify SEO is not a quick fix—it is a compounding process where early structural decisions determine long-term scalability.',
            },
          },
        ],
      },
    ],
  }

  const faqs = [
    {
      question: 'Can Shopify stores rank without heavy backlinks?',
      answer: 'Yes. Shopify stores can rank through strategic internal linking, collection hierarchy optimization, and targeted keyword mapping. While backlinks accelerate authority, a well-structured Shopify store with strong on-page SEO and clear information architecture can achieve competitive rankings in product and collection-focused queries—especially in lower-competition niches.',
    },
    {
      question: 'Does Shopify limit SEO performance?',
      answer: "Shopify imposes structural constraints—limited URL control, fixed navigation patterns, and restricted access to server-level optimizations. However, these constraints do not inherently limit rankings. What matters is working within Shopify's architecture strategically: optimizing collection structures, managing duplicate content risks, controlling app bloat, and leveraging Liquid templates effectively. The platform is a framework, not a ceiling.",
    },
    {
      question: 'Are Shopify apps bad for SEO?',
      answer: 'Not inherently, but excessive app use degrades performance, introduces render-blocking scripts, and inflates page weight—all of which impact Core Web Vitals and user experience. Each app should be evaluated for necessity and performance cost. Lightweight apps with minimal DOM impact are fine. Heavy JavaScript-dependent apps that delay interactivity should be avoided or replaced with custom theme code where possible.',
    },
    {
      question: 'Can Shopify SEO scale internationally?',
      answer: 'Yes, but it requires deliberate planning. Shopify Markets allows multi-currency and regional targeting, but SEO scaling depends on hreflang implementation, localized content strategy, and regional keyword mapping. Language-specific collections and products need individual optimization. International SEO on Shopify is not automatic—it requires market-specific content, structured URL architecture, and ongoing regional performance tracking.',
    },
    {
      question: 'How long does Shopify SEO take to show results?',
      answer: 'Collection and product pages can show ranking improvements within 8–12 weeks if the foundational work is strong: optimized metadata, clean URL structure, strategic internal linking, and targeted keywords. Authority-building through content and backlinks extends timelines for competitive terms. Shopify SEO is not a quick fix—it is a compounding process where early structural decisions determine long-term scalability.',
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
        
        {/* HERO — STATEMENT */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) - 2rem)',
            paddingBottom: '3rem',
            background: 'var(--bg)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem' }}>
              
              {/* Breadcrumb */}
              <div style={{ marginBottom: '2rem' }}>
                <Link
                  href="/platforms"
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
                  Platforms
                </Link>
              </div>

              {/* Editorial frame */}
              <div style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '2.5rem',
                marginBottom: '4rem',
              }}>
                <h1
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                    fontWeight: '800',
                    lineHeight: '0.9',
                    color: 'var(--text)',
                    marginBottom: '2rem',
                    letterSpacing: '-0.05em',
                  }}
                >
                  Shopify SEO
                </h1>
                
                <p
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    lineHeight: '1.4',
                    color: 'var(--text-secondary)',
                    maxWidth: '42rem',
                    fontWeight: '400',
                  }}
                >
                  SEO that works within Shopify's architecture—not against it.
                </p>
              </div>

              {/* Shopify Reality Panel */}
              <div style={{
                display: 'grid',
                gap: '0',
                maxWidth: '68rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}>
                {[
                  { label: 'SaaS Platform', reality: 'Fixed URL structures, managed hosting, template-driven logic.' },
                  { label: 'Strategic Focus', reality: 'Collection hierarchy, internal linking, performance optimization.' },
                  { label: 'Growth Model', reality: 'Compounding authority through structured expansion.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '2rem 2.5rem',
                      borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                      display: 'grid',
                      gap: '0.5rem',
                    }}
                    className="lg:grid-cols-[180px_1fr]"
                  >
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}>
                      {item.reality}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link
                  href="/contact"
                  className="hover:shadow-xl"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 2rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Work With Me
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CORE INSIGHT — SCROLL STOPPER */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              
              {/* Framed Intelligence Panel */}
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(3rem, 6vw, 5rem)',
                position: 'relative',
              }}>
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '80px',
                  height: '3px',
                  background: 'var(--accent)',
                  borderTopLeftRadius: 'var(--radius-lg)',
                }} />
                
                <div style={{ marginBottom: '3.5rem' }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}>
                    Platform Reality
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                      fontWeight: '800',
                      lineHeight: '1.1',
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                      maxWidth: '48rem',
                    }}
                  >
                    Shopify SEO operates
                    within constraints,
                    not despite them.
                  </h2>
                </div>

                {/* Split Reality Grid */}
                <div style={{ 
                  display: 'grid', 
                  gap: '3rem',
                }} className="lg:grid-cols-2">
                  
                  {/* Constraint Column */}
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '2rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      Platform Constraints
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                      {[
                        'Fixed /products/ and /collections/ URL patterns',
                        'Template-driven navigation and structure',
                        'Managed hosting with limited server control',
                        'App ecosystem impacts performance',
                      ].map((item, i) => (
                        <div key={i} style={{
                          fontSize: '1.0625rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1.25rem',
                          borderLeft: '2px solid var(--border-light)',
                        }}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SEO Adaptation Column */}
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '2rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      SEO Adaptation
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                      {[
                        'Optimize handles, metadata, and schema within templates',
                        'Build collection-first hierarchy for category authority',
                        'Focus on theme performance and strategic app selection',
                        'Leverage internal linking for authority distribution',
                      ].map((item, i) => (
                        <div key={i} style={{
                          fontSize: '1.0625rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1.25rem',
                          borderLeft: '2px solid var(--accent)',
                        }}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Pull Quote */}
                <div style={{
                  marginTop: '3.5rem',
                  paddingTop: '2.5rem',
                  borderTop: '1px solid var(--border-light)',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontStyle: 'italic',
                    color: 'var(--text)',
                    lineHeight: '1.6',
                    maxWidth: '52rem',
                  }}>
                    "Effective Shopify SEO isn't about fighting the platform—it's about understanding its architecture and optimizing strategically within it."
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SHOPIFY SEO CONSTRAINTS & OPPORTUNITIES (CORE) */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4.5rem', maxWidth: '52rem' }}>
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Platform Intelligence
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                    fontWeight: '800',
                    lineHeight: '1.15',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Shopify SEO Constraints
                  <br />
                  & Opportunities
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}>
                  Understanding what you can control—and what you cannot—is the foundation of effective Shopify SEO.
                </p>
              </div>

              {/* Constraint-driven insight blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* URL Structure Limitations */}
                <div style={{
                  padding: '3rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '80px',
                    background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                  }} />
                  
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1.25rem',
                  }}>
                    Constraint 01
                  </div>
                  
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.25',
                  }}>
                    URL Structure Limitations
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gap: '2rem',
                  }} className="lg:grid-cols-2">
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        What You Cannot Change
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Shopify enforces /products/ and /collections/ in URLs. You cannot create custom category hierarchies outside these structures. Subfolder logic is fixed. This creates uniform URLs across all stores but limits keyword-rich URL customization.
                      </p>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Strategic Opportunity
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Use product handles and collection handles strategically. These are the only customizable URL components. Make them keyword-descriptive but natural. Focus on H1s, titles, and content hierarchy to compensate for URL rigidity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate Content Risks */}
                <div style={{
                  padding: '3rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '80px',
                    background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                  }} />
                  
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1.25rem',
                  }}>
                    Constraint 02
                  </div>
                  
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.25',
                  }}>
                    Duplicate Content Risks
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gap: '2rem',
                  }} className="lg:grid-cols-2">
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        The Problem
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Products can exist in multiple collections. Each collection page creates a different URL path to the same product. Without proper canonical implementation, this creates indexation ambiguity and dilutes ranking signals across multiple URLs.
                      </p>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        The Solution
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Ensure canonical tags point to /products/handle. Avoid excessive collection assignments for low-value products. Use strategic internal linking to direct authority flow. Monitor Google Search Console for indexation conflicts and resolve canonical misalignment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Collection vs Product Hierarchy */}
                <div style={{
                  padding: '3rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '80px',
                    background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                  }} />
                  
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1.25rem',
                  }}>
                    Constraint 03
                  </div>
                  
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.25',
                  }}>
                    Collection vs Product Hierarchy
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gap: '2rem',
                  }} className="lg:grid-cols-2">
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Hierarchy Logic
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Collections function as category pages. They should target broader, higher-volume keywords. Products target transactional, specific queries. Your Shopify SEO strategy must prioritize collection optimization for visibility and product optimization for conversion.
                      </p>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Strategic Execution
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Build collection pages with strong editorial content, optimized metadata, and clear internal linking. Products should link up to collections. Collections should link to related collections. This creates a natural authority flow that mirrors user intent and search behavior.
                      </p>
                    </div>
                  </div>
                </div>

                {/* App & Theme SEO Impact */}
                <div style={{
                  padding: '3rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '80px',
                    background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                    borderTopLeftRadius: 'var(--radius-lg)',
                  }} />
                  
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1.25rem',
                  }}>
                    Constraint 04
                  </div>
                  
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.25',
                  }}>
                    App & Theme SEO Impact
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gap: '2rem',
                  }} className="lg:grid-cols-2">
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Performance Degradation
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Each Shopify app adds JavaScript, CSS, and third-party requests. Heavy themes with bloated code compound the problem. Poor Core Web Vitals from excessive app use directly impacts rankings, especially on mobile where Shopify traffic is highest.
                      </p>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Optimization Approach
                      </div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Audit all apps quarterly. Remove unused apps immediately. Replace heavy apps with lightweight alternatives or custom Liquid code. Choose themes optimized for speed. Monitor PageSpeed Insights and prioritize fixing Largest Contentful Paint and Cumulative Layout Shift issues.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC FRAMEWORK — EDITORIAL */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
              
              <div style={{ 
                display: 'grid',
                gap: 'clamp(3rem, 6vw, 5rem)',
              }} className="lg:grid-cols-[1fr_1.5fr]">
                
                {/* Left: Section Label */}
                <div>
                  <div style={{
                    position: 'sticky',
                    top: '140px',
                  }}>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      Strategic Framework
                    </div>
                    <h2
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        color: 'var(--text)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      How Strategy
                      <br />
                      Adapts to
                      <br />
                      Shopify
                    </h2>
                  </div>
                </div>

                {/* Right: Editorial Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Priority
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '1rem',
                    }}>
                      Not all collections are equal. Optimize high-opportunity pages first.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Strategy is resource allocation. Focus on what moves revenue.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border-light)' }} />

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Growth Model
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '1rem',
                    }}>
                      Collections rank for broader terms. Expand coverage strategically.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Traffic compounds through collection expansion, not individual product optimization.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border-light)' }} />

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Authority Flow
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '1rem',
                    }}>
                      Content → Collections → Products. Build the foundation first.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Products inherit authority from collections. Optimize the hierarchy.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT & COLLECTION FLOW — VISUAL */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.25rem',
                }}>
                  Optimization Flow
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    lineHeight: '1.15',
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Hierarchy Drives Authority
                </h2>
              </div>

              {/* Visual Flow */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                alignItems: 'center',
              }}>
                
                {/* Products */}
                <div style={{
                  width: '100%',
                  maxWidth: '32rem',
                  padding: '2.5rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.75px',
                  }}>
                    Products
                  </div>
                  <p style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    color: 'var(--text)',
                    fontWeight: '500',
                  }}>
                    Unique metadata, benefit-driven descriptions, strategic internal links.
                  </p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link
                      href="/services/product-page-seo"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        fontWeight: '600',
                      }}
                      className="hover:underline"
                    >
                      Product Page SEO →
                    </Link>
                  </div>
                </div>

                {/* Arrow */}
                <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L12 42M12 42L6 36M12 42L18 36" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* Collections */}
                <div style={{
                  width: '100%',
                  maxWidth: '40rem',
                  padding: '2.5rem',
                  background: 'var(--surface)',
                  border: '2px solid var(--accent)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.75px',
                  }}>
                    Collections
                  </div>
                  <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    color: 'var(--text)',
                    fontWeight: '600',
                  }}>
                    Category hubs. Broader keywords. Editorial content. Authority distribution.
                  </p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link
                      href="/services/category-page-seo"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        fontWeight: '600',
                      }}
                      className="hover:underline"
                    >
                      Category Page SEO →
                    </Link>
                  </div>
                </div>

                {/* Arrow */}
                <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L12 42M12 42L6 36M12 42L18 36" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* Authority */}
                <div style={{
                  width: '100%',
                  maxWidth: '48rem',
                  padding: '2.5rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.75px',
                  }}>
                    Domain Authority
                  </div>
                  <p style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    color: 'var(--text)',
                    fontWeight: '500',
                  }}>
                    Content strategy, topical clusters, internal linking architecture.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL REALITY — CONSTRAINED POWER */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              {/* Darker Inset */}
              <div style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(3rem, 5vw, 4rem)',
              }}>
                
                <div style={{ marginBottom: '3rem', maxWidth: '42rem' }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1rem',
                  }}>
                    Technical Reality
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                      fontWeight: '800',
                      lineHeight: '1.2',
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Platform Control:
                    <br />
                    What You Can—and Cannot—Change
                  </h2>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gap: '2rem',
                }} className="lg:grid-cols-2">
                  
                  {/* Control Column */}
                  <div style={{
                    padding: '2rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '1.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Controllable
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Metadata, Liquid templates, schema markup, internal linking, image optimization, theme performance, strategic app selection.
                    </p>
                  </div>

                  {/* Constraint Column */}
                  <div style={{
                    padding: '2rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--muted)',
                      marginBottom: '1.25rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Platform Constraints
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Server configuration, core URL structure, full robots.txt access, .htaccess modifications, database optimization, sitemap generation logic.
                    </p>
                  </div>

                </div>

                {/* Critical Focus */}
                <div style={{
                  marginTop: '2.5rem',
                  paddingTop: '2.5rem',
                  borderTop: '1px solid var(--border-light)',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                  }}>
                    Theme performance and app bloat directly impact Core Web Vitals. Choose lightweight themes. Audit apps quarterly. Performance is infrastructure.
                  </p>
                </div>

              </div>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="/services/technical-ecommerce-seo"
                  className="hover:gap-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontSize: '0.9375rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'gap 0.2s',
                  }}
                >
                  Technical Ecommerce SEO Service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* WHO IT'S FOR — QUIET FILTER */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem', maxWidth: '42rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Who It's For
                </h2>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '3rem',
              }} className="lg:grid-cols-2">
                
                {/* Right Fit */}
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}>
                    A strong fit
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Revenue between $500K–$10M annually. SEO is a channel priority.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Product catalog requires intentional taxonomy and internal linking.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Team values strategic thinking, not just execution.
                    </p>
                  </div>
                </div>

                {/* Wrong Fit */}
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}>
                    Not a fit
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Looking for quick wins or one-off optimizations.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      SEO is an afterthought, not a strategic priority.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Expecting instant results or unwilling to invest in long-term infrastructure.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CONSULTANT FLOW — COMPACT PHASES */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem', maxWidth: '42rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  How We Work Together
                </h2>
              </div>

              <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
                
                {/* Phase 1 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}>
                    1. Audit
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Technical review, taxonomy audit, competitive gap analysis.
                  </p>
                </div>

                {/* Phase 2 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}>
                    2. Strategy
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Keyword mapping, internal linking structure, metadata templates.
                  </p>
                </div>

                {/* Phase 3 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}>
                    3. Execution
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Theme optimization, schema implementation, redirects, performance fixes.
                  </p>
                </div>

                {/* Phase 4 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}>
                    4. Scaling
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Ongoing monitoring, indexation management, quarterly performance reviews.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ADVANCED SHOPIFY SEO FAQs — PREMIUM ACCORDION */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              <div style={{ marginBottom: '4rem', maxWidth: '42rem' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* FINAL CTA — LUXURY CLOSE */}
        <section
          style={{
            paddingTop: '8rem',
            paddingBottom: '8rem',
            background: 'var(--bg)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ 
              maxWidth: '48rem', 
              margin: '0 auto', 
              textAlign: 'center',
            }}>
              
              {/* Framed Panel */}
              <div style={{
                padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2.5rem, 5vw, 3.5rem)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
              }}>
                
                {/* Corner Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '3px',
                  background: 'var(--accent)',
                  borderTopRightRadius: 'var(--radius-lg)',
                }} />
                
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ready to Optimize?
                </h2>
                
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                  }}
                >
                  Platform-aware. Scalable. Sustainable.
                </p>
                
                <Link
                  href="/contact"
                  className="hover:gap-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 2.5rem',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  Start Conversation
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
