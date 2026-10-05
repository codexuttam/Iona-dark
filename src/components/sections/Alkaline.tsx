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

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0] text-luminous-heading">
          <span className="block font-light text-white">
            Shaped by
          </span>
          <span className="block italic text-[#E8F8FA] font-normal">
            subterranean
          </span>
          <span className="block font-light text-white/95">
            stone.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#E2E8F0] font-light tracking-wide leading-relaxed max-w-lg text-editorial-body">
          True alkalinity cannot be rushed or chemically synthesized. Filtered through centuries of untouched alpine granite, IONA absorbs living electrolytes naturally, arriving at a gentle, stable pH 8.5 balance.
        </p>

        {/* pH Stately Presentation */}
        <div className="mt-12 flex flex-wrap items-center gap-10 pt-8 border-t border-white/15">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono text-[#CBD5E1] uppercase tracking-widest font-medium">Natural pH</span>
            <span className="font-serif-luxury text-5xl sm:text-6xl font-light text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              8.5
            </span>
          </div>

          <div className="flex items-center gap-3">
            {minerals.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => setSelectedMineral(idx)}
                className={`px-4 py-2.5 rounded-full border text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedMineral === idx
                    ? 'border-white bg-white text-[#030709] font-medium shadow-[0_4px_20px_rgba(255,255,255,0.25)]'
                    : 'border-white/20 bg-[#061118]/80 text-[#D4E3E8] hover:border-white/40 hover:text-white'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Detail note */}
        <div className="mt-6 p-5 rounded-lg card-luxury-glass">
          <div className="flex items-center justify-between text-[11px] font-mono text-white mb-2">
            <span className="uppercase tracking-widest font-medium text-white">{minerals[selectedMineral].name} · {minerals[selectedMineral].symbol}</span>
            <span className="text-[#CBD5E1]">{minerals[selectedMineral].origin}</span>
          </div>
          <p className="text-xs text-[#E2E8F0] font-light leading-relaxed">
            {minerals[selectedMineral].desc}
          </p>
        </div>
      </div>

      {/* Right Column: In 3D space, this holds the huge glowing transparent water sphere */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
