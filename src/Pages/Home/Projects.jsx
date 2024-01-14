import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Project1Cover from "../../assets/Projects/AziendaBiancoProjectCover.png";
import Project2Cover from "../../assets/Projects/GlobalcomProjectCover.png";
export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });
  return (
    <div ref={ref} className="bg-white">
      <div className="flex flex-col gap-10 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <motion.h1
          className="text-4xl text-center font-bold tracking-tight text-gray-900"
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
          }}
        >
          Alcuni dei nostri progetti
        </motion.h1>
        <motion.div
          className="relative overflow-hidden rounded-lg lg:h-96"
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
          <div className="absolute inset-0">
            <img
              src={Project1Cover}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                E-commerce Azienda Agricola Bianco
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Esplora la nostra avventura digitale con l'Azienda Agricola
                Bianco, un produttore di olio di eccellenza che ha abbracciato
                l'e-commerce. Attraverso una sinergia di design intuitivo e
                funzionalità avanzate, abbiamo creato un'esperienza di shopping
                online che ha portato l'autenticità e la qualità degli oli
                dell'Azienda Agricola Bianco direttamente nelle case dei
                consumatori.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              Case Study
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-lg lg:h-96"
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
            delay: 0.45,
          }}
        >
          <div className="absolute inset-0">
            <img
              src={Project2Cover}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                Sito aziendale Globalcom Srl
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Esplora il nostro caso di successo con Globalcom Srl, una
                società pionieristica nel settore informatico e delle
                telecomunicazioni. Con oltre due decenni di esperienza,
                Globalcom ha scelto di rivoluzionare la propria presenza online
                attraverso un sito aziendale all'avanguardia.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              Case Study
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
