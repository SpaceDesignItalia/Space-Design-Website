import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { useCookieConsent } from "../../context/CookieConsentContext";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function CookiePolicy() {
  const { t, language } = useLanguage();
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("footer-cookie-policy") || "Cookie Policy"
        }`}
        description={
          t("cookie-meta-description") ||
          "Cookie Policy di Space Design Italia. Informazioni sui cookie utilizzati, finalità e come gestire le preferenze sui cookie."
        }
        keywords={`cookie policy, cookie, privacy, tracking, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/cookies`}
        alternateUrls={{
          it: "/it/cookies",
          en: "/en/cookies",
          "x-default": "/cookies",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
                {t("footer-cookie-policy") || "Cookie Policy"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {t("cookie-hero-description") ||
                  "Informazioni sui cookie utilizzati sul nostro sito web e come gestire le tue preferenze"}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {t("cookie-last-updated") || "Ultimo aggiornamento: 17/06/2024"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <div className="space-y-8">
                {/* Cosa sono i cookie */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-what-are-title") || "1. Cosa sono i Cookie"}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("cookie-what-are-content") ||
                      "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti il nostro sito web. Questi file permettono al sito di ricordare le tue azioni e preferenze (come lingua, dimensione del testo e altre impostazioni di visualizzazione) per un periodo di tempo, così non devi reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra."}
                  </p>
                </div>

                {/* Come utilizziamo i cookie */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-how-we-use-title") ||
                      "2. Come Utilizziamo i Cookie"}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {t("cookie-how-we-use-content") ||
                      "Utilizziamo i cookie per vari scopi, tra cui:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      {t("cookie-use-functionality") ||
                        "Garantire il corretto funzionamento del sito web"}
                    </li>
                    <li>
                      {t("cookie-use-preferences") ||
                        "Ricordare le tue preferenze e impostazioni"}
                    </li>
                    <li>
                      {t("cookie-use-analytics") ||
                        "Analizzare come viene utilizzato il sito per migliorarlo"}
                    </li>
                    <li>
                      {t("cookie-use-security") ||
                        "Mantenere la sicurezza del sito"}
                    </li>
                    <li>
                      {t("cookie-use-marketing") ||
                        "Personalizzare contenuti e pubblicità (solo con consenso)"}
                    </li>
                  </ul>
                </div>

                {/* Tipi di cookie */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-types-title") ||
                      "3. Tipi di Cookie che Utilizziamo"}
                  </h2>

                  <div className="space-y-6">
                    {/* Cookie essenziali */}
                    <div className="border-l-4 border-black dark:border-white pl-4">
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-essential-title") || "Cookie Essenziali"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                        {t("cookie-essential-description") ||
                          "Questi cookie sono necessari per il funzionamento del sito web e non possono essere disabilitati. Includono:"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          <strong>
                            {t("cookie-session-label") || "Sessione:"}
                          </strong>{" "}
                          {t("cookie-session") ||
                            "Mantengono la tua sessione attiva durante la navigazione"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-security-label") || "Sicurezza:"}
                          </strong>{" "}
                          {t("cookie-security") ||
                            "Proteggono da attacchi e frodi"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-language-label") || "Preferenze lingua:"}
                          </strong>{" "}
                          {t("cookie-language") ||
                            "Ricordano la lingua selezionata"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-consent-label") || "Consenso cookie:"}
                          </strong>{" "}
                          {t("cookie-consent") ||
                            "Ricordano le tue preferenze sui cookie"}
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t("cookie-essential-duration") ||
                          "Durata: Sessione o fino a 1 anno"}
                      </p>
                    </div>

                    {/* Cookie analitici */}
                    <div className="border-l-4 border-gray-600 dark:border-gray-400 pl-4">
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-analytics-title") || "Cookie Analitici"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                        {t("cookie-analytics-description") ||
                          "Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni anonime:"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          <strong>
                            {t("cookie-ga-label") || "Google Analytics:"}
                          </strong>{" "}
                          {t("cookie-ga") || "Statistiche di utilizzo del sito"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-posthog-label") || "PostHog:"}
                          </strong>{" "}
                          {t("cookie-posthog") ||
                            "Analisi del comportamento utente e funzionalità del prodotto"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-popular-pages-label") ||
                              "Pagine più visitate:"}
                          </strong>{" "}
                          {t("cookie-popular-pages") ||
                            "Identificano i contenuti più popolari"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-time-label") || "Tempo di permanenza:"}
                          </strong>{" "}
                          {t("cookie-time") ||
                            "Misurano quanto tempo passi sul sito"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-traffic-source-label") ||
                              "Fonte di traffico:"}
                          </strong>{" "}
                          {t("cookie-traffic-source") ||
                            "Da dove arrivano i visitatori"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-user-events-label") || "Eventi utente:"}
                          </strong>{" "}
                          {t("cookie-user-events") ||
                            "Interazioni e azioni specifiche sul sito"}
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t("cookie-analytics-duration") ||
                          "Durata: Fino a 2 anni"}
                      </p>
                    </div>

                    {/* Cookie di marketing */}
                    <div className="border-l-4 border-gray-800 dark:border-gray-300 pl-4">
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-marketing-title") || "Cookie di Marketing"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                        {t("cookie-marketing-description") ||
                          "Utilizzati per mostrare pubblicità personalizzata e misurare l'efficacia delle campagne:"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          <strong>
                            {t("cookie-remarketing-label") || "Remarketing:"}
                          </strong>{" "}
                          {t("cookie-remarketing") ||
                            "Mostrano annunci su altri siti basati sulla tua visita"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-social-label") || "Social Media:"}
                          </strong>{" "}
                          {t("cookie-social") ||
                            "Permettono la condivisione sui social network"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-conversions-label") || "Conversioni:"}
                          </strong>{" "}
                          {t("cookie-conversions") ||
                            "Misurano l'efficacia delle campagne pubblicitarie"}
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t("cookie-marketing-duration") ||
                          "Durata: Fino a 1 anno"}
                      </p>
                      <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                        <p className="text-sm text-gray-800 dark:text-gray-200">
                          ⚠️{" "}
                          {t("cookie-marketing-consent") ||
                            "Questi cookie richiedono il tuo consenso esplicito"}
                        </p>
                      </div>
                    </div>

                    {/* Cookie di terze parti */}
                    <div className="border-l-4 border-gray-500 dark:border-gray-500 pl-4">
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-third-party-title") ||
                          "Cookie di Terze Parti"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                        {t("cookie-third-party-description") ||
                          "Alcuni cookie sono impostati da servizi esterni che appaiono sul nostro sito:"}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          <strong>
                            {t("cookie-google-label") || "Google:"}
                          </strong>{" "}
                          {t("cookie-google-services") ||
                            "Analytics, Maps, Fonts"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-posthog-service-label") || "PostHog:"}
                          </strong>{" "}
                          {t("cookie-posthog-service-desc") ||
                            "Analisi del comportamento utente e product analytics"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-social-service-label") ||
                              "Social Media:"}
                          </strong>{" "}
                          {t("cookie-social-service-desc") ||
                            "Widget di condivisione"}
                        </li>
                        <li>
                          <strong>{t("cookie-cdn-label") || "CDN:"}</strong>{" "}
                          {t("cookie-cdn-desc") || "Consegna di contenuti"}
                        </li>
                        <li>
                          <strong>
                            {t("cookie-chat-support-label") || "Chat Support:"}
                          </strong>{" "}
                          {t("cookie-chat-support-desc") ||
                            "Sistemi di supporto live"}
                        </li>
                      </ul>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {t("cookie-third-party-note") ||
                          "Questi servizi hanno le proprie policy sui cookie"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gestione cookie */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-management-title") || "4. Come Gestire i Cookie"}
                  </h2>

                  <div className="space-y-6">
                    {/* Centro preferenze */}
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-preference-center") ||
                          "Centro Preferenze Cookie"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {t("cookie-preference-center-desc") ||
                          "Puoi gestire le tue preferenze sui cookie utilizzando il nostro centro preferenze:"}
                      </p>
                      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
                        <button
                          onClick={openPreferences}
                          className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          {t("cookie-manage-preferences") ||
                            "Gestisci Preferenze Cookie"}
                        </button>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          {t("cookie-manage-note") ||
                            "Clicca qui per aprire il centro preferenze e modificare le tue scelte sui cookie"}
                        </p>
                      </div>
                    </div>

                    {/* Browser settings */}
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        {t("cookie-browser-settings") ||
                          "Impostazioni del Browser"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {t("cookie-browser-settings-desc") ||
                          "Puoi anche gestire i cookie direttamente dalle impostazioni del tuo browser:"}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900">
                          <h4 className="font-semibold text-black dark:text-white mb-2">
                            Chrome
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t("cookie-chrome-instructions") ||
                              "Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti"}
                          </p>
                        </div>
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900">
                          <h4 className="font-semibold text-black dark:text-white mb-2">
                            Firefox
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t("cookie-firefox-instructions") ||
                              "Preferenze > Privacy e sicurezza > Cookie e dati dei siti web"}
                          </p>
                        </div>
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900">
                          <h4 className="font-semibold text-black dark:text-white mb-2">
                            Safari
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t("cookie-safari-instructions") ||
                              "Preferenze > Privacy > Gestisci dati siti web"}
                          </p>
                        </div>
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900">
                          <h4 className="font-semibold text-black dark:text-white mb-2">
                            Edge
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t("cookie-edge-instructions") ||
                              "Impostazioni > Privacy, ricerca e servizi > Cookie e autorizzazioni sito"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PostHog - Servizio di Analytics */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-posthog-section-title") ||
                      "5. PostHog - Servizio di Product Analytics"}
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t("cookie-posthog-description") ||
                        "Utilizziamo PostHog come servizio di product analytics per comprendere meglio come gli utenti interagiscono con il nostro sito web. PostHog ci aiuta a migliorare l'esperienza utente raccogliendo dati anonimi sul comportamento di navigazione."}
                    </p>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {t("cookie-posthog-what-collects") ||
                          "Cosa raccoglie PostHog:"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          {t("cookie-posthog-pages-visited") ||
                            "Pagine visitate e tempo di permanenza"}
                        </li>
                        <li>
                          {t("cookie-posthog-interactions") ||
                            "Interazioni con elementi del sito (click, scroll, form)"}
                        </li>
                        <li>
                          {t("cookie-posthog-device-info") ||
                            "Informazioni sul dispositivo e browser"}
                        </li>
                        <li>
                          {t("cookie-posthog-session-data") ||
                            "Dati di sessione anonimi"}
                        </li>
                        <li>
                          {t("cookie-posthog-custom-events") ||
                            "Eventi personalizzati per migliorare l'esperienza"}
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {t("cookie-posthog-privacy") || "Privacy e Sicurezza:"}
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>
                          {t("cookie-posthog-anonymous-data") ||
                            "I dati sono raccolti in forma anonima"}
                        </li>
                        <li>
                          {t("cookie-posthog-no-personal-info") ||
                            "Non raccogliamo informazioni personali identificabili"}
                        </li>
                        <li>
                          {t("cookie-posthog-encrypted") ||
                            "I dati sono crittografati durante la trasmissione"}
                        </li>
                        <li>
                          {t("cookie-posthog-gdpr-compliant") ||
                            "PostHog rispetta il GDPR e le normative sulla privacy"}
                        </li>
                        <li>
                          {t("cookie-posthog-disable-tracking") ||
                            "Puoi disabilitare il tracking in qualsiasi momento"}
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>
                          {t("cookie-info-label") || "ℹ️ Informazione:"}
                        </strong>{" "}
                        {t("cookie-posthog-consent") ||
                          "PostHog viene attivato solo dopo aver ottenuto il tuo consenso esplicito per i cookie analitici. Puoi modificare questa scelta in qualsiasi momento tramite il centro preferenze cookie."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disabilitazione effetti */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-disable-effects-title") ||
                      "6. Cosa Succede se Disabiliti i Cookie"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {t("cookie-disable-essential") ||
                          "Disabilitazione Cookie Essenziali"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t("cookie-disable-essential-desc") ||
                          "Se disabiliti i cookie essenziali, alcune parti del sito potrebbero non funzionare correttamente. Potresti dover reinserire le tue preferenze ad ogni visita e alcune funzionalità potrebbero non essere disponibili."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {t("cookie-disable-analytics") ||
                          "Disabilitazione Cookie Analitici"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t("cookie-disable-analytics-desc") ||
                          "Disabilitando i cookie analitici, non comprometterai la funzionalità del sito, ma ci impedirai di migliorare l'esperienza utente basandoci sui dati di utilizzo."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                        {t("cookie-disable-marketing") ||
                          "Disabilitazione Cookie di Marketing"}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t("cookie-disable-marketing-desc") ||
                          "Disabilitando i cookie di marketing, continuerai a vedere pubblicità, ma queste non saranno personalizzate in base ai tuoi interessi e alla tua attività di navigazione."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aggiornamenti */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-updates-title") ||
                      "7. Aggiornamenti alla Cookie Policy"}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("cookie-updates-content") ||
                      "Possiamo aggiornare questa Cookie Policy di tanto in tanto per riflettere cambiamenti nei cookie che utilizziamo o per altri motivi operativi, legali o normativi. Ti consigliamo di consultare regolarmente questa pagina per rimanere informato su come utilizziamo i cookie."}
                  </p>
                </div>

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                    {t("cookie-contact-title") || "8. Contatti"}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("cookie-contact-content") ||
                      "Se hai domande sulla nostra Cookie Policy o su come utilizziamo i cookie, puoi contattarci:"}
                  </p>
                  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
                    <p className="font-semibold text-black dark:text-white">
                      Space Design Italia
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("company-vat") || "P.IVA: 07420400488"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Email: amministrazione@spacedesign-italia.it
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("company-website") ||
                        "Sito web: https://www.spacedesign-italia.it/"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
