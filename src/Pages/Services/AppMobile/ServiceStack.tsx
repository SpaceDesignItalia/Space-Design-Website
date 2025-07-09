import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ServiceStack() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const appTypes = [
    {
      icon: "material-symbols:shopping-cart",
      title: t("mobile-type-ecommerce") || "E-commerce & Marketplace",
      description:
        t("mobile-type-ecommerce-desc") ||
        "Soluzioni complete per vendite online con cataloghi avanzati, pagamenti sicuri e gestione ordini integrata.",
    },
    {
      icon: "material-symbols:business-center",
      title: t("mobile-type-business") || "Business & Enterprise",
      description:
        t("mobile-type-business-desc") ||
        "App aziendali per gestione team, CRM mobile, dashboard personalizzate e analytics avanzate.",
    },
    {
      icon: "material-symbols:social-leaderboard",
      title: t("mobile-type-social") || "Social & Community",
      description:
        t("mobile-type-social-desc") ||
        "Piattaforme social con feed dinamici, messaging, profili utente e sistemi di notifica push.",
    },
  ];

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base/7 font-semibold text-white tracking-wider uppercase"
          >
            {t("mobile-types-title") || "Tipologie di App"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {t("mobile-types-headline") ||
              "Realizziamo ogni tipo di app mobile"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/90 max-w-3xl mx-auto"
          >
            {t("mobile-types-subtitle") ||
              "Dalle app e-commerce alle soluzioni aziendali, sviluppiamo applicazioni mobile per ogni settore e necessità con funzionalità avanzate."}
          </motion.p>
        </div>

        {/* Layout a griglia pulito */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {appTypes.map((appType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 mb-6">
                <Icon icon={appType.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {appType.title}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {appType.description}
              </p>
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
            className="bg-primary text-white hover:bg-primary-600 px-8 py-4 text-lg font-semibold"
            endContent={
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            }
          >
            {t("mobile-cta-button") || "Richiedi Preventivo"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
