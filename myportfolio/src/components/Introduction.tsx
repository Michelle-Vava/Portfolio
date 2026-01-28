import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["Precision", "Reliability", "Impact"];

const Introduction = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle through words
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 1500); // 1.5s per word
      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after last word then finish
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode='wait'>
          {index < words.length && (
            <motion.h1
              key={words[index]}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary-400 to-white">
                {words[index]}
              </span>
            </motion.h1>
          )}
          
          {index === words.length && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-12 h-12 rounded-full border-4 border-primary-500" />
              <span className="text-4xl font-bold text-white">MV.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Introduction;
