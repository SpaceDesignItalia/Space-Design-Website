import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import MobileDevelopment from "./Pages/Services/MobileDevelopment";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import CustomSoftware from "./Pages/Services/CustomSoftware";
import StartupMVP from "./Pages/Services/StartupMVP";
import AISoftware from "./Pages/Services/AISoftware";
import CloudIntegration from "./Pages/Services/CloudIntegration";
import ApiDevelopment from "./Pages/Services/ApiDevelopment";
import DevOps from "./Pages/Services/DevOps";
import { LanguageProvider } from "./context/LanguageContext";
import {
  CookieConsentProvider,
  useCookieConsent,
} from "./context/CookieConsentContext";
import LanguageLayout from "./Components/Layout/LanguageLayout";
import Footer from "./Components/Layout/Footer";
import CookieBanner from "./Components/Layout/CookieBanner";
import * as analytics from "./utils/analytics";

// Language redirect component
function LanguageRedirect() {
  const userLanguage = navigator.language.split("-")[0];
  const defaultLanguage = userLanguage === "it" ? "it" : "en";
  return <Navigate to={`/${defaultLanguage}`} replace />;
}

function AppContent() {
  const location = useLocation();
  const { cookiesAccepted } = useCookieConsent();

  useEffect(() => {
    if (cookiesAccepted) {
      analytics.initGA();
    }
  }, [cookiesAccepted]);

  useEffect(() => {
    if (cookiesAccepted) {
      analytics.pageview(location.pathname);
    }
  }, [location, cookiesAccepted]);

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
