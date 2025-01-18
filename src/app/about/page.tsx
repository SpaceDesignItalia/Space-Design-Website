import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

import { Button, Link } from "@heroui/react"

export const metadata = {
  // Titolo SEO ottimizzato con parole chiave
  title: 'Chi Siamo',

  // Descrizione ottimizzata per SEO con focus sulle parole chiave principali
  description:
    'Conosci il nostro team di esperti e scopri come Space Design Italia trasforma la tua visione in soluzioni software personalizzate, applicazioni mobile e siti web straordinari per il successo del tuo business digitale.',

  // URL canonico per evitare contenuti duplicati
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/about', // Assicurati che l'URL sia corretto
  },

  // Open Graph per migliorare la visibilità su Facebook, LinkedIn, ecc.
  openGraph: {
    title: 'Chi Siamo',
    description:
      'Scopri chi siamo e come Space Design Italia può aiutarti a raggiungere il successo digitale. Creiamo software personalizzati, sviluppiamo app mobile e progettiamo siti web innovativi per il tuo business.',
    url: 'https://www.spacedesign-italia.it/about', // Assicurati che l'URL sia quello giusto per questa pagina
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignBanner.png', // Assicurati che l'immagine sia corretta per la pagina "Chi Siamo"
        width: 1200,
        height: 630,
        alt: 'Il nostro team di esperti di software',
      },
    ],
  },

  // Twitter Card per una migliore anteprima su Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Siamo |',
    description:
      'Scopri come Space Design Italia trasforma le idee in soluzioni software personalizzate e come il nostro team può aiutarti a crescere nel mondo digitale.',
    images: [
      'https://www.spacedesign-italia.it/og-links/SpaceDesignBanner.png', // Assicurati che il link dell'immagine sia corretto
    ],
  },

  // Meta tag aggiuntivi per migliorare la SEO
  metadataBase: new URL('https://www.spacedesign-italia.it/'),
  keywords: [
    'chi siamo',
    'software su misura',
    'team di esperti',
    'sviluppo software',
    'app mobile',
    'siti web personalizzati',
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
      url: 'https://www.spacedesign-italia.it', // Assicurati che il link al team sia corretto
    },
  ],
}

function CompanyMission() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Creare soluzioni straordinarie.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Siamo in missione per rivoluzionare il modo in cui le aziende
        interagiscono con la tecnologia.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            La nostra missione
          </h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            In Space Design, ci dedichiamo a creare software innovativi e
            esteticamente piacevoli che portano vera innovazione nelle aziende.
            La nostra missione è progettare soluzioni uniche e su misura, capaci
            di soddisfare le esigenze specifiche dei nostri clienti e, allo
            stesso tempo, ispirarli a superare ogni limite, dando forma a nuove
            possibilità.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Con una profonda passione per la tecnologia e il design, crediamo
            che ogni progetto rappresenti un'opportunità unica per ridefinire il
            modo in cui le aziende operano. Collaboriamo a stretto contatto con
            i nostri clienti, trasformando le loro idee in soluzioni concrete,
            affinché possano prosperare in un mondo digitale in continua
            evoluzione. La nostra crescita è il risultato diretto del successo
            dei nostri clienti, e il nostro obiettivo è rendere ogni esperienza
            un viaggio straordinario.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Andrea Braia"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Francesco Roviello"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Marco Macherelli"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Pablo Bertot"
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>I Numeri</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Progetti Realizzati</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={20} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Linee di codice scritte
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={1.5} decimals={1} />
                Mln +
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">
                Commit nelle repository
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={30} />K +
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">
                Tazzine di caffè bevute
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={20} />K +
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function CompanyStory() {
  return (
    <Container className="mb-32 mt-32">
      <Subheading>Incontra il Team</Subheading>
      <Heading as="h3" className="mt-2">
        Fondata da una squadra di visionari.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Tecnologia per tutti, passione e innovazione al servizio di persone e aziende
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Space Design Italia nasce dalla visione di quattro giovani appassionati di innovazione tecnologica, 
            uniti dal desiderio di rendere la tecnologia accessibile, intuitiva e comprensibile per tutti. 
            Animati da una curiosità inesauribile e dalla voglia di esplorare le potenzialità del futuro, 
            hanno creato un’azienda che non si limita a sviluppare soluzioni tecnologiche, ma che mira a trasformare 
            il rapporto con la tecnologia in un’esperienza semplice e stimolante.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Oltre a soddisfare i bisogni degli utenti finali, Space Design Italia si distingue per la capacità di rispondere alle 
            esigenze specifiche delle aziende, offrendo soluzioni personalizzate che combinano design all’avanguardia, innovazione e funzionalità. 
            La loro passione per l’innovazione è il motore che alimenta ogni progetto, spingendoli a cercare costantemente nuove idee 
            per migliorare il quotidiano e ottimizzare i processi aziendali.
            Space Design Italia non è solo un’azienda, ma un laboratorio di idee dove la creatività incontra la tecnologia per creare 
            valore e connessione. Per loro, innovare significa rendere il futuro più vicino, più inclusivo e più semplice da vivere.
          </p>
          <div className="mt-6">
            <Button color="primary" radius="full" href="/contact" as={Link}>
              Contattaci ora!
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Team Space Design"
              src="/company/FoundersTeam.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <CompanyMission />
        <CompanyStory />
        <Footer />
      </main>
    </>
  )
}
