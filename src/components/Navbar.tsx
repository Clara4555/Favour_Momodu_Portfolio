import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
            scrolled
              ? 'mt-3 rounded-full border border-border bg-bg-secondary/70 py-2.5 backdrop-blur-xl lg:mt-4'
              : 'mt-0 border border-transparent bg-transparent py-5'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-base font-semibold tracking-tight text-text-primary sm:text-lg">
              Favour Momodu
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-bg-elevated"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-primary hidden sm:inline-flex">
              Let's Connect
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-muted lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="font-display text-lg font-semibold text-text-primary">Favour Momodu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col px-5 sm:px-8">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between border-b border-border py-4 text-2xl font-display transition-colors ${
                      isActive(item.path) ? 'text-accent-300' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-text-muted">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + siteConfig.nav.length * 0.05, duration: 0.3 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Let's Connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}