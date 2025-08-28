import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export function MorphingText({ texts, className = "" }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Debug: log when component mounts and texts change
    console.log("MorphingText mounted with texts:", texts);

    if (texts.length <= 1) {
      console.warn(
        "MorphingText: Only one text provided, no morphing will occur"
      );
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length;
        console.log(
          "MorphingText: Changing from index",
          prevIndex,
          "to",
          newIndex
        );
        console.log("MorphingText: New text:", texts[newIndex]);
        return newIndex;
      });
    }, 3000); // Increased to 3 seconds for better visibility

    return () => clearInterval(interval);
  }, [texts]);

  const currentText = useMemo(() => texts[currentIndex], [texts, currentIndex]);

  // If only one text, don't animate
  if (texts.length <= 1) {
    return (
      <div className={`relative inline-block ${className}`}>
        <span className="block">{texts[0] || ""}</span>
      </div>
    );
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{
            duration: 0.6,
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
