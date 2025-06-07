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
    setLanguageState(newLang);
    const currentPath = location.pathname.split('/').slice(2).join('/');
    navigate(`/${newLang}${currentPath ? `/${currentPath}` : ''}`);
  };

  // Sync language with URL changes
  useEffect(() => {
    const pathLang = location.pathname.split('/')[1] as Language;
    if (pathLang === 'it' || pathLang === 'en') {
      setLanguageState(pathLang);
    }
  }, [location.pathname]);

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