import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeToggle() {
  const { mode, colorScheme, toggleMode, setColorScheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const schemes = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-500' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-500' },
    { value: 'red', label: 'Red', class: 'bg-red-500' },
  ] as const;

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMode}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent-300 hover:bg-bg-elevated"
          aria-label="Toggle theme"
        >
          {mode === 'dark' ? (
            <Sun className="h-4 w-4 text-text-secondary" />
          ) : (
            <Moon className="h-4 w-4 text-text-secondary" />
          )}
        </button>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent-300 hover:bg-bg-elevated"
          aria-label="Change color scheme"
        >
          <Palette className="h-4 w-4 text-text-secondary" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-bg-surface p-2 shadow-xl backdrop-blur-xl"
          >
            <p className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-text-muted">
              Color Scheme
            </p>
            {schemes.map((scheme) => (
              <button
                key={scheme.value}
                onClick={() => {
                  setColorScheme(scheme.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-300 hover:bg-bg-elevated ${
                  colorScheme === scheme.value ? 'text-accent-300' : 'text-text-secondary'
                }`}
              >
                <span className={`h-3 w-3 rounded-full ${scheme.class}`} />
                {scheme.label}
                {colorScheme === scheme.value && (
                  <span className="ml-auto text-accent-300">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}