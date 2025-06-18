import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import AppHero from "./AppHero";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import Benefits from "./Benefits";
import ServiceStack from "./ServiceStack";

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function MobileDevelopment() {
  const { t, language } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: "bi:phone",
      title: t("mobile-native-apps") || "App Native",
      description:
        t("mobile-native-description") ||
        "Sviluppiamo app native per iOS e Android che sfruttano al massimo le potenzialità del dispositivo, garantendo performance eccellenti e un'esperienza utente fluida.",
    },
    {
      icon: "material-symbols:devices",
      title: t("mobile-cross-platform") || "Cross-Platform",
      description:
        t("mobile-cross-platform-description") ||
        "Realizziamo app multi-piattaforma con React Native e Flutter, riducendo i tempi di sviluppo mantenendo alta qualità e funzionalità native.",
    },
    {
      icon: "material-symbols:speed",
      title: t("mobile-performance") || "Performance Ottimizzate",
      description:
        t("mobile-performance-description") ||
        "Ottimizziamo ogni aspetto dell'app per garantire velocità, fluidità e un consumo efficiente della batteria.",
    },
    {
      icon: "material-symbols:security",
      title: t("mobile-security") || "Sicurezza Avanzata",
      description:
        t("mobile-security-description") ||
        "Implementiamo protocolli di sicurezza all'avanguardia per proteggere i dati sensibili degli utenti.",
    },
  ];

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

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}

        <AppHero />

        <ServiceStack />

        <Benefits />

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
            {
              question: t("mobile-faq-question-4"),
              answer: t("mobile-faq-answer-4"),
              icon: "streamline-cyber:multi-platform-2",
              delay: 0.4,
            },
          ]}
        />

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
}
