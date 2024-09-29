'use client'

import Image from 'next/image'

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
