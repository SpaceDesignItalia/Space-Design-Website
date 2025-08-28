import Hero from "./Hero";
import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import OurServices from "./OurServices";
import CTA from "../../Components/Layout/CTA";
import WhyUs from "./WhyUs";
import ProjectTypes from "./ProjectTypes";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("hero-title")}`}
        description={t("hero-subtitle")}
        keywords={`space design italia, ${t("seo-keywords")}`}
        url={`/${language}`}
        alternateUrls={{
          it: "/it",
          en: "/en",
          "x-default": "/",
        }}
      />

      <Hero />
      <OurServices />
      <WhyUs />
      <ProjectTypes />
      <CTA />
    </>
  );
}
