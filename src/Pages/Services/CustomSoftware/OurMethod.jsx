import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SearchIcon from "@mui/icons-material/Search";

const cards = [
  {
    name: "Design accattivanti",
    description:
      "Ogni software che realizziamo è concepito con un occhio attento al dettaglio estetico, combinando estetica moderna con funzionalità intuitiva.",
    icon: AutoFixHighIcon,
  },
  {
    name: "Eccellenza in ogni dettaglio",
    description:
      "L'attenzione ai dettagli è il nostro marchio di fabbrica. Ogni funzione, ogni interfaccia è progettata con l'obiettivo di offrire un'esperienza utente impeccabile.",
    icon: SearchIcon,
  },
  {
    name: "Team dedicato",
    description:
      "Dalla fase iniziale di pianificazione fino alla pubblicazione e oltre, avrete un team che si impegna a capire la vostra visione e a trasformarla in realtà.",
    icon: GroupsIcon,
  },
];

export default function WebsiteCards() {
  return (
    <div className="py-24 sm:py-32">
      <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 class="text-3xl font-bold sm:text-4xl">Perchè scegliere noi</h2>
          <p className="mt-6 text-lg leading-8">
            Con i nostri software personalizzati, non otterrete solo soluzioni
            digitali, ma un'esperienza su misura che lascerà un'impronta nella
            vostra operatività.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="text-left flex gap-x-4 rounded-xl bg-black/5 p-6 ring-1 ring-inset ring-black/10"
            >
              <card.icon
                className="text-primary h-7 w-5 flex-none"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-black">{card.name}</h3>
                <p className="mt-2 ">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
