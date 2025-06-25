import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function ServiceStack() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base/7 font-semibold text-white tracking-wider uppercase">
            {t("mobile-stack-title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("mobile-stack-headline")}
          </p>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            {t("mobile-stack-subtitle")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Mobile Apps Box */}
          <div className="group">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 18H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 6H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 9H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 12H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t("mobile-apps-title")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {t("mobile-apps-subtitle")}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  {t("mobile-apps-description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-swift")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-kotlin")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-uiux")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expo Box */}
          <div className="group lg:col-span-2">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 lg:rounded-bl-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12V22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t("mobile-expo-title")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {t("mobile-expo-subtitle")}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  {t("mobile-expo-description")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        {t("mobile-tech-expo-sdk")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        {t("mobile-tech-live-reload")}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        {t("mobile-tech-ota-updates")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-sm text-white">
                        {t("mobile-tech-push-notifications")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assistenza Box */}
          <div className="group">
            <div className="h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] transition-all duration-300 hover:ring-white/20">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 8V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t("mobile-support-title")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {t("mobile-support-subtitle")}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  {t("mobile-support-description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-24-7-support")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-bug-fixing")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-sm text-white">
                      {t("mobile-tech-performance-optimization")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aggiungo il pulsante "Richiedi Preventivo" */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            radius="full"
            onPress={handleContactClick}
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            endContent={
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            }
          >
            {t("get-quote")}
          </Button>
        </div>
      </div>
    </div>
  );
}
