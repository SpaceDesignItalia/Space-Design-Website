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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base/7 font-semibold text-white tracking-wider uppercase">
            {t("mobile-stack-advantages") || "I nostri vantaggi"}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("mobile-stack-headline") ||
              "Perché scegliere Space Design Italia"}
          </p>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            {t("mobile-stack-subtitle") ||
              "Sviluppiamo app mobile innovative che fanno crescere il tuo business. Design user-centered, tecnologie all'avanguardia e supporto costante per garantire il successo della tua app."}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="material-symbols:rocket-launch"
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t("mobile-advantage-growth") || "Crescita del business"}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {t("mobile-advantage-growth-desc") ||
                    "Le nostre app aiutano la tua azienda a raggiungere nuovi clienti e mercati."}
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="material-symbols:group"
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t("mobile-advantage-clients") || "Clienti sempre connessi"}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {t("mobile-advantage-clients-desc") ||
                    "Resta in contatto diretto con i tuoi utenti grazie a notifiche e funzionalità smart."}
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="material-symbols:security"
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t("mobile-advantage-security") || "Sicurezza avanzata"}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {t("mobile-advantage-security-desc") ||
                    "Proteggiamo i dati dei tuoi utenti con protocolli di sicurezza di ultima generazione."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiche essenziali */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:devices"
                className="text-white w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">
                Cross-Platform
              </div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-crossplatform-desc") ||
                "Sviluppo multipiattaforma"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:code"
                className="text-white w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">10+</div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-technologies") || "Tecnologie utilizzate"}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon
                icon="material-symbols:support-agent"
                className="text-white w-6 h-6 mr-2"
              />
              <div className="text-3xl font-bold text-white">24/7</div>
            </div>
            <div className="text-white/80 text-sm">
              {t("mobile-stat-support") || "Supporto dedicato"}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            color="default"
            variant="solid"
            onPress={handleContactClick}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            endContent={
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            }
          >
            {t("mobile-cta") || "Richiedi Preventivo"}
          </Button>
        </div>
      </div>
    </div>
  );
}
