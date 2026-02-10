import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MoazHaider.com',
  description: 'Review the terms and conditions for using MoazHaider.com, including site use, intellectual property, and service terms.',
  alternates: {
    canonical: 'https://moazhaider.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | MoazHaider.com',
    description: 'Review the terms and conditions for using MoazHaider.com, including site use, intellectual property, and service terms.',
    url: 'https://moazhaider.com/terms',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | MoazHaider.com',
    description: 'Review the terms and conditions for using MoazHaider.com, including site use, intellectual property, and service terms.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/terms#webpage',
        url: 'https://moazhaider.com/terms',
        name: 'Terms & Conditions | MoazHaider.com',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        datePublished: '2026-01-01',
        dateModified: '2026-02-10',
        description: 'Terms and conditions for using MoazHaider.com, including site use, intellectual property, and service terms.',
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
            name: 'Terms & Conditions',
            item: 'https://moazhaider.com/terms',
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
              Terms & Conditions
            </h1>

            <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Last Updated:</strong> February 10, 2026
            </p>

            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Please read these terms and conditions carefully before using MoazHaider.com or engaging our services.
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
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    By accessing and using MoazHaider.com (the "Website"), you accept and agree to be bound by these Terms 
                    and Conditions. If you do not agree with any part of these terms, you must not use this Website or our services.
                  </p>
                  <p className="leading-relaxed">
                    These terms apply to all visitors, users, and others who access or use the Website and services provided 
                    by Moaz Haider ("we," "us," or "our").
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  2. Use of the Website
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Permitted Use:</strong> You may use this Website for lawful 
                    purposes only, including learning about our SEO services, contacting us for inquiries, and accessing 
                    informational content.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Prohibited Activities:</strong> You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the Website in any way that violates applicable laws or regulations</li>
                    <li>Transmit any harmful code, viruses, or malicious software</li>
                    <li>Attempt to gain unauthorized access to any part of the Website or related systems</li>
                    <li>Engage in any automated data collection (scraping, crawling) without permission</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Harass, abuse, or harm other users or our team</li>
                    <li>Use the Website for any commercial purposes without our written consent</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We reserve the right to terminate or suspend your access to the Website immediately, without prior notice, 
                    for any violation of these terms.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  3. Intellectual Property Rights
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Unless otherwise stated, Moaz Haider owns all intellectual property rights in and to the Website, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Website design, layout, and visual elements</li>
                    <li>Written content, articles, guides, and blog posts</li>
                    <li>Graphics, logos, images, and multimedia</li>
                    <li>Code, software, and technical implementations</li>
                    <li>Trade names, trademarks, and service marks</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    All content is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, 
                    distribute, modify, create derivative works, publicly display, or otherwise use any content from this Website 
                    without our prior written permission.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Limited License:</strong> We grant you a limited, non-exclusive, 
                    non-transferable license to access and use the Website for personal, non-commercial purposes only.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  4. Services and Engagement
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Service Descriptions:</strong> Information about our SEO services 
                    on this Website is for general informational purposes. Actual service scope, deliverables, timelines, and 
                    pricing will be detailed in a separate proposal or service agreement.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>No Automatic Agreement:</strong> Using this Website or submitting 
                    a contact form does not create a client-consultant relationship or obligate either party to enter into a 
                    service agreement.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Custom Agreements:</strong> Services are provided under separate, 
                    written agreements that will supersede these general terms for service-specific matters.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  5. Payments and Fees
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Payment Terms:</strong> Services are provided by proposal and invoice. 
                    Payment terms, schedule, and methods will be specified in your service agreement or proposal.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Fees and Pricing:</strong> All fees are quoted in USD (or as otherwise 
                    specified) and are subject to the terms outlined in your service agreement. Prices may change, but existing 
                    agreements will honor the originally quoted rates.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Late Payments:</strong> Late or failed payments may result in service 
                    suspension or termination as outlined in your service agreement.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Refunds:</strong> Refund policies, if applicable, will be detailed in 
                    your service agreement. Generally, SEO services are provided over time, and refunds are handled on a case-by-case basis.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  6. User-Generated Content
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    If you submit content to us (e.g., through contact forms, emails, testimonials, or feedback), you grant us a 
                    non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content for business 
                    purposes, including marketing and testimonials.
                  </p>
                  <p className="leading-relaxed">
                    You represent and warrant that you own or have the necessary rights to any content you submit and that your 
                    content does not infringe on the rights of any third party.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  7. Third-Party Links and Services
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Our Website may contain links to third-party websites or services that are not owned or controlled by Moaz Haider. 
                    We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
                    third-party sites or services.
                  </p>
                  <p className="leading-relaxed">
                    You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in 
                    connection with your use of any third-party websites or services.
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
                    To the maximum extent permitted by law, Moaz Haider and MoazHaider.com shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your access to or use of (or inability to access or use) the Website</li>
                    <li>Any conduct or content of any third party on the Website</li>
                    <li>Any content obtained from the Website</li>
                    <li>Unauthorized access, use, or alteration of your data</li>
                    <li>SEO services or implementation results</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    In no event shall our total liability exceed the amount paid by you, if any, for accessing or using the Website 
                    or services in the six (6) months preceding the claim.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  9. Indemnification
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    You agree to defend, indemnify, and hold harmless Moaz Haider, MoazHaider.com, and our affiliates, contractors, 
                    and employees from and against any claims, damages, obligations, losses, liabilities, costs, or expenses arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use of the Website or services</li>
                    <li>Your violation of these Terms and Conditions</li>
                    <li>Your violation of any third-party rights, including intellectual property rights</li>
                    <li>Any content you submit or transmit through the Website</li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  10. Governing Law and Jurisdiction
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction 
                    in which Moaz Haider operates, without regard to its conflict of law provisions.
                  </p>
                  <p className="leading-relaxed">
                    Any disputes arising from these terms or your use of the Website shall be resolved through good-faith negotiation. 
                    If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts in our operating jurisdiction.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  11. Privacy Policy
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Your use of the Website is also governed by our <Link href="/privacy-policy" className="underline" style={{ color: 'var(--accent)' }}>Privacy Policy</Link>, 
                    which explains how we collect, use, and protect your personal information. Please review it carefully.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  12. Changes to Terms
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We reserve the right to modify or replace these Terms and Conditions at any time at our sole discretion. 
                    If a revision is material, we will make reasonable efforts to provide notice prior to any new terms taking effect. 
                    The "Last Updated" date at the top of this page will reflect the most recent revision.
                  </p>
                  <p className="leading-relaxed">
                    By continuing to access or use our Website after revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  13. Severability
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision will be 
                    limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  14. Entire Agreement
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    These Terms and Conditions, together with our Privacy Policy and any service agreements, constitute the entire 
                    agreement between you and Moaz Haider regarding the use of the Website and supersede all prior agreements and 
                    understandings.
                  </p>
                </div>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  15. Contact Information
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    If you have questions or concerns about these Terms and Conditions, please contact us:
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
                Ready to Get Started?
              </h2>

              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                If you agree to these terms and are ready to discuss your ecommerce SEO needs, we'd love to hear from you.
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
