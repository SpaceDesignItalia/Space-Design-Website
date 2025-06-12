import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

type ServiceItem = {
  name: string;
  href: string;
  icon: string;
  descriptionKey: string;
};

type ServiceCategory = {
  icon: string;
  descriptionKey: string;
  items: ServiceItem[];
};

type Services = {
  [key: string]: ServiceCategory;
};

const services: Services = {
  "Software Development": {
    icon: "material-symbols:code",
    descriptionKey: "software-development-desc",
    items: [
      {
        name: "mobile-apps",
        href: "/services/mobile-development",
        icon: "bi:phone",
        descriptionKey: "mobile-apps-desc",
      },
      {
        name: "websites",
        href: "/services/web-development",
        icon: "mdi:web",
        descriptionKey: "websites-desc",
      },
      {
        name: "custom-software",
        href: "/services/custom-software",
        icon: "clarity:design-line",
        descriptionKey: "custom-software-desc",
      },
      {
        name: "startup-mvp",
        href: "/services/startup-mvp",
        icon: "pajamas:rocket-launch",
        descriptionKey: "startup-mvp-desc",
      },
      {
        name: "ai-software",
        href: "/services/ai-software",
        icon: "streamline:artificial-intelligence-spark-remix",
        descriptionKey: "ai-software-desc",
      },
    ],
  },
  "System Integration": {
    icon: "carbon:cloud-service-management",
    descriptionKey: "system-integration-desc",
    items: [
      {
        name: "cloud-integration",
        href: "/services/cloud-integration",
        icon: "material-symbols:cloud-outline",
        descriptionKey: "cloud-integration-desc",
      },
      {
        name: "api-development",
        href: "/services/api-development",
        icon: "streamline-ultimate:coding-apps-website-web-dev-api-cloud",
        descriptionKey: "api-development-desc",
      },
      {
        name: "infrastructure-management",
        href: "/services/infrastructure",
        icon: "tabler:server-cog",
        descriptionKey: "infrastructure-management-desc",
      },
      {
        name: "devops-ci-cd",
        href: "/services/devops",
        icon: "icon-park-outline:cycle-arrow",
        descriptionKey: "devops-ci-cd-desc",
      },
    ],
  },
};

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(services)[0]
  );

  const navLinks = [
    { name: t("about"), href: `/${language}/about` },
    { name: t("contact"), href: `/${language}/contact` },
  ];

  const servicesWithLang = Object.entries(services).reduce(
    (acc, [category, data]) => {
      return {
        ...acc,
        [category]: {
          ...data,
          items: data.items.map((item) => ({
            ...item,
            href: `/${language}${item.href}`,
          })),
        },
      };
    },
    {} as typeof services
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-[100] w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/90 shadow-sm dark:border-gray-800 dark:bg-background/90"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label={t("main-navigation")}
    >
      <div className="container mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          to={`/${language}`}
          className="text-xl font-bold text-black dark:text-white flex items-center"
          aria-label={t("home")}
        >
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src="/logo.png"
              alt="Space Design Italia Logo"
              className="h-20 w-auto"
              onError={(e) => {
                console.error(
                  "Logo failed to load, switching to text fallback"
                );
                const img = e.currentTarget;
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) {
                  img.style.display = "none";
                  fallback.style.display = "block";
                }
              }}
              onLoad={() => {
                console.log("Logo loaded successfully");
              }}
            />
            <span
              className="hidden text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300"
              style={{ display: "none" }}
            >
              Space Design Italia
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex md:gap-8" role="menubar">
          {/* Services Dropdown */}
          <Popover
            showArrow
            shouldBlockScroll={false}
            isOpen={isServicesOpen}
            onOpenChange={setIsServicesOpen}
            shouldCloseOnBlur={true}
          >
            <PopoverTrigger>
              <motion.button
                className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400 ${
                  isServicesOpen
                    ? "bg-gray-100 text-primary dark:bg-gray-800 dark:text-primary-400"
                    : ""
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("services")}
                <Icon
                  icon="heroicons:chevron-down"
                  className={`transition-all duration-300 ${
                    isServicesOpen
                      ? "rotate-180 text-primary-500 dark:text-primary-400"
                      : ""
                  }`}
                  width={16}
                  aria-hidden="true"
                />
              </motion.button>
            </PopoverTrigger>
            <PopoverContent className="w-screen max-w-screen-lg rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 py-5">
              <div className="flex gap-5" id="services-menu" role="menu">
                {/* Categories Sidebar */}
                <div
                  className="w-[280px] min-w-[280px] space-y-2 border-r pr-3 border-gray-200 px-2 dark:border-gray-800"
                  role="tablist"
                >
                  {Object.entries(servicesWithLang).map(
                    ([category, { icon }]) => (
                      <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`group flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all duration-300 ${
                          activeCategory === category
                            ? "bg-primary/10 dark:bg-primary-900/20"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                        role="tab"
                        aria-selected={activeCategory === category}
                        aria-controls={`${category}-panel`}
                        id={`${category}-tab`}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            activeCategory === category
                              ? "bg-primary text-white dark:bg-primary-400 dark:text-gray-900"
                              : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-primary dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-gray-700"
                          }`}
                        >
                          <Icon icon={icon} width={24} aria-hidden="true" />
                        </span>
                        <div>
                          <div
                            className={`font-xs transition-colors ${
                              activeCategory === category
                                ? "text-primary dark:text-primary-400"
                                : "text-gray-900 group-hover:text-primary dark:text-white dark:group-hover:text-primary-400"
                            }`}
                          >
                            {t(category.toLowerCase().replace(/\s+/g, "-"))}
                          </div>
                        </div>
                      </motion.button>
                    )
                  )}
                </div>

                {/* Services Content */}
                <div className="flex-1 overflow-hidden p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="h-full"
                      role="tabpanel"
                      id={`${activeCategory}-panel`}
                      aria-labelledby={`${activeCategory}-tab`}
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary-900/20 dark:text-primary-400">
                          <Icon
                            icon={servicesWithLang[activeCategory]?.icon || ""}
                            width={24}
                            aria-hidden="true"
                          />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t(activeCategory.toLowerCase().replace(/\s+/g, "-"))}
                        </h3>
                      </div>
                      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                        {t(servicesWithLang[activeCategory]?.descriptionKey)}
                      </p>
                      <div className="grid grid-cols-2 gap-4" role="menu">
                        {servicesWithLang[activeCategory]?.items.map((item) => (
                          <motion.div
                            key={item.name}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full"
                          >
                            <Link
                              to={item.href}
                              className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-400"
                              role="menuitem"
                              onClick={(e) => {
                                // Permetti la navigazione ma chiudi il dropdown con un piccolo delay
                                setTimeout(() => setIsServicesOpen(false), 100);
                              }}
                            >
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary-900/20 dark:text-primary-400 dark:group-hover:bg-primary-400 dark:group-hover:text-gray-900">
                                <Icon
                                  icon={item.icon}
                                  width={20}
                                  aria-hidden="true"
                                />
                              </div>
                              <h4 className="mb-2 font-medium text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-400">
                                {t(item.name)}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {t(item.descriptionKey)}
                              </p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary-400"
              role="menuitem"
              aria-current={
                window.location.pathname === link.href ? "page" : undefined
              }
            >
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="h-9 min-w-[40px] rounded-full px-3 text-sm font-medium text-primary transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/20"
            variant="bordered"
            onClick={() => {
              const newLang = language === "en" ? "it" : "en";
              setLanguage(newLang);
            }}
            aria-label={t("change-language")}
          >
            {language.toUpperCase()}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="h-9 w-9 rounded-full bg-primary-50 p-0 text-primary md:hidden dark:bg-primary-900/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t("close-menu") : t("open-menu")}
          >
            <Icon
              icon={isMenuOpen ? "heroicons:x-mark" : "heroicons:bars-3"}
              width={18}
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[70px] max-h-[calc(100vh-70px)] overflow-y-auto border-b border-gray-200 bg-white/95 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/95 md:hidden"
            id="mobile-menu"
            role="menu"
            aria-label={t("mobile-menu")}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Mobile Services Menu */}
              <div className="p-4" role="menu">
                <h3 className="mb-4 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {t("services")}
                </h3>
                {Object.entries(servicesWithLang).map(
                  ([category, { icon, descriptionKey, items }]) => (
                    <div key={category} className="mb-6 last:mb-0" role="menu">
                      <div className="mb-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
                            <Icon
                              icon={icon}
                              className="text-primary-500 dark:text-primary-400"
                              width={20}
                              aria-hidden="true"
                            />
                          </span>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t(category.toLowerCase().replace(/\s+/g, "-"))}
                          </h4>
                        </div>
                        <p className="ml-10 text-xs text-gray-500 dark:text-gray-400">
                          {t(descriptionKey)}
                        </p>
                      </div>
                      <ul className="ml-10 space-y-3" role="menu">
                        {items.map((item) => (
                          <li key={item.name} role="none">
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/20"
                              onClick={() => setIsMenuOpen(false)}
                              role="menuitem"
                            >
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                                <Icon
                                  icon={item.icon}
                                  className="text-primary-500 dark:text-primary-400"
                                  width={14}
                                  aria-hidden="true"
                                />
                              </span>
                              <div>
                                <div className="text-sm text-gray-900 dark:text-white">
                                  {t(item.name)}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {t(item.descriptionKey)}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              {/* Mobile Other Links */}
              <div className="p-4" role="menu">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary-400"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    aria-current={
                      window.location.pathname === link.href
                        ? "page"
                        : undefined
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
