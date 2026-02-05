import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Wix SEO Consultant – Practical SEO That Works on Wix | Moaz Haider',
  description: 'Wix SEO focused on clarity, structure, and realistic growth—designed to work within the platform\'s real limitations.',
  openGraph: {
    title: 'Wix SEO Consultant – Practical SEO That Works on Wix | Moaz Haider',
    description: 'Wix SEO focused on clarity, structure, and realistic growth—designed to work within the platform\'s real limitations.',
    type: 'website',
    url: 'https://moazhaider.com/platforms/wix-seo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix SEO Consultant – Practical SEO That Works on Wix | Moaz Haider',
    description: 'Wix SEO focused on clarity, structure, and realistic growth—designed to work within the platform\'s real limitations.',
  },
  alternates: {
    canonical: 'https://moazhaider.com/platforms/wix-seo',
  },
}

const faqs = [
  {
    question: "Is Wix bad for SEO?",
    answer: "Wix isn't inherently bad for SEO—it's just different. The platform has structural constraints that affect how search engines crawl and index content. Success on Wix depends on working with these constraints strategically, not fighting them. Many Wix sites rank well when approached realistically."
  },
  {
    question: "Should I migrate from Wix?",
    answer: "Migration makes sense when you've outgrown Wix's capabilities—typically when scaling beyond a few hundred products, needing advanced technical control, or competing in highly technical SEO environments. If your current setup meets your goals, optimization often delivers better ROI than migration."
  },
  {
    question: "Can Wix rank competitively?",
    answer: "Wix can rank competitively in the right contexts—local markets, niche industries, and less technically demanding verticals. Competing against enterprise platforms in high-stakes environments requires realistic expectations and strategic positioning."
  },
  {
    question: "Is Wix okay for ecommerce SEO?",
    answer: "Wix works for ecommerce SEO at smaller scales—think curated product lines, local retail, and straightforward catalog structures. Large inventories, complex faceted navigation, and technically demanding product discovery typically need more robust platforms."
  },
]

