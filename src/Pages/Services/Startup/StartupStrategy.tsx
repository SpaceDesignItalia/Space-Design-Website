import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function StartupStrategy() {
  const { t } = useLanguage();

  const roadmapSteps = [
    {
      title: t("startup-roadmap-step-1-title"),
      subtitle: t("startup-roadmap-step-1-description"),
      details: t("startup-roadmap-step-1-details"),
      icon: "mdi:handshake",
    },
    {
      title: t("startup-roadmap-step-2-title"),
      subtitle: t("startup-roadmap-step-2-description"),
      details: t("startup-roadmap-step-2-details"),
      icon: "mdi:clipboard-text",
    },
    {
      title: t("startup-roadmap-step-3-title"),
      subtitle: t("startup-roadmap-step-3-description"),
      details: t("startup-roadmap-step-3-details"),
      icon: "mdi:code-braces",
    },
    {
      title: t("startup-roadmap-step-4-title"),
      subtitle: t("startup-roadmap-step-4-description"),
      details: t("startup-roadmap-step-4-details"),
      icon: "mdi:test-tube",
    },
    {
      title: t("startup-roadmap-step-5-title"),
      subtitle: t("startup-roadmap-step-5-description"),
      details: t("startup-roadmap-step-5-details"),
      icon: "mdi:rocket-launch",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
            {t("startup-roadmap-title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("startup-roadmap-description")}
          </p>
        </div>

        {/* Roadmap Boxes Only */}
        <div className="relative">
          {/* Linea verticale centrale */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-20">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Indicatore centrale per desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm"></div>
                </div>

                {/* Box alternato a destra e sinistra */}
                <div
                  className={`flex justify-center ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div
                    className={`w-full max-w-xl ${
                      index % 2 === 0
                        ? "lg:mr-auto lg:pr-12"
                        : "lg:ml-auto lg:pl-12"
                    }`}
                  >
                    <div className="group relative">
                      {/* Box principale */}
                      <div className="bg-white border border-gray-200/60 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                        {/* Numero step */}
                        <div className="absolute -top-3 left-6">
                          <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-medium flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>

                        {/* Header del box */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                            <Icon
                              icon={step.icon}
                              className="text-primary text-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">
                              {step.title}
                            </h4>
                            <p className="text-xs text-primary/80 font-medium uppercase tracking-wide">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Contenuto del box */}
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>

                      {/* Effetto hover sottile */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
