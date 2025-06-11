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

const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function StartupMVP() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const mvpFeatures = [
    t("mvp-rapid-prototype") || "Prototipo Rapido",
    t("mvp-market-validation") || "Validazione Idea",
    "Go-to-Market",
    t("mvp-tech-stack") || "Scalabilità",
    "Feedback Loop",
    "Pivot Strategy",
  ];

  const bentoItems = [
    {
      title: t("mvp-rapid-prototype") || "Prototipo Rapido",
      description:
        t("mvp-rapid-description") ||
        "Trasformiamo la tua idea in un MVP funzionante in 4-8 settimane, permettendoti di testare il mercato velocemente e ottenere feedback reali dagli utenti.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              icon="pajamas:rocket-launch"
              className="h-12 w-12 text-gray-600 dark:text-gray-400"
            />
          </motion.div>
        </div>
      ),
      icon: (
        <Icon
          icon="pajamas:rocket-launch"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
    {
      title: t("mvp-market-validation") || "Validazione Mercato",
      description:
        t("mvp-validation-description") ||
        "Metodologie data-driven per validare la tua idea prima di investimenti importanti. Analytics avanzate e A/B testing integrati.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              icon="material-symbols:analytics"
              className="h-12 w-12 text-gray-600 dark:text-gray-400"
            />
          </motion.div>
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:analytics"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("mvp-tech-stack") || "Stack Tecnologico",
      description:
        t("mvp-tech-description") ||
        "Scelta ottimale delle tecnologie per garantire scalabilità, performance e mantenibilità del tuo prodotto nel lungo termine.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <motion.div
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              icon="material-symbols:code-blocks"
              className="h-12 w-12 text-gray-600 dark:text-gray-400"
            />
          </motion.div>
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:code-blocks"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("mvp-lean-approach") || "Approccio Lean",
      description:
        t("mvp-lean-description") ||
        "Metodologia Lean Startup per massimizzare l'apprendimento con il minimo sforzo. Cicli Build-Measure-Learn ottimizzati per il successo.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              icon="material-symbols:cycle"
              className="h-12 w-12 text-gray-600 dark:text-gray-400"
            />
          </motion.div>
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:cycle"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
  ];

  const technologies = [
    { name: "React", icon: "logos:react" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "AWS", icon: "logos:aws" },
    { name: "Docker", icon: "logos:docker-icon" },
  ];

  const process = [
    {
      step: "01",
      title: t("mvp-step-1") || "Discovery & Strategia",
      description:
        t("mvp-step-1-desc") ||
        "Analizziamo la tua idea, il mercato target e definiamo gli obiettivi del MVP",
      icon: "material-symbols:lightbulb",
      color: "from-gray-400 to-gray-500",
    },
    {
      step: "02",
      title: t("mvp-step-2") || "Design & Prototipazione",
      description:
        t("mvp-step-2-desc") ||
        "Creiamo wireframe, mockup e prototipi interattivi per validare l'UX",
      icon: "material-symbols:design-services",
      color: "from-gray-500 to-gray-600",
    },
    {
      step: "03",
      title: t("mvp-step-3") || "Sviluppo Agile",
      description:
        t("mvp-step-3-desc") ||
        "Sviluppiamo il MVP con metodologia agile, rilasci frequenti e feedback continuo",
      icon: "material-symbols:code",
      color: "from-gray-600 to-gray-700",
    },
    {
      step: "04",
      title: t("mvp-step-4") || "Test & Lancio",
      description:
        t("mvp-step-4-desc") ||
        "Testing completo, deployment e supporto al go-to-market con metriche di successo",
      icon: "pajamas:rocket-launch",
      color: "from-gray-700 to-gray-800",
    },
  ];

  const benefits = [
    t("mvp-benefit-1") || "Time-to-market ridotto del 70%",
    t("mvp-benefit-2") || "Rischio d'investimento minimizzato",
    t("mvp-benefit-3") || "Feedback reali da utenti target",
    t("mvp-benefit-4") || "Iterazioni basate sui dati",
    t("mvp-benefit-5") || "Scalabilità garantita",
    t("mvp-benefit-6") || "Supporto continuo post-lancio",
  ];

  const pricingPlans = [
    {
      name: "Startup Basic",
      duration: "4-6 settimane",
      description: "Perfetto per validare la tua idea rapidamente",
      features: [
        "MVP Web App",
        "Design System Base",
        "Auth & User Management",
        "Database Setup",
        "Hosting & Deploy",
        "1 mese supporto",
      ],
      color: "from-gray-500 to-gray-600",
      popular: false,
      icon: "material-symbols:rocket-launch",
    },
    {
      name: "Startup Pro",
      duration: "6-8 settimane",
      description: "Soluzione completa per startup ambiziose",
      features: [
        "MVP Web + Mobile",
        "Design System Avanzato",
        "Analytics Integrate",
        "API Complete",
        "CI/CD Pipeline",
        "3 mesi supporto",
        "Growth Hacking Tools",
      ],
      color: "from-gray-800 to-gray-900",
      popular: true,
      icon: "material-symbols:trending-up",
    },
    {
      name: "Enterprise MVP",
      duration: "8-12 settimane",
      description: "Piattaforma scalabile per aziende",
      features: [
        "Piattaforma Completa",
        "Scalabilità Enterprise",
        "Integrazioni Avanzate",
        "Security Compliant",
        "DevOps Completo",
        "6 mesi supporto",
        "Consulenza Strategica",
      ],
      color: "from-gray-600 to-gray-700",
      popular: false,
      icon: "material-symbols:enterprise",
    },
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("startup-mvp") || "MVP per Startup"}`}
        description={
          t("mvp-meta-description") ||
          "Trasformiamo la tua idea in MVP funzionante in 4-8 settimane. Validazione mercato, tecnologie scalabili e metodologia Lean Startup."
        }
        keywords={`mvp startup, prototipo rapido, validazione mercato, lean startup, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/startup-mvp`}
        alternateUrls={{
          it: "/it/services/startup-mvp",
          en: "/en/services/startup-mvp",
          "x-default": "/services/startup-mvp",
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
            <motion.div
              className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 blur-3xl opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
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
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-black dark:bg-white shadow-lg"
              >
                <Icon
                  icon="pajamas:rocket-launch"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <div className="mb-8">
                <MorphingText
                  texts={mvpFeatures}
                  className="text-lg font-medium text-gray-600 dark:text-gray-400"
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
                  {t("mvp-hero-title") || "MVP per Startup"}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mvp-hero-description") ||
                  "Trasformiamo la tua idea rivoluzionaria in un MVP funzionante e scalabile. Validazione del mercato, tecnologie all'avanguardia e metodologia Lean Startup per il successo della tua startup"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("start-mvp") || "Inizia il tuo MVP"}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t("view-success-stories") || "Storie di Successo"}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:schedule"
                    className="h-4 w-4 mr-2"
                  />
                  <span>4-8 settimane</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:verified"
                    className="h-4 w-4 mr-2"
                  />
                  <span>Metodologia Lean</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:trending-up"
                    className="h-4 w-4 mr-2"
                  />
                  <span>Scalabilità garantita</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 blur-3xl opacity-15"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mvp-process-title") || "Il Nostro Processo MVP"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mvp-process-description") ||
                  "Un percorso strutturato dalla tua idea al prodotto che conquista il mercato"}
              </motion.p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"></div>

              <div className="space-y-12">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          y: -5,
                          transition: { duration: 0.3 },
                        }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
                      >
                        {/* Gradient background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-3xl`}
                        ></div>

                        <div className="relative z-10">
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mr-4`}
                            >
                              <Icon
                                icon={step.icon}
                                className="h-8 w-8 text-white"
                              />
                            </div>
                            <div
                              className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                            >
                              {step.step}
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} shadow-lg border-4 border-white dark:border-gray-900`}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                          className={`w-full h-full rounded-full bg-gradient-to-r ${step.color}`}
                        ></motion.div>
                      </div>
                    </motion.div>

                    {/* Empty space for alternating layout */}
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mvp-pricing-title") || "Pacchetti MVP"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mvp-pricing-description") ||
                  "Soluzioni personalizzate per ogni fase della tua startup"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular
                      ? "border-gray-900 dark:border-gray-200 scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 text-white dark:text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        {t("mvp-popular") || "Più Popolare"}
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon icon={plan.icon} className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {plan.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>

                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <Icon
                        icon="material-symbols:schedule"
                        className="h-4 w-4"
                      />
                      <span>{plan.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3 group-hover:bg-gray-900 dark:group-hover:bg-gray-200 transition-colors duration-300">
                          <Icon
                            icon="material-symbols:check"
                            className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                          />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white dark:from-gray-200 dark:to-gray-100 dark:text-black hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-300 dark:hover:to-gray-200"
                          : "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                      } shadow-lg hover:shadow-xl transition-all duration-300`}
                      size="lg"
                      onClick={handleContactClick}
                      endContent={
                        <Icon icon="material-symbols:arrow-forward" />
                      }
                    >
                      {t("get-quote") || "Richiedi Preventivo"}
                    </Button>

                    <Button
                      variant="bordered"
                      className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      size="lg"
                    >
                      {t("learn-more") || "Scopri di Più"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {t("custom-pricing-note") ||
                  "Ogni progetto è unico. Contattaci per un preventivo personalizzato."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mvp-tech-title") || "Stack Tecnologico"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mvp-tech-description") ||
                  "Tecnologie moderne e scalabili per costruire il tuo MVP"}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Icon icon={tech.icon} className="h-12 w-12 mb-4" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("mvp-benefits-title") || "Vantaggi del Nostro Approccio"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("mvp-benefits-description") ||
                  "Risultati concreti che fanno la differenza per la tua startup"}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <Icon
                      icon="material-symbols:check"
                      className="h-5 w-5 text-white dark:text-black"
                    />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black dark:bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl">
                {t("mvp-cta-title") ||
                  "Pronto a Trasformare la Tua Idea in Realtà?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200 dark:text-gray-700">
                {t("mvp-cta-description") ||
                  "Parla con i nostri esperti e scopri come possiamo aiutarti a creare un MVP di successo"}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  size="lg"
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("start-now") || "Inizia Ora"}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-white text-white dark:border-black dark:text-black hover:bg-white/10 dark:hover:bg-black/10"
                >
                  {t("book-call") || "Prenota una Call"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
