import { Icon } from "@iconify/react";
import { useLanguage } from "../../../context/LanguageContext";

export default function Example() {
  const { t } = useLanguage();

  const features = [
    {
      name: t("mobile-why-feature-1-title"),
      description: t("mobile-why-feature-1-desc"),
      icon: "mdi:clock-outline",
    },
    {
      name: t("mobile-why-feature-2-title"),
      description: t("mobile-why-feature-2-desc"),
      icon: "bi:phone",
    },
    {
      name: t("mobile-why-feature-3-title"),
      description: t("mobile-why-feature-3-desc"),
      icon: "stash:user-heart",
    },
  ];

  const enterpriseFeatures = [
    {
      name: t("mobile-why-enterprise-1-title"),
      description: t("mobile-why-enterprise-1-desc"),
      icon: "mingcute:truck-line",
    },
    {
      name: t("mobile-why-enterprise-2-title"),
      description: t("mobile-why-enterprise-2-desc"),
      icon: "heroicons:user-group",
    },
    {
      name: t("mobile-why-enterprise-3-title"),
      description: t("mobile-why-enterprise-3-desc"),
      icon: "ic:baseline-auto-graph",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl">
            {t("mobile-why-main-title")}
          </h2>
          <p className="mt-8 text-xl/8 text-gray-300 max-w-3xl">
            {t("mobile-why-main-subtitle")}
          </p>
        </div>

        {/* Consumer Features */}
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-28 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon
                      icon={feature.icon}
                      aria-hidden="true"
                      className="size-8 text-gray-900"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="text-base/7 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="mx-auto mt-32 max-w-2xl lg:mx-0 text-center lg:text-left">
          <h3 className="text-pretty text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-4xl">
            {t("mobile-why-enterprise-title")}
          </h3>
          <p className="mt-8 text-xl/8 text-gray-300 max-w-3xl">
            {t("mobile-why-enterprise-subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-28 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon
                      icon={feature.icon}
                      aria-hidden="true"
                      className="size-8 text-gray-900"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="text-base/7 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
