'use client'

import emailjs from '@emailjs/browser'
import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@heroui/react"
import { useRef, useState } from 'react'
export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null)
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
  const [objects, setObjects] = useState([])
  const [budgets, setBudgets] = useState([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (name: string, value: string) => {
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    try {
      const response = await emailjs.sendForm(
        String(process.env.NEXT_PUBLIC_SERVICE_ID), // Service ID
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID), // Template ID
        form.current, // Reference to the form
        {
          publicKey: String(process.env.NEXT_PUBLIC_PUBLIC_KEY), // Public Key
        },
      )

      if (response.status === 200) {
        window.location.href = '/message-sent'
      }
      console.log('Success:', response)
      // Gestire la risposta positiva, come un messaggio di conferma
    } catch (error) {
      console.error('Error:', error)
      // Gestire gli errori (ad esempio, visualizzando un messaggio di errore)
    }
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
        ref={form}
        onSubmit={handleFormSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
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

          {/* Azienda */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Azienda
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
                onChange={(key) => handleInputChange('object', String(key))}
                isRequired
                placeholder="Seleziona l'oggetto"
              >
                {/*
                {objects.map((obj) => (
                  <SelectItem key={obj.IdObject}>{obj.Name}</SelectItem>
                ))}
                */}
                <SelectItem key={'Consulenza'}>Consulenza</SelectItem>
                <SelectItem key={'Sito web'}>Sito web</SelectItem>
                <SelectItem key={'Software Personalizzato'}>
                  Software Personalizzato
                </SelectItem>
                <SelectItem key="app-mobile">App Mobile</SelectItem>
                <SelectItem key="seo">SEO</SelectItem>
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
                onChange={(key) => handleInputChange('budget', String(key))}
                isRequired
                placeholder="Seleziona budget"
              >
                {/*
                {budgets.map((budget) => (
                  <SelectItem key={budget.IdBudget}>{budget.Range}</SelectItem>
                ))}
              
              */}

                <SelectItem key={'0-5000'}>€0 - €5000</SelectItem>
                <SelectItem key={'5000-10000'}>€5000 - €10000</SelectItem>
                <SelectItem key={'10000-20000'}>€10000 - €20000</SelectItem>
                <SelectItem key={'20000-30000'}>€20000 - €30000</SelectItem>
                <SelectItem key={'30000 e oltre'}>€30000 e oltre</SelectItem>
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
            <Switch
              checked={agreed}
              onValueChange={setAgreed}
              value={String(agreed)}
              size="sm"
              id="agreed"
              name="agreed"
              required
            />
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

        <div className="mt-8">
          <Button
            type="submit"
            isDisabled={!isFormValid()}
            color="primary"
            radius="full"
            fullWidth
          >
            Contattaci
          </Button>
        </div>
      </form>
    </div>
  )
}
