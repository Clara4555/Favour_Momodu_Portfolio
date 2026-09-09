/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          'ink-850': 'var(--bg-ink-850)',
          'ink-800': 'var(--bg-ink-800)',
          'ink-900': 'var(--bg-ink-900)',
          'ink-950': 'var(--bg-ink-950)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          'ink-100': 'var(--text-ink-100)',
          'ink-200': 'var(--text-ink-200)',
          'ink-300': 'var(--text-ink-300)',
          'ink-400': 'var(--text-ink-400)',
          'ink-500': 'var(--text-ink-500)',
        },
        border: {
          DEFAULT: 'var(--border-color)',
          'ink-600': 'var(--border-ink-600)',
          'ink-700': 'var(--border-ink-700)',
          'ink-800': 'var(--border-ink-800)',
        },
        accent: {
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
        },
        error: {
          500: '#ef4444',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};