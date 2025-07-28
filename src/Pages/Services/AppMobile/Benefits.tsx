import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";
import "keen-slider/keen-slider.min.css";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "mdi:rocket-launch",
      title: "mobile-benefit-1",
      description: "mobile-benefit-1-desc",
    },
    {
      icon: "mdi:account-group",
      title: "mobile-benefit-2",
      description: "mobile-benefit-2-desc",
    },
    {
      icon: "mdi:bell-ring",
      title: "mobile-benefit-3",
      description: "mobile-benefit-3-desc",
    },
    {
      icon: "mdi:chart-line",
      title: "mobile-benefit-6",
      description: "mobile-benefit-6-desc",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t("mobile-benefits-title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t("mobile-benefits-description")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* iPhone 15 Pro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center py-8"
          >
            <Iphone15Pro
              src="/imgs/app-mockup.png"
              className="mx-auto dark max-w-[400px] max-h-[550px] w-full h-auto"
            />
          </motion.div>

          {/* Griglia benefici */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <Icon
                    icon={benefit.icon}
                    className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors"
                  />
                </motion.div>

                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {t(benefit.title)}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(benefit.description)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
