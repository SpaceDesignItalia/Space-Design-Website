import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LanguagesGlobe } from "../../Components/Global/Other/LanguagesGlobe";

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div ref={ref}>
      <div className="h-auto flex flex-col justify-center mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <motion.h2
          className="text-center text-3xl font-bold leading-8 text-gray-900"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.25,
          }}
        >
          <div className="pb-2">Tecnologie utilizzate</div>
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.25,
          }}
        >
          <LanguagesGlobe />
        </motion.div>
      </div>
    </div>
  );
}
