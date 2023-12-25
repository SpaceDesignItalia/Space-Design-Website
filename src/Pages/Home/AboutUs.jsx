import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div ref={ref} className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h3
            className="text-center mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
            }}
          >
            Chi siamo
          </motion.h3>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.25,
            }}
          >
            Fondata nel 2019, la nostra esperienza si fonda su una passione
            comune per l'innovazione digitale e la creazione di soluzioni su
            misura. Ogni riga di codice riflette la nostra dedizione a fornire
            esperienze utente straordinarie. Siamo qui per trasformare le vostre
            idee in realtà digitale, guidandovi attraverso il panorama in
            continua evoluzione della tecnologia con competenza e creatività.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
