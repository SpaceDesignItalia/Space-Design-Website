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

  const devopsPrinciples = [
    {
      title: "Automazione",
      description:
        "Eliminiamo i processi manuali ripetitivi per concentrarti su ciò che conta davvero.",
    },
    {
      title: "Collaborazione",
      description:
        "Unifichiamo sviluppo e operazioni per un flusso di lavoro senza interruzioni.",
    },
    {
      title: "Monitoraggio",
      description:
        "Visibilità completa su performance, errori e utilizzo delle risorse in tempo reale.",
    },
    {
      title: "Sicurezza",
      description:
        "Integriamo la sicurezza in ogni fase del processo di sviluppo e deployment.",
    },
  ];

  const tools = [
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Kubernetes", icon: "logos:kubernetes" },
    { name: "Jenkins", icon: "logos:jenkins" },
    { name: "Terraform", icon: "logos:terraform-icon" },
    { name: "Ansible", icon: "logos:ansible" },
    { name: "Prometheus", icon: "logos:prometheus" },
    { name: "Grafana", icon: "logos:grafana" },
    { name: "AWS", icon: "logos:aws" },
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

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <ServiceHero
          title={t("devops-hero-title") || "Accelera il tuo sviluppo"}
          description={
            t("devops-hero-description") ||
            "Accelera il tuo sviluppo con pratiche DevOps moderne. Pipeline automatizzate, integrazione continua, infrastructure as code e monitoraggio per deployment più veloci e affidabili."
          }
          buttonText={t("devops-request-consultation") || "Richiedi Consulenza"}
        />

        {/* Principles Section */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Principi DevOps
              </h2>
              <p className="text-xl font-medium text-gray-600">
                I quattro pilastri che guidano ogni trasformazione DevOps
              </p>
            </motion.div>

            <div className="space-y-12">
              {devopsPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-semibold text-black mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-32 bg-black">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-semibold tracking-tight text-white mb-6">
                Strumenti & Tecnologie
              </h2>
              <p className="text-xl font-medium text-gray-300">
                Utilizziamo le migliori tecnologie per garantire risultati
                eccellenti
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-16">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon icon={tool.icon} className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 font-semibold">{tool.name}</p>
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
