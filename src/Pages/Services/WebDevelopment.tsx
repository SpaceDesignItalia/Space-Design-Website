import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../Components/magicui/bento-grid";
import { MorphingText } from "../../Components/magicui/morphing-text";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function WebDevelopment() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  // Get morphing text types from translations
  const webTypes = (
    t("web-morphing-types") ||
    "Siti Web Aziendali|E-commerce|Applicazioni Web|Landing Pages|SaaS Platforms|Progressive Web Apps"
  ).split("|");

  const bentoItems = [
    {
      title: t("web-business-sites") || "Siti Web Aziendali",
      description:
        t("web-business-description") ||
        "Siti web professionali che rappresentano la tua azienda online con design personalizzato e contenuti ottimizzati.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:business"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:business"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
    {
      title: t("web-ecommerce") || "E-commerce",
      description:
        t("web-ecommerce-description") ||
        "Negozi online completi con gestione prodotti, pagamenti sicuri e analisi vendite per far crescere il tuo business.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:shopping-cart"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:shopping-cart"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("web-applications") || "Applicazioni Web",
      description:
        t("web-applications-description") ||
        "Applicazioni web avanzate, SaaS platforms e sistemi gestionali sviluppati con tecnologie moderne e scalabili.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:web"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:web"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("web-landing-pages") || "Landing Pages",
      description:
        t("web-landing-description") ||
        "Pagine di atterraggio ad alta conversione per campagne marketing, lancio prodotti e generazione lead.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:rocket-launch"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:rocket-launch"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
  ];

  const technologies = [
    { name: "React", icon: "logos:react" },
    { name: "WordPress", icon: "logos:wordpress-icon" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Shopify", icon: "logos:shopify" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Figma", icon: "logos:figma" },
  ];

  const benefits = [
    t("web-benefit-1") || "Design personalizzato e professionale",
    t("web-benefit-2") || "Ottimizzato per motori di ricerca (SEO)",
    t("web-benefit-3") || "Responsive su tutti i dispositivi",
    t("web-benefit-4") || "Performance e velocità ottimizzate",
    t("web-benefit-5") || "Sicurezza e backup automatici",
    t("web-benefit-6") || "Facile gestione contenuti",
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("web-development") || "Sviluppo Web"
        }`}
        description={
          t("web-meta-description") ||
          "Sviluppiamo siti web, e-commerce e applicazioni web moderne. Soluzioni complete dal sito vetrina alle piattaforme SaaS."
        }
        keywords={`sviluppo web, siti web, e-commerce, applicazioni web, wordpress, react, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/web-development`}
        alternateUrls={{
          it: "/it/services/web-development",
          en: "/en/services/web-development",
          "x-default": "/services/web-development",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section with MorphingText */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 blur-3xl opacity-30"
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
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-black dark:bg-white"
              >
                <Icon
                  icon="mdi:web"
                  className="h-12 w-12 text-white dark:text-black"
                />
              </motion.div>

              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                  <MorphingText
                    texts={webTypes}
                    className="text-gray-900 dark:text-white"
                  />
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  {t("web-subtitle") || "Professionali e Su Misura"}
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("web-hero-description") ||
                  "Siti web aziendali, e-commerce e landing page professionali per presentare la tua attività online e raggiungere nuovi clienti"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex items-center justify-center gap-x-6 relative z-[9999]"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={pulseAnimation}
                  className="relative z-[9999]"
                >
                  <Button
                    size="lg"
                    color="primary"
                    radius="full"
                    className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold relative z-[9999] cursor-pointer"
                    endContent={
                      <Icon
                        icon="material-symbols:arrow-forward"
                        className="text-xl"
                      />
                    }
                    onPress={handleContactClick}
                  >
                    {t("get-quote") || "Richiedi Preventivo"}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types of Websites Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
                {t("web-types-title") || "Types of Websites"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("web-types-description") ||
                  "We create complete websites with everything you need for online success. Each solution is tailored to your specific business needs and goals."}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Custom Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gray-900 dark:bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="material-symbols:design-services"
                        className="h-8 w-8 text-white dark:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("web-custom-title") || "Custom Design"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("web-custom-description") ||
                        "We create unique business websites that reflect your brand identity and capture your customers' attention. Every element is carefully designed to represent your company's values and communicate your message effectively."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("web-custom-features") ||
                        "Our custom designs include responsive layouts, modern aesthetics, intuitive navigation, and optimized user experience. We work closely with you to ensure every detail matches your vision and business objectives."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("web-custom-tags") ||
                        "Brand Identity,Responsive Design,User Experience,Modern Aesthetics"
                      )
                        .split(",")
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Showcase Websites */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gray-900 dark:bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="material-symbols:storefront"
                        className="h-8 w-8 text-white dark:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("web-showcase-title") || "Showcase Websites"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("web-showcase-description") ||
                        "Elegant websites designed to present your company, services and products professionally and attractively. Perfect for businesses that want to establish a strong online presence and build trust with potential customers."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("web-showcase-features") ||
                        "These sites focus on visual storytelling, professional imagery, clear service descriptions, and compelling calls-to-action. Ideal for consultants, agencies, restaurants, hotels, and service-based businesses."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("web-showcase-tags") ||
                        "Professional Image,Visual Storytelling,Service Presentation,Trust Building"
                      )
                        .split(",")
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* E-commerce */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gray-900 dark:bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="material-symbols:shopping-cart"
                        className="h-8 w-8 text-white dark:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("web-ecommerce-title") || "E-commerce"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("web-ecommerce-description") ||
                        "Complete online stores designed to sell your products with advanced shopping cart functionality, secure payment processing, and comprehensive order management systems. Turn your products into profitable online sales."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("web-ecommerce-features") ||
                        "Features include product catalogs, inventory management, multiple payment gateways, shipping integration, customer accounts, order tracking, and detailed analytics. Built on platforms like Shopify, WooCommerce, or custom solutions."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("web-ecommerce-tags") ||
                        "Online Sales,Payment Gateway,Inventory Management,Order Tracking"
                      )
                        .split(",")
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Landing Pages */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gray-900 dark:bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="material-symbols:rocket-launch"
                        className="h-8 w-8 text-white dark:text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("web-landing-title") || "Landing Pages"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("web-landing-description") ||
                        "High-converting landing pages specifically optimized for conversions and perfect for marketing campaigns, product launches, and lead generation. Designed with a single focus: turning visitors into customers or leads."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("web-landing-features") ||
                        "Each landing page includes compelling headlines, persuasive copy, social proof elements, clear value propositions, and strategically placed call-to-action buttons. A/B testing ready and analytics integrated for maximum performance."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("web-landing-tags") ||
                        "High Conversion,Lead Generation,A/B Testing,Campaign Focused"
                      )
                        .split(",")
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("web-additional-title") || "All Websites Include"}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:mobile-friendly"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("web-feature-responsive") || "Mobile Responsive"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("web-feature-responsive-desc") ||
                        "Perfect on all devices"}
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:search"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("web-feature-seo") || "SEO Optimized"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("web-feature-seo-desc") || "Built for search engines"}
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:speed"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("web-feature-performance") || "High Performance"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("web-feature-performance-desc") ||
                        "Fast loading speeds"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
                {t("web-technologies-title") || "Piattaforme che Utilizziamo"}
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
            t("faq-subtitle-web") ||
            "Risposte alle domande più comuni sullo sviluppo web"
          }
          ctaText={t("faq-cta-text") || "Hai altre domande?"}
          ctaSubtext={
            t("faq-cta-subtext-web") || "Parliamo del tuo progetto web"
          }
          benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
          faqs={[
            {
              question:
                t("web-faq-question-1") ||
                "Quanto tempo serve per creare un sito web?",
              answer:
                t("web-faq-answer-1") ||
                "Da 2-3 settimane per siti semplici fino a 8-12 settimane per e-commerce complessi, a seconda delle funzionalità e personalizzazioni.",
              icon: "material-symbols:schedule",
              delay: 0.1,
            },
            {
              question:
                t("web-faq-question-2") ||
                "Il sito sarà responsive per mobile?",
              answer:
                t("web-faq-answer-2") ||
                "Assolutamente! Tutti i nostri siti sono progettati mobile-first e funzionano perfettamente su smartphone, tablet e desktop.",
              icon: "material-symbols:mobile-friendly",
              delay: 0.2,
            },
            {
              question:
                t("web-faq-question-3") || "Fornite l'ottimizzazione SEO?",
              answer:
                t("web-faq-answer-3") ||
                "Sì, includiamo l'ottimizzazione SEO di base in tutti i progetti: meta tag, struttura del sito, velocità di caricamento e indicizzazione Google.",
              icon: "material-symbols:search",
              delay: 0.3,
            },
            {
              question:
                t("web-faq-question-4") ||
                "Posso aggiornare i contenuti autonomamente?",
              answer:
                t("web-faq-answer-4") ||
                "Sì, forniamo un sistema di gestione contenuti intuitivo e formazione per gestire il tuo sito in autonomia.",
              icon: "material-symbols:edit",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <section className="py-24 bg-black dark:bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl">
                {t("web-cta-title") || "Pronto a Creare il Tuo Sito Web?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700">
                {t("web-cta-description") ||
                  "Contattaci per discutere il tuo progetto e creare insieme il sito web perfetto per la tua azienda"}
              </p>
              <div className="mt-10">
                <motion.div animate={pulseAnimation}>
                  <Button
                    size="lg"
                    color="primary"
                    radius="full"
                    className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold relative z-[9999] cursor-pointer"
                    endContent={
                      <Icon
                        icon="material-symbols:arrow-forward"
                        className="text-xl"
                      />
                    }
                    onPress={handleContactClick}
                  >
                    {t("contact-us") || "Contattaci Ora"}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
