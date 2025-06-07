import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

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
    icon: "carbon:application-web",
    descriptionKey: "software-development-desc",
    items: [
      { 
        name: "Mobile Apps", 
        href: "/services/mobile-development", 
        icon: "bi:phone",
        descriptionKey: "mobile-apps-desc"
      },
      { 
        name: "Web Applications", 
        href: "/services/web-development", 
        icon: "eos-icons:application-outlined",
        descriptionKey: "web-applications-desc"
      },
      { 
        name: "Websites", 
        href: "/services/websites", 
        icon: "mdi:web",
        descriptionKey: "websites-desc"
      },
      { 
        name: "Custom Software", 
        href: "/services/custom-software", 
        icon: "clarity:design-line",
        descriptionKey: "custom-software-desc"
      },
      { 
        name: "Startup MVP", 
        href: "/services/startup-mvp", 
        icon: "pajamas:rocket-launch",
        descriptionKey: "startup-mvp-desc"
      },
    ],
  },
  "System Integration": {
    icon: "carbon:integration",
    descriptionKey: "system-integration-desc",
    items: [
      { 
        name: "Cloud Integration", 
        href: "/services/cloud-integration", 
        icon: "carbon:cloud-service-management",
        descriptionKey: "cloud-integration-desc"
      },
      { 
        name: "API Development", 
        href: "/services/api-development", 
        icon: "carbon:api",
        descriptionKey: "api-development-desc"
      },
      { 
        name: "Legacy Systems", 
        href: "/services/legacy-integration", 
        icon: "carbon:system",
        descriptionKey: "legacy-systems-desc"
      },
    ],
  },
  "Consulting": {
    icon: "carbon:chart-relationship",
    descriptionKey: "consulting-desc",
    items: [
      { 
        name: "Digital Strategy", 
        href: "/services/digital-strategy", 
        icon: "carbon:strategy",
        descriptionKey: "digital-strategy-desc"
      },
      { 
        name: "Technical Architecture", 
        href: "/services/tech-architecture", 
        icon: "carbon:network-3",
        descriptionKey: "tech-architecture-desc"
      },
      { 
        name: "Security Consulting", 
        href: "/services/security", 
        icon: "carbon:security",
        descriptionKey: "security-consulting-desc"
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
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(services)[0]);

  const navLinks = [
    { name: t('about'), href: `/${language}/about` },
    { name: t('contact'), href: `/${language}/contact` },
  ];

  const servicesWithLang = Object.entries(services).reduce((acc, [category, data]) => {
    return {
      ...acc,
      [category]: {
        ...data,
        items: data.items.map(item => ({
          ...item,
          href: `/${language}${item.href}`
        }))
      }
    };
  }, {} as typeof services);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      aria-label={t('main-navigation')}
    >
      <div className="container mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.a
          href={`/${language}`}
          className="text-xl font-bold text-black dark:text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={t('home')}
        >
          <img src="./logo.png" alt="Space Design Italia Logo" className="h-20 w-auto" />
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex md:gap-8" role="menubar">
          {/* Services Dropdown */}
          <Popover showArrow>
            <PopoverTrigger>
              <motion.button
                className={`text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary-400 flex items-center gap-2`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('services')}
                <Icon
                  icon="heroicons:chevron-down"
                  className={`transition-all duration-200 ${isServicesOpen ? 'rotate-180 text-primary-500 dark:text-primary-400' : ''}`}
                  width={16}
                  aria-hidden="true"
                />
              </motion.button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex gap-5 p-5" id="services-menu" role="menu">
                {/* Categories Sidebar */}
                <div className="w-[280px] min-w-[280px] space-y-1 border-r-2 px-2" role="tablist">
                  {Object.entries(servicesWithLang).map(([category, { icon, descriptionKey }]) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`group flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                        activeCategory === category
                          ? 'bg-primary dark:bg-primary-900/20 transition-all duration-300'
                          : 'hover:border-primary border-2 transition-all duration-300'
                      }`}
                      role="tab"
                      aria-selected={activeCategory === category}
                      aria-controls={`${category}-panel`}
                      id={`${category}-tab`}
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        activeCategory === category
                          ? 'bg-white'
                          : 'bg-gray-500 group-hover:bg-primary transition-all duration-300'
                      }`}>
                        <Icon 
                          icon={icon} 
                          className={`transition-colors ${
                            activeCategory === category
                              ? 'text-primary dark:text-primary-400'
                              : 'text-white '
                          }`}
                          width={24}
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <div className={`font-medium transition-colors ${
                          activeCategory === category
                            ? 'text-white dark:text-primary-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {t(category.toLowerCase().replace(/\s+/g, '-'))}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-300">
                          {t(descriptionKey)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Services Content */}
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.15 }}
                      className="h-full"
                      role="tabpanel"
                      id={`${activeCategory}-panel`}
                      aria-labelledby={`${activeCategory}-tab`}
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <Icon 
                          icon={servicesWithLang[activeCategory]?.icon || ''}
                          className="text-primary-500 dark:text-primary-400"
                          width={24}
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t(activeCategory.toLowerCase().replace(/\s+/g, '-'))}
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
                            <a
                              href={item.href}
                              className="group flex h-full flex-col rounded-xl bg-white p-4 transition-all duration-200 hover:bg-primary hover:shadow-lg dark:bg-gray-900 dark:hover:bg-primary"
                              role="menuitem"
                            >
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-white group-hover:text-primary dark:bg-primary/20">
                                <Icon 
                                  icon={item.icon}
                                  width={20}
                                  aria-hidden="true"
                                />
                              </div>
                              <h4 className="mb-2 font-medium text-gray-900 transition-colors group-hover:text-white dark:text-white">
                                {t(item.name.toLowerCase().replace(/\s+/g, '-'))}
                              </h4>
                              <p className="text-sm text-gray-500 transition-colors group-hover:text-white/80 dark:text-gray-400">
                                {t(item.descriptionKey)}
                              </p>
                            </a>
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
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              role="menuitem"
              aria-current={window.location.pathname === link.href ? 'page' : undefined}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="h-9 min-w-[40px] rounded-full px-3 text-sm font-medium text-primary transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/20"
            variant="bordered"
            onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            aria-label={t('change-language')}
          >
            {language.toUpperCase()}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="h-9 w-9 rounded-full bg-primary-50 p-0 text-primary md:hidden dark:bg-primary-900/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t('close-menu') : t('open-menu')}
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
            aria-label={t('mobile-menu')}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Mobile Services Menu */}
              <div className="p-4" role="menu">
                <h3 className="mb-4 text-sm font-semibold text-primary-600 dark:text-primary-400">{t('services')}</h3>
                {Object.entries(servicesWithLang).map(([category, { icon, descriptionKey, items }]) => (
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
                          {t(category.toLowerCase().replace(/\s+/g, '-'))}
                        </h4>
                      </div>
                      <p className="ml-10 text-xs text-gray-500 dark:text-gray-400">
                        {t(descriptionKey)}
                      </p>
                    </div>
                    <ul className="ml-10 space-y-3" role="menu">
                      {items.map((item) => (
                        <li key={item.name} role="none">
                          <a
                            href={item.href}
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
                                {t(item.name.toLowerCase().replace(/\s+/g, '-'))}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{t(item.descriptionKey)}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Mobile Other Links */}
              <div className="p-4" role="menu">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary-400"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    aria-current={window.location.pathname === link.href ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
