import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Error404() {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Pagina non trovata
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Siamo spiacenti, ma la pagina che stai cercando non è disponibile al
            momento. Potrebbe essere stata rimossa, rinominata o potresti aver
            digitato un URL errato.
          </p>
          <Button as={Link} href="/" color="primary" size="lg" radius="sm">
            Torna alla home
          </Button>
        </div>
      </div>
    </section>
  );
}
