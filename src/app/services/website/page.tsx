// Importing necessary components and types
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { MacbookScroll } from '@/components/ui/mcbook-scroll'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import BrushRoundedIcon from '@mui/icons-material/BrushRounded'
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded'
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded'

import type { Metadata } from 'next'

// Page metadata
export const metadata: Metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'Creazione di Siti Professionali e Personalizzati',

  // Descrizione ottimizzata per SEO con focus sulle parole chiave principali
  description:
    "Creiamo siti web eleganti e funzionali che catturano l'attenzione e offrono un'esperienza utente senza pari. Soluzioni su misura per ogni tipo di business, ottimizzate per dispositivi mobili e SEO-friendly.",

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/services/web-development', // Assicurati che l'URL sia quello giusto
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Creazione di Siti Professionali e Personalizzati',
    description:
      'Offriamo servizi di sviluppo web che combinano design elegante, funzionalità avanzate, ottimizzazione per dispositivi mobili e SEO. Porta il tuo business online con soluzioni personalizzate.',
    url: 'https://www.spacedesign-italia.it/services/web-development', // Inserisci l'URL effettivo della tua pagina
    siteName: 'Space Design Italia',
    images: [
      {
        url: '/og-links/SpaceDesignWebsiteBanner.png', // URL dell'immagine di anteprima
        width: 1200,
        height: 630,
        alt: 'Creazione di Siti Professionali e Personalizzati con Space Design Italia',
      },
    ],
    type: 'website',
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title:
      'Creazione di Siti Professionali e Personalizzati | Space Design Italia',
    description:
      'Porta il tuo business online con siti web eleganti e funzionali. Offriamo soluzioni personalizzate, ottimizzate per dispositivi mobili e SEO-friendly.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignWebsiteBanner.png',
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'creazione siti web',
    'sviluppo web',
    'design sito personalizzato',
    'siti web professionali',
    'ottimizzazione mobile',
    'web development',
    'SEO siti web',
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

// Header component
function Header() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <>
            <Heading
              as="h1"
              className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl md:text-8xl"
            >
              Il tuo sito, la tua{' '}
              <span className="bg-gradient-to-br from-[#FF0000] to-[#B91372] bg-clip-text text-transparent">
                storia.
              </span>
            </Heading>
            <div className="mb-10 flex items-center justify-center">
              <p className="mt-4 w-1/2 text-lg font-normal text-gray-500 dark:text-gray-300">
                Sviluppiamo siti web che parlano al tuo pubblico, integrando
                tecnologia, design e funzionalità per portare il tuo brand
                online al massimo potenziale.
              </p>
            </div>
          </>
        }
        badge={
          <img
            className="h-12 w-12"
            alt="Logo Space Design"
            src="/logo-cluster/logo-spacedesign.svg"
          />
        }
        src={`/screenshots/web.png`}
        showGradient={false}
      />
    </div>
  )
}

