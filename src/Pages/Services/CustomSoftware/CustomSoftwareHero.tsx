import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CustomSoftwareHero() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-100 opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
              <Icon
                icon="material-symbols:settings-outline"
                className="mr-2 h-4 w-4"
              />
              {t("custom-software-badge") || "Software Su Misura"}
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            {t("custom-software-hero-title") ||
              "Software personalizzato per il tuo business"}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto"
          >
            {t("custom-software-hero-description") ||
              "Sviluppiamo soluzioni software complete e personalizzate che automatizzano i tuoi processi aziendali, migliorano l'efficienza e fanno crescere il tuo business."}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base font-semibold"
              onClick={handleContactClick}
            >
              {t("custom-software-cta-primary") || "Richiedi Consulenza"}
              <Icon
                icon="heroicons:arrow-right-20-solid"
                className="ml-2 h-4 w-4"
              />
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-black text-black hover:bg-gray-50 px-8 py-3 text-base font-semibold"
            >
              {t("custom-software-cta-secondary") || "Vedi Portfolio"}
              <Icon icon="heroicons:eye-20-solid" className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl ring-1 ring-gray-900/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Code Editor Mockup */}
                <div className="md:col-span-2 bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-2">BusinessLogic.ts</span>
                  </div>
                  <div className="text-green-400">
                    <span className="text-blue-400">class</span>{" "}
                    <span className="text-yellow-400">BusinessAutomation</span>{" "}
                    {"{"}
                  </div>
                  <div className="text-gray-400 ml-4">
                    <span className="text-purple-400">async</span>{" "}
                    <span className="text-blue-400">processWorkflow</span>(){" "}
                    {"{"}
                  </div>
                  <div className="text-gray-400 ml-8">
                    <span className="text-green-400">
                      // Automazione processi
                    </span>
                  </div>
                  <div className="text-gray-400 ml-4">{"}"}</div>
                  <div className="text-green-400">{"}"}</div>
                </div>

                {/* Dashboard Mockup */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Dashboard
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-2 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Efficienza
                        </span>
                        <span className="text-xs font-semibold text-gray-800">
                          +25%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-gray-800 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-2 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Automazione
                        </span>
                        <span className="text-xs font-semibold text-gray-800">
                          80%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
