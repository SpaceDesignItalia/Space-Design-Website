import Hero from "./Hero"
import SEO from "../../Components/SEO"
import { useLanguage } from "../../context/LanguageContext"
import OurServices from "./OurServices";
import CTA from "./CTA";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const { lang } = useParams();
  
  // Sync URL language parameter with context
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'it') && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return (
    <>
      <SEO 
        title={`Space Design Italia - ${t("hero-title")}`}
        description={t("hero-subtitle")}
        keywords={`space design italia, ${t("seo-keywords")}`}
        url={`/${language}`}
        alternateUrls={{
          'it': '/it',
          'en': '/en',
          'x-default': '/'
        }}
      />
      <main>
        <Hero />
        <OurServices/>
        <CTA/>
      </main>
    </>
  )
}
