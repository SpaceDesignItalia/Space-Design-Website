import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export function MorphingText({ texts, className = "" }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const currentText = useMemo(() => texts[currentIndex], [texts, currentIndex]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
