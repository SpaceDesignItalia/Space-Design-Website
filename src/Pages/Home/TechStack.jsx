import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
      <div className="h-auto mx-auto max-w-7xl px-6 py-14 lg:px-8">
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
          Tecnologie utilizzate
        </motion.h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none sm:grid-cols-6 lg:grid-cols-4">
          <motion.img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="Transistor"
            width={158}
            height={48}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.25,
            }}
          />
          <motion.img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt="Reform"
            width={158}
            height={48}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.35,
            }}
          />
          <motion.img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"
            alt="Tuple"
            width={158}
            height={48}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.45,
            }}
          />
          <motion.img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://www.domsoria.com/wp-content/uploads/2021/02/mysql.png"
            alt="SavvyCal"
            width={158}
            height={48}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.55,
            }}
          />
        </div>
      </div>
    </div>
  );
}
