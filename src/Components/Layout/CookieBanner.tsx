import { Button, Link, Switch, Card, CardBody } from "@heroui/react";
import { useCookieConsent } from "../../context/CookieConsentContext";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const {
    showBanner,
    showPreferences,
    preferences,
    cookiesAccepted,
    acceptAllCookies,
    rejectAllCookies,
    savePreferences,
    openPreferences,
    closePreferences,
    resetConsent,
  } = useCookieConsent();

  const { language, t } = useLanguage();
  const [localPreferences, setLocalPreferences] =
    useState<CookiePreferences>(preferences);

  // Debug info (only in development)
  const isDevelopment = import.meta.env.DEV;

  const handleSavePreferences = () => {
    savePreferences(localPreferences);
  };

  const handleTogglePreference = (type: keyof CookiePreferences) => {
    if (type === "essential") return; // Can't disable essential cookies
    setLocalPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner - Sobrio e discreto */}
      <AnimatePresence>
        {showBanner && !showPreferences && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 max-w-sm"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Card className="bg-white dark:bg-black shadow-lg border border-gray-300 dark:border-gray-700">
              <CardBody className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon="material-symbols:cookie"
                      className="w-4 h-4 text-white dark:text-black"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-black dark:text-white mb-1">
                      {t("cookie-banner-title")}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t("cookie-banner-description")}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onPress={acceptAllCookies}
                      className="flex-1 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-xs font-medium"
                    >
                      {t("cookie-banner-accept-all")}
                    </Button>
                    <Button
                      size="sm"
                      variant="bordered"
                      onPress={rejectAllCookies}
                      className="flex-1 text-xs border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {t("cookie-banner-reject-all")}
                    </Button>
                  </div>

                  <Button
                    size="sm"
                    variant="light"
                    onPress={openPreferences}
                    className="text-xs text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <Icon
                      icon="material-symbols:settings"
                      className="w-3 h-3"
                    />
                    {t("cookie-banner-preferences")}
                  </Button>
                </div>

                {/* Link to policy */}
                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/${language}/cookie-policy`}
                    className="text-xs text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white underline"
                  >
                    {t("cookie-preferences-learn-more")}
                  </Link>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal - Bianco e nero */}
      <AnimatePresence>
        {showPreferences && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreferences}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="bg-white dark:bg-black shadow-2xl border border-gray-300 dark:border-gray-700">
                <CardBody className="p-0">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                          <Icon
                            icon="material-symbols:settings"
                            className="w-5 h-5 text-white dark:text-black"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-black dark:text-white">
                            {t("cookie-preferences-title")}
                          </h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t("cookie-preferences-description")}
                          </p>
                        </div>
                      </div>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        onPress={closePreferences}
                        className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      >
                        <Icon
                          icon="material-symbols:close"
                          className="w-4 h-4"
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 max-h-[60vh] overflow-y-auto">
                    <div className="space-y-4">
                      {/* Essential Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Icon
                          icon="material-symbols:shield"
                          className="w-6 h-6 text-black dark:text-white flex-shrink-0 mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-black dark:text-white">
                              {t("cookie-essential-title")}
                            </h3>
                            <Switch
                              isSelected={true}
                              isDisabled={true}
                              size="sm"
                              classNames={{
                                base: "opacity-50",
                                wrapper: "bg-black dark:bg-white",
                              }}
                            />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {t("cookie-preferences-essential-desc")}
                          </p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Icon
                          icon="material-symbols:bar-chart"
                          className="w-6 h-6 text-black dark:text-white flex-shrink-0 mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-black dark:text-white">
                              {t("cookie-analytics-title")}
                            </h3>
                            <Switch
                              isSelected={localPreferences.analytics}
                              onValueChange={() =>
                                handleTogglePreference("analytics")
                              }
                              size="sm"
                              classNames={{
                                wrapper: localPreferences.analytics
                                  ? "bg-black dark:bg-white"
                                  : "bg-gray-300 dark:bg-gray-600",
                              }}
                            />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t("cookie-preferences-analytics-desc")}
                          </p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <Icon
                          icon="material-symbols:target"
                          className="w-6 h-6 text-black dark:text-white flex-shrink-0 mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-black dark:text-white">
                              {t("cookie-marketing-title")}
                            </h3>
                            <Switch
                              isSelected={localPreferences.marketing}
                              onValueChange={() =>
                                handleTogglePreference("marketing")
                              }
                              size="sm"
                              classNames={{
                                wrapper: localPreferences.marketing
                                  ? "bg-black dark:bg-white"
                                  : "bg-gray-300 dark:bg-gray-600",
                              }}
                            />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t("cookie-preferences-marketing-desc")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        <Link
                          href={`/${language}/cookie-policy`}
                          className="text-black dark:text-white hover:underline font-medium"
                        >
                          {t("cookie-preferences-learn-more")}
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-3 justify-end">
                      <Button
                        variant="bordered"
                        onPress={closePreferences}
                        className="order-2 sm:order-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        {t("cookie-preferences-close")}
                      </Button>
                      <Button
                        onPress={handleSavePreferences}
                        className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium order-1 sm:order-2"
                      >
                        <Icon
                          icon="material-symbols:check"
                          className="w-4 h-4"
                        />
                        {t("cookie-preferences-save")}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
