import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Software Development",
    description: "Sviluppiamo soluzioni software complete: applicazioni web, mobile apps, siti web, software personalizzato, MVP per startup e soluzioni basate su intelligenza artificiale.",
    icon: "carbon:application-web",
    features: [
      "Mobile Apps",
      "Web Applications",
      "Websites",
      "Custom Software",
      "Startup MVP",
      "AI-based Software"
    ]
  },  
  {
    title: "System Integration",
    description: "Integriamo e ottimizziamo i tuoi sistemi aziendali attraverso cloud integration, sviluppo API, modernizzazione dei sistemi legacy e gestione delle infrastrutture applicative.",
    icon: "material-symbols:cloud-outline",
    features: [
      "Cloud Integration",
      "API Development",
      "Infrastructure Management",
      "DevOps & CI/CD"
    ]
  },{
    title: "Consulting",
    description: "Forniamo consulenza strategica e tecnica per guidare la tua trasformazione digitale con sicurezza, scalabilità e infrastrutture moderne.",
    icon: "carbon:chart-relationship",
    features: [
      "Digital Strategy",
      "Technical Architecture",
      "Cloud Infrastructure Planning",
      "Scalable System Design"
    ]
  }
  
]

export default function OurServices() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white text-center mb-20"
        >
          Ecco cosa facciamo.
        </motion.h2>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="group relative p-8 cursor-pointer rounded-2xl border border-white/10"
            >
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.1] backdrop-blur-sm" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative">
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <div 
                    
                    className="rounded-xl bg-white/20 p-4 transition-all duration-300 group-hover:bg-white/30 shadow-lg"
                  >
                    <Icon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-base text-white/80 leading-relaxed mb-6 transition-all duration-300 group-hover:text-white"
                >
                  {service.description}
                </motion.p>
                <motion.ul 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="text-sm text-white/70 flex items-center gap-2"
                    >
                      <Icon icon="ph:dot-outline-fill" className="w-4 h-4 text-white/40" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
