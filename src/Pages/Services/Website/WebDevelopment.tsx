import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import CTA from "../../Home/CTA";
import ServiceHero from "../../../Components/ServiceHero";
import WebsiteModern from "./WebsiteModern";
import WebsiteTechnologies from "./WebsiteTechnologies";

export default function WebDevelopment() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("web-development") || "Sviluppo Web"
        }`}
        description={
          t("web-meta-description") ||
          "Sviluppiamo siti web, e-commerce e applicazioni web moderne. Soluzioni complete dal sito vetrina alle piattaforme SaaS."
        }
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
      <ServiceHero
        title={
          t("web-hero-title") ||
          "Soluzioni web strategiche per la crescita aziendale"
        }
        description={
          t("web-hero-description") ||
          "Creiamo siti web che non solo sono belli, ma anche funzionali e ottimizzati per i motori di ricerca. Il nostro team di esperti ti aiuterà a raggiungere i tuoi obiettivi di business con un sito web che sia bello e funzionale."
        }
        buttonText={t("web-cta-button") || "Richiedi Preventivo"}
      />
      <WebsiteModern />
      <WebsiteTechnologies />
      <CTA />
    </>
  );
}
