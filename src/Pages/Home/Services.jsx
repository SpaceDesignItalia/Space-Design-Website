import React from "react";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="py-24 sm:py-32">
      <div className="flex flex-col gap-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
            }}
          >
            Soluzioni digitali su misura
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-700"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.25,
            }}
          >
            Con un impegno deciso per l'eccellenza, mettiamo a disposizione una
            vasta gamma di servizi che comprende la progettazione di esperienze
            utente coinvolgenti e lo sviluppo di applicazioni personalizzate.
          </motion.p>
        </div>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.25,
              delay: 0.45,
            }}
          >
            <dt className="text-lg font-semibold leading-7">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-warning-100">
                <WebIcon className="text-warning" />
              </div>
              Sviluppo di siti web personalizzati
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
              <p className="flex-auto">
                Da eleganti vetrine digitali a complesse piattaforme
                interattive, trasformiamo le tue idee in realtà digitali
                coinvolgenti. Approccio su misura, design moderno e funzionalità
                avanzate caratterizzano ogni progetto, garantendo che il tuo
                sito web offra un'esperienza utente straordinaria.
              </p>
              <p className="mt-6">
                <a
                  href="/servizi/siti_web"
                  className="text-base font-semibold leading-6 text-primary"
                >
                  Scopri ora <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.25,
              delay: 0.55,
            }}
          >
            <dt className="text-lg font-semibold leading-7">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <TerminalIcon className="text-primary" />
              </div>
              Sviluppo di software personalizzati
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
              <p className="flex-auto">
                Dalla progettazione di soluzioni su misura alla creazione di
                applicazioni dinamiche, la nostra squadra di sviluppatori
                specializzati integra tecnologie cloud all'avanguardia per
                trasformare la tua visione in realtà digitale.
              </p>
              <p className="mt-6">
                <a
                  href="/servizi/software_personalizzato"
                  className="text-base font-semibold leading-6 text-primary"
                >
                  Scopri ora <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.25,
              delay: 0.65,
            }}
          >
            <dt className="text-lg font-semibold leading-7">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-success-100">
                <SmartphoneIcon className="text-success" />
              </div>
              Sviluppo di applicazioni mobile
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
              <p className="flex-auto">
                Dalla concezione di idee all'avanzato sviluppo, la nostra
                squadra traduce la tua visione in app coinvolgenti e funzionali.
                Le nostre applicazioni mobile su misura offrono un'esperienza
                utente straordinaria su dispositivi iOS e Android.
              </p>
              <p className="mt-6">
                <a
                  href="/servizi/app_mobile"
                  className="text-base font-semibold leading-6 text-primary"
                >
                  Scopri ora <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
}
