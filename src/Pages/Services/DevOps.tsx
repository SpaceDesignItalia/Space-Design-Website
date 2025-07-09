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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function DevOps() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const devopsServices = (
    t("devops-services-morphing") ||
    "Pipeline CI/CD|Infrastructure as Code|Orchestrazione Container|Testing Automatizzato|Monitoraggio & Alerting|Integrazione Sicurezza"
  ).split("|");

  const devopsTools = (
    t("devops-tools-morphing") ||
    "Jenkins|GitLab CI|Docker|Kubernetes|Terraform|Ansible"
  ).split("|");

  const services = [
    {
      icon: "material-symbols:account-tree",
      title: t("devops-cicd-title") || "Pipeline CI/CD",
      description:
        t("devops-cicd-description") ||
        "Pipeline automatizzate per integrazione e deployment continui con testing, controlli di sicurezza e rollback automatici.",
      features: [
        t("devops-feature-automated-testing") || "Testing Automatizzato",
        t("devops-feature-security-scanning") || "Scansione Sicurezza",
        t("devops-feature-deployment-automation") || "Automazione Deployment",
        t("devops-feature-rollback-mechanisms") || "Meccanismi Rollback",
      ],
      gradient: "from-gray-900 to-black",
    },
    {
      icon: "material-symbols:code",
      title: t("devops-iac-title") || "Infrastructure as Code",
      description:
        t("devops-iac-description") ||
        "Gestione infrastrutture attraverso codice con Terraform, Ansible e CloudFormation per consistenza e scalabilità.",
      features: [
        t("devops-feature-terraform") || "Terraform",
        t("devops-feature-ansible") || "Ansible",
        t("devops-feature-cloudformation") || "CloudFormation",
        t("devops-feature-version-control") || "Controllo Versioni",
      ],
      gradient: "from-black to-gray-800",
    },
    {
      icon: "material-symbols:view-in-ar",
      title: t("devops-containers-title") || "Orchestrazione Container",
      description:
        t("devops-containers-description") ||
        "Containerizzazione Docker e orchestrazione Kubernetes per applicazioni scalabili e portabili.",
      features: [
        t("devops-feature-docker-containers") || "Container Docker",
        t("devops-feature-kubernetes") || "Kubernetes",
        t("devops-feature-service-mesh") || "Service Mesh",
        t("devops-feature-auto-scaling") || "Auto-scaling",
      ],
      gradient: "from-gray-800 to-gray-900",
    },
    {
      icon: "material-symbols:monitoring",
      title: t("devops-monitoring-title") || "Monitoraggio & Osservabilità",
      description:
        t("devops-monitoring-description") ||
        "Monitoraggio completo con metriche, log, trace e alerting intelligente per risoluzione proattiva dei problemi.",
      features: [
        t("devops-feature-metrics-logs") || "Metriche & Log",
        t("devops-feature-distributed-tracing") || "Tracing Distribuito",
        t("devops-feature-intelligent-alerting") || "Alerting Intelligente",
        t("devops-feature-custom-dashboards") || "Dashboard Personalizzate",
      ],
      gradient: "from-gray-700 to-black",
    },
  ];

  const technologies = [
    {
      name: t("devops-tech-jenkins") || "Jenkins",
      icon: "logos:jenkins",
      category: t("devops-tech-category-cicd") || "CI/CD",
    },
    {
      name: t("devops-tech-gitlab") || "GitLab CI",
      icon: "logos:gitlab",
      category: t("devops-tech-category-cicd") || "CI/CD",
    },
    {
      name: t("devops-tech-docker") || "Docker",
      icon: "logos:docker-icon",
      category: t("devops-tech-category-containers") || "Container",
    },
    {
      name: t("devops-tech-kubernetes") || "Kubernetes",
      icon: "logos:kubernetes",
      category: t("devops-tech-category-orchestration") || "Orchestrazione",
    },
    {
      name: t("devops-tech-terraform") || "Terraform",
      icon: "logos:terraform-icon",
      category: t("devops-tech-category-iac") || "IaC",
    },
    {
      name: t("devops-tech-ansible") || "Ansible",
      icon: "logos:ansible",
      category: t("devops-tech-category-automation") || "Automazione",
    },
    {
      name: t("devops-tech-prometheus") || "Prometheus",
      icon: "logos:prometheus",
      category: t("devops-tech-category-monitoring") || "Monitoraggio",
    },
    {
      name: t("devops-tech-grafana") || "Grafana",
      icon: "logos:grafana",
      category: t("devops-tech-category-visualization") || "Visualizzazione",
    },
  ];

  const benefits = [
    {
      icon: "material-symbols:speed",
      title: t("devops-benefit-speed-title") || "Velocità Deployment",
      description:
        t("devops-benefit-speed-description") || "Deployment 10x più veloci",
      metric: "10x",
      metricLabel: t("devops-metric-faster") || "Più Veloce",
    },
    {
      icon: "material-symbols:verified",
      title: t("devops-benefit-reliability-title") || "Affidabilità Sistema",
      description:
        t("devops-benefit-reliability-description") || "99.9% uptime garantito",
      metric: "99.9%",
      metricLabel: t("devops-metric-uptime") || "Uptime",
    },
    {
      icon: "material-symbols:automation",
      title: t("devops-benefit-automation-title") || "Automazione Processi",
      description:
        t("devops-benefit-automation-description") ||
        "80% riduzione task manuali",
      metric: "80%",
      metricLabel: t("devops-metric-automation") || "Automazione",
    },
    {
      icon: "material-symbols:bug-report",
      title: t("devops-benefit-quality-title") || "Qualità Codice",
      description:
        t("devops-benefit-quality-description") || "90% meno bug in produzione",
      metric: "90%",
      metricLabel: t("devops-metric-fewer-bugs") || "Meno Bug",
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

  const processSteps = [
    {
      step: t("devops-step-assessment") || "Assessment Stato Attuale",
      description:
        t("devops-step-assessment-desc") ||
        "Analisi dei processi e infrastrutture attuali",
      icon: "material-symbols:analytics",
      number: "01",
    },
    {
      step: t("devops-step-strategy") || "Strategia DevOps",
      description:
        t("devops-step-strategy-desc") ||
        "Roadmap personalizzata e piano di implementazione",
      icon: "material-symbols:route",
      number: "02",
    },
    {
      step: t("devops-step-implementation") || "Implementazione",
      description:
        t("devops-step-implementation-desc") ||
        "Implementazione graduale con supporto continuo",
      icon: "material-symbols:build",
      number: "03",
    },
    {
      step: t("devops-step-optimization") || "Ottimizzazione",
      description:
        t("devops-step-optimization-desc") ||
        "Monitoraggio continuo e miglioramento processi",
      icon: "material-symbols:tune",
      number: "04",
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
        <ServiceHero
          title="Accelera il tuo sviluppo"
          description={
            t("devops-hero-description") ||
            "Accelera il tuo sviluppo con pratiche DevOps moderne. Pipeline automatizzate, integrazione continua, infrastructure as code e monitoraggio per deployment più veloci e affidabili."
          }
          buttonText={
            t("devops-start-transformation") || "Inizia la Trasformazione"
          }
        />

        {/* DevOps Services Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("devops-services-title") || "I Nostri Servizi DevOps"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("devops-services-description") ||
                  "Soluzioni DevOps complete per accelerare lo sviluppo e migliorare la qualità del software"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
                    {/* Decorative gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Floating icon */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Icon
                        icon={service.icon}
                        className="h-12 w-12 text-white dark:text-black"
                      />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                          >
                            <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Process Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("devops-process-title") || "Il Nostro Processo DevOps"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("devops-process-description") ||
                  "Un approccio strutturato per trasformare il tuo workflow di sviluppo"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 z-0">
                      <motion.div
                        className="h-full bg-black dark:bg-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      />
                    </div>
                  )}

                  <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={step.icon}
                          className="h-8 w-8 text-white dark:text-black"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("devops-technologies-title") || "Tecnologie DevOps"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("devops-technologies-description") ||
                  "Utilizziamo i migliori strumenti e piattaforme per DevOps moderno"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Icon icon={tech.icon} className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {tech.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                {t("devops-benefits-title") || "Vantaggi DevOps"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("devops-benefits-description") ||
                  "Scopri come DevOps può trasformare il tuo processo di sviluppo"}
              </motion.p>
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
                  className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center"
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
            t("faq-subtitle-devops") ||
            "Risposte alle domande più comuni su DevOps e CI/CD"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-devops") ||
            "Parliamo della tua trasformazione DevOps"
          }
          benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
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
            {
              question:
                t("devops-faq-question-5") ||
                "Che formazione fornite per il nostro team?",
              answer:
                t("devops-faq-answer-5") ||
                "Formazione completa su strumenti DevOps, best practices, gestione pipeline e troubleshooting per garantire autonomia del team.",
              icon: "material-symbols:school",
              delay: 0.5,
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
          secondaryButtonText={
            t("view-case-studies") || "Vedi i nostri progetti"
          }
        />
      </div>
    </>
  );
}
