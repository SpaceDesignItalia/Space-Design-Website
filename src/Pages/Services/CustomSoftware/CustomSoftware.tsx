import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import CTA from "../../../Components/Layout/CTA";
import CustomSoftwareHero from "./CustomSoftwareHero";
import CustomSoftwareAdvantages from "./CustomSoftwareAdvantages";
import CustomSoftwareAiPowered from "./CustomSoftwareAiPowered";
import CustomSoftwareTechnologies from "./CustomSoftwareTechnologies";

export default function CustomSoftware() {
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

      <CustomSoftwareHero />
      <CustomSoftwareAdvantages />
      <CustomSoftwareAiPowered />
      <CustomSoftwareTechnologies />

      {/* FAQ Section */}
      <ServiceFAQ
        title={t("faq-title") || "Domande Frequenti"}
        subtitle={t("faq-subtitle-custom")}
        ctaText={t("faq-cta-text") || "Hai altre domande?"}
        ctaSubtext={
          t("faq-cta-subtext-custom") || "Parliamo del tuo progetto software"
        }
        benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
        faqs={[
          {
            question: t("custom-faq-question-1"),
            answer: t("custom-faq-answer-1"),
            icon: "solar:wallet-money-line-duotone",
            delay: 0.1,
          },
          {
            question: t("custom-faq-question-2"),
            answer: t("custom-faq-answer-2"),
            icon: "gis:map-poi",
            delay: 0.2,
          },
          {
            question: t("custom-faq-question-3"),
            answer: t("custom-faq-answer-3"),
            icon: "iconamoon:clock",
            delay: 0.3,
          },
          {
            question: t("custom-faq-question-4"),
            answer: t("custom-faq-answer-4"),
            icon: "jam:code",
            delay: 0.4,
          },
        ]}
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
