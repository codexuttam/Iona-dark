import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Layers, Sparkles } from 'lucide-react';
import { PROCESS_STAGES } from '../../lib/constants';

import imgArtesian from '../../assets/images/artesian_source_aquifer_1791133528234.jpg';
import imgDroplet from '../../assets/images/water_droplet_macro_1791133515454.jpg';
import imgEnv from '../../assets/images/underwater_ambient_env_1791133503549.jpg';

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [manualActive, setManualActive] = useState<number | null>(null);

  const stageImages = [
    imgArtesian,
    imgDroplet,
    imgEnv,
    imgDroplet,
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
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8D9FA7]">
            CHAPTER V · PROVENANCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0]">
          <span className="block font-light text-white/90">
            Centuries in
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            geological
          </span>
          <span className="block font-light text-white/70">
            creation.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#8D9FA7] font-light tracking-wide leading-relaxed max-w-lg">
          Filtered through prehistoric subterranean granite and quartz over centuries. We do not alter nature; we simply safeguard its highest state of balance until it reaches you.
        </p>

        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-[#8D9FA7]">
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span>ZERO CONTAMINANTS · ZERO CHEMICAL ACCELERANTS</span>
        </div>
      </div>

      {/* Right Column: 4 Cards that appear dynamically one by one as the user scrolls */}
      <div className="hidden lg:flex flex-col gap-4 pointer-events-auto max-w-md w-full relative pl-6">
        {/* Subtle Header */}
        <div className="flex items-center justify-between px-1 mb-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8D9FA7]">
          <span>PROVENANCE MILESTONES</span>
          <span>SCROLL TO ADVANCE</span>
        </div>

        {/* Vertical Progress Spine connecting the cards */}
        <div className="relative flex flex-col gap-3.5 pl-3">
          <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-white/10 overflow-hidden">
            <div
              className="w-full bg-white transition-all duration-300"
              style={{ height: `${Math.min(100, Math.max(0, scrollFraction * 100))}%` }}
            />
          </div>

          {PROCESS_STAGES.map((stage, idx) => {
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
                      ? 'translateY(0) scale(1.01) translateX(-4px)'
                      : 'translateY(0) scale(1)'
                    : 'translateY(32px) scale(0.94)',
                  pointerEvents: isRevealed ? 'auto' : 'none',
                  transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer backdrop-blur-md transition-all duration-300 ${
                  isCurrent
                    ? 'border-white/30 bg-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                    : isRevealed
                    ? 'border-white/10 bg-white/[0.015] hover:border-white/20'
                    : 'border-transparent bg-transparent'
                }`}
              >
                {/* Circular Portal Thumbnail */}
                <div className={`relative w-12 h-12 rounded-full overflow-hidden border shrink-0 transition-colors duration-300 mt-0.5 ${
                  isCurrent ? 'border-white' : 'border-white/20'
                }`}>
                  <img
                    src={stageImages[idx]}
                    alt={stage.name}
                    className="w-full h-full object-cover grayscale-[30%] contrast-[110%]"
                  />
                  <div className="absolute inset-0 bg-[#030709]/30" />
                  <div className="absolute inset-0 flex items-center justify-center font-serif-luxury text-xs text-white">
                    {stage.step}
                  </div>
                </div>

                {/* Text Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif-luxury tracking-widest text-white uppercase">
                      {stage.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#8D9FA7] tracking-wider">
                      {stage.depth}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8D9FA7] font-light leading-relaxed mt-1.5">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 rounded-lg border border-white/10 bg-white/[0.015] text-[11px] font-light text-[#8D9FA7] mt-1 backdrop-blur-md">
          Every micro-batch undergoes spectral mineral analysis prior to hermetic sealing.
        </div>
      </div>
    </section>
  );
}
