import { motion, useScroll, useTransform } from "framer-motion";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { useRef } from "react";
import CTA from "../../../Pages/Home/CTA";
import SEO from "../../../Components/SEO";

type Translations = Record<string, string>;

// Traduzioni locali per il case study Syllog
const translations: Record<"it" | "en", Translations> = {
  it: {
    "syllog-title": "Refactoring rapido, impatto su larga scala",
    "syllog-subtitle":
      "In sole due settimane abbiamo riprogettato l'editor dei corsi di Syllog AI, migliorando performance, UX e time to production del 50%.",
    "syllog-client": "Syllog AI",
    "syllog-duration": "2 settimane",
    "syllog-team": "3 sviluppatori",
    "syllog-category": "Software Personalizzato",
    "syllog-challenge-title": "La Sfida",
    "syllog-challenge-description":
      "Syllog AI aveva bisogno di intervenire rapidamente sull'editor dei corsi, uno strumento centrale nella piattaforma, usato quotidianamente da centinaia di utenti. Il progetto richiedeva velocità, precisione e totale compatibilità con l'infrastruttura esistente. Le principali sfide erano:",
    "syllog-challenge-point-1":
      "L'architettura dell'editor limitava l'introduzione di nuove funzionalità richieste dal team prodotto.",
    "syllog-challenge-point-2":
      "Il ciclo di sviluppo e rilascio delle modifiche era troppo lento per sostenere la crescita della piattaforma.",
    "syllog-challenge-point-3":
      "Garantire che il refactoring fosse pienamente integrato con Django (backend) e Vue.js (frontend), senza introdurre disallineamenti o problemi di interoperabilità.",
    "syllog-challenge-point-4":
      "Progettare, sviluppare e testare la nuova versione dell'editor in sole due settimane, senza compromettere qualità e stabilità del prodotto.",
    "syllog-solution-title": "La Soluzione",
    "syllog-solution-description":
      "Per affrontare le sfide emerse, Space Design Italia ha affiancato il team interno di Syllog AI con un intervento rapido, su misura e completamente integrato nel loro flusso di sviluppo. Il progetto è stato gestito in modo snello e orientato al risultato, con un focus su performance, usabilità e compatibilità.",
    "syllog-feature-1-title": "Team dedicato full stack",
    "syllog-feature-1-description":
      "Tre sviluppatori full stack hanno lavorato su stack Django + Vue.js, garantendo un'elevata coesione tecnica e velocità d'esecuzione.",
    "syllog-feature-2-title": "Progettazione condivisa e snella",
    "syllog-feature-2-description":
      "Abbiamo collaborato direttamente con il team di prodotto di Syllog AI per definire le priorità e allineare design, logiche di business e vincoli tecnici.",
    "syllog-feature-3-title": "Refactoring completo e personalizzato",
    "syllog-feature-3-description":
      "Il nuovo editor è stato riprogettato da zero, con un'architettura più modulare, stabile e facilmente estendibile nel tempo.",
    "syllog-feature-4-title": "Consegna in due settimane",
    "syllog-feature-4-description":
      "L'intera attività dalla progettazione allo sviluppo fino alla messa in produzione è stata completata in 14 giorni, senza interruzioni di servizio.",
    "syllog-results-title": "Risultati",
    "syllog-results-subtitle":
      "L'intervento ha avuto un impatto immediato sia sul prodotto che sull'esperienza degli utenti. La collaborazione tra Space Design Italia e Syllog AI ha portato a benefici tangibili, misurabili e duraturi.",
    "syllog-result-1-metric": "Time to production ridotto",
    "syllog-result-1-value": "+50%",
    "syllog-result-1-description":
      "La nuova implementazione dell'editor ha permesso di accelerare il ciclo di rilascio della funzionalità, dimezzando il time to production.",
    "syllog-result-2-metric": "Velocità di sviluppo funzionalità future",
    "syllog-result-2-value": "3x",
    "syllog-result-2-description":
      "La nuova architettura ha triplicato la rapidità con cui il team può integrare nuove feature.",
    "syllog-result-3-metric": "Codice riutilizzabile",
    "syllog-result-3-value": "70%",
    "syllog-result-3-description":
      "Gran parte del codice prodotto è stato progettato per essere riusato in altri moduli futuri della piattaforma.",
    "syllog-result-4-metric": "Engagement degli utenti nei contenuti formativi",
    "syllog-result-4-value": "+25%",
    "syllog-result-4-description":
      "Un'interfaccia più fluida ha migliorato l'interazione con i contenuti, misurabile su LMS integrati.",
    "syllog-technologies-title": "Tecnologie Utilizzate",
    "syllog-cta-button": "Inizia il Progetto",
    "scroll-discover": "Scorri per scoprire",
    "client-label": "Cliente",
    "duration-label": "Durata",
    "team-label": "Team",
    "category-label": "Categoria",
  },
  en: {
    "syllog-title": "Rapid refactoring, large-scale impact",
    "syllog-subtitle":
      "In just two weeks we redesigned Syllog AI's course editor, improving performance, UX and time to production by 50%.",
    "syllog-client": "Syllog AI",
    "syllog-duration": "2 weeks",
    "syllog-team": "3 developers",
    "syllog-category": "Custom Software",
    "syllog-challenge-title": "The Challenge",
    "syllog-challenge-description":
      "Syllog AI needed to intervene quickly on the course editor, a central tool in the platform, used daily by hundreds of users. The project required speed, precision, and total compatibility with the existing infrastructure. The main challenges were:",
    "syllog-challenge-point-1":
      "The editor's architecture limited the introduction of new features requested by the product team.",
    "syllog-challenge-point-2":
      "The development and release cycle for changes was too slow to support the platform's growth.",
    "syllog-challenge-point-3":
      "Ensuring that the refactoring was fully integrated with Django (backend) and Vue.js (frontend), without introducing misalignments or interoperability issues.",
    "syllog-challenge-point-4":
      "Designing, developing, and testing the new version of the editor in just two weeks, without compromising product quality and stability.",
    "syllog-solution-title": "The Solution",
    "syllog-solution-description":
      "To address the emerging challenges, Space Design Italia supported Syllog AI's internal team with a rapid, tailored intervention that was fully integrated into their development workflow. The project was managed in a lean and results-oriented manner, with a focus on performance, usability, and compatibility.",
    "syllog-feature-1-title": "Dedicated full stack team",
    "syllog-feature-1-description":
      "Three full stack developers worked on Django + Vue.js stack, ensuring high technical cohesion and execution speed.",
    "syllog-feature-2-title": "Shared and lean design",
    "syllog-feature-2-description":
      "We collaborated directly with Syllog AI's product team to define priorities and align design, business logic, and technical constraints.",
    "syllog-feature-3-title": "Complete and customized refactoring",
    "syllog-feature-3-description":
      "The new editor was redesigned from scratch, with a more modular, stable, and easily extensible architecture over time.",
    "syllog-feature-4-title": "Delivery in two weeks",
    "syllog-feature-4-description":
      "The entire activity from design to development through to production deployment was completed in 14 days, without service interruptions.",
    "syllog-results-title": "Results",
    "syllog-results-subtitle":
      "The intervention had an immediate impact on both the product and user experience. The collaboration between Space Design Italia and Syllog AI led to tangible, measurable, and lasting benefits.",
    "syllog-result-1-metric": "Reduced time to production",
    "syllog-result-1-value": "+50%",
    "syllog-result-1-description":
      "The new editor implementation allowed us to accelerate the feature release cycle, halving the time to production.",
    "syllog-result-2-metric": "Future feature development speed",
    "syllog-result-2-value": "3x",
    "syllog-result-2-description":
      "The new architecture tripled the speed with which the team can integrate new features.",
    "syllog-result-3-metric": "Reusable code",
    "syllog-result-3-value": "70%",
    "syllog-result-3-description":
      "Most of the produced code was designed to be reused in future modules of the platform.",
    "syllog-result-4-metric": "User engagement in training content",
    "syllog-result-4-value": "+25%",
    "syllog-result-4-description":
      "A smoother interface improved interaction with content, measurable on integrated LMS.",
    "syllog-technologies-title": "Technologies Used",
    "syllog-cta-button": "Start Project",
    "scroll-discover": "Scroll to discover",
    "client-label": "Client",
    "duration-label": "Duration",
    "team-label": "Team",
    "category-label": "Category",
  },
};

