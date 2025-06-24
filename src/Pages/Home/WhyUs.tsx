import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useRef } from "react";
import ScrollingBanner from "../../Components/Home/ScrollingBanner";

// Array di membri del team con stile Apple
const teamMembers = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Lead Developer",
    avatar: "/Imgs/Home/memoji/memoji2.avif",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Elena Ferraro",
    role: "UX Designer",
    avatar: "/Imgs/Home/memoji/memoji1.avif",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Luca Bianchi",
    role: "Product Manager",
    avatar: "/Imgs/Home/memoji/memoji4.avif",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Sara Rinaldi",
    role: "Frontend Engineer",
    avatar: "/Imgs/Home/memoji/memoji3.avif",
    color: "bg-pink-500",
  },
  {
    id: 5,
    name: "Giovanni Gialli",
    role: "Backend Developer",
    avatar: "/Imgs/Home/memoji/memoji5.avif",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Davide Conti",
    role: "DevOps Engineer",
    avatar: "/Imgs/Home/memoji/memoji7.avif",
    color: "bg-indigo-500",
  },
  {
    id: 7,
    name: "Matteo De Angelis",
    role: "Mobile Developer",
    avatar: "/Imgs/Home/memoji/memoji6.avif",
    color: "bg-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export default function WhyUs() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white text-center mb-20"
        >
          {t("why-us-title")}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
        >
          <motion.div
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            className="relative lg:col-span-3"
          >
            <div className="absolute inset-px rounded-lg bg-gray-600/30 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <motion.img
                variants={imageVariants}
                alt={t("performance-subtitle")}
                src="/Imgs/Home/why-1.webp"
                className="h-80 object-cover object-left"
              />
              <motion.div variants={contentVariants} className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-300">
                  {t("performance-title")}
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  {t("performance-subtitle")}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  {t("performance-desc")}
                </p>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            className="relative lg:col-span-3"
          >
            <div className="absolute inset-px rounded-lg bg-gray-600/30 lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <motion.div
                variants={imageVariants}
                className="h-80 bg-gray-800/50 p-4 overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Client message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-sm">{t("chat-mockup-1")}</p>
                    </div>
                  </div>

                  {/* Company response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-sm">{t("chat-mockup-2")}</p>
                    </div>
                  </div>

                  {/* Client message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                      <p className="text-sm">{t("chat-mockup-3")}</p>
                    </div>
                  </div>

                  {/* Company response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <p className="text-sm">{t("chat-mockup-4")}</p>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex justify-center">
                    <div className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {t("chat-status")}
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={contentVariants} className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-300">
                  {t("collaboration-title")}
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  {t("collaboration-subtitle")}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  {t("collaboration-desc")}
                </p>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 lg:rounded-tr-[2rem]" />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            className="relative lg:col-span-4"
          >
            <div className="absolute inset-px rounded-lg bg-gray-600/30 lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <motion.div
                variants={imageVariants}
                className="h-80 relative overflow-hidden flex items-center"
              >
                <ScrollingBanner shouldPauseOnHover duration={50} gap="20px">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex-shrink-0 w-56 h-32 bg-gray-800 rounded-lg border border-gray-700 p-4 flex items-center space-x-3 hover:bg-gray-700 transition-colors duration-200"
                    >
                      {member.avatar.startsWith("/") ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center text-xl">
                          {member.avatar}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm">
                          {member.name}
                        </h4>
                        <p className="text-gray-400 text-xs">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </ScrollingBanner>
                <div className="absolute inset-0 bg-primary/20" />
              </motion.div>
              <motion.div variants={contentVariants} className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-300">
                  {t("team-title")}
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  {t("team-subtitle")}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  {t("team-desc")}
                </p>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 lg:rounded-bl-[2rem]" />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            className="relative lg:col-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gray-600/30 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <motion.div
                variants={imageVariants}
                className="h-80 bg-gradient-to-br from-slate-800 to-slate-600 relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center w-full">
                    {/* Curva di crescita minimalista */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <div className="relative w-full h-32">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 200 100"
                          preserveAspectRatio="none"
                        >
                          {/* Curva di crescita semplice */}
                          <motion.path
                            d="M10 90 Q30 85 60 40 Q90 15 190 10"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="300"
                            strokeDashoffset="300"
                            initial={{ strokeDashoffset: 300 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{
                              duration: 2,
                              delay: 0.5,
                              ease: "easeOut",
                            }}
                          />

                          {/* Frecce verso l'alto */}
                          <motion.path
                            d="M25 80 L25 70 L20 75 L25 70 L30 75"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.3 }}
                          />
                          <motion.path
                            d="M45 65 L45 55 L40 60 L45 55 L50 60"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.3 }}
                          />
                          <motion.path
                            d="M65 45 L65 35 L60 40 L65 35 L70 40"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.3 }}
                          />
                          <motion.path
                            d="M85 25 L85 15 L80 20 L85 15 L90 20"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.3 }}
                          />
                          <motion.path
                            d="M105 20 L105 10 L100 15 L105 10 L110 15"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.3 }}
                          />
                          <motion.path
                            d="M125 18 L125 8 L120 13 L125 8 L130 13"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.3 }}
                          />
                          <motion.path
                            d="M145 16 L145 6 L140 11 L145 6 L150 11"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.3 }}
                          />
                          <motion.path
                            d="M165 14 L165 4 L160 9 L165 4 L170 9"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4, duration: 0.3 }}
                          />
                          <motion.path
                            d="M185 12 L185 2 L180 7 L185 2 L190 7"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.6, duration: 0.3 }}
                          />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Testo semplice */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      <div className="text-white/80 text-sm font-light">
                        Crescita Continua
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={contentVariants} className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-300">
                  {t("growth-title")}
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  {t("growth-subtitle")}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  {t("growth-desc")}
                </p>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
