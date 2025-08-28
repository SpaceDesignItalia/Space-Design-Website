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
      it: "Trasformazione rapida, impatto straordinario",
      en: "Rapid transformation, extraordinary impact",
    },
    subtitle: {
      it: "In sole due settimane abbiamo rivoluzionato l'editor dei corsi di Syllog AI, migliorando performance, esperienza utente e velocità di sviluppo del 50%.",
      en: "In just two weeks we revolutionized Syllog AI's course editor, improving performance, user experience and development speed by 50%.",
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
    image: "/imgs/CaseStudy/SyllogHeading.png",
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
    path: "/case-studies/syllog",
    size: "large", // 2x2
  },
  {
    id: "climawell-website",
    title: {
      it: "Sito web moderno con catalogo prodotti integrato",
      en: "Modern website with integrated product catalog",
    },
    subtitle: {
      it: "Abbiamo creato un sito web elegante e facile da navigare per Climawell che mostra i loro prodotti in modo professionale, collegato a un sistema di gestione magazzino su misura che permette di tenere tutto sotto controllo.",
      en: "We created an elegant and easy-to-navigate website for Climawell that showcases their products professionally, connected to a custom warehouse management system that keeps everything under control.",
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
    image: "/imgs/CaseStudy/ClimawellHeading.webp",
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
    path: "/case-studies/climawell-website",
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
      it: "Software Personalizzato",
      en: "Custom Software",
    },
    image: "/imgs/CaseStudy/ClimawellMarketingHeading.webp",
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
    path: "/case-studies/climawell-marketing",
    size: "medium", // 1x2
  },
];

// Animazioni migliorate
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
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
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
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
        title={` Space Design Italia - ${t("page-title")}`}
        description={t("page-subtitle")}
        keywords="case studies, progetti, successi, clienti, Space Design"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Header Section migliorato */}
        <motion.div
          className="pt-36 pb-20 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-5xl font-semibold mb-8 text-slate-900 leading-tight"
              variants={fadeInUp}
            >
              {t("page-title")}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              {t("page-subtitle")}
            </motion.p>
          </div>
        </motion.div>

        {/* Bento Grid Case Studies migliorato */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[360px] gap-10">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 cursor-pointer ${getCardSize(
                  study.size
                )}`}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => handleCaseStudyClick(study.path)}
                style={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Image con overlay migliorato */}
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge migliorato */}
                  <div className="absolute top-5 left-5">
                    <Chip color="primary" size="sm">
                      {study.category[language]}
                    </Chip>
                  </div>

                  {/* Client Badge migliorato */}
                  <div className="absolute top-5 right-5">
                    <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl text-xs font-semibold shadow-xl border">
                      {study.client[language]}
                    </div>
                  </div>
                </div>

                {/* Content migliorato */}
                <div className="p-8 flex flex-col h-full">
                  {/* Duration & Team migliorato */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <Chip
                        color="primary"
                        variant="faded"
                        startContent={
                          <Icon
                            icon="solar:clock-circle-linear"
                            className="w-4 h-4"
                          />
                        }
                      >
                        <p
                          className={`text-slate-700 font-semibold ${
                            study.size === "large" ? "text-sm" : "text-xs"
                          }`}
                        >
                          {study.duration[language]}
                        </p>
                      </Chip>
                      <Chip
                        color="primary"
                        variant="faded"
                        startContent={
                          <Icon
                            icon="solar:users-group-rounded-linear"
                            className="w-4 h-4"
                          />
                        }
                      >
                        <span
                          className={`text-slate-700 font-semibold ${
                            study.size === "large" ? "text-sm" : "text-xs"
                          }`}
                        >
                          {study.team[language]}
                        </span>
                      </Chip>
                    </div>
                  </div>

                  {/* Title migliorato */}
                  <h3
                    className={`font-semibold text-slate-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight ${
                      study.size === "large" ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {study.title[language]}
                  </h3>

                  {/* Subtitle migliorato */}
                  <p
                    className={`text-slate-600 leading-relaxed line-clamp-3 mb-6 font-light ${
                      study.size === "large" ? "text-base" : "text-sm"
                    }`}
                  >
                    {study.subtitle[language]}
                  </p>

                  {/* Technologies migliorato */}
                  <div className="mb-6">
                    <h4
                      className={`font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center ${
                        study.size === "large" ? "text-xs" : "text-xs"
                      }`}
                    >
                      <Icon
                        icon="solar:code-square-linear"
                        className="w-4 h-4 mr-2 text-primary"
                      />
                      {t("technologies")}
                    </h4>
                    <div
                      className="flex flex-row flex-wrap gap-2 items-center"
                      style={{ flexDirection: "row" }}
                    >
                      {study.technologies.map((tech) => (
                        <Chip key={tech} size="sm" variant="bordered">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Spacer per spingere il bottone in fondo */}
                  <div className="flex-1" />

                  {/* CTA Button migliorato */}
                  <button
                    className={`w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-primary/30 transform group-hover:scale-[1.02] ${
                      study.size === "large" ? "py-4 px-6" : "py-3 px-5"
                    }`}
                    onClick={() => handleCaseStudyClick(study.path)}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <span
                        className={`${
                          study.size === "large" ? "text-base" : "text-sm"
                        }`}
                      >
                        {t("view-case-study")}
                      </span>
                      <Icon
                        icon="solar:arrow-right-linear"
                        className={`group-hover:translate-x-1 transition-transform duration-300 ${
                          study.size === "large" ? "w-5 h-5" : "w-4 h-4"
                        }`}
                      />
                    </div>
                  </button>
                </div>

                {/* Hover effect overlay migliorato */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 pointer-events-none rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
