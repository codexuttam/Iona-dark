import { useState } from 'react';
import { Droplet, Waves, Atom, Sparkles } from 'lucide-react';

export default function Ionised() {
  const [activeTab, setActiveTab] = useState<'clean' | 'hydration' | 'minerals'>('hydration');

  return (
    <section
      id="ionised"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold italic tracking-tight uppercase leading-none text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            IONISED.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            REFINED.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          Using advanced ionisation technology, IONA is crafted to deliver clean, crisp and smooth tasting water. Through low-frequency electromagnetic pulse alignment, molecular water cluster sizes are reduced by 40%, accelerating absorption at the cellular membrane.
        </p>

        {/* Feature Badges with Cyan Ring matching storyboard */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setActiveTab('clean')}
            className={`flex items-center gap-3.5 p-4 rounded-md border text-left transition-all cursor-pointer ${
              activeTab === 'clean'
                ? 'border-[#20BFD3] bg-[#06232D]/70 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-full border border-[#20BFD3]/40 flex items-center justify-center shrink-0 bg-[#20BFD3]/10">
              <Droplet className="w-5 h-5 text-[#7DEAF0]" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                CLEANER TASTE
              </div>
              <div className="text-[11px] text-[#A9C4CA]/80 mt-0.5">
                Zero metallic trace
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('hydration')}
            className={`flex items-center gap-3.5 p-4 rounded-md border text-left transition-all cursor-pointer ${
              activeTab === 'hydration'
                ? 'border-[#20BFD3] bg-[#06232D]/70 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-full border border-[#20BFD3]/40 flex items-center justify-center shrink-0 bg-[#20BFD3]/10">
              <Waves className="w-5 h-5 text-[#7DEAF0]" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                BETTER HYDRATION
              </div>
              <div className="text-[11px] text-[#A9C4CA]/80 mt-0.5">
                Micro-cluster osmosis
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('minerals')}
            className={`flex items-center gap-3.5 p-4 rounded-md border text-left transition-all cursor-pointer ${
              activeTab === 'minerals'
                ? 'border-[#20BFD3] bg-[#06232D]/70 shadow-[0_0_15px_rgba(32,191,211,0.2)]'
                : 'border-white/10 bg-[#04141D]/30 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-full border border-[#20BFD3]/40 flex items-center justify-center shrink-0 bg-[#20BFD3]/10">
              <Atom className="w-5 h-5 text-[#7DEAF0]" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                NATURAL BALANCE
              </div>
              <div className="text-[11px] text-[#A9C4CA]/80 mt-0.5">
                Electrolytic synergy
              </div>
            </div>
          </button>
        </div>

        {/* Technical Data telemetry */}
        <div className="mt-8 flex items-center gap-6 p-4 rounded-sm border border-white/10 bg-[#02080D]/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#20BFD3]" />
            <span className="text-xs font-mono text-[#7DEAF0]">ORP INDEX:</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-bold text-white">-150 to -250 mV</span>
            <span className="text-[10px] text-[#A9C4CA]">(High Antioxidant Potential)</span>
          </div>
        </div>
      </div>

      {/* Right Column: In 3D space, this holds the electric particle ribbon */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
