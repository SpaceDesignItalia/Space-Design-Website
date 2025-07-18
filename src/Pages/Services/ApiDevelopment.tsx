import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceHero from "../../Components/ServiceHero";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";

export default function ApiDevelopment() {
  const { t, language } = useLanguage();

  const apiFeatures = [
    {
      icon: "material-symbols:shield",
      title: "Sicurezza Enterprise",
      description:
        "Autenticazione OAuth 2.0, rate limiting e crittografia end-to-end",
    },
    {
      icon: "material-symbols:speed",
      title: "Performance Ottimizzata",
      description:
        "Caching intelligente, compressione e load balancing automatico",
    },
    {
      icon: "material-symbols:monitoring",
      title: "Monitoraggio Real-time",
      description: "Metriche dettagliate, alerting e analytics avanzati",
    },
    {
      icon: "material-symbols:code",
      title: "Documentazione Completa",
      description: "OpenAPI specs, SDK e guide per sviluppatori",
    },
  ];

  const apiExamples = [
    {
      type: "REST API",
      code: `GET /api/users/{id}
POST /api/users
PUT /api/users/{id}
DELETE /api/users/{id}`,
      description: "API RESTful standard con metodi HTTP convenzionali",
    },
    {
      type: "GraphQL",
      code: `query {
  user(id: "123") {
    name
    email
    posts {
      title
      content
    }
  }
}`,
      description: "Query flessibili con type safety e schema introspection",
    },
    {
      type: "WebSocket",
      code: `ws://api.example.com/events
{
  "type": "notification",
  "data": {
    "message": "Real-time update"
  }
}`,
      description: "Comunicazione bidirezionale per applicazioni real-time",
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

      <div className="min-h-screen bg-white">
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

        {/* Features Section */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Caratteristiche delle Nostre API
              </h2>
              <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
                Ogni API che sviluppiamo include funzionalità enterprise per
                garantire affidabilità e scalabilità
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-12">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group w-80"
                >
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={feature.icon}
                      className="w-10 h-10 text-white"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Esempi di API
              </h2>
              <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
                Diamo vita alle tue idee con implementazioni concrete e
                funzionali
              </p>
            </motion.div>

            <div className="space-y-16">
              {apiExamples.map((example, index) => (
                <motion.div
                  key={example.type}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } gap-16`}
                >
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-black mb-6">
                      {example.type}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 leading-relaxed mb-8">
                      {example.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-black rounded-3xl p-8 text-white">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
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
