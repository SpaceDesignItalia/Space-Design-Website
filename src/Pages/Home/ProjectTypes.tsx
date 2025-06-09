import { Button } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const projectTypes = [
  {
    nameKey: 'time-material',
    icon: 'lets-icons:time',
    id: 'time-material',
    href: '#',
    descriptionKey: 'time-material-desc',
    features: [
      'regular-updates',
      'transparent-rates',
      'weekly-billing',
      'project-flexibility',
    ],
  },
  {
    nameKey: 'fixed-price',
    icon: 'material-symbols:folder-outline',
    id: 'fixed-price',
    href: '#',
    descriptionKey: 'fixed-price-desc',
    features: [
      'defined-scope',
      'milestone-payments',
      'detailed-planning',
      'risk-management',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200
    }
  }
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ProjectTypes() {
  const { t } = useLanguage();
  return (
    <div className="isolate overflow-hidden bg-primary">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <motion.p 
            className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            variants={titleVariants}
          >
            {t('how-we-work')}
          </motion.p>
        </motion.div>
        <motion.div 
          className="relative mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleVariants}
        >
          <motion.p 
            className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8"
            variants={subtitleVariants}
          >
            {t('engagement-models-desc')}
          </motion.p>
        </motion.div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projectTypes.map((type) => (
                <motion.div
                  key={type.id}
                  variants={cardVariants}
                  className="group flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:ring-primary/30"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className="h-16 w-16 bg-primary rounded-3xl flex items-center justify-center shrink-0"
                        variants={iconVariants}
                      >
                        <Icon icon={type.icon} className="text-white" fontSize={30}/>
                      </motion.div>
                      <motion.h3 
                        id={type.id} 
                        className="text-xl font-semibold leading-7 text-primary"
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {t(type.nameKey)}
                      </motion.h3>
                    </div>
                    <motion.p 
                      className="mt-6 text-base/7 text-gray-600"
                      variants={cardVariants}
                    >
                      {t(type.descriptionKey)}
                    </motion.p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {type.features.map((feature) => (
                        <li 
                          key={feature} 
                          className="flex gap-x-3 items-center group/item"
                    
                        >
                          <Icon icon="lets-icons:check-fill" className="text-primary" fontSize={20}/>
                          <span>{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href={type.href} color="primary" className="mt-10">
                    {t('learn-more')}
                  </Button>
                </motion.div>
              ))}
              <motion.div 
                className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-gradient-to-br from-white to-gray-50"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:min-w-0 lg:flex-1">
                  <motion.h3 
                    className="text-lg font-semibold text-primary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {t('not-sure')}
                  </motion.h3>
                  <motion.p 
                    className="mt-1 text-base/7 text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {t('discuss-requirements')}
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    href="#"
                    color="primary"
                  >
                    {t('contact-us')} <span aria-hidden="true">&rarr;</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
