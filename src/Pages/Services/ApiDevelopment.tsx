import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import CTA from "../../Components/Layout/CTA";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollingBanner from "../../Components/Home/ScrollingBanner";

export default function ApiDevelopment() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("api-development")}`}
        description={t("api-development-meta-description")}
        keywords={t("api-development-seo-keywords")}
        url={`/${language}/services/api-development`}
        alternateUrls={{
          it: "/it/services/api-development",
          en: "/en/services/api-development",
          "x-default": "/services/api-development",
        }}
      />

      {/* Hero Section */}
      <section className="relative h-dvh w-full overflow-hidden bg-background pt-[70px]">
        <div className="relative flex h-full items-center justify-center px-6 z-10">
          <motion.div
            className="text-center max-w-4xl"
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
                Sviluppo API moderni, sicuri e su misura per integrare i tuoi
                sistemi
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {t("api-development-hero-description")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <Button
                size="lg"
                color="primary"
                radius="full"
                onPress={handleContactClick}
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                endContent={
                  <Icon
                    icon="material-symbols:arrow-forward"
                    className="text-xl"
                  />
                }
              >
                {t("api-development-cta-button")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section - Cards Layout */}
      <section className="bg-black text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t("api-development-services-title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("api-development-services-description")}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* REST API */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                    <Icon icon="mdi:api" className="text-2xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t("api-development-rest-api-title")}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t("api-development-rest-api-description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JSON", "JWT", "OAuth2", "OpenAPI"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GraphQL */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                    <Icon
                      icon="logos:graphql"
                      className="text-2xl text-black"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t("api-development-graphql-title")}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t("api-development-graphql-description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Schema", "Resolvers", "Subscriptions", "Playground"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* WebSocket */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                    <Icon icon="mdi:web-sync" className="text-2xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t("api-development-real-time-title")}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t("api-development-real-time-description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WebSocket", "SSE", "Socket.io", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies & Frameworks */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              {t("api-development-technologies-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("api-development-technologies-description")}
            </p>
          </motion.div>

          <div className="relative">
            <ScrollingBanner>
              <div className="flex items-center">
                {[
                  { name: "Node.js", icon: "logos:nodejs-icon" },
                  { name: "Express", icon: "logos:express" },
                  { name: "Python", icon: "logos:python" },
                  { name: "Django", icon: "logos:django" },
                  { name: "Java", icon: "logos:java" },
                  { name: "Spring", icon: "logos:spring-icon" },
                  { name: "PHP", icon: "logos:php" },
                  { name: "Laravel", icon: "logos:laravel" },
                  { name: "C#", icon: "logos:c-sharp" },
                  { name: ".NET", icon: "logos:dotnet" },
                  { name: "MySQL", icon: "logos:mysql" },
                  { name: "PostgreSQL", icon: "logos:postgresql" },
                  { name: "MongoDB", icon: "logos:mongodb" },
                  { name: "Redis", icon: "logos:redis" },
                  { name: "REST", icon: "mdi:api" },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-8">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-2">
                      <Icon
                        icon={tech.icon}
                        className={`w-8 h-8 ${
                          tech.icon === "mdi:api"
                            ? "text-black dark:text-black"
                            : "text-gray-800 dark:text-gray-800"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollingBanner>
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("api-development-auto-documentation-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("api-development-auto-documentation-description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("api-development-full-testing-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("api-development-full-testing-description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Performance Metrics */}
      <section className="bg-white dark:bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              {t("api-development-metrics-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("api-development-metrics-description")}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 mb-16">
            {[
              {
                number: "99.9%",
                label: t("api-development-metric-uptime"),
                icon: "solar:clock-circle-line-duotone",
              },
              {
                number: "<50ms",
                label: t("api-development-metric-response"),
                icon: "solar:rocket-line-duotone",
              },
              {
                number: "24/7",
                label: t("api-development-metric-monitoring"),
                icon: "solar:shield-check-line-duotone",
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    icon={metric.icon}
                    className="w-8 h-8 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title={t("api-development-faq-title")}
        subtitle={t("api-development-faq-subtitle")}
        ctaText={t("api-development-faq-cta-text")}
        ctaSubtext={t("api-development-faq-cta-subtext")}
        benefitText={t("api-development-faq-benefit-text")}
        faqs={[
          {
            question: t("api-development-faq-question-1"),
            answer: t("api-development-faq-answer-1"),
            icon: "solar:clock-circle-line-duotone",
            delay: 0.1,
          },
          {
            question: t("api-development-faq-question-2"),
            answer: t("api-development-faq-answer-2"),
            icon: "solar:code-line-duotone",
            delay: 0.2,
          },
          {
            question: t("api-development-faq-question-3"),
            answer: t("api-development-faq-answer-3"),
            icon: "solar:shield-keyhole-line-duotone",
            delay: 0.3,
          },
          {
            question: t("api-development-faq-question-4"),
            answer: t("api-development-faq-answer-4"),
            icon: "solar:book-line-duotone",
            delay: 0.4,
          },
        ]}
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
