import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Button, Link } from '@nextui-org/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: "Qualcosa e' in arrivo",
}

function LoginForm() {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Qualcosa di nuovo sta per arrivare!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Siamo entusiasti di presentarti una novità. Rimani sintonizzato,
          stiamo lavorando a qualcosa di speciale!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button as={Link} href="/" color="primary" radius="full">
            Torna alla Home
          </Button>
        </div>
      </div>
    </main>
  )
}
export default function LoginPage() {
  return (
    <>
      <Loader />
      <div className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <LoginForm />
        <Footer />
      </div>
    </>
  )
}
