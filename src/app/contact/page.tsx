import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import ContactForm from './contactForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contattaci',
  description: 'Contattaci oggi stesso e inizia il tuo percorso con noi!',
}

export default function ContactUs() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
