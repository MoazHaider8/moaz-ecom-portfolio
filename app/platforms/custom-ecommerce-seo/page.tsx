import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Custom Ecommerce SEO Consultant | SEO Built Into Your Architecture – Moaz Haider',
  description: 'Custom ecommerce SEO designed at the architecture level—built for headless, API-driven, and enterprise ecommerce platforms.',
  openGraph: {
    title: 'Custom Ecommerce SEO Consultant | SEO Built Into Your Architecture – Moaz Haider',
    description: 'Custom ecommerce SEO designed at the architecture level—built for headless, API-driven, and enterprise ecommerce platforms.',
    type: 'website',
    url: 'https://moazhaider.com/platforms/custom-ecommerce-seo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Ecommerce SEO Consultant | SEO Built Into Your Architecture – Moaz Haider',
    description: 'Custom ecommerce SEO designed at the architecture level—built for headless, API-driven, and enterprise ecommerce platforms.',
  },
  alternates: {
    canonical: 'https://moazhaider.com/platforms/custom-ecommerce-seo',
  },
}

const faqs = [
  {
    question: "What is custom ecommerce SEO?",
    answer: "Custom ecommerce SEO is SEO designed directly into your platform's architecture—indexation logic, crawl optimization, data structures, and rendering strategies built as system-level decisions, not post-deployment fixes. It's for headless, API-driven, and enterprise platforms where SEO requirements influence technical design."
  },
  {
    question: "Is custom SEO better than Shopify SEO?",
    answer: "Custom SEO isn't inherently better—it's fundamentally different. Shopify SEO works within platform constraints. Custom SEO means you control the entire stack: rendering logic, URL architecture, data flow, and infrastructure. The trade-off is complexity and maintenance responsibility."
  },
  {
    question: "How does SEO work in headless ecommerce?",
    answer: "In headless ecommerce, SEO control happens at the presentation layer—SSR/SSG rendering strategies, API data exposure, metadata management, and structured data implementation. The decoupled architecture requires intentional SEO planning: what gets pre-rendered, what's client-side, and how search engines access product data."
  },
  {
    question: "When does custom ecommerce make sense?",
    answer: "Custom ecommerce makes sense when platform limitations constrain business logic, scale demands infrastructure control, or unique requirements can't be solved with existing solutions. The technical investment must justify the outcome—typically enterprise scale, complex B2B workflows, or differentiated customer experiences."
  },
]

