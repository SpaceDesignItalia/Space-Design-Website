import { motion } from "framer-motion";
import {
  HiCodeBracketSquare,
  HiMagnifyingGlass,
  HiMapPin,
  HiTag,
  HiWindow,
} from "react-icons/hi2";
import { useState } from "react";

const cards = [
  {
    id: 1,
    icon: (
      <HiMagnifyingGlass className="h-8 w-8 text-gray-900 dark:text-white" />
    ),
    title: "Analisi",
    description:
      "Studio approfondito dei requisiti e analisi dei processi esistenti per identificare le aree di miglioramento",
  },
  {
    id: 2,
    icon: <HiMapPin className="h-8 w-8 text-gray-900 dark:text-white" />,
    title: "Mapping",
    description:
      "Mappatura dettagliata dei flussi di lavoro e identificazione delle integrazioni necessarie",
  },
  {
    id: 3,
    icon: <HiTag className="h-8 w-8 text-gray-900 dark:text-white" />,
    title: "Progettazione",
    description:
      "Architettura software scalabile e design dell'interfaccia utente ottimizzata per la produttività",
  },
  {
    id: 4,
    icon: <HiWindow className="h-8 w-8 text-gray-900 dark:text-white" />,
    title: "UI/UX",
    description:
      "Creazione di interfacce intuitive e moderne che garantiscono un'esperienza utente eccellente",
  },
  {
    id: 5,
    icon: (
      <HiCodeBracketSquare className="h-8 w-8 text-gray-900 dark:text-white" />
    ),
    title: "Sviluppo",
    description:
      "Implementazione del codice con best practices, testing completo e documentazione tecnica",
  },
];

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.05,
    transition: { duration: 0.6 },
    zIndex: 10,
  },
  notSelected: {
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6 },
    zIndex: 1,
  },
};

export const CardRotation = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const selectCard = (cardId: number) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative w-40 h-48 cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => selectCard(card.id)}
              variants={cardVariants}
              animate={selectedCard === card.id ? "selected" : "notSelected"}
            >
              {/* Card Container */}
              <div className="relative w-full h-full">
                {/* Front Side */}
                <motion.div
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform:
                      selectedCard === card.id
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black dark:bg-white mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform:
                      selectedCard === card.id
                        ? "rotateY(0deg)"
                        : "rotateY(-180deg)",
                  }}
                >
                  <div className="w-full h-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black dark:bg-white mb-3">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {cards.find((card) => card.id === selectedCard)?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {cards.find((card) => card.id === selectedCard)?.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
