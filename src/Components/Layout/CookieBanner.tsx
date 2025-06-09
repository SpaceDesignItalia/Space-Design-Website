import { Button, Link } from "@heroui/react";
import { useCookieConsent } from "../../context/CookieConsentContext";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const { cookiesAccepted, acceptAllCookies, rejectAllCookies } = useCookieConsent();
  const { language } = useLanguage();

  if (cookiesAccepted) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      >
        <motion.div 
          className="pointer-events-auto ml-auto max-w-xl rounded-large border border-divider bg-white px-6 py-4 shadow-small"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-small font-normal text-default-700">
            {language === 'it' ? (
              <>
                Utilizziamo i cookie sul nostro sito web per offrirti l'esperienza più pertinente ricordando le tue preferenze e le visite ripetute. Cliccando su&nbsp;
                <b className="font-semibold">&quot;Accetta tutti&quot;</b>, acconsenti all'uso di TUTTI i cookie. Puoi anche&nbsp;
                <b className="font-semibold">&quot;Rifiuta tutti&quot;</b> per non accettare i cookie non essenziali. Per maggiori informazioni, leggi la nostra{" "}
                <Link href={`/${language}/cookies`} size="sm" underline="hover">
                  Cookie Policy
                </Link>
                .
              </>
            ) : (
              <>
                We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking&nbsp;
                <b className="font-semibold">&quot;Accept All&quot;</b>, you consent to the use of ALL cookies. You can also&nbsp;
                <b className="font-semibold">&quot;Reject All&quot;</b> to decline non-essential cookies. For more information, please read our{" "}
                <Link href={`/${language}/cookies`} size="sm" underline="hover">
                  Cookie Policy
                </Link>
                .
              </>
            )}
          </p>
          <div className="mt-4 flex items-center gap-x-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                className="px-4 font-medium"
                radius="lg"
                style={{
                  border: "solid 2px transparent",
                  backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
                onPress={acceptAllCookies}
              >
                {language === 'it' ? 'Accetta tutti' : 'Accept All'}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="font-medium" 
                radius="lg" 
                variant="light"
                onPress={rejectAllCookies}
              >
                {language === 'it' ? 'Rifiuta tutti' : 'Reject All'}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
