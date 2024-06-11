import React from "react";
import { Button, Link } from "@nextui-org/react";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import TypingAnimation from "../../Components/magicui/text-typing";

export default function Hero() {
  return (
    <div className="h-auto lg:h-screen flex justify-center items-center p-5 lg:p-0">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF0000] to-[#B91372] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.25 }}
          >
            <TypingAnimation
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              duration={100}
            >
              Trasforma le tue idee in soluzioni{" "}
              <span className="bg-gradient-to-br from-[#FF0000] to-[#B91372] text-transparent bg-clip-text">
                software
              </span>{" "}
              straordinarie
            </TypingAnimation>
          </motion.h1>
          <motion.p
            className="lg:w-4/5 mt-6 text-lg leading-8 text-gray-600"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.25,
            }}
          >
            Creiamo software che trasforma l'ordinario in straordinario,
            ispirati dalle meraviglie dello spazio.
          </motion.p>
          <motion.div
            className="w-full"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.5,
            }}
          >
            <Button
              as={Link}
              href="/contattaci"
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF0000] to-[#B91372] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
