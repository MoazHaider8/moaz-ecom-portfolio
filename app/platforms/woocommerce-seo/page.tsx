import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'WooCommerce SEO Consultant for Scalable WordPress Stores | Moaz Haider',
  description: 'WooCommerce SEO strategies built on WordPress flexibility—focused on structure, performance, and scalable organic growth.',
  alternates: {
    canonical: 'https://moazhaider.com/platforms/woocommerce-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://moazhaider.com/platforms/woocommerce-seo',
    title: 'WooCommerce SEO Consultant for Scalable WordPress Stores | Moaz Haider',
    description: 'WooCommerce SEO strategies built on WordPress flexibility—focused on structure, performance, and scalable organic growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce SEO Consultant for Scalable WordPress Stores | Moaz Haider',
    description: 'WooCommerce SEO strategies built on WordPress flexibility—focused on structure, performance, and scalable organic growth.',
  },
}

const faqs = [
  {
    question: "Is WooCommerce better for SEO than Shopify?",
    answer: "WooCommerce provides full control over URLs, server configuration, redirects, and schema implementation—advantages that matter when you have the technical capacity to use them. Shopify constrains flexibility but removes hosting and performance responsibility. Better depends on your team's resources. WooCommerce SEO scales when implemented with discipline. Without it, flexibility becomes a liability."
  },
  {
    question: "How many WooCommerce plugins are too many?",
    answer: "No specific number—impact matters more than count. Each plugin adds database queries, HTTP requests, and potential conflicts. Audit quarterly: remove unused plugins, replace heavy ones with custom code when viable, monitor Core Web Vitals impact. Performance degradation from plugin bloat directly affects rankings. Keep what delivers value, eliminate the rest."
  },
  {
    question: "Can WooCommerce scale internationally for SEO?",
    answer: "Yes, with intentional architecture. WooCommerce supports hreflang implementation, multi-currency SEO without duplicate content issues, regional hosting via CDN, and custom URL structures per market. International WooCommerce SEO requires subdirectory or subdomain strategy, market-specific keyword mapping, and technical coordination across instances. Complexity increases—plan structure before expansion."
  },
  {
    question: "Does WooCommerce require more technical SEO than other platforms?",
    answer: "WooCommerce requires ownership of technical SEO, not necessarily more of it. You control hosting, caching, database optimization, theme performance, and crawl configuration. This creates opportunity and responsibility. Shopify abstracts these layers. WooCommerce exposes them. If your team can manage infrastructure, WooCommerce offers deeper optimization potential. If not, technical SEO becomes a bottleneck."
  },
  {
    question: "What's the biggest WooCommerce SEO mistake stores make?",
    answer: "Confusing flexibility with strategy. Installing Yoast or RankMath doesn't create SEO architecture. Most WooCommerce stores fail at internal linking structure, product taxonomy depth, and performance optimization under load. Plugins provide tools—not strategy. WooCommerce SEO requires intentional hierarchy, controlled growth, and performance discipline as the catalog scales."
  }
]

