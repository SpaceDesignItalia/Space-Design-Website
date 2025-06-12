import { useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
  motionProps?: HTMLMotionProps<"div">;
}

export function WordRotate({
  words,
  className = "",
  duration = 2500,
  motionProps,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`${className} relative inline-block`}
          {...motionProps}
        >
          {/* Background evidenziatore verde fluo - più sottile */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-[0.7em] bg-lime-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{
              transformOrigin: "left center",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          />

          {/* Effetto glow dell'evidenziatore */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-[0.8em] bg-lime-400 blur-sm opacity-40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            style={{
              transformOrigin: "left center",
              transform: "translateY(-50%)",
              zIndex: -1,
            }}
          />

          {/* Testo che cambia colore quando evidenziato */}
          <motion.span
            className="relative z-10"
            initial={{ color: "#ffffff" }}
            animate={{ color: "#000000" }}
            exit={{ color: "#ffffff" }}
            transition={{
              delay: 0.4,
              duration: 0.2,
            }}
          >
            {words[index]}
          </motion.span>

          {/* Effetto sparkle finale */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-[0.7em] bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 0.4, 0] }}
            transition={{
              delay: 1.0,
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "left center",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
