import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import MobileDevelopment from "./Pages/Services/AppMobile/MobileDevelopment";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import StartupMVP from "./Pages/Services/StartupMVP";
import AISoftware from "./Pages/Services/AISoftware";
import CloudIntegration from "./Pages/Services/CloudIntegration";
import ApiDevelopment from "./Pages/Services/ApiDevelopment";
import DevOps from "./Pages/Services/DevOps";
import {
  PrivacyPolicy,
  TermsOfService,
  CookiePolicy,
  GDPR,
} from "./Pages/Legal";
import { LanguageProvider } from "./context/LanguageContext";
import {
  CookieConsentProvider,
  useCookieConsent,
} from "./context/CookieConsentContext";
import LanguageLayout from "./Components/Layout/LanguageLayout";
import Footer from "./Components/Layout/Footer";
import CookieBanner from "./Components/Layout/CookieBanner";
import * as analytics from "./utils/analytics";
import CustomSoftware from "./Pages/Services/CustomSoftware/CustomSoftware";
import CaseStudyHome from "./Pages/CaseStudy/CaseStudyHome";
import CaseStudySyllog from "./Pages/CaseStudy/Syllog/CaseStudySyllog";
import CaseStudyClimawellWebsite from "./Pages/CaseStudy/ClimawellWebsite/CaseStudyClimawellWebsite";
import CaseStudyClimawellMarketing from "./Pages/CaseStudy/ClimawellMarketing/CaseStudyClimawellMarketing";

// Language redirect component
function LanguageRedirect() {
  const userLanguage = navigator.language.split("-")[0];
  const defaultLanguage = userLanguage === "it" ? "it" : "en";
  return <Navigate to={`/${defaultLanguage}`} replace />;
}

function AppContent() {
  const location = useLocation();
  const { preferences, cookiesAccepted } = useCookieConsent();
  const prevPathRef = useRef<string>("");

  useEffect(() => {
    // Track pageview solo se i cookie analitici sono accettati
    if (cookiesAccepted && preferences.analytics) {
      analytics.pageview(location.pathname);
      console.log("📊 Pageview tracked:", location.pathname);
    }
  }, [location, cookiesAccepted, preferences.analytics]);

  // Effetto per far tornare la vista in cima solo se cambio pagina, non lingua
  useEffect(() => {
    // Estrai il percorso senza la lingua (es. "/it/about" -> "/about")
    const pathWithoutLang = location.pathname.split("/").slice(2).join("/");
    const currentPath = pathWithoutLang || "/";

    // Se il percorso è cambiato (non la lingua), scrolla in cima
    if (prevPathRef.current !== currentPath) {
      window.scrollTo(0, 0);
      prevPathRef.current = currentPath;
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Redirect root to language-specific route */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* Language-specific routes */}
        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Legal routes */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="gdpr" element={<GDPR />} />

          {/* Case Studies routes */}
          <Route path="case-studies" element={<CaseStudyHome />} />
          <Route path="case-studies">
            <Route path="syllog" element={<CaseStudySyllog />} />
            <Route
              path="climawell-website"
              element={<CaseStudyClimawellWebsite />}
            />
            <Route
              path="climawell-marketing"
              element={<CaseStudyClimawellMarketing />}
            />
          </Route>

          <Route path="services">
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="websites" element={<WebDevelopment />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
            <Route path="custom-software" element={<CustomSoftware />} />
            <Route path="startup-mvp" element={<StartupMVP />} />
            <Route path="ai-software" element={<AISoftware />} />
            <Route path="cloud-integration" element={<CloudIntegration />} />
            <Route path="api-development" element={<ApiDevelopment />} />
            <Route path="devops" element={<DevOps />} />
            <Route
              path="infrastructure"
              element={<div>Infrastructure Management</div>}
            />
            <Route
              path="legacy-integration"
              element={<div>Legacy Integration</div>}
            />
            <Route
              path="digital-strategy"
              element={<div>Digital Strategy</div>}
            />
            <Route
              path="tech-architecture"
              element={<div>Technical Architecture</div>}
            />
            <Route path="security" element={<div>Security Consulting</div>} />
          </Route>
        </Route>

        {/* Fallback redirect for invalid routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <AppContent />
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
