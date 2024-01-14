import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "E-commerce",
    description:
      "Attraverso una combinazione di design intuitivo, funzionalità avanzate e sicurezza robusta, ci impegniamo a creare app mobile di e-commerce che offrono esperienze d'acquisto senza sforzo.",
  },
  {
    name: "Custom",
    description:
      "Il nostro team di sviluppatori si impegna a creare soluzioni customizzate che si adattano perfettamente alle vostre esigenze aziendali.",
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
              Indipendentemente dalle vostre esigenze, il nostro team è pronto a
              guidarvi attraverso ogni fase del processo di sviluppo dell'app
              mobile.
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