export default function CustomEcommerceSEOPage() {
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
              name: 'Custom Ecommerce SEO Consultant | SEO Built Into Your Architecture',
              url: 'https://moazhaider.com/platforms/custom-ecommerce-seo',
              description: 'Custom ecommerce SEO designed at the architecture level—built for headless, API-driven, and enterprise ecommerce platforms.',
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
              name: 'Custom Ecommerce SEO',
              serviceType: 'Custom Ecommerce SEO Consulting',
              provider: {
                '@type': 'Person',
                name: 'Moaz Haider',
              },
              areaServed: 'International',
              url: 'https://moazhaider.com/platforms/custom-ecommerce-seo',
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
              <Link href="/platforms" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Ecommerce SEO Platforms</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>Custom Ecommerce SEO</span>
            </div>
          </div>
        </section>

        {/* HERO - Architectural Thesis */}
        <section style={{ 
          paddingTop: '2.5rem', 
          paddingBottom: '5rem', 
          background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface-alt) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background architectural grid */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(90deg, var(--border) 1px, transparent 1px),
              linear-gradient(180deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.03,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 'clamp(4rem, 6vw, 6rem)',
              alignItems: 'center',
            }}>
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 768px) {
                div[style*="gridTemplateColumns: 1.4fr 1fr"] {
                  grid-template-columns: 1fr !important;
                }
              }
            `}} />
              
              {/* LEFT: Content */}
              <div style={{ maxWidth: '640px' }}>
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '1.5rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }} />
                  SEO Architecture
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 3.75rem)',
                  fontWeight: '500',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.025em',
                }}>
                  Custom Ecommerce SEO
                </h1>

                <p style={{
                  fontSize: 'clamp(1.0625rem, 1.8vw, 1.1875rem)',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  marginBottom: '3rem',
                  maxWidth: '560px',
                }}>
                  SEO engineered directly into your platform architecture—not layered on later.
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <Link 
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '1rem 2.25rem',
                      background: 'var(--text)',
                      color: 'var(--bg)',
                      fontSize: '0.9375rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    }}
                  >
                    Discuss Custom SEO Architecture
                  </Link>
                </div>

              </div>

              {/* RIGHT: Enhanced System Visualization */}
              <div style={{ position: 'relative', minHeight: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Abstract system diagram with enhanced depth */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '480px', height: '460px' }}>
                  
                  {/* Isometric grid background */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        var(--border) 20px,
                        var(--border) 21px
                      ),
                      repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 20px,
                        var(--border) 20px,
                        var(--border) 21px
                      )
                    `,
                    opacity: 0.015,
                    pointerEvents: 'none',
                  }} />

                  {/* Data Layer */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '28%',
                    border: '1.5px solid var(--border)',
                    borderRadius: '2px',
                    background: 'var(--surface-alt)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '16px',
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      background: 'var(--bg)',
                      padding: '0 0.625rem',
                    }}>
                      Data Layer
                    </div>
                    {/* Internal grid lines */}
                    <div style={{ position: 'absolute', bottom: '40%', left: '8%', width: '84%', height: '1px', background: 'var(--border)', opacity: 0.3 }} />
                    <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '60%', height: '1px', background: 'var(--border)', opacity: 0.25 }} />
                    {/* Depth indicator */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-3px',
                      right: '-3px',
                      width: '20px',
                      height: '20px',
                      background: 'linear-gradient(135deg, transparent 50%, var(--border) 50%)',
                      opacity: 0.15,
                    }} />
                  </div>

                  {/* API Layer */}
                  <div style={{
                    position: 'absolute',
                    bottom: '32%',
                    left: '6%',
                    width: '88%',
                    height: '28%',
                    border: '1.5px solid var(--border)',
                    borderRadius: '2px',
                    background: 'var(--bg)',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '16px',
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      background: 'var(--bg)',
                      padding: '0 0.625rem',
                    }}>
                      API Layer
                    </div>
                    {/* Connection nodes with pulse effect */}
                    <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid var(--text)', background: 'var(--bg)', boxShadow: '0 0 0 3px rgba(var(--accent-rgb, 0,0,0), 0.1)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(var(--accent-rgb, 0,0,0), 0.15)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid var(--text)', background: 'var(--bg)', boxShadow: '0 0 0 3px rgba(var(--accent-rgb, 0,0,0), 0.1)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '80%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid var(--text)', background: 'var(--bg)', boxShadow: '0 0 0 3px rgba(var(--accent-rgb, 0,0,0), 0.1)' }} />
                    {/* Horizontal connection line */}
                    <div style={{ position: 'absolute', top: '50%', left: '20%', width: '60%', height: '1.5px', background: 'linear-gradient(90deg, var(--border) 0%, var(--accent) 50%, var(--border) 100%)', opacity: 0.5 }} />
                  </div>

                  {/* Rendering Layer - Enhanced with gradient */}
                  <div style={{
                    position: 'absolute',
                    bottom: '64%',
                    left: '12%',
                    width: '76%',
                    height: '28%',
                    border: '2px solid var(--accent)',
                    borderRadius: '2px',
                    background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface-alt) 100%)',
                    boxShadow: '0 4px 16px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '16px',
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      background: 'var(--bg)',
                      padding: '0 0.625rem',
                    }}>
                      Rendering Layer
                    </div>
                    {/* Content bars representing rendered output */}
                    <div style={{ position: 'absolute', top: '30%', left: '10%', width: '80%', height: '2.5px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)', opacity: 0.3, borderRadius: '2px' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '10%', width: '65%', height: '2.5px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)', opacity: 0.25, borderRadius: '2px' }} />
                    <div style={{ position: 'absolute', top: '70%', left: '10%', width: '72%', height: '2.5px', background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)', opacity: 0.2, borderRadius: '2px' }} />
                    {/* Glow effect */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80%',
                      height: '80%',
                      background: 'radial-gradient(circle, rgba(var(--accent-rgb, 0,0,0), 0.05) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }} />
                  </div>

                  {/* SEO Control Points - Enhanced badge */}
                  <div style={{
                    position: 'absolute',
                    top: '2%',
                    right: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    alignItems: 'flex-end',
                  }}>
                    <div style={{
                      fontSize: '0.625rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      padding: '0.5rem 0.875rem',
                      background: 'var(--bg)',
                      border: '1.5px solid var(--accent)',
                      borderRadius: '2px',
                      boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.12)',
                    }}>
                      SEO Control
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.375rem 0.625rem', background: 'var(--surface-alt)', borderRadius: '2px' }}>
                        <div style={{ fontSize: '0.5625rem', color: 'var(--text-secondary)', letterSpacing: '0.5px', fontWeight: '500' }}>Metadata</div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 2px rgba(var(--accent-rgb, 0,0,0), 0.15)' }} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.375rem 0.625rem', background: 'var(--surface-alt)', borderRadius: '2px' }}>
                        <div style={{ fontSize: '0.5625rem', color: 'var(--text-secondary)', letterSpacing: '0.5px', fontWeight: '500' }}>Structure</div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 2px rgba(var(--accent-rgb, 0,0,0), 0.15)' }} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.375rem 0.625rem', background: 'var(--surface-alt)', borderRadius: '2px' }}>
                        <div style={{ fontSize: '0.5625rem', color: 'var(--text-secondary)', letterSpacing: '0.5px', fontWeight: '500' }}>Indexing</div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 2px rgba(var(--accent-rgb, 0,0,0), 0.15)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced connection lines with gradient */}
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--border)" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <line x1="50%" y1="85%" x2="50%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                    <line x1="50%" y1="55%" x2="50%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                  </svg>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* WHY CUSTOM PLATFORMS EXIST */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--surface-alt)',
          position: 'relative',
        }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: 'clamp(3rem, 5vw, 5rem)',
              alignItems: 'start',
            }}>
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 900px) {
                  div[style*="gridTemplateColumns: 280px 1fr"] {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}} />

              {/* LEFT: Heading with vertical line */}
              <div style={{ position: 'sticky', top: '120px' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: '500',
                  lineHeight: '1.25',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.015em',
                }}>
                  Why Custom Platforms Exist
                </h2>
                <div style={{
                  width: '2px',
                  height: '80px',
                  background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)',
                }} />
              </div>

              {/* RIGHT: Card stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div style={{
                  padding: '2.25rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '4px',
                    height: '100%',
                    background: 'var(--accent)',
                    opacity: 0.4,
                  }} />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '2px',
                      border: '1.5px solid var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                    }}>
                      01
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      Platform Limitations
                    </div>
                  </div>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    paddingLeft: '3rem',
                  }}>
                    When existing platforms can't support business logic, pricing structures, or customer experiences unique to your model, custom development becomes the only path forward.
                  </p>
                </div>

                <div style={{
                  padding: '2.25rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '4px',
                    height: '100%',
                    background: 'var(--accent)',
                    opacity: 0.4,
                  }} />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '2px',
                      border: '1.5px solid var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                    }}>
                      02
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      Complexity at Scale
                    </div>
                  </div>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    paddingLeft: '3rem',
                  }}>
                    Large catalogs, complex B2B workflows, multi-region operations, and high-transaction volumes demand infrastructure control that SaaS platforms don't provide.
                  </p>
                </div>

                <div style={{
                  padding: '2.25rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '4px',
                    height: '100%',
                    background: 'var(--accent)',
                    opacity: 0.4,
                  }} />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '2px',
                      border: '1.5px solid var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                    }}>
                      03
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      Ownership & Control
                    </div>
                  </div>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    paddingLeft: '3rem',
                  }}>
                    Full control over data structures, performance optimization, vendor dependencies, and long-term technical decisions. The trade-off is maintenance responsibility and engineering investment.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SEO AT THE ARCHITECTURE LEVEL */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
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
              SEO at the Architecture Level
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}>  
              
              {/* System Design */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderTop: '2.5px solid var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '1.5rem',
                  borderRadius: '2px',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                }}>
                  01
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  SEO as System Design
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  URL architecture, metadata structures, and navigation hierarchies designed as database schemas and routing logic—not post-deployment configurations.
                </p>
              </div>

              {/* Indexation Planning */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderTop: '2.5px solid var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '1.5rem',
                  borderRadius: '2px',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                }}>
                  02
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Indexation Planning
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Control what gets indexed, when, and how. Canonical logic, noindex rules, and pagination strategies built into application logic.
                </p>
              </div>

              {/* Crawl Logic */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderTop: '2.5px solid var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '1.5rem',
                  borderRadius: '2px',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                }}>
                  03
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Crawl Logic
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Internal linking structure, XML sitemaps, and robots.txt configurations designed to guide crawler behavior efficiently.
                </p>
              </div>

              {/* Data Flow */}
              <div style={{
                padding: '2rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderTop: '2.5px solid var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '1.5rem',
                  borderRadius: '2px',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                }}>
                  04
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  Data Flow
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  How product data, category structures, and content flow from backend systems to frontend rendering—with SEO requirements influencing API design.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* HEADLESS & API-DRIVEN SEO */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--surface-alt)',
        }}>
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
                  Headless & API-Driven SEO
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Decoupled architectures separate content management from presentation. SEO control happens at the rendering layer—SSR, SSG, or ISR strategies determine what search engines see.
                  </p>

                  <div style={{
                    paddingLeft: '1.5rem',
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text)',
                      fontWeight: '500',
                      margin: 0,
                    }}>
                      API design must expose structured data intentionally—product schemas, metadata, and navigation hierarchies available for SEO rendering.
                    </p>
                  </div>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: '1.8',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    The challenge: ensuring crawlers access pre-rendered content while maintaining dynamic user experiences. The opportunity: full control over rendering strategies.
                  </p>

                </div>
              </div>

              {/* RIGHT: System Flow Visualization */}
              <div style={{ position: 'relative', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* API */}
                  <div style={{
                    padding: '1.125rem 1.5rem',
                    background: 'var(--bg)',
                    border: '1.5px solid var(--border)',
                    borderRadius: '2px',
                    textAlign: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      Backend API
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: '1.5px',
                      height: '24px',
                      background: 'var(--border)',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '7px solid var(--border)',
                      }} />
                    </div>
                  </div>

                  {/* Rendering */}
                  <div style={{
                    padding: '1.125rem 1.5rem',
                    background: 'var(--bg)',
                    border: '1.5px solid var(--accent)',
                    borderRadius: '2px',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.08)',
                  }}>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      SSR / SSG Layer
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: '1.5px',
                      height: '24px',
                      background: 'var(--border)',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '7px solid var(--border)',
                      }} />
                    </div>
                  </div>

                  {/* Search Engines */}
                  <div style={{
                    padding: '1.125rem 1.5rem',
                    background: 'var(--bg)',
                    border: '1.5px solid var(--border)',
                    borderRadius: '2px',
                    textAlign: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      fontSize: '0.6875rem',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      Search Engines
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* PERFORMANCE, SCALE & CONTROL */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3.5rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Performance, Scale & Control
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.75rem',
            }}>
              
              {/* Core Web Vitals */}
              <div style={{
                padding: '2.25rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Accent corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, transparent 50%, var(--accent) 50%)',
                  opacity: 0.04,
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }} />
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                  }}>
                    Core Web Vitals
                  </div>
                </div>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Custom platforms allow infrastructure-level optimization—CDN configuration, caching strategies, image handling, and code splitting designed for performance from the ground up.
                </p>
              </div>

              {/* Infrastructure Decisions */}
              <div style={{
                padding: '2.25rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Accent corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, transparent 50%, var(--accent) 50%)',
                  opacity: 0.04,
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }} />
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                  }}>
                    Infrastructure
                  </div>
                </div>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  Hosting decisions, database architecture, and server-side rendering strategies directly impact crawlability and user experience. SEO requirements influence technical stack choices.
                </p>
              </div>

              {/* SEO Stability Under Scale */}
              <div style={{
                padding: '2.25rem',
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Accent corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, transparent 50%, var(--accent) 50%)',
                  opacity: 0.04,
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }} />
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                  }}>
                    Scale
                  </div>
                </div>
                <p style={{
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}>
                  At enterprise scale, SEO stability requires intentional architecture—pagination logic that doesn't break, canonical management across millions of pages, and crawl budgets managed through infrastructure design.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* WHEN CUSTOM SEO MAKES SENSE */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--surface-alt)',
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
              When Custom SEO Makes Sense
            </h2>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '2rem',
            }}>
              
              {/* Built For */}
              <div style={{
                padding: '2.25rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.06)',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}>
                  Built For
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
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    Enterprise-scale catalogs
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    Complex B2B workflows
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    Headless/API-driven platforms
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    Multi-region operations
                  </li>
                  <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    Unique business logic
                  </li>
                </ul>
              </div>

              {/* Not Built For */}
              <div style={{
                padding: '2.25rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: 'var(--text)',
                  marginBottom: '2rem',
                }}>
                  Not Built For
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
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
                    Small-scale operations
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
                    Standard retail models
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
                    Limited technical resources
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
                    Quick time-to-market needs
                  </li>
                  <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--muted)' }}>—</span>
                    Platform solutions work fine
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* HOW CUSTOM ECOMMERCE SEO IS APPLIED */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--bg)',
          position: 'relative',
        }}>
          {/* Background grid pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.02,
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              How Custom Ecommerce SEO Is Applied
            </h2>

            <div style={{ position: 'relative' }}>
              
              {/* Vertical connecting line */}
              <div style={{
                position: 'absolute',
                left: '30px',
                top: '30px',
                bottom: '30px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent) 50%, transparent 100%)',
                opacity: 0.2,
              }}>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 640px) {
                    div[style*="left: 30px"] {
                      display: none !important;
                    }
                  }
                `}} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
                {/* Phase 1 */}
                <div style={{
                  padding: '2rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--accent)',
                    zIndex: 1,
                  }}>
                    <style dangerouslySetInnerHTML={{__html: `
                      @media (max-width: 640px) {
                        div[style*="left: -12px"] {
                          display: none !important;
                        }
                      }
                    `}} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: '56px',
                      height: '56px',
                      borderRadius: '2px',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.375rem',
                      fontWeight: '600',
                      color: 'var(--bg)',
                      boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    }}>
                      01
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        color: 'var(--text)',
                        marginBottom: '0.875rem',
                        letterSpacing: '-0.01em',
                      }}>
                        System Analysis
                      </h3>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}>
                        Understanding architecture, data models, rendering strategies, and SEO control points across the stack.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div style={{
                  padding: '2rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--accent)',
                    zIndex: 1,
                  }}>
                    <style dangerouslySetInnerHTML={{__html: `
                      @media (max-width: 640px) {
                        div[style*="left: -12px"] {
                          display: none !important;
                        }
                      }
                    `}} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: '56px',
                      height: '56px',
                      borderRadius: '2px',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.375rem',
                      fontWeight: '600',
                      color: 'var(--bg)',
                      boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    }}>
                      02
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        color: 'var(--text)',
                        marginBottom: '0.875rem',
                        letterSpacing: '-0.01em',
                      }}>
                        SEO Architecture Planning
                      </h3>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}>
                        Designing URL structures, metadata management, indexation logic, and rendering strategies aligned with business goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div style={{
                  padding: '2rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--accent)',
                    zIndex: 1,
                  }}>
                    <style dangerouslySetInnerHTML={{__html: `
                      @media (max-width: 640px) {
                        div[style*="left: -12px"] {
                          display: none !important;
                        }
                      }
                    `}} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: '56px',
                      height: '56px',
                      borderRadius: '2px',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.375rem',
                      fontWeight: '600',
                      color: 'var(--bg)',
                      boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    }}>
                      03
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        color: 'var(--text)',
                        marginBottom: '0.875rem',
                        letterSpacing: '-0.01em',
                      }}>
                        Implementation Guidance
                      </h3>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}>
                        Working with engineering teams to implement SEO requirements—technical specifications, validation, and integration testing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div style={{
                  padding: '2rem',
                  background: 'var(--surface-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--accent)',
                    zIndex: 1,
                  }}>
                    <style dangerouslySetInnerHTML={{__html: `
                      @media (max-width: 640px) {
                        div[style*="left: -12px"] {
                          display: none !important;
                        }
                      }
                    `}} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: '56px',
                      height: '56px',
                      borderRadius: '2px',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--text) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.375rem',
                      fontWeight: '600',
                      color: 'var(--bg)',
                      boxShadow: '0 2px 8px rgba(var(--accent-rgb, 0,0,0), 0.15)',
                    }}>
                      04
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        color: 'var(--text)',
                        marginBottom: '0.875rem',
                        letterSpacing: '-0.01em',
                      }}>
                        Ongoing Refinement
                      </h3>
                      <p style={{
                        fontSize: '1.0625rem',
                        lineHeight: '1.7',
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}>
                        Monitoring performance, identifying optimization opportunities, and evolving SEO architecture as the platform scales.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* RELATIONSHIP TO SERVICES */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--surface-alt)',
        }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>  
            
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              margin: '0 0 2rem 0',
            }}>
              Custom ecommerce SEO intersects with broader technical and strategic work. For deeper context on specific areas:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{
                padding: '1.5rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--accent)',
              }}>
                <Link href="/services/technical-ecommerce-seo" style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontSize: '1.0625rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                  }}>
                    Technical Ecommerce SEO
                  </span>
                </Link>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: '0.5rem 0 0 0',
                }}>
                  Platform-agnostic technical SEO principles
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--accent)',
              }}>
                <Link href="/services/ecommerce-keyword-research" style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontSize: '1.0625rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                  }}>
                    Ecommerce Keyword Research
                  </span>
                </Link>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: '0.5rem 0 0 0',
                }}>
                  Strategic keyword planning for custom platforms
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--accent)',
              }}>
                <Link href="/services/category-page-seo" style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontSize: '1.0625rem',
                    fontWeight: '500',
                    color: 'var(--text)',
                  }}>
                    Category Page SEO
                  </span>
                </Link>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: '0.5rem 0 0 0',
                }}>
                  Category architecture and optimization
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FAQs */}
        <section style={{ 
          paddingTop: '4.5rem', 
          paddingBottom: '4.5rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.3',
              color: 'var(--text)',
              marginBottom: '2.75rem',
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}>
              Common Questions
            </h2>

            <FAQAccordion faqs={faqs} />

          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem', 
          background: 'var(--bg)',
        }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '500',
              lineHeight: '1.4',
              color: 'var(--text)',
              marginBottom: '2.5rem',
              letterSpacing: '-0.015em',
            }}>
              SEO should be part of your architecture.
            </h2>

            <Link 
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'var(--text)',
                color: 'var(--bg)',
                fontSize: '0.9375rem',
                fontWeight: '500',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.25s ease',
              }}
            >
              Discuss Custom Ecommerce SEO
            </Link>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
