import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

import "./index.css";
import App from "./App";

// Wrapper condizionale per PostHog che rispetta le preferenze sui cookie
function ConditionalPostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shouldEnablePostHog, setShouldEnablePostHog] = useState(() => {
    const cookiePreferences = localStorage.getItem("cookiePreferences");
    const preferences = cookiePreferences
      ? JSON.parse(cookiePreferences)
      : null;
    return preferences?.analytics === true;
  });

  useEffect(() => {
    // Ascolta i cambiamenti nelle preferenze dei cookie
    const handleStorageChange = () => {
      const cookiePreferences = localStorage.getItem("cookiePreferences");
      const preferences = cookiePreferences
        ? JSON.parse(cookiePreferences)
        : null;
      const newShouldEnable = preferences?.analytics === true;

      if (newShouldEnable !== shouldEnablePostHog) {
        setShouldEnablePostHog(newShouldEnable);
        console.log(
          newShouldEnable
            ? "🟢 PostHog enabled - Analytics cookies accepted"
            : "🔴 PostHog disabled - Analytics cookies rejected"
        );
      }
    };

    // Ascolta i cambiamenti del localStorage
    window.addEventListener("storage", handleStorageChange);

    // Ascolta anche i cambiamenti custom (per quando le preferenze cambiano nella stessa tab)
    const handleCustomStorageChange = () => {
      handleStorageChange();
    };

    window.addEventListener(
      "cookiePreferencesChanged",
      handleCustomStorageChange
    );

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "cookiePreferencesChanged",
        handleCustomStorageChange
      );
    };
  }, [shouldEnablePostHog]);

  // Verifica se le variabili d'ambiente di PostHog sono configurate
  const postHogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
  const postHogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

  if (shouldEnablePostHog && postHogKey && postHogHost) {
    console.log("🟢 PostHog enabled - Analytics cookies accepted");
    return (
      <PostHogProvider
        apiKey={postHogKey}
        options={{
          api_host: postHogHost,
          capture_exceptions: true,
          debug: import.meta.env.MODE === "development",
        }}
      >
        {children}
      </PostHogProvider>
    );
  } else {
    if (shouldEnablePostHog && (!postHogKey || !postHogHost)) {
      console.warn(
        "⚠️ PostHog variables not configured - Create .env file with VITE_PUBLIC_POSTHOG_KEY and VITE_PUBLIC_POSTHOG_HOST"
      );
    } else {
      console.log("🔴 PostHog disabled - Analytics cookies not accepted");
    }
    return <>{children}</>;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConditionalPostHogProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ConditionalPostHogProvider>
  </StrictMode>
);
