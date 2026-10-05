import { useState } from 'react';
import { Volume2, VolumeX, Menu as MenuIcon, ArrowUpRight } from 'lucide-react';
import { ambientSound } from '../ui/AmbientAudio';

interface NavbarProps {
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenMenu, onNavigate, activeSection: _activeSection, onOpenContact }: NavbarProps) {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setIsAudioActive(active);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-6 bg-gradient-to-b from-[#030709]/90 via-[#030709]/40 to-transparent backdrop-blur-[4px] border-b border-white/[0.04]">
      {/* Left: Nav Links (Desktop) & Menu (Mobile) */}
      <div className="flex items-center gap-6 flex-1">
        {/* Mobile Menu trigger */}
        <button
          onClick={onOpenMenu}
          className="flex lg:hidden items-center gap-2.5 text-xs font-light tracking-[0.25em] text-[#8D9FA7] hover:text-white uppercase transition-colors group cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="p-1.5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
            <MenuIcon className="w-3.5 h-3.5 text-white/80" />
          </span>
          <span className="hidden sm:inline">INDEX</span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-light tracking-[0.2em] uppercase text-[#8D9FA7]">
          <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors cursor-pointer">PHILOSOPHY</button>
          <button onClick={() => onNavigate('alkaline')} className="hover:text-white transition-colors cursor-pointer">ORIGIN</button>
          <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">PROVENANCE</button>
          <button onClick={() => onNavigate('range')} className="hover:text-white transition-colors cursor-pointer">EDITIONS</button>
        </nav>
      </div>

      {/* Center: Brand Wordmark */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <button
          onClick={() => onNavigate('hero')}
          className="cursor-pointer focus:outline-none"
        >
          <span className="font-serif-luxury text-2xl sm:text-3xl font-light tracking-[0.25em] text-white hover:text-white/80 transition-colors">
            I O N A
          </span>
        </button>
      </div>

      {/* Right: Audio + Action */}
      <div className="flex items-center justify-end gap-5 xl:gap-8 flex-1">
        {/* Ambient Atmosphere Sound Toggle */}
        <button
          onClick={toggleSound}
          className="p-2 rounded-full border border-white/10 hover:border-white/30 text-[#8D9FA7] hover:text-white transition-all cursor-pointer relative"
          title={isAudioActive ? 'Mute Glacial Atmosphere' : 'Listen to Glacial Stillness'}
          aria-label="Toggle ambient sound"
        >
          {isAudioActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Primary Action Button */}
        <button
          onClick={() => (onOpenContact ? onOpenContact() : onNavigate('bottle'))}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 hover:border-white text-[11px] font-light tracking-[0.2em] uppercase text-white hover:text-[#030709] hover:bg-white transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
        >
          <span>CONCIERGE</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </button>
      </div>
    </header>
  );
}
