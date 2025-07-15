import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/SEO";
import axios from "axios";

const API_BASE_URL = "https://api.spacedesign-italia.it:3000/API/v1";

interface FormData {
  name: string;
  surname: string;
  email: string;
  company: string;
  subject: string;
  budget: string;
  message: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  company?: string;
  subject?: string;
  budget?: string;
  message?: string;
  privacyAccepted?: string;
}

interface SubjectOption {
  id: string;
  name: string;
  label: string;
}

interface BudgetOption {
  id: string;
  name: string;
  label: string;
  min_value?: number;
  max_value?: number;
}

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Stile per le emoji Apple
  const appleEmojiStyle = {
    fontFamily:
      '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFeatureSettings: '"liga" off',
  };

  // Funzione per estrarre ID numerici dai valori dei select
  const extractNumericId = (value: string): number | null => {
    if (!value) return null;

    // Se il valore contiene già solo numeri, restituiscilo
    if (/^\d+$/.test(value)) {
      return parseInt(value, 10);
    }

    // Se il valore è nel formato "subject-0", "range-1", ecc.
    const match = value.match(/-(\d+)$/);
    if (match) {
      return parseInt(match[1], 10);
    }

    // Fallback: prova a convertire direttamente
    const numericValue = parseInt(value, 10);
    return isNaN(numericValue) ? null : numericValue;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    company: "",
    subject: "",
    budget: "",
    message: "",
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Stati per i dati fetchati dalle API
  const [subjectOptions, setSubjectOptions] = useState<SubjectOption[]>([]);
  const [budgetOptions, setBudgetOptions] = useState<BudgetOption[]>([]);
  const [isLoadingOptions, setIsLoadingOptions] = useState(true);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  // Gestione dello scroll quando si apre/chiude un select
  useEffect(() => {
    if (isSelectOpen) {
      // Previeni solo lo scroll automatico del browser, ma permetti lo scroll manuale
      const preventAutoScroll = (e: Event) => {
        // Permetti lo scroll manuale ma previeni quello automatico
        if (e.type === "scroll" && !e.isTrusted) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      // Aggiungi event listener per prevenire solo lo scroll automatico
      document.addEventListener("scroll", preventAutoScroll, {
        passive: false,
      });

      return () => {
        document.removeEventListener("scroll", preventAutoScroll);
      };
    }

    return () => {
      // Cleanup quando il componente si smonta
    };
  }, [isSelectOpen]);

  // Funzione per verificare se il form è completo
  const isFormComplete = () => {
    return (
      formData.name.trim() !== "" &&
      formData.surname.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.subject !== "" &&
      formData.budget !== "" &&
      formData.message.trim() !== "" &&
      formData.privacyAccepted
    );
  };

  // Fetch dei dati all'avvio del componente
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setIsLoadingOptions(true);

        // Fetch dei subject (objects)
        const subjectsResponse = await axios.get(
          API_BASE_URL + "/Lead/GET/GetObjects"
        );

        // Gestione più robusta dei dati subjects
        let subjectsData = subjectsResponse.data || [];
        if (Array.isArray(subjectsData)) {
          // Mappa i dati per assicurarsi che abbiano la struttura corretta
          const mappedSubjects = subjectsData.map((item, index) => {
            // Fallback names per subjects
            const fallbackSubjects = [
              "Consulenza",
              "Sito Web",
              "Software Personalizzato",
              "App Mobile",
              "Startup",
              "Altro",
            ];

            return {
              id: item.id || item.ID || item.object_id || `subject-${index}`,
              name:
                item.name ||
                item.NAME ||
                item.object_name ||
                item.label ||
                fallbackSubjects[index] ||
                `Servizio ${index + 1}`,
              label:
                item.label ||
                item.LABEL ||
                item.description ||
                item.name ||
                item.NAME ||
                fallbackSubjects[index] ||
                `Servizio ${index + 1}`,
            };
          });
          setSubjectOptions(mappedSubjects);
        }

        // Fetch dei budget (ranges)
        const budgetsResponse = await axios.get(
          API_BASE_URL + "/Lead/GET/GetRanges"
        );

        // Gestione più robusta dei dati ranges
        let rangesData = budgetsResponse.data || [];
        if (Array.isArray(rangesData)) {
          // Mappa i dati per assicurarsi che abbiano la struttura corretta
          const mappedRanges = rangesData.map((item, index) => {
            // Fallback names per ranges
            const fallbackRanges = [
              "€0 - €5.000",
              "€5.000 - €10.000",
              "€10.000 - €20.000",
              "€20.000 - €30.000",
              "€30.000 - €50.000",
              "€50.000+",
            ];

            return {
              id: item.id || item.ID || item.range_id || `range-${index}`,
              name:
                item.name ||
                item.NAME ||
                item.range_name ||
                item.label ||
                fallbackRanges[index] ||
                `Budget ${index + 1}`,
              label:
                item.label ||
                item.LABEL ||
                item.description ||
                item.display_name ||
                item.name ||
                item.NAME ||
                fallbackRanges[index] ||
                `Budget ${index + 1}`,
              min_value: item.min_value || item.MIN_VALUE || item.min,
              max_value: item.max_value || item.MAX_VALUE || item.max,
            };
          });
          setBudgetOptions(mappedRanges);
        }
      } catch (error) {
        console.error("Errore nel caricamento delle opzioni:", error);
      } finally {
        setIsLoadingOptions(false);
      }
    };

    fetchOptions();
  }, [t]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user selects
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      privacyAccepted: checked,
    }));

    // Clear error when user toggles
    if (errors.privacyAccepted) {
      setErrors((prev) => ({
        ...prev,
        privacyAccepted: undefined,
      }));
    }
  };

  // Handler per prevenire lo scroll automatico quando si apre un select
  const handleSelectOpen = (isOpen: boolean) => {
    setIsSelectOpen(isOpen);

    if (isOpen) {
      // Previeni lo scroll automatico del browser solo se necessario
      const currentScrollY = window.scrollY;
      setTimeout(() => {
        if (Math.abs(window.scrollY - currentScrollY) > 10) {
          window.scrollTo(0, currentScrollY);
        }
      }, 10);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact-name-required");
    }

    if (!formData.surname.trim()) {
      newErrors.surname = t("contact-surname-required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact-email-required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact-email-invalid");
    }

    if (!formData.subject) {
      newErrors.subject = t("contact-subject-required");
    }

    if (!formData.budget) {
      newErrors.budget = t("contact-budget-required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact-message-required");
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = t("contact-privacy-required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparo il payload per l'API
      const payload = {
        firstName: formData.name.trim(),
        lastName: formData.surname.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        object: extractNumericId(formData.subject),
        budget: extractNumericId(formData.budget),
        message: formData.message.trim(),
        privacy_accepted: formData.privacyAccepted,
        language: language,
      };

      // Invio del form tramite API con headers espliciti
      const response = await axios.post(
        API_BASE_URL + "/Lead/POST/ContactFormSubmit",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 30000,
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Reset form after successful submission
        setFormData({
          name: "",
          surname: "",
          email: "",
          company: "",
          subject: "",
          budget: "",
          message: "",
          privacyAccepted: false,
        });

        // Mostra direttamente il messaggio di reindirizzamento
        setIsRedirecting(true);

        // Countdown da 3 a 0
        const interval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              navigate(`/${language}`);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // Fallback per sicurezza
        setTimeout(() => {
          clearInterval(interval);
          navigate(`/${language}`);
        }, 3100);
      }
    } catch (error) {
      // Type assertion per gestire il tipo unknown di error
      const axiosError = error as any;

      // Messaggio di errore più specifico
      let errorMessage = t("contact-error");
      if (axiosError.response?.status === 500) {
        errorMessage = "Errore del server. Riprova più tardi.";
      } else if (axiosError.response?.status === 400) {
        errorMessage = "Dati non validi. Controlla i campi del form.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <SEO
        title={`${t("contact-title")} - Space Design Italia`}
        description={t("contact-subtitle")}
        keywords="contatti space design, consulenza software, preventivo sviluppo software, contatto sviluppatori"
        url={`/${language}/contact`}
        alternateUrls={{
          it: "/it/contact",
          en: "/en/contact",
          "x-default": "/contact",
        }}
      />

      <div className="relative min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section compatto */}
        <div className="relative pt-[70px] pb-8 px-8 mt-8">
          <div className="container relative mx-auto px-8">
            <motion.div
              className="text-center"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-200">
                  {t("contact-title")}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t("contact-subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section - layout 1/3 - 2/3 */}
        <div className="relative py-12">
          <div className="container mx-auto px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Info Sezione sinistra - 1/3 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:sticky lg:top-24 lg:self-start"
                >
                  {/* Contact Info Card con badge sopra */}
                  <div className="relative">
                    {/* Badge di stato sopra la card */}
                    <div className="absolute -top-3 left-6 z-10">
                      <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                        <div className="relative w-4 h-4 flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-2 h-2 bg-green-400 rounded-full"
                          />
                          <motion.div
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute w-2 h-2 bg-green-400 rounded-full"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                          {t("contact-available-now") || "Siamo disponibili"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-primary rounded-2xl p-6 text-white pt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon icon="solar:phone-bold" className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold">
                          {t("contact-info-title")}
                        </h2>
                      </div>

                      <p className="text-white/90 mb-6 text-sm">
                        {t("contact-info-subtitle")}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-base" style={appleEmojiStyle}>
                            💬
                          </span>
                          <span className="text-xs">
                            {t("contact-info-free")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base" style={appleEmojiStyle}>
                            📋
                          </span>
                          <span className="text-xs">
                            {t("contact-info-quote")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base" style={appleEmojiStyle}>
                            🤝
                          </span>
                          <span className="text-xs">
                            {t("contact-info-support")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base" style={appleEmojiStyle}>
                            ⚡
                          </span>
                          <span className="text-xs">
                            {t("contact-response-time") || "Risposta entro 24h"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Form Sezione destra - 2/3 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                      {t("hero-cta-start")}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Surname Row */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=""
                            label={t("contact-name")}
                            isRequired
                            isInvalid={!!errors.name}
                            errorMessage={errors.name}
                            variant="bordered"
                            radius="lg"
                            size="md"
                            classNames={{
                              input: "text-gray-900 placeholder:text-gray-500",
                              inputWrapper:
                                "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                            }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Input
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                            placeholder=""
                            label={t("contact-surname")}
                            isRequired
                            isInvalid={!!errors.surname}
                            errorMessage={errors.surname}
                            variant="bordered"
                            radius="lg"
                            size="md"
                            classNames={{
                              input: "text-gray-900 placeholder:text-gray-500",
                              inputWrapper:
                                "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                            }}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder=""
                          label={t("contact-email")}
                          isRequired
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                          variant="bordered"
                          radius="lg"
                          size="md"
                          classNames={{
                            input: "text-gray-900 placeholder:text-gray-500",
                            inputWrapper:
                              "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                          }}
                        />
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder=""
                          label={t("contact-company")}
                          variant="bordered"
                          radius="lg"
                          size="md"
                          classNames={{
                            input: "text-gray-900 placeholder:text-gray-500",
                            inputWrapper:
                              "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                          }}
                        />
                      </div>

                      {/* Subject and Budget Row */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Select
                            placeholder={t("contact-subject-placeholder")}
                            selectedKeys={
                              formData.subject ? [formData.subject] : []
                            }
                            onSelectionChange={(keys) => {
                              const selectedKey = Array.from(keys)[0] as string;
                              handleSelectChange("subject", selectedKey || "");
                            }}
                            onOpenChange={handleSelectOpen}
                            isInvalid={!!errors.subject}
                            errorMessage={errors.subject}
                            variant="bordered"
                            radius="lg"
                            size="md"
                            isLoading={isLoadingOptions}
                            label={t("contact-subject")}
                            isRequired
                            disableAnimation={false}
                            classNames={{
                              trigger:
                                "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                              value: "text-gray-900",
                              popoverContent:
                                "bg-white dark:bg-gray-800 z-[9999] max-h-60 overflow-y-auto",
                            }}
                          >
                            {subjectOptions.map((option) => {
                              return (
                                <SelectItem key={option.id}>
                                  {option.label || option.name}
                                </SelectItem>
                              );
                            })}
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Select
                            placeholder={t("contact-budget-placeholder")}
                            selectedKeys={
                              formData.budget ? [formData.budget] : []
                            }
                            onSelectionChange={(keys) => {
                              const selectedKey = Array.from(keys)[0] as string;
                              handleSelectChange("budget", selectedKey || "");
                            }}
                            onOpenChange={handleSelectOpen}
                            isInvalid={!!errors.budget}
                            errorMessage={errors.budget}
                            variant="bordered"
                            radius="lg"
                            size="md"
                            isLoading={isLoadingOptions}
                            label={t("contact-budget")}
                            isRequired
                            disableAnimation={false}
                            classNames={{
                              trigger:
                                "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                              value: "text-gray-900",
                              popoverContent:
                                "bg-white dark:bg-gray-800 z-[9999] max-h-60 overflow-y-auto",
                            }}
                          >
                            {budgetOptions.map((option) => {
                              return (
                                <SelectItem key={option.id}>
                                  {option.label || option.name}
                                </SelectItem>
                              );
                            })}
                          </Select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder=""
                          label={t("contact-message")}
                          isRequired
                          isInvalid={!!errors.message}
                          errorMessage={errors.message}
                          variant="bordered"
                          radius="lg"
                          size="md"
                          minRows={4}
                          classNames={{
                            input:
                              "text-gray-900 resize-y placeholder:text-gray-500",
                            inputWrapper:
                              "bg-white/10 border-gray-200 data-[hover=true]:border-gray-400",
                          }}
                        />
                      </div>

                      {/* Privacy Switch */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <Switch
                            isSelected={formData.privacyAccepted}
                            onValueChange={handleSwitchChange}
                            color="default"
                            size="sm"
                            aria-label={t("contact-privacy")}
                            aria-required="true"
                            classNames={{
                              wrapper: "group-data-[selected=true]:bg-black",
                              thumb: "group-data-[selected=true]:bg-white",
                            }}
                          />
                          <span className="text-sm text-gray-900/80">
                            {t("contact-privacy")}{" "}
                            <a
                              href={`/${language}/privacy-policy`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-900 underline hover:no-underline font-medium"
                            >
                              {t("contact-privacy-policy")}
                            </a>
                          </span>
                        </div>
                        <AnimatePresence>
                          {errors.privacyAccepted && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-sm text-red-300"
                            >
                              {errors.privacyAccepted}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Button
                            type="submit"
                            isDisabled={
                              isSubmitting ||
                              isLoadingOptions ||
                              !isFormComplete()
                            }
                            isLoading={isSubmitting}
                            className={`group relative h-12 w-full overflow-hidden px-6 py-3 text-base font-medium transition-all duration-300 ${
                              isFormComplete() &&
                              !isSubmitting &&
                              !isLoadingOptions
                                ? "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                            radius="full"
                            size="lg"
                            aria-label={
                              isSubmitting
                                ? t("contact-submitting")
                                : t("contact-submit")
                            }
                            endContent={
                              !isSubmitting &&
                              !isLoadingOptions &&
                              isFormComplete() && (
                                <Icon
                                  icon="solar:arrow-right-linear"
                                  className="transition-transform duration-300 group-hover:translate-x-1"
                                  width={20}
                                  aria-hidden="true"
                                />
                              )
                            }
                          >
                            {isSubmitting
                              ? t("contact-submitting")
                              : t("contact-submit")}
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Redirecting notification */}
        <AnimatePresence>
          {isRedirecting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="relative rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-lg dark:bg-gray-800/95 max-w-md mx-4"
              >
                <div className="text-center relative z-10">
                  <div className="mx-auto mb-4 h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-white"
                      width={32}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    🎉 Grazie per averci contattato!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reindirizzamento alla home in{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {countdown}
                    </span>{" "}
                    secondi
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Contact;
