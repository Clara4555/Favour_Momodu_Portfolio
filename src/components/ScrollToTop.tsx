import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent-300 bg-accent-500 text-white shadow-lg shadow-accent-500/30 transition-all duration-300 hover:bg-accent-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-300"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
