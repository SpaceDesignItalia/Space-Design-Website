import React from "react";
import { Button } from "@nextui-org/button";
export default function GetInTouch() {
  return (
    <div className="bg-white mx-auto px-5">
      <div className="flex flex-col lg:flex-row justify-center items-center sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left w-full lg:w-1/2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Contattaci oggi per dare vita alle tue idee!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Space Design è più di un'azienda di software. Siamo il tuo partner
            nell'esplorare le infinite opportunità del mondo digitale. Siamo la
            fiamma che accende la tua creatività e la tecnologia che la
            trasforma in realtà. Siamo il futuro digitale e siamo qui per
            guidarti in questo viaggio.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button color="primary" size="lg" radius="sm" className="w-full">
              Contattaci
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-16 h-80 lg:mt-8">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  );
}
