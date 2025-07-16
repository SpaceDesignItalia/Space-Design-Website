import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function GDPR() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${t("footer-gdpr") || "GDPR"}`}
        description={
          t("gdpr-meta-description") ||
          "Informazioni GDPR di Space Design Italia. I tuoi diritti secondo il Regolamento Generale sulla Protezione dei Dati e come esercitarli."
        }
        keywords={`GDPR, protezione dati, diritti privacy, regolamento europeo, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/gdpr`}
        alternateUrls={{
          it: "/it/gdpr",
          en: "/en/gdpr",
          "x-default": "/gdpr",
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
                {t("footer-gdpr") || "GDPR"}
              </h1>
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
                {t("gdpr-full-name") ||
                  "Regolamento Generale sulla Protezione dei Dati"}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("gdpr-hero-description") ||
                  "I tuoi diritti secondo il GDPR e come Space Design Italia protegge i tuoi dati personali"}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {t("gdpr-last-updated") || "Ultimo aggiornamento: 17/06/2025"}
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
                    {t("gdpr-introduction-title") || "1. Introduzione al GDPR"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-introduction-content") ||
                      "Il Regolamento Generale sulla Protezione dei Dati (GDPR) è entrato in vigore il 25 maggio 2018 e rappresenta la normativa più avanzata al mondo in materia di protezione dei dati personali. Space Design Italia si impegna a rispettare pienamente tutti i requisiti del GDPR per garantire la massima protezione dei tuoi dati personali."}
                  </p>
                </div>

                {/* Conformità */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-compliance-title") || "2. La Nostra Conformità"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("gdpr-compliance-content") ||
                      "Come azienda che tratta dati personali, ci impegniamo a:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("gdpr-compliance-1") ||
                        "Trattare i dati in modo lecito, corretto e trasparente"}
                    </li>
                    <li>
                      {t("gdpr-compliance-2") ||
                        "Raccogliere dati solo per finalità specifiche e legittime"}
                    </li>
                    <li>
                      {t("gdpr-compliance-3") ||
                        "Limitare il trattamento al minimo necessario"}
                    </li>
                    <li>
                      {t("gdpr-compliance-4") ||
                        "Mantenere i dati accurati e aggiornati"}
                    </li>
                    <li>
                      {t("gdpr-compliance-5") ||
                        "Conservare i dati solo per il tempo necessario"}
                    </li>
                    <li>
                      {t("gdpr-compliance-6") ||
                        "Garantire la sicurezza dei dati"}
                    </li>
                  </ul>
                </div>

                {/* I tuoi diritti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-rights-title") || "3. I Tuoi Diritti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {t("gdpr-rights-intro") ||
                      "Il GDPR ti garantisce i seguenti diritti riguardo ai tuoi dati personali:"}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-access") || "Diritto di Accesso"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-access-desc") ||
                          "Hai il diritto di sapere se trattiamo i tuoi dati personali e di ottenere una copia gratuita di tutti i dati che conserviamo su di te, insieme a informazioni su come li utilizziamo."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-rectification") ||
                          "Diritto di Rettifica"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-rectification-desc") ||
                          "Hai il diritto di far correggere i dati personali inesatti o di completare i dati incompleti che conserviamo su di te."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-erasure") ||
                          "Diritto alla Cancellazione"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-erasure-desc") ||
                          "Noto anche come 'diritto all'oblio', ti permette di richiedere la cancellazione dei tuoi dati personali quando non sono più necessari per le finalità per cui sono stati raccolti."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-restriction") ||
                          "Diritto di Limitazione"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-restriction-desc") ||
                          "Hai il diritto di richiedere la limitazione del trattamento dei tuoi dati personali in determinate circostanze, ad esempio quando contesti l'accuratezza dei dati."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-portability") ||
                          "Diritto alla Portabilità"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-portability-desc") ||
                          "Hai il diritto di ricevere i tuoi dati personali in un formato strutturato, di uso comune e leggibile da dispositivo automatico, e di trasmettere tali dati a un altro titolare del trattamento."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-objection") || "Diritto di Opposizione"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-objection-desc") ||
                          "Hai il diritto di opporti al trattamento dei tuoi dati personali per motivi di marketing diretto o quando il trattamento è basato sul nostro interesse legittimo."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t("gdpr-right-withdraw") ||
                          "Diritto di Revoca del Consenso"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("gdpr-right-withdraw-desc") ||
                          "Quando il trattamento è basato sul consenso, hai il diritto di revocare il tuo consenso in qualsiasi momento, senza compromettere la liceità del trattamento basata sul consenso prestato prima della revoca."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Come esercitare i diritti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-exercise-rights-title") ||
                      "4. Come Esercitare i Tuoi Diritti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("gdpr-exercise-rights-content") ||
                      "Per esercitare uno qualsiasi dei tuoi diritti GDPR, puoi contattarci utilizzando i seguenti metodi:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("gdpr-contact-email") ||
                        "Email: amministrazione@spacedesign-italia.it"}
                    </li>
                    <li>
                      {t("gdpr-contact-form") ||
                        "Modulo di contatto sul nostro sito web"}
                    </li>
                    <li>
                      {t("gdpr-contact-written") ||
                        "Comunicazione scritta all'indirizzo della sede legale"}
                    </li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("gdpr-response-time") ||
                      "Risponderemo alla tua richiesta entro 30 giorni dalla ricezione. In casi complessi, questo periodo può essere esteso di altri 60 giorni, informandoti dei motivi del ritardo."}
                  </p>
                </div>

                {/* Titolare e responsabile */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-data-controller-title") ||
                      "5. Titolare del Trattamento"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-data-controller-content") ||
                      "Space Design Italia agisce come titolare del trattamento per i dati personali che raccogliamo e trattiamo. Siamo responsabili di determinare le finalità e i mezzi del trattamento dei tuoi dati personali e di garantire che tale trattamento sia conforme al GDPR."}
                  </p>
                </div>

                {/* Sicurezza */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-security-title") || "6. Misure di Sicurezza"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-security-content") ||
                      "Implementiamo misure tecniche e organizzative appropriate per garantire un livello di sicurezza adeguato al rischio, inclusi la pseudonimizzazione e la cifratura dei dati personali, la capacità di assicurare la riservatezza, l'integrità, la disponibilità e la resilienza dei sistemi di trattamento."}
                  </p>
                </div>

                {/* Violazioni */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-breach-title") || "7. Notifica di Violazioni"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-breach-content") ||
                      "In caso di violazione dei dati personali che possa comportare un rischio elevato per i diritti e le libertà delle persone fisiche, ti informeremo senza ingiustificato ritardo e in linguaggio semplice e chiaro della natura della violazione e delle misure adottate per affrontarla."}
                  </p>
                </div>

                {/* Autorità di controllo */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-authority-title") || "8. Autorità di Controllo"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-authority-content") ||
                      "Hai il diritto di presentare un reclamo a un'autorità di controllo, in particolare nello Stato membro in cui risiedi abitualmente, lavori o nel luogo dove si è verificata la presunta violazione. Per l'Italia, l'autorità competente è il Garante per la Protezione dei Dati Personali."}
                  </p>
                </div>

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("gdpr-contact-title") || "9. Contatti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("gdpr-contact-content") ||
                      "Per qualsiasi domanda relativa al GDPR o per esercitare i tuoi diritti, contattaci:"}
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Space Design Italia
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
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
