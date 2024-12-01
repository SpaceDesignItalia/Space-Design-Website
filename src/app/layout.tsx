import CookieBanner from '@/components/cookie-banner'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: 'Space Design - %s',
    default: 'Space Design - Home',
  },
}

// Declare dataLayer for TypeScript
declare let dataLayer: any[]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />

        {/* Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JX18BJC5EQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JX18BJC5EQ');
            `,
          }}
        ></script>
      </head>
      <body className="text-gray-950 antialiased">
        <CookieBanner />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
