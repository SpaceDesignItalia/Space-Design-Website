import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MorphingText } from "../../Components/magicui/morphing-text";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";

export default function CloudIntegration() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  // Get morphing text types from translations
  const cloudServices = (
    t("cloud-services-morphing") ||
    "Migrazione Cloud|Architettura Cloud|Ottimizzazione Costi|Disaster Recovery|Monitoraggio Avanzato|Automazione DevOps"
  ).split("|");

  const cloudElements = [
    "AWS EC2",
    "Azure Functions",
    "Google Cloud Run",
    "Kubernetes",
    "Docker Containers",
  ];

  const cloudFlow = [
    {
      step: "Assessment",
      icon: "material-symbols:analytics",
      color: "from-gray-600 to-gray-700",
    },
    {
      step: "Migration Plan",
      icon: "material-symbols:route",
      color: "from-gray-700 to-gray-800",
    },
    {
      step: "Implementation",
      icon: "material-symbols:build",
      color: "from-gray-800 to-gray-900",
    },
    {
      step: "Optimization",
      icon: "material-symbols:tune",
      color: "from-gray-700 to-gray-800",
    },
    {
      step: "Monitoring",
      icon: "material-symbols:monitoring",
      color: "from-gray-600 to-gray-700",
    },
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "Piattaforma cloud leader mondiale",
      icon: "logos:aws",
      category: "Public Cloud",
    },
    {
      name: "Microsoft Azure",
      description: "Soluzione cloud enterprise Microsoft",
      icon: "logos:microsoft-azure",
      category: "Enterprise",
    },
    {
      name: "Google Cloud Platform",
      description: "Infrastruttura cloud di Google",
      icon: "logos:google-cloud",
      category: "AI/ML Focus",
    },
    {
      name: "Docker & Kubernetes",
      description: "Containerizzazione e orchestrazione",
      icon: "logos:docker-icon",
      category: "Container Platform",
    },
    {
      name: "Terraform",
      description: "Infrastructure as Code",
      icon: "logos:terraform-icon",
      category: "IaC",
    },
    {
      name: "Serverless",
      description: "Computing senza server",
      icon: "material-symbols:cloud-sync",
      category: "Serverless",
    },
  ];

  const benefits = [
    {
      icon: "material-symbols:savings",
      title: t("cloud-benefit-cost-title") || "Riduzione Costi",
      description:
        t("cloud-benefit-cost-description") ||
        "Fino al 60% di riduzione dei costi IT",
      metric: "60%",
      metricLabel: "Cost Reduction",
    },
    {
      icon: "material-symbols:trending-up",
      title: t("cloud-benefit-scalability-title") || "Scalabilità Automatica",
      description:
        t("cloud-benefit-scalability-description") ||
        "Risorse che si adattano automaticamente",
      metric: "∞",
      metricLabel: "Scalability",
    },
    {
      icon: "material-symbols:security",
      title: t("cloud-benefit-security-title") || "Sicurezza Enterprise",
      description:
        t("cloud-benefit-security-description") ||
        "Protezione avanzata e compliance",
      metric: "99.9%",
      metricLabel: "Security SLA",
    },
    {
      icon: "material-symbols:speed",
      title: t("cloud-benefit-performance-title") || "Performance Ottimizzate",
      description:
        t("cloud-benefit-performance-description") ||
        "Prestazioni superiori e latenza ridotta",
      metric: "<50ms",
      metricLabel: "Latency",
    },
  ];

  return (
    <>
      <SEO
        title={
          t("cloud-integration-meta-title") ||
          "Space Design Italia - Integrazione Cloud"
        }
        description={
          t("cloud-integration-meta-description") ||
          "Servizi di integrazione cloud professionali. Migrazione, architettura, serverless e ottimizzazione per AWS, Azure e Google Cloud."
        }
        keywords={`integrazione cloud, aws, azure, google cloud, migrazione cloud, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/cloud-integration`}
        alternateUrls={{
          it: "/it/services/cloud-integration",
          en: "/en/services/cloud-integration",
          "x-default": "/services/cloud-integration",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section with Cloud Animation */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
                >
                  <Icon
                    icon="material-symbols:cloud-outline"
                    className="h-5 w-5 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {t("cloud-integration") || "Integrazione Cloud"}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-300">
                    Trasforma la tua
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100">
                    infrastruttura IT
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                    <span>Offriamo</span>
                    <MorphingText
                      texts={cloudServices}
                      className="text-lg font-medium text-gray-600 dark:text-gray-400"
                    />
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8"
                >
                  {t("cloud-integration-hero-description") ||
                    "Trasformiamo la tua infrastruttura IT con soluzioni cloud moderne, scalabili e sicure. Dalla migrazione all'ottimizzazione, ti accompagniamo in ogni fase del tuo percorso cloud."}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg"
                    endContent={<Icon icon="material-symbols:arrow-forward" />}
                    onClick={handleContactClick}
                  >
                    {t("cloud-integration-request-consultation") ||
                      "Richiedi Consulenza"}
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-4 w-4 text-green-500"
                    />
                    <span>Assessment gratuito della tua infrastruttura</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Cloud Migration Flow */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cloud Migration Flow
                    </span>
                  </div>

                  <div className="space-y-4">
                    {cloudFlow.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg">
                          <Icon
                            icon={item.icon}
                            className="h-5 w-5 text-white dark:text-black"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.step}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Step {index + 1}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cloud Services with Interactive Cards */}
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
                {t("cloud-services-title") || "I Nostri Servizi Cloud"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("cloud-services-description") ||
                  "Soluzioni cloud complete per ogni esigenza aziendale. Dalla migrazione all'ottimizzazione, ti supportiamo in ogni fase della trasformazione digitale."}
              </p>
            </motion.div>

            {/* Interactive Service Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Migrazione Cloud",
                  description:
                    "Migrazione sicura e ottimizzata dei tuoi sistemi esistenti",
                  icon: "material-symbols:cloud-sync",
                  features: [
                    "Assessment Completo",
                    "Piano Migrazione",
                    "Minimizza Rischi",
                    "Support 24/7",
                  ],
                  color: "from-gray-800 to-gray-900",
                },
                {
                  title: "Architettura Cloud",
                  description:
                    "Progettazione di infrastrutture scalabili e sicure",
                  icon: "material-symbols:architecture",
                  features: [
                    "Microservizi",
                    "Kubernetes",
                    "Auto-scaling",
                    "Alta Disponibilità",
                  ],
                  color: "from-gray-700 to-gray-800",
                },
                {
                  title: "Serverless Computing",
                  description:
                    "Soluzioni serverless per ridurre costi e aumentare scalabilità",
                  icon: "material-symbols:bolt",
                  features: [
                    "AWS Lambda",
                    "Event-Driven",
                    "Zero Manutenzione",
                    "Cost Effective",
                  ],
                  color: "from-gray-800 to-gray-900",
                },
                {
                  title: "Monitoraggio e Ottimizzazione",
                  description:
                    "Sistemi avanzati per performance e cost optimization",
                  icon: "material-symbols:monitoring",
                  features: [
                    "Real-time Monitoring",
                    "Cost Optimization",
                    "Security Alerts",
                    "Custom Dashboard",
                  ],
                  color: "from-gray-700 to-gray-800",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon
                          icon={service.icon}
                          className="h-8 w-8 text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + featureIndex * 0.05,
                          }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers with Animated Grid */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
                {t("cloud-providers-title") || "Piattaforme Cloud"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("cloud-providers-description") ||
                  "Lavoriamo con le migliori piattaforme cloud del mercato"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudProviders.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon icon={provider.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {provider.name}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {provider.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {provider.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits with Metrics */}
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
                {t("cloud-benefits-title") ||
                  "Vantaggi dell'Integrazione Cloud"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("cloud-benefits-description") ||
                  "Scopri come il cloud può trasformare il tuo business"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon
                        icon={benefit.icon}
                        className="h-8 w-8 text-white dark:text-gray-900"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {benefit.metricLabel}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("faq-title") || "Domande Frequenti"}
          subtitle={
            t("faq-subtitle-cloud") ||
            "Risposte alle domande più comuni sull'integrazione cloud"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-cloud") || "Parliamo della tua migrazione cloud"
          }
          benefitText={t("faq-benefit-assessment") || "Assessment gratuito"}
          faqs={[
            {
              question:
                t("cloud-faq-question-1") || "La migrazione causerà downtime?",
              answer:
                t("cloud-faq-answer-1") ||
                "Pianifichiamo le migrazioni per minimizzare il downtime, spesso ottenendo migrazioni a downtime zero attraverso approcci graduali e load balancing.",
              icon: "material-symbols:cloud-sync",
              delay: 0.1,
            },
            {
              question:
                t("cloud-faq-question-2") ||
                "Quanto possiamo risparmiare con il cloud?",
              answer:
                t("cloud-faq-answer-2") ||
                "Tipicamente 30-60% di riduzione dei costi IT attraverso uso ottimizzato delle risorse, eliminazione manutenzione hardware e modelli pay-as-you-use.",
              icon: "material-symbols:savings",
              delay: 0.2,
            },
            {
              question:
                t("cloud-faq-question-3") ||
                "Quale piattaforma cloud è migliore?",
              answer:
                t("cloud-faq-answer-3") ||
                "Analizziamo le vostre esigenze specifiche per raccomandare AWS, Azure o Google Cloud basandoci sui vostri requisiti, budget e infrastruttura esistente.",
              icon: "material-symbols:cloud",
              delay: 0.3,
            },
            {
              question:
                t("cloud-faq-question-4") ||
                "Come garantite la sicurezza cloud?",
              answer:
                t("cloud-faq-answer-4") ||
                "Attraverso sicurezza multi-livello: crittografia, controlli accesso, monitoraggio, framework di compliance e audit di sicurezza regolari.",
              icon: "material-symbols:security",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section with Interactive Elements */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black dark:from-gray-100 dark:to-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/10 dark:bg-black/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl mb-6">
                {t("cloud-cta-title") || "Pronto per il Cloud?"}
              </h2>
              <p className="text-lg leading-8 text-gray-300 dark:text-gray-700 mb-10">
                {t("cloud-cta-description") ||
                  "Inizia la tua trasformazione digitale oggi stesso. Contattaci per una consulenza personalizzata e scopri come il cloud può rivoluzionare il tuo business."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 shadow-xl px-8 py-4"
                  onClick={handleContactClick}
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                >
                  {t("cloud-cta-button") || "Contattaci Ora"}
                </Button>

                <div className="flex items-center gap-4 text-white/80 dark:text-black/80">
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="material-symbols:schedule"
                      className="h-5 w-5"
                    />
                    <span className="text-sm">Assessment gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="material-symbols:verified"
                      className="h-5 w-5"
                    />
                    <span className="text-sm">Consulenza inclusa</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
