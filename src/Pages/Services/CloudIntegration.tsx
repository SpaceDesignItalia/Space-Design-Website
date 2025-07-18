import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceHero from "../../Components/ServiceHero";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../Components/ServiceCTA";

export default function CloudIntegration() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const benefits = [
    {
      number: "01",
      title: "Scalabilità Istantanea",
      description:
        "Adatta automaticamente le risorse alle tue esigenze, senza limiti di crescita.",
    },
    {
      number: "02",
      title: "Riduzione Costi",
      description:
        "Paga solo per quello che usi, con ottimizzazioni automatiche che riducono i costi del 40%.",
    },
    {
      number: "03",
      title: "Sicurezza Avanzata",
      description:
        "Protezione enterprise con crittografia end-to-end e compliance certificata.",
    },
    {
      number: "04",
      title: "Disponibilità Globale",
      description:
        "Distribuzione mondiale con uptime garantito del 99.9% e backup automatici.",
    },
  ];

  const providers = [
    {
      name: "Amazon Web Services",
      logo: "logos:aws",
      features: ["EC2", "S3", "Lambda", "RDS"],
    },
    {
      name: "Microsoft Azure",
      logo: "logos:microsoft-azure",
      features: [
        "Virtual Machines",
        "Blob Storage",
        "Functions",
        "SQL Database",
      ],
    },
    {
      name: "Google Cloud Platform",
      logo: "logos:google-cloud",
      features: [
        "Compute Engine",
        "Cloud Storage",
        "Cloud Functions",
        "Cloud SQL",
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

      <div className="min-h-screen bg-white">
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

        {/* Benefits Section */}
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
                Vantaggi del Cloud
              </h2>
              <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
                Scopri come il cloud può trasformare la tua infrastruttura IT
              </p>
            </motion.div>

            <div className="relative">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-20 last:mb-0"
                >
                  <div className="flex items-center space-x-12">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                        <span className="text-4xl font-light text-white">
                          {benefit.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-semibold text-black mb-6">
                        {benefit.title}
                      </h3>
                      <p className="text-xl font-medium text-gray-600 leading-relaxed max-w-3xl">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  {index < benefits.length - 1 && (
                    <div className="mt-12 ml-16 w-px h-20 bg-gray-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Providers Section */}
        <section className="py-32 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-semibold tracking-tight text-black mb-6">
                Provider Cloud
              </h2>
              <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
                Lavoriamo con i principali provider per offrirti la soluzione
                migliore
              </p>
            </motion.div>

            <div className="space-y-12">
              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-center space-x-12 p-8 border-2 border-gray-200 rounded-3xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <Icon icon={provider.logo} className="w-20 h-20" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black mb-4">
                      {provider.name}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {provider.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
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
