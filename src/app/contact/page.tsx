import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import ContactForm from './contactForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'Avvia il Tuo Progetto Digitale con Noi',

  // Descrizione della pagina ottimizzata per SEO con focus sulle parole chiave principali
  description:
    'Contattaci per discutere delle tue esigenze digitali. Siamo specializzati nella creazione di software personalizzati, app mobile e siti web. Trasformiamo la tua idea in una soluzione digitale su misura.',

  // Canonical URL per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/contact',
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Contattaci',
    description:
      'Inizia il tuo percorso digitale con Space Design Italia. Scopri come possiamo sviluppare soluzioni software personalizzate per il tuo business. Contattaci oggi per dare vita alla tua idea.',
    url: 'https://www.spacedesign-italia.it/contact',
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignBanner.png', // Assicurati che l'immagine sia rappresentativa della pagina
        width: 1200,
        height: 630,
        alt: 'Contatta Space Design Italia per il tuo progetto software',
      },
    ],
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Avvia il Tuo Progetto Digitale con Noi',
    description:
      'Parla con i nostri esperti e scopri come possiamo creare soluzioni software su misura per te. Contattaci per iniziare oggi stesso.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignBanner.png',
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'contattaci',
    'sviluppo software',
    'sviluppo app',
    'software personalizzato',
    'contattare Space Design Italia',
    'soluzioni digitali',
    'consulenza digitale',
  ],
  robots: {
    index: true,
    follow: true,
  },

  // Author e Copyright
  authors: [
    {
      name: 'Space Design Italia',
      url: 'https://www.spacedesign-italia.it',
    },
  ],
}

export default function ContactUs() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
