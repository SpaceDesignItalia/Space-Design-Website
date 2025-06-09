import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CookieConsentContextType {
  cookiesAccepted: boolean;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    const stored = localStorage.getItem('cookieConsent');
    return stored === 'accepted';
  });

  useEffect(() => {
    if (cookiesAccepted) {
      localStorage.setItem('cookieConsent', 'accepted');
    }
  }, [cookiesAccepted]);

  const acceptAllCookies = () => {
    setCookiesAccepted(true);
  };

  const rejectAllCookies = () => {
    setCookiesAccepted(false);
    localStorage.setItem('cookieConsent', 'rejected');
  };

  return (
    <CookieConsentContext.Provider value={{ cookiesAccepted, acceptAllCookies, rejectAllCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
} 