import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-20 justify-center items-center py-24">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-extrabold">
          Informativa sulla privacy di Space Design
        </h1>
        <p className="text-lg">
          Benvenuti nell'Informativa sulla Privacy di Space Design. La presente
          informativa spiega come raccogliamo, utilizziamo e proteggiamo le
          informazioni personali che ci fornite quando ci contattate per
          richieste di preventivi, consulenze o altri servizi.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Informazioni raccolte</h1>
        <p className="text-lg">
          Raccogliamo le seguenti categorie di informazioni personali:
        </p>
        <ul className="list-decimal list-inside">
          <li>
            <b>Informazioni di contatto</b>: Ciò può includere il vostro nome,
            indirizzo e-mail, numero di telefono e altre informazioni di
            contatto simili.
          </li>
          <li>
            <b>Dettagli del servizio richiesto</b>: Qualsiasi informazione
            specifica sul servizio o la consulenza richiesta, compresi dettagli
            aggiuntivi forniti nella richiesta.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Come utilizziamo le informazioni</h1>
        <p className="text-lg">
          Utilizziamo le informazioni personali fornite per le seguenti
          finalità:
        </p>
        <ul className="list-decimal list-inside">
          <li>
            <b>Elaborazione delle richieste</b>: Utilizziamo le informazioni per
            rispondere alle richieste di preventivi, consulenze o altri servizi
            che ci inviate.
          </li>
          <li>
            <b>Comunicazioni</b>: Possiamo utilizzare i vostri dati di contatto
            per comunicare con voi riguardo alle vostre richieste e per fornirvi
            informazioni aggiuntive sui nostri servizi.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Condivisione delle informazioni</h1>
        <p className="text-lg">
          Non condivideremo le vostre informazioni personali con terze parti al
          di fuori di Space Design senza il vostro consenso, a meno che ciò sia
          richiesto dalla legge.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Sicurezza delle informazioni</h1>
        <p className="text-lg">
          Adottiamo misure di sicurezza adeguate per proteggere le vostre
          informazioni personali da accessi non autorizzati o utilizzi impropri.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Diritti dell'utente</h1>
        <p className="text-lg">
          Avete il diritto di richiedere l'accesso, la correzione o la
          cancellazione delle vostre informazioni personali in nostro possesso.
          Potete farlo contattandoci tramite le informazioni di contatto fornite
          di seguito.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">
          Modifiche a questa Informativa sulla Privacy
        </h1>
        <p className="text-lg">
          Ci riserviamo il diritto di apportare modifiche a questa Informativa
          sulla Privacy. Ogni modifica sarà pubblicata su questa pagina con una
          nuova data di entrata in vigore.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Contattaci</h1>
        <p className="text-lg">
          Se avete domande o preoccupazioni riguardo a questa Informativa sulla
          Privacy o alle vostre informazioni personali, potete contattarci
          all'indirizzo e-mail: <b>clienti@spacedesign-italia.it</b>
        </p>
      </div>
    </div>
  );
}
