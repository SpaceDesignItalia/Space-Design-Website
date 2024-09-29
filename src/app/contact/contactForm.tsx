'use client'

import {
  Button,
  Input,
  Link,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from '@nextui-org/react'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    object: '',
    message: '',
    budget: '',
  })

  const [agreed, setAgreed] = useState(false)

  const handleInputChange = (name: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email.includes('@') &&
      formData.object &&
      formData.message &&
      formData.budget &&
      agreed
    )
  }
  return (
    <div className="isolate rounded-lg bg-opacity-90 px-6 py-24 shadow-lg sm:py-32 lg:px-8">
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
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="http://localhost:3000" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Nome */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Input
                variant="bordered"
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                isRequired
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Inserisci il tuo nome"
              />
            </div>
          </div>

          {/* Cognome */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Cognome <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Input
                variant="bordered"
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                isRequired
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Inserisci il tuo cognome"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Input
                variant="bordered"
                id="email"
                name="email"
                type="email"
                isRequired
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Inserisci la tua email"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="object"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Azienda{' '}
            </label>
            <div className="mt-2.5">
              <Input
                variant="bordered"
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Inserisci il nome dell'azienda"
              />
            </div>
          </div>

          {/* Oggetto */}
          <div className="sm:col-span-2">
            <label
              htmlFor="object"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Oggetto <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Select
                variant="bordered"
                id="object"
                name="object"
                value={formData.object}
                onChange={(key) => handleInputChange('object', key)}
                isRequired
                placeholder="Seleziona l'oggetto"
              >
                <SelectItem key="consulenza">Consulenza</SelectItem>
                <SelectItem key="sito-web">Sito Web</SelectItem>
                <SelectItem key="software-personalizzato">
                  Software Personalizzato
                </SelectItem>
                <SelectItem key="app-mobile">App Mobile</SelectItem>
                <SelectItem key="seo">Startup</SelectItem>
                <SelectItem key="altro">Altro</SelectItem>
              </Select>
            </div>
          </div>

          {/* Budget */}
          <div className="sm:col-span-2">
            <label
              htmlFor="budget"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Budget <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Select
                variant="bordered"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={(key) => handleInputChange('budget', key)}
                isRequired
                placeholder="Seleziona budget"
              >
                <SelectItem key="0-5000">€0 - €5.000</SelectItem>
                <SelectItem key="5000-10000">€5.000 - €10.000</SelectItem>
                <SelectItem key="10000-20000">€10.000 - €20.000</SelectItem>
                <SelectItem key="20000-30000">€20.000 - €30.000</SelectItem>
                <SelectItem key="30000-oltre">€30.000 e oltre</SelectItem>
              </Select>
            </div>
          </div>

          {/* Messaggio */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Messaggio <span className="text-primary">*</span>
            </label>
            <div className="mt-2.5">
              <Textarea
                variant="bordered"
                id="message"
                name="message"
                value={formData.message}
                isRequired
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Inserisci il tuo messaggio"
              />
            </div>
          </div>

          {/* Accordo */}
          <div className="flex items-center gap-x-4 sm:col-span-2">
            <Switch checked={agreed} onValueChange={setAgreed} size="sm" />
            <label
              htmlFor="privacy"
              className="block text-sm leading-6 text-gray-900"
            >
              <span className="text-primary">*</span>
              Dichiaro di aver preso visione della{' '}
              <a
                href="/cookie-and-privacy-policy"
                className="text-red-600 underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>

        {/* Pulsante Invio */}
        <div className="mt-10">
          <Button
            type="submit"
            color="primary"
            radius="full"
            isDisabled={!isFormValid()}
            fullWidth
            href="/contact"
            as={Link}
          >
            Contattaci
          </Button>
        </div>
      </form>
    </div>
  )
}
