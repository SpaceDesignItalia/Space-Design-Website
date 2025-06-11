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
                  icon="material-symbols:language"
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
                  Professionali e Su Misura
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

        {/* Bento Grid Features Section */}
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
                {t("websites-features-title") || "Tipologie di Siti Web"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("websites-features-description") ||
                  "Creiamo siti web completi con tutto ciò di cui hai bisogno per il successo online"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BentoGrid className="mx-auto">
                {bentoItems.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
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

        {/* Benefits Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {t("websites-benefits-title") ||
                    "Perché Scegliere i Nostri Siti Web"}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t("websites-benefits-description") ||
                    "I nostri siti web sono progettati per il successo del tuo business"}
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <Icon
                        icon="material-symbols:check-circle"
                        className="h-6 w-6 text-black dark:text-white flex-shrink-0"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={scaleIn} className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 flex items-center justify-center">
                  <Icon
                    icon="material-symbols:language"
                    className="h-32 w-32 text-gray-600 dark:text-gray-400"
                  />
                </div>
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
