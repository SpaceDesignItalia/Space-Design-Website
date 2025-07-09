import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function CustomSoftwareAdvantages() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const solutions = [
    {
      icon: "material-symbols:business-center",
      title: t("custom-erp-title") || "Sistemi ERP",
      description:
        t("custom-erp-description") ||
        "Sistemi di gestione integrata che unificano tutti i processi aziendali in un'unica piattaforma scalabile e personalizzabile.",
      features: [
        "Gestione contabilità completa",
        "Controllo inventario e gestione magazzino",
        "Gestione risorse umane",
        "Reporting avanzato e analytics",
      ],
    },
    {
      icon: "material-symbols:group",
      title: t("custom-crm-title") || "Soluzioni CRM",
      description:
        t("custom-crm-description") ||
        "Gestione clienti avanzata con automazione del funnel di vendita, tracking delle interazioni e analytics predittive.",
      features: [
        "Gestione e qualifica dei lead",
        "Automazione pipeline vendite",
        "Analytics clienti e insights",
        "Automazione marketing",
      ],
    },
    {
      icon: "material-symbols:inventory",
      title: t("custom-inventory-title") || "Gestione inventario",
      description:
        t("custom-inventory-description") ||
        "Sistemi intelligenti per controllo inventario, tracking dei movimenti e ottimizzazione automatica degli ordini.",
      features: [
        "Tracking inventario in tempo reale",
        "Sistema riordino automatico",
        "Integrazione barcode e codici QR",
        "Gestione multi-magazzino",
      ],
    },
  ];

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base/7 font-semibold text-blue-200 tracking-wider uppercase"
          >
            Le nostre soluzioni
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Software personalizzato per ogni esigenza
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto"
          >
            Dalle soluzioni ERP complete ai sistemi CRM avanzati, sviluppiamo
            software enterprise che digitalizzano e ottimizzano ogni aspetto del
            tuo business.
          </motion.p>
        </div>

        {/* Layout a griglia pulito */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 mb-6">
                <Icon icon={solution.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                {solution.description}
              </p>
              <ul className="text-blue-100 text-sm space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="w-4 h-4 text-white mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            color="default"
            variant="solid"
            onPress={handleContactClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            endContent={
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            }
          >
            {t("custom-software-cta") || "Richiedi Preventivo"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
