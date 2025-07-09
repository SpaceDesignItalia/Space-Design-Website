import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function WebsiteHero() {
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

  return (
    <section
      className="relative h-dvh w-full overflow-hidden bg-background pt-[70px]"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Simple background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative flex h-full items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl"
          initial="initial"
          animate="animate"
        >
          {/* Main heading with semantic structure */}
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
              {t("web-hero-title")}
            </span>
          </motion.h1>

          {/* Descriptive subtitle with semantic meaning */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            role="doc-subtitle"
          >
            {t("web-hero-description")}
          </motion.p>

          {/* CTA button with proper accessibility */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Button
              size="lg"
              color="primary"
              radius="full"
              onPress={handleContactClick}
              aria-label={
                t("web-cta-button") ||
                "Richiedi un preventivo per il tuo sito web"
              }
              endContent={
                <Icon
                  icon="material-symbols:arrow-forward"
                  className="text-xl"
                  aria-hidden="true"
                />
              }
            >
              {t("web-cta-button") || "Richiedi Preventivo"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
