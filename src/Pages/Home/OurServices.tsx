import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg transition-shadow duration-300 border border-gray-800"
    >
      <motion.div 
        className="text-primary text-4xl mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon icon={iconName} width="48" height="48" />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Sviluppo Software Personalizzato",
      description: "Creiamo soluzioni software su misura per le tue esigenze specifiche, utilizzando le tecnologie più moderne e innovative per garantire prodotti di alta qualità e performanti.",
      iconName: "mdi:code-braces"
    },
    {
      title: "System Integration & Cloud Management",
      description: "Gestiamo e integriamo infrastrutture cloud e tradizionali, garantendo efficienza, sicurezza e scalabilità per il tuo business con soluzioni all'avanguardia.",
      iconName: "mdi:cloud-sync"
    },
    {
      title: "Consulenza Strategica & Prodotto",
      description: "Offriamo consulenza strategica per ottimizzare i tuoi processi aziendali e sviluppare prodotti innovativi, guidandoti verso il successo digitale.",
      iconName: "mdi:lightbulb"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-black rounded-t-[50px]"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">I Nostri Servizi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Offriamo soluzioni complete per trasformare e potenziare il tuo business digitale
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
