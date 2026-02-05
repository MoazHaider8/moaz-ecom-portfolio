import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.moazhaider.com'),
  title: 'Ecommerce SEO Consultant | Moaz Haider',
  description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores. Proven results across 6 international markets: USA, UK, Canada, Australia, UAE, Germany.',
  keywords: [
    'ecommerce SEO consultant',
    'ecommerce SEO expert',
    'Shopify SEO',
    'WooCommerce SEO',
    'Magento SEO',
    'international ecommerce SEO',
    'online store SEO',
    'product page optimization',
  ],
  authors: [{ name: 'Moaz Haider' }],
  creator: 'Moaz Haider',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.moazhaider.com',
    title: 'Ecommerce SEO Consultant | Moaz Haider',
    description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores. Proven results across 6 international markets.',
    siteName: 'Moaz Haider - Ecommerce SEO Consultant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Consultant | Moaz Haider',
    description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores.',
    creator: '@MoazHaider71',
  },
  alternates: {
    canonical: 'https://www.moazhaider.com',
  },
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
                  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'day' : 'night');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
