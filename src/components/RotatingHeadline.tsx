import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const headlines = [
  'I Build Digital Experiences.',
  'I Create With AI.',
  'I Turn Ideas Into Experiences.',
];

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (reduce || !isMounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [reduce, isMounted]);

  if (reduce || !isMounted) {
    return <h2 className="text-display-xl text-gradient">{headlines[0]}</h2>;
  }

  return (
    <h2 className="text-display-xl text-gradient overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          {headlines[index]}
        </motion.span>
      </AnimatePresence>
    </h2>
  );
}