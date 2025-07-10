import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import ServiceHero from "../../../Components/ServiceHero";
import CTA from "../../../Components/Layout/CTA";

export default function CustomSoftware() {
  const { t, language } = useLanguage();

  const technologies = [
    { name: "Python", icon: "logos:python" },
    { name: "Django", icon: "logos:django-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Redis", icon: "logos:redis" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "AWS", icon: "logos:aws" },
  ];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

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
        <ServiceHero
          title={t("custom-software") || "Software Personalizzato"}
          description={
            t("custom-hero-description") ||
            "Trasformiamo le tue idee in soluzioni software complete. Dalla gestione aziendale all'automazione dei processi, creiamo il software perfetto per le tue esigenze"
          }
          buttonText={t("get-quote") || "Richiedi Preventivo"}
        />

        {/* Software Types Section - Dark Section */}
        <div className="bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base/7 font-semibold text-gray-300 tracking-wider uppercase">
                {t("custom-types-section") || "Tipologie di Software"}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t("custom-types-headline") ||
                  "Software personalizzato per ogni esigenza aziendale"}
              </p>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                {t("custom-types-subtitle") ||
                  "Sviluppiamo soluzioni software su misura per ottimizzare i processi aziendali e aumentare la produttività"}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* ERP Systems */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:business-center"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-erp") || "Sistemi ERP"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-erp-desc") ||
                          "Soluzioni integrate per la gestione completa dell'azienda: contabilità, magazzino, risorse umane e molto altro."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CRM Systems */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:groups"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-crm") || "Sistemi CRM"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-crm-desc") ||
                          "Gestione clienti avanzata con automazione del marketing, tracking vendite e analisi comportamentali."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Intelligence */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:analytics"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-bi") || "Business Intelligence"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-bi-desc") ||
                          "Sistemi di analisi dati avanzati per reporting, dashboard interattive e supporto alle decisioni strategiche."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Management */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:description"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-dms") || "Gestione Documentale"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-dms-desc") ||
                          "Sistemi per archiviazione, organizzazione e condivisione sicura di documenti aziendali."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Automation */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:automation"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-workflow") || "Automazione Workflow"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-workflow-desc") ||
                          "Automazione dei processi aziendali per ridurre errori, tempi e costi operativi."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Web Portals */}
              <div className="group h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col min-h-[200px]">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                        <Icon
                          icon="material-symbols:web"
                          className="w-6 h-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t("custom-type-portal") ||
                          "Portali Web Personalizzati"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t("custom-type-portal-desc") ||
                          "Portali aziendali per dipendenti, clienti e partner con funzionalità specifiche per ogni ruolo."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("faq-title") || "Domande Frequenti"}
          subtitle={
            t("faq-subtitle-custom") ||
            "Risposte alle domande più comuni sul software personalizzato"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-custom") || "Parliamo del tuo progetto software"
          }
          benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("custom-faq-question-1") ||
                "Come capite le nostre esigenze specifiche?",
              answer:
                t("custom-faq-answer-1") ||
                "Iniziamo con sessioni di analisi dettagliate per comprendere i vostri processi, sfide e obiettivi prima di proporre soluzioni.",
              icon: "material-symbols:analytics",
              delay: 0.1,
            },
            {
              question:
                t("custom-faq-question-2") ||
                "Potete integrarvi con i nostri sistemi esistenti?",
              answer:
                t("custom-faq-answer-2") ||
                "Assolutamente! Siamo specializzati in integrazioni con ERP, CRM, database e sistemi legacy attraverso API moderne.",
              icon: "material-symbols:integration-instructions",
              delay: 0.2,
            },
            {
              question:
                t("custom-faq-question-3") ||
                "Cosa succede se abbiamo bisogno di modifiche durante lo sviluppo?",
              answer:
                t("custom-faq-answer-3") ||
                "Utilizziamo metodologia agile che permette modifiche durante lo sviluppo, con revisioni regolari e feedback continuo.",
              icon: "material-symbols:edit",
              delay: 0.3,
            },
            {
              question:
                t("custom-faq-question-4") ||
                "Fornite formazione per il nostro team?",
              answer:
                t("custom-faq-answer-4") ||
                "Sì, includiamo formazione completa e documentazione dettagliata per assicurare che il vostro team possa utilizzare il software efficacemente.",
              icon: "material-symbols:school",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
