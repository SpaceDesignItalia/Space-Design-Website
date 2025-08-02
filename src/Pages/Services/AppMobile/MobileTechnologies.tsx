import ScrollingBanner from "../../../Components/Home/ScrollingBanner";
import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function MobileTechnologies() {
  const { t } = useLanguage();
  const technologies = [
    {
      name: "React Native",
      icon: "logos:react",
    },
    {
      name: "Flutter",
      icon: "logos:flutter",
    },
    {
      name: "Ionic",
      icon: "logos:ionic-icon",
    },
    {
      name: "Xamarin",
      icon: "logos:xamarin",
    },
    {
      name: "Swift",
      icon: "logos:swift",
    },
    {
      name: "Kotlin",
      icon: "logos:kotlin-icon",
    },
    {
      name: "Java",
      icon: "logos:java",
    },

    {
      name: "Cordova",
      icon: "logos:cordova",
    },
    {
      name: "Expo",
      icon: "logos:expo-icon",
    },
    {
      name: "Figma",
      icon: "logos:figma",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            {t("custom-software-technologies-title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-500"
          >
            {t("custom-software-technologies-description")}
          </motion.p>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <ScrollingBanner shouldPauseOnHover={false} duration={120} gap="24px">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex-shrink-0 w-80 h-48 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center space-y-6 "
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center">
                  <Icon icon={tech.icon} className="w-10 h-10 text-gray-700" />
                </div>

                <div className="text-center space-y-3">
                  <h4 className="text-gray-900 font-light text-xl">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </ScrollingBanner>
        </div>
      </div>
    </section>
  );
}
