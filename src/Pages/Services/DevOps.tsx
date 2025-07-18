import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import ServiceFAQ from "../../Components/FAQ/ServiceFAQ";
import CTA from "../../Components/Layout/CTA";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollingBanner from "../../Components/Home/ScrollingBanner";

export default function DevOps() {
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
        title={`Space Design Italia - ${t("devops")}`}
        description={t("devops-meta-description")}
        keywords={t("devops-seo-keywords")}
        url={`/${language}/services/devops`}
        alternateUrls={{
          it: "/it/services/devops",
          en: "/en/services/devops",
          "x-default": "/services/devops",
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
                {t("devops")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {t("devops-hero-description")}
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
                {t("devops-cta-button")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-black text-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-bold tracking-tight sm:text-5xl mb-16">
            {t("devops-features-title")}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* CI/CD Pipeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl"></div>
              <div className="relative p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <Icon icon="mdi:git" className="text-2xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t("devops-ci-cd-title")}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t("devops-ci-cd-description")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Infrastructure as Code */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl"></div>
              <div className="relative p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <Icon
                      icon="mdi:terraform"
                      className="text-2xl text-black"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t("devops-iac-title")}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t("devops-iac-description")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Terraform", "Ansible", "CloudFormation", "Pulumi"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              {t("devops-technologies-title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("devops-technologies-description")}
            </p>
          </motion.div>

          <div className="relative">
            <ScrollingBanner>
              <div className="flex items-center space-x-16">
                {[
                  { name: "Docker", icon: "logos:docker-icon" },
                  { name: "Kubernetes", icon: "logos:kubernetes" },
                  { name: "Jenkins", icon: "logos:jenkins" },
                  { name: "GitLab", icon: "logos:gitlab" },
                  { name: "GitHub", icon: "mdi:github" },
                  { name: "Terraform", icon: "logos:terraform-icon" },
                  { name: "Ansible", icon: "logos:ansible" },
                  { name: "AWS", icon: "logos:aws" },
                  { name: "Azure", icon: "logos:microsoft-azure" },
                  { name: "GCP", icon: "logos:google-cloud" },
                  { name: "Prometheus", icon: "logos:prometheus" },
                  { name: "Grafana", icon: "logos:grafana" },
                  { name: "Nginx", icon: "logos:nginx" },
                  { name: "Apache", icon: "logos:apache" },
                  { name: "Linux", icon: "logos:linux-tux" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-16 h-16 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                      <Icon
                        icon={tech.icon}
                        className="w-8 h-8 text-white dark:text-black"
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
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ
        title={t("devops-faq-title")}
        subtitle={t("devops-faq-subtitle")}
        ctaText={t("devops-faq-cta-text")}
        ctaSubtext={t("devops-faq-cta-subtext")}
        benefitText={t("devops-faq-benefit-text")}
        faqs={[
          {
            question: t("devops-faq-question-1"),
            answer: t("devops-faq-answer-1"),
            icon: "solar:clock-circle-line-duotone",
            delay: 0.1,
          },
          {
            question: t("devops-faq-question-2"),
            answer: t("devops-faq-answer-2"),
            icon: "solar:chart-2-line-duotone",
            delay: 0.2,
          },
          {
            question: t("devops-faq-question-3"),
            answer: t("devops-faq-answer-3"),
            icon: "solar:cloud-line-duotone",
            delay: 0.3,
          },
          {
            question: t("devops-faq-question-4"),
            answer: t("devops-faq-answer-4"),
            icon: "solar:shield-keyhole-line-duotone",
            delay: 0.4,
          },
        ]}
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
