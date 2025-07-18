import { useLanguage } from "../../../context/LanguageContext";
import { Icon } from "@iconify/react";

export default function MobileAiStats() {
  const { t } = useLanguage();

  const aiStats = [
    {
      number: "300%",
      label: "Increase in User Engagement",
      description: "AI-powered personalization",
      icon: "mdi:trending-up",
    },
    {
      number: "25-35%",
      label: "Higher Conversion Rates",
      description: "With AI recommendations",
      icon: "mdi:chart-line",
    },
    {
      number: "70%",
      label: "Reduction in Support Costs",
      description: "Through AI chatbots",
      icon: "mdi:robot",
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "AI-powered assistance",
      icon: "mdi:clock-outline",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real results from AI-powered mobile applications
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-2xl mb-2 text-white font-semibold">
                  {stat.label}
                </div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
                <div className="mt-4 flex justify-center">
                  <Icon icon={stat.icon} className="text-primary text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Future is AI-Powered
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              Mobile apps with AI capabilities are not just a trend—they're
              becoming the standard. Companies that embrace AI in their mobile
              strategies are seeing unprecedented growth in user engagement,
              customer satisfaction, and business outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
