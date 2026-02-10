import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | MoazHaider.com',
  description: 'Read MoazHaider.com disclaimer regarding SEO services, external links, and limitation of liability.',
  alternates: {
    canonical: 'https://moazhaider.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | MoazHaider.com',
    description: 'Read MoazHaider.com disclaimer regarding SEO services, external links, and limitation of liability.',
    url: 'https://moazhaider.com/disclaimer',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | MoazHaider.com',
    description: 'Read MoazHaider.com disclaimer regarding SEO services, external links, and limitation of liability.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DisclaimerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/disclaimer#webpage',
        url: 'https://moazhaider.com/disclaimer',
        name: 'Disclaimer | MoazHaider.com',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        datePublished: '2026-01-01',
        dateModified: '2026-02-10',
        description: 'Disclaimer for MoazHaider.com regarding SEO services, external links, and limitation of liability.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://moazhaider.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Disclaimer',
            item: 'https://moazhaider.com/disclaimer',
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-[60px] md:pt-[70px]">
        {/* Hero Section */}
        <section className="pt-3 pb-20" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                 style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
              Disclaimer
            </h1>

            <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Last Updated:</strong> February 10, 2026
            </p>

            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Please read this disclaimer carefully before using the services offered by MoazHaider.com.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-12">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  1. General Information
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    The information provided on MoazHaider.com is for general informational and educational purposes only. 
                    While we strive to provide accurate and up-to-date information about ecommerce SEO strategies, techniques, 
                    and best practices, we make no representations or warranties of any kind, express or implied, about the 
                    completeness, accuracy, reliability, or suitability of this information.
                  </p>
                  <p className="leading-relaxed">
                    Any reliance you place on such information is strictly at your own risk.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  2. No Guarantees and Results May Vary
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>SEO is not an exact science.</strong> Search engine algorithms 
                    are constantly evolving, and rankings are influenced by hundreds of factors including competition, market 
                    conditions, website history, budget, implementation quality, and factors outside our control.
                  </p>
                  <p className="leading-relaxed">
                    We do not guarantee specific rankings, traffic increases, revenue growth, or any particular business 
                    outcomes from SEO services. Results vary significantly based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your industry and competitive landscape</li>
                    <li>Current state of your website</li>
                    <li>Quality of implementation</li>
                    <li>Time and resources invested</li>
                    <li>External market factors</li>
                    <li>Search engine algorithm updates</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Past performance and case studies mentioned on this website do not guarantee similar results for your business.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  3. Professional Advice Disclaimer
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    The information and services provided by MoazHaider.com are related to SEO and digital marketing strategy. 
                    We are <strong style={{ color: 'var(--text)' }}>not</strong> providing:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong style={{ color: 'var(--text)' }}>Legal advice:</strong> Consult with a qualified attorney for legal matters</li>
                    <li><strong style={{ color: 'var(--text)' }}>Financial advice:</strong> Consult with a certified financial advisor for investment decisions</li>
                    <li><strong style={{ color: 'var(--text)' }}>Medical advice:</strong> Consult with licensed healthcare professionals for health-related matters</li>
                    <li><strong style={{ color: 'var(--text)' }}>Tax advice:</strong> Consult with a certified tax professional for tax-related questions</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Always seek the advice of qualified professionals in your specific field for matters beyond the scope of SEO services.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  4. Third-Party Links and External Websites
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    MoazHaider.com may contain links to third-party websites, tools, platforms, or resources that are not owned 
                    or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, 
                    or practices of any third-party websites.
                  </p>
                  <p className="leading-relaxed">
                    By using this website, you expressly relieve Moaz Haider from any and all liability arising from your use of 
                    any third-party website or service. We strongly advise you to read the terms and conditions and privacy policies 
                    of any third-party websites you visit.
                  </p>
                  <p className="leading-relaxed">
                    Links to external sites are provided for convenience only and do not constitute an endorsement.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  5. Testimonials and Case Studies
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Any testimonials, case studies, or success stories featured on this website represent unique experiences and 
                    results achieved by specific clients under particular circumstances. These examples are not intended to represent 
                    or guarantee that anyone will achieve the same or similar results.
                  </p>
                  <p className="leading-relaxed">
                    Each business is different, and results depend on many factors. Your results may vary significantly.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  6. Search Engine Algorithm Changes
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Search engines like Google regularly update their algorithms, which can significantly impact search rankings. 
                    We stay informed about these changes and adjust strategies accordingly, but we cannot control or predict algorithm 
                    updates or their impact on your website's performance.
                  </p>
                  <p className="leading-relaxed">
                    SEO is an ongoing process that requires continuous monitoring, adjustment, and adaptation to changing conditions.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  7. Errors and Omissions
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Despite our best efforts to ensure accuracy, MoazHaider.com may contain technical inaccuracies, typographical 
                    errors, or outdated information. We reserve the right to make changes, corrections, and updates to the website 
                    at any time without notice.
                  </p>
                  <p className="leading-relaxed">
                    We do not warrant that the website will be error-free, uninterrupted, or free from viruses or other harmful components.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  8. Limitation of Liability
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    To the fullest extent permitted by applicable law, Moaz Haider and MoazHaider.com shall not be liable for any 
                    direct, indirect, incidental, consequential, or punitive damages arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use or inability to use our website or services</li>
                    <li>Errors or omissions in the content</li>
                    <li>Unauthorized access to or alteration of your data</li>
                    <li>Statements or conduct of any third party</li>
                    <li>SEO strategy implementation or results</li>
                    <li>Search engine algorithm changes or penalties</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    This includes, but is not limited to, loss of revenue, profits, business opportunities, data, or goodwill, 
                    even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  9. Website Availability
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We strive to keep MoazHaider.com available and functional at all times. However, we do not guarantee that 
                    the website will always be available, accessible, or operate without interruptions or errors.
                  </p>
                  <p className="leading-relaxed">
                    Maintenance, updates, technical issues, or circumstances beyond our control may result in temporary unavailability.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  10. Changes to This Disclaimer
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We reserve the right to modify this disclaimer at any time. Changes and clarifications will take effect 
                    immediately upon posting on this page. The "Last Updated" date at the top indicates when this disclaimer 
                    was last revised.
                  </p>
                  <p className="leading-relaxed">
                    Your continued use of this website after changes constitutes acceptance of the updated disclaimer.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  11. Contact Information
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    If you have questions or concerns about this disclaimer, please contact us:
                  </p>
                  <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                    <p className="mb-2"><strong style={{ color: 'var(--text)' }}>Email:</strong> <a href="mailto:contact@moazhaider.com" className="underline" style={{ color: 'var(--accent)' }}>contact@moazhaider.com</a></p>
                    <p className="mb-2"><strong style={{ color: 'var(--text)' }}>Phone:</strong> <a href="tel:+923024698992" className="underline" style={{ color: 'var(--accent)' }}>+92 302 4698992</a></p>
                    <p><strong style={{ color: 'var(--text)' }}>Online:</strong> <Link href="/contact" className="underline" style={{ color: 'var(--accent)' }}>Contact Form</Link></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                Questions About Our Services?
              </h2>

              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                If you have questions about our SEO services or how we work with clients, we're happy to help.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/" className="btn btn-secondary">
                  Back to Home
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
