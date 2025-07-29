import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";
import { Iphone15Pro } from "../../../Components/magicui/iphone-15-pro";
import "keen-slider/keen-slider.min.css";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "fluent:phone-28-regular",
      title: "mobile-benefit-1",
      description: "mobile-benefit-1-desc",
    },
    {
      icon: "heroicons:user-group",
      title: "mobile-benefit-2",
      description: "mobile-benefit-2-desc",
    },
    {
      icon: "ri:chat-ai-line",
      title: "mobile-benefit-3",
      description: "mobile-benefit-3-desc",
    },
    {
      icon: "mdi:chart-line",
      title: "mobile-benefit-6",
      description: "mobile-benefit-6-desc",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("mobile-benefits-title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("mobile-benefits-description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* iPhone 15 Pro */}
          <div className="flex items-center justify-center py-8">
            <Iphone15Pro
              src="/imgs/app-mockup.png"
              className="mx-auto dark max-w-[400px] max-h-[550px] w-full h-auto"
            />
          </div>

          {/* Griglia benefici */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <Icon
                    icon={benefit.icon}
                    className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors duration-300"
                  />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {t(benefit.title)}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(benefit.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
