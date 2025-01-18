// Importing necessary components and types
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

import type { Metadata } from 'next'

// Page metadata
export const metadata: Metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'Supporto per Startup: Sviluppo Software su Misura',

  // Descrizione ottimizzata per SEO con focus sulle parole chiave principali
  description:
    'Aiutiamo le startup a trasformare le loro idee in realtà con applicazioni mobili intuitive e performanti. Scopri come possiamo supportarti con soluzioni su misura, sconti speciali e opzioni di pagamento flessibili per il tuo business.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/services/startup',
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Supporto per Startup: Sviluppo Software su Misura',
    description:
      'Sviluppa il tuo progetto con Space Design Italia. Offriamo soluzioni software personalizzate per startup, con sconti e opzioni di pagamento flessibili per soddisfare ogni esigenza aziendale.',
    url: 'https://www.spacedesign-italia.it/services/startup',
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignStartupBanner.png', // Assicurati che l'immagine sia rappresentativa della pagina
        width: 1200,
        height: 630,
        alt: 'Sviluppo software per startup con Space Design Italia',
      },
    ],
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title:
      'Supporto per Startup: Sviluppo Software su Misura | Space Design Italia',
    description:
      'Aiutiamo le startup a crescere con software personalizzati e soluzioni ottimizzate. Scopri come possiamo supportarti con sconti e opzioni flessibili per il tuo business.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignStartupBanner.png',
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'supporto startup',
    'sviluppo software per startup',
    'soluzioni su misura startup',
    'app personalizzate startup',
    'sconti per startup',
    'Space Design Italia',
    'software per startup',
    'sviluppo app mobile',
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
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <Heading
              as="h1"
              className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl md:text-8xl"
            >
              Sei una{' '}
              <span className="bg-gradient-to-br from-[#FF0000] to-[#B91372] bg-clip-text text-transparent">
                startup?
              </span>
            </Heading>
            <Heading as="h1">Trasforma la tua visione in realtà</Heading>

            <div className="mb-10 flex items-center justify-center">
              <p className="mt-4 w-full text-lg text-gray-700 dark:text-gray-300 md:w-1/2">
                Siamo qui per creare prodotti innovativi che guidano il successo
                della tua startup. Dal concept alla realizzazione, ti aiutiamo a
                costruire soluzioni uniche e scalabili.
              </p>
            </div>
          </>
        }
      >
        <img
          src={`/screenshots/app.png`}
          alt="app screen 1"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
        />
      </ContainerScroll>
    </div>
  )
}

