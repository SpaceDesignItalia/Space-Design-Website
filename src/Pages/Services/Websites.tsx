import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../Components/magicui/bento-grid";
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Websites() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const websiteTypes = [
    "Siti Aziendali",
    "E-commerce",
    "Landing Pages",
    "Portfolio",
    "Blog",
    "Siti Vetrina",
  ];

  const bentoItems = [
    {
      title: t("websites-custom-design") || "Design Personalizzato",
      description:
        t("websites-custom-description") ||
        "Creiamo siti web aziendali unici che riflettono la tua identità di brand e catturano l'attenzione dei tuoi clienti.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:design-services"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:design-services"
          className="h-4 w-4 text-neutral-500"
        />
      ),
      className: "md:col-span-2",
    },
    {
      title: t("websites-showcase") || "Siti Vetrina",
      description:
        t("websites-showcase-description") ||
        "Siti web eleganti per presentare la tua azienda, i tuoi servizi e prodotti in modo professionale e accattivante.",
      header: (
        <div className="w-full h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Icon
            icon="material-symbols:storefront"
            className="h-12 w-12 text-gray-600 dark:text-gray-400"
          />
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:storefront"
          className="h-4 w-4 text-neutral-500"
        />
      ),
    },
    {
      title: t("websites-ecommerce") || "E-commerce",
      description:
        t("websites-ecommerce-description") ||
        "Negozi online completi per vendere i tuoi prodotti con carrello, pagamenti sicuri e gestione ordini.",
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
      title: t("websites-landing") || "Landing Pages",
      description:
        t("websites-landing-description") ||
        "Pagine di atterraggio ottimizzate per conversioni, perfette per campagne marketing e lancio prodotti.",
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
    { name: "WordPress", icon: "logos:wordpress-icon" },
    { name: "Shopify", icon: "logos:shopify" },
    { name: "Wix", icon: "simple-icons:wix" },
    { name: "Webflow", icon: "logos:webflow" },
    { name: "Squarespace", icon: "simple-icons:squarespace" },
    { name: "Figma", icon: "logos:figma" },
  ];

  const benefits = [
    t("websites-benefit-1") || "Presenza online immediata",
    t("websites-benefit-2") || "Facile da aggiornare autonomamente",
    t("websites-benefit-3") || "Costi contenuti e tempi rapidi",
    t("websites-benefit-4") || "Design moderno e professionale",
    t("websites-benefit-5") || "Ottimizzato per Google",
    t("websites-benefit-6") || "Responsive su tutti i dispositivi",
  ];

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("websites") || "Siti Web"}`}
        description={
          t("websites-meta-description") ||
          "Creiamo siti web personalizzati e professionali. Design unico, responsive e ottimizzato per il tuo business."
        }
        keywords={`siti web, design web, wordpress, e-commerce, siti responsive, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/websites`}
        alternateUrls={{
          it: "/it/services/websites",
          en: "/en/services/websites",
          "x-default": "/services/websites",
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
                    texts={websiteTypes}
                    className="text-gray-900 dark:text-white"
                  />
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  {t("websites-subtitle") || "Professionali e Su Misura"}
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                {t("websites-hero-description") ||
                  "Siti web aziendali, e-commerce e landing page professionali per presentare la tua attività online e raggiungere nuovi clienti"}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("get-quote") || "Richiedi Preventivo"}
                </Button>
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
                {t("websites-types-title") || "Types of Websites"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("websites-types-description") ||
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
                      {t("websites-custom-title") || "Custom Design"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("websites-custom-description") ||
                        "We create unique business websites that reflect your brand identity and capture your customers' attention. Every element is carefully designed to represent your company's values and communicate your message effectively."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("websites-custom-features") ||
                        "Our custom designs include responsive layouts, modern aesthetics, intuitive navigation, and optimized user experience. We work closely with you to ensure every detail matches your vision and business objectives."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("websites-custom-tags") ||
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
                      {t("websites-showcase-title") || "Showcase Websites"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("websites-showcase-description") ||
                        "Elegant websites designed to present your company, services and products professionally and attractively. Perfect for businesses that want to establish a strong online presence and build trust with potential customers."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("websites-showcase-features") ||
                        "These sites focus on visual storytelling, professional imagery, clear service descriptions, and compelling calls-to-action. Ideal for consultants, agencies, restaurants, hotels, and service-based businesses."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("websites-showcase-tags") ||
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
                      {t("websites-ecommerce-title") || "E-commerce"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("websites-ecommerce-description") ||
                        "Complete online stores designed to sell your products with advanced shopping cart functionality, secure payment processing, and comprehensive order management systems. Turn your products into profitable online sales."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("websites-ecommerce-features") ||
                        "Features include product catalogs, inventory management, multiple payment gateways, shipping integration, customer accounts, order tracking, and detailed analytics. Built on platforms like Shopify, WooCommerce, or custom solutions."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("websites-ecommerce-tags") ||
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
                      {t("websites-landing-title") || "Landing Pages"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {t("websites-landing-description") ||
                        "High-converting landing pages specifically optimized for conversions and perfect for marketing campaigns, product launches, and lead generation. Designed with a single focus: turning visitors into customers or leads."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {t("websites-landing-features") ||
                        "Each landing page includes compelling headlines, persuasive copy, social proof elements, clear value propositions, and strategically placed call-to-action buttons. A/B testing ready and analytics integrated for maximum performance."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        t("websites-landing-tags") ||
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
                  {t("websites-additional-title") || "All Websites Include"}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:mobile-friendly"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("websites-feature-responsive") || "Mobile Responsive"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("websites-feature-responsive-desc") ||
                        "Perfect on all devices"}
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:search"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("websites-feature-seo") || "SEO Optimized"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("websites-feature-seo-desc") ||
                        "Built for search engines"}
                    </p>
                  </div>
                  <div className="text-center">
                    <Icon
                      icon="material-symbols:speed"
                      className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("websites-feature-performance") || "High Performance"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("websites-feature-performance-desc") ||
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
                {t("websites-technologies-title") ||
                  "Piattaforme che Utilizziamo"}
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
                {t("websites-cta-title") || "Pronto a Creare il Tuo Sito Web?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 dark:text-gray-700">
                {t("websites-cta-description") ||
                  "Contattaci per discutere il tuo progetto e creare insieme il sito web perfetto per la tua azienda"}
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
                  endContent={<Icon icon="material-symbols:arrow-forward" />}
                  onClick={handleContactClick}
                >
                  {t("contact-us") || "Contattaci Ora"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
