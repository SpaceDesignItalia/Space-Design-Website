import React from "react";
import { Button } from "@nextui-org/button";
import { useInView } from "react-intersection-observer";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      ref={ref}
      className="h-auto flex justify-center items-center p-5 lg:p-0"
    >
      <div className="mx-auto max-w-2xl lg:py-32">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <motion.h1
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl"
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
            Contattaci oggi per dare vita alle tue idee!
          </motion.h1>
          <motion.p
            className="lg:w-5/6 mt-6 text-lg leading-8 text-gray-600"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.5,
            }}
          >
            Space Design è più di un'azienda di software. Siamo il tuo partner
            nell'esplorare le infinite opportunità del mondo digitale. Siamo la
            fiamma che accende la tua creatività e la tecnologia che la
            trasforma in realtà. Siamo il futuro digitale e siamo qui per
            guidarti in questo viaggio.
          </motion.p>

          <motion.div
            className="w-full"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.75,
            }}
          >
            <Button
              color="primary"
              size="lg"
              className="w-full lg:w-2/5"
              startContent={<SendIcon />}
              radius="sm"
            >
              Contattaci
            </Button>
          </motion.div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
