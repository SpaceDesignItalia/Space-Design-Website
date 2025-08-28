import { useCustomLanguage } from "../providers/LanguageProvider";
import { translations } from "../translations";

export function useTranslation() {
  const { language } = useCustomLanguage();

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    const value = translation[language];
    return Array.isArray(value) ? value.join(" ") : value;
  };

  return { t };
}
