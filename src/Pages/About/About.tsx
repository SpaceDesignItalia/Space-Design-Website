import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimatedNumber from "./AnimatedNumber";
import TeamGallery from "../../Components/TeamGallery";

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

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const iconSpin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const iconFloat = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const iconHover = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate(`/${language}/case-studies`);
  };

  const teamMembers = useMemo(
    () => [
      {
        name: t("about-andrea-braia"),
        image: "/imgs/1.jpg",
        role: "CEO & Co-Founder",
      },
      {
        name: t("about-francesco-roviello"),
        image: "/imgs/2.jpg",
        role: "CTO & Co-Founder",
      },
      {
        name: t("about-marco-macherelli"),
        image: "/imgs/3.jpg",
        role: "Lead Developer",
      },
      {
        name: t("about-pablo-bertot"),
        image: "/imgs/4.jpg",
        role: "Full Stack Developer",
      },
    ],
    [t]
  );

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
              d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z"
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
    <>
      <SEO
        title={`Space Design Italia - ${t("about")}`}
        description={t("about-hero-subtitle")}
        keywords={`space design italia, ${t("about")}, team, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/about`}
        alternateUrls={{
          it: "/it/about",
          en: "/en/about",
          "x-default": "/about",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section
          className="relative min-h-screen w-full overflow-hidden bg-background pt-[70px]"
          aria-labelledby="about-hero-heading"
          role="banner"
        >
          {/* Simple background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
            aria-hidden="true"
          />

          {/* Centered content */}
          <div className="relative flex min-h-screen items-center justify-center px-6">
            <motion.div
              className="text-center max-w-4xl"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {/* Main heading with semantic structure */}
              <motion.h1
                id="about-hero-heading"
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
              >
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
                  {t("about-hero-title")}
                </span>
              </motion.h1>

              {/* Descriptive subtitle with semantic meaning */}
              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
                role="doc-subtitle"
              >
                {t("about-hero-subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section with Cards */}
        <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="space-y-8"
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                      {t("about-mission-title")}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t("about-mission-description-1")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                      {language === "it"
                        ? "La nostra visione del futuro"
                        : "Our vision of the future"}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t("about-mission-description-2")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="relative space-y-6">
                <div className="text-center">
                  <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {language === "it" ? "Chi siamo" : "Who we are"}
                  </h2>
                </div>
                <TeamGallery key="team-gallery" teamMembers={teamMembers} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animated Numbers and Icons */}
        <section className="min-h-screen bg-black flex items-center py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-white lg:text-5xl"
              >
                {t("about-numbers-title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-xl text-gray-400"
              >
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
                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <motion.div className="mb-6 flex justify-center group-hover:rotate-12 transition-transform duration-300 ease-out">
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
                    <div className="text-5xl font-bold text-white mb-4">
                      <AnimatedNumber
                        end={stat.number}
                        decimals={stat.decimals || 0}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-gray-300 font-medium text-lg">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Story Section */}
        <section className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {t("about-team-title")}
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mt-4 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl"
              >
                {t("about-team-subtitle")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-xl text-gray-600 dark:text-gray-300"
              >
                {t("about-team-description")}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/imgs/FoundersTeam.jpg"
                    alt={t("about-team-alt-text") || "Team Space Design"}
                    className="aspect-[4/5] w-full rounded-2xl bg-gray-100 object-cover dark:bg-gray-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-gray-900/20" />
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("about-company-story-1")}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("about-company-story-2")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="bordered"
                      size="lg"
                      className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                      onPress={handleCaseStudyClick}
                      onClick={handleCaseStudyClick}
                    >
                      Scopri i nostri progetti
                      <Icon icon="solar:eye-linear" width={20} />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
