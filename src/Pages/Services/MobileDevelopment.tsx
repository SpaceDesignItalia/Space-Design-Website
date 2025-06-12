import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Iphone15Pro } from "../../Components/magicui/iphone-15-pro";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function MobileDevelopment() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
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
    { name: "Flutter", icon: "logos:flutter" },
    { name: "Swift", icon: "logos:swift" },
    { name: "Kotlin", icon: "logos:kotlin-icon" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
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
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-black dark:bg-white"
              >
                <Icon
                  icon="bi:phone"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white"
              >
                {t("mobile-hero-title") || "Sviluppo App Mobile"}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mobile-hero-description") ||
                  "Potenti applicazioni mobile native e multi-piattaforma che coinvolgono gli utenti e offrono prestazioni eccezionali su iOS e Android"}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Button
                  size="lg"
                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("get-quote") || "Richiedi Preventivo"}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-gray-300 text-gray-900 dark:border-gray-600 dark:text-white"
                >
                  {t("view-portfolio") || "Vedi Portfolio"}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                {t("mobile-technologies-title") || "Tecnologie che Utilizziamo"}
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

        {/* Benefits Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {t("mobile-benefits-title") ||
                    "Perché Scegliere le Nostre App Mobile"}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t("mobile-benefits-description") ||
                    "Le nostre app mobile offrono vantaggi concreti per il tuo business"}
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <Icon
                        icon="material-symbols:check-circle"
                        className="h-6 w-6 text-black dark:text-white flex-shrink-0"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={scaleIn} className="relative">
                <div className="flex items-center justify-center py-4">
                  <Iphone15Pro
                    src="/imgs/app-mockup.png"
                    className="mx-auto dark max-w-[550px] max-h-[550px] w-auto h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("faq-title") || "Domande Frequenti"}
          subtitle={
            t("faq-subtitle-mobile") ||
            "Risposte alle domande più comuni sullo sviluppo app mobile"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-mobile") || "Parliamo del tuo progetto mobile"
          }
          benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("mobile-faq-question-1") ||
                "Sviluppate sia per iOS che Android?",
              answer:
                t("mobile-faq-answer-1") ||
                "Sì, sviluppiamo app native per entrambe le piattaforme o soluzioni cross-platform con React Native e Flutter.",
              icon: "material-symbols:smartphone",
              delay: 0.1,
            },
            {
              question:
                t("mobile-faq-question-2") ||
                "Quanto tempo richiede lo sviluppo di un'app?",
              answer:
                t("mobile-faq-answer-2") ||
                "Da 6-8 settimane per app semplici fino a 16-20 settimane per applicazioni complesse con funzionalità avanzate.",
              icon: "material-symbols:schedule",
              delay: 0.2,
            },
            {
              question:
                t("mobile-faq-question-3") ||
                "Vi occupate della pubblicazione sugli store?",
              answer:
                t("mobile-faq-answer-3") ||
                "Sì, ci occupiamo dell'intero processo di pubblicazione su App Store e Google Play, inclusa ottimizzazione e approvazione.",
              icon: "material-symbols:store",
              delay: 0.3,
            },
            {
              question:
                t("mobile-faq-question-4") || "L'app funzionerà offline?",
              answer:
                t("mobile-faq-answer-4") ||
                "Possiamo implementare funzionalità offline per le caratteristiche essenziali, con sincronizzazione automatica al ritorno della connessione.",
              icon: "material-symbols:wifi-off",
              delay: 0.4,
            },
            {
              question:
                t("mobile-faq-question-5") || "Fornite supporto post-lancio?",
              answer:
                t("mobile-faq-answer-5") ||
                "Sì, offriamo pacchetti di manutenzione con aggiornamenti, correzioni bug e supporto tecnico per mantenere la tua app sempre aggiornata.",
              icon: "material-symbols:support-agent",
              delay: 0.5,
            },
          ]}
        />

        {/* CTA Section */}
        <section className="py-24 bg-black dark:bg-white">
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
                className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl"
              >
                {t("mobile-cta-title") ||
                  "Pronto a Lanciare la Tua App Mobile?"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700"
              >
                {t("mobile-cta-description") ||
                  "Contattaci oggi per discutere il tuo progetto e scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi"}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10">
                <Button
                  size="lg"
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("contact-us") || "Contattaci Ora"}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
