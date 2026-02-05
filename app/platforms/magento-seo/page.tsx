import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Magento SEO Consultant for Enterprise Ecommerce | Moaz Haider',
  description: 'Enterprise-grade Magento SEO focused on large catalogs, multi-store environments, international SEO, and scalable organic growth.',
  alternates: {
    canonical: 'https://moazhaider.com/platforms/magento-seo',
  },
  openGraph: {
    title: 'Magento SEO Consultant for Enterprise Ecommerce | Moaz Haider',
    description: 'Enterprise-grade Magento SEO focused on large catalogs, multi-store environments, international SEO, and scalable organic growth.',
    url: 'https://moazhaider.com/platforms/magento-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magento SEO Consultant for Enterprise Ecommerce | Moaz Haider',
    description: 'Enterprise-grade Magento SEO focused on large catalogs, multi-store environments, international SEO, and scalable organic growth.',
  },
}

const faqs = [
  {
    question: 'Is Magento better for SEO than Shopify?',
    answer: 'Magento offers greater architectural control for enterprise catalogs, multi-store environments, and international SEO. However, it requires disciplined technical management. Shopify is simpler but constrained. Magento scales SEO better when properly implemented.',
  },
  {
    question: 'How do you handle layered navigation SEO on Magento?',
    answer: 'Layered navigation creates exponential URL growth. Strategic canonicalization, parameter handling, and indexation rules prevent crawl waste. Attributes must be selectively enabled with clear SEO logic to avoid duplicate content across filter combinations.',
  },
  {
    question: 'Can Magento scale SEO internationally?',
    answer: 'Yes. Magento\'s multi-store architecture and store view structure support hreflang implementation, market-level URL separation, and regional content customization. International SEO on Magento requires precise configuration to prevent duplicate content across stores.',
  },
  {
    question: 'Does Magento require more technical SEO maintenance than other platforms?',
    answer: 'Yes. Magento\'s flexibility creates technical complexity. Catalog growth generates indexation challenges. Extension conflicts affect performance. Quarterly technical audits are required to prevent silent SEO degradation as catalog and configuration scale.',
  },
  {
    question: 'What are the biggest Magento SEO mistakes?',
    answer: 'Uncontrolled attribute indexing, misconfigured layered navigation, poor canonical implementation, ignoring crawl budget management, neglecting performance optimization, and improper multi-store hreflang configuration. Enterprise catalogs compound small errors exponentially.',
  },
]

