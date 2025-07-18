import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function MobileAiCTA() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t("mobile-ai-cta-title")}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t("mobile-ai-cta-description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            {t("mobile-ai-cta-button")}
          </Link>
          <Link
            to="/services/mobile-development"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-colors duration-300 text-lg"
          >
            {t("view-portfolio")}
          </Link>
        </div>
      </div>
    </div>
  );
}
