import ScrollingBanner from "../../../Components/Home/ScrollingBanner";

export default function CustomSoftwareAdvantages() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-blue-400">
          Vantaggi esclusivi
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Perché scegliere software personalizzato
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Ottimizzato per il tuo business
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Il software custom è progettato specificamente per i tuoi
                  processi aziendali, eliminando funzionalità inutili e
                  automatizzando i flussi di lavoro esistenti. Risultato?
                  Maggiore efficienza e produttività dal primo giorno.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-600 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 lg:rounded-l-[2rem]" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Scalabilità garantita
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Cresci senza limiti. Il software personalizzato si adatta alla
                  tua crescita, gestendo più utenti, più dati e nuove
                  funzionalità senza compromettere le prestazioni o richiedere
                  sostituzioni costose.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 max-lg:rounded-t-[2rem]" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Sicurezza avanzata
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Protezione su misura per i tuoi dati. Implementiamo le
                  migliori pratiche di sicurezza, crittografia e autenticazione,
                  garantendo la conformità normativa e la protezione delle
                  informazioni sensibili.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Integrazione perfetta
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Connette tutti i tuoi sistemi esistenti. API personalizzate,
                  sincronizzazione automatica e dashboard unificate che ti danno
                  una visione completa del tuo business in tempo reale.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <ScrollingBanner>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/logos/logo-1.png"
                      alt="Logo 1"
                      className="h-12 w-12"
                    />
                    <img
                      src="/images/logos/logo-2.png"
                      alt="Logo 2"
                      className="h-12 w-12"
                    />
                    <img
                      src="/images/logos/logo-3.png"
                      alt="Logo 3"
                      className="h-12 w-12"
                    />
                  </div>
                </ScrollingBanner>
                <ScrollingBanner isReverse>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/logos/logo-1.png"
                      alt="Logo 1"
                      className="h-12 w-12"
                    />
                    <img
                      src="/images/logos/logo-2.png"
                      alt="Logo 2"
                      className="h-12 w-12"
                    />
                    <img
                      src="/images/logos/logo-3.png"
                      alt="Logo 3"
                      className="h-12 w-12"
                    />
                  </div>
                </ScrollingBanner>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
