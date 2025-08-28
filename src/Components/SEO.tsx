import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  alternateUrls?: {
    [key: string]: string;
  };
}

export default function SEO({
  title = "Space Design Italia - Digital Solutions",
  description = "Space Design Italia offre soluzioni digitali innovative per il tuo business. Sviluppo web, mobile e consulenza IT personalizzata.",
  keywords = "space design italia, sviluppo web, app mobile, consulenza IT, digital solutions",
  image = "/og-image.jpg",
  url,
  alternateUrls,
}: SEOProps) {
  const { language } = useLanguage();
  const baseUrl = "https://www.spacedesign-italia.it";
  const currentUrl = url ? `${baseUrl}${url}` : `${baseUrl}/${language}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Language Meta Tags */}
      <meta
        property="og:locale"
        content={language === "it" ? "it_IT" : "en_US"}
      />
      <meta name="language" content={language.toUpperCase()} />
      <link rel="canonical" href={currentUrl} />

      {/* Alternate Language Links */}
      {alternateUrls && (
        <>
          {Object.entries(alternateUrls).map(([lang, path]) => (
            <link
              key={lang}
              rel={lang === "x-default" ? "alternate" : "alternate"}
              hrefLang={lang}
              href={`${baseUrl}${path}`}
            />
          ))}
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
