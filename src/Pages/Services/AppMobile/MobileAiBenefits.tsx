import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function MobileAiBenefits() {
  const { t } = useLanguage();

  const aiBenefits = [
    {
      title: t("mobile-ai-benefit-1-title"),
      description: t("mobile-ai-benefit-1-description"),
      icon: "mdi:trending-up",
    },
    {
      title: t("mobile-ai-benefit-2-title"),
      description: t("mobile-ai-benefit-2-description"),
      icon: "mdi:heart",
    },
    {
      title: t("mobile-ai-benefit-3-title"),
      description: t("mobile-ai-benefit-3-description"),
      icon: "mdi:currency-usd",
    },
    {
      title: t("mobile-ai-benefit-4-title"),
      description: t("mobile-ai-benefit-4-description"),
      icon: "mdi:cog",
    },
    {
      title: t("mobile-ai-benefit-5-title"),
      description: t("mobile-ai-benefit-5-description"),
      icon: "mdi:target",
    },
    {
      title: t("mobile-ai-benefit-6-title"),
      description: t("mobile-ai-benefit-6-description"),
      icon: "mdi:rocket-launch",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("mobile-ai-benefits-title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("mobile-ai-benefits-description")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-6 text-primary flex justify-center">
                <Icon icon={benefit.icon} width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
