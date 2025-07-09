import { Button } from "@heroui/react";
import { useLanguage } from "../../context/LanguageContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  const handleCaseStudyClick = () => {
    navigate(`/${language}/case-studies`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {t("cta-title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-pretty text-lg/8 text-gray-300"
            >
              {t("cta-subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  radius="full"
                  className="bg-white text-black hover:bg-gray-100 px-5 py-2.5 text-sm font-semibold whitespace-nowrap w-full sm:w-auto"
                  onPress={handleContactClick}
                >
                  {t("cta-button")}
                  <Icon icon="mdi:arrow-right" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="bordered"
                  radius="full"
                  className="border-white text-white hover:bg-white/10 px-5 py-2.5 text-sm font-semibold whitespace-nowrap w-full sm:w-auto"
                  onPress={handleCaseStudyClick}
                >
                  {t("view-case-studies") || "Vedi i nostri progetti"}
                  <Icon icon="mdi:arrow-right" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-16 h-80 lg:mt-8"
          >
            <img
              alt="App screenshot"
              src="/Imgs/Home/home-cta.webp"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
