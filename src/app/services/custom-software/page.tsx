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
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Button, Link } from '@nextui-org/react'

import type { Metadata } from 'next'

// Page metadata
export const metadata: Metadata = {
  // Titolo della pagina
  title: 'Software su misura per il tuo successo | Space Design Italia',

  // Descrizione della pagina
  description:
    'Scopri come i nostri software customizzati possono trasformare il tuo business. Soluzioni su misura per soddisfare ogni esigenza e garantire il massimo successo.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/services/custom-software', // Modifica in base alla struttura URL
  },

  // Open Graph per i social media
  openGraph: {
    title: 'Software su misura per il tuo successo | Space Design Italia',
    description:
      'Inizia il tuo percorso digitale con Space Design Italia. Offriamo soluzioni software personalizzate per ogni tipo di esigenza, progettate per ottimizzare il tuo business e migliorare la sicurezza e l’efficienza operativa.',
    url: 'https://www.spacedesign-italia.it/services/custom-software', // Assicurati di usare l'URL giusto per questa pagina
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignBanner.png', // Assicurati che l'immagine sia rappresentativa della pagina
        width: 1200,
        height: 630,
        alt: 'Software su misura per il tuo successo con Space Design Italia',
      },
    ],
  },
}

// Header component
function Header() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <Heading as="h1" className="mt-2 max-w-3xl">
                  Il tuo business è unico. Anche il tuo software.
                </Heading>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Ogni impresa ha esigenze specifiche, e il software
                  personalizzato è la chiave per trasformare queste esigenze in
                  soluzioni efficaci. Con un design su misura, potrai ottenere
                  prestazioni elevate, adattabilità e un'integrazione perfetta
                  con i tuoi processi.
                </p>

                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    color="primary"
                    radius="full"
                    size="lg"
                    href="/contact"
                    as={Link}
                  >
                    Trasforma la tua visione in realtà. Inizia ora!
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-red-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-red-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.tsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.tsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6 text-sm text-white">
                        <pre>
                          <code>
                            <span className="text-red-500">import</span>{' '}
                            <span className="text-blue-300">{'{ '}</span>
                            <span>useState</span>
                            <span className="text-blue-300">{' } '}</span>
                            <span className="text-red-500">from </span>
                            <span className="text-blue-300">'react'</span>
                          </code>
                          <br />
                          <code>
                            <span className="text-red-500">import</span>{' '}
                            <span className="text-blue-300">{'{ '}</span>
                            <span>Switch</span>
                            <span className="text-blue-300">{' } '}</span>
                            <span className="text-red-500">from </span>
                            <span className="text-blue-300">
                              '@nextui-org/react'
                            </span>
                          </code>
                          <br />
                          <br />
                          <code>
                            <span className="text-red-500">function</span>{' '}
                            <span className="text-purple-400">Example</span>
                            <span className="text-blue-300">()</span>
                            <span className="text-blue-300">{'{'}</span>
                          </code>
                          <br />
                          <code>
                            <span className="text-red-500">
                              &nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;
                            </span>
                            <span className="text-yellow-500">{'['}</span>
                            <span className="text-blue-400">enabled</span>,
                            <span className="text-purple-400"> setEnabled</span>
                            <span className="text-yellow-500">{']'}</span>
                            <span className="text-red-500"> = </span>
                            <span className="text-purple-400">useState</span>
                            <span className="text-yellow-500">{'('}</span>
                            <span className="text-blue-400">true</span>
                            <span className="text-yellow-500">{')'}</span>
                          </code>
                          <br />
                          <code>
                            <span className="text-red-500">
                              &nbsp;&nbsp;&nbsp;&nbsp;return
                            </span>
                            <span className="text-yellow-500">&nbsp;{'('}</span>
                          </code>
                          <br />
                          <code>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                            <span className="text-green-400">form</span>&nbsp;
                            <span className="text-purple-400">action</span>
                            <span className="text-red-500">=</span>
                            <span className="text-blue-400">
                              "/notification-settings"
                            </span>
                            &nbsp;
                            <span className="text-purple-400">method</span>
                            <span className="text-red-500">=</span>
                            <span className="text-blue-400">"post"</span>
                            &gt;
                          </code>
                          <br />
                          <code>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                            <span className="text-blue-400">Switch</span> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-purple-400">checked</span>
                            <span className="text-red-500">=</span>
                            <span className="text-purple-400">{'{'}</span>
                            <span className="text-blue-400">enabled</span>
                            <span className="text-purple-400">{'}'}</span>{' '}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-purple-400">onChange</span>
                            <span className="text-red-500">=</span>
                            <span className="text-purple-400">{'{'}</span>
                            <span className="text-blue-400">setEnabled</span>
                            <span className="text-purple-400">{'}'}</span>{' '}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-purple-400">name</span>
                            <span className="text-red-500">=</span>
                            <span className="text-blue-400">
                              "notifications"
                            </span>{' '}
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* dasd */}
                            <span className="text-purple-400">{'{'}</span>
                            <span className="text-gray-500">{'/*'}</span>
                            <span className="text-gray-500">{' ... '}</span>
                            <span className="text-gray-500">{'*/'}</span>
                            <span className="text-purple-400">{'}'}</span>{' '}
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &lt;
                            <span className="text-blue-400">/Switch</span>&gt;
                            <br />
                          </code>
                          <br />
                          <code>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                            <span className="text-blue-400">Button</span>
                            &gt;Salva&lt;
                            <span className="text-blue-400">/Button</span>&gt;
                          </code>
                          <br />
                          <code>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                            <span className="text-green-400">/form</span>&gt;
                          </code>
                          <br />
                          <code>&nbsp;&nbsp;&nbsp;&nbsp;);</code>
                          <br />
                          <code>{`}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}

function Strenght() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Heading as="h1" className="mt-2 max-w-3xl">
          Software su misura per il tuo successo
        </Heading>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Software Personalizzati
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  I software custom sono progettati su misura per soddisfare le
                  esigenze specifiche della tua azienda, garantendo una
                  soluzione perfetta per il tuo business.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Integrazione Semplice
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  I nostri software custom sono facilmente integrabili con la
                  maggior parte delle piattaforme esterne già esistenti,
                  consentendoti di ottimizzare i tuoi processi aziendali senza
                  interruzioni.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                {' '}
                <img
                  className="size-full object-cover object-top"
                  src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Sicurezza Avanzata
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Con i software custom, hai un controllo 1 a 1 sui dati del
                  programma, garantendo la massima sicurezza e protezione per le
                  informazioni aziendali sensibili.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
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

function FAQ() {
  const faqs = [
    {
      question: 'Quali sono i vantaggi dello sviluppo di software custom?',
      answer:
        'Sviluppare software custom offre una serie di vantaggi che possono trasformare la tua attività! Prima di tutto, avrai una soluzione perfettamente adattata alle tue esigenze specifiche. Niente più compromessi! Inoltre, il software su misura è altamente flessibile e scalabile, permettendoti di adattarti rapidamente ai cambiamenti del mercato. Questo significa che potrai implementare funzionalità uniche che non troverai mai in soluzioni standard. Infine, investire in un software custom può portare a una maggiore efficienza operativa e, a lungo termine, a risparmi significativi sui costi. In poche parole, avrai uno strumento potente e fatto su misura per te!',
    },
    {
      question: 'Quanto tempo ci vuole per sviluppare un software custom?',
      answer:
        "Il tempo necessario per sviluppare un software custom dipende dalla complessità del progetto. Se stai cercando una soluzione semplice, potremmo completarla in poche settimane. Ma se il tuo progetto è più complesso, potremmo impiegare alcuni mesi o persino anni per assicurarci di creare qualcosa di davvero eccezionale. Ci assicureremo di comunicarti un cronoprogramma realistico sin dall'inizio, in modo da avere sempre un'idea chiara dei tempi.",
    },
    {
      question:
        'Come viene gestito il supporto e la manutenzione del software?',
      answer:
        'Il supporto e la manutenzione del software sono fondamentali! Generalmente, possiamo includere il supporto nel contratto di sviluppo, oppure possiamo offrirlo come servizio separato. Il nostro obiettivo è assicurarci che il tuo software rimanga sempre aggiornato, sicuro e ottimizzato. E non preoccuparti, siamo sempre a tua disposizione per rispondere a domande e risolvere eventuali problemi. Con noi, non sarai mai lasciato solo!',
    },
    {
      question:
        'Quali tecnologie vengono utilizzate nello sviluppo di software custom?',
      answer:
        'Le tecnologie che utilizziamo dipendono strettamente dalle tue esigenze e dai requisiti specifici del progetto. La nostra priorità è selezionare gli strumenti giusti per offrirti la migliore esperienza possibile e garantire che il tuo software funzioni in modo fluido e scalabile.',
    },
    {
      question: 'Qual è il costo dello sviluppo di software custom?',
      answer:
        'Il costo dello sviluppo di software custom può variare in base a diversi fattori, come la complessità del progetto e le funzionalità richieste. In generale, i costi possono partire da alcune migliaia di euro e salire a decine di migliaia per progetti più complessi. Ma non preoccuparti, lavoreremo con te per trovare la soluzione più adatta al tuo budget!',
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
export default function CustomSoftware() {
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
