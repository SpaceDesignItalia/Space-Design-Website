import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import ContactForm from './contactForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Titolo della pagina
  title:
    'Contattaci | Space Design Italia - Inizia il tuo percorso digitale con noi',

  // Descrizione della pagina
  description:
    'Contattaci oggi stesso per discutere del tuo progetto software personalizzato. Siamo pronti a trasformare la tua visione in realtà digitale.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/contact', // Modifica in base alla struttura URL
  },

  // Open Graph per i social media
  openGraph: {
    title: 'Contattaci | Space Design Italia',
    description:
      'Inizia il tuo progetto con Space Design Italia. Contattaci oggi per scoprire come possiamo aiutarti a sviluppare soluzioni software personalizzate per il tuo business.',
    url: 'https://www.spacedesign-italia.it/contact', // Assicurati di usare l'URL giusto per questa pagina
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
