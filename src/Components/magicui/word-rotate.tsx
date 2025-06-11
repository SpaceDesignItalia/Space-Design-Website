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
    <div className="overflow-hidden pb-6">
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
          className={className}
          {...motionProps}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
