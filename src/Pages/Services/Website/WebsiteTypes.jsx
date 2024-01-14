import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "E-commerce",
    description:
      "Dai una spinta al tuo negozio online con una vetrina virtuale accattivante, un processo di checkout fluido e soluzioni di pagamento sicure. La tua boutique online è pronta a offrire un'esperienza di acquisto impeccabile.",
  },
  {
    name: "Aziendali",
    description:
      "Creiamo siti web che fungono da spazio espositivo digitale, mettendo in risalto la tua arte, fotografia o progetti professionali. Con un design personalizzato e una navigazione intuitiva, sarà la tua migliore presentazione digitale.",
  },
  {
    name: "Blog",
    description:
      "Concentrati sulla tua voce e condividi la tua passione con un blog che cattura l'attenzione. Creiamo siti web di blog che offrono una piattaforma robusta per esprimere idee, connettersi con il tuo pubblico e costruire una community.",
  },
];

export default function WebsiteTypes() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Servizi offerti
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Offriamo un'ampia gamma di siti web progettati per far crescere la
              tua presenza digitale in modo dinamico e coinvolgente.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-1 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
