import { useLanguage } from "../../../context/LanguageContext";
import ServiceFAQ from "../../../Components/FAQ/ServiceFAQ";

export default function CustomSoftwareFAQ() {
  const { t } = useLanguage();

  return (
    <ServiceFAQ
      title={t("faq-title") || "Domande Frequenti"}
      subtitle={
        t("faq-subtitle-custom-software") ||
        "Tutto quello che devi sapere sullo sviluppo di software personalizzato"
      }
      ctaText={t("faq-cta-text") || "Hai altre domande?"}
      ctaSubtext={
        t("faq-cta-subtext-custom-software") ||
        "Contattaci per una consulenza gratuita sul tuo progetto software"
      }
      benefitText={t("faq-benefit-text") || "Consulenza gratuita"}
      faqs={[
        {
          question:
            t("custom-software-faq-question-1") ||
            "Quanto tempo ci vuole per sviluppare un software personalizzato?",
          answer:
            t("custom-software-faq-answer-1") ||
            "I tempi variano in base alla complessità del progetto. Un software semplice richiede 2-4 mesi, mentre soluzioni enterprise complesse possono richiedere 6-12 mesi. Forniamo sempre una timeline dettagliata dopo l'analisi iniziale.",
          icon: "material-symbols:schedule",
          delay: 0.1,
        },
        {
          question:
            t("custom-software-faq-question-2") ||
            "Quanto costa sviluppare un software su misura?",
          answer:
            t("custom-software-faq-answer-2") ||
            "Il costo dipende da funzionalità, complessità e integrazioni richieste. Offriamo preventivi personalizzati dopo un'analisi dettagliata dei requisiti. Garantiamo trasparenza totale sui costi.",
          icon: "material-symbols:payments",
          delay: 0.2,
        },
        {
          question:
            t("custom-software-faq-question-3") ||
            "Posso integrare il software con i miei sistemi esistenti?",
          answer:
            t("custom-software-faq-answer-3") ||
            "Assolutamente sì. Progettiamo software che si integra perfettamente con i tuoi sistemi esistenti attraverso API, database condivisi e protocolli di comunicazione standard.",
          icon: "material-symbols:integration-instructions",
          delay: 0.3,
        },
        {
          question:
            t("custom-software-faq-question-4") ||
            "Offrite supporto e manutenzione post-lancio?",
          answer:
            t("custom-software-faq-answer-4") ||
            "Sì, offriamo piani di supporto e manutenzione che includono aggiornamenti, correzioni di bug, monitoraggio delle performance e assistenza tecnica continua.",
          icon: "material-symbols:support-agent",
          delay: 0.4,
        },
      ]}
    />
  );
}
