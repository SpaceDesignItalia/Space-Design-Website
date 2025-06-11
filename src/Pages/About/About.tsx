import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

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

  const teamMembers = [
    {
      name: t("about-andrea-braia"),
      image: "/company/1.jpg",
      role: "CEO & Co-Founder",
    },
    {
      name: t("about-francesco-roviello"),
      image: "/company/2.jpg",
      role: "CTO & Co-Founder",
    },
    {
      name: t("about-marco-macherelli"),
      image: "/company/3.jpg",
      role: "Lead Developer",
    },
    {
      name: t("about-pablo-bertot"),
      image: "/company/4.jpg",
      role: "Full Stack Developer",
    },
  ];

  const stats = [
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
  ];

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
        {/* Hero Section with Modern Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-[70px]">
          {/* Animated Background Shapes */}
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
            <motion.div
              className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 blur-3xl opacity-30"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
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
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white"
              >
                {t("about-hero-title")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t("about-hero-subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section with Cards */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t("about-mission-title")}
                  </h2>
                  <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                    La nostra visione del futuro
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("about-mission-description-1")}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("about-mission-description-2")}
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as="a"
                    href={`/${language}/contact`}
                    size="lg"
                    className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
                  >
                    {t("about-contact-cta")}
                    <Icon icon="solar:arrow-right-linear" width={20} />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animated Numbers and Icons */}
        <section className="py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                I numeri che raccontano la nostra storia
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
                  key={stat.label}
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
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                    src="/company/FoundersTeam.jpg"
                    alt={t("about-team-alt-text")}
                    className="w-full h-[500px] object-cover"
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
                      as="a"
                      href={`/${language}/contact`}
                      size="lg"
                      className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                    >
                      {t("about-contact-cta")}
                      <Icon icon="solar:arrow-right-linear" width={20} />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="bordered"
                      size="lg"
                      className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold"
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
