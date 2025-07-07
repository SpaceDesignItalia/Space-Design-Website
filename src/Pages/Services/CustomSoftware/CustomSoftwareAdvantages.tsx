import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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

export default function CustomSoftwareAdvantages() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          className="text-center mb-16"
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
            className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl"
            variants={fadeInUp}
          >
            {t("custom-software-headline") ||
              "Perché scegliere Space Design Italia per il tuo software personalizzato"}
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t("custom-software-subtitle") ||
              "Creiamo soluzioni software su misura che trasformano il tuo business, automatizzano i processi e aumentano la produttività."}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInLeft}
          >
            <Icon
              icon="material-symbols:automation"
              className="w-12 h-12 mb-4 text-blue-200"
            />
            <h3 className="text-xl font-semibold mb-3">
              {t("custom-software-advantage-automation") ||
                "Automazione completa"}
            </h3>
            <p className="text-blue-100 leading-relaxed">
              {t("custom-software-advantage-automation-desc") ||
                "Automatizziamo i tuoi processi aziendali più complessi, riducendo errori e tempi di esecuzione."}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInUp}
          >
            <Icon
              icon="material-symbols:integration-instructions"
              className="w-12 h-12 mb-4 text-blue-200"
            />
            <h3 className="text-xl font-semibold mb-3">
              {t("custom-software-advantage-integration") ||
                "Integrazione perfetta"}
            </h3>
            <p className="text-blue-100 leading-relaxed">
              {t("custom-software-advantage-integration-desc") ||
                "Integriamo il software con i tuoi sistemi esistenti per un flusso di lavoro fluido e senza interruzioni."}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-white text-center flex flex-col items-center border border-white/20"
            variants={fadeInRight}
          >
            <Icon
              icon="material-symbols:trending-up"
              className="w-12 h-12 mb-4 text-blue-200"
            />
            <h3 className="text-xl font-semibold mb-3">
              {t("custom-software-advantage-scalability") ||
                "Scalabilità garantita"}
            </h3>
            <p className="text-blue-100 leading-relaxed">
              {t("custom-software-advantage-scalability-desc") ||
                "Progettiamo soluzioni che crescono con il tuo business, adattandosi alle tue esigenze future."}
            </p>
          </motion.div>
        </motion.div>

        {/* Sezione dettagli metodologia */}
        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-8 text-center"
              variants={fadeInUp}
            >
              {t("custom-software-methodology-title") ||
                "La nostra metodologia"}
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerChildren}
            >
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    icon="material-symbols:search"
                    className="w-8 h-8 text-blue-200"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t("custom-software-step-analysis") || "Analisi"}
                </h4>
                <p className="text-blue-100 text-sm">
                  {t("custom-software-step-analysis-desc") ||
                    "Studio approfondito dei tuoi processi e requisiti aziendali"}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    icon="material-symbols:design-services"
                    className="w-8 h-8 text-indigo-200"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t("custom-software-step-design") || "Progettazione"}
                </h4>
                <p className="text-blue-100 text-sm">
                  {t("custom-software-step-design-desc") ||
                    "Architettura software scalabile e interfacce intuitive"}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    icon="material-symbols:code"
                    className="w-8 h-8 text-purple-200"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t("custom-software-step-development") || "Sviluppo"}
                </h4>
                <p className="text-blue-100 text-sm">
                  {t("custom-software-step-development-desc") ||
                    "Codice pulito, testato e documentato seguendo le best practices"}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    icon="material-symbols:support"
                    className="w-8 h-8 text-pink-200"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t("custom-software-step-support") || "Supporto"}
                </h4>
                <p className="text-blue-100 text-sm">
                  {t("custom-software-step-support-desc") ||
                    "Manutenzione continua e aggiornamenti per mantenere il software al top"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Statistiche */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:speed"
                className="text-blue-200 w-8 h-8 mr-3"
              />
              <div className="text-4xl font-bold text-white">3x</div>
            </div>
            <div className="text-blue-100 text-lg">
              {t("custom-software-stat-efficiency") ||
                "Aumento dell'efficienza"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:savings"
                className="text-blue-200 w-8 h-8 mr-3"
              />
              <div className="text-4xl font-bold text-white">-60%</div>
            </div>
            <div className="text-blue-100 text-lg">
              {t("custom-software-stat-costs") ||
                "Riduzione dei costi operativi"}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
