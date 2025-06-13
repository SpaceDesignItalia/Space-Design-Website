import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";
import CTA from "./CTA";
import AppHero from "./AppHero";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import Benefits from "./Benefits";

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function MobileDevelopment() {
  const { t, language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: "bi:phone",
      title: t("mobile-native-apps") || "App Native",
      description:
        t("mobile-native-description") ||
        "Sviluppiamo app native per iOS e Android che sfruttano al massimo le potenzialità del dispositivo, garantendo performance eccellenti e un'esperienza utente fluida.",
    },
    {
      icon: "material-symbols:devices",
      title: t("mobile-cross-platform") || "Cross-Platform",
      description:
        t("mobile-cross-platform-description") ||
        "Realizziamo app multi-piattaforma con React Native e Flutter, riducendo i tempi di sviluppo mantenendo alta qualità e funzionalità native.",
    },
    {
      icon: "material-symbols:speed",
      title: t("mobile-performance") || "Performance Ottimizzate",
      description:
        t("mobile-performance-description") ||
        "Ottimizziamo ogni aspetto dell'app per garantire velocità, fluidità e un consumo efficiente della batteria.",
    },
    {
      icon: "material-symbols:security",
      title: t("mobile-security") || "Sicurezza Avanzata",
      description:
        t("mobile-security-description") ||
        "Implementiamo protocolli di sicurezza all'avanguardia per proteggere i dati sensibili degli utenti.",
    },
  ];

  const technologies = [
    { name: "React Native", icon: "logos:react" },
    { name: "Expo", icon: "file-icons:expo" },
  ];

  const benefits = [
    t("mobile-benefit-1") || "Presenza mobile professionale",
    t("mobile-benefit-2") || "Accesso diretto ai clienti",
    t("mobile-benefit-3") || "Notifiche push personalizzate",
    t("mobile-benefit-4") || "Funzionalità offline",
    t("mobile-benefit-5") || "Integrazione con sistemi esistenti",
    t("mobile-benefit-6") || "Analytics e insights dettagliati",
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("mobile-development") || "Sviluppo App Mobile"
        }`}
        description={
          t("mobile-seo-description") ||
          "Sviluppiamo app mobile native e cross-platform per iOS e Android. Soluzioni professionali per la tua presenza mobile."
        }
        keywords={`app mobile, sviluppo ios, sviluppo android, react native, flutter, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/mobile-development`}
        alternateUrls={{
          it: "/it/services/mobile-development",
          en: "/en/services/mobile-development",
          "x-default": "/services/mobile-development",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}

        <AppHero />
        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mobile-features-title") || "Funzionalità Avanzate"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mobile-features-description") ||
                  "Sviluppiamo app mobile complete con tutte le funzionalità necessarie per il successo del tuo business"}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <Icon
                        icon={feature.icon}
                        className="h-6 w-6 text-white dark:text-black"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mobile-technologies-title")}
              </motion.h2>

              <motion.div
                variants={stagger}
                className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="group relative rounded-xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <Icon
                        icon={tech.icon}
                        className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Benefits />

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("faq-title")}
          subtitle={t("faq-subtitle-mobile")}
          ctaText={t("faq-cta-text")}
          ctaSubtext={t("faq-cta-subtext-mobile")}
          benefitText={t("faq-benefit-text")}
          faqs={[
            {
              question: t("mobile-faq-question-1"),
              answer: t("mobile-faq-answer-1"),
              icon: "solar:wallet-money-line-duotone",
              delay: 0.1,
            },
            {
              question: t("mobile-faq-question-2"),
              answer: t("mobile-faq-answer-2"),
              icon: "iconamoon:clock",
              delay: 0.2,
            },
            {
              question: t("mobile-faq-question-3"),
              answer: t("mobile-faq-answer-3"),
              icon: "pajamas:work-item-maintenance",
              delay: 0.3,
            },
            {
              question: t("mobile-faq-question-4"),
              answer: t("mobile-faq-answer-4"),
              icon: "streamline-cyber:multi-platform-2",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
