import { useState } from 'react';
import { Shield, Droplets, Zap, CheckCircle2 } from 'lucide-react';

interface PhilosophyProps {
  onLearnMore?: () => void;
}

export default function Philosophy({ onLearnMore: _onLearnMore }: PhilosophyProps) {
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
        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold italic tracking-tight uppercase leading-none text-white">
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
    </section>
  );
}
