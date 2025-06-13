import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "material-symbols:rocket-launch",
      title: t("mobile-benefit-1") || "App Professionale",
      description:
        t("mobile-benefit-1-desc") || "Un'app che fa crescere il tuo business",
    },
    {
      icon: "material-symbols:group",
      title: t("mobile-benefit-2") || "Clienti Sempre Connessi",
      description:
        t("mobile-benefit-2-desc") || "I tuoi clienti ti hanno sempre in tasca",
    },
    {
      icon: "material-symbols:notifications-active",
      title: t("mobile-benefit-3") || "Notifiche Immediate",
      description:
        t("mobile-benefit-3-desc") || "Comunica subito con i tuoi clienti",
    },
    {
      icon: "material-symbols:offline-pin",
      title: t("mobile-benefit-4") || "Funziona Offline",
      description:
        t("mobile-benefit-4-desc") || "Usa l'app anche senza internet",
    },
    {
      icon: "material-symbols:integration-instructions",
      title: t("mobile-benefit-5") || "Si Integra Facilmente",
      description:
        t("mobile-benefit-5-desc") || "Collega l'app ai tuoi sistemi esistenti",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-primary">
                {t("mobile-benefits-title") ||
                  "Perché Scegliere le Nostre App Mobile"}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {t("mobile-benefits-description") ||
                  "App semplici da usare che fanno crescere il tuo business"}
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary dark:bg-primary flex items-center justify-center">
                    <Icon
                      icon={benefit.icon}
                      className="h-5 w-5 text-white dark:text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="relative">
            <div className="flex items-center justify-center py-4">
              <Iphone15Pro
                src="/imgs/app-mockup.png"
                className="mx-auto dark max-w-[550px] max-h-[550px] w-auto h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
