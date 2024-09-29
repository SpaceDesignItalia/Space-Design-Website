'use client'

import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Funzione per gestire i cookie
const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/`
}

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

export default function CookieBanner(): JSX.Element | null {
  const [showBanner, setShowBanner] = useState<boolean>(false)

  // Controlla se il consenso ai cookie è già stato dato
  useEffect(() => {
    const consent = getCookie('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  // Funzione per accettare i cookie
  const acceptCookies = (): void => {
    setCookie('cookieConsent', 'true', 365) // Il cookie scade in 1 anno
    setShowBanner(false)
  }

  // Varianti dell'animazione per Framer Motion
  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {showBanner && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-6"
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
            <p className="text-sm leading-6 text-gray-900">
              Questo sito utilizza i cookie per migliorare l'esperienza utente e
              fornirti servizi personalizzati. Accettando i cookie ci aiuti a
              offrirti un'esperienza migliore. Consulta la nostra{' '}
              <a
                href="/cookie-and-privacy-policy"
                className="font-semibold text-primary"
              >
                policy sui cookie
              </a>
              .
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <Button color="primary" radius="sm" onClick={acceptCookies}>
                Accetta
              </Button>
              <Button
                variant="light"
                radius="sm"
                className="text-sm leading-6 text-gray-900"
                onClick={() => setShowBanner(false)}
              >
                Rifiuta
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
