import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function CustomSoftwareAiPowered() {
  const { t } = useLanguage();

  const aiFeatures = [
    {
      title: t("custom-ai-feature-1-title"),
      description: t("custom-ai-feature-1-description"),
      icon: "streamline-ultimate:factory-industrial-robot-arm-1",
    },
    {
      title: t("custom-ai-feature-2-title"),
      description: t("custom-ai-feature-2-description"),
      icon: "ic:baseline-auto-graph",
    },
    {
      title: t("custom-ai-feature-3-title"),
      description: t("custom-ai-feature-3-description"),
      icon: "ri:chat-smile-ai-line",
    },
    {
      title: t("custom-ai-feature-4-title"),
      description: t("custom-ai-feature-4-description"),
      icon: "flowbite:eye-outline",
    },
    {
      title: t("custom-ai-feature-5-title"),
      description: t("custom-ai-feature-5-description"),
      icon: "carbon:machine-learning-model",
    },
    {
      title: t("custom-ai-feature-6-title"),
      description: t("custom-ai-feature-6-description"),
      icon: "mingcute:plugin-line",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("custom-ai-powered-section-title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("custom-ai-powered-section-description")}
          </p>
        </div>

        {/* Clean Features Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="p-8 border rounded-3xl bg-gray-50">
                <div className="text-4xl mb-6 text-primary flex justify-center">
                  <Icon icon={feature.icon} width={30} height={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
