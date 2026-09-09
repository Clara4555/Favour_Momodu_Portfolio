import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}