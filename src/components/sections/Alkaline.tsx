import { useState } from 'react';
import { Droplets, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export default function Alkaline() {
  const [selectedMetric, setSelectedMetric] = useState<'balance' | 'minerals' | 'taste'>('balance');

  return (
    <section
      id="alkaline"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold italic tracking-tight uppercase leading-none text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            BALANCED
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            BY NATURE.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          IONA's alkaline water is designed with a carefully balanced mineral profile and elevated pH for a smooth, refreshing taste. Elevated alkalinity neutralizes systemic acidity and restores your body to equilibrium.
        </p>

        {/* pH Metric Block + Indicators */}
        <div className="mt-10 flex flex-wrap items-end gap-8 pt-6 border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#20BFD3] tracking-widest uppercase">
              IONIC INDEX
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-mono text-[#A9C4CA]">pH</span>
              <span className="font-display text-6xl sm:text-7xl font-extrabold italic text-white tracking-tight drop-shadow-[0_0_20px_rgba(32,191,211,0.3)]">
                8.5+
              </span>
            </div>
            <span className="text-[11px] text-[#A9C4CA]/70 font-mono mt-1">
              Stable Electrolytic Equilibrium
            </span>
          </div>

          {/* Three Feature Badges matching reference storyboard */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setSelectedMetric('balance')}
              className={`flex flex-col items-center justify-center p-3 rounded-md border text-center transition-all cursor-pointer ${
                selectedMetric === 'balance'
                  ? 'border-[#20BFD3] bg-[#06232D]/80 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                  : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
              }`}
            >
              <div className="w-8 h-8 rounded-full border border-[#20BFD3]/40 flex items-center justify-center mb-1.5 bg-[#20BFD3]/10">
                <Droplets className="w-4 h-4 text-[#7DEAF0]" />
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white font-mono leading-tight">
                NATURALLY<br />BALANCED
              </span>
            </button>

            <button
              onClick={() => setSelectedMetric('minerals')}
              className={`flex flex-col items-center justify-center p-3 rounded-md border text-center transition-all cursor-pointer ${
                selectedMetric === 'minerals'
                  ? 'border-[#20BFD3] bg-[#06232D]/80 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                  : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
              }`}
            >
              <div className="w-8 h-8 rounded-full border border-[#20BFD3]/40 flex items-center justify-center mb-1.5 bg-[#20BFD3]/10">
                <Activity className="w-4 h-4 text-[#7DEAF0]" />
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white font-mono leading-tight">
                RICH IN<br />MINERALS
              </span>
            </button>

            <button
              onClick={() => setSelectedMetric('taste')}
              className={`flex flex-col items-center justify-center p-3 rounded-md border text-center transition-all cursor-pointer ${
                selectedMetric === 'taste'
                  ? 'border-[#20BFD3] bg-[#06232D]/80 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                  : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
              }`}
            >
              <div className="w-8 h-8 rounded-full border border-[#20BFD3]/40 flex items-center justify-center mb-1.5 bg-[#20BFD3]/10">
                <Sparkles className="w-4 h-4 text-[#7DEAF0]" />
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-white font-mono leading-tight">
                SMOOTH<br />TASTE
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Detail Card based on selected metric */}
        <div className="mt-6 p-4 rounded-sm border border-white/10 bg-[#04141D]/50 text-xs text-[#A9C4CA]">
          {selectedMetric === 'balance' && (
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#20BFD3] shrink-0" />
              <span>Bio-mimetic electrolytic ratio closely mirroring natural cellular fluid for immediate uptake.</span>
            </div>
          )}
          {selectedMetric === 'minerals' && (
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#20BFD3] shrink-0" />
              <span>Naturally infused with magnesium, calcium, and trace quartz silica for cellular resilience.</span>
            </div>
          )}
          {selectedMetric === 'taste' && (
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#20BFD3] shrink-0" />
              <span>Velvety soft palate with crisp mineral finish, devoid of harsh chemical or plastic aftertastes.</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: In 3D space, this holds the huge glowing transparent water sphere */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
