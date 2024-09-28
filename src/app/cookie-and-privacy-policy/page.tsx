import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'

function PolicyContent() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          SpaceDesign - Cookie e Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8">
          In SpaceDesign, ci impegniamo a proteggere la tua privacy e a
          garantire che i tuoi dati personali siano trattati in modo sicuro e
          responsabile. Questa Privacy Policy descrive come raccogliamo,
          utilizziamo e proteggiamo le informazioni personali dei visitatori del
          sito web SpaceDesign ("noi", "nostro", o "SpaceDesign"). Inoltre,
          spieghiamo come utilizziamo i cookie e altre tecnologie di
          tracciamento.
          <br />
          <br />
          Accedendo o utilizzando il nostro sito web, accetti le pratiche
          descritte in questa Privacy e Cookie Policy.
        </p>
        <hr className="mt-10" />
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h2>
          <p className="mt-8">
            Quando utilizzi il nostro sito web, potremmo raccogliere vari tipi
            di informazioni, inclusi:
          </p>
          <ul className="ml-5 mt-8 max-w-xl list-disc space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Informazioni fornite volontariamente dall'utente:
                </strong>{' '}
                Nome, indirizzo e-mail, numero di telefono o altre informazioni
                che scegli di fornirci compilando i moduli di contatto,
                iscrivendoti alla nostra newsletter, o registrandoti ai nostri
                servizi.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Informazioni raccolte automaticamente:
                </strong>{' '}
                Dati relativi alla tua attività di navigazione, come indirizzo
                IP, tipo di dispositivo, tipo di browser, pagine visitate, e
                tempo trascorso sul sito. Questi dati vengono raccolti tramite i
                cookie o altre tecnologie di tracciamento.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Utilizziamo le tue informazioni personali per migliorare
            l'esperienza utente, comunicare con te, fornire assistenza, e per
            garantire la sicurezza del sito.
          </p>
          <p className="mt-8">
            Non vendiamo né affittiamo i tuoi dati personali a terze parti, ma
            potremmo condividerli con fornitori di servizi o enti legali se
            richiesto dalla legge.
          </p>
          <p className="mt-8">
            Conserviamo i tuoi dati personali per il tempo necessario a
            soddisfare le finalità per cui sono stati raccolti, o come richiesto
            dalla legge. Hai il diritto di accedere, rettificare, cancellare,
            limitare o opporti al trattamento dei tuoi dati personali. Puoi
            contattarci all’indirizzo email: [inserisci la tua email].
          </p>

          <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cookie Policy
          </h2>
          <p className="mt-8">
            I cookie sono piccoli file di testo che vengono salvati sul tuo
            dispositivo quando visiti il nostro sito web. Utilizziamo i cookie
            per migliorare la tua esperienza di navigazione e raccogliere
            informazioni sull'uso del sito.
          </p>
          <ul
            role="list"
            className="ml-5 mt-8 max-w-xl list-disc space-y-8 text-gray-600"
          >
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookie Necessari:
                </strong>{' '}
                Essenziali per il funzionamento del sito e non possono essere
                disattivati.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookie di Prestazione:
                </strong>{' '}
                Raccogliamo informazioni anonime su come gli utenti utilizzano
                il nostro sito web.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookie di Funzionalità:
                </strong>{' '}
                Consentono al sito di ricordare le tue scelte (come la lingua
                preferita).
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookie di Profilazione/Pubblicitari:
                </strong>{' '}
                Raccogliamo informazioni sulle tue abitudini di navigazione per
                mostrarti annunci rilevanti.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Utilizziamo anche cookie di terze parti, come Google Analytics, per
            monitorare l'uso del sito. Puoi gestire le preferenze sui cookie
            direttamente dal tuo browser.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CookieAndPrivacyPolicy() {
  return (
    <>
      <Loader />
      <main className="overflow-hidden">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <PolicyContent />
        <Footer />
      </main>
    </>
  )
}
