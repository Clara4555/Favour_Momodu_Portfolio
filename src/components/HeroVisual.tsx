import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import profileImage from '../Project-images/ChatGPT Image Sep 18, 2026, 07_20_27 PM.png';

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        el.style.setProperty('--px', `${x * 18}px`);
        el.style.setProperty('--py', `${y * 18}px`);
      });
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className="relative flex aspect-square w-full max-w-[520px] items-center justify-center"
      style={{
        '--px': '0px',
        '--py': '0px',
      } as React.CSSProperties}
    >
      <div
        className="relative h-full w-full overflow-visible transition-transform duration-500 ease-out"
        style={{
          transform: 'translate(calc(var(--px) * 0.75), calc(var(--py) * 0.75))',
          filter: 'drop-shadow(0 28px 48px rgba(0, 0, 0, 0.18))',
        }}
      >
        {!imageError ? (
          <img
            src={profileImage}
            alt="Favour Momodu - Frontend Developer & AI Creative"
            className="block h-full w-full object-contain object-center scale-[1.04]"
            style={{
              display: 'block',
              visibility: 'visible',
              opacity: 1,
              background: 'transparent',
            }}
            loading="eager"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-500/20 to-accent-300/10">
            <span className="text-6xl text-accent-300">👨‍💻</span>
          </div>
        )}
      </div>
    </div>
  );
}
