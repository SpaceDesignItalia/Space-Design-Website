import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPosts from './blogPosts'

export const metadata: Metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'Blog',

  // Descrizione ottimizzata per SEO con focus sulle parole chiave principali
  description:
    'Rimani aggiornato su novità, aggiornamenti di prodotto e strategie per migliorare le vendite con il nostro blog. Scopri consigli utili per innovare il tuo business digitale e restare competitivo sul mercato.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/blog', // Assicurati che l'URL sia corretto per il blog
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Blog',
    description:
      'Leggi gli ultimi articoli su aggiornamenti di prodotto, tendenze tecnologiche e consigli per ottimizzare le vendite con il nostro blog. Rimani competitivo nel mondo digitale.',
    url: 'https://www.spacedesign-italia.it/blog', // Assicurati che l'URL sia quello giusto per il blog
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignBlogBanner.png', // URL dell'immagine di anteprima (aggiorna se necessario)
        width: 1200,
        height: 630,
        alt: 'Space Design Italia - Blog di Novità e Consigli per il Business Digitale',
      },
    ],
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title:
      'Blog | Space Design Italia - Novità e Consigli per il Tuo Business Digitale',
    description:
      'Scopri articoli, aggiornamenti e suggerimenti per rendere il tuo business digitale più competitivo e innovativo.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignBlogBanner.png', // Assicurati che il link dell'immagine sia corretto
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'blog aziendale',
    'novità digitali',
    'strategie di business',
    'aggiornamenti di prodotto',
    'innovazione digitale',
    'consigli per il business',
    'Space Design Italia',
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

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let page =
    'page' in searchParams
      ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1

  let category =
    typeof searchParams.category === 'string'
      ? searchParams.category
      : undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          Novità da Space Design Italia
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Rimani aggiornato sulle ultime evoluzioni di Space Design Italia:
          scopri gli sviluppi dei nostri software, gli approfondimenti sul mondo
          digitale e consigli pratici per migliorare l'efficienza e la crescita
          della tua azienda.
        </Lead>
      </Container>

      <Container className="mt-16 pb-24">
        <BlogPosts />
      </Container>
      <Footer />
    </main>
  )
}
