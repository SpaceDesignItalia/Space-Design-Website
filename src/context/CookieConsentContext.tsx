import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { updateAnalyticsConsent } from "../utils/analytics";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  cookiesAccepted: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  preferences: CookiePreferences;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  closeBanner: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true, can't be disabled
  analytics: false,
  marketing: false,
};

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    const consent = localStorage.getItem("cookieConsent");
    console.log("Cookie consent found in localStorage:", consent);

    // Show banner if no consent stored
    const shouldShow = !consent;
    console.log("Should show banner:", shouldShow);

    return shouldShow;
  });

  const [showPreferences, setShowPreferences] = useState<boolean>(false);

  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const stored = localStorage.getItem("cookiePreferences");
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    const stored = localStorage.getItem("cookieConsent");
    const accepted = stored === "accepted" || stored === "custom";
    console.log("Cookies accepted:", accepted);
    return accepted;
  });

  useEffect(() => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    // Aggiorna il consenso per analytics ogni volta che le preferenze cambiano
    updateAnalyticsConsent(preferences);
  }, [preferences]);

  const acceptAllCookies = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    setCookiesAccepted(true);
    setShowBanner(false);
    setShowPreferences(false);
    localStorage.setItem("cookieConsent", "accepted");
  };

  const rejectAllCookies = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    setCookiesAccepted(true);
    setShowBanner(false);
    setShowPreferences(false);
    localStorage.setItem("cookieConsent", "rejected");
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const newPrefs = { ...prefs, essential: true }; // Ensure essential is always true
    setPreferences(newPrefs);
    setCookiesAccepted(true);
    setShowBanner(false);
    setShowPreferences(false);
    localStorage.setItem("cookieConsent", "custom");
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("cookiePreferences");
    setPreferences(defaultPreferences);
    setCookiesAccepted(false);
    setShowBanner(true);
    setShowPreferences(false);
    console.log("Cookie consent reset - banner should now show");
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookiesAccepted,
        showBanner,
        showPreferences,
        preferences,
        acceptAllCookies,
        rejectAllCookies,
        savePreferences,
        openPreferences,
        closePreferences,
        closeBanner,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
