import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
import { MorphingText } from "../../../Components/magicui/morphing-text";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import ServiceCTA from "../../../Components/ServiceCTA";
import ServiceHero from "../../../Components/ServiceHero";

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

export default function CustomSoftware() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const softwareTypes = [
    "ERP Systems",
    "CRM Solutions",
    "Inventory Management",
    "HR Management",
    "Accounting Software",
    "Workflow Automation",
    "Business Intelligence",
    "Document Management",
  ];

  const solutions = [
    {
      icon: "material-symbols:business-center",
      title: t("custom-erp") || "Sistemi ERP",
      description:
        t("custom-erp-desc") ||
        "Sistemi di gestione integrata che unificano tutti i processi aziendali in un'unica piattaforma scalabile e personalizzabile.",
      features: [
        t("custom-feature-accounting") || "Gestione Contabilità",
        t("custom-feature-inventory-control") || "Controllo Inventario",
        t("custom-feature-hr") || "Gestione HR",
        t("custom-feature-reporting") || "Reportistica Avanzata",
      ],
    },
    {
      icon: "material-symbols:group",
      title: t("custom-crm") || "Soluzioni CRM",
      description:
        t("custom-crm-desc") ||
        "Gestione clienti avanzata con automazione del sales funnel, tracking delle interazioni e analytics predittive.",
      features: [
        t("custom-feature-lead-management") || "Lead Management",
        t("custom-feature-sales-pipeline") || "Sales Pipeline",
        t("custom-feature-customer-analytics") || "Customer Analytics",
        t("custom-feature-marketing-automation") || "Marketing Automation",
      ],
    },
    {
      icon: "material-symbols:inventory",
      title: t("custom-inventory") || "Gestione Magazzino",
      description:
        t("custom-inventory-desc") ||
        "Sistemi intelligenti per controllo scorte, tracking movimenti e ottimizzazione automatica degli ordini.",
      features: [
        t("custom-feature-realtime-tracking") || "Real-time Tracking",
        t("custom-feature-auto-reordering") || "Auto Reordering",
        t("custom-feature-barcode-integration") || "Barcode Integration",
        t("custom-feature-multi-warehouse") || "Multi-warehouse",
      ],
    },
  ];

  const technologies = [
    { name: "Python", icon: "logos:python" },
    { name: "Django", icon: "logos:django-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Redis", icon: "logos:redis" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "AWS", icon: "logos:aws" },
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

        {/* Solutions Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("custom-solutions-title") || "Le Nostre Soluzioni"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("custom-solutions-description") ||
                  "Software enterprise per digitalizzare e ottimizzare ogni aspetto del tuo business"}
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black dark:bg-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon={solution.icon}
                      className="h-8 w-8 text-white dark:text-black"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon
                          icon="material-symbols:check-circle"
                          className="h-4 w-4 text-black dark:text-white flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Space Design Italia - Dark Section */}
        <div className="bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base/7 font-semibold text-gray-300 tracking-wider uppercase">
                {t("custom-why-advantages") || "I nostri punti di forza"}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t("custom-why-headline") ||
                  "Perché scegliere Space Design Italia per il tuo software personalizzato"}
              </p>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                {t("custom-why-subtitle") ||
                  "Creiamo soluzioni software enterprise che trasformano il tuo business, con tecnologie all'avanguardia e supporto dedicato."}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 lg:grid-cols-3">
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                      <Icon
                        icon="material-symbols:psychology"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {t("custom-why-expertise") || "Expertise consolidata"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t("custom-why-expertise-desc") ||
                        "Anni di esperienza nello sviluppo di software enterprise per aziende di ogni dimensione e settore."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                      <Icon
                        icon="material-symbols:handshake"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {t("custom-why-partnership") ||
                        "Partnership a lungo termine"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t("custom-why-partnership-desc") ||
                        "Non solo sviluppiamo il software, ma diventiamo il tuo partner tecnologico per la crescita futura."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                      <Icon
                        icon="material-symbols:shield-lock"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {t("custom-why-security") || "Sicurezza enterprise"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t("custom-why-security-desc") ||
                        "Implementiamo i più alti standard di sicurezza per proteggere i dati critici della tua azienda."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sezione dettagli aggiuntivi */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {t("custom-why-approach-title") ||
                    "Il nostro approccio unico"}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon
                        icon="material-symbols:person-search"
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("custom-why-step-consultation") || "Consulenza"}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {t("custom-why-step-consultation-desc") ||
                        "Analisi approfondita delle tue esigenze e processi aziendali"}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon
                        icon="material-symbols:architecture"
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("custom-why-step-architecture") || "Architettura"}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {t("custom-why-step-architecture-desc") ||
                        "Progettazione di sistemi scalabili e maintainabili"}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon
                        icon="material-symbols:build"
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("custom-why-step-implementation") || "Implementazione"}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {t("custom-why-step-implementation-desc") ||
                        "Sviluppo agile con testing continuo e quality assurance"}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon
                        icon="material-symbols:trending-up"
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t("custom-why-step-growth") || "Crescita"}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {t("custom-why-step-growth-desc") ||
                        "Supporto continuo e ottimizzazioni per la crescita del business"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiche */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Icon
                    icon="material-symbols:schedule"
                    className="text-gray-300 w-8 h-8 mr-3"
                  />
                  <div className="text-4xl font-bold text-white">-50%</div>
                </div>
                <div className="text-gray-300 text-lg">
                  {t("custom-why-stat-time") || "Tempi di processo ridotti"}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Icon
                    icon="material-symbols:verified"
                    className="text-gray-300 w-8 h-8 mr-3"
                  />
                  <div className="text-4xl font-bold text-white">99.9%</div>
                </div>
                <div className="text-gray-300 text-lg">
                  {t("custom-why-stat-uptime") || "Affidabilità garantita"}
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
        <div className="pt-16">
          <ServiceFAQ
            title={t("faq-title") || "Domande Frequenti"}
            subtitle={
              t("faq-subtitle-custom") ||
              "Risposte alle domande più comuni sul software personalizzato"
            }
            ctaText={t("faq-cta-text") || "Hai altre domande?"}
            ctaSubtext={
              t("faq-cta-subtext-custom") ||
              "Parliamo del tuo progetto software"
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
        </div>

        {/* CTA Section */}
        <ServiceCTA
          title={
            t("custom-cta-title") || "Pronto a Digitalizzare la Tua Azienda?"
          }
          subtitle={
            t("custom-cta-description") ||
            "Trasforma i tuoi processi con software su misura. Contattaci per una consulenza gratuita"
          }
          buttonText={t("contact-us") || "Contattaci Ora"}
        />
      </div>
    </>
  );
}
