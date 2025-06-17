import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { TypingAnimation } from "../../Components/magicui/typing-animation.tsx";

const services = [
  {
    title: "software-development",
    description: "software-development-desc",
    icon: "carbon:application-web",
    features: [
      "web-applications",
      "mobile-apps",
      "websites",
      "custom-software",
      "startup-mvp",
      "ai-software",
    ],
  },
  {
    title: "system-integration",
    description: "system-integration-desc",
    icon: "material-symbols:cloud-outline",
    features: ["cloud-integration", "api-development", "devops-ci-cd"],
  },
];

export default function OurServices() {
  const { t } = useLanguage();

  // Ottieni l'array di servizi dal morphing-services
  const morphingServices = t("morphing-services").split("|");

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl font-medium text-white/80 mb-4">
            {t("we-offer")}
          </h2>
          <TypingAnimation
            className="text-5xl font-bold tracking-tight text-white"
            words={morphingServices}
            typingSpeed={120}
            deletingSpeed={60}
            pauseTime={2000}
          />
        </motion.div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="group relative p-8 cursor-pointer rounded-2xl border border-white/10"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.1] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <div className="rounded-xl bg-white/20 p-4 transition-all duration-300 group-hover:bg-white/30 shadow-lg">
                    <Icon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t(service.title)}
                  </h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-base text-white/80 leading-relaxed mb-6 transition-all duration-300 group-hover:text-white"
                >
                  {t(service.description)}
                </motion.p>
                <motion.ul
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="text-sm text-white/70 flex items-center gap-2"
                    >
                      <Icon
                        icon="ph:dot-outline-fill"
                        className="w-4 h-4 text-white/40"
                      />
                      {t(feature)}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
