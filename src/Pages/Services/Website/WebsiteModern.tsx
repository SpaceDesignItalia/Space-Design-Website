import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function WebsiteModern() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: "material-symbols:rocket-launch",
      titleKey: "website-advantage-performance",
      descriptionKey: "website-advantage-performance-desc",
    },
    {
      icon: "material-symbols:devices",
      titleKey: "website-advantage-responsive",
      descriptionKey: "website-advantage-responsive-desc",
    },
    {
      icon: "material-symbols:security",
      titleKey: "website-advantage-security",
      descriptionKey: "website-advantage-security-desc",
    },
    {
      icon: "material-symbols:search",
      titleKey: "website-advantage-seo",
      descriptionKey: "website-advantage-seo-desc",
    },
    {
      icon: "material-symbols:speed",
      titleKey: "website-advantage-speed",
      descriptionKey: "website-advantage-speed-desc",
    },
    {
      icon: "material-symbols:trending-up",
      titleKey: "website-advantage-scalability",
      descriptionKey: "website-advantage-scalability-desc",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t("website-modern-title") ||
              "Vantaggi dei Nostri Siti Web Moderni"}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t("website-modern-subtitle") ||
              "Siti web all'avanguardia che combinano design moderno, performance eccezionali e tecnologie innovative per offrire un'esperienza utente superiore"}
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={advantage.icon}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t(advantage.titleKey) ||
                      getDefaultTitle(advantage.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t(advantage.descriptionKey) ||
                      getDefaultDescription(advantage.descriptionKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Funzioni helper per i testi di default
function getDefaultTitle(key: string): string {
  const titles: { [key: string]: string } = {
    "website-advantage-performance": "Performance Eccezionali",
    "website-advantage-responsive": "Design Responsive",
    "website-advantage-security": "Sicurezza Avanzata",
    "website-advantage-seo": "SEO Ottimizzato",
    "website-advantage-speed": "Velocità di Caricamento",
    "website-advantage-scalability": "Scalabilità",
  };
  return titles[key] || "Vantaggio";
}

function getDefaultDescription(key: string): string {
  const descriptions: { [key: string]: string } = {
    "website-advantage-performance-desc":
      "Siti web ultra-veloci con tempi di caricamento ottimizzati e performance eccellenti su tutti i dispositivi e browser.",
    "website-advantage-responsive-desc":
      "Design adattivo che si adatta perfettamente a qualsiasi dispositivo: desktop, tablet e smartphone.",
    "website-advantage-security-desc":
      "Implementazione di protocolli di sicurezza avanzati, certificati SSL e protezione contro minacce informatiche.",
    "website-advantage-seo-desc":
      "Ottimizzazione completa per i motori di ricerca per migliorare la visibilità online e aumentare il traffico organico.",
    "website-advantage-speed-desc":
      "Tecnologie moderne e ottimizzazioni avanzate per garantire tempi di caricamento rapidi e un'esperienza utente fluida.",
    "website-advantage-scalability-desc":
      "Architettura scalabile che cresce con la tua azienda, gestendo facilmente l'aumento di traffico e funzionalità.",
  };
  return descriptions[key] || "Descrizione del vantaggio";
}