export default function WooCommerceSEOPage() {
  return (
    <>
      <Header />
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://moazhaider.com/platforms/woocommerce-seo",
                "url": "https://moazhaider.com/platforms/woocommerce-seo",
                "name": "WooCommerce SEO",
                "description": "WooCommerce SEO strategies built on WordPress flexibility—focused on structure, performance, and scalable organic growth.",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://moazhaider.com",
                  "url": "https://moazhaider.com"
                }
              },
              {
                "@type": "Service",
                "name": "WooCommerce SEO",
                "serviceType": "WooCommerce SEO Consulting",
                "provider": {
                  "@type": "Person",
                  "name": "Moaz Haider"
                },
                "areaServed": "International",
                "url": "https://moazhaider.com/platforms/woocommerce-seo",
                "description": "WooCommerce SEO strategies built on WordPress flexibility—focused on structure, performance, and scalable organic growth."
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <main>

        {/* BREADCRUMB */}
        <section style={{ paddingTop: '2rem', paddingBottom: '1rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <nav style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <Link href="/platforms" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                Ecommerce SEO Platforms
              </Link>
              <span style={{ margin: '0 0.5rem', color: 'var(--muted)' }}>/</span>
              <span>WooCommerce SEO</span>
            </nav>
          </div>
        </section>

        {/* HERO — EXECUTIVE PRESENCE */}
        <section style={{ paddingTop: '3rem', paddingBottom: '4.5rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '76rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}>
                  Open-Source SEO
                </div>
              </div>

              <div style={{
                borderLeft: '2px solid var(--accent)',
                paddingLeft: 'clamp(2rem, 4vw, 2.5rem)',
              }}>
                <h1
                  style={{
                    fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
                    fontWeight: '900',
                    lineHeight: '0.92',
                    color: 'var(--text)',
                    marginBottom: '1.75rem',
                    letterSpacing: '-0.04em',
                  }}
                >
                  WooCommerce SEO
                </h1>
                
                <div style={{
                  maxWidth: '48rem',
                  marginBottom: '3rem',
                }}>
                  <p style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    lineHeight: '1.5',
                    color: 'var(--text)',
                    fontWeight: '500',
                  }}>
                    Strategic SEO architecture for WordPress stores that scale.
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2.5rem', maxWidth: '20rem' }} />

                <Link
                  href="/contact"
                  className="hover:gap-3"
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
                    transition: 'gap 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Start Conversation
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* CONTROL VS COMPLEXITY — STRATEGIC STATEMENT */}
        <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Control vs Complexity
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gap: '1px',
                background: 'var(--border)',
              }} className="lg:grid-cols-2">
                
                {/* Control */}
                <div style={{
                  padding: 'clamp(3rem, 5vw, 4rem)',
                  background: 'var(--surface)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '2.5rem',
                  }}>
                    Control
                  </div>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Custom URLs. Full redirect control. Schema freedom.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Server configuration. Database access. Caching strategy.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Complete crawl management. Advanced indexation.
                    </p>
                  </div>
                </div>

                {/* Complexity */}
                <div style={{
                  padding: 'clamp(3rem, 5vw, 4rem)',
                  background: 'var(--bg)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '2.5rem',
                  }}>
                    Complexity
                  </div>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Plugin conflicts. Performance burden. Maintenance overhead.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Structural chaos without discipline. Indexation sprawl.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Continuous vigilance required. Nothing is automated.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* WOOCOMMERCE SEO ARCHITECTURE — DIAGRAMMATIC */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  SEO Architecture
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
                
                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{ display: 'grid', gap: '1rem' }} className="lg:grid-cols-[180px_1fr]">
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Hierarchy
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Multi-level categories require keyword mapping. Depth creates authority flow.
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{ display: 'grid', gap: '1rem' }} className="lg:grid-cols-[180px_1fr]">
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Taxonomy
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Tags and attributes scale discoverability. Requires canonical discipline.
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{ display: 'grid', gap: '1rem' }} className="lg:grid-cols-[180px_1fr]">
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Internal Linking
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Authority flows from content to collections to products. Templates enable scale.
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  background: 'var(--surface)',
                }}>
                  <div style={{ display: 'grid', gap: '1rem' }} className="lg:grid-cols-[180px_1fr]">
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Permalinks
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      URL structure sets foundation. Choose once, change never.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* PRODUCT & CATEGORY SEO */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Product & Category SEO
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gap: '1px',
                background: 'var(--border)',
              }}>
                
                {/* Products */}
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
                    Products
                  </div>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Custom metadata, schema, and content structure.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}>
                    Granular control over descriptions, markup, and image optimization.
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

                {/* Categories */}
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
                    Categories
                  </div>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Multi-level taxonomy builds topical authority.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}>
                    Parent categories for broad terms. Children capture long-tail.
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

              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL SEO — CONTAINED POWER */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              
              {/* Darker Inset */}
              <div style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(3rem, 5vw, 4rem)',
              }}>
                
                <div style={{ marginBottom: '3rem' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                      fontWeight: '800',
                      lineHeight: '1.2',
                      color: 'var(--text)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Technical SEO
                  </h2>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Plugin Management
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      SEO plugins conflict with builders and caching. Quarterly audits prevent silent failures.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Performance
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Theme efficiency impacts Core Web Vitals. Heavy builders degrade rankings.
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.75px',
                    }}>
                      Crawl Control
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Full robots.txt access. Custom sitemaps. Strategic crawl budget allocation.
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

        {/* PERFORMANCE & SCALABILITY — STRATEGIC DEPTH */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--surface-alt)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}>
                  Performance & Scale
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                <div>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Hosting determines floor performance.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Managed WordPress hosting improves Time to First Byte. CDN required for international reach.
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--border)' }} />

                <div>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Database load increases with catalog size.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Indexing and query optimization prevent performance collapse.
                  </p>
                </div>

                <div style={{ height: '1px', background: 'var(--border)' }} />

                <div>
                  <p style={{
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                    lineHeight: '1.7',
                    color: 'var(--text)',
                    fontWeight: '500',
                    marginBottom: '0.75rem',
                  }}>
                    Caching strategy is non-negotiable.
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Page caching, object caching, CDN edge caching. Layered approach required for traffic.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* WHO IT'S FOR — QUIET FILTERING */}
        <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
              
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
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
                    Aligned
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Stores requiring deep taxonomy and custom architecture.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Teams with technical capacity or developer access.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Brands prioritizing long-term infrastructure.
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
                    Misaligned
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Expecting plugins to solve strategic challenges.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Unwilling to invest in hosting or technical maintenance.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                    }}>
                      Looking for hands-off SEO without architectural involvement.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* HOW WOOCOMMERCE SEO IS APPLIED */}
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
                  How WooCommerce SEO
                  <br />
                  Is Applied
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
                    1. Architecture Review
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Assess taxonomy depth, internal linking logic, permalink structure, plugin conflicts, hosting performance.
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
                    2. Strategy Alignment
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Map keywords to category hierarchy. Define internal linking framework. Establish metadata templates.
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
                    3. Guided Implementation
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Provide technical specifications for developers. Optimize schema, redirects, sitemaps, caching. Collaborative execution.
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
                    4. Continuous Refinement
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                  }}>
                    Monitor indexation, rankings, Core Web Vitals. Refine as catalog scales. Quarterly plugin audits.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ADVANCED WOOCOMMERCE SEO FAQs */}
        <section style={{ 
          paddingTop: '6rem', 
          paddingBottom: '6rem',
          background: 'var(--surface-alt)',
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

        {/* FINAL CTA — CONFIDENT CLOSE */}
        <section
          style={{
            paddingTop: '8rem',
            paddingBottom: '8rem',
            background: 'var(--surface-alt)',
          }}
        >
          <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ 
              maxWidth: '44rem', 
              margin: '0 auto', 
            }}>
              
              <div style={{
                padding: 'clamp(3rem, 6vw, 4rem)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}>
                
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
                  WooCommerce SEO
                  <br />
                  Built with Intention
                </h2>
                
                <div style={{ height: '1px', background: 'var(--border)', maxWidth: '8rem', margin: '0 auto 2.5rem' }} />
                
                <Link
                  href="/contact"
                  className="hover:gap-3"
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
                    transition: 'gap 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Start Conversation
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
