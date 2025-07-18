import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function MobileAiUseCases() {
  const { t } = useLanguage();

  const aiUseCases = [
    {
      title: t("mobile-ai-use-case-1-title"),
      description: t("mobile-ai-use-case-1-description"),
      icon: "mdi:shopping",
    },
    {
      title: t("mobile-ai-use-case-2-title"),
      description: t("mobile-ai-use-case-2-description"),
      icon: "mdi:medical-bag",
    },
    {
      title: t("mobile-ai-use-case-3-title"),
      description: t("mobile-ai-use-case-3-description"),
      icon: "mdi:bank",
    },
    {
      title: t("mobile-ai-use-case-4-title"),
      description: t("mobile-ai-use-case-4-description"),
      icon: "mdi:school",
    },
    {
      title: t("mobile-ai-use-case-5-title"),
      description: t("mobile-ai-use-case-5-description"),
      icon: "mdi:airplane",
    },
    {
      title: t("mobile-ai-use-case-6-title"),
      description: t("mobile-ai-use-case-6-description"),
      icon: "mdi:movie",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("mobile-ai-use-cases-title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("mobile-ai-use-cases-description")}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiUseCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-8">
                <div className="text-4xl mb-6 text-primary flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={useCase.icon} width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
