// Importing necessary components and types
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { ArrowsPointingInIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Button, Link } from '@heroui/react'

import type { Metadata } from 'next'

// Page metadata
export const metadata: Metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'App Personalizzate per il Tuo Business',

  // Descrizione ottimizzata per SEO con focus sulle parole chiave principali
  description:
    'Sviluppa soluzioni app personalizzate per il tuo business. Offriamo software su misura, integrato con le tue piattaforme, sicuro e con pieno controllo del codice per garantire il massimo controllo operativo.',

  // Canonical URL per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/services/mobile-app',
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'App Personalizzate per il Tuo Business',
    description:
      "Sviluppa app su misura per ottimizzare il tuo business. Le nostre soluzioni software personalizzate sono sicure, facili da integrare e ti offrono il pieno controllo del codice, migliorando l'efficienza e la sicurezza operativa.",
    url: 'https://www.spacedesign-italia.it/services/mobile-app',
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignAppBanner.png', // Assicurati che l'immagine sia rappresentativa della pagina
        width: 1200,
        height: 630,
        alt: 'App personalizzate per il business con Space Design Italia',
      },
    ],
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'App Personalizzate per il Tuo Business | Space Design Italia',
    description:
      'Crea soluzioni app personalizzate per il tuo business con Space Design Italia. Le nostre app sono sicure, facili da integrare e ti offrono pieno controllo del codice per ottimizzare il tuo business.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignAppBanner.png',
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'app personalizzate',
    'sviluppo app',
    'app su misura',
    'software per il business',
    'soluzioni software aziendali',
    'integrazione piattaforme',
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
    <div>
      <div className="lg:py-30 mx-auto max-w-7xl pb-16 pt-20 sm:pb-20 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <Heading as="h1" className="mt-2 max-w-3xl">
                App personalizzate per trasformare il tuo business
              </Heading>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ogni azienda ha necessità particolari, e lo sviluppo di app
                personalizzate è la soluzione per trasformare queste esigenze in
                risultati concreti. Grazie a un design su misura, le nostre app
                offrono prestazioni elevate, flessibilità e un'integrazione
                impeccabile con i tuoi processi aziendali, permettendoti di
                massimizzare l'efficienza e raggiungere i tuoi obiettivi
                strategici.
              </p>

              <div className="mb-10 mt-10 flex items-center justify-center md:justify-start">
                <Button
                  color="primary"
                  radius="full"
                  size="lg"
                  href="/contact"
                  as={Link}
                >
                  Scopri di Più
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="mt-8 md:mt-12 lg:flex-shrink-0 lg:flex-grow">
            <svg
              role="img"
              viewBox="0 0 366 729"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <img
                  className="m-0 size-full object-cover object-top p-0"
                  src="/screenshots/app4.png"
                  alt="Mockup app progetto"
                />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  )
}

