import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CustomSoftwareAdvantages() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-base/7 font-semibold text-blue-200 tracking-wider uppercase"
            variants={fadeInUp}
          >
            {t("custom-software-advantages") || "I nostri punti di forza"}
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl"
            variants={fadeInUp}
          >
            {t("custom-software-headline") ||
              "Perché scegliere Space Design Italia"}
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t("custom-software-subtitle") ||
              "Creiamo soluzioni software su misura che trasformano il tuo business. Analisi, progettazione, sviluppo e supporto continuo per garantire il successo del tuo progetto."}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInLeft}
          >
            <Icon
              icon="material-symbols:automation"
              className="w-10 h-10 mb-3 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">
              {t("custom-software-advantage-automation") ||
                "Automazione completa"}
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t("custom-software-advantage-automation-desc") ||
                "Automatizziamo i tuoi processi aziendali, riducendo errori e tempi di esecuzione."}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInUp}
          >
            <Icon
              icon="material-symbols:integration-instructions"
              className="w-10 h-10 mb-3 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">
              {t("custom-software-advantage-integration") ||
                "Integrazione perfetta"}
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t("custom-software-advantage-integration-desc") ||
                "Integriamo il software con i tuoi sistemi esistenti per un flusso di lavoro fluido."}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInRight}
          >
            <Icon
              icon="material-symbols:trending-up"
              className="w-10 h-10 mb-3 text-blue-200"
            />
            <h3 className="text-lg font-semibold mb-2">
              {t("custom-software-advantage-scalability") ||
                "Scalabilità garantita"}
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t("custom-software-advantage-scalability-desc") ||
                "Progettiamo soluzioni che crescono con il tuo business e le tue esigenze future."}
            </p>
          </motion.div>
        </motion.div>

        {/* Statistiche essenziali */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:speed"
                className="text-blue-200 w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">3x</div>
            </div>
            <div className="text-blue-100 text-sm">
              {t("custom-software-stat-efficiency") ||
                "Aumento dell'efficienza"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:savings"
                className="text-blue-200 w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">60%</div>
            </div>
            <div className="text-blue-100 text-sm">
              {t("custom-software-stat-cost-reduction") ||
                "Riduzione dei costi"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:support"
                className="text-blue-200 w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">24/7</div>
            </div>
            <div className="text-blue-100 text-sm">
              {t("custom-software-stat-support") || "Supporto dedicato"}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button
            size="lg"
            color="default"
            variant="solid"
            onPress={handleContactClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            endContent={
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            }
          >
            {t("custom-software-cta") || "Richiedi Preventivo"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
