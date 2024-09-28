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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azienda',
  description:
    'La nostra missione è applicare innovazione e creatività alla crezione di software per ogni esigenza.',
}

function Header() {
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
                alt="Progetto di Space Design"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Progetto di Space Design"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Progetto di Space Design"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Progetto di Space Design"
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

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
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

/* function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
} */

/* function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
} */

export default function Company() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <Header />
        <Team />
        {/* <Investors />  */}
        {/* <Careers /> */}
        <Footer />
      </main>
    </>
  )
}
