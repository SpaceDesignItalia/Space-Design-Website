import { useLanguage } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function ServiceStack() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/${language}/contact`);
  };

  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base/7 font-semibold text-white tracking-wider uppercase">
            {t("mobile-stack-advantages") || "I nostri vantaggi"}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("mobile-stack-headline") ||
              "Perché scegliere Space Design Italia per la tua app mobile"}
          </p>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            {t("mobile-stack-subtitle") ||
              "Sviluppiamo soluzioni su misura che fanno crescere il tuo business, con supporto costante e tecnologie all'avanguardia."}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8 text-white text-center flex flex-col items-center">
            <Icon
              icon="material-symbols:rocket-launch"
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              {t("mobile-advantage-growth") || "Crescita del business"}
            </h3>
            <p>
              {t("mobile-advantage-growth-desc") ||
                "Le nostre app aiutano la tua azienda a raggiungere nuovi clienti e mercati."}
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 text-white text-center flex flex-col items-center">
            <Icon icon="material-symbols:group" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {t("mobile-advantage-clients") || "Clienti sempre connessi"}
            </h3>
            <p>
              {t("mobile-advantage-clients-desc") ||
                "Resta in contatto diretto con i tuoi utenti grazie a notifiche e funzionalità smart."}
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 text-white text-center flex flex-col items-center">
            <Icon icon="material-symbols:security" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {t("mobile-advantage-security") || "Sicurezza avanzata"}
            </h3>
            <p>
              {t("mobile-advantage-security-desc") ||
                "Proteggiamo i dati dei tuoi utenti con protocolli di sicurezza di ultima generazione."}
            </p>
          </div>
        </div>

        {/* Sezione dettagli aggiuntivi */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t("mobile-approach-title") || "Il nostro approccio"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {t("mobile-approach-analysis") || "🎯 Analisi approfondita"}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t("mobile-approach-analysis-desc") ||
                    "Prima di iniziare lo sviluppo, analizziamo il tuo mercato, i tuoi competitor e le esigenze degli utenti per creare un'app che si distingua davvero."}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {t("mobile-approach-agile") || "🚀 Sviluppo agile"}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t("mobile-approach-agile-desc") ||
                    "Utilizziamo metodologie agili per garantire consegne rapide e la possibilità di apportare modifiche durante lo sviluppo."}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {t("mobile-approach-design") || "📱 Design user-centered"}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t("mobile-approach-design-desc") ||
                    "Ogni interfaccia è progettata pensando all'utente finale, con test di usabilità e ottimizzazioni continue per massimizzare l'engagement."}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {t("mobile-approach-support") || "🔧 Supporto post-lancio"}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t("mobile-approach-support-desc") ||
                    "Non ti lasciamo solo dopo il lancio: monitoriamo le performance, gestiamo gli aggiornamenti e ti aiutiamo a far crescere la tua app."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiche */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon
                icon="material-symbols:devices"
                className="text-white w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white whitespace-nowrap">
                Cross-Platform
              </div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-crossplatform-desc") ||
                "Sviluppo multipiattaforma"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon
                icon="material-symbols:code"
                className="text-gray-300 w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">10+</div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-technologies") || "Tecnologie utilizzate"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon
                icon="material-symbols:support-agent"
                className="text-gray-200 w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">24/7</div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-support") || "Supporto dedicato"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
