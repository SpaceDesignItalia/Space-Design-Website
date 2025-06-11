import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../Components/magicui/bento-grid";
import { MorphingText } from "../../Components/magicui/morphing-text";

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

export default function WebDevelopment() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const webTypes = [
    "Web Applications",
    "SaaS Platforms",
    "Progressive Web Apps",
    "Enterprise Solutions",
    "API Systems",
    "Dashboard Analytics",
  ];

  const bentoItems = [
    {
      title: t("web-applications") || "Applicazioni Web",
      description:
        t("web-applications-desc") ||
        "Applicazioni web complete e scalabili con architetture moderne, database avanzati e interfacce utente intuitive.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:web"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:web"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
    {
      title: t("web-saas-platforms") || "Piattaforme SaaS",
      description:
        t("web-saas-description") ||
        "Soluzioni Software-as-a-Service multi-tenant con gestione utenti, fatturazione e integrazioni.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:cloud"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:cloud"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("web-progressive-apps") || "Progressive Web Apps",
      description:
        t("web-progressive-description") ||
        "PWA che funzionano offline, con notifiche push e installabili come app native.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:install-mobile"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:install-mobile"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("web-enterprise-solutions") || "Soluzioni Enterprise",
      description:
        t("web-enterprise-description") ||
        "Sistemi enterprise complessi con alta disponibilità, sicurezza avanzata e performance ottimizzate.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:business"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:business"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
  ];

  const technologies = [
    { name: "React", icon: "logos:react" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Docker", icon: "logos:docker-icon" },
  ];

  const benefits = [
    t("web-benefit-1") || "Architetture scalabili e moderne",
    t("web-benefit-2") || "Performance ottimizzate per carichi elevati",
    t("web-benefit-3") || "Sicurezza enterprise-grade",
    t("web-benefit-4") || "Interfacce utente intuitive",
    t("web-benefit-5") || "Integrazione con sistemi esistenti",
    t("web-benefit-6") || "Monitoraggio e analytics avanzati",
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("web-development") || "Sviluppo Web"
        }`}
        description={
          t("web-meta-description") ||
          "Sviluppiamo applicazioni web moderne e performanti. Soluzioni professionali per la tua presenza online."
        }
        keywords={`sviluppo web, applicazioni web, saas, progressive web app, react, node.js, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/web-development`}
        alternateUrls={{
          it: "/it/services/web-development",
          en: "/en/services/web-development",
          "x-default": "/services/web-development",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section with MorphingText */}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-black dark:bg-white"
              >
                <Icon
                  icon="material-symbols:code"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                  <MorphingText
                    texts={webTypes}
                    className="text-gray-900 dark:text-white"
                  />
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  {t("web-development-subtitle") || "Moderne e Scalabili"}
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("web-hero-description") ||
                  "Applicazioni web moderne e performanti che offrono esperienze utente eccezionali e guidano la crescita del tuo business"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("get-quote") || "Richiedi Preventivo"}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
                {t("web-features-title") || "Soluzioni Web Avanzate"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("web-features-description") ||
                  "Sviluppiamo applicazioni web complete con architetture moderne e tecnologie all'avanguardia"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BentoGrid className="mx-auto">
                {bentoItems.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
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
                {t("web-technologies-title") || "Tecnologie che Utilizziamo"}
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
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("web-benefits-title") ||
                  "Perché Scegliere le Nostre Applicazioni Web"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t("web-benefits-description") ||
                  "Le nostre applicazioni web offrono vantaggi concreti per la tua presenza online"}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "material-symbols:architecture",
                  title:
                    t("web-benefit-1") || "Architetture scalabili e moderne",
                  description:
                    "Progettazione modulare e microservizi per crescere con il tuo business",
                },
                {
                  icon: "material-symbols:speed",
                  title:
                    t("web-benefit-2") ||
                    "Performance ottimizzate per carichi elevati",
                  description:
                    "Ottimizzazioni avanzate per gestire migliaia di utenti simultanei",
                },
                {
                  icon: "material-symbols:security",
                  title: t("web-benefit-3") || "Sicurezza enterprise-grade",
                  description:
                    "Protocolli di sicurezza all'avanguardia per proteggere i tuoi dati",
                },
                {
                  icon: "material-symbols:design-services",
                  title: t("web-benefit-4") || "Interfacce utente intuitive",
                  description:
                    "Design UX/UI moderno e accessibile per massima usabilità",
                },
                {
                  icon: "material-symbols:integration-instructions",
                  title:
                    t("web-benefit-5") || "Integrazione con sistemi esistenti",
                  description:
                    "API e connettori per integrare la tua infrastruttura attuale",
                },
                {
                  icon: "material-symbols:analytics",
                  title:
                    t("web-benefit-6") || "Monitoraggio e analytics avanzati",
                  description:
                    "Dashboard in tempo reale per monitorare performance e utilizzo",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black dark:bg-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon={benefit.icon}
                        className="h-8 w-8 text-white dark:text-black"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black dark:bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl">
                {t("web-cta-title") ||
                  "Pronto a Creare la Tua Applicazione Web?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700">
                {t("web-cta-description") ||
                  "Contattaci per discutere il tuo progetto e creare insieme l'applicazione web perfetta per te"}
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("contact-us") || "Contattaci Ora"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
