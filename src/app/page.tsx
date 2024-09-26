import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import Loader from '@/components/loader'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import TerminalIcon from '@mui/icons-material/Terminal'
import WebIcon from '@mui/icons-material/Web'
import { Button } from '@nextui-org/react'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />

      <Container className="relative">
        <Navbar
          banner={
            <>
              <span className="font-extrabold">Startup?</span> Sconti fino al{' '}
              <span className="underline">20%</span> per il tuo prodotto
              seguendo le nostre linee guida!{' '}
              <span className="font-bold underline">Scopri di più!</span>
            </>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl md:text-8xl">
            Trasforma le tue idee in soluzioni{' '}
            <span className="bg-gradient-to-br from-[#FF0000] to-[#B91372] bg-clip-text text-transparent">
              software{' '}
            </span>
            straordinarie
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Creiamo software che trasforma l'ordinario in straordinario,
            ispirati dalle meraviglie dello spazio.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button color="primary" radius="full" size="lg">
              Inizia il tuo viaggio con noi!
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const features = [
    {
      name: 'Sviluppo di software personalizzati.',
      description:
        'Creiamo soluzioni software su misura per le tue esigenze, garantendo prestazioni elevate e una user experience ottimale.',
      icon: TerminalIcon,
    },
    {
      name: 'Sviluppo di applicazioni mobile.',
      description:
        "Sviluppiamo app mobile intuitive e performanti, che catturano l'attenzione degli utenti e facilitano l'interazione con il tuo brand.",
      icon: PhoneIphoneIcon,
    },
    {
      name: 'Sviluppo di siti web personalizzati.',
      description:
        'Realizziamo siti web su misura, esteticamente gradevoli e facili da navigare, ottimizzati per ogni dispositivo e per il SEO.',
      icon: WebIcon,
    },
  ]

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Subheading>Il tuo futuro inizia qui</Subheading>
              <Heading as="h2" className="mt-2 max-w-3xl">
                Un partner per ogni passo del tuo progetto
              </Heading>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Non siamo solo una software house; siamo il tuo alleato nel
                viaggio verso il successo digitale. Offriamo soluzioni su misura
                e supporto continuo, per trasformare le tue idee in realtà con
                semplicità e rapidità.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Screenshot del prodotto"
            src="/screenshots/app.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Raggiungi le Stelle</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Software intuitivi e integrati, sempre online, ovunque tu sia.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="User-friendly"
          title="Esperienza chiara e intuitiva"
          description="I nostri software sono progettati per offrire un'esperienza utente semplice e intuitiva, permettendoti di concentrarti su ciò che conta davvero senza complicazioni."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />

        <BentoCard
          eyebrow="Eccellenza"
          title="Competenza, Precisione e Tecnologie all'avanguardia"
          description="Combiniamo la nostra esperienza e competenza con le migliori tecnologie disponibili, garantendo soluzioni affidabili e precise che elevano il tuo business."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />

        <BentoCard
          eyebrow="Su Misura"
          title="Progettato sulle tue necessità"
          description="Ogni soluzione che realizziamo è creata su misura per le tue esigenze aziendali uniche, garantendo una perfetta integrazione con i tuoi obiettivi e flussi di lavoro."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'T']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />

        <BentoCard
          eyebrow="API"
          title="Massima integrazione"
          description="Tutti i nostri software sono progettati per integrarsi perfettamente con una vasta gamma di API di altri software, garantendo un ecosistema versatile e connesso."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />

        <BentoCard
          eyebrow="Limitless"
          title="Accessibile ovunque"
          description="Grazie alle tecnologie cloud e ibride, i nostri software sono sempre accessibili da ogni angolo del mondo, permettendoti di lavorare senza limiti geografici."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mb-10 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Il Nostro Approccio Client-Centric</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          La comunicazione con i clienti è più semplice che mai.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Incontro e Collaborazione"
            title="Collaboriamo per il tuo successo"
            description="Iniziamo ascoltando le tue esigenze. Attraverso uno studio di fattibilità approfondito, il nostro team analizza il tuo progetto per garantirti risultati ottimali."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Semplicità"
            title="Gestisci il tuo progetto in un batter d'occhio!"
            description="Grazie alla nostra piattaforma proprietaria, gestire il tuo progetto sarà un gioco da ragazzi! Dì addio al caos delle mille piattaforme e fai tutto con pochi clic. Più tempo per te, meno tempo per la burocrazia!"
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Comunicazione Semplificata"
            title="Facilità di comunicazione"
            description="Con noi, la comunicazione sui progetti è semplice e veloce! Dimentica la burocrazia: puoi apportare modifiche e ricevere aggiornamenti in un batter d'occhio."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Partnership"
            title="Il tuo alleato per il successo"
            description="Non ci limitiamo a sviluppare il tuo software: diventiamo i tuoi compagni di viaggio! Offriamo supporto continuo e mantenimento, garantendo che la tua soluzione cresca e si adatti alle tue esigenze nel tempo."
            graphic={
              <div className="h-80 bg-[url(/screenshots/support.png)] bg-[size:851px_344px] bg-no-repeat object-cover object-left" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Loader />
      <div className="overflow-hidden">
        <Hero />
        <main>
          {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
          <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
            <FeatureSection />
            <BentoSection />
          </div>
          <DarkBentoSection />
        </main>
        {/*  <Testimonials /> */}
        <Footer />
      </div>
    </>
  )
}
