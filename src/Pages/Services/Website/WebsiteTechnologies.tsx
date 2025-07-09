import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function WebsiteTechnologies() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            {t("custom-software-tech-title") || "Tecnologie Enterprise"}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("custom-software-tech-headline") ||
              "Stack tecnologico per software robusto"}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("custom-software-tech-description") ||
              "Utilizziamo tecnologie enterprise-grade per creare software affidabile, sicuro e scalabile"}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Icon icon={tech.icon} className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {tech.name}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sezione processo di sviluppo */}
        <div className="mt-24">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {t("custom-software-process-title") ||
                "Il nostro processo di sviluppo"}
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              {t("custom-software-process-description") ||
                "Un approccio strutturato per garantire qualità e risultati"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon
                  icon="material-symbols:lightbulb-outline"
                  className="w-8 h-8 text-blue-600"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {t("custom-software-process-discovery") || "Discovery"}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("custom-software-process-discovery-desc") ||
                  "Comprendiamo le tue esigenze e definiamo i requisiti"}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Icon
                  icon="material-symbols:architecture"
                  className="w-8 h-8 text-indigo-600"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {t("custom-software-process-architecture") || "Architettura"}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("custom-software-process-architecture-desc") ||
                  "Progettiamo l'architettura tecnica e l'interfaccia utente"}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon
                  icon="material-symbols:construction"
                  className="w-8 h-8 text-purple-600"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {t("custom-software-process-build") || "Costruzione"}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("custom-software-process-build-desc") ||
                  "Sviluppiamo il software con metodologie agili"}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Icon
                  icon="material-symbols:rocket-launch"
                  className="w-8 h-8 text-green-600"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {t("custom-software-process-launch") || "Lancio"}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("custom-software-process-launch-desc") ||
                  "Deploy, testing e supporto post-lancio"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
