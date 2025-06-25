import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function AppHero() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl max-w-4xl mx-auto sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white mb-8"
          >
            {t("mobile-hero-title") || "Sviluppo App Mobile"}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300"
          >
            {t("mobile-hero-description")}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 relative z-50"
            animate={pulseAnimation}
          >
            <Button
              size="lg"
              color="primary"
              radius="full"
              onPress={handleContactClick}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold relative z-50 cursor-pointer"
              endContent={
                <Icon
                  icon="material-symbols:arrow-forward"
                  className="text-xl"
                />
              }
            >
              {t("get-quote")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