function Strenght() {
  const features = [
    {
      name: 'Design moderni e accattivanti:',
      description:
        "I nostri siti web sono progettati per catturare l'attenzione dei tuoi visitatori, combinando estetica e funzionalità per un'esperienza utente unica.",
      icon: BrushRoundedIcon,
    },
    {
      name: 'Intuitivi e funzionali:',
      description:
        "Creiamo interfacce semplici e intuitive che facilitano la navigazione e l'interazione, rendendo l'esperienza utente fluida e senza intoppi.",
      icon: TipsAndUpdatesRoundedIcon,
    },
    {
      name: 'Veloci e ottimizzati per dispositivi mobile:',
      description:
        "I nostri siti sono progettati per garantire caricamenti rapidi e un'ottimizzazione perfetta su tutti i dispositivi, dai desktop agli smartphone.",
      icon: SpeedRoundedIcon,
    },
    {
      name: 'SEO ottimizzato:',
      description:
        "Implementiamo pratiche SEO all'avanguardia per assicurarti una migliore visibilità sui motori di ricerca, aiutando il tuo sito a raggiungere il pubblico giusto.",
      icon: SignalCellularAltRoundedIcon,
    },
    {
      name: 'Integrazione con social media:',
      description:
        'Colleghiamo il tuo sito ai principali social media, facilitando la condivisione dei contenuti e aumentando la tua visibilità online.',
      icon: PhoneIphoneRoundedIcon,
    },
    {
      name: 'Soluzioni scalabili:',
      description:
        'Progettiamo siti web che possono crescere insieme al tuo business, permettendoti di aggiungere funzionalità e contenuti man mano che le tue esigenze evolvono.',
      icon: ConstructionRoundedIcon,
    },
  ]

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <Heading as="h3" className="mt-2 max-w-3xl">
              Il sito web che desideri, su misura per il tuo business
            </Heading>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trasforma la tua idea in un sito web professionale e
              personalizzato. Dal design alla funzionalità, creiamo piattaforme
              che rispecchiano la tua visione e che si adattano perfettamente
              alle tue esigenze.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              alt="App screenshot 1"
              src="/screenshots/web3.png"
              width={2432}
              height={1442}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-primary"
                  />
                  {feature.name}
                </dt>{' '}
                <br />
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'Quali sono i vantaggi di avere un sito web custom?',
      answer:
        'Un sito web custom offre numerosi vantaggi per il tuo business! Avrai un design unico che riflette la tua identità aziendale, con funzionalità su misura per le tue esigenze specifiche. Inoltre, un sito personalizzato è più flessibile e scalabile, permettendoti di adattarlo man mano che la tua attività cresce.',
    },
    {
      question: 'Quanto tempo ci vuole per sviluppare un sito web custom?',
      answer:
        "Il tempo necessario per sviluppare un sito web custom varia in base alla complessità del progetto. Un sito semplice può essere completato in poche settimane, mentre un progetto più complesso potrebbe richiedere alcuni mesi. Ti forniremo un cronoprogramma chiaro e realistico fin dall'inizio, così avrai sempre un’idea precisa delle tempistiche.",
    },
    {
      question:
        'Come viene gestito il supporto e la manutenzione del sito web?',
      answer:
        'Offriamo supporto e manutenzione continua per il tuo sito web. Possiamo includere il supporto nel contratto di sviluppo o offrirlo come servizio separato. Il nostro obiettivo è garantire che il tuo sito sia sempre aggiornato, sicuro e ottimizzato. Siamo qui per rispondere a qualsiasi tua domanda e risolvere eventuali problemi, così non sarai mai lasciato solo!',
    },

    {
      question: 'Qual è il costo dello sviluppo di un sito web custom?',
      answer:
        'Il costo per sviluppare un sito web custom può variare notevolmente in base a diversi fattori, come la complessità del progetto e le funzionalità richieste. In generale, i costi possono partire da alcune centinaia di euro e aumentare a seconda delle specifiche necessità. Lavoreremo con te per trovare la soluzione più adatta al tuo budget!',
    },
    {
      question: 'Il sito sarà ottimizzato per i dispositivi mobili?',
      answer:
        "Assolutamente sì! Tutti i nostri siti web sono progettati per essere responsivi, il che significa che si adattano perfettamente a qualsiasi dispositivo, dai desktop agli smartphone. Questo garantisce un'esperienza utente ottimale e migliora la tua visibilità sui motori di ricerca.",
    },
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-gray-900/10">
          <Heading
            as="h1"
            className="mt-2 max-w-3xl text-4xl font-bold text-gray-900"
          >
            Domande Frequenti
          </Heading>
          <p className="mt-4 text-lg text-gray-600">
            Hai qualche dubbio? Sei nel posto giusto! Qui rispondiamo alle
            domande più comuni per aiutarti a capire tutto al volo. Se non trovi
            quello che cerchi, siamo sempre pronti a darti una mano.
          </p>

          <hr className="mt-9" />

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Main Company component
export default function Website() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <Header />
        <Strenght />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
