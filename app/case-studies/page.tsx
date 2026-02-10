import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseStudiesClient from './CaseStudiesClient'
import { caseStudies } from '@/content/case-studies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce SEO Case Studies | Results & Growth Proof – Moaz Haider',
  description: 'Explore ecommerce SEO case studies showing growth outcomes, strategy decisions, and execution highlights across platforms and industries.',
  alternates: {
    canonical: 'https://moazhaider.com/case-studies',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ecommerce SEO Case Studies | Results & Growth Proof – Moaz Haider',
    description: 'Explore ecommerce SEO case studies showing growth outcomes, strategy decisions, and execution highlights across platforms and industries.',
    url: 'https://moazhaider.com/case-studies',
    type: 'website',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Case Studies | Results & Growth Proof – Moaz Haider',
    description: 'Explore ecommerce SEO case studies showing growth outcomes, strategy decisions, and execution highlights across platforms and industries.',
  },
}

export default function CaseStudiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://moazhaider.com/case-studies#webpage',
        url: 'https://moazhaider.com/case-studies',
        name: 'Ecommerce SEO Case Studies',
        description: 'Explore ecommerce SEO case studies showing growth outcomes, strategy decisions, and execution highlights across platforms and industries.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://moazhaider.com/#website',
          url: 'https://moazhaider.com',
          name: 'Moaz Haider - Ecommerce SEO Consultant',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://moazhaider.com/case-studies#collection',
        name: 'Ecommerce SEO Case Studies',
        url: 'https://moazhaider.com/case-studies',
        description: 'Collection of ecommerce SEO case studies demonstrating results and strategies.',
        hasPart: caseStudies.map((study) => ({
          '@type': 'CreativeWork',
          name: study.title,
          url: `https://moazhaider.com/case-studies/${study.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://moazhaider.com/case-studies#breadcrumb',
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
            name: 'Case Studies',
            item: 'https://moazhaider.com/case-studies',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What metrics do you track in ecommerce SEO case studies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I track organic traffic growth, keyword rankings and positions, indexation improvements, Core Web Vitals scores, crawl efficiency, conversion rates, and revenue attribution where applicable. Each case study focuses on metrics most relevant to the specific challenges addressed.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to see results in ecommerce SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ecommerce SEO typically shows measurable results within 3-6 months. Technical fixes can show improvements faster (2-8 weeks), while content and authority-building strategies may take 4-6 months. Timeline varies based on site authority, competition, and implementation speed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you share client names in case studies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most case studies protect client confidentiality and focus on strategies, challenges, and outcomes rather than brand names. Some clients approve named case studies, which are clearly identified. All metrics shown are real results from actual projects.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can results vary by platform or industry?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, results vary significantly based on platform (Shopify, WooCommerce, Magento, etc.), industry competition, current site authority, catalog size, and market dynamics. Each case study provides context about these variables to set realistic expectations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is included in a free SEO audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A free SEO audit includes technical analysis (crawl issues, indexation, site speed), on-page review (meta tags, content, structure), competitive gap analysis, and prioritized recommendations. It provides a roadmap for immediate improvements and long-term strategy.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with international ecommerce stores?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, I specialize in international ecommerce SEO across markets including USA, UK, Canada, Australia, UAE, and Germany. Services include hreflang implementation, market-specific keyword research, and localized optimization strategies.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you measure SEO success for ecommerce?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO success for ecommerce is measured through organic traffic growth to product and category pages, keyword rankings for commercial intent terms, indexation health, site speed improvements, conversion rate trends, and ultimately revenue attribution from organic channels.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of ecommerce SEO case studies do you have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Case studies cover industry-specific strategies (fashion, electronics, beauty, jewelry, furniture, health), platform optimizations (Shopify, WooCommerce, Magento, BigCommerce), technical fixes (crawl budget, Core Web Vitals, schema), content strategies, and international SEO implementations.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <CaseStudiesClient />
      <Footer />
    </>
  )
}
