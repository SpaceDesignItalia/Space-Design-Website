import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import CTA from "../../../Components/Layout/CTA";
import WebsiteModern from "./WebsiteModern";
import WebsiteTechnologies from "./WebsiteTechnologies";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import WebsiteHero from "./WebsiteHero";
import WebsiteJamstack from "./WebJamstack";

export default function WebDevelopment() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("web-development")}`}
        description={t("web-meta-description")}
        keywords={`sviluppo web, siti web, e-commerce, applicazioni web, responsive design, SEO, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/services/web-development`}
        alternateUrls={{
          it: "/it/services/web-development",
          en: "/en/services/web-development",
          "x-default": "/services/web-development",
        }}
      />
      <WebsiteHero />
      <WebsiteModern />
      <WebsiteJamstack />
      <WebsiteTechnologies />
      <ServiceFAQ
        title={t("faq-title")}
        subtitle={t("faq-subtitle-web")}
        faqs={[
          {
            question: t("web-faq-question-1"),
            answer: t("web-faq-answer-1"),
            icon: "solar:server-2-linear",
            delay: 0.1,
          },
          {
            question: t("web-faq-question-2"),
            answer: t("web-faq-answer-2"),
            icon: "iconamoon:clock",
            delay: 0.2,
          },
          {
            question: t("web-faq-question-3"),
            answer: t("web-faq-answer-3"),
            icon: "pajamas:work-item-maintenance",
            delay: 0.3,
          },
          {
            question: t("web-faq-question-4"),
            answer: t("web-faq-answer-4"),
            icon: "solar:wallet-money-line-duotone",
            delay: 0.4,
          },
        ]}
      />
      <CTA />
    </>
  );
}
