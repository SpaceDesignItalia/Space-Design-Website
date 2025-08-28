import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import CTA from "../../../Components/Layout/CTA";
import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import StartupHero from "./StartupHero";
import StartupService from "./StartupService";
import StartupStrategy from "./StartupStrategy";

export default function Startup() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("custom-software")}`}
        description={t("custom-software-meta-description")}
        keywords={t("custom-software-seo-keywords")}
        url={`/${language}/services/custom-software`}
        alternateUrls={{
          it: "/it/services/custom-software",
          en: "/en/services/custom-software",
          "x-default": "/services/custom-software",
        }}
      />

      <StartupHero />
      <StartupService />
      <StartupStrategy />
      <ServiceFAQ
        title={t("faq-title")}
        subtitle={t("mvp-faq-subtitle")}
        ctaText={t("faq-cta-title")}
        ctaSubtext={t("mvp-faq-cta-subtext")}
        benefitText={t("faq-benefit-text")}
        faqs={[
          {
            question: t("startup-mvp-faq-development-time-question"),
            answer: t("startup-mvp-faq-development-time-answer"),
            icon: "iconamoon:clock",
            delay: 0.1,
          },
          {
            question: t("startup-mvp-faq-cost-question"),
            answer: t("startup-mvp-faq-cost-answer"),
            icon: "solar:calculator-line-duotone",
            delay: 0.2,
          },
          {
            question: t("startup-mvp-faq-scalability-question"),
            answer: t("startup-mvp-faq-scalability-answer"),
            icon: "solar:chart-2-line-duotone",
            delay: 0.3,
          },
        ]}
      />
      <CTA />
    </>
  );
}
