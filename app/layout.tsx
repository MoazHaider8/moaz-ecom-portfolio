import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://moazhaider.com'),
  title: 'Ecommerce SEO Consultant | Moaz Haider',
  description: 'Expert ecommerce SEO consultant specializing in ecommerce SEO services, product page SEO, and international ecommerce SEO for online stores across USA, UK, Canada, Australia, UAE, and Germany.',
  keywords: [
    'ecommerce seo consultant',
    'ecommerce seo services',
    'seo for ecommerce website',
    'ecommerce seo audit',
    'product page seo',
    'ecommerce keyword research',
    'technical seo for ecommerce',
  ],
  authors: [{ name: 'Moaz Haider' }],
  creator: 'Moaz Haider',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moazhaider.com',
    title: 'Ecommerce SEO Consultant | Moaz Haider',
    description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores across international markets.',
    siteName: 'Moaz Haider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Consultant | Moaz Haider',
    description: 'Expert ecommerce SEO consultant specializing in strategic SEO for online stores.',
    creator: '@MoazHaider71',
  },
  alternates: {
    canonical: 'https://moazhaider.com',
  },
  robots: {
    index: true,
    follow: true,
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
        <meta name="google-site-verification" content="VaMyBi89_ICAtTIbv4YhkTGKUDkmRRJoccCamkK4w9o" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');
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
