import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function StartupService() {
  const { t } = useLanguage();

  const startupServices = [
    {
      title: t("startup-service-feasibility-title"),
      description: t("startup-service-feasibility-description"),
      icon: "hugeicons:ai-idea",
      features: [
        t("startup-service-feasibility-features-1"),
        t("startup-service-feasibility-features-2"),
        t("startup-service-feasibility-features-3"),
        t("startup-service-feasibility-features-4"),
      ],
    },
    {
      title: t("startup-service-mvp-title"),
      description: t("startup-service-mvp-description"),
      icon: "clarity:design-line",
      features: [
        t("startup-service-mvp-features-1"),
        t("startup-service-mvp-features-2"),
        t("startup-service-mvp-features-3"),
        t("startup-service-mvp-features-4"),
      ],
    },
    {
      title: t("startup-service-tech-stack-title"),
      description: t("startup-service-tech-stack-description"),
      icon: "basil:stack-outline",
      features: [
        t("startup-service-tech-stack-features-1"),
        t("startup-service-tech-stack-features-2"),
        t("startup-service-tech-stack-features-3"),
        t("startup-service-tech-stack-features-4"),
      ],
    },
    {
      title: t("startup-service-design-title"),
      description: t("startup-service-design-description"),
      icon: "mdi:palette-outline",
      features: [
        t("startup-service-design-features-1"),
        t("startup-service-design-features-2"),
        t("startup-service-design-features-3"),
        t("startup-service-design-features-4"),
      ],
    },
    {
      title: t("startup-service-gtm-title"),
      description: t("startup-service-gtm-description"),
      icon: "hugeicons:target-02",
      features: [
        t("startup-service-gtm-features-1"),
        t("startup-service-gtm-features-2"),
        t("startup-service-gtm-features-3"),
        t("startup-service-gtm-features-4"),
      ],
    },
    {
      title: t("startup-service-support-title"),
      description: t("startup-service-support-description"),
      icon: "ix:support",
      features: [
        t("startup-service-support-features-1"),
        t("startup-service-support-features-2"),
        t("startup-service-support-features-3"),
        t("startup-service-support-features-4"),
      ],
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("startup-services-header-title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("startup-services-header-description")}
          </p>
        </div>

        {/* Servizi Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupServices.map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors"
              >
                <div className="text-3xl mb-6 text-primary">
                  <Icon icon={service.icon} width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
