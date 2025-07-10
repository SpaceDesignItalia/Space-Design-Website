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
      className="relative h-dvh w-full overflow-hidden bg-background pt-[70px] select-text"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Centered content */}
      <div className="relative flex h-full items-center justify-center px-6 z-10 pointer-events-auto">
        <motion.div
          className="text-center max-w-4xl pointer-events-auto"
          initial="initial"
          animate="animate"
        >
          {/* Main heading with semantic structure */}
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 select-text pointer-events-auto"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200 select-text pointer-events-auto">
              {t("web-hero-title")}
            </span>
          </motion.h1>

          {/* Descriptive subtitle with semantic meaning */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto select-text pointer-events-auto"
            role="doc-subtitle"
          >
            {t("web-hero-description")}
          </motion.p>

          {/* CTA button with proper accessibility */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center pointer-events-auto"
          >
            <Button
              size="lg"
              color="primary"
              radius="full"
              onPress={handleContactClick}
              aria-label={t("web-cta-button")}
              className="select-none cursor-pointer z-20 relative pointer-events-auto"
              endContent={
                <Icon
                  icon="material-symbols:arrow-forward"
                  className="text-xl"
                  aria-hidden="true"
                />
              }
            >
              {t("web-cta-button")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
