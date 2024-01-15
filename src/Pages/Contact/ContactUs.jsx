import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function ContactUs() {
  const object = [
    { id: 1, name: "Consulenza" },
    { id: 2, name: "Sito Web" },
    { id: 3, name: "Software Personalizzato" },
    { id: 4, name: "App Mobile" },
    { id: 5, name: "Altro" },
  ];

  const [service, setService] = useState();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0000] to-[#ff0000] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contattaci
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Grazie per aver scelto di contattare Space Design. Siamo qui per
          rispondere alle tue domande e fornirti l'assistenza di cui hai
          bisogno. Compila il modulo sottostante e ti risponderemo al più
          presto. La tua opinione è importante per noi.
        </p>
      </div>
      <form
        action="https://formsubmit.co/clienti@spacedesign-italia.it"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Input
              type="text"
              label="Nome"
              name="nome"
              variant="faded"
              isRequired
            />
          </div>
          <div>
            <Input
              type="text"
              label="Cognome"
              name="cognome"
              variant="faded"
              isRequired
            />
          </div>

          <div className="sm:col-span-2">
            <Input
              type="email"
              label="Email"
              name="email"
              variant="faded"
              isRequired
            />
          </div>

          <div className="sm:col-span-2">
            <Select
              label="Oggetto"
              variant="faded"
              fullWidth
              name="oggetto"
              isRequired
            >
              {object.map((service) => (
                <SelectItem key={service.id} value={service.name}>
                  {service.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Textarea
              label="Messaggio"
              variant="faded"
              name="messaggio"
              isRequired
            ></Textarea>
          </div>
          <div className="sm:col-span-2">
            <Checkbox
              radius="sm"
              isSelected={isSelected}
              onValueChange={setIsSelected}
              fullWidth
            >
              Dichiaro di aver preso visione della{" "}
              <a
                href="/privacy_policy"
                className="text-primary hover:underline"
              >
                privacy policy
              </a>
              *
            </Checkbox>
          </div>
        </div>
        <div className="mt-10">
          <Button
            color="primary"
            radius="sm"
            isDisabled={!isSelected}
            fullWidth
            type="submit"
          >
            Contattaci
          </Button>
        </div>
      </form>

      <div className="flex flex-row justify-center mt-20">
        <Card className="w-full lg:w-1/2 xl:w-1/4 py-5" radius="sm">
          <CardBody className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-xl font-bold mb-4">Fissa un appuntamento</h2>
            <CalendarTodayIcon className="text-primary" fontSize="large" />
            <Button
              as={Link}
              target="blank"
              href="https://calendly.com/spacedesignitalia/30min"
              color="primary"
              radius="sm"
            >
              Fissa un appuntamento
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
