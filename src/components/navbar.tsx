'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars2Icon } from '@heroicons/react/24/solid'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import WebRoundedIcon from '@mui/icons-material/WebRounded'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

interface Link {
  href: string
  label: string
  services?: SublinkItem[] | null
}
interface SublinkItem {
  href: string
  icon: React.FC
  label: string
}

const links: Link[] = [
  { href: '/', label: 'Home' },
  {
    href: '',
    label: 'Servizi',
    services: [
      {
        href: '/services/custom-software',
        icon: TerminalRoundedIcon,
        label: 'Software personalizzato',
      },
      {
        href: '/services/mobile-app',
        icon: PhoneIphoneRoundedIcon,
        label: 'App mobile',
      },
      {
        href: '/services/website',
        icon: WebRoundedIcon,
        label: 'Siti web',
      },
      {
        href: '/services/startup',
        icon: RocketLaunchRoundedIcon,
        label: 'Startup',
      },
    ],
  },
  { href: '/company', label: 'Azienda' },
  { href: '/contact', label: 'Contattaci' },
  { href: '/login', label: 'Login' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map((link: Link) =>
        link.services?.length == 0 || link.services?.length == undefined ? (
          <PlusGridItem key={link.href} className="relative flex">
            <Link
              href={link.href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
            >
              {link.label}
            </Link>
          </PlusGridItem>
        ) : (
          <>
            <Dropdown
              as="div"
              classNames={{
                content: 'backdrop-blur-xl bg-white/40 border-3-black',
              }}
            >
              <DropdownTrigger className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%]">
                <button>
                  {link.label}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-950"
                  />
                </button>
              </DropdownTrigger>

              <DropdownMenu variant="light" color="primary">
                {link.services?.map((link: SublinkItem) => {
                  return (
                    <DropdownItem startContent={<link.icon />}>
                      <a
                        href={link.href}
                        className="text-smdata-[focus]:bg-gray-100 group flex items-center px-4 py-2 data-[focus]:text-gray-900"
                      >
                        {link.label}
                      </a>
                    </DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
          </>
        ),
      )}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <>
      {banner && (
        <div className="relative left-0 flex w-full items-center rounded-bl-xl rounded-br-xl bg-primary p-2">
          <p className="w-full text-center text-sm leading-6 text-white">
            <a href="/services/startup">
              {banner}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      )}
      <Disclosure as="header" className="pt-12 sm:pt-16">
        <PlusGrid>
          <PlusGridRow className="relative flex justify-between">
            <div className="relative flex gap-6">
              <PlusGridItem className="py-3">
                <Link href="/" title="Home">
                  <Logo />
                </Link>
              </PlusGridItem>
            </div>
            <DesktopNav />
            <MobileNavButton />
          </PlusGridRow>
        </PlusGrid>
        <MobileNav />
      </Disclosure>
    </>
  )
}