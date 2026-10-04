import { useState } from 'react';
import { Play, X, Shield, Droplets, Zap, CheckCircle2 } from 'lucide-react';

interface PhilosophyProps {
  onLearnMore?: () => void;
}

export default function Philosophy({ onLearnMore: _onLearnMore }: PhilosophyProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'PURE SOURCE',
      desc: '380m subterranean artesian reserve preserved from all microplastics and runoff.',
      metric: 'Glacial Origin',
      icon: Droplets,
    },
    {
      title: 'ADVANCED PURIFICATION',
      desc: '9-tier sub-micron filtration ensuring zero contaminants while preserving natural ionic integrity.',
      metric: '0.001 Microns',
      icon: Shield,
    },
    {
      title: 'IONISATION TECHNOLOGY',
      desc: 'Catalytic electrolytic micro-clustering creating smaller water groups for cellular osmosis.',
      metric: 'Micro-Cluster H₂O',
      icon: Zap,
    },
    {
      title: 'BALANCED MINERALS',
      desc: 'Naturally abundant bio-available magnesium, calcium, and potassium electrolytes.',
      metric: 'Balanced Ca / Mg',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#20BFD3] tracking-widest font-bold">02</span>
          <span className="w-8 h-[1px] bg-[#20BFD3]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7DEAF0] uppercase">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.88] text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            WATER,
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            REIMAGINED.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          IONA combines naturally pure water with advanced ionisation technology to deliver a refined hydration experience. We challenge conventional bottling by delivering water in its highest biological resonance.
        </p>

        {/* Watch Story Action */}
        <div className="mt-10 flex items-center gap-6">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-3.5 px-6 py-3 rounded-full border border-white/20 hover:border-[#20BFD3] bg-white/[0.03] hover:bg-[#20BFD3]/10 text-white transition-all duration-300 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#20BFD3]/20 flex items-center justify-center group-hover:bg-[#20BFD3] transition-colors duration-300">
              <Play className="w-3.5 h-3.5 text-[#7DEAF0] group-hover:text-[#02080D] transition-colors fill-current ml-0.5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              WATCH OUR STORY
            </span>
          </button>
        </div>
      </div>

      {/* Right Column: Vertical Technical Data Markers */}
      <div className="hidden xl:flex flex-col gap-6 pointer-events-auto max-w-xs">
        {features.map((feat, idx) => {
          const isActive = activeFeature === idx;
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              onMouseEnter={() => setActiveFeature(idx)}
              className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#20BFD3] bg-[#06232D]/70 shadow-[0_0_20px_rgba(32,191,211,0.15)] translate-x-[-8px]'
                  : 'border-white/10 bg-[#04141D]/40 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#7DEAF0]' : 'text-[#A9C4CA]'}`} />
                  <span className="text-xs font-bold font-mono tracking-wider text-white">
                    {feat.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#20BFD3]">{feat.metric}</span>
              </div>
              <p className="mt-2 text-xs text-[#A9C4CA] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cinematic Story Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02080D]/90 backdrop-blur-xl p-6 pointer-events-auto"
        >
          <div className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-lg border border-[#20BFD3]/30">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7DEAF0]">
                  BRAND CINEMA
                </span>
                <h3 className="font-display text-2xl font-bold italic uppercase text-white mt-1">
                  The Genesis of IONA
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full border border-white/10 hover:border-white text-[#A9C4CA] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mt-6 aspect-video rounded-md overflow-hidden bg-[#04141D] flex items-center justify-center border border-white/10">
              <img
                src="/src/assets/images/underwater_ambient_env_1791133503549.jpg"
                alt="IONA Underwater Film Preview"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02080D] via-transparent to-transparent" />
              <div className="absolute flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#20BFD3]/20 border border-[#20BFD3] flex items-center justify-center mb-3">
                  <Play className="w-6 h-6 text-[#7DEAF0] fill-current ml-1" />
                </div>
                <span className="font-display text-xl font-bold italic tracking-wide text-white">
                  WATCH FILM · 4K DIRECTORS CUT
                </span>
                <span className="text-xs text-[#A9C4CA] mt-1 font-mono">
                  Runtime: 02:45 · Shot on Arri Alexa 65 Underwater
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A9C4CA]">
              <p className="max-w-md">
                Follow the expedition 380 meters underground into the pristine granite aquifers, capturing water that has remained untouched for generations.
              </p>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-wider hover:bg-[#7DEAF0] transition-colors cursor-pointer"
              >
                RETURN TO EXPERIENCE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