function Strenght() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col gap-y-4 overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Soluzioni App Personalizzate
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sviluppiamo app su misura progettate per adattarsi
                  perfettamente ai tuoi processi aziendali. La personalizzazione
                  consente di ottenere una maggiore efficienza e flessibilità,
                  integrando il software direttamente nelle tue operazioni
                  quotidiane.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="m-0 size-full object-cover object-top p-0"
                    src="/screenshots/app5.png"
                    alt="Mockup 2 app"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="flex h-full flex-col justify-center px-8 py-12 sm:px-10">
                <div className="mb-6 flex items-center gap-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
                    <ArrowsPointingInIcon
                      className="h-7 w-7 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xl font-medium tracking-tight text-gray-950 max-lg:text-center lg:text-left">
                    Integrazione Semplice
                  </p>
                </div>
                <p className="max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                  I nostri software custom sono facilmente integrabili con la
                  maggior parte delle piattaforme esterne già esistenti,
                  consentendoti di ottimizzare i tuoi processi aziendali senza
                  interruzioni.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="flex h-full flex-col justify-center px-8 py-12 sm:px-10">
                <div className="mb-6 flex items-center gap-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <LockClosedIcon
                      className="h-7 w-7 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xl font-medium tracking-tight text-gray-950 max-lg:text-center lg:text-left">
                    Sicurezza Avanzata
                  </p>
                </div>
                <p className="max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                  Con i software custom, hai un controllo 1 a 1 sui dati del
                  programma, garantendo la massima sicurezza e protezione per le
                  informazioni aziendali sensibili.
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Proprietà del Codice
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  La cosa più importante è che il cliente è il proprietario del
                  codice, garantendo libertà e flessibilità per apportare
                  modifiche e aggiornamenti futuri senza vincoli.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationAPI.js
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        index.js
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 text-sm text-white">
                    <pre>
                      <code>
                        <span className="text-red-500">const</span>{' '}
                        <span className="text-purple-400">express</span>{' '}
                        <span className="text-red-500">=</span>{' '}
                        <span className="text-purple-400">require</span>
                        <span className="text-blue-300">{' ('}</span>
                        <span className="text-blue-300">'express'</span>
                        <span className="text-blue-300">{') '}</span>
                      </code>
                      <br />
                      <code>
                        <span className="text-red-500">const</span>{' '}
                        <span className="text-blue-300">app</span>{' '}
                        <span className="text-red-500">=</span>{' '}
                        <span className="text-purple-400">express</span>
                        <span className="text-blue-300">{'('}</span>
                        <span className="text-blue-300">{')'}</span>
                      </code>
                      <br />
                      <br />
                      <code>
                        <span className="text-blue-300">app</span>.
                        <span className="text-purple-400">use</span>
                        <span className="text-blue-300">{'('}</span>
                        <span className="text-purple-400">express</span>.
                        <span className="text-purple-400">json</span>
                        <span className="text-yellow-500">{'('}</span>
                        <span className="text-yellow-500">{')'}</span>
                        <span className="text-blue-300">{')'}</span>
                      </code>
                      <br />
                      <br />
                      <code>
                        <span className="text-blue-300">app</span>.
                        <span className="text-purple-400">post</span>
                        <span className="text-blue-300">{'('}</span>
                        <span className="text-blue-300">
                          '/notification-settings'
                        </span>
                        , <span className="text-yellow-500">{'('}</span>
                        <span className="text-yellow-500">req</span>,
                        <span className="text-yellow-500">res</span>
                        <span className="text-yellow-500">{')'}</span>{' '}
                        <span className="text-red-500">{'=>'}</span>{' '}
                        <span className="text-yellow-500">{'{'}</span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-red-500">const</span>{' '}
                        <span className="text-purple-400">{'{'}</span>{' '}
                        <span className="text-blue-300">
                          notificationsEnabled
                        </span>{' '}
                        <span className="text-purple-400">{'}'}</span>{' '}
                        <span className="text-red-500">=</span>{' '}
                        <span className="text-yellow-500">req</span>.body;
                        <br />
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-red-500">if</span>{' '}
                        <span className="text-purple-400">{'('}</span>{' '}
                        <span className="text-blue-300">
                          notificationsEnabled
                        </span>{' '}
                        <span className="text-red-500">!==</span>{' '}
                        <span className="text-blue-300">undefined</span>
                        <span className="text-purple-400">{')'}</span>{' '}
                        <span className="text-purple-400">{'{'}</span> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-blue-300">console</span>.
                        <span className="text-purple-400">log</span>
                        <span className="text-blue-300">
                          {"('Impostazioni notifica aggiornate:'"}
                        </span>
                        ,{' '}
                        <span className="text-blue-500">
                          notificationsEnabled
                        </span>
                        <span className="text-blue-300">{')'}</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-yellow-500">res</span>.
                        <span className="text-purple-400">status</span>
                        <span className="text-blue-300">(200)</span>.
                        <span className="text-purple-400">json</span>
                        <span className="text-blue-300">{'('}</span>
                        <span className="text-yellow-500">{'{'}</span>
                        {' message: '}
                        <span className="text-blue-300">
                          {"'Impostazioni notifica salvate con successo!'"}
                        </span>
                        <span className="text-yellow-500">{'}'}</span>
                        <span className="text-blue-300">{')'}</span>;
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">{'}'}</span>{' '}
                        <span className="text-red-500">else</span>{' '}
                        <span className="text-purple-400">{'{'}</span> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-yellow-500">res</span>.
                        <span className="text-purple-400">status</span>
                        <span className="text-blue-300">(400)</span>.
                        <span className="text-purple-400">json</span>
                        <span className="text-blue-300">{'('}</span>
                        <span className="text-yellow-500">{'{'}</span>
                        {' error: '}
                        <span className="text-blue-300">
                          {"'Impostazioni non valide!' "}
                        </span>
                        <span className="text-yellow-500">{'}'}</span>
                        <span className="text-blue-300">{')'}</span>;
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">{'}'}</span>
                        <br />
                        <span className="text-yellow-500">{'}'}</span>
                        <span className="text-blue-300">{')'}</span>;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileAppFeatures() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="mt-2 max-w-3xl">
            Soluzioni Mobile per Ogni Esigenza
          </Heading>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sviluppiamo app mobili che trasformano le tue idee in soluzioni
            concrete, offrendo un'esperienza utente impeccabile e funzionalità
            avanzate per ogni esigenza del tuo business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-950">
              App Native
            </h3>
            <p className="mt-4 text-base/7 text-gray-600">
              Sviluppiamo app native per iOS e Android, sfruttando al massimo le
              caratteristiche specifiche di ogni piattaforma per garantire
              prestazioni ottimali e massima sicurezza.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-950">
              App Cross-Platform
            </h3>
            <p className="mt-4 text-base/7 text-gray-600">
              Le nostre soluzioni cross-platform ti permettono di raggiungere
              tutti i dispositivi con un'unica codebase, riducendo tempi e costi
              di sviluppo senza sacrificare qualità e prestazioni.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-950">
              Integrazione Backend
            </h3>
            <p className="mt-4 text-base/7 text-gray-600">
              Realizziamo infrastrutture backend robuste e scalabili che si
              integrano perfettamente con le tue app mobile, garantendo
              sincronizzazione dati e funzionalità avanzate in tempo reale.
            </p>
          </div>
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-gray-950">
              UX/UI Innovative
            </h3>
            <p className="mt-4 text-base/7 text-gray-600">
              Design moderno e intuitivo che migliora l'esperienza utente.
              Creiamo interfacce accattivanti e funzionali che rendono
              l'interazione con la tua app fluida e piacevole.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'Quali sono i vantaggi dello sviluppo di app personalizzate?',
      answer:
        "Le app personalizzate offrono numerosi vantaggi: sono progettate su misura per le esigenze specifiche della tua azienda, garantendo un'integrazione perfetta con i tuoi processi. Inoltre, sono altamente scalabili, consentendo di adattarsi facilmente alle future evoluzioni del business. Grazie a funzionalità uniche e ottimizzate, potrai migliorare l'efficienza operativa e creare esperienze utente superiori rispetto alle soluzioni preconfezionate.",
    },
    {
      question: "Quanto tempo ci vuole per sviluppare un'app personalizzata?",
      answer:
        "Il tempo di sviluppo varia in base alla complessità dell'app. Progetti semplici possono richiedere poche settimane, mentre soluzioni più complesse possono richiedere diversi mesi. Forniamo un piano di sviluppo chiaro e dettagliato fin dall'inizio per garantire trasparenza sui tempi e le scadenze.",
    },
    {
      question: 'Che tipo di supporto viene offerto per le app personalizzate?',
      answer:
        "Offriamo un servizio completo di supporto e manutenzione, garantendo che l'app sia sempre aggiornata, sicura e funzionante al meglio. Il supporto può essere incluso nel contratto di sviluppo o offerto come servizio separato, in base alle tue esigenze. Siamo sempre a disposizione per risolvere problemi e implementare miglioramenti.",
    },
    {
      question: "Qual è il costo per sviluppare un'app personalizzata?",
      answer:
        'Il costo varia in base alla complessità, alle funzionalità richieste e al livello di personalizzazione. I progetti più semplici possono partire da alcune migliaia di euro, mentre quelli più avanzati, con funzionalità complesse, possono raggiungere decine di migliaia. Siamo comunque in grado di creare soluzioni che si adattano al tuo budget, assicurando un ottimo rapporto qualità-prezzo.',
    },
    {
      question:
        'Posso aggiornare o modificare la mia app dopo lo sviluppo iniziale?',
      answer:
        'Assolutamente sì! Una delle principali caratteristiche delle app personalizzate è la loro flessibilità. Potrai richiedere aggiornamenti, modifiche e nuove funzionalità in qualsiasi momento, assicurandoti che la tua app cresca e si evolva insieme alla tua azienda.',
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
                        className="h-6 w-6 transition-opacity duration-150 ease-in-out group-data-[open]:opacity-0"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="absolute h-6 w-6 opacity-0 transition-opacity duration-150 ease-in-out group-data-[open]:opacity-100"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform -translate-y-2 opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition duration-200 ease-out"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform -translate-y-2 opacity-0"
                >
                  <DisclosurePanel
                    as="dd"
                    className="mt-2 overflow-hidden pr-12"
                  >
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Transition>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Main Company component
export default function CustomApp() {
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
        <MobileAppFeatures />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
