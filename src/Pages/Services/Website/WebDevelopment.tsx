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
        subtitle={t("web-faq-subtitle")}
        faqs={[
          {
            question: t("web-faq-1-question"),
            answer: t("web-faq-1-answer"),
            icon: "solar:server-2-linear",
            delay: 0.1,
          },
          {
            question: t("web-faq-2-question"),
            answer: t("web-faq-2-answer"),
            icon: "iconamoon:clock",
            delay: 0.2,
          },
          {
            question: t("web-faq-3-question"),
            answer: t("web-faq-3-answer"),
            icon: "la:mobile",
            delay: 0.3,
          },
          {
            question: t("web-faq-4-question"),
            answer: t("web-faq-4-answer"),
            icon: "mdi:search",
            delay: 0.4,
          },
        ]}
      />
      <CTA />
    </>
  );
}