function Discount() {
  const features = [
    {
      name: 'Sconto Progressivo in Base alla Spesa',
      description:
        'Sconto fino al 25% in base al pacchetto scelto. Investi in un pacchetto più completo per ottenere uno sconto maggiore.',
      icon: AccessTimeIcon, // Icona che rappresenta il tempo
    },
    {
      name: 'Pagamento Anticipato',
      description:
        'Ottieni uno sconto dal 10% al 15% pagando in anticipo per migliorare la liquidità e ridurre i rischi di credito.',
      icon: MonetizationOnIcon, // Icona che rappresenta il denaro
    },
    {
      name: 'Collaborazioni e Referral',
      description:
        'Porta nuovi clienti o crea alleanze strategiche per ottenere sconti sul futuro. Fino al 15% per ogni nuova referenza.',
      icon: AutoAwesomeIcon, // Icona che rappresenta la continuità e l'ottimizzazione
    },
    {
      name: 'Progetti a Lungo Periodo',
      description:
        'Per progetti che coinvolgono più fasi o un impegno pluriennale, offriamo sconti fino al 20%.',
      icon: GroupAddIcon, // Icona che rappresenta l'aggiunta di gruppi e referral
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary">Sconti esclusivi per startup</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Ottieni vantaggi esclusivi con i nostri sconti dedicati
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Scopri le diverse opportunità di risparmio per la tua startup. Che tu stia cercando di investire in un progetto a lungo termine o ottenere uno sconto con pagamenti anticipati, abbiamo l'offerta giusta per te.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-primary" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function DiscountDetails() {
  const discountFeatures = [
    {
      id: 1,
      name: 'Sconto in base alla spesa',
      description: 
        'Più investi nel tuo progetto, più risparmi! Ogni pacchetto che scegli ti premia con sconti sempre più vantaggiosi.',
      icon: AccessTimeIcon,
      details: [
        "💡 10% di sconto per pacchetti base (sito web semplice o MVP base) – inizia con il piede giusto.",
        "🚀 15% di sconto per pacchetti intermedi (sito web + MVP) – espandi il tuo progetto con maggiore funzionalità.",
        "🌟 20% di sconto per pacchetti completi con supporto post-lancio – completa il tuo percorso con il massimo supporto."
      ],
      extraText: "Questo modello premia le startup che scelgono di investire risorse maggiori, aumentando la redditività per il tuo progetto a lungo termine."
    },
    {
      id: 2,
      name: 'Sconto per partnership o referenze',
      description:
        'Aiutaci a far crescere la nostra community e ottieni vantaggi reciproci! Ogni nuova connessione che porti nella nostra rete ti permette di ottenere sconti extra.',
      icon: AccessTimeIcon,
      details: [
        "🔗 10% di sconto per ogni nuova startup che si iscrive grazie alla tua referenza – più ci sono, più risparmi.",
        "🤝 15% di sconto per alleanze strategiche con altre aziende nel nostro network – collaborare conviene!"
      ],
      extraText: "Crea una rete di clienti che cresce organicamente, generando opportunità per tutti."
    },
    {
      id: 3,
      name: 'Sconto per pagamento anticipato',
      description:
        'Crediamo in chi investe nel futuro del proprio progetto! Pagando in anticipo, non solo acceleri il tuo cammino, ma ottieni anche un risparmio significativo.',
      icon: AccessTimeIcon,
      details: [
        "💸 10%-15% di sconto per chi paga in anticipo – Investire oggi ti fa risparmiare domani."
      ],
      extraText: "Questo incentivo aiuta a ridurre il rischio di credito e migliorare la liquidità, permettendoti di concentrarti su ciò che conta davvero: far crescere la tua startup."
    },
    {
      id: 4,
      name: 'Sconto per startup emergenti',
      description:
        'Se la tua startup è giovane, siamo qui per darti una mano! Con il nostro incentivo, ti aiutiamo a superare le prime sfide e a decollare velocemente.',
      icon: AccessTimeIcon,
      details: [
        "🚀 15% di sconto per startup con meno di 2 anni di attività – Un aiuto concreto nelle fasi iniziali del tuo viaggio.",
        "🌱 20% di sconto per startup in fase di prototipo o MVP – Supporto massimo per far crescere la tua idea."
      ],
      extraText: "Offriamo un supporto concreto per le startup che stanno iniziando il loro viaggio, per aiutarle a decollare e crescere."
    }
  ]
  
  
  

  return (
    <div className="overflow-hidden py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg
          fill="none"
          width={404}
          height={784}
          viewBox="0 0 404 784"
          aria-hidden="true"
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
        >
          <defs>
            <pattern
              x={0}
              y={0}
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
            </pattern>
          </defs>
          <rect fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" width={404} height={784} />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scopri le Nostre Offerte di Sconto
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Offriamo diverse modalità di sconto pensate per supportare le startup in ogni fase del loro percorso.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{discountFeatures[0].name}</h3>
            <p className="mt-3 text-lg text-gray-500">
            {discountFeatures[0].description}
            </p>

            <dl className="mt-10 space-y-10">
              {discountFeatures[0].details.map((detail, index) => (
                <div key={index} className="relative">
                  <dt>
                    <p className="text-lg/6 font-medium text-gray-900">{detail}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div aria-hidden="true" className="relative -mx-4 mt-10 lg:mt-0">
            <svg
              fill="none"
              width={784}
              height={404}
              viewBox="0 0 784 404"
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                </pattern>
              </defs>
              <rect fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" width={784} height={404} />
            </svg>
            <img
              alt="Sconto progressivo"
              src="/boxes.png"
              width={490}
              className="relative mx-auto"
            />
          </div>
        </div>

        <svg
          fill="none"
          width={404}
          height={784}
          viewBox="0 0 404 784"
          aria-hidden="true"
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
        >
          <defs>
            <pattern
              x={0}
              y={0}
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
            </pattern>
          </defs>
          <rect fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" width={404} height={784} />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{discountFeatures[1].name}</h3>
              <p className="mt-3 text-lg text-gray-500">
              {discountFeatures[1].description}
              </p>

              <dl className="mt-10 space-y-10">
                {discountFeatures[1].details.map((detail, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <p className="text-lg/6 font-medium text-gray-900">{detail}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                fill="none"
                width={784}
                height={404}
                viewBox="0 0 784 404"
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                  </pattern>
                </defs>
                <rect fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" width={784} height={404} />
              </svg>
              <img
                alt="Partnership e Referenze"
                src="https://cdn-icons-png.flaticon.com/512/10112/10112547.png"
                width={490}
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>


        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{discountFeatures[2].name}</h3>
            <p className="mt-3 text-lg text-gray-500">
            {discountFeatures[2].description}
            </p>

            <dl className="mt-10 space-y-10">
              {discountFeatures[2].details.map((detail, index) => (
                <div key={index} className="relative">
                  <dt>
                    <p className="text-lg/6 font-medium text-gray-900">{detail}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div aria-hidden="true" className="relative -mx-4 mt-10 lg:mt-0">
            <svg
              fill="none"
              width={784}
              height={404}
              viewBox="0 0 784 404"
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                </pattern>
              </defs>
              <rect fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" width={784} height={404} />
            </svg>
            <img
              alt="Sconto progressivo"
              src="https://tailwindui.com/plus/img/features/feature-example-1.png"
              width={490}
              className="relative mx-auto"
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{discountFeatures[3].name}</h3>
              <p className="mt-3 text-lg text-gray-500">
              {discountFeatures[3].description}
              </p>

              <dl className="mt-10 space-y-10">
                {discountFeatures[3].details.map((detail, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <p className="text-lg/6 font-medium text-gray-900">{detail}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                fill="none"
                width={784}
                height={404}
                viewBox="0 0 784 404"
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                  </pattern>
                </defs>
                <rect fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" width={784} height={404} />
              </svg>
              <img
                alt="Partnership e Referenze"
                src="/startup.png"
                width={490}
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-16 text-center flex justify-center items-center w-full">
          <p className='text-sm text-gray-500 text-center w-full md:w-1/2'>
            *Gli sconti non sono cumulabili tra di loro. <br />
             Tuttavia, possono essere utilizzati per progetti e servizi successivi. <br />
             Contattaci per scoprire come combinare le nostre offerte in modo vantaggioso per il tuo progetto.
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'Quali criteri devo soddisfare per ottenere fino al 20% di sconto?',
      answer:
        'Le startup possono ottenere sconti basati su quattro criteri principali: sviluppo a lungo termine, pagamenti anticipati, collaborazione continua e referral. Maggiore è il numero di criteri soddisfatti, maggiori saranno le possibilità di ricevere uno sconto sul progetto.',
    },
    {
      question: 'Come funzionano i pagamenti anticipati per ottenere lo sconto?',
      answer:
        "Offriamo sconti più vantaggiosi alle startup che decidono di pagare in anticipo l'intero importo del progetto. Questo approccio ci consente di pianificare e ottimizzare le risorse in modo più efficiente, e in cambio, ti offriamo una significativa riduzione dei costi.",
    },
    {
      question: 'Come posso beneficiare del programma di referral?',
      answer:
        'Il nostro programma di referral è semplice: se ci presenti nuove startup o clienti che iniziano un progetto con noi, otterrai uno sconto aggiuntivo sui tuoi progetti futuri.',
    },
    {
      question: 'Quali sono i vantaggi di una collaborazione continua?',
      answer:
        'Le startup che continuano a sviluppare nuove funzionalità o richiedono manutenzione e aggiornamenti regolari beneficiano di sconti progressivi. Questa continuità ci consente di pianificare interventi in modo efficiente e ti assicura costi più contenuti nel lungo termine. Inoltre, manterrai il tuo software aggiornato e al passo con le nuove tecnologie.',
    },
    {
      question: 'Cosa include il pacchetto base?',
      answer:
        'Il pacchetto base include la creazione di un sito web semplice o di un MVP (Minimum Viable Product) che ti permette di avviare il tuo progetto con le funzionalità essenziali. Questo pacchetto è ideale per startup che vogliono testare rapidamente la loro idea e raccogliere feedback iniziali.',
    },
    {
      question: 'Come posso sapere quale pacchetto scegliere per la mia startup?',
      answer:
        'Scegli il pacchetto che meglio si adatta alle tue esigenze. Se stai appena iniziando e hai bisogno di un sito semplice o di un MVP, il pacchetto base è perfetto. Se desideri un prodotto più completo, con funzioni aggiuntive come l’integrazione di più sistemi o una base utenti più ampia, opta per il pacchetto intermedio o completo. Il nostro team è sempre disponibile per consigliarti sulla scelta migliore.',
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
export default function Startup() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <Header />
        <Discount />
        <DiscountDetails/>
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
