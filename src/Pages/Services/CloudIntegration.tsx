import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import CTA from "../../Components/Layout/CTA";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CloudIntegration() {
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
        title={`Space Design Italia - ${t("cloud-integration")}`}
        description={t("cloud-integration-meta-description")}
        keywords={t("cloud-integration-seo-keywords")}
        url={`/${language}/services/cloud-integration`}
        alternateUrls={{
          it: "/it/services/cloud-integration",
          en: "/en/services/cloud-integration",
          "x-default": "/services/cloud-integration",
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
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                {t("cloud-integration")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {t("cloud-integration-hero-description")}
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
                {t("cloud-integration-cta-button")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section - Bento Grid Style */}
      <section className="bg-black text-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-bold tracking-tight sm:text-5xl mb-16">
            {t("cloud-integration-solutions-title")}
          </h2>

          <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Main Feature - API Integration */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                    {t("cloud-integration-api-integration-title")}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t("cloud-integration-api-integration-description")}
                  </p>
                </div>
                <div className="relative flex-1 w-full grow p-6">
                  <div className="h-full bg-black rounded-2xl p-6">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-green-400 font-mono text-sm">
                        <span className="text-blue-400">GET</span> /api/users
                        <span className="text-gray-500"> → </span>
                        <span className="text-yellow-400">200</span>
                        <span className="text-gray-500"> OK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 lg:rounded-l-[2rem]" />
            </div>

            {/* Microservices */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 flex-1 flex flex-col justify-center">
                  <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                    {t("cloud-integration-microservices-title")}
                  </p>
                  <p className="mt-4 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t("cloud-integration-microservices-description")}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 max-lg:rounded-t-[2rem]" />
            </div>

            {/* Data Sync */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 flex-1 flex flex-col justify-center">
                  <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                    {t("cloud-integration-data-sync-title")}
                  </p>
                  <p className="mt-4 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t("cloud-integration-data-sync-description")}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10" />
            </div>

            {/* Cloud Providers */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10 flex-1 flex flex-col justify-center">
                  <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">
                    {t("cloud-integration-multi-cloud-title")}
                  </p>
                  <p className="mt-4 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    {t("cloud-integration-multi-cloud-description")}
                  </p>

                  {/* Multi-Cloud Benefits */}
                  <div className="mt-8">
                    <div className="space-y-3 max-w-sm mx-auto">
                      {[
                        {
                          benefit: t(
                            "cloud-integration-benefit-cost-optimization"
                          ),
                          icon: "solar:dollar-minimalistic-line-duotone",
                        },
                        {
                          benefit: t(
                            "cloud-integration-benefit-high-availability"
                          ),
                          icon: "solar:shield-check-line-duotone",
                        },
                        {
                          benefit: t(
                            "cloud-integration-benefit-vendor-lock-in-prevention"
                          ),
                          icon: "solar:lock-unlocked-line-duotone",
                        },
                        {
                          benefit: t(
                            "cloud-integration-benefit-geographic-distribution"
                          ),
                          icon: "solar:map-point-line-duotone",
                        },
                      ].map((item) => (
                        <div
                          key={item.benefit}
                          className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg"
                        >
                          <Icon
                            icon={item.icon}
                            className="w-5 h-5 text-blue-400"
                          />
                          <span className="text-xs font-medium text-white">
                            {item.benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              {t("cloud-integration-technologies-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("cloud-integration-technologies-description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "AWS", icon: "logos:aws" },
              { name: "Azure", icon: "logos:microsoft-azure" },
              { name: "Google Cloud", icon: "logos:google-cloud" },
              { name: "Docker", icon: "logos:docker-icon" },
              { name: "Kubernetes", icon: "logos:kubernetes" },
              { name: "Terraform", icon: "logos:terraform-icon" },
              { name: "MySQL", icon: "logos:mysql" },
              { name: "PostgreSQL", icon: "logos:postgresql" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-200 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    icon={tech.icon}
                    className="w-10 h-10 text-gray-800 dark:text-gray-800"
                  />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
            {t("cloud-integration-comparison-title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {t("cloud-integration-comparison-subtitle")}
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Nostro approccio */}
            <div className="relative flex-1 bg-white border-2 border-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition hover:scale-105">
              <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                Top
              </span>
              <div className="mb-4">
                <span className="inline-block bg-black text-white rounded-full p-3">
                  {/* Trofeo */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 22h16"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14.66V22h4v-7.34"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 2H6v5a6 6 0 0 0 12 0V2Z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {t("cloud-integration-comparison-our-approach")}
              </h3>
              <ul className="text-gray-800 text-base space-y-3 mt-4 text-left">
                <li>
                  <b>{t("cloud-integration-comparison-migration")}</b>:{" "}
                  {t("cloud-integration-comparison-migration-our")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-cost")}</b>:{" "}
                  {t("cloud-integration-comparison-cost-our")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-security")}</b>:{" "}
                  {t("cloud-integration-comparison-security-our")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-support")}</b>:{" "}
                  {t("cloud-integration-comparison-support-our")}
                </li>
              </ul>
            </div>
            {/* Soluzioni tradizionali */}
            <div className="flex-1 bg-gray-50 border border-gray-300 rounded-2xl shadow p-8 flex flex-col items-center text-center transition hover:scale-105">
              <div className="mb-4">
                <span className="inline-block bg-gray-300 text-gray-700 rounded-full p-3">
                  {/* Lumaca - Lentezza */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="#555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M12 2a10 10 0 0 0-10 10"
                      stroke="#555"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#555"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("cloud-integration-comparison-traditional")}
              </h3>
              <ul className="text-gray-700 text-base space-y-3 mt-4 text-left">
                <li>
                  <b>{t("cloud-integration-comparison-migration")}</b>:{" "}
                  {t("cloud-integration-comparison-migration-traditional")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-cost")}</b>:{" "}
                  {t("cloud-integration-comparison-cost-traditional")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-security")}</b>:{" "}
                  {t("cloud-integration-comparison-security-traditional")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-support")}</b>:{" "}
                  {t("cloud-integration-comparison-support-traditional")}
                </li>
              </ul>
            </div>
            {/* Altri provider */}
            <div className="flex-1 bg-gray-50 border border-gray-300 rounded-2xl shadow p-8 flex flex-col items-center text-center transition hover:scale-105">
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-gray-700 rounded-full p-3">
                  {/* Orologio - Lentezza */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#888"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v5l3 3"
                      stroke="#888"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("cloud-integration-comparison-other-providers")}
              </h3>
              <ul className="text-gray-700 text-base space-y-3 mt-4 text-left">
                <li>
                  <b>{t("cloud-integration-comparison-migration")}</b>:{" "}
                  {t("cloud-integration-comparison-migration-other")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-cost")}</b>:{" "}
                  {t("cloud-integration-comparison-cost-other")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-security")}</b>:{" "}
                  {t("cloud-integration-comparison-security-other")}
                </li>
                <li>
                  <b>{t("cloud-integration-comparison-support")}</b>:{" "}
                  {t("cloud-integration-comparison-support-other")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title={t("cloud-integration-faq-title")}
        subtitle={t("cloud-integration-faq-subtitle")}
        ctaText={t("cloud-integration-faq-cta-text")}
        ctaSubtext={t("cloud-integration-faq-cta-subtext")}
        benefitText={t("cloud-integration-faq-benefit-text")}
        faqs={[
          {
            question: t("cloud-integration-faq-question-1"),
            answer: t("cloud-integration-faq-answer-1"),
            icon: "solar:clock-circle-line-duotone",
            delay: 0.1,
          },
          {
            question: t("cloud-integration-faq-question-2"),
            answer: t("cloud-integration-faq-answer-2"),
            icon: "solar:database-line-duotone",
            delay: 0.2,
          },
          {
            question: t("cloud-integration-faq-question-3"),
            answer: t("cloud-integration-faq-answer-3"),
            icon: "solar:shield-keyhole-line-duotone",
            delay: 0.3,
          },
          {
            question: t("cloud-integration-faq-question-4"),
            answer: t("cloud-integration-faq-answer-4"),
            icon: "solar:cloud-line-duotone",
            delay: 0.4,
          },
        ]}
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
