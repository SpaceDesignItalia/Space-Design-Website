import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceHero from "../../Components/ServiceHero";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";

export default function CloudIntegration() {
  const { t, language } = useLanguage();

  const cloudServices = [
    {
      title: "Migrazione Cloud",
      description:
        "Migrazione sicura e pianificata di applicazioni e dati verso piattaforme cloud moderne.",
      icon: "material-symbols:cloud-upload",
      features: [
        "Analisi Preliminare",
        "Strategia di Migrazione",
        "Testing Completo",
        "Go-Live Supportato",
      ],
    },
    {
      title: "Multi-Cloud Strategy",
      description:
        "Gestione di infrastrutture distribuite su più provider cloud per massima flessibilità.",
      icon: "material-symbols:account-tree",
      features: ["AWS", "Azure", "Google Cloud", "Orchestrazione Unificata"],
    },
    {
      title: "Cloud Security",
      description:
        "Implementazione di sicurezza avanzata per proteggere applicazioni e dati nel cloud.",
      icon: "material-symbols:security",
      features: [
        "Identity Management",
        "Data Encryption",
        "Compliance",
        "Threat Detection",
      ],
    },
    {
      title: "Cloud Optimization",
      description:
        "Ottimizzazione costi e performance per massimizzare l'efficienza delle risorse cloud.",
      icon: "material-symbols:trending-up",
      features: [
        "Cost Optimization",
        "Performance Tuning",
        "Auto-scaling",
        "Monitoring",
      ],
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
          "Servizi di integrazione cloud professionali. Migrazione, multi-cloud, sicurezza e ottimizzazione per applicazioni moderne."
        }
        keywords={`cloud integration, aws, azure, google cloud, migration, ${t(
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
        {/* Hero Section */}
        <ServiceHero
          title={
            t("cloud-integration-hero-title") ||
            "Trasforma il tuo business nel cloud"
          }
          description={
            t("cloud-integration-hero-description") ||
            "Accelera la tua trasformazione digitale con soluzioni cloud moderne. Migrazione sicura, strategie multi-cloud e ottimizzazione per massimizzare efficienza e scalabilità."
          }
          buttonText={
            t("cloud-integration-request-consultation") || "Richiedi Consulenza"
          }
        />

        {/* Cloud Services Section */}
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
                {t("cloud-services-title") || "I Nostri Servizi Cloud"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("cloud-services-description") ||
                  "Soluzioni cloud complete per modernizzare la tua infrastruttura e accelerare l'innovazione digitale."}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
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
          title={t("cloud-faq-title") || "Domande Frequenti"}
          subtitle={
            t("cloud-faq-subtitle") ||
            "Risposte alle domande più comuni sull'integrazione cloud"
          }
          ctaText={t("cloud-faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("cloud-faq-cta-subtext") || "Parliamo della tua migrazione cloud"
          }
          benefitText={t("cloud-faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("cloud-faq-question-1") ||
                "Quanto tempo richiede una migrazione cloud?",
              answer:
                t("cloud-faq-answer-1") ||
                "Da 4-8 settimane per applicazioni semplici fino a 6-12 mesi per sistemi enterprise complessi, con approccio graduale e minimo downtime.",
              icon: "material-symbols:schedule",
              delay: 0.1,
            },
            {
              question:
                t("cloud-faq-question-2") ||
                "Quale provider cloud consigliate?",
              answer:
                t("cloud-faq-answer-2") ||
                "Valutiamo le vostre esigenze specifiche per consigliare AWS, Azure o Google Cloud. Spesso una strategia multi-cloud offre maggiore flessibilità.",
              icon: "material-symbols:cloud",
              delay: 0.2,
            },
            {
              question:
                t("cloud-faq-question-3") ||
                "Come gestite la sicurezza nel cloud?",
              answer:
                t("cloud-faq-answer-3") ||
                "Implementiamo best practices di sicurezza: crittografia end-to-end, gestione identità, compliance GDPR e monitoraggio continuo delle minacce.",
              icon: "material-symbols:security",
              delay: 0.3,
            },
            {
              question:
                t("cloud-faq-question-4") || "Possiamo ridurre i costi cloud?",
              answer:
                t("cloud-faq-answer-4") ||
                "Sì, ottimizziamo l'utilizzo delle risorse, implementiamo auto-scaling e strategie di risparmio per ridurre i costi del 30-50%.",
              icon: "material-symbols:savings",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <ServiceCTA
          title={t("cloud-cta-title") || "Pronto per la Trasformazione Cloud?"}
          subtitle={
            t("cloud-cta-description") ||
            "Accelera la tua trasformazione digitale con soluzioni cloud moderne. Contattaci per una consulenza personalizzata."
          }
          buttonText={t("cloud-cta-button") || "Inizia Ora"}
        />
      </div>
    </>
  );
}
