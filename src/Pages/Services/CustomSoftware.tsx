import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
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

export default function CustomSoftware() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const softwareTypes = [
    "ERP Systems",
    "CRM Solutions",
    "Inventory Management",
    "HR Management",
    "Accounting Software",
    "Workflow Automation",
    "Business Intelligence",
    "Document Management",
  ];

  const solutions = [
    {
      icon: "material-symbols:business-center",
      title: t("custom-erp") || "Sistemi ERP",
      description:
        t("custom-erp-desc") ||
        "Sistemi di gestione integrata che unificano tutti i processi aziendali in un'unica piattaforma scalabile e personalizzabile.",
      features: [
        "Gestione Contabilità",
        "Controllo Inventario",
        "Gestione HR",
        "Reportistica Avanzata",
      ],
    },
    {
      icon: "material-symbols:group",
      title: t("custom-crm") || "Soluzioni CRM",
      description:
        t("custom-crm-desc") ||
        "Gestione clienti avanzata con automazione del sales funnel, tracking delle interazioni e analytics predittive.",
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Customer Analytics",
        "Marketing Automation",
      ],
    },
    {
      icon: "material-symbols:inventory",
      title: t("custom-inventory") || "Gestione Magazzino",
      description:
        t("custom-inventory-desc") ||
        "Sistemi intelligenti per controllo scorte, tracking movimenti e ottimizzazione automatica degli ordini.",
      features: [
        "Real-time Tracking",
        "Auto Reordering",
        "Barcode Integration",
        "Multi-warehouse",
      ],
    },
  ];

  const industries = [
    {
      name: t("industry-manufacturing") || "Manifatturiero",
      icon: "material-symbols:precision-manufacturing",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
    {
      name: t("industry-retail") || "Retail",
      icon: "material-symbols:storefront",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
    {
      name: t("industry-healthcare") || "Sanità",
      icon: "material-symbols:medical-services",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
    {
      name: t("industry-logistics") || "Logistica",
      icon: "material-symbols:local-shipping",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
    {
      name: t("industry-finance") || "Finanza",
      icon: "material-symbols:account-balance",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
    {
      name: t("industry-education") || "Educazione",
      icon: "material-symbols:school",
      color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    },
  ];

  const technologies = [
    { name: "Python", icon: "logos:python" },
    { name: "Django", icon: "logos:django-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Redis", icon: "logos:redis" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "AWS", icon: "logos:aws" },
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("custom-software") || "Software Personalizzato"
        }`}
        description={
          t("custom-software-meta-description") ||
          "Sviluppiamo software personalizzato per la tua azienda. ERP, CRM, sistemi gestionali su misura per ottimizzare i tuoi processi."
        }
        keywords={`software personalizzato, erp, crm, sistemi gestionali, automazione aziendale, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/custom-software`}
        alternateUrls={{
          it: "/it/services/custom-software",
          en: "/en/services/custom-software",
          "x-default": "/services/custom-software",
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
                  icon="clarity:design-line"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                  <MorphingText
                    texts={softwareTypes}
                    className="text-gray-900 dark:text-white"
                  />
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  {t("custom-software-subtitle") || "Su Misura per Te"}
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("custom-hero-description") ||
                  "Trasformiamo le tue idee in soluzioni software complete. Dalla gestione aziendale all'automazione dei processi, creiamo il software perfetto per le tue esigenze"}
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

        {/* Process Section */}
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
                {t("custom-process-title") || "Il Nostro Processo di Sviluppo"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("custom-process-description") ||
                  "Un approccio metodico e trasparente per creare il software perfetto per la tua azienda"}
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {[
                {
                  icon: "material-symbols:search",
                  title: "Analisi",
                  description: "Studio approfondito dei requisiti",
                  number: "01",
                },
                {
                  icon: "material-symbols:map",
                  title: "Mapping",
                  description: "Mappatura dei processi aziendali",
                  number: "02",
                },
                {
                  icon: "material-symbols:architecture",
                  title: "Progettazione",
                  description: "Architettura e design del sistema",
                  number: "03",
                },
                {
                  icon: "material-symbols:design-services",
                  title: "UI/UX",
                  description: "Interfacce intuitive e moderne",
                  number: "04",
                },
                {
                  icon: "material-symbols:code",
                  title: "Sviluppo",
                  description: "Codice pulito e scalabile",
                  number: "05",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg h-56 flex flex-col justify-center">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <div className="text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={step.icon}
                          className="h-7 w-7 text-gray-700 dark:text-gray-300"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-4 h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2 z-10" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
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
                {t("custom-solutions-title") || "Le Nostre Soluzioni"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("custom-solutions-description") ||
                  "Software enterprise per digitalizzare e ottimizzare ogni aspetto del tuo business"}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black dark:bg-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={solution.icon}
                      className="h-8 w-8 text-white dark:text-black"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon
                          icon="material-symbols:check-circle"
                          className="h-4 w-4 text-black dark:text-white flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
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
                {t("custom-industries-title") || "Settori di Specializzazione"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("custom-industries-description") ||
                  "Esperienza comprovata in diversi settori industriali"}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${industry.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <Icon
                      icon={industry.icon}
                      className="h-8 w-8 mx-auto text-gray-700 dark:text-gray-300 mb-3"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {industry.name}
                    </span>
                  </div>
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
                {t("custom-technologies-title") || "Tecnologie Enterprise"}
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
                {t("custom-cta-title") ||
                  "Pronto a Digitalizzare la Tua Azienda?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700">
                {t("custom-cta-description") ||
                  "Trasforma i tuoi processi con software su misura. Contattaci per una consulenza gratuita"}
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
