import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import CTA from "../../Components/Layout/CTA";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollingBanner from "../../Components/Home/ScrollingBanner";

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
              className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
                {t("cloud-integration-hero-title")}
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
              {t("cloud-integration-technologies-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("cloud-integration-technologies-description")}
            </p>
          </motion.div>

          <div className="relative">
            <ScrollingBanner>
              <div className="flex items-center">
                {[
                  { name: "AWS", icon: "logos:aws" },
                  { name: "Azure", icon: "logos:microsoft-azure" },
                  { name: "Google Cloud", icon: "logos:google-cloud" },
                  { name: "Docker", icon: "logos:docker-icon" },
                  { name: "Kubernetes", icon: "logos:kubernetes" },
                  { name: "Terraform", icon: "logos:terraform-icon" },
                  { name: "Ansible", icon: "logos:ansible" },
                  { name: "Jenkins", icon: "logos:jenkins" },
                  { name: "GitLab", icon: "logos:gitlab" },
                  { name: "GitHub", icon: "logos:github-icon" },
                  { name: "MySQL", icon: "logos:mysql" },
                  { name: "PostgreSQL", icon: "logos:postgresql" },
                  { name: "MongoDB", icon: "logos:mongodb" },
                  { name: "Redis", icon: "logos:redis" },
                  { name: "Elasticsearch", icon: "logos:elasticsearch" },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-8">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-200 rounded-xl flex items-center justify-center mb-2">
                      <Icon
                        icon={tech.icon}
                        className="w-8 h-8 text-gray-800 dark:text-gray-800"
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
                {t("cloud-integration-migration-strategy-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("cloud-integration-migration-strategy-description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("cloud-integration-security-compliance-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("cloud-integration-security-compliance-description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Benefits */}
      <section className="bg-white dark:bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              {t("cloud-integration-benefits-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("cloud-integration-benefits-description")}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "solar:rocket-line-duotone",
                title: t("cloud-integration-benefit-speed"),
                description: t("cloud-integration-benefit-speed-desc"),
              },
              {
                icon: "solar:shield-check-line-duotone",
                title: t("cloud-integration-benefit-security"),
                description: t("cloud-integration-benefit-security-desc"),
              },
              {
                icon: "solar:chart-2-line-duotone",
                title: t("cloud-integration-benefit-scalability"),
                description: t("cloud-integration-benefit-scalability-desc"),
              },
              {
                icon: "solar:wallet-line-duotone",
                title: t("cloud-integration-benefit-cost"),
                description: t("cloud-integration-benefit-cost-desc"),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon
                    icon={benefit.icon}
                    className="w-8 h-8 text-gray-900 dark:text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
