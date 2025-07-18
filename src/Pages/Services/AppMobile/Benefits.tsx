import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";
import "keen-slider/keen-slider.min.css";

export default function Benefits() {
  const { t } = useLanguage();

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
            {t("mobile-benefits-title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("mobile-benefits-description")}
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
