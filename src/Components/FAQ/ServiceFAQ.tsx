import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
  delay: number;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaSubtext?: string;
  benefitText?: string;
  faqs: FAQItem[];
}

export default function ServiceFAQ({
  title = "Domande Frequenti",
  subtitle = "Risposte alle domande più comuni",
  faqs,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      {/* Background Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
          >
            <Icon
              icon="material-symbols:help-outline"
              className="h-5 w-5 text-gray-600 dark:text-gray-400"
            />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              FAQ
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 mb-20"
        >
          {faqs.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left group-hover:bg-gray-50 dark:group-hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-black group-hover:to-gray-800 dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-300 shadow-sm"
                    >
                      <Icon
                        icon={item.icon}
                        className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 45 : 0,
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 shadow-sm"
                  >
                    <Icon
                      icon="material-symbols:add"
                      className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden border-t border-gray-100 dark:border-gray-700"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="p-6 pt-4 bg-gray-50 dark:bg-gray-700/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-1 h-full bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 rounded-full flex-shrink-0 mt-1" />
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
