import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../translations';
import { useNavigate, useLocation } from 'react-router-dom';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>(() => {
    const pathLang = location.pathname.split('/')[1] as Language;
    return pathLang === 'it' ? 'it' : 'en';
  });

  const setLanguage = (newLang: Language) => {
    if (newLang !== language) {
      setLanguageState(newLang);
      
      // Get the current path parts
      const pathParts = location.pathname.split('/').filter(Boolean);
      
      // If we're at the root or only have the language part
      if (pathParts.length <= 1) {
        navigate(`/${newLang}`);
        return;
      }
      
      // Replace the language part (first part) with the new language
      pathParts[0] = newLang;
      navigate(`/${pathParts.join('/')}`);
    }
  };

  // Sync language with URL changes, but only if it's different from current language
  useEffect(() => {
    const pathLang = location.pathname.split('/')[1] as Language;
    if ((pathLang === 'it' || pathLang === 'en') && pathLang !== language) {
      setLanguageState(pathLang);
    }
  }, [location.pathname, language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 