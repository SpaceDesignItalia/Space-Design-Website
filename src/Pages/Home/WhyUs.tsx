import { Icon } from "@iconify/react/dist/iconify.js"

const features = [
  {
    name: 'Software Performanti',
    description:
      'Sviluppiamo soluzioni software all\'avanguardia ottimizzate per prestazioni, scalabilità e affidabilità. Le nostre applicazioni sono costruite con le tecnologie più recenti per garantire la massima efficienza.',
    icon: "material-symbols:speed",
  },
  {
    name: 'Design UI/UX Moderno',
    description: 'I nostri design privilegiano l\'esperienza utente con interfacce pulite e intuitive che seguono le ultime tendenze. Creiamo layout eleganti e reattivi che funzionano perfettamente su tutti i dispositivi.',
    icon: "material-symbols:design-services",
  },
  {
    name: 'Team Giovane e Flessibile',
    description: 'Il nostro team dinamico porta prospettive fresche e adattabilità in ogni progetto. Ci manteniamo aggiornati sulle tecnologie emergenti e ci adattiamo rapidamente alle tue esigenze e alle richieste del mercato.',
    icon: "mdi:people-group",
  },
  {
    name: 'Supporto Continuo',
    description: 'Offriamo assistenza tecnica dedicata e manutenzione costante per garantire che le tue soluzioni rimangano sempre aggiornate ed efficienti nel tempo.',
    icon: "material-symbols:support-agent",
  },
]

export default function WhyUs() {
  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-200">Perché Sceglierci</h2>
              <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Innovazione e Eccellenza
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Uniamo competenza tecnica e innovazione creativa per offrire soluzioni digitali eccezionali. Il nostro impegno verso la tecnologia all'avanguardia, i principi di design moderni e un approccio di sviluppo flessibile garantisce il successo del tuo progetto.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9 transition-all duration-300 hover:translate-x-2">
                    <dt className="inline font-semibold text-white">
                      <Icon 
                        icon={feature.icon} 
                        aria-hidden="true" 
                        className="absolute left-1 top-1 size-5 text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="mt-1 text-gray-300">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="relative">
              <div className="absolute -inset-4 opacity-30 blur-3xl"></div>
              <img
                alt="Screenshot del prodotto"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 transition-transform duration-300 hover:scale-[1.02] sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
