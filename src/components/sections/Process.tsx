import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Layers, Sparkles } from 'lucide-react';
import { PROCESS_STAGES } from '../../lib/constants';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [manualActive, setManualActive] = useState<number | null>(null);

  const stageImages = [
    '/src/assets/images/artesian_source_aquifer_1791133528234.jpg',
    '/src/assets/images/water_droplet_macro_1791133515454.jpg',
    '/src/assets/images/underwater_ambient_env_1791133503549.jpg',
    '/src/assets/images/water_droplet_macro_1791133515454.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalDistance = rect.height + window.innerHeight * 0.4;
      const current = window.innerHeight - rect.top;
      const progress = Math.min(1, Math.max(0, current / totalDistance));
      setScrollFraction(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active stage based on scroll fraction
  const autoActiveIndex = scrollFraction < 0.32 ? 0 : scrollFraction < 0.52 ? 1 : scrollFraction < 0.72 ? 2 : 3;
  const activeStage = manualActive !== null ? manualActive : autoActiveIndex;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-28"
    >
      {/* Left Column Content - Clean without the removed card description */}
      <div className="max-w-xl pointer-events-auto">
        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold italic tracking-tight uppercase leading-none text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            FROM
          </span>
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            NATURE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            TO YOU.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed max-w-lg">
          A careful journey to bring you pure, alkaline and ionised water. From deep granite reservoirs through catalytic refinement, each molecule is calibrated for pristine physiological resonance.
        </p>


      </div>

      {/* Right Column: 4 Cards that appear dynamically one by one as the user scrolls */}
      <div className="hidden lg:flex flex-col gap-4 pointer-events-auto max-w-md w-full relative pl-6">
        {/* Subtle Header */}
        <div className="flex items-center justify-between px-1 mb-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7DEAF0]">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#20BFD3]" />
            FOUR-STAGE PURIFICATION
          </span>
          <span className="text-[#A9C4CA]/80">SCROLL TO ADVANCE</span>
        </div>

        {/* Vertical Progress Spine connecting the cards */}
        <div className="relative flex flex-col gap-3.5 pl-3">
          <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-[#20BFD3] to-[#7DEAF0] transition-all duration-300 shadow-[0_0_8px_#20BFD3]"
              style={{ height: `${Math.min(100, Math.max(0, scrollFraction * 100))}%` }}
            />
          </div>

          {PROCESS_STAGES.map((stage, idx) => {
            // Stage reveal thresholds as user scrolls into the section:
            // Stage 0: visible right away on entering
            // Stage 1: reveals at >= 0.28
            // Stage 2: reveals at >= 0.48
            // Stage 3: reveals at >= 0.68
            const threshold = idx === 0 ? 0.08 : idx * 0.2 + 0.08;
            const isRevealed = scrollFraction >= threshold || (manualActive !== null && manualActive >= idx);
            const isCurrent = activeStage === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setManualActive(idx)}
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed
                    ? isCurrent
                      ? 'translateY(0) scale(1.02) translateX(-4px)'
                      : 'translateY(0) scale(1)'
                    : 'translateY(36px) scale(0.92)',
                  pointerEvents: isRevealed ? 'auto' : 'none',
                  transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer backdrop-blur-md transition-all duration-300 ${
                  isCurrent
                    ? 'border-[#20BFD3] bg-[#06232D]/90 shadow-[0_0_25px_rgba(32,191,211,0.25)]'
                    : isRevealed
                    ? 'border-white/10 bg-[#04141D]/60 hover:border-white/30 hover:bg-[#06232D]/50'
                    : 'border-transparent bg-transparent'
                }`}
              >
                {/* Circular Portal Thumbnail */}
                <div className={`relative w-12 h-12 rounded-full overflow-hidden border-2 shrink-0 transition-colors duration-300 mt-0.5 ${
                  isCurrent ? 'border-[#7DEAF0] shadow-[0_0_12px_#20BFD3]' : 'border-white/20'
                }`}>
                  <img
                    src={stageImages[idx]}
                    alt={stage.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#02080D]/30" />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-white drop-shadow">
                    {stage.step}
                  </div>
                </div>

                {/* Text Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono tracking-wider text-white uppercase">
                        {stage.step} {stage.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#20BFD3] px-1.5 py-0.2 rounded bg-[#20BFD3]/10">
                        {stage.depth}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isCurrent ? 'text-[#7DEAF0] translate-x-1' : 'text-white/20'
                      }`}
                    />
                  </div>
                  <p className="text-[11px] text-[#A9C4CA] leading-relaxed mt-1.5">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 rounded-sm border border-white/10 bg-[#02080D]/60 flex items-center gap-3 text-xs text-[#A9C4CA] mt-1">
          <Layers className="w-4 h-4 text-[#20BFD3] shrink-0" />
          <span className="text-[11px]">Every bottle undergoes hermetic micro-batch scanning prior to seal release.</span>
        </div>
      </div>
    </section>
  );
}
