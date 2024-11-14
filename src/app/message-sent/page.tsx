// ContactForm.tsx
'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import WebRoundedIcon from '@mui/icons-material/WebRounded'

function MessageSentBody() {
  const links = [
    {
      name: 'Software Personalizzato',
      href: '/services/custom-software',
      description:
        'Sviluppiamo software su misura per rispondere alle specifiche esigenze della tua azienda, migliorando i processi e l’efficienza operativa.',
      icon: TerminalRoundedIcon,
    },
    {
      name: 'App Mobile',
      href: '/services/mobile-app',
      description:
        'Creiamo app mobile intuitive e performanti per Android e iOS, pensate per offrire una user experience fluida e coinvolgente.',
      icon: PhoneIphoneRoundedIcon,
    },
    {
      name: 'Siti Web',
      href: '/services/website',
      description:
        "Progettiamo e sviluppiamo siti web responsivi, moderni e ottimizzati per garantire un'esperienza utente eccellente su ogni dispositivo.",
      icon: WebRoundedIcon,
    },
    {
      name: 'Startup',
      href: '/services/startup',
      description:
        'Offriamo supporto e consulenza alle startup, con soluzioni innovative per crescere e emergere nel mercato competitivo di oggi.',
      icon: RocketLaunchRoundedIcon,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <div className="w-full">
        <img
          alt="Logo Space Design"
          src="/company/SpaceDesignLogoLong.png"
          className="mx-auto w-64"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Il tuo messaggio è stato inviato
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Grazie per averci contattato. Ti risponderemo appena possibile.
        </p>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">Pagine popolari</h2>
        <ul
          role="list"
          className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
        >
          {links.map((link, linkIdx) => (
            <li key={linkIdx} className="relative flex gap-x-6 py-6">
              <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                <link.icon aria-hidden="true" className="size-6 text-primary" />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  <a href={link.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {link.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm/6 text-gray-600">
                  {link.description}
                </p>
              </div>
              <div className="flex-none self-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm/6 font-semibold text-primary">
            <span aria-hidden="true">&larr;</span>
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MessageSent() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <MessageSentBody />
        <Footer />
      </main>
    </>
  )
}
