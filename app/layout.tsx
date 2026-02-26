import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://moazhaider.com'),
  title: 'Ecommerce SEO Consultant | Moaz Haider – Shopify, WooCommerce & Magento SEO Expert',
  description: 'Moaz Haider is a freelance ecommerce SEO consultant with 7+ years of experience helping online stores rank higher and grow revenue. Shopify, WooCommerce & Magento SEO expert. Get your free SEO audit today.',
  keywords: [
    'ecommerce seo consultant',
    'ecommerce seo expert',
    'shopify seo consultant',
    'shopify seo expert',
    'woocommerce seo expert',
    'woocommerce seo specialist',
    'ecommerce seo specialist',
    'ecommerce seo services',
    'ecommerce seo audit',
    'ecommerce keyword research',
    'product page seo',
    'technical seo for ecommerce',
    'freelance ecommerce seo expert',
    'ecommerce seo freelancer',
    'hire ecommerce seo expert',
    'online store seo',
    'online store seo consultant',
    'ecommerce seo pricing',
    'ecommerce seo strategy',
    'best ecommerce seo consultant',
    'ecommerce website optimization',
    'ecommerce seo package',
    'freelance seo consultant for ecommerce',
    'ecommerce seo consultant for hire',
    'increase ecommerce sales with seo',
    'ecommerce organic growth consultant',
  ],
  authors: [{ name: 'Moaz Haider' }],
  creator: 'Moaz Haider',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moazhaider.com',
    title: 'Moaz Haider – Freelance Ecommerce SEO Consultant',
    description: 'Helping Shopify, WooCommerce & Magento stores rank higher and grow organic revenue. 7+ years ecommerce SEO expertise. Free audit available.',
    siteName: 'Moaz Haider',
    images: [{
      url: 'https://moazhaider.com/assets/moaz-haider-ecommerce-seo-consultant.jpg',
      width: 1200,
      height: 630,
      alt: 'Moaz Haider – Freelance Ecommerce SEO Consultant with 7+ years experience',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moaz Haider – Freelance Ecommerce SEO Consultant',
    description: 'Helping Shopify, WooCommerce & Magento stores rank higher and grow organic revenue. 7+ years ecommerce SEO expertise.',
    creator: '@MoazHaider71',
    images: ['https://moazhaider.com/assets/moaz-haider-ecommerce-seo-consultant.jpg'],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="VaMyBi89_ICAtTIbv4YhkTGKUDkmRRJoccCamkK4w9o" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'night';
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
