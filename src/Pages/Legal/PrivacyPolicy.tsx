import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("footer-privacy-policy") || "Privacy Policy"
        }`}
        description={
          t("privacy-meta-description") ||
          "Privacy Policy di Space Design Italia. Informazioni su come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
        }
        keywords={`privacy policy, protezione dati, GDPR, ${t("seo-keywords")}`}
        url={`/${language}/privacy`}
        alternateUrls={{
          it: "/it/privacy",
          en: "/en/privacy",
          "x-default": "/privacy",
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {t("footer-privacy-policy") || "Privacy Policy"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("privacy-hero-description") ||
                  "Informazioni su come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali"}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {t("privacy-last-updated") ||
                  "Ultimo aggiornamento: 17/06/2024"}
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
                {/* Introduzione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-introduction-title") || "1. Introduzione"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-introduction-content") ||
                      "Space Design Italia (di seguito 'noi', 'nostro', 'nostra') rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa Privacy Policy ti informa su come raccogliamo, utilizziamo, conserviamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web o i nostri servizi."}
                  </p>
                </div>

                {/* Dati che raccogliamo */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-data-collection-title") ||
                      "2. Dati che Raccogliamo"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("privacy-personal-data-title") || "Dati Personali"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("privacy-personal-data-content") ||
                          "Quando ci contatti tramite i nostri moduli o richiedi i nostri servizi, potremmo raccogliere le seguenti informazioni: nome, cognome, indirizzo email, numero di telefono, nome dell'azienda, informazioni sul progetto e qualsiasi altra informazione che scegli di fornirci."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("privacy-technical-data-title") || "Dati Tecnici"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("privacy-technical-data-content") ||
                          "Raccogliamo automaticamente alcune informazioni tecniche quando visiti il nostro sito web, inclusi: indirizzo IP, tipo di browser, sistema operativo, pagine visitate, tempo di permanenza e dati di navigazione."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Come utilizziamo i dati */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-data-usage-title") ||
                      "3. Come Utilizziamo i Tuoi Dati"}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("privacy-usage-1") ||
                        "Rispondere alle tue richieste e fornire i nostri servizi"}
                    </li>
                    <li>
                      {t("privacy-usage-2") ||
                        "Comunicare con te riguardo ai progetti e servizi"}
                    </li>
                    <li>
                      {t("privacy-usage-3") ||
                        "Migliorare il nostro sito web e i nostri servizi"}
                    </li>
                    <li>
                      {t("privacy-usage-4") ||
                        "Inviare comunicazioni di marketing (solo con il tuo consenso)"}
                    </li>
                    <li>
                      {t("privacy-usage-5") ||
                        "Rispettare gli obblighi legali e normativi"}
                    </li>
                  </ul>
                </div>

                {/* Base legale */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-legal-basis-title") ||
                      "4. Base Legale del Trattamento"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-legal-basis-content") ||
                      "Trattiamo i tuoi dati personali sulla base di: consenso esplicito per comunicazioni di marketing, esecuzione del contratto per la fornitura dei servizi, interesse legittimo per migliorare i nostri servizi, e adempimento di obblighi legali."}
                  </p>
                </div>

                {/* Condivisione dati */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-data-sharing-title") ||
                      "5. Condivisione dei Dati"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-data-sharing-content") ||
                      "Non vendiamo, affittiamo o condividiamo i tuoi dati personali con terze parti, eccetto quando necessario per fornire i nostri servizi (es. fornitori di hosting), quando richiesto dalla legge, o con il tuo consenso esplicito."}
                  </p>
                </div>

                {/* Sicurezza */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-security-title") || "6. Sicurezza dei Dati"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-security-content") ||
                      "Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali contro accesso non autorizzato, alterazione, divulgazione o distruzione. Utilizziamo crittografia SSL, accesso limitato ai dati e backup sicuri."}
                  </p>
                </div>

                {/* I tuoi diritti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-rights-title") || "7. I Tuoi Diritti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("privacy-rights-intro") ||
                      "Hai i seguenti diritti riguardo ai tuoi dati personali:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("privacy-right-access") ||
                        "Diritto di accesso: richiedere copia dei tuoi dati personali"}
                    </li>
                    <li>
                      {t("privacy-right-rectification") ||
                        "Diritto di rettifica: correggere dati inesatti o incompleti"}
                    </li>
                    <li>
                      {t("privacy-right-erasure") ||
                        "Diritto alla cancellazione: richiedere la cancellazione dei tuoi dati"}
                    </li>
                    <li>
                      {t("privacy-right-portability") ||
                        "Diritto alla portabilità: ricevere i tuoi dati in formato strutturato"}
                    </li>
                    <li>
                      {t("privacy-right-objection") ||
                        "Diritto di opposizione: opporti al trattamento per scopi di marketing"}
                    </li>
                    <li>
                      {t("privacy-right-withdraw") ||
                        "Diritto di revoca: revocare il consenso in qualsiasi momento"}
                    </li>
                  </ul>
                </div>

                {/* Cookie */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-cookies-title") ||
                      "8. Cookie e Tecnologie Simili"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-cookies-content") ||
                      "Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito web. Per maggiori informazioni sui cookie che utilizziamo, consulta la nostra Cookie Policy."}
                  </p>
                </div>

                {/* Conservazione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-retention-title") ||
                      "9. Conservazione dei Dati"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-retention-content") ||
                      "Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi per cui sono stati raccolti, o come richiesto dalla legge. I dati di contatto vengono conservati per 7 anni per fini fiscali e contabili."}
                  </p>
                </div>

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-contact-title") || "10. Contatti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-contact-content") ||
                      "Per qualsiasi domanda riguardante questa Privacy Policy o per esercitare i tuoi diritti, puoi contattarci all'indirizzo email: amministrazione@spacedesign-italia.it o tramite il modulo di contatto sul nostro sito web."}
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t("privacy-company-info") || "Space Design Italia"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("company-vat") || "P.IVA: 07420400488"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("privacy-company-email") ||
                        "Email: amministrazione@spacedesign-italia.it"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("company-website") ||
                        "Sito web: https://www.spacedesign-italia.it/"}
                    </p>
                  </div>
                </div>

                {/* Modifiche */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("privacy-changes-title") ||
                      "11. Modifiche alla Privacy Policy"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("privacy-changes-content") ||
                      "Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. Ti consigliamo di consultare periodicamente questa pagina per essere sempre informato sulle nostre pratiche di privacy."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