export default function MagentoSEOPage() {
  return (
    <>
      <Header />
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://moazhaider.com/platforms/magento-seo',
                url: 'https://moazhaider.com/platforms/magento-seo',
                name: 'Magento SEO',
                description: 'Enterprise-grade Magento SEO focused on large catalogs, multi-store environments, international SEO, and scalable organic growth.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://moazhaider.com',
                  url: 'https://moazhaider.com',
                  name: 'Moaz Haider',
                },
              },
              {
                '@type': 'Service',
                '@id': 'https://moazhaider.com/platforms/magento-seo#service',
                name: 'Magento SEO',
                serviceType: 'Magento SEO Consulting',
                provider: {
                  '@type': 'Person',
                  name: 'Moaz Haider',
                },
                areaServed: 'International',
                url: 'https://moazhaider.com/platforms/magento-seo',
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
          }),
        }}
      />

      <main>
        
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
              <span style={{ color: 'var(--text-secondary)' }}>Magento SEO</span>
            </div>
          </div>
        </section>

        {/* HERO — ENTERPRISE FRAMING */}
        <section style={{ 
          paddingTop: 'clamp(4rem, 10vw, 6rem)', 
          paddingBottom: 'clamp(4rem, 10vw, 6rem)',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              {/* Enterprise Frame */}
              <div style={{
                background: 'var(--surface)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(3rem, 6vw, 5rem) clamp(2.5rem, 5vw, 4rem)',
                position: 'relative',
              }}>
                
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--accent)',
                  borderTopLeftRadius: 'var(--radius-lg)',
                  borderTopRightRadius: 'var(--radius-lg)',
                }} />

                <div style={{ maxWidth: '56rem' }}>
                  
                  {/* Category label */}
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '1.5rem',
                  }}>
                    Enterprise Platform SEO
                  </div>

                  <h1 style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                    fontWeight: '900',
                    lineHeight: '1',
                    color: 'var(--text)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.04em',
                  }}>
                    Magento SEO
                  </h1>

                  <p style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '48rem',
                  }}>
                    Enterprise-grade SEO strategies for large, complex Magento ecommerce stores. Architectural precision for catalogs that scale.
                  </p>

                  {/* Micro-signals grid */}
                  <div style={{
                    display: 'grid',
                    gap: '0.75rem',
                    marginBottom: '3rem',
                  }} className="lg:grid-cols-3">
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      padding: '0.75rem 1rem',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}>
                      Large Catalogs
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      padding: '0.75rem 1rem',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}>
                      Multi-Store Environments
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      padding: '0.75rem 1rem',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}>
                      International SEO Complexity
                    </div>
                  </div>

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
                      fontSize: '0.9375rem',
                      fontWeight: '600',
                      borderRadius: 'var(--radius)',
                      textDecoration: 'none',
                      transition: 'gap 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Improve My Magento SEO
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* WHY MAGENTO SEO REQUIRES ENTERPRISE THINKING */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  maxWidth: '48rem',
                }}>
                  Why Magento SEO Requires
                  <br />
                  Enterprise Thinking
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gap: '1px',
                background: 'var(--border)',
              }}>
                
                {/* Block 1 */}
                <div style={{
                  padding: 'clamp(2.5rem, 4vw, 3rem)',
                  background: 'var(--surface)',
                  borderLeft: '3px solid var(--accent)',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Magento's power creates exponential SEO complexity.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Multi-level categories, layered navigation, configurable products, attribute filters, and multi-store views generate thousands of URL permutations. Without structural discipline, indexation becomes chaos.
                  </p>
                </div>

                {/* Block 2 */}
                <div style={{
                  padding: 'clamp(2.5rem, 4vw, 3rem)',
                  background: 'var(--surface)',
                  borderLeft: '3px solid var(--accent)',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Enterprise catalogs break SEO without architecture.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Catalogs exceeding 10,000 SKUs demand crawl budget management, canonical precision, and strategic internal linking. Magento enables scale, but scale without SEO governance creates indexation inefficiency and ranking dilution.
                  </p>
                </div>

                {/* Block 3 */}
                <div style={{
                  padding: 'clamp(2.5rem, 4vw, 3rem)',
                  background: 'var(--surface)',
                  borderLeft: '3px solid var(--accent)',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Magento SEO is infrastructure, not plugin installation.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Extensions provide capability but not strategy. Enterprise Magento SEO requires consultant-led governance: attribute control, filter logic, hreflang implementation, and performance optimization aligned with business architecture.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* MAGENTO COMPLEXITY MAP — SCROLL STOPPER */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Magento Complexity Map
                </h2>
              </div>

              {/* Architectural diagram grid */}
              <div style={{
                background: 'var(--surface-alt)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
              }}>
                
                <div style={{
                  display: 'grid',
                  gap: '2px',
                  background: 'var(--border)',
                }} className="lg:grid-cols-2">
                  
                  {/* Layer 1: Category Depth */}
                  <div style={{
                    padding: 'clamp(2rem, 3vw, 2.5rem)',
                    background: 'var(--surface)',
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'var(--accent)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
                      </svg>
                    </div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      LAYER 1
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                    }}>
                      Category Depth
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Multi-level taxonomy enables keyword expansion but creates canonical complexity. Each level multiplies indexation surface area.
                    </p>
                  </div>

                  {/* Layer 2: Layered Navigation */}
                  <div style={{
                    padding: 'clamp(2rem, 3vw, 2.5rem)',
                    background: 'var(--surface)',
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'var(--accent)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M3 6h18M3 12h18M3 18h18"/>
                      </svg>
                    </div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      LAYER 2
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                    }}>
                      Layered Navigation
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Filter combinations generate exponential URLs. Strategic parameter handling prevents crawl waste and duplicate content.
                    </p>
                  </div>

                  {/* Layer 3: Attributes & Filters */}
                  <div style={{
                    padding: 'clamp(2rem, 3vw, 2.5rem)',
                    background: 'var(--surface)',
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'var(--accent)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6m0 6v6M6 12H1m6 0h6m6 0h5"/>
                      </svg>
                    </div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      LAYER 3
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                    }}>
                      Attributes & Filters
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Configurable product attributes require indexation discipline. Attribute pages must align with SEO intent, not simply mirror admin structure.
                    </p>
                  </div>

                  {/* Layer 4: Multi-Store Views */}
                  <div style={{
                    padding: 'clamp(2rem, 3vw, 2.5rem)',
                    background: 'var(--surface)',
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'var(--accent)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      LAYER 4
                    </div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                    }}>
                      Multi-Store Views
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Store views enable market separation but demand hreflang precision. URL structure, canonical logic, and content differentiation prevent international duplicate content.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* MAGENTO SEO ARCHITECTURE */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Magento SEO Architecture
                </h2>
              </div>

              {/* Architecture blocks */}
              <div style={{
                display: 'grid',
                gap: '2rem',
              }}>
                
                {/* Category Hierarchy at Scale */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: 'clamp(2rem, 4vw, 2.5rem)',
                  }}>
                    <div style={{
                      display: 'grid',
                      gap: '1.5rem',
                    }} className="lg:grid-cols-[200px_1fr]">
                      <div>
                        <div style={{
                          fontSize: '0.6875rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          marginBottom: '0.5rem',
                        }}>
                          ARCHITECTURE
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          fontWeight: '700',
                          color: 'var(--text)',
                        }}>
                          Category Hierarchy
                          <br />
                          at Scale
                        </div>
                      </div>
                      <div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                          marginBottom: '1rem',
                        }}>
                          Enterprise catalogs require parent-child category relationships that align with keyword research and business logic. Depth enables topical authority but demands canonical control to prevent indexation fragmentation.
                        </p>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                        }}>
                          Breadcrumb implementation, internal linking patterns, and crawl priority must reflect category importance, not default Magento structure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attribute Handling */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: 'clamp(2rem, 4vw, 2.5rem)',
                  }}>
                    <div style={{
                      display: 'grid',
                      gap: '1.5rem',
                    }} className="lg:grid-cols-[200px_1fr]">
                      <div>
                        <div style={{
                          fontSize: '0.6875rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          marginBottom: '0.5rem',
                        }}>
                          ARCHITECTURE
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          fontWeight: '700',
                          color: 'var(--text)',
                        }}>
                          Attribute Handling
                        </div>
                      </div>
                      <div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                        }}>
                          Attributes used in layered navigation create filtered URLs. Selective indexation based on search volume and duplicate risk prevents crawl waste. Parameter-based filters require canonical rules or strategic noindex implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Internal Linking Across Thousands of URLs */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: 'clamp(2rem, 4vw, 2.5rem)',
                  }}>
                    <div style={{
                      display: 'grid',
                      gap: '1.5rem',
                    }} className="lg:grid-cols-[200px_1fr]">
                      <div>
                        <div style={{
                          fontSize: '0.6875rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          marginBottom: '0.5rem',
                        }}>
                          ARCHITECTURE
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          fontWeight: '700',
                          color: 'var(--text)',
                        }}>
                          Internal Linking
                          <br />
                          at Scale
                        </div>
                      </div>
                      <div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                        }}>
                          Large catalogs require programmatic internal linking logic. Related products, upsells, cross-category connections, and content-to-product linking must follow SEO strategy, not solely merchandising priorities. Link equity distribution becomes architectural.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Crawl Budget Management */}
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: 'clamp(2rem, 4vw, 2.5rem)',
                  }}>
                    <div style={{
                      display: 'grid',
                      gap: '1.5rem',
                    }} className="lg:grid-cols-[200px_1fr]">
                      <div>
                        <div style={{
                          fontSize: '0.6875rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          marginBottom: '0.5rem',
                        }}>
                          ARCHITECTURE
                        </div>
                        <div style={{
                          fontSize: '1.0625rem',
                          fontWeight: '700',
                          color: 'var(--text)',
                        }}>
                          Crawl Budget
                          <br />
                          Management
                        </div>
                      </div>
                      <div>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: 'var(--text-secondary)',
                        }}>
                          Catalogs exceeding 10,000 URLs face crawl efficiency constraints. Sitemap segmentation, robots.txt refinement, and strategic URL exclusion direct crawl focus toward high-value pages. Magento's default crawl behavior wastes budget without intervention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PRODUCT & CATEGORY SEO AT ENTERPRISE SCALE */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Product & Category SEO
                  <br />
                  at Enterprise Scale
                </h2>
              </div>

              <div style={{
                background: 'var(--surface)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
              }}>
                
                <div style={{
                  display: 'grid',
                  gap: '2.5rem',
                }}>
                  
                  {/* SKU-Level Complexity */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      PRODUCT SEO
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      SKU-level complexity requires metadata templates and schema governance.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}>
                      Configurable products, simple products, bundled products—each require distinct SEO treatment. Canonical logic must prevent variant dilution. Structured data must scale without manual intervention.
                    </p>
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

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Duplicate Control */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      CATEGORY SEO
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      Category depth enables keyword expansion but demands duplicate control.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}>
                      Multi-level categories create overlap risk. Strategic canonicalization, unique editorial content per level, and internal linking hierarchy prevent authority fragmentation across similar pages.
                    </p>
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

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Authority Consolidation */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      AUTHORITY
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      Large catalogs fragment authority without consolidation strategy.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Pagination, sorting parameters, and filtered views dilute ranking signals. Canonical consolidation, parameter handling, and strategic noindex rules focus authority on primary URLs.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SEO ON MAGENTO — ENTERPRISE REALITY */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Technical SEO on Magento
                </h2>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--muted)',
                  marginTop: '0.75rem',
                }}>
                  Enterprise Reality
                </p>
              </div>

              {/* Darker inset */}
              <div style={{
                background: 'var(--bg)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              }}>
                
                <div style={{
                  display: 'grid',
                  gap: '2rem',
                }}>
                  
                  {/* Canonical Complexity */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      CANONICAL COMPLEXITY
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Magento generates canonical URLs dynamically. Product assignment to multiple categories, parameter-based filters, and store view inheritance create canonical conflicts requiring configuration-level governance.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Indexation Control */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      INDEXATION CONTROL
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Layered navigation, sorting parameters, pagination, and session IDs generate indexable URLs without strategic robots meta implementation. Parameter exclusion via robots.txt and Google Search Console prevents crawl inefficiency.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Faceted Navigation */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      FACETED NAVIGATION
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Each filter attribute creates URL variations. Strategic canonicalization or parameter handling based on search volume and user intent prevents duplicate content while preserving filter functionality.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Server-Side Performance */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      SERVER-SIDE PERFORMANCE
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Magento's resource demands impact Time to First Byte and Core Web Vitals. Varnish caching, Redis, database optimization, and CDN integration are non-negotiable for SEO performance at scale.
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Rendering & JavaScript */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.75rem',
                    }}>
                      RENDERING & JAVASCRIPT
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Magento 2 uses RequireJS and KnockoutJS. Heavy JavaScript execution delays indexable content rendering. Critical content must render server-side to ensure crawlability and indexation reliability.
                    </p>
                  </div>

                </div>

                <div style={{
                  marginTop: '2.5rem',
                  paddingTop: '2.5rem',
                  borderTop: '1px solid var(--border)',
                }}>
                  <Link 
                    href="/services/technical-ecommerce-seo" 
                    style={{
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}
                    className="hover:underline"
                  >
                    Technical Ecommerce SEO →
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* INTERNATIONAL & MULTI-STORE SEO — MAGENTO-SPECIFIC */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  International & Multi-Store SEO
                </h2>
              </div>

              <div style={{
                background: 'var(--surface)',
                border: '2px solid var(--border)',
                borderLeft: '6px solid var(--accent)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
              }}>
                
                <div style={{
                  display: 'grid',
                  gap: '2.5rem',
                }}>
                  
                  {/* Store Views */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      STORE VIEWS
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      Magento's multi-store architecture enables market-level separation.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Store views support language and regional customization. However, shared catalogs across store views create duplicate content risk without proper canonical and hreflang implementation. URL structure must align with international SEO strategy from initial configuration.
                    </p>
                  </div>

                  <div style={{ height: '2px', background: 'var(--border)' }} />

                  {/* Hreflang Management */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      HREFLANG MANAGEMENT
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      International stores require precise hreflang annotation at scale.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Large catalogs generate thousands of hreflang tags. Programmatic implementation via XML sitemaps or HTTP headers prevents manual errors. Regional content differentiation and language-specific URLs must be maintained across catalog updates.
                    </p>
                  </div>

                  <div style={{ height: '2px', background: 'var(--border)' }} />

                  {/* Market-Level Separation */}
                  <div>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '1rem',
                    }}>
                      MARKET-LEVEL SEPARATION
                    </div>
                    <p style={{
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      marginBottom: '0.75rem',
                    }}>
                      Regional SEO strategy must align with Magento's store structure.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Separate domains, subdomains, or subdirectories each carry distinct SEO implications. Currency, pricing, and product availability differences require content differentiation beyond translation. International SEO on Magento is architectural, not linguistic.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PERFORMANCE & INFRASTRUCTURE CONSIDERATIONS */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Performance & Infrastructure
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gap: '1px',
                background: 'var(--border)',
              }}>
                
                {/* Hosting Architecture */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                  }} className="lg:grid-cols-[220px_1fr]">
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                      HOSTING ARCHITECTURE
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Enterprise Magento requires dedicated or cloud infrastructure. Shared hosting collapses under catalog scale. Managed Magento hosting (Adobe Commerce Cloud, Nexcess, Cloudways) provides performance baseline required for SEO stability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caching Layers */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                  }} className="lg:grid-cols-[220px_1fr]">
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                      CACHING LAYERS
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Varnish full-page cache, Redis session storage, CDN edge caching. Multi-layer caching is mandatory. Misconfigured caching breaks dynamic content. Cache warmers ensure crawlers encounter fast pages.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Database Performance */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                  }} className="lg:grid-cols-[220px_1fr]">
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                      DATABASE PERFORMANCE
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Large catalogs generate heavy database queries. Indexing, query optimization, and flat catalog tables prevent performance degradation. Database bloat from logs and session data must be managed continuously.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SEO Stability Under Load */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                  }} className="lg:grid-cols-[220px_1fr]">
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                      SEO STABILITY UNDER LOAD
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                      }}>
                        Traffic spikes, promotional events, and crawl bursts stress infrastructure. Performance degradation impacts crawl rate and Core Web Vitals rankings. Infrastructure must support SEO under peak load, not just average traffic.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* WHO MAGENTO SEO IS / IS NOT FOR */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Who This Is For
                </h2>
              </div>

              <div style={{ 
                display: 'grid', 
                gap: '3rem',
              }} className="lg:grid-cols-2">
                
                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}>
                    Enterprise Aligned
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Stores with catalogs exceeding 5,000 SKUs requiring architectural SEO.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Multi-store or international ecommerce operations.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Teams with dedicated developers or technical resources.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Businesses prioritizing long-term SEO infrastructure over quick wins.
                    </p>
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}>
                    Not Aligned
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Small catalogs better served by Shopify or WooCommerce.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Expecting SEO to function without technical involvement.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Unwilling to invest in enterprise hosting and performance infrastructure.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Looking for hands-off SEO solutions without governance.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* HOW MAGENTO SEO IS APPLIED */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  How Magento SEO Is Applied
                </h2>
              </div>

              <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
                
                {/* Phase 1 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    1. Architecture Evaluation
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Assess category structure, attribute configuration, multi-store setup, indexation status, canonical implementation, crawl efficiency, and performance infrastructure. Identify structural SEO constraints.
                  </p>
                </div>

                {/* Phase 2 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    2. Strategy Mapping
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Align keyword research with category taxonomy. Define layered navigation indexation rules. Map international hreflang structure. Establish governance for product metadata and schema at scale.
                  </p>
                </div>

                {/* Phase 3 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    3. Scalable Execution
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Implement technical specifications via developer collaboration. Deploy canonical logic, parameter handling, sitemap segmentation, caching optimization, and performance tuning. Execution scales with catalog growth.
                  </p>
                </div>

                {/* Phase 4 */}
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    4. Continuous Optimization
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Monitor indexation growth, crawl budget utilization, Core Web Vitals, and ranking distribution. Refine as catalog expands. Quarterly technical audits prevent silent SEO degradation.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ADVANCED MAGENTO SEO FAQs */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              <div style={{ marginBottom: '4rem' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Advanced Magento SEO Questions
                </h2>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* FINAL CTA — ENTERPRISE CLOSE */}
        <section
          style={{
            paddingTop: '8rem',
            paddingBottom: '8rem',
            background: 'var(--surface-alt)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ 
              maxWidth: '52rem', 
              margin: '0 auto', 
            }}>
              
              <div style={{
                padding: 'clamp(3.5rem, 6vw, 5rem) clamp(3rem, 5vw, 4rem)',
                background: 'var(--surface)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                position: 'relative',
              }}>
                
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '120px',
                  background: 'var(--accent)',
                  borderTopLeftRadius: 'var(--radius-lg)',
                }} />
                
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 2.875rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Enterprise SEO for
                  <br />
                  Complex Magento Stores
                </h2>
                
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                }}>
                  Scale with precision. Control complexity.
                </p>
                
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
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'gap 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Improve My Magento SEO
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
