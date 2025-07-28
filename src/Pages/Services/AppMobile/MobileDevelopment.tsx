import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import CTA from "../../../Components/Layout/CTA";
import AppHero from "./AppHero";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import Benefits from "./Benefits";
import MobileTechnologies from "./MobileTechnologies";
import MobileAiPowered from "./MobileAiPowered";

export default function MobileDevelopment() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("mobile-development") || "Sviluppo App Mobile"
        }`}
        description={
          t("mobile-seo-description") ||
          "Sviluppiamo app mobile native e cross-platform per iOS e Android. Soluzioni professionali per la tua presenza mobile."
        }
        keywords={`app mobile, sviluppo ios, sviluppo android, react native, flutter, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/mobile-development`}
        alternateUrls={{
          it: "/it/services/mobile-development",
          en: "/en/services/mobile-development",
          "x-default": "/services/mobile-development",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 hero-section">
        {/* Hero Section */}

        <AppHero />
        <MobileAiPowered />

        <Benefits />
        <MobileTechnologies />

        {/* FAQ Section */}
        <ServiceFAQ
          title={t("faq-title")}
          subtitle={t("faq-subtitle-mobile")}
          ctaText={t("faq-cta-text")}
          ctaSubtext={t("faq-cta-subtext-mobile")}
          benefitText={t("faq-benefit-text")}
          faqs={[
            {
              question: t("mobile-faq-question-1"),
              answer: t("mobile-faq-answer-1"),
              icon: "solar:wallet-money-line-duotone",
              delay: 0.1,
            },
            {
              question: t("mobile-faq-question-2"),
              answer: t("mobile-faq-answer-2"),
              icon: "iconamoon:clock",
              delay: 0.2,
            },
            {
              question: t("mobile-faq-question-3"),
              answer: t("mobile-faq-answer-3"),
              icon: "pajamas:work-item-maintenance",
              delay: 0.3,
            },
          ]}
        />

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
