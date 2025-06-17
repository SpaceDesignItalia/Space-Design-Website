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
          t("terms-meta-description") ||
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

                {/* Pagamenti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-payment-title") || "6. Pagamenti e Fatturazione"}
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

                {/* Proprietà intellettuale */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-ip-title") || "7. Proprietà Intellettuale"}
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

                {/* Garanzie */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-warranties-title") || "8. Garanzie e Limitazioni"}
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
                      "9. Limitazione di Responsabilità"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-liability-content") ||
                      "La nostra responsabilità è limitata all'importo pagato per il progetto specifico. Non siamo responsabili per danni indiretti, perdite di profitto, interruzioni di attività o altri danni consequenziali. Il Cliente si assume la responsabilità dell'uso del software e della conformità alle normative applicabili."}
                  </p>
                </div>

                {/* Riservatezza */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-confidentiality-title") || "10. Riservatezza"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-confidentiality-content") ||
                      "Ci impegniamo a mantenere riservate tutte le informazioni confidenziali del Cliente. Tuttavia, possiamo utilizzare il progetto come riferimento nel nostro portfolio, salvo diverso accordo scritto. Le informazioni tecniche generali apprese durante il progetto possono essere utilizzate per migliorare i nostri servizi."}
                  </p>
                </div>

                {/* Risoluzione */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-termination-title") ||
                      "11. Risoluzione del Contratto"}
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
                    {t("terms-changes-title") || "12. Modifiche ai Termini"}
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
                      "13. Legge Applicabile e Foro Competente"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("terms-law-content") ||
                      "Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente esclusivamente il Foro di Milano. Prima di ricorrere alle vie legali, le parti si impegnano a tentare una risoluzione amichevole della controversia."}
                  </p>
                </div>

                {/* Contatti */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("terms-contact-title") || "14. Contatti"}
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
                      P.IVA: 07420400488
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Email: info@spacedesignitalia.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sito web: www.spacedesignitalia.com
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
