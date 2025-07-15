import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceHero from "../../Components/ServiceHero";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";

export default function ApiDevelopment() {
  const { t, language } = useLanguage();

  const apiServices = [
    {
      title: "REST APIs",
      description: "API RESTful seguendo le best practices del settore",
      icon: "material-symbols:api",
      features: [
        "OpenAPI Spec",
        "Authentication",
        "Rate Limiting",
        "Testing Completo",
      ],
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
    },
    {
      title: "API Gateway",
      description: "Gestione centralizzata del traffico API",
      icon: "material-symbols:account-tree",
      features: [
        "Protocol Translation",
        "Rate Limiting",
        "Authentication",
        "Monitoring",
      ],
    },
  ];

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
        {/* Hero Section */}
        <ServiceHero
          title={
            t("api-development-hero-title") ||
            "Connetti il tuo ecosistema digitale"
          }
          description={
            t("api-development-hero-description") ||
            "Creiamo API robuste, sicure e ben documentate che collegano i tuoi sistemi e abilitano integrazioni perfette. Da REST a GraphQL, costruiamo la spina dorsale digitale delle tue applicazioni."
          }
          buttonText={
            t("api-development-request-consultation") || "Richiedi Consulenza"
          }
        />

        {/* API Services Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
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

            <div className="grid lg:grid-cols-2 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-900 to-black rounded-lg flex items-center justify-center">
                        <Icon
                          icon={service.icon}
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <Icon
                          icon="material-symbols:check-circle"
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("api-faq-title") || "Domande Frequenti"}
          subtitle={
            t("api-faq-subtitle") ||
            "Risposte alle domande più comuni sullo sviluppo API"
          }
          ctaText={t("api-faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("api-faq-cta-subtext") || "Parliamo del tuo progetto API"
          }
          benefitText={t("api-faq-benefit-text") || "Consulenza gratuita"}
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
        />
      </div>
    </>
  );
}
