import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/LanguageContext";
import AnimatedNumber from "../About/AnimatedNumber";
import { useMemo } from "react";

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

export default function Numbers() {
  const { t, language } = useLanguage();

  const stats = useMemo(
    () => [
      {
        number: 20,
        suffix: "+",
        label: t("about-projects-completed"),
        icon: "material-symbols:rocket-launch-outline",
      },
      {
        number: 1.5,
        suffix: "Mln +",
        label: t("about-lines-of-code"),
        decimals: 1,
        icon: "custom-code",
        customIcon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q.15-.15.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z"
            />
          </svg>
        ),
      },
      {
        number: 30,
        suffix: "K +",
        label: t("about-commits"),
        icon: "material-symbols:account-tree-outline",
      },
      {
        number: 20,
        suffix: "K +",
        label: t("about-coffee-cups"),
        icon: "material-symbols:local-cafe-outline",
      },
    ],
    [t]
  );

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-white lg:text-5xl"
          >
            {t("about-numbers-title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-xl text-gray-400">
            {language === "it"
              ? "I numeri che raccontano la nostra storia"
              : "The numbers that tell our story"}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <motion.div className="mb-4 flex justify-center group-hover:rotate-12 transition-transform duration-300 ease-out">
                  {stat.customIcon ? (
                    <div className="text-white opacity-80 w-12 h-12 flex items-center justify-center">
                      {stat.customIcon}
                    </div>
                  ) : (
                    <Icon
                      icon={stat.icon}
                      width={48}
                      height={48}
                      className="text-white opacity-80"
                    />
                  )}
                </motion.div>
                <div className="text-4xl font-bold text-white mb-3">
                  <AnimatedNumber
                    end={stat.number}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-gray-300 font-medium text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
