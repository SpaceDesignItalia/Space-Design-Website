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
    <section
      className="relative h-dvh w-full overflow-hidden bg-background pt-[70px] select-text hero-section"
      aria-labelledby="hero-heading"
      role="banner"
      style={{
        WebkitUserSelect: "text",
        userSelect: "text",
        pointerEvents: "auto",
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        aria-hidden="true"
      >
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

      {/* Centered content */}
      <div
        className="relative flex h-full items-center justify-center px-6 z-10 pointer-events-auto"
        style={{
          WebkitUserSelect: "text",
          userSelect: "text",
          pointerEvents: "auto",
        }}
      >
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl pointer-events-auto"
          style={{
            WebkitUserSelect: "text",
            userSelect: "text",
            pointerEvents: "auto",
          }}
        >
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 select-text pointer-events-auto"
            style={{
              WebkitUserSelect: "text",
              userSelect: "text",
              pointerEvents: "auto",
            }}
          >
            <span
              className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200 select-text pointer-events-auto"
              style={{
                WebkitUserSelect: "text",
                userSelect: "text",
                pointerEvents: "auto",
              }}
            >
              {t("mobile-hero-title") || "Sviluppo App Mobile"}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto select-text pointer-events-auto"
            role="doc-subtitle"
            style={{
              WebkitUserSelect: "text",
              userSelect: "text",
              pointerEvents: "auto",
            }}
          >
            {t("mobile-hero-description") ||
              "Creiamo app mobile native e cross-platform che dominano gli app store. Esperienze utente straordinarie, performance ottimali e design all'avanguardia per iOS e Android."}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center pointer-events-auto"
            animate={pulseAnimation}
            style={{
              WebkitUserSelect: "text",
              userSelect: "text",
              pointerEvents: "auto",
            }}
          >
            <Button
              size="lg"
              color="primary"
              radius="full"
              onPress={handleContactClick}
              aria-label={t("get-quote")}
              className="select-none cursor-pointer z-20 relative pointer-events-auto"
              style={{
                WebkitUserSelect: "none",
                userSelect: "none",
                pointerEvents: "auto",
              }}
              endContent={
                <Icon
                  icon="material-symbols:arrow-forward"
                  className="text-xl"
                  aria-hidden="true"
                />
              }
            >
              {t("get-quote")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
