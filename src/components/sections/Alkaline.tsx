import { useState } from 'react';
import { Droplets, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export default function Alkaline() {
  const [selectedMineral, setSelectedMineral] = useState<number>(0);

  const minerals = [
    {
      name: 'MAGNESIUM',
      symbol: 'Mg²',
      desc: 'Infuses water with a delicate, silky texture while supporting cellular resilience and deep physiological recovery.',
      origin: 'Granite Strata',
    },
    {
      name: 'CALCIUM',
      symbol: 'Ca²',
      desc: 'Essential alkaline mineral naturally drawn from subterranean limestone, yielding crisp structural purity.',
      origin: 'Limestone Bed',
    },
    {
      name: 'SILICA',
      symbol: 'SiO₂',
      desc: 'Trace quartz silica impart an ultra-smooth, velvety mouthfeel untouched by artificial additives.',
      origin: 'Quartz Veins',
    },
  ];

  return (
    <section
      id="alkaline"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-28"
    >
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8D9FA7]">
            CHAPTER III · EQUILIBRIUM
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0]">
          <span className="block font-light text-white/90">
            Shaped by
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            subterranean
          </span>
          <span className="block font-light text-white/70">
            stone.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#8D9FA7] font-light tracking-wide leading-relaxed max-w-lg">
          True alkalinity cannot be rushed or chemically synthesized. Filtered through centuries of untouched alpine granite, IONA absorbs living electrolytes naturally, arriving at a gentle, stable pH 8.5 balance.
        </p>

        {/* pH Stately Presentation */}
        <div className="mt-12 flex flex-wrap items-center gap-10 pt-8 border-t border-white/10">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono text-[#8D9FA7] uppercase tracking-widest">Natural pH</span>
            <span className="font-serif-luxury text-5xl sm:text-6xl font-light text-white tracking-tight">
              8.5
            </span>
          </div>

          <div className="flex items-center gap-3">
            {minerals.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setSelectedMineral(idx)}
                className={`px-4 py-2.5 rounded-full border text-xs tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  selectedMineral === idx
                    ? 'border-white bg-white text-[#030709] font-medium shadow-[0_4px_20px_rgba(255,255,255,0.15)]'
                    : 'border-white/15 bg-white/[0.02] text-[#8D9FA7] hover:border-white/30 hover:text-white'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Detail note */}
        <div className="mt-6 p-5 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-white/70 mb-2">
            <span className="uppercase tracking-widest">{minerals[selectedMineral].name} · {minerals[selectedMineral].symbol}</span>
            <span className="text-[#8D9FA7]">{minerals[selectedMineral].origin}</span>
          </div>
          <p className="text-xs text-[#8D9FA7] font-light leading-relaxed">
            {minerals[selectedMineral].desc}
          </p>
        </div>
      </div>

      {/* Right Column: In 3D space, this holds the huge glowing transparent water sphere */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
