import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MorphingText } from "../../Components/magicui/morphing-text";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";
import ServiceHero from "../../Components/ServiceHero";

export default function ApiDevelopment() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  // Get morphing text types from translations
  const apiServices = (
    t("api-services-morphing") ||
    "API REST|GraphQL|Microservizi|API Gateway|Documentazione|Testing"
  ).split("|");

  const codeSnippets = [
    "GET /api/users",
    "POST /api/auth/login",
    "PUT /api/products/{id}",
    "DELETE /api/orders/{id}",
    "PATCH /api/profile",
  ];

  const apiFlow = [
    {
      step: "Client",
      icon: "material-symbols:computer",
      color: "from-gray-600 to-gray-700",
    },
    {
      step: "API Gateway",
      icon: "material-symbols:router",
      color: "from-gray-700 to-gray-800",
    },
    {
      step: "Authentication",
      icon: "material-symbols:security",
      color: "from-gray-800 to-gray-900",
    },
    {
      step: "Business Logic",
      icon: "material-symbols:settings",
      color: "from-gray-700 to-gray-800",
    },
    {
      step: "Database",
      icon: "material-symbols:database",
      color: "from-gray-600 to-gray-700",
    },
  ];

  const apiTechnologies = [
    {
      name: "Node.js",
      description: "Runtime JavaScript per API performanti",
      icon: "logos:nodejs-icon",
      category: "Backend",
    },
    {
      name: "Express.js",
      description: "Framework web veloce e minimalista",
      icon: "simple-icons:express",
      category: "Framework",
    },
    {
      name: "GraphQL",
      description: "Query language per API moderne",
      icon: "logos:graphql",
      category: "Query Language",
    },
    {
      name: "OpenAPI",
      description: "Documentazione API standardizzata",
      icon: "simple-icons:openapiinitiative",
      category: "Documentation",
    },
    {
      name: "Docker",
      description: "Containerizzazione per deployment",
      icon: "logos:docker-icon",
      category: "DevOps",
    },
    {
      name: "Kubernetes",
      description: "Orchestrazione container",
      icon: "logos:kubernetes",
      category: "Orchestration",
    },
  ];

  const benefits = [
    {
      icon: "material-symbols:integration-instructions",
      title: t("api-benefit-integration-title") || "Integrazione Perfetta",
      description:
        t("api-benefit-integration-description") ||
        "Collega sistemi e applicazioni senza sforzo",
      metric: "99.9%",
      metricLabel: "Uptime",
    },
    {
      icon: "material-symbols:trending-up",
      title: t("api-benefit-scalability-title") || "Scalabilità Infinita",
      description:
        t("api-benefit-scalability-description") ||
        "API che crescono con le esigenze del tuo business",
      metric: "10x",
      metricLabel: "Scalabilità",
    },
    {
      icon: "material-symbols:security",
      title: t("api-benefit-security-title") || "Sicurezza Enterprise",
      description:
        t("api-benefit-security-description") ||
        "Autenticazione e autorizzazione avanzate",
      metric: "256-bit",
      metricLabel: "Encryption",
    },
    {
      icon: "material-symbols:speed",
      title: t("api-benefit-performance-title") || "Alte Performance",
      description:
        t("api-benefit-performance-description") ||
        "Ottimizzate per velocità ed efficienza",
      metric: "<100ms",
      metricLabel: "Response Time",
    },
  ];

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <SEO
        title={
          t("api-development-meta-title") ||
          "Space Design Italia - Sviluppo API"
        }
        description={
          t("api-development-meta-description") ||
          "Servizi di sviluppo API professionali. REST, GraphQL, microservizi e integrazioni per applicazioni moderne e scalabili."
        }
        keywords={`sviluppo api, rest api, graphql, microservizi, integrazioni, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/api-development`}
        alternateUrls={{
          it: "/it/services/api-development",
          en: "/en/services/api-development",
          "x-default": "/services/api-development",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ServiceHero
          title="Connetti il tuo ecosistema digitale"
          description={
            t("api-development-hero-description") ||
            "Creiamo API robuste, sicure e ben documentate che collegano i tuoi sistemi e abilitano integrazioni perfette. Da REST a GraphQL, costruiamo la spina dorsale digitale delle tue applicazioni."
          }
          buttonText={
            t("api-development-request-consultation") || "Richiedi Consulenza"
          }
        />

        {/* API Services with Interactive Cards */}
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
                {t("api-services-title") || "I Nostri Servizi API"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("api-services-description") ||
                  "Soluzioni API complete per ogni esigenza di integrazione. Dal design al deployment, creiamo API che crescono con il tuo business."}
              </p>
            </motion.div>

            {/* Interactive Service Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "REST APIs",
                  description:
                    "API RESTful seguendo le best practices del settore",
                  icon: "material-symbols:api",
                  features: [
                    "OpenAPI Spec",
                    "Authentication",
                    "Rate Limiting",
                    "Testing Completo",
                  ],
                  color: "from-gray-800 to-gray-900",
                },
                {
                  title: "GraphQL APIs",
                  description: "API moderne con query flessibili e type safety",
                  icon: "material-symbols:query-stats",
                  features: [
                    "Type Safety",
                    "Real-time Subscriptions",
                    "Schema Introspection",
                    "Developer Tools",
                  ],
                  color: "from-gray-700 to-gray-800",
                },
                {
                  title: "Microservizi",
                  description: "Architetture scalabili e indipendenti",
                  icon: "material-symbols:hub",
                  features: [
                    "Service Discovery",
                    "Load Balancing",
                    "Circuit Breaker",
                    "Distributed Tracing",
                  ],
                  color: "from-gray-800 to-gray-900",
                },
                {
                  title: "API Gateway",
                  description: "Gestione centralizzata del traffico API",
                  icon: "material-symbols:account-tree",
                  features: [
                    "Protocol Translation",
                    "Request Transformation",
                    "Traffic Management",
                    "Analytics",
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

        {/* Technologies with Animated Grid */}
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
                {t("api-technologies-title") || "Tecnologie che Utilizziamo"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("api-technologies-description") ||
                  "Utilizziamo le migliori tecnologie e framework per creare API moderne e performanti"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apiTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon icon={tech.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.description}
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
                {t("api-benefits-title") || "Vantaggi dello Sviluppo API"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("api-benefits-description") ||
                  "Scopri come le API professionali possono trasformare le integrazioni del tuo business"}
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
            t("faq-subtitle-api") ||
            "Risposte alle domande più comuni sullo sviluppo API"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-api") || "Parliamo del tuo progetto API"
          }
          benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("api-faq-question-1") || "Le nostre API saranno sicure?",
              answer:
                t("api-faq-answer-1") ||
                "Implementiamo autenticazione OAuth 2.0, crittografia end-to-end e rate limiting avanzato per garantire massima sicurezza.",
              icon: "material-symbols:security",
              delay: 0.1,
            },
            {
              question:
                t("api-faq-question-2") ||
                "Quanto tempo richiede l'integrazione?",
              answer:
                t("api-faq-answer-2") ||
                "Dalle 2-4 settimane per API semplici fino a 8-12 settimane per sistemi complessi, con metodologia agile.",
              icon: "material-symbols:schedule",
              delay: 0.2,
            },
            {
              question:
                t("api-faq-question-3") ||
                "Le API si adatteranno alla crescita?",
              answer:
                t("api-faq-answer-3") ||
                "Progettiamo architetture scalabili che crescono automaticamente con il tuo business senza compromessi.",
              icon: "material-symbols:trending-up",
              delay: 0.3,
            },
            {
              question:
                t("api-faq-question-4") || "Fornite documentazione completa?",
              answer:
                t("api-faq-answer-4") ||
                "Forniamo documentazione OpenAPI interattiva e guide per sviluppatori dettagliate per facilitare l'integrazione.",
              icon: "material-symbols:description",
              delay: 0.4,
            },
            {
              question:
                t("api-faq-question-5") || "Che supporto post-lancio offrite?",
              answer:
                t("api-faq-answer-5") ||
                "Monitoraggio 24/7, manutenzione proattiva e supporto tecnico dedicato per garantire performance ottimali.",
              icon: "material-symbols:support-agent",
              delay: 0.5,
            },
            {
              question:
                t("api-faq-question-6") || "Possiamo integrare sistemi legacy?",
              answer:
                t("api-faq-answer-6") ||
                "Sì, creiamo bridge API per collegare sistemi legacy con moderne architetture cloud-native.",
              icon: "material-symbols:integration-instructions",
              delay: 0.6,
            },
          ]}
        />

        {/* CTA Section */}
        <ServiceCTA
          title={t("api-cta-title") || "Pronto a Costruire le Tue API?"}
          subtitle={
            t("api-cta-description") ||
            "Trasforma le tue integrazioni con API professionali. Contattaci per una consulenza personalizzata e scopri come possiamo connettere il tuo ecosistema digitale."
          }
          buttonText={t("api-cta-button") || "Contattaci Ora"}
          secondaryButtonText={
            t("view-case-studies") || "Vedi i nostri progetti"
          }
        />
      </div>
    </>
  );
}
