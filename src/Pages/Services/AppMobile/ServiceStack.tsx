export default function ServiceStack() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base/7 font-semibold text-white tracking-wider uppercase">
            Tecnologie Moderne
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Sviluppiamo la tua app meglio di chiunque altro
          </p>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Soluzioni innovative e personalizzate per trasformare la tua visione
            in realtà
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile Apps Box */}
          <div className="group">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 18H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 6H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 9H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 12H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Mobile Apps
                    </h3>
                    <p className="text-sm text-white/80">iOS & Android</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Creiamo app native performanti e intuitive per entrambe le
                  piattaforme, garantendo la migliore esperienza utente
                  possibile.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      Swift & Objective-C
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">Kotlin & Java</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expo Box */}
          <div className="group lg:col-span-2">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 lg:rounded-bl-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12V22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Expo</h3>
                    <p className="text-sm text-white/80">
                      Development & Testing
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Ampliamo la portabilità e l'accessibilità del tuo progetto,
                  permettendo di sviluppare e testare applicazioni anche sul
                  web.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">Expo SDK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">Live Reload</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        Over-the-air Updates
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        Push Notifications
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assistenza Box */}
          <div className="group">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 8V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Assistenza
                    </h3>
                    <p className="text-sm text-white/80">
                      Support & Maintenance
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Offriamo contratti di manutenzione post rilascio e supporto
                  tecnico dedicato per garantire il perfetto funzionamento della
                  tua app.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">Bug Fixing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
