import { useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  duration?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  motionProps?: HTMLMotionProps<"div">;
}

export function TypingAnimation({
  words,
  className = "",
  duration = 2500,
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseTime = 2000,
  motionProps,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Scrivendo
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Parola completata, mostra evidenziazione
            setShowHighlight(true);
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          }
        } else {
          // Cancellando
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
            // Nasconde l'evidenziazione quando inizia a cancellare
            if (currentText.length === currentWord.length) {
              setShowHighlight(false);
            }
          } else {
            // Cancellazione completata, vai alla prossima parola
            setIsDeleting(false);
            setShowHighlight(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  // Reset dell'animazione quando cambiano le parole (cambio lingua)
  useEffect(() => {
    setCurrentText("");
    setCurrentWordIndex(0);
    setIsDeleting(false);
    setShowHighlight(false);
  }, [words]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className={`${className} relative inline-flex items-center`}
        {...motionProps}
      >
        {/* Background evidenziatore verde fluo */}
        <AnimatePresence>
          {showHighlight && !isDeleting && (
            <motion.div
              className="absolute inset-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                backgroundColor: "#00ff00",
                transformOrigin: "right center",
                zIndex: 0,
              }}
            />
          )}
        </AnimatePresence>

        {/* Testo bianco di base */}
        <span className="relative z-10 font-bold text-white flex items-center">
          {currentText}
          {/* Cursore verde lampeggiante */}
          <motion.span
            className="inline-block w-[2px] h-[1.2em] ml-1"
            style={{ backgroundColor: "#00ff00" }}
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </span>

        {/* Testo nero che appare gradualmente da destra e va sotto durante cancellazione */}
        <AnimatePresence>
          {showHighlight && (
            <motion.span
              className={`absolute inset-0 font-bold text-black flex items-center ${
                isDeleting ? "-z-10" : "z-20"
              }`}
              initial={{
                clipPath: "inset(0 0 0 100%)",
              }}
              animate={{
                clipPath: "inset(0 0 0 0%)",
              }}
              exit={{
                clipPath: "inset(0 0 0 100%)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {currentText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
