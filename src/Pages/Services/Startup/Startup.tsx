import SEO from "../../../Components/SEO";
import { useLanguage } from "../../../context/LanguageContext";
import StartupHero from "./StartupHero";
import StartupService from "./StartupService";
import StartupStrategy from "./StartupStrategy";

export default function Startup() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("custom-software")}`}
        description={t("custom-software-meta-description")}
        keywords={t("custom-software-seo-keywords")}
        url={`/${language}/services/custom-software`}
        alternateUrls={{
          it: "/it/services/custom-software",
          en: "/en/services/custom-software",
          "x-default": "/services/custom-software",
        }}
      />

      <StartupHero />
      <StartupService />
      <StartupStrategy />
    </>
  );
}