export default function WixSEOPage() {
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
              name: 'Wix SEO Consultant – Practical SEO That Works on Wix',
              url: 'https://moazhaider.com/platforms/wix-seo',
              description: 'Wix SEO focused on clarity, structure, and realistic growth—designed to work within the platform\'s real limitations.',
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
              name: 'Wix SEO',
              serviceType: 'Wix SEO Consulting',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
              },
              areaServed: 'International',
              url: 'https://moazhaider.com/platforms/wix-seo',
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
              gap: '0.5rem',
              alignItems: 'center',
            }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/platforms" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Platforms</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>Wix SEO</span>
            </div>
          </div>
        </section>

        {/* HERO - Two-Column Layout with Visual System */}
        <section style={{ 
          paddingTop: '4rem', 
          paddingBottom: '6rem', 
          background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface-alt) 100%)',
          minHeight: 'auto',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
            }}>
              
              {/* LEFT: Content */}
              <div style={{ maxWidth: '600px' }}>
                
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1rem',
                }}>
                  Practical SEO for Wix Websites
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.75rem, 6vw, 4rem)',
                  fontWeight: '500',
                  lineHeight: '1.15',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}>
                  Wix SEO
                </h1>

                <p style={{
                  fontSize: 'clamp(1.0625rem, 1.8vw, 1.1875rem)',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '2.5rem',
                  maxWidth: '540px',
                }}>
                  SEO strategies designed to work with Wix, not against it. Realistic optimization within platform constraints.
                </p>

                <Link 
                  href="/contact"
                  className="cta-button"
                  style={{
                    display: 'inline-block',
                    padding: '1.125rem 2.75rem',
                    background: 'var(--text)',
                    color: 'var(--bg)',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  Improve My Wix SEO
                </Link>

              </div>

              {/* RIGHT: Abstract Visual System */}
              <div style={{ position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Wireframe-style page structure visualization */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '350px' }}>
                  
                  {/* Structure Layer */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '10%',
                    width: '80%',
                    height: '100%',
                    border: '2px solid var(--border)',
                    borderRadius: '10px',
                    opacity: 0.4,
                    transition: 'opacity 0.3s ease',
                  }}>
                    {/* Header bar */}
                    <div style={{
                      height: '15%',
                      borderBottom: '1px solid var(--border)',
                      background: 'var(--surface-alt)',
                    }} />
                    
                    {/* Content blocks */}
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ height: '12px', width: '70%', background: 'var(--muted)', borderRadius: '2px', opacity: 0.3 }} />
                      <div style={{ height: '12px', width: '85%', background: 'var(--muted)', borderRadius: '2px', opacity: 0.3 }} />
                      <div style={{ height: '12px', width: '60%', background: 'var(--muted)', borderRadius: '2px', opacity: 0.3 }} />
                      
                      <div style={{ marginTop: '1.5rem', height: '80px', background: 'var(--surface-alt)', borderRadius: '4px', opacity: 0.2 }} />
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '25%',
                    width: '70%',
                    height: '70%',
                    border: '2px solid var(--accent)',
                    borderRadius: '10px',
                    background: 'var(--bg)',
                    opacity: 0.9,
                    boxShadow: '0 4px 16px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ height: '10px', width: '80%', background: 'var(--text)', borderRadius: '2px', opacity: 0.5 }} />
                      <div style={{ height: '10px', width: '90%', background: 'var(--text)', borderRadius: '2px', opacity: 0.4 }} />
                      <div style={{ height: '10px', width: '75%', background: 'var(--text)', borderRadius: '2px', opacity: 0.4 }} />
                      
                      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '4px', opacity: 0.3 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ height: '8px', width: '100%', background: 'var(--text-secondary)', borderRadius: '2px', opacity: 0.3, marginBottom: '0.5rem' }} />
                          <div style={{ height: '8px', width: '70%', background: 'var(--text-secondary)', borderRadius: '2px', opacity: 0.3 }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Structure Label */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '10%',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.6,
                  }}>
                    Structure
                  </div>

                  {/* Content Label */}
                  <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '25%',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.7,
                  }}>
                    Content
                  </div>

                  {/* Ranking Arrow Indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: 'var(--accent)',
                      opacity: 0.5,
                    }} />
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      opacity: 0.7,
                    }}>
                      Indexing
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CAN WIX RANK IN GOOGLE? - Two-Column Editorial */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(3rem, 5vw, 5rem)',
              alignItems: 'start',
            }}>
              
              {/* LEFT: Headline + Intro */}
              <div>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '500',
                  lineHeight: '1.3',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}>
                  Can Wix Rank in Google?
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  The question everyone asks. Here's the honest answer.
                </p>
              </div>

              {/* RIGHT: Key Statements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                <div style={{
                  paddingLeft: '1.5rem',
                  borderLeft: '4px solid var(--accent)',
                  background: 'linear-gradient(90deg, rgba(var(--accent-rgb, 0,0,0), 0.03) 0%, transparent 100%)',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                }}>
                  <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    margin: 0,
                  }}>
                    Yes. Wix sites can rank—and many do.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    The difference isn't whether Wix can rank, but how easily it gets there compared to platforms built specifically for SEO performance.
                  </p>
                  <div style={{
                    height: '1px',
                    width: '60px',
                    background: 'var(--border)',
                  }} />
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Many Wix sites struggle not because the platform is inherently broken, but because expectations don't match reality.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'var(--bg)',
                  borderRadius: '4px',
                  borderLeft: '3px solid var(--muted)',
                }}>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}>
                    The right strategy matters more than the tools.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* LIMITATIONS VS REALITY - Split Panel Design */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Limitations vs Reality
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '2.5rem',
            }}>
              
              {/* LEFT: Where Wix Struggles */}
              <div style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                background: 'var(--surface-alt)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}>
                  Where Wix Has Constraints
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Structure
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Page rendering affects how search engines crawl and index content—not fatally, but meaningfully.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Performance
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Baseline performance characteristics require strategic workarounds for Core Web Vitals.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Control
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Some technical elements sit behind Wix's managed environment. You optimize within boundaries.
                    </p>
                  </div>

                </div>
              </div>

              {/* RIGHT: What Actually Works */}
              <div style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                background: 'var(--bg)',
                borderRadius: '12px',
                border: '2px solid var(--accent)',
                boxShadow: '0 4px 16px rgba(var(--accent-rgb, 0,0,0), 0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}>
                  What Works on Wix
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Clarity
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Clean hierarchies, straightforward navigation, and focused page purposes perform better than elaborate structures.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Content
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      When technical optimization has boundaries, content quality becomes the differentiator.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.75rem',
                    }}>
                      Focus
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      Strategic choices about what gets indexed prevent dilution and keep effort where it moves the needle.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* WIX ECOMMERCE SEO - Structured Catalog Visualization */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'linear-gradient(135deg, var(--surface-alt) 0%, var(--bg) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.02,
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--text) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(3rem, 5vw, 4rem)',
              alignItems: 'center',
            }}>
              
              {/* LEFT: Content */}
              <div>
                <h2 style={{
                  fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                  fontWeight: '500',
                  lineHeight: '1.3',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.01em',
                }}>
                  Wix Ecommerce SEO
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Wix ecommerce works best at smaller scales—curated product lines, local retail, straightforward catalog structures.
                  </p>

                  <div style={{
                    height: '1px',
                    width: '50px',
                    background: 'var(--border)',
                  }} />

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Large inventories and complex faceted navigation typically need more robust platforms. Optimization becomes exponentially harder as complexity grows.
                  </p>

                  <div style={{
                    paddingLeft: '1.5rem',
                    borderLeft: '3px solid var(--accent)',
                    marginTop: '0.5rem',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      margin: 0,
                    }}>
                      Product discoverability relies heavily on content quality and targeted relevance.
                    </p>
                  </div>

                </div>
              </div>

              {/* RIGHT: Catalog Depth Visualization */}
              <div style={{ position: 'relative', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Product Card Stack */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
                  
                  {/* Category Layer */}
                  <div style={{
                    padding: '1.5rem',
                    background: 'var(--bg)',
                    border: '2px solid var(--border)',
                    borderRadius: '10px',
                    marginBottom: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '1rem',
                    }}>
                      Category
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      <div style={{ height: '8px', width: '80%', background: 'var(--text)', opacity: 0.2, borderRadius: '2px' }} />
                      <div style={{ height: '8px', width: '60%', background: 'var(--text)', opacity: 0.2, borderRadius: '2px' }} />
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                  }}>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        style={{
                          padding: '1rem',
                          background: num === 3 ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%)' : 'var(--bg)',
                          border: num === 3 ? '2px solid var(--accent)' : '1px solid var(--border)',
                          borderRadius: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          opacity: num === 3 ? 1 : 0.5,
                          boxShadow: num === 3 ? '0 4px 12px rgba(var(--accent-rgb, 0,0,0), 0.2)' : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{ height: '40px', background: 'var(--surface-alt)', borderRadius: '4px', opacity: 0.4 }} />
                        <div style={{ height: '6px', width: '100%', background: 'var(--text)', opacity: 0.2, borderRadius: '2px' }} />
                        <div style={{ height: '6px', width: '70%', background: 'var(--text)', opacity: 0.2, borderRadius: '2px' }} />
                      </div>
                    ))}
                  </div>

                  {/* Focus Indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-2rem',
                    transform: 'translateY(-50%)',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.7,
                  }}>
                    Curated
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* TECHNICAL SEO ON WIX - Structured with Callouts */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Technical SEO on Wix
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* What Can Be Controlled */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                alignItems: 'start',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                }}>
                  Full Control
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}>
                    What You Can Optimize
                  </h3>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Page titles, meta descriptions, heading structures, image optimization, internal linking, and content organization remain fully in your control—and these matter significantly.
                  </p>
                </div>
              </div>

              {/* What Cannot */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                alignItems: 'start',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                }}>
                  Platform Level
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}>
                    What Lives in Wix's Environment
                  </h3>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Core rendering logic, URL architecture patterns, and baseline performance characteristics live within Wix's managed environment. You optimize within these boundaries, not around them.
                  </p>
                </div>
              </div>

              {/* Where Effort Is Wasted */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                alignItems: 'start',
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                }}>
                  Avoid
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}>
                    Where Not to Spend Energy
                  </h3>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.5rem 0',
                  }}>
                    Trying to force Wix to behave like a platform it isn't. Energy spent fighting the platform's design is energy not spent on optimization that actually works.
                  </p>
                  <div style={{
                    padding: '1.5rem',
                    background: 'var(--surface-alt)',
                    borderRadius: '4px',
                  }}>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}>
                      For deeper technical SEO context beyond Wix's constraints, see <Link href="/services/technical-ecommerce-seo" style={{ color: 'var(--text)', textDecoration: 'underline' }}>Technical Ecommerce SEO</Link>.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* IS WIX THE RIGHT PLATFORM? - Enhanced Decision Matrix */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Is Wix the Right Platform for Your Goals?
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '2.5rem',
            }}>
              
              {/* Wix Works Well */}
              <div style={{
                padding: 'clamp(2.5rem, 4vw, 3rem)',
                background: 'var(--bg)',
                borderRadius: '12px',
                border: '2px solid var(--accent)',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(var(--accent-rgb, 0,0,0), 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '2rem',
                  padding: '0.375rem 1rem',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  borderRadius: '2px',
                }}>
                  Good Fit
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  marginTop: '1rem',
                }}>
                  Wix Works Well When
                </h3>
                <ul style={{
                  fontSize: '1.0625rem',
                  lineHeight: '2',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: '600' }}>✓</span>
                    Your catalog is focused and manageable
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: '600' }}>✓</span>
                    Ease of use outweighs technical flexibility
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: '600' }}>✓</span>
                    You're targeting local or niche markets
                  </li>
                  <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: '600' }}>✓</span>
                    Content quality can carry SEO performance
                  </li>
                </ul>
              </div>

              {/* Consider Alternatives */}
              <div style={{
                padding: 'clamp(2.5rem, 4vw, 3rem)',
                background: 'var(--bg)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                position: 'relative',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '2rem',
                  padding: '0.375rem 1rem',
                  background: 'var(--muted)',
                  color: 'var(--bg)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  borderRadius: '2px',
                }}>
                  Reconsider
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                  marginTop: '1rem',
                }}>
                  Consider Alternatives When
                </h3>
                <ul style={{
                  fontSize: '1.0625rem',
                  lineHeight: '2',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>→</span>
                    Scaling beyond a few hundred products
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>→</span>
                    Competing in technically demanding verticals
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>→</span>
                    Advanced technical control is non-negotiable
                  </li>
                  <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>→</span>
                    Performance optimization is critical
                  </li>
                </ul>
              </div>

            </div>

            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--bg)',
              borderRadius: '6px',
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                The right platform depends on your actual goals, not theoretical best practices.
              </p>
            </div>

          </div>
        </section>

        {/* HOW WIX SEO IS APPLIED - Card Layout */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              How Wix SEO Is Applied
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
            }}>
              
              {/* Step 1 */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--bg)',
                  marginBottom: '1.5rem',
                }}>
                  1
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Assessment
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Understand current performance, identify realistic opportunities, and establish priorities within Wix's constraints.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--bg)',
                  marginBottom: '1.5rem',
                }}>
                  2
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Priorities
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Focus effort where it moves the needle—content clarity, structural simplification, indexation control.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--bg)',
                  marginBottom: '1.5rem',
                }}>
                  3
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Focused Optimization
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Implement changes that work within platform boundaries—no wasted effort fighting constraints.
                </p>
              </div>

              {/* Step 4 */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--bg)',
                  marginBottom: '1.5rem',
                }}>
                  4
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Monitoring
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Track what matters, adjust based on evidence, and maintain realistic expectations throughout.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FAQs - Spacious Design */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Common Questions
            </h2>

            <FAQAccordion faqs={faqs} />

          </div>
        </section>

        {/* FINAL CTA - Strong Typographic Close */}
        <section style={{ 
          paddingTop: '5rem', 
          paddingBottom: '5rem', 
          background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface-alt) 100%)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)',
              fontWeight: '500',
              lineHeight: '1.35',
              color: 'var(--text)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}>
              SEO that works realistically on Wix.
            </h2>

            <p style={{
              fontSize: '1.1875rem',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              marginBottom: '3.5rem',
              maxWidth: '600px',
              margin: '0 auto 3.5rem auto',
            }}>
              Strategic optimization designed for the platform you're actually using.
            </p>

            <Link 
              href="/contact"
              className="cta-button"
              style={{
                display: 'inline-block',
                padding: '1.25rem 3rem',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              }}
            >
              Improve My Wix SEO
            </Link>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

