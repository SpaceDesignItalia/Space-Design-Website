import { Translations } from "./types";
import { navigationTranslations } from "./navigation";
import { homeTranslations } from "./home";
import { servicesTranslations } from "./services";
import { webDevelopmentTranslations } from "./web-development";
import { mobileDevelopmentTranslations } from "./mobile-development";
import { customSoftwareTranslations } from "./custom-software";
import { faqTranslations } from "./faq";
import { legalTranslations } from "./legal";
import { contactTranslations } from "./contact";
import { footerTranslations } from "./footer";

// Combine all translations
export const translations: Translations = {
  ...navigationTranslations,
  ...homeTranslations,
  ...servicesTranslations,
  ...webDevelopmentTranslations,
  ...mobileDevelopmentTranslations,
  ...customSoftwareTranslations,
  ...faqTranslations,
  ...legalTranslations,
  ...contactTranslations,
  ...footerTranslations,
};

export type { Translations };
