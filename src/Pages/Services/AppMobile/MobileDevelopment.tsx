import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import CTA from "../../../Components/Layout/CTA";
import ServiceHero from "../../../Components/ServiceHero";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import Benefits from "./Benefits";
import MobileWhy from "./MobileWhy";
import MobileTechnologies from "./MobileTechnologies";
import MobileAiPowered from "./MobileAiPowered";
import MobileAiBenefits from "./MobileAiBenefits";
import MobileAiUseCases from "./MobileAiUseCases";
import MobileAiStats from "./MobileAiStats";
import MobileAiCTA from "./MobileAiCTA";

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

        <ServiceHero
          title={
            t("mobile-hero-title") ||
            "La tua app mobile rivoluzionaria inizia qui"
          }
          description={
            t("mobile-hero-description") ||
            "Domina gli app store con un'esperienza mobile all'avanguardia che gli utenti ameranno. Nativa o cross-platform, iOS o Android - consegniamo eccellenza che si distingue"
          }
          buttonText={t("get-quote") || "Richiedi Preventivo"}
        />

        <MobileWhy />
        <MobileAiPowered />
        <MobileAiBenefits />
        <MobileAiStats />
        <MobileAiUseCases />
        <MobileAiCTA />

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
