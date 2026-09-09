import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '../Project-images/profile.jpeg';

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

        const x =
          (e.clientX - rect.left - rect.width / 2) / rect.width;

        const y =
          (e.clientY - rect.top - rect.height / 2) / rect.height;

        el.style.setProperty('--px', `${x * 20}px`);
        el.style.setProperty('--py', `${y * 20}px`);
      });
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  console.log('PROFILE IMAGE:', profileImage);

  return (
    <div
      ref={ref}
      className="relative flex aspect-square w-full max-w-[520px] items-center justify-center"
      style={
        {
          '--px': '0px',
          '--py': '0px',
        } as React.CSSProperties
      }
    >
      {/* =========================================
          OUTER DECORATIVE ELEMENTS
      ========================================== */}

    
      

      {/* =========================================
          ANIMATED DASHED RING
      ========================================== */}

      <div
        className="
          absolute
          inset-[5%]
          rounded-full
          border
          border-dashed
          border-accent-300/60
        "
        style={{
          transform:
            'translate(calc(var(--px) * -0.2), calc(var(--py) * -0.2))',
          animation: reduce
            ? 'none'
            : 'spin 40s linear infinite',
        }}
      />

      {/* =========================================
          MAIN PROFILE CONTAINER
      ========================================== */}

      <div
        className="
          absolute
          inset-[7%]
          overflow-hidden
          rounded-[30%]
          border
          border-border/70
          bg-bg-surface/80
          backdrop-blur-sm
          shadow-2xl
          shadow-accent-500/20
        "
      >
        {/* Decorative inner border */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-2
            z-30
            rounded-[30%]
            border
            border-accent-300/30
          "
        />

        {/* =========================================
            PROFILE IMAGE
        ========================================== */}

        <div
          className="
            absolute
            inset-[2%]
            z-10
            overflow-hidden
            rounded-[30%]
            border
            border-accent-300/50
            bg-bg-surface
          "
          style={{
            transform:
              'translate(calc(var(--px) * 0.4), calc(var(--py) * 0.4))',
          }}
        >
          {!imageError ? (
            <img
              src={profileImage}
              alt="Favour Momodu - Frontend Developer & AI Creative"
              className="
                relative
                z-10
                block
                h-full
                w-full
                object-cover
                object-center
              "
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: 1,
              }}
              loading="eager"
              onLoad={() => {
                console.log('Profile image loaded successfully');
              }}
              onError={() => {
                console.error(
                  'Image failed to load:',
                  profileImage
                );
                setImageError(true);
              }}
            />
          ) : (
            <div
              className="
                relative
                z-10
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-gradient-to-br
                from-accent-500/20
                to-accent-300/10
              "
            >
              <span className="text-6xl text-accent-300">
                👨‍💻
              </span>
            </div>
          )}

          {/* =========================================
              IMAGE GRADIENT OVERLAY
          ========================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              bg-gradient-to-t
              from-bg-ink-950/60
              via-transparent
              to-transparent
            "
          />

          {/* =========================================
              PROFILE INFORMATION
          ========================================== */}

          <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center px-8 pb-10">
            <div className="flex flex-col items-center justify-center text-center">
             

              <h3 className="mt-3 font-display text-3xl font-black leading-tight text-white">
                Favour Momodu
              </h3>

             
            </div>

            <span className="absolute right-6 top-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-300/50 bg-bg-surface/80 backdrop-blur-sm">
              <ArrowUpRight className="h-4 w-4 text-accent-300" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}