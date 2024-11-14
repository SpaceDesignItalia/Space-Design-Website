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
import { Button, Link } from '@nextui-org/react'

import type { Metadata } from 'next'

// Page metadata
export const metadata: Metadata = {
  // Titolo della pagina
  title:
    'Supporto per Startup: Sviluppo Software su Misura | Space Design Italia',

  // Descrizione della pagina
  description:
    'Aiutiamo le startup a trasformare le loro idee in realtà con applicazioni mobili intuitive e performanti. Scopri come possiamo supportarti con sconti e soluzioni su misura per il tuo business.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/services/startup', // Modifica in base alla struttura URL
  },

  // Open Graph per i social media
  openGraph: {
    title:
      'Supporto per Startup: Sviluppo Software su Misura | Space Design Italia',
    description:
      'Sviluppa il tuo progetto con Space Design Italia. Offriamo soluzioni personalizzate per startup, con sconti e opzioni di pagamento flessibili per soddisfare ogni esigenza.',
    url: 'https://www.spacedesign-italia.it/services/startup', // Assicurati di usare l'URL giusto per questa pagina
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
              <p className="mt-4 w-1/2 text-lg text-gray-700 dark:text-gray-300">
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
          alt="hero"
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
      name: 'Progetti a lungo termine',
      description:
        'Ricevi fino al 20% di sconto per progetti che prevedono più fasi di sviluppo o un impegno pluriennale.',
      icon: AccessTimeIcon, // Icona che rappresenta il tempo
    },
    {
      name: 'Pagamenti anticipati',
      description: 'Ottieni uno sconto con pagamenti anticipati.',
      icon: MonetizationOnIcon, // Icona che rappresenta il denaro
    },
    {
      name: 'Collaborazione continua',
      description:
        'Start-up che scelgono di continuare a sviluppare nuove funzionalità o richiedono manutenzione ottengono sconti.',
      icon: AutoAwesomeIcon, // Icona che rappresenta la continuità e l'ottimizzazione
    },
    {
      name: 'Referral',
      description:
        'Portaci nuovi clienti e startup per ottenere sconti su progetti futuri.',
      icon: GroupAddIcon, // Icona che rappresenta l'aggiunta di gruppi e referral
    },
  ]

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Subheading>Ottieni fino al 20% di sconto</Subheading>
            <Heading as="h2" className="mt-2 max-w-3xl">
              Sviluppa il tuo progetto su misura con noi
            </Heading>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Siamo qui per supportare la crescita della tua startup! Grazie
              alla nostra esperienza nello sviluppo di software personalizzati,
              offriamo la possibilità di ottenere sconti fino al 20% sui nostri
              progetti, in base a diversi criteri di collaborazione.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white pb-32 pt-16">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Come ottenere lo sconto
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Le startup hanno l'opportunità di beneficiare di sconti
                    personalizzati e progressivi basati su criteri specifici che
                    favoriscono la crescita e la collaborazione a lungo termine.
                    Ecco come puoi ottenere fino al 20% di sconto sui nostri
                    progetti:
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <ul className="mt-6 space-y-4 text-justify text-lg leading-8 text-gray-600">
                  <li>
                    <strong>Sviluppo a lungo termine:</strong> Progetti che si
                    sviluppano in più fasi o prevedono un impegno pluriennale
                    possono ottenere sconti fino al 20%. Collaborare su roadmap
                    di prodotto che evolvono nel tempo ci consente di
                    pianificare in modo più efficiente e offrire un risparmio
                    significativo.
                  </li>
                  <li>
                    <strong>Pagamenti anticipati:</strong> Le startup che
                    scelgono di effettuare pagamenti anticipati possono
                    beneficiare di sconti fino al 15%.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  src="/screenshots/app2.png"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div>
                <div className="mt-6">
                  <ul className="mt-6 space-y-4 text-justify text-lg leading-8 text-gray-600">
                    <li>
                      <strong>Collaborazione continua:</strong> Startup che ci
                      affidano lo sviluppo di nuove funzionalità o la
                      manutenzione continua del software possono accedere a
                      sconti. Questo approccio garantisce che il tuo progetto
                      resti allineato alle esigenze di mercato, migliorando
                      costantemente e beneficiando di un prezzo agevolato.
                    </li>
                    <li>
                      <strong>Referral:</strong> Presentaci nuove startup o
                      clienti interessati ai nostri servizi e otterrai sconti
                      aggiuntivi su progetti futuri per ogni collaborazione che
                      si concretizza. Questo programma premia la tua fiducia e
                      il tuo networking, creando una sinergia vantaggiosa per
                      tutti.
                    </li>
                  </ul>

                  <p className="mt-8 text-justify text-lg text-gray-600">
                    Vuoi saperne di più? Contattaci per una consulenza
                    personalizzata e scopri come possiamo supportare la tua
                    startup nello sviluppo di software su misura, offrendoti le
                    migliori soluzioni al prezzo giusto.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Button
                      color="primary"
                      radius="full"
                      size="lg"
                      href="/contact"
                      as={Link}
                    >
                      Contattaci
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Customer profile user interface"
                  src="/screenshots/app3.png"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function FAQ() {
  const faqs = [
    {
      question:
        'Quali criteri devo soddisfare per ottenere fino al 20% di sconto?',
      answer:
        'Le startup possono ottenere sconti basati su quattro criteri principali: sviluppo a lungo termine, pagamenti anticipati, collaborazione continua e referral. Maggiore è il numero di criteri soddisfatti, maggiori saranno le possibilità di ricevere uno sconto sul progetto.',
    },
    {
      question:
        'Come funzionano i pagamenti anticipati per ottenere lo sconto?',
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
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
