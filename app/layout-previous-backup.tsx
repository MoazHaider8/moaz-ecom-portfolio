import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://moazhaider.com'),
  title: 'Moaz Haider | Ecommerce SEO Consultant',
  description: 'Expert ecommerce SEO consultant specializing in ecommerce SEO services, technical SEO for ecommerce, product page SEO, and international ecommerce SEO strategies. Serving major markets including USA, UK, Canada, Australia, UAE, and Germany.',
  keywords: [
    'ecommerce seo consultant',
    'ecommerce seo services',
    'seo for ecommerce website',
    'international ecommerce seo',
    'ecommerce seo audit',
    'ecommerce keyword research',
    'product page seo',
    'category page seo',
    'technical seo for ecommerce',
    'ecommerce content strategy',
  ],
  authors: [{ name: 'Moaz Haider' }],
  creator: 'Moaz Haider',
  publisher: 'Moaz Haider',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://moazhaider.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moazhaider.com',
    title: 'Moaz Haider | Ecommerce SEO Consultant',
    description: 'Expert ecommerce SEO consultant specializing in ecommerce SEO services, technical SEO for ecommerce, product page SEO, and international ecommerce SEO strategies.',
    siteName: 'Moaz Haider',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Moaz Haider - Ecommerce SEO Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moaz Haider | Ecommerce SEO Consultant',
    description: 'Expert ecommerce SEO consultant specializing in ecommerce SEO services for international markets.',
    images: ['/og.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
