import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceHero from "../../Components/ServiceHero";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";

export default function DevOps() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const devopsServices = [
    {
      title: "Pipeline CI/CD",
      description:
        "Pipeline automatizzate per integrazione e deployment continui con testing, controlli di sicurezza e rollback automatici.",
      icon: "material-symbols:account-tree",
      features: [
        "Testing Automatizzato",
        "Scansione Sicurezza",
        "Automazione Deployment",
        "Meccanismi Rollback",
      ],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Gestione infrastrutture attraverso codice con Terraform, Ansible e CloudFormation per consistenza e scalabilità.",
      icon: "material-symbols:code",
      features: [
        "Terraform",
        "Ansible",
        "CloudFormation",
        "Controllo Versioni",
      ],
    },
    {
      title: "Orchestrazione Container",
      description:
        "Containerizzazione Docker e orchestrazione Kubernetes per applicazioni scalabili e portabili.",
      icon: "material-symbols:view-in-ar",
      features: [
        "Container Docker",
        "Kubernetes",
        "Service Mesh",
        "Auto-scaling",
      ],
    },
    {
      title: "Monitoraggio & Osservabilità",
      description:
        "Monitoraggio completo con metriche, log, trace e alerting intelligente per risoluzione proattiva dei problemi.",
      icon: "material-symbols:monitoring",
      features: [
        "Metriche & Log",
        "Tracing Distribuito",
        "Alerting Intelligente",
        "Dashboard Personalizzate",
      ],
    },
  ];

  return (
    <>
      <SEO
        title={t("devops-meta-title") || "Space Design Italia - DevOps & CI/CD"}
        description={
          t("devops-meta-description") ||
          "Servizi DevOps e CI/CD professionali. Automazione, pipeline di deployment, monitoraggio e ottimizzazione infrastrutture."
        }
        keywords={`devops, ci/cd, automation, docker, kubernetes, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/devops`}
        alternateUrls={{
          it: "/it/services/devops",
          en: "/en/services/devops",
          "x-default": "/services/devops",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <ServiceHero
          title={t("devops-hero-title") || "Accelera il tuo sviluppo"}
          description={
            t("devops-hero-description") ||
            "Accelera il tuo sviluppo con pratiche DevOps moderne. Pipeline automatizzate, integrazione continua, infrastructure as code e monitoraggio per deployment più veloci e affidabili."
          }
          buttonText={t("devops-request-consultation") || "Richiedi Consulenza"}
        />

        {/* DevOps Services Section */}
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
                {t("devops-services-title") || "I Nostri Servizi DevOps"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("devops-services-description") ||
                  "Soluzioni DevOps complete per accelerare il tuo sviluppo e migliorare l'affidabilità delle tue applicazioni."}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
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
          title={t("devops-faq-title") || "Domande Frequenti"}
          subtitle={
            t("devops-faq-subtitle") ||
            "Risposte alle domande più comuni su DevOps e CI/CD"
          }
          ctaText={t("devops-faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("devops-faq-cta-subtext") ||
            "Parliamo della tua trasformazione DevOps"
          }
          benefitText={t("devops-faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("devops-faq-question-1") ||
                "Quanto tempo richiede l'implementazione DevOps?",
              answer:
                t("devops-faq-answer-1") ||
                "Da 4-6 settimane per pipeline CI/CD base fino a 12-16 settimane per trasformazione DevOps completa, a seconda della complessità infrastrutturale e dimensione del team.",
              icon: "material-symbols:schedule",
              delay: 0.1,
            },
            {
              question:
                t("devops-faq-question-2") ||
                "Potete integrarvi con i nostri strumenti esistenti?",
              answer:
                t("devops-faq-answer-2") ||
                "Sì, ci integriamo con strumenti di sviluppo esistenti, sistemi di version control, piattaforme di monitoraggio e cloud provider per minimizzare le interruzioni.",
              icon: "material-symbols:integration-instructions",
              delay: 0.2,
            },
            {
              question:
                t("devops-faq-question-3") ||
                "Che dire della sicurezza nelle pipeline CI/CD?",
              answer:
                t("devops-faq-answer-3") ||
                "Implementiamo pratiche DevSecOps con scansioni di sicurezza automatizzate, test di vulnerabilità, controlli di compliance e gestione sicura dei segreti.",
              icon: "material-symbols:security",
              delay: 0.3,
            },
            {
              question:
                t("devops-faq-question-4") ||
                "Come gestite rollback e fallimenti?",
              answer:
                t("devops-faq-answer-4") ||
                "Meccanismi di rollback automatizzati, deployment blue-green, canary release e monitoraggio completo garantiscono recupero rapido dai fallimenti.",
              icon: "material-symbols:refresh",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <ServiceCTA
          title={
            t("devops-cta-title") || "Pronto ad Accelerare il Tuo Sviluppo?"
          }
          subtitle={
            t("devops-cta-description") ||
            "Trasforma il tuo processo di sviluppo con pratiche DevOps moderne. Contattaci per una consulenza personalizzata."
          }
          buttonText={t("devops-cta-button") || "Inizia Ora"}
        />
      </div>
    </>
  );
}
