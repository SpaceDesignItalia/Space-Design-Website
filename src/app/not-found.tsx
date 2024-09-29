import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Button, Link } from '@nextui-org/react'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-primary text-8xl font-semibold">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pagina non trovata
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-800">
              Ci dispiace, ma non siamo riusciti a trovare la pagina che stai
              cercando.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                as={Link}
                href="/"
                color="primary"
                radius="full"
                size="lg"
              >
                Torna alla homepage
              </Button>
            </div>
          </div>
        </main>
      </Container>
    </div>
  )
}
export default function notFound() {
  return (
    <div>
      <Loader />
      <Hero />
      <Footer />
    </div>
  )
}
