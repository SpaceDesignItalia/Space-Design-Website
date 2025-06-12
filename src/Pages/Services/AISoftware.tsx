import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MorphingText } from "../../Components/magicui/morphing-text";

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

export default function AISoftware() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const aiCapabilities = [
    t("ai-capability-ml") || "Machine Learning",
    t("ai-capability-nlp") || "Natural Language Processing",
    t("ai-capability-cv") || "Computer Vision",
    t("ai-capability-analytics") || "Predictive Analytics",
    t("ai-capability-automation") || "Intelligent Automation",
    t("ai-capability-neural") || "Neural Networks",
  ];

  const aiSolutions = [
    {
      icon: "streamline:artificial-intelligence-spark-remix",
      title: t("ai-automation") || "Automazione Intelligente",
      description:
        t("ai-automation-desc") ||
        "Sistemi di automazione basati su AI per ottimizzare processi aziendali, ridurre errori umani e aumentare l'efficienza operativa.",
      features: [
        t("ai-automation-feature-1") || "Automazione Processi",
        t("ai-automation-feature-2") || "Classificazione Intelligente",
        t("ai-automation-feature-3") || "Workflow Ottimizzati",
        t("ai-automation-feature-4") || "Predizione Guasti",
      ],
      gradient: "from-gray-900 to-black",
    },
    {
      icon: "material-symbols:analytics",
      title: t("ai-analytics") || "Analytics Predittive",
      description:
        t("ai-analytics-desc") ||
        "Analisi avanzate che utilizzano machine learning per predire trend, comportamenti dei clienti e opportunità di business.",
      features: [
        t("ai-analytics-feature-1") || "Trend Forecasting",
        t("ai-analytics-feature-2") || "Customer Insights",
        t("ai-analytics-feature-3") || "Risk Assessment",
        t("ai-analytics-feature-4") || "Market Analysis",
      ],
      gradient: "from-black to-gray-800",
    },
    {
      icon: "material-symbols:psychology",
      title: t("ai-nlp") || "Natural Language Processing",
      description:
        t("ai-nlp-desc") ||
        "Soluzioni NLP per chatbot intelligenti, analisi dei sentimenti, traduzione automatica e comprensione del linguaggio naturale.",
      features: [
        t("ai-nlp-feature-1") || "Chatbot Avanzati",
        t("ai-nlp-feature-2") || "Sentiment Analysis",
        t("ai-nlp-feature-3") || "Text Mining",
        t("ai-nlp-feature-4") || "Voice Recognition",
      ],
      gradient: "from-gray-800 to-gray-900",
    },
    {
      icon: "material-symbols:visibility",
      title: t("ai-computer-vision") || "Computer Vision",
      description:
        t("ai-computer-vision-desc") ||
        "Sistemi di visione artificiale per riconoscimento immagini, controllo qualità, sicurezza e automazione industriale.",
      features: [
        t("ai-vision-feature-1") || "Object Detection",
        t("ai-vision-feature-2") || "Image Classification",
        t("ai-vision-feature-3") || "Quality Control",
        t("ai-vision-feature-4") || "Facial Recognition",
      ],
      gradient: "from-gray-700 to-black",
    },
  ];

  const technologies = [
    {
      name: "TensorFlow",
      icon: "logos:tensorflow",
      category: t("ai-tech-category-framework") || "Framework",
    },
    {
      name: "PyTorch",
      icon: "simple-icons:pytorch",
      category: t("ai-tech-category-framework") || "Framework",
    },
    {
      name: "OpenAI",
      icon: "simple-icons:openai",
      category: t("ai-tech-category-api") || "API",
    },
    {
      name: "Python",
      icon: "logos:python",
      category: t("ai-tech-category-language") || "Linguaggio",
    },
    {
      name: "Hugging Face",
      icon: "simple-icons:huggingface",
      category: t("ai-tech-category-models") || "Modelli",
    },
    {
      name: "AWS AI",
      icon: "logos:aws",
      category: t("ai-tech-category-cloud") || "Cloud",
    },
  ];

  const useCases = [
    {
      industry: t("ai-retail") || "Retail & E-commerce",
      icon: "material-symbols:shopping-cart",
      description:
        t("ai-retail-desc") ||
        "Personalizzazione e ottimizzazione dell'esperienza cliente",
      applications: [
        t("ai-retail-feature-1") || "Raccomandazioni Personalizzate",
        t("ai-retail-feature-2") || "Gestione Inventario Intelligente",
        t("ai-retail-feature-3") || "Chatbot Customer Service",
        t("ai-retail-feature-4") || "Analisi Comportamento Clienti",
      ],
      stats: t("ai-retail-benefit") || "45% aumento conversioni",
      image: "🛒",
    },
    {
      industry: t("ai-finance") || "Finanza & Banking",
      icon: "material-symbols:account-balance",
      description:
        t("ai-finance-desc") ||
        "Sicurezza e analisi predittiva dei rischi finanziari",
      applications: [
        t("ai-finance-feature-1") || "Fraud Detection",
        t("ai-finance-feature-2") || "Credit Scoring",
        t("ai-finance-feature-3") || "Trading Algoritmico",
        t("ai-finance-feature-4") || "Risk Management",
      ],
      stats: t("ai-finance-benefit") || "80% riduzione frodi",
      image: "💰",
    },
    {
      industry: t("ai-healthcare") || "Sanità & Medicina",
      icon: "material-symbols:local-hospital",
      description:
        t("ai-healthcare-desc") ||
        "Diagnosi assistita e ottimizzazione delle cure",
      applications: [
        t("ai-healthcare-feature-1") || "Diagnosi Assistita",
        t("ai-healthcare-feature-2") || "Analisi Immagini Mediche",
        t("ai-healthcare-feature-3") || "Drug Discovery",
        t("ai-healthcare-feature-4") || "Monitoraggio Pazienti",
      ],
      stats: t("ai-healthcare-benefit") || "30% precisione diagnostica",
      image: "🏥",
    },
    {
      industry: t("ai-manufacturing") || "Manifatturiero",
      icon: "material-symbols:precision-manufacturing",
      description:
        t("ai-manufacturing-desc") ||
        "Automazione e manutenzione predittiva intelligente",
      applications: [
        t("ai-manufacturing-feature-1") || "Manutenzione Predittiva",
        t("ai-manufacturing-feature-2") || "Controllo Qualità",
        t("ai-manufacturing-feature-3") || "Ottimizzazione Produzione",
        t("ai-manufacturing-feature-4") || "Supply Chain Intelligence",
      ],
      stats: t("ai-manufacturing-benefit") || "60% riduzione downtime",
      image: "🏭",
    },
  ];

  const benefits = [
    {
      icon: "material-symbols:trending-up",
      title: t("ai-benefit-cost-reduction") || "Riduzione Costi",
      description:
        t("ai-benefit-cost-reduction-desc") ||
        "Fino al 40% di riduzione costi operativi",
      color: "text-green-600",
    },
    {
      icon: "material-symbols:automation",
      title: t("ai-benefit-automation") || "Automazione Processi",
      description:
        t("ai-benefit-automation-desc") ||
        "Automazione completa dei processi ripetitivi",
      color: "text-blue-600",
    },
    {
      icon: "material-symbols:analytics",
      title: t("ai-benefit-data-driven") || "Decisioni Data-Driven",
      description:
        t("ai-benefit-data-driven-desc") ||
        "Decisioni basate su dati e analytics avanzate",
      color: "text-purple-600",
    },
    {
      icon: "material-symbols:sentiment-satisfied",
      title: t("ai-benefit-customer-experience") || "Customer Experience",
      description:
        t("ai-benefit-customer-experience-desc") ||
        "Miglioramento significativo dell'esperienza cliente",
      color: "text-orange-600",
    },
    {
      icon: "material-symbols:military-tech",
      title: t("ai-benefit-competitive-advantage") || "Vantaggio Competitivo",
      description:
        t("ai-benefit-competitive-advantage-desc") ||
        "Vantaggio competitivo sostenibile nel mercato",
      color: "text-red-600",
    },
    {
      icon: "material-symbols:trending-up",
      title: t("ai-benefit-scalability") || "Scalabilità",
      description:
        t("ai-benefit-scalability-desc") ||
        "Soluzioni scalabili e adattabili alla crescita",
      color: "text-indigo-600",
    },
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("ai-software") || "Software basato su AI"
        }`}
        description={
          t("ai-meta-description") ||
          "Sviluppiamo software basato su intelligenza artificiale per automatizzare processi, migliorare decisioni e innovare il tuo business con AI."
        }
        keywords={`intelligenza artificiale, AI software, machine learning, automazione AI, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/ai-software`}
        alternateUrls={{
          it: "/it/services/ai-software",
          en: "/en/services/ai-software",
          "x-default": "/services/ai-software",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-500 blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-gradient-to-r from-black to-gray-800 dark:from-gray-600 dark:to-gray-400 blur-3xl opacity-15"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 shadow-2xl"
              >
                <Icon
                  icon="streamline:artificial-intelligence-spark-remix"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <div className="mb-8">
                <MorphingText
                  texts={aiCapabilities}
                  className="text-lg font-medium bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400"
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-300">
                  {t("ai-hero-title") || "Software basato su AI"}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("ai-hero-description") ||
                  "Trasformiamo il tuo business con soluzioni di intelligenza artificiale all'avanguardia. Machine learning, automazione intelligente e analytics predittive per un vantaggio competitivo sostenibile"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("start-ai-project") || "Inizia il tuo Progetto AI"}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t("explore-solutions") || "Esplora le Soluzioni"}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:auto-awesome"
                    className="h-4 w-4 mr-2"
                  />
                  <span>{t("ai-tech-category-advanced") || "AI Avanzata"}</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:speed"
                    className="h-4 w-4 mr-2"
                  />
                  <span>
                    {t("ai-tech-category-performance") ||
                      "Performance Ottimali"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols:security"
                    className="h-4 w-4 mr-2"
                  />
                  <span>
                    {t("ai-tech-category-security") || "Sicurezza Garantita"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Solutions Section */}
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
                {t("ai-solutions-title") || "Le Nostre Soluzioni AI"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("ai-solutions-description") ||
                  "Scopri come l'intelligenza artificiale può rivoluzionare il tuo business"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {aiSolutions.map((solution, index) => (
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
                      className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Floating icon */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Icon
                        icon={solution.icon}
                        className="h-12 w-12 text-white dark:text-black"
                      />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                        {solution.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {solution.features.map((feature, featureIndex) => (
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

        {/* Use Cases Section */}
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
                {t("ai-use-cases-title") || "Settori di Applicazione"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("ai-use-cases-description") ||
                  "L'AI trova applicazione in diversi settori, trasformando processi e creando valore"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Large emoji background */}
                  <div
                    className="absolute top-6 right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      fontFamily:
                        "Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji, EmojiSymbols, EmojiOne Mozilla, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  >
                    {useCase.image}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={useCase.icon}
                          className="h-8 w-8 text-white dark:text-black"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {useCase.industry}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {useCase.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold">
                        <Icon
                          icon="material-symbols:trending-up"
                          className="h-4 w-4 mr-2"
                        />
                        {useCase.stats}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {useCase.applications.map((app, appIndex) => (
                        <motion.div
                          key={appIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: appIndex * 0.1 }}
                          className="flex items-center text-sm p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">
                            {app}
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
                {t("ai-technologies-title") || "Tecnologie AI"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("ai-technologies-description") ||
                  "Utilizziamo le migliori tecnologie AI per creare soluzioni all'avanguardia"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon icon={tech.icon} className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {tech.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {tech.category}
                      </span>
                    </div>
                  </div>
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
                {t("ai-benefits-title") || "Vantaggi dell'AI"}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("ai-benefits-description") ||
                  "Scopri come l'intelligenza artificiale può trasformare il tuo business"}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      icon={benefit.icon}
                      className={`h-7 w-7 ${benefit.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black dark:bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl">
                {t("ai-cta-title") ||
                  "Pronto a Rivoluzionare il Tuo Business con l'AI?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700">
                {t("ai-cta-description") ||
                  "Scopri come l'intelligenza artificiale può trasformare i tuoi processi e creare valore per la tua azienda"}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  size="lg"
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 shadow-lg"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("contact-ai-expert") || "Parla con un Esperto AI"}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-white text-white dark:border-black dark:text-black hover:bg-white/10 dark:hover:bg-black/10"
                >
                  {t("view-ai-portfolio") || "Vedi il Portfolio AI"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