// Animazioni minimal
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function CaseStudySyllog() {
  const { language } = useLanguage();
  const t = (key: string) => translations[language]?.[key] || key;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const title = t("syllog-title");
  const subtitle = t("syllog-subtitle");
  const client = t("syllog-client");
  const duration = t("syllog-duration");
  const team = t("syllog-team");
  const category = t("syllog-category");

  const challenge = {
    title: t("syllog-challenge-title"),
    description: t("syllog-challenge-description"),
    points: [
      t("syllog-challenge-point-1"),
      t("syllog-challenge-point-2"),
      t("syllog-challenge-point-3"),
      t("syllog-challenge-point-4"),
    ],
  };

  const solution = {
    title: t("syllog-solution-title"),
    description: t("syllog-solution-description"),
    features: [
      {
        title: t("syllog-feature-1-title"),
        description: t("syllog-feature-1-description"),
        icon: "solar:users-group-rounded-linear",
      },
      {
        title: t("syllog-feature-2-title"),
        description: t("syllog-feature-2-description"),
        icon: "material-symbols:handshake-outline",
      },
      {
        title: t("syllog-feature-3-title"),
        description: t("syllog-feature-3-description"),
        icon: "solar:settings-linear",
      },
      {
        title: t("syllog-feature-4-title"),
        description: t("syllog-feature-4-description"),
        icon: "bytesize:lightning",
      },
    ],
  };

  const results = [
    {
      metric: t("syllog-result-1-metric"),
      value: t("syllog-result-1-value"),
      description: t("syllog-result-1-description"),
    },
    {
      metric: t("syllog-result-2-metric"),
      value: t("syllog-result-2-value"),
      description: t("syllog-result-2-description"),
    },
    {
      metric: t("syllog-result-3-metric"),
      value: t("syllog-result-3-value"),
      description: t("syllog-result-3-description"),
    },
    {
      metric: t("syllog-result-4-metric"),
      value: t("syllog-result-4-value"),
      description: t("syllog-result-4-description"),
    },
  ];

  const technologies = ["Vue.Js", "Django", "Tailwind CSS", "SQLite"];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${title}`}
        description={subtitle}
        keywords={
          language === "it"
            ? `space design italia, syllog ai, refactoring, editor corsi, django, vue.js, sviluppo software, ${category.toLowerCase()}`
            : `space design italia, syllog ai, refactoring, course editor, django, vue.js, software development, ${category.toLowerCase()}`
        }
        image="/imgs/CaseStudy/SyllogHeading.png"
        url={`/${language}/case-study/syllog`}
        alternateUrls={{
          it: "/it/case-study/syllog",
          en: "/en/case-study/syllog",
          "x-default": "/case-study/syllog",
        }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative overflow-hidden bg-black text-white min-h-screen flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image with Parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <img
              src="/imgs/CaseStudy/SyllogHeading.png"
              alt="Hero background"
              className="object-cover w-full h-full scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <motion.div
            className="relative z-10 container mx-auto px-4 py-20 lg:py-32"
            style={{ opacity }}
          >
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
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
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-white mb-8 font-light max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {subtitle}
                </motion.p>
              </motion.div>

              {/* Enhanced Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <motion.div
                  className="flex flex-col items-center space-y-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-white/80 text-sm font-light tracking-wider drop-shadow-md">
                    {t("scroll-discover")}
                  </span>
                  <motion.div
                    className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent drop-shadow-sm"
                    animate={{ scaleY: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
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
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
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
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
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
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
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
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {challenge.points.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-4 p-8 bg-gray-600/30 rounded-2xl"
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
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
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
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center p-8 border-2 hover:shadow-sm transition-all duration-300 rounded-2xl"
                    whileHover={{ y: -2 }}
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
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
                  {t("syllog-results-title")}
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  {t("syllog-results-subtitle")}
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center p-8 bg-white border-2 rounded-2xl hover:shadow-sm transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
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
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {t("syllog-technologies-title")}
              </motion.h2>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
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
