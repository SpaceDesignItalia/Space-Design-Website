import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded'
import CommitRoundedIcon from '@mui/icons-material/CommitRounded'
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded'
import LineStyleRoundedIcon from '@mui/icons-material/LineStyleRounded'

import { Button, Link } from '@nextui-org/react'

export const metadata = {
  // Titolo della pagina
  title:
    'Chi Siamo | Space Design Italia - Software su Misura per il Successo Digitale',

  // Descrizione della pagina
  description:
    'Scopri chi siamo, il nostro team di esperti e come Space Design Italia può aiutarti a trasformare la tua visione in soluzioni software straordinarie e personalizzate.',

  // URL canonico
  alternates: {
    canonical: 'https://www.spacedesign-italia.it/about', // Modifica questo URL in base alla struttura del tuo sito
  },

  // Open Graph per i social media
  openGraph: {
    title: 'Chi Siamo | Space Design Italia',
    description:
      'Space Design Italia è una software house che crea soluzioni software personalizzate, sviluppa applicazioni mobile, e costruisce siti web straordinari per il successo della tua azienda.',
    url: 'https://www.spacedesign-italia.it/about', // Assicurati di usare l'URL corretto per la pagina About
    type: 'website',
    images: [
      {
        url: '/og-links/SpaceDesignBanner.png', // Usa un'immagine rappresentativa per questa pagina
        width: 1200,
        height: 630,
        alt: 'Il nostro team di esperti di software',
      },
    ],
  },
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
            La nostra missione è fornire soluzioni personalizzate che non solo
            soddisfano le esigenze dei nostri clienti, ma li ispirano a superare
            i propri limiti.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Siamo appassionati di tecnologia e design, convinti che ogni
            progetto sia un'opportunità per trasformare il modo in cui i nostri
            clienti operano. Lavoriamo fianco a fianco con le aziende,
            trasformando le loro idee in realtà, per aiutarle a prosperare in un
            mondo digitale in continua evoluzione. La nostra crescita è il
            riflesso del successo dei nostri clienti, e il nostro obiettivo è
            fare della loro esperienza un viaggio indimenticabile.
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
                <FolderCopyRoundedIcon className="text-6xl" />
                <AnimatedNumber start={0} end={20} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Linee di codice scritte
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <LineStyleRoundedIcon className="text-6xl" />
                <AnimatedNumber start={0} end={1.5} decimals={1} />
                Mln +
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">
                Commit nelle repository
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <CommitRoundedIcon className="text-6xl" />
                <AnimatedNumber start={0} end={30} />K +
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">
                Tazzine di caffè bevute
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <CoffeeRoundedIcon className="text-6xl" />
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
        Space Design è il risultato dell'energia e della creatività di quattro
        giovani talenti appassionati di tecnologia e sviluppo software.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Qualche anno fa, un gruppo di visionari si è trovato a condividere
            un sogno: creare un mondo digitale in cui ogni impresa potesse
            esprimere la propria unicità. Così è nata Space Design, un'idea
            frutto di passione e determinazione. Quattro giovani talenti,
            provenienti da esperienze diverse nel settore tecnologico, si resero
            conto di quanto fosse complicato trovare un partner che non fosse
            solo un fornitore, ma un vero e proprio alleato nel viaggio verso
            l'innovazione. Sospinti dalla loro ambizione, decisero di unire le
            forze per costruire un'azienda che mettesse al centro i sogni dei
            propri clienti, offrendo soluzioni digitali su misura e
            all’avanguardia.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Oggi, Space Design si distingue per la sua capacità di fornire
            software personalizzati, applicazioni mobili e siti web innovativi.
            La nostra missione è quella di trasformare le idee dei clienti in
            realtà tangibili, grazie a un approccio collaborativo e senza
            burocrazia. Siamo un team unito e appassionato, impegnato a innovare
            e a rispondere alle sfide del mercato, rendendo la tecnologia
            accessibile e intuitiva per tutti.
          </p>
          <div className="mt-6">
            <Button color="primary" radius="full" href="/contact" as={Link}>
              Contattaci ora!
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div /* className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10" */
          >
            <img
              alt="Team Space Design"
              src="/company/SpaceDesignLogoLong.png"
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
