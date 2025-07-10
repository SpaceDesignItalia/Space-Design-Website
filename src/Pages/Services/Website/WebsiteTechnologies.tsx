import ScrollingBanner from "../../../Components/Home/ScrollingBanner";
import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function WebsiteTechnologies() {
  const { t } = useLanguage();
  const technologies = [
    {
      name: "Node.js",
      icon: "logos:nodejs-icon",
    },
    {
      name: "React",
      icon: "logos:react",
    },
    {
      name: "Vue.js",
      icon: "logos:vue",
    },
    {
      name: "Angular",
      icon: "logos:angular-icon",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
    },
    {
      name: "Next.js",
      icon: "logos:nextjs-icon",
    },
    {
      name: "Nuxt.js",
      icon: "logos:nuxt-icon",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: "Sass",
      icon: "logos:sass",
    },
    {
      name: "WordPress",
      icon: "logos:wordpress-icon",
    },
    {
      name: "Shopify",
      icon: "logos:shopify",
    },
    {
      name: "Prestashop",
      icon: "logos:prestashop-icon",
    },
    {
      name: "WooCommerce",
      icon: "logos:woocommerce",
    },
    {
      name: "Stripe",
      icon: "logos:stripe",
    },
    {
      name: "PayPal",
      icon: "logos:paypal",
    },
    {
      name: "Framer",
      icon: "logos:framer",
    },
    {
      name: "Figma",
      icon: "logos:figma",
    },
    {
      name: "Adobe XD",
      icon: "logos:xd",
    },
    {
      name: "MongoDB",
      icon: "logos:mongodb-icon",
    },
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
    },
    {
      name: "Firebase",
      icon: "logos:firebase",
    },
    {
      name: "AWS",
      icon: "logos:aws",
    },
    {
      name: "Vercel",
      icon: "logos:vercel-icon",
    },
    {
      name: "Netlify",
      icon: "logos:netlify-icon",
    },
    {
      name: "Docker",
      icon: "logos:docker-icon",
    },
    {
      name: "Git",
      icon: "logos:git-icon",
    },
    {
      name: "GitHub",
      icon: "logos:github-icon",
    },
    {
      name: "Jest",
      icon: "logos:jest",
    },
    {
      name: "Cypress",
      icon: "logos:cypress",
    },
    {
      name: "Webpack",
      icon: "logos:webpack",
    },
    {
      name: "Vite",
      icon: "logos:vitejs",
    },
    {
      name: "GraphQL",
      icon: "logos:graphql",
    },
    {
      name: "REST API",
      icon: "logos:rest",
    },
    {
      name: "PWA",
      icon: "logos:pwa",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            {t("web-technologies-title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-500"
          >
            {t("web-technologies-description")}
          </motion.p>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <ScrollingBanner shouldPauseOnHover={false} duration={120} gap="24px">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex-shrink-0 w-80 h-48 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center space-y-6 "
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center">
                  <Icon icon={tech.icon} className="w-10 h-10 text-gray-700" />
                </div>

                <div className="text-center space-y-3">
                  <h4 className="text-gray-900 font-light text-xl">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </ScrollingBanner>
        </div>
      </div>
    </section>
  );
}
