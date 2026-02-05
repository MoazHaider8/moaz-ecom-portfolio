import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'BigCommerce SEO Consultant for Scalable Ecommerce Growth | Moaz Haider',
  description: 'BigCommerce SEO focused on scalable site architecture, performance, and sustainable growth for serious ecommerce brands.',
  openGraph: {
    title: 'BigCommerce SEO Consultant for Scalable Ecommerce Growth | Moaz Haider',
    description: 'BigCommerce SEO focused on scalable site architecture, performance, and sustainable growth for serious ecommerce brands.',
    url: 'https://moazhaider.com/platforms/bigcommerce-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce SEO Consultant for Scalable Ecommerce Growth | Moaz Haider',
    description: 'BigCommerce SEO focused on scalable site architecture, performance, and sustainable growth for serious ecommerce brands.',
  },
  alternates: {
    canonical: 'https://moazhaider.com/platforms/bigcommerce-seo',
  },
}

const faqs = [
  {
    question: 'Is BigCommerce better for SEO than Shopify?',
    answer: "BigCommerce offers more native SEO flexibility—cleaner URL control, better category depth, and fewer app dependencies for core SEO features. Shopify works well for straightforward stores, but BigCommerce handles complex catalogs and custom requirements with less friction. For growth-stage brands, BigCommerce provides more room to scale without hitting platform constraints."
  },
  {
    question: 'Can BigCommerce scale large catalogs?',
    answer: "Yes. BigCommerce is designed for catalog scalability—unlimited products, deeper category hierarchies, and built-in filtering without performance compromise. Large inventories require intentional SEO architecture: optimized category structures, strategic internal linking, and controlled indexation. The platform supports this natively better than most SaaS alternatives."
  },
  {
    question: 'Does BigCommerce support international SEO?',
    answer: "BigCommerce supports multi-storefront setups, multi-currency, and localized content, making it suitable for international expansion. However, international SEO success depends on hreflang implementation, regional keyword mapping, and market-specific content strategy. The platform provides the infrastructure—execution determines outcomes."
  },
  {
    question: 'How technical is BigCommerce SEO?',
    answer: "BigCommerce abstracts some technical complexity—Core Web Vitals are manageable, structured data is accessible, and URL architecture is cleaner than Shopify. However, serious SEO still requires strategic thinking: category logic, internal linking systems, crawl efficiency, and performance optimization. The platform makes execution easier, but strategy remains critical."
  },
]

