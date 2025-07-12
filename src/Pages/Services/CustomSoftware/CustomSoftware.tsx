import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";
import CTA from "../../../Components/Layout/CTA";
import CustomSoftwareHero from "./CustomSoftwareHero";
import CustomSoftwareAdvantages from "./CustomSoftwareAdvantages";

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

      {/* FAQ Section */}
      <ServiceFAQ
        title={t("faq-title") || "Domande Frequenti"}
        subtitle={
          t("faq-subtitle-custom") ||
          "Risposte alle domande più comuni sul software personalizzato"
        }
        ctaText={t("faq-cta-text") || "Hai altre domande?"}
        ctaSubtext={
          t("faq-cta-subtext-custom") || "Parliamo del tuo progetto software"
        }
        benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
        faqs={[
          {
            question:
              t("custom-faq-question-1") ||
              "Come capite le nostre esigenze specifiche?",
            answer:
              t("custom-faq-answer-1") ||
              "Iniziamo con sessioni di analisi dettagliate per comprendere i vostri processi, sfide e obiettivi prima di proporre soluzioni.",
            icon: "material-symbols:analytics",
            delay: 0.1,
          },
          {
            question:
              t("custom-faq-question-2") ||
              "Potete integrarvi con i nostri sistemi esistenti?",
            answer:
              t("custom-faq-answer-2") ||
              "Assolutamente! Siamo specializzati in integrazioni con ERP, CRM, database e sistemi legacy attraverso API moderne.",
            icon: "material-symbols:integration-instructions",
            delay: 0.2,
          },
          {
            question:
              t("custom-faq-question-3") ||
              "Cosa succede se abbiamo bisogno di modifiche durante lo sviluppo?",
            answer:
              t("custom-faq-answer-3") ||
              "Utilizziamo metodologia agile che permette modifiche durante lo sviluppo, con revisioni regolari e feedback continuo.",
            icon: "material-symbols:edit",
            delay: 0.3,
          },
          {
            question:
              t("custom-faq-question-4") ||
              "Fornite formazione per il nostro team?",
            answer:
              t("custom-faq-answer-4") ||
              "Sì, includiamo formazione completa e documentazione dettagliata per assicurare che il vostro team possa utilizzare il software efficacemente.",
            icon: "material-symbols:school",
            delay: 0.4,
          },
        ]}
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
