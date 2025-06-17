import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PostHogProvider } from "posthog-js/react";

import "./index.css";
import App from "./App";

// Wrapper condizionale per PostHog che rispetta le preferenze sui cookie
function ConditionalPostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Se non ci sono preferenze salvate o analytics è disabilitato, non inizializzare PostHog
  const cookiePreferences = localStorage.getItem("cookiePreferences");
  const preferences = cookiePreferences ? JSON.parse(cookiePreferences) : null;

  const shouldEnablePostHog = preferences?.analytics === true;

  if (shouldEnablePostHog) {
    console.log("🟢 PostHog enabled - Analytics cookies accepted");
    return (
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={{
          api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
          capture_exceptions: true,
          debug: import.meta.env.MODE === "development",
        }}
      >
        {children}
      </PostHogProvider>
    );
  } else {
    console.log("🔴 PostHog disabled - Analytics cookies not accepted");
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
