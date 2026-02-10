import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MoazHaider.com',
  description: 'Read MoazHaider.com privacy policy covering data collection, cookies, analytics, and user rights.',
  alternates: {
    canonical: 'https://moazhaider.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | MoazHaider.com',
    description: 'Read MoazHaider.com privacy policy covering data collection, cookies, analytics, and user rights.',
    url: 'https://moazhaider.com/privacy-policy',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | MoazHaider.com',
    description: 'Read MoazHaider.com privacy policy covering data collection, cookies, analytics, and user rights.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/privacy-policy#webpage',
        url: 'https://moazhaider.com/privacy-policy',
        name: 'Privacy Policy | MoazHaider.com',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        datePublished: '2026-01-01',
        dateModified: '2026-02-10',
        description: 'Privacy policy for MoazHaider.com covering data collection, cookies, analytics, and user rights.',
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
            name: 'Privacy Policy',
            item: 'https://moazhaider.com/privacy-policy',
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
              Privacy Policy
            </h1>

            <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Last Updated:</strong> February 10, 2026
            </p>

            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              This privacy policy explains how MoazHaider.com collects, uses, and protects your personal information.
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
                  1. Information We Collect
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We collect information that you provide directly when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out contact forms or audit request forms</li>
                    <li>Subscribe to newsletters or updates</li>
                    <li>Contact us via email or phone</li>
                    <li>Interact with our website</li>
                  </ul>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Information collected may include:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact details (email, phone number)</li>
                    <li>Company name and website URL</li>
                    <li>Ecommerce platform and business information</li>
                    <li>Messages and correspondence</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide requested services</li>
                    <li>Conduct SEO audits and consultations</li>
                    <li>Send you updates, newsletters, or marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We will never sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  3. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    MoazHaider.com uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: 'var(--text)' }}>Types of cookies we use:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong style={{ color: 'var(--text)' }}>Essential Cookies:</strong> Required for basic site functionality (e.g., theme preferences)</li>
                    <li><strong style={{ color: 'var(--text)' }}>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics or similar)</li>
                    <li><strong style={{ color: 'var(--text)' }}>Marketing Cookies:</strong> Track conversions and campaign performance</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    You can control cookie preferences through your browser settings. Note that disabling cookies may affect site functionality.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  4. Data Retention
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
                  </p>
                  <p className="leading-relaxed">
                    Contact form submissions and email correspondence are retained for a maximum of 3 years, or until you request deletion.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  5. Data Sharing and Third Parties
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We may share your information with trusted third-party service providers who assist us in operating our website and providing services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email service providers (for sending communications)</li>
                    <li>Analytics providers (Google Analytics, privacy-focused alternatives)</li>
                    <li>Hosting providers (website infrastructure)</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    These third parties are contractually obligated to protect your information and use it only for the purposes we specify.
                  </p>
                  <p className="leading-relaxed">
                    We may also disclose your information if required by law or to protect our rights, safety, or property.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  6. Your Privacy Rights
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong style={{ color: 'var(--text)' }}>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong style={{ color: 'var(--text)' }}>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong style={{ color: 'var(--text)' }}>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong style={{ color: 'var(--text)' }}>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong style={{ color: 'var(--text)' }}>Data Portability:</strong> Request a copy of your data in a structured format</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise any of these rights, please contact us at <a href="mailto:contact@moazhaider.com" className="underline" style={{ color: 'var(--accent)' }}>contact@moazhaider.com</a>.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  7. Data Security
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure storage and access controls</li>
                    <li>Regular security audits and updates</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  8. Children's Privacy
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    MoazHaider.com does not knowingly collect or solicit personal information from individuals under the age of 16. If we learn that we have collected personal information from a child under 16, we will delete it promptly.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  9. International Data Transfers
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  10. Changes to This Privacy Policy
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the top of this page indicates when the policy was last revised.
                  </p>
                  <p className="leading-relaxed">
                    We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  11. Contact Us
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    If you have questions, concerns, or requests regarding this privacy policy or how we handle your personal data, please contact us:
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
                Questions About Your Privacy?
              </h2>

              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                If you have any concerns or questions about how we handle your data, we're here to help.
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
