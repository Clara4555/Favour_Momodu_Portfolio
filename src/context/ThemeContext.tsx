import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'dark' | 'light';
type ColorScheme = 'blue' | 'purple' | 'red';

interface ThemeContextType {
  mode: ThemeMode;
  colorScheme: ColorScheme;
  toggleMode: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const saved = localStorage.getItem('theme-color') as ColorScheme;
    return saved || 'blue';
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('theme-mode', mode);
    updateThemeVariables(root, mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('theme-color', colorScheme);
    updateColorVariables(root, colorScheme);
  }, [colorScheme]);

  const toggleMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ mode, colorScheme, toggleMode, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function updateThemeVariables(root: HTMLElement, mode: ThemeMode) {
  const isDark = mode === 'dark';
  
  // Backgrounds
  root.style.setProperty('--bg-primary', isDark ? '#0a0a0f' : '#f1f5f9');
  root.style.setProperty('--bg-secondary', isDark ? '#12121a' : '#ffffff');
  root.style.setProperty('--bg-surface', isDark ? '#1a1a2e' : '#f8fafc');
  root.style.setProperty('--bg-elevated', isDark ? '#252540' : '#e2e8f0');
  root.style.setProperty('--bg-ink-850', isDark ? 'rgba(26, 26, 46, 0.8)' : 'rgba(241, 245, 249, 0.8)');
  root.style.setProperty('--bg-ink-800', isDark ? '#1a1a2e' : '#e2e8f0');
  root.style.setProperty('--bg-ink-900', isDark ? '#0a0a0f' : '#cbd5e1');
  root.style.setProperty('--bg-ink-950', isDark ? '#0a0a0f' : '#f1f5f9');
  
  // Text
  root.style.setProperty('--text-primary', isDark ? '#f1f5f9' : '#0f172a');
  root.style.setProperty('--text-secondary', isDark ? '#cbd5e1' : '#1e293b');
  root.style.setProperty('--text-muted', isDark ? '#64748b' : '#475569');
  root.style.setProperty('--text-ink-100', isDark ? '#f1f5f9' : '#0f172a');
  root.style.setProperty('--text-ink-200', isDark ? '#cbd5e1' : '#1e293b');
  root.style.setProperty('--text-ink-300', isDark ? '#94a3b8' : '#334155');
  root.style.setProperty('--text-ink-400', isDark ? '#64748b' : '#475569');
  root.style.setProperty('--text-ink-500', isDark ? '#475569' : '#64748b');
  
  // Border
  root.style.setProperty('--border-color', isDark ? '#2d2d4a' : '#cbd5e1');
  root.style.setProperty('--border-ink-600', isDark ? '#2d2d4a' : '#cbd5e1');
  root.style.setProperty('--border-ink-700', isDark ? '#252540' : '#e2e8f0');
  root.style.setProperty('--border-ink-800', isDark ? '#1a1a2e' : '#f1f5f9');
}

function updateColorVariables(root: HTMLElement, color: ColorScheme) {
  const colors = {
    blue: {
      100: '#93b4ff',
      200: '#6b9aff',
      300: '#4b7fff',
      400: '#2b64ff',
      500: '#1a4ad9',
    },
    purple: {
      100: '#d4a1ff',
      200: '#c07aff',
      300: '#a855f7',
      400: '#8b3df0',
      500: '#6d28d9',
    },
    red: {
      100: '#ff9b9b',
      200: '#ff6b6b',
      300: '#f43f5e',
      400: '#e11d48',
      500: '#be123c',
    },
  };

  const scheme = colors[color];
  Object.entries(scheme).forEach(([key, value]) => {
    root.style.setProperty(`--accent-${key}`, value);
  });
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}