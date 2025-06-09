import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
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
          <Route path="about" element={<div>About Page</div>} />
          <Route path="contact" element={<Contact />} />
          <Route path="services">
            <Route
              path="mobile-development"
              element={<div>Mobile Development</div>}
            />
            <Route
              path="web-development"
              element={<div>Web Development</div>}
            />
            <Route path="websites" element={<div>Websites</div>} />
            <Route
              path="custom-software"
              element={<div>Custom Software</div>}
            />
            <Route path="startup-mvp" element={<div>Startup MVP</div>} />
            <Route
              path="cloud-integration"
              element={<div>Cloud Integration</div>}
            />
            <Route
              path="api-development"
              element={<div>API Development</div>}
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
