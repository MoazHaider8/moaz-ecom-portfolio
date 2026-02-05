'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import AuditForm from '@/components/AuditForm'
import Link from 'next/link'

export default function PlatformsPage() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Ecommerce SEO Platforms I Work With | Moaz Haider'
    
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

    updateMetaTag('description', 'Platform-specific ecommerce SEO adapted to the technical realities, limitations, and scalability of different ecommerce CMS platforms.')
    updateMetaTag('og:title', 'Ecommerce SEO Platforms I Work With | Moaz Haider', true)
    updateMetaTag('og:description', 'Platform-specific ecommerce SEO adapted to the technical realities of ecommerce CMS platforms.', true)
    updateMetaTag('og:url', 'https://moazhaider.com/platforms', true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Moaz Haider', true)
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', 'Ecommerce SEO Platforms I Work With | Moaz Haider')
    updateMetaTag('twitter:description', 'Platform-specific ecommerce SEO adapted to the technical realities of ecommerce CMS platforms.')
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://moazhaider.com/platforms')
  }, [])
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/platforms#webpage',
        url: 'https://moazhaider.com/platforms',
        name: 'Ecommerce SEO Platforms I Work With',
        description: 'Platform-specific ecommerce SEO adapted to the technical realities, limitations, and scalability of different ecommerce CMS platforms.',
        isPartOf: {
          '@id': 'https://www.moazhaider.com/#website',
        },
        about: [
          { '@type': 'Thing', name: 'Shopify SEO' },
          { '@type': 'Thing', name: 'WooCommerce SEO' },
          { '@type': 'Thing', name: 'Magento SEO' },
          { '@type': 'Thing', name: 'BigCommerce SEO' },
          { '@type': 'Thing', name: 'Wix Ecommerce SEO' },
          { '@type': 'Thing', name: 'Custom Ecommerce SEO' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Ecommerce Platforms for SEO',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Shopify SEO',
            url: 'https://moazhaider.com/platforms/shopify-seo',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'WooCommerce SEO',
            url: 'https://moazhaider.com/platforms/woocommerce-seo',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Magento SEO',
            url: 'https://moazhaider.com/platforms/magento-seo',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'BigCommerce SEO',
            url: 'https://moazhaider.com/platforms/bigcommerce-seo',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Wix Ecommerce SEO',
            url: 'https://moazhaider.com/platforms/wix-seo',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Custom Ecommerce SEO',
            url: 'https://moazhaider.com/platforms/custom-ecommerce-seo',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is SEO different on Shopify vs WooCommerce?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, fundamentally. Shopify is a closed SaaS platform with limited control over URL structure, server-side rendering, and theme architecture. WooCommerce runs on WordPress, offering complete control over URLs, hosting, caching, and technical implementation. The SEO strategy must adapt to each platform\'s constraints and capabilities.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do SaaS platforms limit ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SaaS platforms like Shopify, BigCommerce, and Wix impose structural limitations on URL control, indexation management, and technical flexibility. However, these limitations can be navigated with platform-specific strategies. The constraint is not in ranking potential, but in how SEO must be executed within the platform\'s boundaries.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are custom platforms better for SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Custom platforms offer maximum technical control and flexibility for SEO, but they require disciplined architecture and ongoing technical maintenance. They excel at scale when catalog complexity or unique business logic demands custom solutions. The SEO advantage depends entirely on how well the platform is built and maintained.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does platform choice affect international SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Shopify handles multi-currency and hreflang tags natively but limits URL customization. WooCommerce requires plugins for internationalization but offers full control. Magento excels at multi-store architectures. Platform capabilities directly shape how international SEO is structured and scaled.',
            },
          },
        ],
      },
    ],
  }

  const platforms = [
    {
      name: 'Shopify',
      reality: 'Closed SaaS ecosystem with theme-driven constraints',
      fundamental: 'Theme architecture and Liquid template structure fundamentally control crawlability, rendering speed, and URL patterns.',
      url: '/platforms/shopify-seo',
    },
    {
      name: 'WooCommerce (WordPress)',
      reality: 'Open-source flexibility with plugin dependency risks',
      fundamental: 'Plugin conflicts, hosting quality, and database bloat directly determine technical SEO performance and scalability.',
      url: '/platforms/woocommerce-seo',
    },
    {
      name: 'Magento',
      reality: 'Enterprise-grade complexity requiring technical expertise',
      fundamental: 'Layered navigation, multi-store architecture, and server resource demands create unique indexation and performance challenges.',
      url: '/platforms/magento-seo',
    },
    {
      name: 'BigCommerce',
      reality: 'SaaS platform balancing control and constraints',
      fundamental: 'Faceted search URLs, category structures, and server-side rendering capabilities shape crawl budget and indexation strategy.',
      url: '/platforms/bigcommerce-seo',
    },
    {
      name: 'Wix Ecommerce',
      reality: 'Drag-and-drop builder with inherent SEO limitations',
      fundamental: 'JavaScript rendering dependencies, limited schema control, and URL structure constraints require workaround-based strategies.',
      url: '/platforms/wix-seo',
    },
    {
      name: 'Custom Ecommerce Platforms',
      reality: 'Maximum control with maximum responsibility',
      fundamental: 'Architecture decisions—from rendering method to taxonomy structure—entirely determine SEO scalability and maintenance overhead.',
      url: '/platforms/custom-ecommerce-seo',
    },
  ]

  const faqs = [
    {
      question: 'Is SEO different on Shopify vs WooCommerce?',
      answer: 'Yes, fundamentally. Shopify is a closed SaaS platform with limited control over URL structure, server-side rendering, and theme architecture. WooCommerce runs on WordPress, offering complete control over URLs, hosting, caching, and technical implementation. The SEO strategy must adapt to each platform\'s constraints and capabilities.',
    },
    {
      question: 'Do SaaS platforms limit ecommerce SEO?',
      answer: 'SaaS platforms like Shopify, BigCommerce, and Wix impose structural limitations on URL control, indexation management, and technical flexibility. However, these limitations can be navigated with platform-specific strategies. The constraint is not in ranking potential, but in how SEO must be executed within the platform\'s boundaries.',
    },
    {
      question: 'Are custom platforms better for SEO?',
      answer: 'Custom platforms offer maximum technical control and flexibility for SEO, but they require disciplined architecture and ongoing technical maintenance. They excel at scale when catalog complexity or unique business logic demands custom solutions. The SEO advantage depends entirely on how well the platform is built and maintained.',
    },
    {
      question: 'Does platform choice affect international SEO?',
      answer: 'Absolutely. Shopify handles multi-currency and hreflang tags natively but limits URL customization. WooCommerce requires plugins for internationalization but offers full control. Magento excels at multi-store architectures. Platform capabilities directly shape how international SEO is structured and scaled.',
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
        
        {/* PREMIUM HERO — Strategic Positioning */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--spacing-section) + 1rem)',
            paddingBottom: '5rem',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface-alt) 100%)',
          }}
        >
          {/* Enhanced multi-layer background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.25,
              backgroundImage: `
                radial-gradient(circle at 25% 25%, var(--accent) 0.5px, transparent 0.5px),
                radial-gradient(circle at 75% 75%, var(--accent) 0.5px, transparent 0.5px),
                linear-gradient(to right, var(--border) 1px, transparent 1px),
                linear-gradient(to bottom, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: '150px 150px, 150px 150px, 60px 60px, 60px 60px',
              pointerEvents: 'none',
            }}
          />
          
          {/* Floating accent gradient orb */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              right: '8%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
              opacity: 0.06,
              borderRadius: '50%',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
              opacity: 0.04,
              borderRadius: '50%',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
            {/* Enhanced platform spectrum indicator */}
            <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                display: 'inline-flex', 
                gap: '0.25rem', 
                padding: '0.5rem', 
                background: 'var(--surface)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}>
                {[
                  { label: 'SaaS', color: '#0ea5e9' },
                  { label: 'Open Source', color: '#8b5cf6' },
                  { label: 'Enterprise', color: '#f59e0b' },
                  { label: 'Custom', color: '#10b981' }
                ].map((segment, i) => (
                  <div
                    key={segment.label}
                    style={{
                      padding: '0.625rem 1.5rem',
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      letterSpacing: '0.75px',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      position: 'relative',
                      borderRadius: 'var(--radius)',
                      transition: 'all 0.2s',
                    }}
                    className="hover:bg-[var(--surface-alt)]"
                  >
                    <div style={{
                      position: 'absolute',
                      left: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: segment.color,
                      boxShadow: `0 0 8px ${segment.color}`,
                    }} />
                    <span style={{ marginLeft: '1rem' }}>{segment.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Premium editorial divider with accent */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '3rem' 
              }}>
                <div style={{ width: '4rem', height: '3px', background: 'var(--accent)' }} />
                <div style={{ 
                  fontSize: '0.6875rem', 
                  fontWeight: '700', 
                  color: 'var(--accent)', 
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}>Platform Expertise</div>
              </div>
              
              <div 
                style={{ 
                  display: 'grid', 
                  gap: 'clamp(2.5rem, 5vw, 5rem)',
                  alignItems: 'start',
                }}
              >
                <style jsx>{`
                  @media (min-width: 1024px) {
                    div {
                      grid-template-columns: 3fr 2fr;
                    }
                  }
                `}</style>
                
                {/* Left Column - Content */}
                <div>
                  <h1
                    style={{
                      fontSize: 'clamp(2.75rem, 7vw, 5rem)',
                      fontWeight: '800',
                      lineHeight: '1.05',
                      color: 'var(--text)',
                      marginBottom: '2rem',
                      letterSpacing: '-0.03em',
                      background: 'linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Platform-Specific
                    <br />
                    Ecommerce SEO
                  </h1>
                  
                  <p
                    style={{
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      maxWidth: '42rem',
                      marginBottom: '3.5rem',
                      fontWeight: '400',
                    }}
                  >
                    SEO strategies engineered for the technical architecture, structural constraints, and scalability demands of each ecommerce platform.
                  </p>

                  {/* Enhanced capability markers */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1.25rem',
                      maxWidth: '52rem',
                    }}
                  >
                    {[
                      { label: 'Platform Architecture', value: 'Deep technical understanding', icon: '⚙️' },
                      { label: 'Constraint Mapping', value: 'Navigate platform limits', icon: '🎯' },
                      { label: 'Scale Strategy', value: 'From startup to enterprise', icon: '📈' },
                    ].map((item) => (
                      <div 
                        key={item.label}
                        className="hover:shadow-lg"
                        style={{
                          padding: '1.5rem',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-lg)',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Corner accent */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, var(--accent) 0%, transparent 100%)',
                          opacity: 0.1,
                        }} />
                        
                        <div style={{ 
                          fontSize: '1.5rem',
                          marginBottom: '0.75rem',
                          opacity: 0.8,
                        }}>
                          {item.icon}
                        </div>
                        <div style={{ 
                          fontSize: '0.6875rem', 
                          fontWeight: '700', 
                          color: 'var(--accent)', 
                          marginBottom: '0.625rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.75px'
                        }}>
                          {item.label}
                        </div>
                        <div style={{ 
                          fontSize: '0.9375rem', 
                          color: 'var(--text-secondary)', 
                          lineHeight: '1.5',
                          fontWeight: '400',
                        }}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Audit Form */}
                <div style={{ 
                  position: 'sticky',
                  top: '140px',
                }}>
                  <div className="hidden lg:block">
                    <AuditForm />
                  </div>
                </div>
              </div>

              {/* Mobile Form - Shows below content on mobile */}
              <div style={{ marginTop: '3rem' }} className="lg:hidden">
                <AuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM INSIGHT SECTION — Framed Advisory */}
        <section style={{ paddingTop: '5rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ 
              maxWidth: '76rem', 
              margin: '0 auto',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(3rem, 6vw, 5rem)',
              position: 'relative',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              {/* Enhanced corner accents */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100px',
                background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                borderTopLeftRadius: 'var(--radius-xl)',
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                borderTopLeftRadius: 'var(--radius-xl)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '4px',
                height: '100px',
                background: 'linear-gradient(0deg, var(--accent) 0%, transparent 100%)',
                borderBottomRightRadius: 'var(--radius-xl)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '100px',
                height: '4px',
                background: 'linear-gradient(270deg, var(--accent) 0%, transparent 100%)',
                borderBottomRightRadius: 'var(--radius-xl)',
              }} />
              
              <div style={{ maxWidth: '56rem' }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: '600', 
                  color: 'var(--accent)', 
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Strategic Context
                </div>
                
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '2.5rem',
                  }}
                >
                  Why Platform Architecture
                  <br />
                  Determines SEO Success
                </h2>
                
                <div style={{ 
                  display: 'grid', 
                  gap: '2.5rem',
                }}>
                  {[
                    {
                      label: 'Architecture Shapes Outcomes',
                      insight: 'The way a platform handles rendering, URL generation, and internal linking directly determines how search engines crawl, index, and rank your pages.',
                      implication: 'A WooCommerce strategy will fail on Shopify.',
                    },
                    {
                      label: 'Constraints Define Strategy',
                      insight: "SaaS platforms lock certain technical controls. You can't optimize what you can't access.",
                      implication: 'Effective SEO requires knowing where workarounds exist.',
                    },
                    {
                      label: 'Generic Approaches Fail',
                      insight: 'Best practice checklists ignore structural realities. Real performance comes from strategies that work within—or around—platform boundaries.',
                      implication: 'Platform expertise is not optional.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ 
                      borderLeft: '2px solid var(--border-light)',
                      paddingLeft: '1.5rem',
                    }}>
                      <div style={{
                        fontSize: '0.8125rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        {item.label}
                      </div>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.75rem',
                      }}>
                        {item.insight}
                      </p>
                      <p style={{
                        fontSize: '0.9375rem',
                        fontStyle: 'italic',
                        color: 'var(--muted)',
                        lineHeight: '1.6',
                      }}>
                        → {item.implication}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PREMIUM PLATFORM INTELLIGENCE BLOCKS */}
        <section
          id="platforms-list"
          style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            background: 'var(--bg)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            {/* Enhanced section intro */}
            <div style={{ maxWidth: '54rem', marginBottom: '5rem' }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '3px', 
                  background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)', 
                }} />
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}>
                  Platform Intelligence
                </div>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Platform SEO Intelligence
              </h2>
              <p
                style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                }}
              >
                Strategic capabilities mapped to the technical architecture of each platform.
              </p>
            </div>

            {/* Enhanced Platform Intelligence Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {platforms.map((platform, index) => {
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={platform.name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isEven ? '2fr 3fr' : '3fr 2fr',
                      gap: 'clamp(2.5rem, 5vw, 4.5rem)',
                      alignItems: 'start',
                      padding: 'clamp(2.5rem, 5vw, 4rem)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                    className="hover:shadow-xl transition-all duration-300"
                  >
                    {/* Gradient overlay on hover */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                      opacity: 0.6,
                    }} />
                    
                    {/* Premium platform positioning marker */}
                    <div style={{
                      position: 'absolute',
                      top: '2rem',
                      right: '2rem',
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '800',
                      color: 'var(--accent)',
                      fontFamily: 'monospace',
                      background: 'var(--accent-light)',
                      borderRadius: '50%',
                      opacity: 0.4,
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Left/Right alternating content */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.375rem 0.875rem',
                        background: 'var(--accent-light)',
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        borderRadius: 'var(--radius)',
                        marginBottom: '1.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Platform
                      </div>
                      
                      <h3
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: '700',
                          color: 'var(--text)',
                          marginBottom: '1rem',
                          lineHeight: '1.2',
                        }}
                      >
                        {platform.name}
                      </h3>
                      
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: '1.5',
                          color: 'var(--muted)',
                          fontStyle: 'italic',
                          marginBottom: '1.5rem',
                        }}
                      >
                        {platform.reality}
                      </p>

                      <Link
                        href={platform.url}
                        className="hover:gap-3"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--accent)',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'gap 0.2s',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Explore Platform
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>

                    <div style={{ order: isEven ? 2 : 1 }}>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        SEO Reality
                      </div>
                      <p
                        style={{
                          fontSize: '1.0625rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                          paddingLeft: '1.5rem',
                          borderLeft: '3px solid var(--border)',
                        }}
                      >
                        {platform.fundamental}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PREMIUM DIFFERENTIATION SECTION — Consultant-Led Narrative */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              {/* Section header */}
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '2px', 
                  background: 'var(--accent)', 
                  margin: '0 auto 1.5rem' 
                }} />
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}
                >
                  How Platform Architecture
                  <br />
                  Changes SEO Strategy
                </h2>
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '40rem',
                  margin: '0 auto',
                }}>
                  Four technical dimensions where platforms diverge
                </p>
              </div>

              {/* Narrative blocks with visual grouping */}
              <div style={{ 
                display: 'grid', 
                gap: '2.5rem',
              }}>
                {[
                  {
                    dimension: 'URL Control',
                    narrative: 'WooCommerce and custom platforms allow complete URL customization. Shopify enforces /products/ and /collections/ prefixes. BigCommerce offers flexibility but requires careful configuration.',
                    conclusion: 'The platform dictates how clean or constrained your URL architecture can be.',
                    examples: ['/products/', '/collections/'],
                  },
                  {
                    dimension: 'Indexation Flexibility',
                    narrative: "Magento's layered navigation creates indexation challenges at scale. Shopify auto-generates tag and filter pages that dilute crawl budget. WooCommerce requires proper plugin configuration to prevent duplicate indexation.",
                    conclusion: 'Custom platforms demand disciplined robots.txt and canonical strategies from day one.',
                    examples: null,
                  },
                  {
                    dimension: 'Plugin vs Native Limitations',
                    narrative: "WooCommerce SEO depends on plugin quality—Yoast, Rank Math, or custom solutions. Shopify apps have limited access to core rendering logic. Wix's closed architecture forces workarounds.",
                    conclusion: "Native platform capabilities define what's achievable without technical debt.",
                    examples: null,
                  },
                  {
                    dimension: 'Crawl & Rendering Differences',
                    narrative: "Wix and some headless setups rely on JavaScript rendering, complicating crawl efficiency. Shopify uses Liquid server-side rendering. WooCommerce renders server-side but can be slowed by plugin overhead.",
                    conclusion: 'How the platform delivers HTML to Google fundamentally impacts indexation speed and accuracy.',
                    examples: null,
                  },
                ].map((block, i) => (
                  <div 
                    key={i}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'clamp(2rem, 4vw, 2.5rem)',
                      position: 'relative',
                    }}
                  >
                    {/* Dimension marker */}
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '2rem',
                      padding: '0.375rem 1rem',
                      background: 'var(--accent)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      borderRadius: 'var(--radius)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {block.dimension}
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.25rem',
                      }}>
                        {block.narrative}
                      </p>
                      
                      {block.examples && (
                        <div style={{ 
                          display: 'flex', 
                          gap: '0.75rem', 
                          marginBottom: '1.25rem',
                          flexWrap: 'wrap',
                        }}>
                          {block.examples.map((ex) => (
                            <code 
                              key={ex}
                              style={{ 
                                padding: '0.375rem 0.75rem',
                                background: 'var(--surface-alt)', 
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)',
                                fontSize: '0.875rem',
                                color: 'var(--text)',
                                fontFamily: 'monospace',
                              }}
                            >
                              {ex}
                            </code>
                          ))}
                        </div>
                      )}
                      
                      <div style={{
                        paddingLeft: '1.5rem',
                        borderLeft: '3px solid var(--accent-light)',
                      }}>
                        <p style={{
                          fontSize: '0.9375rem',
                          fontStyle: 'italic',
                          color: 'var(--muted)',
                          lineHeight: '1.6',
                        }}>
                          → {block.conclusion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM SCALE & GROWTH SECTION — Executive Advisory */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              {/* Section header */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '2px', 
                  background: 'var(--accent)', 
                  marginBottom: '1.5rem' 
                }} />
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}
                >
                  Platform Selection
                  <br />
                  at Scale
                </h2>
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '40rem',
                }}>
                  Strategic trade-offs as your catalog and ambition grow
                </p>
              </div>

              {/* Tiered scale representation */}
              <div style={{ 
                display: 'grid',
                gap: '1.5rem',
              }}>
                {[
                  {
                    tier: 'Startup → Mid-Market',
                    title: 'Which platforms scale easily',
                    insight: 'Shopify and BigCommerce scale infrastructure automatically but impose structural constraints as catalogs grow. Magento handles enterprise-level complexity but demands significant technical resources. Custom platforms scale only as well as their architecture and hosting allow.',
                    indicator: '0-10K SKUs',
                  },
                  {
                    tier: 'Growth → Optimization',
                    title: 'Which require workarounds',
                    insight: 'Wix requires significant workarounds for advanced SEO due to platform limitations. Shopify needs app-based solutions for features like advanced schema or custom URL logic. WooCommerce can require custom development when plugin ecosystems conflict or bloat performance.',
                    indicator: '10K-100K SKUs',
                  },
                  {
                    tier: 'Scale → Enterprise',
                    title: 'How strategy changes as catalogs grow',
                    insight: 'Small catalogs can succeed on any platform with basic optimization. As SKU counts enter the thousands, indexation strategy, faceted navigation, and internal linking architecture become critical. Platform choice determines whether scaling SEO requires workarounds or native solutions.',
                    indicator: '100K+ SKUs',
                  },
                ].map((stage, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      gap: '2rem',
                      padding: '2rem',
                      background: i === 1 ? 'var(--surface)' : 'transparent',
                      border: i === 1 ? '1px solid var(--border)' : 'none',
                      borderRadius: i === 1 ? 'var(--radius-lg)' : '0',
                      borderLeft: i !== 1 ? '3px solid var(--border-light)' : 'none',
                      paddingLeft: i !== 1 ? '2rem' : '2rem',
                    }}
                  >
                    <div>
                      <div style={{
                        fontSize: '0.6875rem',
                        fontWeight: '700',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.5rem',
                      }}>
                        {stage.tier}
                      </div>
                      <div style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        fontFamily: 'monospace',
                      }}>
                        {stage.indicator}
                      </div>
                    </div>
                    
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                        marginBottom: '0.875rem',
                      }}>
                        {stage.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.75',
                        color: 'var(--text-secondary)',
                      }}>
                        {stage.insight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM USE CASES — Split Showcase */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem',
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem', maxWidth: '42rem' }}>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}
                >
                  Who This Is For
                </h2>
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}>
                  Platform-specific SEO serves businesses at critical growth inflection points
                </p>
              </div>

              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
                gap: '2rem',
              }}>
                {[
                  {
                    scenario: 'Shopify brands scaling internationally',
                    challenge: 'Navigating hreflang implementation, multi-currency SEO, and theme performance constraints across markets.',
                  },
                  {
                    scenario: 'WooCommerce sites mixing content + ecommerce',
                    challenge: 'Balancing blog SEO, product SEO, and plugin performance without sacrificing site speed or user experience.',
                  },
                  {
                    scenario: 'Magento enterprise stores',
                    challenge: 'Managing layered navigation, multi-store indexation, and server-side performance at scale with thousands of SKUs.',
                  },
                  {
                    scenario: 'Custom platforms needing SEO flexibility',
                    challenge: 'Architecting SEO-first solutions without being constrained by SaaS platform boundaries or plugin ecosystems.',
                  },
                ].map((use, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '2rem',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      borderTop: '3px solid var(--accent)',
                    }}
                  >
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                    }}>
                      {use.scenario}
                    </div>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      {use.challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM BRIDGE TO SERVICES — Intentional Framed Block */}
        <section
          style={{
            paddingTop: '5rem',
            paddingBottom: '5rem',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 3.5rem)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'var(--accent)',
                  opacity: 0.05,
                  borderBottomLeftRadius: '100%',
                }} />
                
                <div style={{ position: 'relative' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Platform Expertise Applied
                  </div>
                  
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}>
                    Strategic Services
                    <br />
                    Built on Platform Knowledge
                  </h2>
                  
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                  }}>
                    Platform-specific expertise is applied through structured ecommerce SEO services—from audits and technical fixes to keyword research and on-page optimization.
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <Link
                      href="/services"
                      className="hover:opacity-90"
                      style={{
                        display: 'inline-block',
                        padding: '0.875rem 1.75rem',
                        background: 'var(--accent)',
                        color: '#ffffff',
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        borderRadius: 'var(--radius)',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      View All Services
                    </Link>
                    
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Link
                        href="/services/ecommerce-seo-audit"
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          fontWeight: '500',
                          borderBottom: '1px solid transparent',
                          transition: 'border-color 0.2s',
                        }}
                        className="hover:border-b-[var(--accent)]"
                      >
                        SEO Audit
                      </Link>
                      <span style={{ color: 'var(--border)' }}>•</span>
                      <Link
                        href="/services/technical-ecommerce-seo"
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          fontWeight: '500',
                          borderBottom: '1px solid transparent',
                          transition: 'border-color 0.2s',
                        }}
                        className="hover:border-b-[var(--accent)]"
                      >
                        Technical SEO
                      </Link>
                      <span style={{ color: 'var(--border)' }}>•</span>
                      <Link
                        href="/services/ecommerce-keyword-research"
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          fontWeight: '500',
                          borderBottom: '1px solid transparent',
                          transition: 'border-color 0.2s',
                        }}
                        className="hover:border-b-[var(--accent)]"
                      >
                        Keyword Research
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM FAQs */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
          background: 'linear-gradient(180deg, var(--surface-alt) 0%, var(--bg) 100%)',
          position: 'relative',
        }}>
          {/* Subtle accent lines */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, var(--border) 50%, transparent 100%)',
            opacity: 0.5,
          }} />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}>
                  <div style={{ width: '2.5rem', height: '2px', background: 'var(--accent)' }} />
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>Frequently Asked</div>
                  <div style={{ width: '2.5rem', height: '2px', background: 'var(--accent)' }} />
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}
                >
                  Platform SEO Questions
                </h2>
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}>
                  Strategic considerations answered
                </p>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* PREMIUM FINAL CTA — Confident Close */}
        <section
          style={{
            paddingTop: '7rem',
            paddingBottom: '7rem',
            background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Enhanced background pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.015,
              backgroundImage: `
                linear-gradient(135deg, var(--accent) 25%, transparent 25%),
                linear-gradient(225deg, var(--accent) 25%, transparent 25%),
                linear-gradient(45deg, var(--accent) 25%, transparent 25%),
                linear-gradient(315deg, var(--accent) 25%, transparent 25%)
              `,
              backgroundSize: '80px 80px',
              backgroundPosition: '0 0, 40px 0, 40px -40px, 0 40px',
              pointerEvents: 'none',
            }}
          />
          
          {/* Floating accent orbs */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.05,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.05,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }} />
          
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
            <div style={{ 
              maxWidth: '52rem', 
              margin: '0 auto', 
              textAlign: 'center',
              padding: '3rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
            }}>
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
                borderRadius: '0 0 2px 2px',
              }} />
              
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Platform-Adapted SEO
                <br />
                That Actually Works
              </h2>
              <p
                style={{
                  fontSize: '1.1875rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                  maxWidth: '42rem',
                  margin: '0 auto 3rem',
                }}
              >
                Whether you're on Shopify, WooCommerce, Magento, or a custom build—your SEO strategy should respect how your platform actually works.
              </p>
              <Link
                href="/services"
                className="hover:shadow-xl"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  padding: '1.25rem 2.5rem',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
              >
                Explore Services
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
