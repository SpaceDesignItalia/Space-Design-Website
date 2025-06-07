import { Button } from '@heroui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useLanguage } from '../../context/LanguageContext'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Definisco i clienti con i loro loghi e settori
const clients = [
  {
    name: "Syllog",
    logo: "/Imgs/Home/syllog.webp"
  }
]

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background pt-[70px]">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20"
        aria-hidden="true"
      />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-900/20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
      </div>
  
      <main className="container relative mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <motion.section 
          className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
          role="banner"
        >
          <motion.h1 
            variants={fadeInUp}
            className="relative text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-200">
              {t("hero-title")}
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-center text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300 sm:w-[600px] sm:text-lg"
          >
            {t("hero-subtitle")}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button
              className="group relative h-12 overflow-hidden bg-primary px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
              radius="full"
              aria-label={t("hero-cta-start")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("hero-cta-start")}
                <Icon
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  icon="solar:arrow-right-linear"
                  width={20}
                  aria-hidden="true"
                />
              </span>
              <div 
                className="absolute inset-0 -z-0 translate-y-full bg-primary-600 transition-transform duration-300 group-hover:translate-y-0"
                aria-hidden="true"
              />
            </Button>

            <Button
              className="group h-12 border-2 border-primary-200 px-6 py-3 text-base font-medium text-primary transition-all hover:bg-primary-50 hover:shadow-lg dark:border-primary-800 dark:hover:bg-primary-900/20"
              radius="full"
              variant="bordered"
              aria-label={t("hero-cta-services")}
            >
              <span className="flex items-center justify-center gap-2">
                {t("hero-cta-services")}
               
                  <Icon
                    className="text-primary-500 dark:text-primary-400 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                    aria-hidden="true"
                  />
              </span>
            </Button>
          </motion.div>

          {/* Clients section */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 flex flex-col items-center gap-8"
            role="region"
            aria-label={t("trusted-by")}
          >
            <div className="text-center">
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {t("trusted-by")}
              </h2>
            </div>
            
            <div 
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
              role="list"
              aria-label={t("client-list")}
            >
              {clients.map((client) => (
                <motion.div
                  key={client.name}
                  className="group relative flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                >
                  <div className="h-10">
                    <img
                      src={client.logo}
                      alt={`${t("client-logo")} ${client.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}