export default function BigCommerceSEOPage() {
  return (
    <>
      <Header />
      <main>

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'BigCommerce SEO',
              url: 'https://moazhaider.com/platforms/bigcommerce-seo',
              description: 'BigCommerce SEO focused on scalable site architecture, performance, and sustainable growth for serious ecommerce brands.',
              isPartOf: {
                '@type': 'WebSite',
                url: 'https://moazhaider.com',
                name: 'Moaz Haider',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'BigCommerce SEO',
              serviceType: 'BigCommerce SEO Consulting',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
              },
              areaServed: 'International',
              url: 'https://moazhaider.com/platforms/bigcommerce-seo',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        {/* Breadcrumb */}
        <section style={{ paddingTop: '2rem', paddingBottom: '1rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ 
              fontSize: '0.8125rem', 
              color: 'var(--muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }} className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/platforms" style={{ color: 'var(--muted)', textDecoration: 'none' }} className="hover:underline">
                Ecommerce SEO Platforms
              </Link>
              <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>BigCommerce SEO</span>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section style={{ 
          paddingTop: 'clamp(2rem, 5vw, 4rem)', 
          paddingBottom: 'clamp(5rem, 12vw, 9rem)',
          background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.05,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '0',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.08,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(3.5rem, 7vw, 6rem)',
              alignItems: 'center',
            }}>
              
              <div>
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  marginBottom: '2.5rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-alt)',
                  borderRadius: '100px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }} />
                  Growth-Stage Ecommerce SEO
                </div>

                <h1 style={{
                  fontSize: 'clamp(3.25rem, 9vw, 6.5rem)',
                  fontWeight: '700',
                  lineHeight: '0.95',
                  color: 'var(--text)',
                  marginBottom: '2.5rem',
                  letterSpacing: '-0.03em',
                }}>
                  BigCommerce<br/>
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
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '3.5rem',
                  maxWidth: '540px',
                }}>
                  SEO architecture built for BigCommerce stores ready to scale without platform bottlenecks.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/contact"
                    className="hover:gap-3"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.125rem 2.25rem',
                      background: 'var(--accent)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                    }}
                  >
                    Start Your BigCommerce SEO
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  
                  <Link
                    href="/services/ecommerce-seo-audit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1.125rem 2.25rem',
                      background: 'var(--bg)',
                      color: 'var(--text)',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius)',
                      textDecoration: 'none',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:border-accent"
                  >
                    SEO Audit
                  </Link>
                </div>

              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '2rem',
                padding: '3rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                position: 'relative',
              }}>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                  borderRadius: 'var(--radius) var(--radius) 0 0',
                }} />

                <div>
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '0.5rem',
                  }}>
                    Platform Position
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    lineHeight: '1.3',
                  }}>
                    The Middle Path to Scale
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                      }}>
                        More than Shopify
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--muted)',
                        fontWeight: '600',
                      }}>
                        +40%
                      </div>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'var(--surface-alt)',
                      borderRadius: '100px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '70%',
                        background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 100%)',
                        borderRadius: '100px',
                        opacity: 0.6,
                      }} />
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.5rem',
                      lineHeight: '1.5',
                    }}>
                      Native flexibility, deeper catalogs
                    </div>
                  </div>

                  <div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'var(--text)',
                      }}>
                        Lighter than Magento
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--muted)',
                        fontWeight: '600',
                      }}>
                        -60%
                      </div>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'var(--surface-alt)',
                      borderRadius: '100px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '45%',
                        background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 100%)',
                        borderRadius: '100px',
                        opacity: 0.8,
                      }} />
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.5rem',
                      lineHeight: '1.5',
                    }}>
                      Scale without enterprise overhead
                    </div>
                  </div>

                  <div style={{
                    marginTop: '1rem',
                    padding: '1.5rem',
                    background: 'var(--surface-alt)',
                    borderRadius: 'var(--radius)',
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '0.5rem',
                    }}>
                      Built for Growth
                    </div>
                    <div style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}>
                      Operational clarity at scale without platform constraints
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* WHERE BIGCOMMERCE FITS */}
        <section style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
              
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{
                display: 'inline-block',
                fontSize: '0.6875rem',
                fontWeight: '700',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                marginBottom: '1.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--surface-alt)',
                borderRadius: '100px',
                border: '1px solid var(--border)',
              }}>
                Platform Positioning
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}>
                Where BigCommerce Fits
              </h2>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}>
              
              <div style={{
                padding: '3rem',
                background: 'var(--surface-alt)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                  opacity: 0.3,
                }} />
                
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  opacity: 0.3,
                }}>
                  S
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem',
                  opacity: 0.7,
                }}>
                  From Shopify
                </div>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                }}>
                  Good Until You Scale
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Shopify works until your catalog outgrows its structure. Limited category depth, app dependency, and rigid architecture become bottlenecks.
                </p>
              </div>

              <div style={{
                padding: '3rem',
                background: 'var(--surface-alt)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
                  opacity: 0.5,
                }} />
                
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  opacity: 0.5,
                }}>
                  M
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem',
                  opacity: 0.7,
                }}>
                  Not Magento
                </div>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                }}>
                  Power with Overhead
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Magento offers control but demands enterprise resources. Development overhead, hosting complexity, and maintenance costs create friction.
                </p>
              </div>

              <div style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '2px solid var(--accent)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 100%)',
                }} />
                
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                }}>
                  B
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem',
                }}>
                  BigCommerce
                </div>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                }}>
                  The Middle Path
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  BigCommerce sits between—native flexibility without operational overhead. Scale catalogs, control architecture, maintain velocity.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SEO ADVANTAGES */}
        <section style={{ 
          paddingTop: '8rem', 
          paddingBottom: '8rem', 
          background: 'var(--surface-alt)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
              
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                BigCommerce SEO Advantages
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Platform capabilities that unlock SEO performance at scale
              </p>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}>
              
              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  01
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  Native SEO Flexibility
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Control URL structures, redirects, and metadata without third-party apps.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  No app dependency
                </div>
              </div>

              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  02
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  Cleaner URL Control
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  No forced /collections/ prefixes. Build category hierarchies that make sense.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  Custom URL architecture
                </div>
              </div>

              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  03
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  Performance Advantages
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Better Core Web Vitals handling at scale with less app bloat.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  Built-in optimization
                </div>
              </div>

              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  04
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  Scalable Catalog Logic
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Unlimited products, deeper category trees, and flexible filtering without limits.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  Grow without constraints
                </div>
              </div>

              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  05
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  API & Headless Ready
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Built for modern architectures. Scale beyond SaaS templates when needed.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  Future-proof foundation
                </div>
              </div>

              <div style={{ 
                padding: '2.5rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '2rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  06
                </div>
                
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  B2B & Multi-Channel
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}>
                  Native support for complex business models and international expansion.
                </p>
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  fontWeight: '500',
                }}>
                  Enterprise capabilities
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SEO ARCHITECTURE */}
        <section style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
              
            <div style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                SEO Architecture on BigCommerce
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
              }}>
                Structural components that drive organic visibility
              </p>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}>
              
              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  Category Hierarchies
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Designed for discovery and authority flow through strategic depth and internal linking
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  Product Structures
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Optimized for commercial intent and conversion through structured data and rich content
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  Internal Linking Systems
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Scalable systems that distribute authority and guide crawlers through catalog growth
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  SEO-Friendly URLs
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Clean, semantic structure that maintains clarity as catalog complexity increases
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  Structured Data
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Rich snippets and schema markup for enhanced SERP visibility and click-through rates
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1.5rem',
                }} />
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  Crawl Efficiency
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Optimized crawl budget allocation ensuring important pages get indexed and ranked
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* PRODUCT & CATEGORY SEO */}
        <section style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
              
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Product & Category SEO
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
              }}>
                BigCommerce handles commercial intent better than Shopify—deeper category structures, flexible filtering, and better control over product relationships.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}>
              
              <div style={{
                padding: '3rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: 0.1,
                  pointerEvents: 'none',
                }} />

                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-alt)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '2rem',
                }}>
                  Category Pages
                </div>

                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                }}>
                  Scalable Architecture
                </h3>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                }}>
                  Category pages can scale without hitting structural limits. Build hierarchies that distribute authority and guide discovery through complex catalogs.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Unlimited category depth
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Flexible filtering without SEO compromise
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Authority flow optimization
                    </span>
                  </div>
                </div>

                <Link
                  href="/services/category-page-seo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1.75rem',
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.9375rem',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:border-accent"
                >
                  Category Page SEO
                  <span style={{ color: 'var(--accent)' }}>→</span>
                </Link>
              </div>

              <div style={{
                padding: '3rem',
                background: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: 0.1,
                  pointerEvents: 'none',
                }} />

                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-alt)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '2rem',
                }}>
                  Product Pages
                </div>

                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                }}>
                  Commercial Intent
                </h3>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                }}>
                  Product SEO remains flexible as inventory grows. Control metadata, variants, and structured data without platform constraints or app dependencies.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Full metadata control
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Rich structured data support
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Variant optimization strategies
                    </span>
                  </div>
                </div>

                <Link
                  href="/services/product-page-seo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1.75rem',
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.9375rem',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:border-accent"
                >
                  Product Page SEO
                  <span style={{ color: 'var(--accent)' }}>→</span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* TECHNICAL SEO */}
        <section style={{ 
          paddingTop: '8rem', 
          paddingBottom: '8rem', 
          background: 'var(--bg)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.03,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
              
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'var(--surface-alt)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
                border: '1px solid var(--border)',
              }}>
                Platform Capabilities
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Technical SEO Reality
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Platform automation meets strategic execution
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
            }}>
              
              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: 0.08,
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.15,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} />
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  Platform Handles
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Core Web Vitals, CDN distribution, and rendering complexity—managed infrastructure that scales automatically.
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  opacity: 0.08,
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  opacity: 0.15,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} />
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  You Control
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Crawl efficiency, indexation logic, and performance optimization—strategic decisions that determine outcomes.
                </p>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)',
                borderRadius: 'var(--radius)',
                border: '2px solid var(--accent)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                  opacity: 0.08,
                }} />
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  opacity: 0.2,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} />
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}>
                  The Reality
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                }}>
                  Platform makes execution easier. Strategy determines outcomes. Both matter.
                </p>
              </div>

            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                href="/services/technical-ecommerce-seo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                }}
                className="hover:border-accent"
              >
                Technical Ecommerce SEO
                <span style={{ color: 'var(--accent)' }}>→</span>
              </Link>
            </div>

          </div>
        </section>

        {/* BUILT FOR SCALING BRANDS */}
        <section style={{ 
          paddingTop: '8rem', 
          paddingBottom: '8rem', 
          background: 'var(--surface-alt)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.04,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
              
            <div style={{
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}>
              
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 50%, transparent 100%)',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'center',
              }}>
                
                <div>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'var(--bg)',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--border)',
                  }}>
                    Migration & Growth
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em',
                  }}>
                    Built for Scaling Brands
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div style={{
                    padding: '1.5rem',
                    background: 'var(--bg)',
                    borderRadius: 'var(--radius)',
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Moving from Shopify to BigCommerce is usually about catalog depth, operational complexity, or international expansion.
                    </p>
                  </div>

                  <div style={{
                    padding: '1.5rem',
                    background: 'var(--bg)',
                    borderRadius: 'var(--radius)',
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      SEO migrations require precision—301 redirects, URL mapping, and authority preservation. Done correctly, rankings stabilize within weeks.
                    </p>
                  </div>

                  <div style={{
                    padding: '1.75rem',
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}>
                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: '#ffffff',
                      margin: 0,
                      fontWeight: '600',
                    }}>
                      The platform supports growth. SEO ensures it compounds.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
              
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                Who BigCommerce SEO Is For
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Right-fit alignment determines success
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}>
              
              <div style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)',
                borderRadius: 'var(--radius)',
                border: '2px solid var(--accent)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
                  opacity: 0.1,
                }} />
                
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '1.5rem',
                }}>✓</div>

                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.01em',
                }}>
                  Perfect Fit For
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                      Growth-stage brands scaling catalogs
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                      Stores moving from Shopify
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                      Brands preparing for international expansion
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                      Ecommerce teams serious about SEO ROI
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '3rem',
                background: 'var(--surface-alt)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, var(--border) 0%, transparent 70%)',
                  opacity: 0.3,
                }} />
                
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  fontSize: '1.5rem',
                  color: 'var(--text-secondary)',
                }}>×</div>

                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.01em',
                }}>
                  Not Right For
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--border)',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
                      Early-stage testing product-market fit
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--border)',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
                      Stores comfortable on Shopify
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      minWidth: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--border)',
                      marginTop: '0.5rem',
                    }} />
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
                      Brands needing custom architecture (consider custom platforms)
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* HOW IT'S APPLIED */}
        <section style={{ 
          paddingTop: '8rem', 
          paddingBottom: '8rem', 
          background: 'var(--surface-alt)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.03,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
              
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'var(--bg)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem',
                border: '1px solid var(--border)',
              }}>
                Process
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                How BigCommerce SEO Is Applied
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Systematic execution from foundation to results
              </p>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              paddingTop: '1.5rem',
            }}>
              
              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  1
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                  }}>
                    Platform Review
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Assess current setup, catalog structure, and technical foundation.
                  </p>
                </div>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  2
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                  }}>
                    Strategy Alignment
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Define scalable architecture, keyword targeting, and growth priorities.
                  </p>
                </div>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  3
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                  }}>
                    Scalable Execution
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Implement category logic, product optimization, and technical improvements.
                  </p>
                </div>
              </div>

              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  4
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                  }}>
                    Ongoing Refinement
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Monitor performance, adapt to catalog growth, and compound results.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FAQs */}
        <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
              
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'var(--text)',
              marginBottom: '3rem',
              letterSpacing: '-0.02em',
            }}>
              BigCommerce SEO Questions
            </h2>

            <FAQAccordion faqs={faqs} />

          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ 
          paddingTop: '8rem', 
          paddingBottom: '8rem', 
          background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.05,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
            <div style={{ 
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--bg)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 50%, transparent 100%)',
              }} />

              <div style={{
                display: 'inline-block',
                fontSize: '0.6875rem',
                fontWeight: '700',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                marginBottom: '2rem',
                padding: '0.5rem 1rem',
                background: 'var(--surface-alt)',
                borderRadius: '100px',
                border: '1px solid var(--border)',
              }}>
                Ready to Scale
              </div>
              
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                lineHeight: '1.2',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}>
                BigCommerce SEO Built<br/>for Scalable Growth
              </h2>

              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                maxWidth: '700px',
                margin: '0 auto 3rem',
              }}>
                Strategic SEO that compounds as your catalog scales—without platform bottlenecks
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  }}
                >
                  Start Your BigCommerce SEO
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                <Link
                  href="/services/ecommerce-seo-audit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 2.5rem',
                    background: 'transparent',
                    color: 'var(--text)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:border-accent"
                >
                  Get an SEO Audit
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

