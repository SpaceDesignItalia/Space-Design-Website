declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    posthog?: any;
  }
}

export const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 tracking ID

// Flag per tracciare se GA è stato inizializzato
let gaInitialized = false;

export const initGA = () => {
  if (gaInitialized) {
    console.log("🟡 Google Analytics already initialized");
    return;
  }

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}  
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `;

  document.head.appendChild(script1);
  document.head.appendChild(script2);
  gaInitialized = true;
  console.log("✅ Google Analytics initialized");
};

export const disableGA = () => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      send_page_view: false,
    });
    console.log("❌ Google Analytics disabled");
  }
};

export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined" && gaInitialized) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag !== "undefined" && gaInitialized) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Funzioni per PostHog
export const initPostHog = () => {
  // PostHog viene inizializzato tramite il provider nel main.tsx
  if (typeof window.posthog !== "undefined") {
    window.posthog.opt_in_capturing();
    console.log("✅ PostHog tracking enabled");
  }
};

export const disablePostHog = () => {
  if (typeof window.posthog !== "undefined") {
    window.posthog.opt_out_capturing();
    console.log("❌ PostHog tracking disabled");
  }
};

// Funzione per gestire tutte le analytics in base alle preferenze
export const updateAnalyticsConsent = (preferences: {
  analytics: boolean;
  marketing: boolean;
}) => {
  console.log("📊 Updating analytics consent:", preferences);

  if (preferences.analytics) {
    initGA();
    initPostHog();
  } else {
    disableGA();
    disablePostHog();
  }

  // TODO: Gestire marketing cookies quando necessario
  if (preferences.marketing) {
    console.log("📢 Marketing cookies accepted");
  } else {
    console.log("📢 Marketing cookies rejected");
  }
};
