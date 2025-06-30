import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import SEO from "../../../Components/SEO";
import CTA from "../../../Pages/Home/CTA";

export default function CaseStudyClimawellMarketing() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      it: {
        "page-title": "App marketing per campagne multicanale",
        "page-subtitle":
          "Creata un'applicazione di marketing per Climawell che permette di gestire campagne email e WhatsApp, automatizzando la comunicazione con i clienti.",
        "client-label": "Cliente",
        "duration-label": "Durata",
        "team-label": "Team",
        "category-label": "Categoria",
        "challenge-title": "La Sfida",
        "challenge-description":
          "Climawell aveva bisogno di automatizzare le campagne marketing su più canali per migliorare l'engagement con i clienti.",
        "solution-title": "La Soluzione",
        "solution-description":
          "Abbiamo sviluppato un'applicazione di marketing che integra email e WhatsApp per campagne automatizzate.",
        "results-title": "Risultati",
        "results-subtitle": "I risultati ottenuti dal progetto",
        "technologies-title": "Tecnologie Utilizzate",
        "scroll-discover": "Scorri per scoprire",
      },
      en: {
        "page-title": "Marketing app for multi-channel campaigns",
        "page-subtitle":
          "Created a marketing application for Climawell that allows managing email and WhatsApp campaigns, automating customer communication.",
        "client-label": "Client",
        "duration-label": "Duration",
        "team-label": "Team",
        "category-label": "Category",
        "challenge-title": "The Challenge",
        "challenge-description":
          "Climawell needed to automate marketing campaigns across multiple channels to improve customer engagement.",
        "solution-title": "The Solution",
        "solution-description":
          "We developed a marketing application that integrates email and WhatsApp for automated campaigns.",
        "results-title": "Results",
        "results-subtitle": "Results achieved from the project",
        "technologies-title": "Technologies Used",
        "scroll-discover": "Scroll to discover",
      },
    };
    return translations[language]?.[key] || key;
  };

  const title = t("page-title");
  const subtitle = t("page-subtitle");
  const client = "Climawell";
  const duration = language === "it" ? "6 settimane" : "6 weeks";
  const team = language === "it" ? "3 sviluppatori" : "3 developers";
  const category =
    language === "it" ? "Marketing Automation" : "Marketing Automation";

  const challenge = {
    title: t("challenge-title"),
    description: t("challenge-description"),
    points: [
      language === "it"
        ? "Gestione di campagne marketing su più canali (email e WhatsApp)"
        : "Management of marketing campaigns across multiple channels (email and WhatsApp)",
      language === "it"
        ? "Automatizzazione della comunicazione con i clienti"
        : "Automation of customer communication",
      language === "it"
        ? "Analisi e reporting delle performance delle campagne"
        : "Analysis and reporting of campaign performance",
    ],
  };

  const solution = {
    title: t("solution-title"),
    description: t("solution-description"),
    features: [
      {
        icon: "solar:mail-linear",
        title: language === "it" ? "Campagne Email" : "Email Campaigns",
        description:
          language === "it"
            ? "Sistema di invio email automatizzate con template personalizzabili"
            : "Automated email sending system with customizable templates",
      },
      {
        icon: "solar:chat-round-dots-linear",
        title:
          language === "it" ? "WhatsApp Integration" : "WhatsApp Integration",
        description:
          language === "it"
            ? "Integrazione con WhatsApp Business API per messaggi automatizzati"
            : "Integration with WhatsApp Business API for automated messages",
      },
      {
        icon: "solar:users-group-two-rounded-linear",
        title: language === "it" ? "Gestione Contatti" : "Contact Management",
        description:
          language === "it"
            ? "Database centralizzato per la gestione dei contatti e segmentazione"
            : "Centralized database for contact management and segmentation",
      },
      {
        icon: "solar:chart-2-linear",
        title: language === "it" ? "Analytics" : "Analytics",
        description:
          language === "it"
            ? "Dashboard con metriche di engagement e conversioni"
            : "Dashboard with engagement metrics and conversions",
      },
    ],
  };

  const results = [
    {
      metric: language === "it" ? "Campagne attive" : "Active campaigns",
      value: "25+",
      description:
        language === "it" ? "Campagne in esecuzione" : "Running campaigns",
    },
    {
      metric: language === "it" ? "Messaggi/mese" : "Messages/month",
      value: "10K+",
      description: language === "it" ? "Messaggi inviati" : "Messages sent",
    },
    {
      metric: language === "it" ? "Tasso apertura" : "Open rate",
      value: "85%",
      description: language === "it" ? "Email aperte" : "Emails opened",
    },
    {
      metric: language === "it" ? "Conversioni" : "Conversions",
      value: "12%",
      description:
        language === "it" ? "Tasso di conversione" : "Conversion rate",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "WhatsApp API",
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${title}`}
        description={subtitle}
        keywords={`space design italia, climawell, marketing automation, email campaigns, whatsapp api, react, typescript, ${category.toLowerCase()}`}
        image="/Imgs/CaseStudy/ClimawellMarketingHeading.webp"
        url={`/${language}/case-study/climawell-marketing`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <motion.div
            className="relative z-10 container mx-auto px-4 py-20 lg:py-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Chip
                  color="primary"
                  className="mb-6 text-sm px-4 py-2 drop-shadow-lg"
                >
                  {category}
                </Chip>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                {title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white mb-8 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {subtitle}
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Project Info */}
        <motion.section
          className="py-20 bg-white border-b border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 max-w-4xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon
                  icon="solar:users-group-rounded-linear"
                  className="h-6 w-6 text-black mx-auto mb-4"
                />
                <h3 className="font-medium text-black mb-2 text-sm uppercase tracking-wider">
                  {t("client-label")}
                </h3>
                <p className="text-gray-600 font-light">{client}</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Icon
                  icon="solar:calendar-linear"
                  className="h-6 w-6 text-black mx-auto mb-4"
                />
                <h3 className="font-medium text-black mb-2 text-sm uppercase tracking-wider">
                  {t("duration-label")}
                </h3>
                <p className="text-gray-600 font-light">{duration}</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Icon
                  icon="solar:target-linear"
                  className="h-6 w-6 text-black mx-auto mb-4"
                />
                <h3 className="font-medium text-black mb-2 text-sm uppercase tracking-wider">
                  {t("team-label")}
                </h3>
                <p className="text-gray-600 font-light">{team}</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Icon
                  icon="material-symbols:category-rounded"
                  className="h-6 w-6 text-black mx-auto mb-4"
                />
                <h3 className="font-medium text-black mb-2 text-sm uppercase tracking-wider">
                  {t("category-label")}
                </h3>
                <p className="text-gray-600 font-light">{category}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Challenge Section */}
        <motion.section
          className="py-24 bg-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                  {challenge.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {challenge.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-8 bg-gray-600/30 rounded-2xl"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3" />
                    <p className="text-white font-light leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          className="py-24 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 border-2 hover:shadow-sm transition-all duration-300 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-6 grayscale">
                      <Icon
                        icon={feature.icon}
                        className="h-12 w-12 mx-auto text-gray-600"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-black mb-4 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
                  {t("results-title")}
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  {t("results-subtitle")}
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-white border-2 rounded-2xl hover:shadow-sm transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-light text-black mb-4 tracking-tight">
                      {result.value}
                    </div>
                    <h3 className="text-sm font-medium text-black mb-3 uppercase tracking-wider">
                      {result.metric}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {result.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          className="py-24 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-light text-black mb-12 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("technologies-title")}
              </motion.h2>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Chip color="primary">{tech}</Chip>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
