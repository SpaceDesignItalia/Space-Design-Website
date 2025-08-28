import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

interface ServiceHeroProps {
  title: string;
  description: string;
  buttonText?: string;
}

export default function ServiceHero({
  title,
  description,
  buttonText,
}: ServiceHeroProps) {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const navigateToContact = () => {
    console.log("🔗 Navigating to contact page:", `/${language}/contact`);

    // Force navigation with window.location as fallback
    try {
      navigate(`/${language}/contact`);
    } catch (error) {
      console.error("Navigation error, using window.location:", error);
      window.location.href = `/${language}/contact`;
    }
  };

  const handlePress = () => {
    navigateToContact();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigateToContact();
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
      {/* Simple background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        aria-hidden="true"
      />

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
          className="text-center max-w-4xl pointer-events-auto"
          initial="initial"
          animate="animate"
          variants={stagger}
          data-framer-motion="true"
          style={{
            WebkitUserSelect: "text",
            userSelect: "text",
            pointerEvents: "auto",
          }}
        >
          {/* Main heading with semantic structure */}
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
              {title}
            </span>
          </motion.h1>

          {/* Descriptive subtitle with semantic meaning */}
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
            {description}
          </motion.p>

          {/* CTA button with proper accessibility */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center pointer-events-auto"
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
              onPress={handlePress}
              onClick={handleClick}
              aria-label={buttonText || t("get-quote") || "Richiedi Preventivo"}
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
              {buttonText || t("get-quote") || "Richiedi Preventivo"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
