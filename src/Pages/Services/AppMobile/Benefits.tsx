import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

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

const iconAnimation = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: { duration: 0.5, ease: "backOut" },
};

const titleAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const descriptionAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
};

const phoneAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99],
    delay: 0.2,
  },
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

  const technologies = [
    { icon: "devicon:swift", label: "Swift", color: "text-orange-500" },
    { icon: "devicon:kotlin", label: "Kotlin", color: "text-purple-500" },
    { icon: "devicon:react", label: "React Native", color: "text-cyan-500" },
    { icon: "devicon:flutter", label: "Flutter", color: "text-blue-500" },
    { icon: "devicon:java", label: "Java", color: "text-red-700" },
    { icon: "devicon:typescript", label: "TypeScript", color: "text-blue-400" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-primary mb-4">
            {t("mobile-benefits-title") || "Tecnologie che utilizziamo"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("mobile-benefits-description") ||
              "Le migliori tecnologie per sviluppare la tua app mobile"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* iPhone 15 Pro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center py-4"
          >
            <Iphone15Pro
              src="/imgs/app-mockup.png"
              className="mx-auto dark max-w-[400px] max-h-[550px] w-full h-auto"
            />
          </motion.div>

          {/* Griglia tecnologie */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <Icon
                    icon={tech.icon}
                    className={`w-16 h-16 ${tech.color} group-hover:drop-shadow-lg`}
                  />
                </motion.div>
                <span className="font-bold text-xl text-center text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
