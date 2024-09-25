'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '/public/logo.png'

export function Logo({ className }: { className?: string }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <motion.div
      variants={{ idle: {}, active: {} }}
      initial="idle"
      whileHover="active"
      transition={transition}
      className={clsx(className, 'overflow-visible')}
    >
      <Image
        src={logo} // Riferimento all'immagine importata
        alt="Logo"
        width={107} // Larghezza dell'immagine
        height={14} // Altezza dell'immagine
        priority // Ottimizza il caricamento
        className="object-contain" // Tailwind per assicurare che l'immagine sia ben contenuta
      />
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-cluster/logo-spacedesign.svg" // Riferimento all'immagine importata
      alt="Logo"
      width={107} // Larghezza dell'immagine
      height={14} // Altezza dell'immagine
      priority // Ottimizza il caricamento
      className="object-contain" // Tailwind per assicurare che l'immagine sia ben contenuta
    />
  )
}
