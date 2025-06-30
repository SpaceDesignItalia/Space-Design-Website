import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";

// Dati dei case studies
const caseStudies = [
  {
    id: "syllog",
    title: {
      it: "Refactoring rapido, impatto su larga scala",
      en: "Rapid refactoring, large-scale impact",
    },
    subtitle: {
      it: "In sole due settimane abbiamo riprogettato l'editor dei corsi di Syllog AI, migliorando performance, UX e time to production del 50%.",
      en: "In just two weeks we redesigned Syllog AI's course editor, improving performance, UX and time to production by 50%.",
    },
    client: {
      it: "Syllog AI",
      en: "Syllog AI",
    },
    duration: {
      it: "2 settimane",
      en: "2 weeks",
    },
    team: {
      it: "3 sviluppatori",
      en: "3 developers",
    },
    category: {
      it: "Software Personalizzato",
      en: "Custom Software",
    },
    image: "/Imgs/CaseStudy/SyllogHeading.png",
    technologies: ["Django", "Vue.js", "Python", "JavaScript"],
    results: [
      {
        metric: { it: "Time to production", en: "Time to production" },
        value: "+50%",
      },
      {
        metric: { it: "Velocità sviluppo", en: "Development speed" },
        value: "3x",
      },
      {
        metric: { it: "Codice riutilizzabile", en: "Reusable code" },
        value: "70%",
      },
    ],
    path: "/case-study/syllog",
    size: "large", // 2x2
  },
  {
    id: "climawell-website",
    title: {
      it: "Sito web aziendale con gestionale prodotti",
      en: "Corporate website with product management system",
    },
    subtitle: {
      it: "Abbiamo sviluppato un sito web completo per Climawell con un gestionale integrato per la gestione del catalogo prodotti, ordini e magazzino.",
      en: "We developed a complete website for Climawell with an integrated management system for product catalog, orders and inventory management.",
    },
    client: {
      it: "Climawell",
      en: "Climawell",
    },
    duration: {
      it: "8 settimane",
      en: "8 weeks",
    },
    team: {
      it: "4 sviluppatori",
      en: "4 developers",
    },
    category: {
      it: "Sviluppo Web",
      en: "Web Development",
    },
    image: "/Imgs/CaseStudy/ClimawellHeading.webp",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
    ],
    results: [
      {
        metric: { it: "Prodotti gestiti", en: "Products managed" },
        value: "500+",
      },
      { metric: { it: "Ordini/mese", en: "Orders/month" }, value: "200+" },
      {
        metric: { it: "Tempo caricamento", en: "Loading time" },
        value: "1.8s",
      },
    ],
    path: "/case-study/climawell-website",
    size: "medium", // 1x2
  },
  {
    id: "climawell-marketing",
    title: {
      it: "App marketing per campagne multicanale",
      en: "Marketing app for multi-channel campaigns",
    },
    subtitle: {
      it: "Creata un'applicazione di marketing per Climawell che permette di gestire campagne email e WhatsApp, automatizzando la comunicazione con i clienti.",
      en: "Created a marketing application for Climawell that allows managing email and WhatsApp campaigns, automating customer communication.",
    },
    client: {
      it: "Climawell",
      en: "Climawell",
    },
    duration: {
      it: "6 settimane",
      en: "6 weeks",
    },
    team: {
      it: "3 sviluppatori",
      en: "3 developers",
    },
    category: {
      it: "Marketing Automation",
      en: "Marketing Automation",
    },
    image: "/Imgs/CaseStudy/ClimawellMarketingHeading.webp",
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "WhatsApp API",
    ],
    results: [
      {
        metric: { it: "Campagne attive", en: "Active campaigns" },
        value: "25+",
      },
      { metric: { it: "Messaggi/mese", en: "Messages/month" }, value: "10K+" },
      { metric: { it: "Tasso apertura", en: "Open rate" }, value: "85%" },
    ],
    path: "/case-study/climawell-marketing",
    size: "medium", // 1x2
  },
];

// Animazioni
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CaseStudyHome() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      it: {
        "page-title": "I nostri case studies",
        "page-subtitle":
          "Scopri come abbiamo aiutato i nostri clienti a raggiungere risultati straordinari attraverso soluzioni innovative e personalizzate",
        "view-case-study": "Visualizza Case Study",
        technologies: "Tecnologie",
        results: "Risultati",
        duration: "Durata",
        team: "Team",
        category: "Categoria",
      },
      en: {
        "page-title": "Our case studies",
        "page-subtitle":
          "Discover how we helped our clients achieve extraordinary results through innovative and customized solutions",
        "view-case-study": "View Case Study",
        technologies: "Technologies",
        results: "Results",
        duration: "Duration",
        team: "Team",
        category: "Category",
      },
    };
    return translations[language]?.[key] || key;
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const handleCaseStudyClick = (path: string) => {
    navigate(`/${language}${path}`);
  };

  return (
    <>
      <SEO
        title={` Space Design Italia -${t("page-title")}`}
        description={t("page-subtitle")}
        keywords="case studies, progetti, successi, clienti, Space Design"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header Section */}
        <motion.div
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-primary"
              variants={fadeInUp}
            >
              {t("page-title")}
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {t("page-subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* Bento Grid Case Studies */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[320px] gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-primary/20 ${getCardSize(
                  study.size
                )}`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Image with overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Chip
                      color="primary"
                      variant="flat"
                      size="sm"
                      className="bg-primary/95 backdrop-blur-sm text-white border-0 shadow-lg"
                    >
                      {study.category[language]}
                    </Chip>
                  </div>

                  {/* Client Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {study.client[language]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Duration & Team */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Icon
                          icon="solar:clock-circle-linear"
                          className="w-4 h-4 text-slate-400"
                        />
                        <span className="text-sm text-slate-600 font-medium">
                          {study.duration[language]}
                        </span>
                      </div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Icon
                          icon="solar:users-group-rounded-linear"
                          className="w-4 h-4 text-slate-400"
                        />
                        <span className="text-sm text-slate-600 font-medium">
                          {study.team[language]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 ${
                      study.size === "large" ? "text-xl" : "text-lg"
                    }`}
                  >
                    {study.title[language]}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className={`text-slate-600 leading-relaxed line-clamp-3 mb-5 ${
                      study.size === "large" ? "text-sm" : "text-xs"
                    }`}
                  >
                    {study.subtitle[language]}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      {t("technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          size="sm"
                          variant="flat"
                          className="bg-slate-50 text-slate-700 text-xs border border-slate-200 hover:bg-primary/5 hover:border-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Results Preview - Only for large cards */}
                  {study.size === "large" && (
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        {t("results")}
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <motion.div
                            key={idx}
                            className="text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-3 border border-slate-200 hover:border-primary/30 transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-lg font-bold text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-slate-600 line-clamp-1 font-medium">
                              {result.metric[language]}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-primary/25"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCaseStudyClick(study.path)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{t("view-case-study")}</span>
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                  </motion.button>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
