import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Moaz Haider | Ecommerce SEO Consultant',
  description: 'Contact Moaz Haider to discuss ecommerce SEO, request a free audit, or plan an SEO strategy for your online store.',
  alternates: {
    canonical: 'https://moazhaider.com/contact',
  },
  openGraph: {
    title: 'Contact Moaz Haider | Ecommerce SEO Consultant',
    description: 'Contact Moaz Haider to discuss ecommerce SEO, request a free audit, or plan an SEO strategy for your online store.',
    url: 'https://moazhaider.com/contact',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Moaz Haider | Ecommerce SEO Consultant',
    description: 'Contact Moaz Haider to discuss ecommerce SEO, request a free audit, or plan an SEO strategy for your online store.',
  },
}

export default function ContactPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://moazhaider.com/#person',
        name: 'Moaz Haider',
        jobTitle: 'Ecommerce SEO Consultant',
        url: 'https://moazhaider.com',
        email: 'contact@moazhaider.com',
        telephone: '+92 302 4698992',
        sameAs: [
          'https://www.linkedin.com/in/moaz-haider/',
          'https://www.facebook.com/moaz.haider.14',
          'https://x.com/MoazHaider71',
          'https://www.instagram.com/moazhaider5/',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/contact#webpage',
        url: 'https://moazhaider.com/contact',
        name: 'Contact Moaz Haider | Ecommerce SEO Consultant',
        isPartOf: { '@id': 'https://moazhaider.com/#website' },
        about: { '@id': 'https://moazhaider.com/#person' },
        description: 'Contact Moaz Haider to discuss ecommerce SEO, request a free audit, or plan an SEO strategy for your online store.',
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://moazhaider.com/contact#contactpage',
        url: 'https://moazhaider.com/contact',
        name: 'Contact Moaz Haider',
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
            name: 'Contact',
            item: 'https://moazhaider.com/contact',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I contact Moaz Haider?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can contact Moaz Haider via email at contact@moazhaider.com, phone at +92 302 4698992, or by filling out the contact form on this page.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer free SEO audits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, I offer free initial SEO audits to assess your ecommerce site\'s current state and identify key opportunities for improvement.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the response time for inquiries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I typically respond to all inquiries within 24-48 hours during business days.',
            },
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
        {/* Hero Section with Form */}
        <section className="pt-3 pb-20 md:pt-4 md:pb-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Available for consultation</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text)' }}>
                  Let's Talk About Your{' '}
                  <span style={{ color: 'var(--accent)' }}>Ecommerce SEO</span>
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Ready to grow your online store with strategic SEO? Fill out the form to get started 
                  with a free audit and consultation.
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Email</div>
                      <a href="mailto:contact@moazhaider.com" 
                         className="transition-colors"
                         style={{ color: 'var(--text-secondary)' }}>
                        contact@moazhaider.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Phone</div>
                      <a href="tel:+923024698992" 
                         className="transition-colors"
                         style={{ color: 'var(--text-secondary)' }}>
                        +92 302 4698992
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Social</div>
                      <div className="flex gap-3">
                        <a href="https://www.linkedin.com/in/moaz-haider/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="transition-colors hover:opacity-80"
                           style={{ color: 'var(--text-secondary)' }}
                           aria-label="LinkedIn">
                          LinkedIn
                        </a>
                        <span style={{ color: 'var(--border)' }}>•</span>
                        <a href="https://x.com/MoazHaider71" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="transition-colors hover:opacity-80"
                           style={{ color: 'var(--text-secondary)' }}
                           aria-label="X (Twitter)">
                          X
                        </a>
                        <span style={{ color: 'var(--border)' }}>•</span>
                        <a href="https://www.instagram.com/moazhaider5/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="transition-colors hover:opacity-80"
                           style={{ color: 'var(--text-secondary)' }}
                           aria-label="Instagram">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next Timeline */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Process</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  What Happens Next
                </h2>

                <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                  Here's what you can expect after reaching out
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Initial Review',
                    description: "I'll review your website and business goals to understand your current SEO situation and growth opportunities.",
                    time: 'Within 24-48 hours',
                  },
                  {
                    step: '02',
                    title: 'Free Audit Snapshot',
                    description: "You'll receive a preliminary audit highlighting key technical issues, quick wins, and strategic recommendations.",
                    time: '2-3 business days',
                  },
                  {
                    step: '03',
                    title: 'Strategy Call',
                    description: "We'll schedule a call to discuss the audit findings, your goals, and how we can work together to achieve them.",
                    time: 'Within 1 week',
                  },
                  {
                    step: '04',
                    title: 'Proposal & Next Steps',
                    description: "If we're a good fit, I'll provide a detailed proposal with scope, timeline, and next steps to get started.",
                    time: 'Within 1-2 weeks',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-8 rounded-2xl"
                    style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl"
                           style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                          {item.title}
                        </h3>
                        <div className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                          {item.time}
                        </div>
                      </div>
                      <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
                     style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>FAQ</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                  Common Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'How do I contact Moaz Haider?',
                    answer: 'You can reach me via email at contact@moazhaider.com, phone at +92 302 4698992, or by filling out the contact form above. I respond to all inquiries within 24-48 hours.',
                  },
                  {
                    question: 'Do you offer free SEO audits?',
                    answer: "Yes! I provide a free preliminary SEO audit to assess your site's current state and identify key opportunities. This helps us both understand if we're a good fit before moving forward.",
                  },
                  {
                    question: 'What is the response time for inquiries?',
                    answer: 'I typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention it in your message.',
                  },
                  {
                    question: 'Do you work with businesses outside your country?',
                    answer: 'Absolutely! I work with ecommerce businesses internationally, including clients in the USA, UK, Canada, Australia, UAE, and across Europe. All communication is done remotely.',
                  },
                  {
                    question: 'What information should I include in my inquiry?',
                    answer: "Please share your website URL, ecommerce platform, primary SEO goals, and any specific challenges you're facing. The more context you provide, the better I can tailor my initial recommendations.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group p-6 rounded-xl transition-all"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                        {faq.question}
                      </h3>
                      <svg 
                        className="w-5 h-5 transition-transform group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: 'var(--accent)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA to Services */}
        <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text)' }}>
                Explore My SEO Services
              </h2>

              <p className="text-xl mb-10" style={{ color: 'var(--text-secondary)' }}>
                Learn more about how I can help grow your ecommerce business with strategic SEO
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="btn btn-primary">
                  View All Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  About Me
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
