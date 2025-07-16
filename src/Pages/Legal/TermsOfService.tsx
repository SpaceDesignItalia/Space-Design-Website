import SEO from "../../Components/SEO";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function TermsOfService() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={`Space Design Italia - ${
          t("footer-terms-of-service") || "Termini di Servizio"
        }`}
        description={
          t("terms-of-service-meta-description") ||
          "Termini e condizioni del servizio di Space Design Italia. Regole e condizioni per l'utilizzo dei nostri servizi di sviluppo software."
        }
        keywords={`termini servizio, condizioni, contratto, ${t(
          "seo-keywords"
        )}`}
        url={`/${language}/terms`}
        alternateUrls={{
          it: "/it/terms",
          en: "/en/terms",
          "x-default": "/terms",
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
                {t("footer-terms-of-service") || "Termini di Servizio"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("terms-hero-description") ||
                  "Termini e condizioni per l'utilizzo dei nostri servizi di sviluppo software"}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {t("terms-last-updated") || "Ultimo aggiornamento: 17/06/2025"}
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
                {/* Accettazione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-acceptance-title") ||
                      "1. Accettazione dei Termini"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-acceptance-content") ||
                      "Utilizzando i servizi di Space Design Italia, accetti completamente e senza riserve questi Termini di Servizio. Se non accetti questi termini, non utilizzare i nostri servizi. Questi termini costituiscono un accordo legalmente vincolante tra te e Space Design Italia."}
                  </p>
                </div>

                {/* Definizioni */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-definitions-title") || "2. Definizioni"}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      <strong>"Noi", "nostro", "nostra":</strong>{" "}
                      {t("terms-def-company") ||
                        "Space Design Italia, P.IVA 07420400488"}
                    </li>
                    <li>
                      <strong>"Tu", "tuo", "Cliente":</strong>{" "}
                      {t("terms-def-client") ||
                        "La persona o entità che utilizza i nostri servizi"}
                    </li>
                    <li>
                      <strong>"Servizi":</strong>{" "}
                      {t("terms-def-services") ||
                        "Tutti i servizi di sviluppo software, consulenza e supporto offerti da Space Design Italia"}
                    </li>
                    <li>
                      <strong>"Progetto":</strong>{" "}
                      {t("terms-def-project") ||
                        "Qualsiasi lavoro di sviluppo software commissionato dal Cliente"}
                    </li>
                  </ul>
                </div>

                {/* Servizi */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-services-title") || "3. Descrizione dei Servizi"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("terms-services-intro") ||
                      "Space Design Italia fornisce i seguenti servizi:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-service-web") ||
                        "Sviluppo di siti web e applicazioni web"}
                    </li>
                    <li>
                      {t("terms-service-mobile") ||
                        "Sviluppo di applicazioni mobile native e cross-platform"}
                    </li>
                    <li>
                      {t("terms-service-custom") ||
                        "Sviluppo di software personalizzato e sistemi gestionali"}
                    </li>
                    <li>
                      {t("terms-service-mvp") || "Sviluppo di MVP per startup"}
                    </li>
                    <li>
                      {t("terms-service-ai") ||
                        "Soluzioni basate su intelligenza artificiale"}
                    </li>
                    <li>
                      {t("terms-service-cloud") ||
                        "Servizi di integrazione cloud"}
                    </li>
                    <li>
                      {t("terms-service-api") ||
                        "Sviluppo di API e microservizi"}
                    </li>
                    <li>
                      {t("terms-service-devops") || "Servizi DevOps e CI/CD"}
                    </li>
                    <li>
                      {t("terms-service-consulting") ||
                        "Consulenza tecnica e strategica"}
                    </li>
                  </ul>
                </div>

                {/* Processo di lavoro */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-workflow-title") || "4. Processo di Lavoro"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-workflow-consultation") ||
                          "Consulenza Iniziale"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-workflow-consultation-desc") ||
                          "Ogni progetto inizia con una consulenza gratuita per comprendere le tue esigenze e definire gli obiettivi del progetto."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-workflow-proposal") || "Proposta e Contratto"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-workflow-proposal-desc") ||
                          "Forniamo una proposta dettagliata con specifiche tecniche, tempistiche e costi. Il lavoro inizia solo dopo l'accettazione scritta del contratto."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-workflow-development") || "Sviluppo"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-workflow-development-desc") ||
                          "Il lavoro viene svolto secondo le metodologie agili con revisioni periodiche e feedback continuo dal Cliente."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Obblighi del cliente */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-client-obligations-title") ||
                      "5. Obblighi del Cliente"}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-client-info") ||
                        "Fornire informazioni accurate e complete necessarie per il progetto"}
                    </li>
                    <li>
                      {t("terms-client-feedback") ||
                        "Fornire feedback tempestivo durante le fasi di revisione"}
                    </li>
                    <li>
                      {t("terms-client-content") ||
                        "Fornire contenuti, materiali grafici e accessi necessari"}
                    </li>
                    <li>
                      {t("terms-client-payment") ||
                        "Effettuare i pagamenti secondo i termini concordati"}
                    </li>
                    <li>
                      {t("terms-client-cooperation") ||
                        "Collaborare in buona fede per il successo del progetto"}
                    </li>
                    <li>
                      {t("terms-client-legal") ||
                        "Garantire che tutti i materiali forniti non violino diritti di terzi"}
                    </li>
                  </ul>
                </div>

                {/* Uso lecito dei servizi */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-lawful-use-title") || "6. Uso Lecito dei Servizi"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("terms-lawful-use-content") ||
                      "Il Cliente si impegna a utilizzare i servizi di Space Design Italia esclusivamente per scopi leciti e conformi alla normativa vigente. È vietato:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-lawful-use-illegal") ||
                        "Utilizzare i servizi per attività illegali, fraudolente o contrarie alla legge"}
                    </li>
                    <li>
                      {t("terms-lawful-use-harmful") ||
                        "Sviluppare software che possa causare danni a terzi o violare diritti di proprietà intellettuale"}
                    </li>
                    <li>
                      {t("terms-lawful-use-malware") ||
                        "Creare malware, virus o software dannoso"}
                    </li>
                    <li>
                      {t("terms-lawful-use-spam") ||
                        "Utilizzare i servizi per attività di spam o phishing"}
                    </li>
                    <li>
                      {t("terms-lawful-use-unauthorized") ||
                        "Tentare di accedere non autorizzato a sistemi o reti di terzi"}
                    </li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("terms-lawful-use-violation") ||
                      "La violazione di queste disposizioni comporta la risoluzione immediata del contratto e può comportare azioni legali a tutela dei nostri diritti."}
                  </p>
                </div>

                {/* Trattamento dei dati personali */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-data-processing-title") ||
                      "7. Trattamento dei Dati Personali"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("terms-data-processing-content") ||
                      "Il trattamento dei dati personali del Cliente è regolato dalla nostra Privacy Policy e dal Regolamento Generale sulla Protezione dei Dati (GDPR). Utilizzando i nostri servizi, il Cliente accetta il trattamento dei propri dati personali secondo le modalità descritte nella Privacy Policy."}
                  </p>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>
                        ℹ️ {t("terms-information") || "Informazione"}:
                      </strong>{" "}
                      {t("terms-data-processing-link") ||
                        "Per maggiori informazioni sul trattamento dei dati personali, consulta la nostra "}
                      <a
                        href={`/${language}/privacy-policy`}
                        className="underline hover:text-blue-600 dark:hover:text-blue-300"
                      >
                        {t("footer-privacy-policy") || "Privacy Policy"}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Pagamenti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-payment-title") || "8. Pagamenti e Fatturazione"}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-payment-terms") ||
                        "I termini di pagamento sono specificati nel contratto del progetto"}
                    </li>
                    <li>
                      {t("terms-payment-advance") ||
                        "Di norma richiediamo un anticipo del 50% per iniziare il lavoro"}
                    </li>
                    <li>
                      {t("terms-payment-schedule") ||
                        "I pagamenti seguono le milestone del progetto"}
                    </li>
                    <li>
                      {t("terms-payment-delay") ||
                        "Ritardi nei pagamenti possono comportare la sospensione del lavoro"}
                    </li>
                    <li>
                      {t("terms-payment-late") ||
                        "Sui pagamenti in ritardo si applica un interesse di mora del 3% mensile"}
                    </li>
                    <li>
                      {t("terms-payment-currency") ||
                        "Tutti i prezzi sono in Euro e IVA esclusa salvo diversamente specificato"}
                    </li>
                  </ul>
                </div>

                {/* Sospensione dei Servizi */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-suspension-title") ||
                      "9. Sospensione dei Servizi"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {t("terms-suspension-content") ||
                      "Space Design Italia si riserva il diritto di sospendere temporaneamente o definitivamente i servizi nei seguenti casi:"}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-suspension-payment") ||
                        "Mancato pagamento delle fatture scadute o ritardi significativi nei pagamenti"}
                    </li>
                    <li>
                      {t("terms-suspension-violation") ||
                        "Violazione dei termini di servizio o uso improprio dei servizi"}
                    </li>
                    <li>
                      {t("terms-suspension-illegal") ||
                        "Utilizzo dei servizi per attività illegali o contrarie alla legge"}
                    </li>
                    <li>
                      {t("terms-suspension-force-majeure") ||
                        "Eventi di forza maggiore che impediscono la prestazione dei servizi"}
                    </li>
                    <li>
                      {t("terms-suspension-maintenance") ||
                        "Manutenzione programmata o aggiornamenti necessari dei sistemi"}
                    </li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("terms-suspension-notice") ||
                      "Ove possibile, forniremo un preavviso ragionevole prima della sospensione. La sospensione non comporta la risoluzione del contratto e i servizi saranno ripristinati una volta risolte le cause della sospensione."}
                  </p>
                </div>

                {/* Proprietà intellettuale */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-ip-title") || "10. Proprietà Intellettuale"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-ip-client-title") || "Proprietà del Cliente"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-ip-client-content") ||
                          "Il software sviluppato specificamente per il Cliente diventa di sua proprietà dopo il saldo completo del progetto, fatta eccezione per componenti open source e librerie di terze parti."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-ip-company-title") ||
                          "Proprietà di Space Design Italia"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-ip-company-content") ||
                          "Rimangono di nostra proprietà: metodologie, framework proprietari, know-how aziendale e componenti riutilizzabili sviluppati prima o durante il progetto."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Supporto e Manutenzione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-support-title") || "11. Supporto e Manutenzione"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-support-warranty") || "Garanzia di Base"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-support-warranty-desc") ||
                          "Forniamo una garanzia di 90 giorni dalla consegna del progetto per difetti di funzionamento. Durante questo periodo, correggeremo gratuitamente eventuali bug e problemi di compatibilità."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-support-continuous") ||
                          "Supporto Continuativo"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-support-continuous-desc") ||
                          "Il supporto tecnico continuativo, la manutenzione ordinaria e gli aggiornamenti sono disponibili solo attraverso accordi di supporto aggiuntivi. Questi servizi non sono inclusi nella garanzia di base e richiedono un contratto separato."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-support-emergency") ||
                          "Supporto di Emergenza"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-support-emergency-desc") ||
                          "Per problemi critici che impediscono il funzionamento del software, forniamo supporto di emergenza secondo i termini dell'accordo di supporto in vigore o a tariffe orarie concordate."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Garanzie */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-warranties-title") ||
                      "12. Garanzie e Limitazioni"}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-warranty-period") || "Periodo di Garanzia"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-warranty-period-desc") ||
                          "Garantiamo il software da difetti per 6 mesi dalla consegna. La garanzia copre solo difetti di funzionamento e non modifiche o miglioramenti richiesti successivamente."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {t("terms-warranty-exclusions") || "Esclusioni"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t("terms-warranty-exclusions-desc") ||
                          "La garanzia non copre: modifiche non autorizzate, uso improprio, problemi derivanti da sistemi terzi, forza maggiore o cambiamenti nei requisiti di sistema."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsabilità */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-liability-title") ||
                      "13. Limitazione di Responsabilità"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-liability-content") ||
                      "La nostra responsabilità è limitata all'importo pagato per il progetto specifico. Non siamo responsabili per danni indiretti, perdite di profitto, interruzioni di attività o altri danni consequenziali. Il Cliente si assume la responsabilità dell'uso del software e della conformità alle normative applicabili."}
                  </p>
                </div>

                {/* Riservatezza */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-confidentiality-title") || "14. Riservatezza"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-confidentiality-content") ||
                      "Ci impegniamo a mantenere riservate tutte le informazioni confidenziali del Cliente. Tuttavia, possiamo utilizzare il progetto come riferimento nel nostro portfolio, salvo diverso accordo scritto. Le informazioni tecniche generali apprese durante il progetto possono essere utilizzate per migliorare i nostri servizi."}
                  </p>
                </div>

                {/* Forza Maggiore */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-force-majeure-title") || "15. Forza Maggiore"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-force-majeure-content") ||
                      "Nessuna delle parti sarà responsabile per il mancato adempimento delle proprie obbligazioni contrattuali se tale inadempimento è dovuto a eventi di forza maggiore, inclusi ma non limitati a: calamità naturali, guerre, rivolte, atti di terrorismo, interruzioni di corrente, guasti ai sistemi informatici, pandemie, decisioni governative o altri eventi imprevisti e inevitabili al di fuori del controllo delle parti."}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("terms-force-majeure-notice") ||
                      "In caso di forza maggiore, la parte interessata dovrà notificare immediatamente l'altra parte e adottare tutte le misure ragionevoli per minimizzare l'impatto. Se l'evento di forza maggiore persiste per più di 30 giorni, entrambe le parti potranno risolvere il contratto senza penalità."}
                  </p>
                </div>

                {/* Accettazione Digitale */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-digital-acceptance-title") ||
                      "16. Accettazione Digitale"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-digital-acceptance-content") ||
                      "L'accettazione di questi Termini di Servizio può avvenire attraverso mezzi digitali, inclusi ma non limitati a: accettazione tramite sito web, conferma via email, firma digitale o altri mezzi elettronici. L'accettazione digitale ha la stessa validità legale dell'accettazione tradizionale su carta."}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("terms-digital-acceptance-proof") ||
                      "I log di sistema, le registrazioni email e altri mezzi di prova elettronica saranno considerati validi per dimostrare l'accettazione di questi termini."}
                  </p>
                </div>

                {/* Clausola Salvatoria */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-severability-title") || "17. Clausola Salvatoria"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-severability-content") ||
                      "Se una qualsiasi disposizione di questi Termini di Servizio dovesse essere ritenuta nulla, invalida o inapplicabile da un tribunale competente, tale disposizione sarà considerata separabile dal resto del contratto e non influenzerà la validità e l'applicabilità delle restanti disposizioni."}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {t("terms-severability-replacement") ||
                      "Le parti si impegnano a sostituire la disposizione nulla con una disposizione valida che si avvicini il più possibile all'intento originale della disposizione dichiarata nulla."}
                  </p>
                </div>

                {/* Risoluzione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-termination-title") ||
                      "18. Risoluzione del Contratto"}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      {t("terms-termination-notice") ||
                        "Entrambe le parti possono risolvere il contratto con preavviso scritto di 30 giorni"}
                    </li>
                    <li>
                      {t("terms-termination-breach") ||
                        "Risoluzione immediata in caso di inadempimento grave non sanato entro 15 giorni"}
                    </li>
                    <li>
                      {t("terms-termination-payment") ||
                        "In caso di risoluzione, il Cliente deve pagare per il lavoro completato"}
                    </li>
                    <li>
                      {t("terms-termination-materials") ||
                        "Alla risoluzione, restituiremo tutti i materiali del Cliente"}
                    </li>
                  </ul>
                </div>

                {/* Modifiche */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-changes-title") || "19. Modifiche ai Termini"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-changes-content") ||
                      "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina e entreranno in vigore immediatamente. I progetti in corso rimangono regolati dai termini vigenti al momento della firma del contratto."}
                  </p>
                </div>

                {/* Legge applicabile */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-law-title") ||
                      "20. Legge Applicabile e Foro Competente"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-law-content") ||
                      "Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente esclusivamente il Foro di Milano. Prima di ricorrere alle vie legali, le parti si impegnano a tentare una risoluzione amichevole della controversia."}
                  </p>
                </div>

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-contact-title") || "21. Contatti"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-contact-content") ||
                      "Per qualsiasi domanda riguardante questi Termini di Servizio, puoi contattarci:"}
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
