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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-gradient-to-b from-[#02080D]/90 via-[#02080D]/50 to-transparent backdrop-blur-[2px] border-b border-white/[0.04]">
      {/* Left: Nav Links (Desktop) & Menu (Mobile) */}
      <div className="flex items-center gap-6 flex-1">
        {/* Mobile Menu trigger */}
        <button
          onClick={onOpenMenu}
          className="flex lg:hidden items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#A9C4CA] hover:text-white uppercase transition-colors group cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="p-1.5 rounded-sm border border-white/10 group-hover:border-[#20BFD3]/50 transition-colors">
            <MenuIcon className="w-3.5 h-3.5 text-[#7DEAF0]" />
          </span>
          <span className="hidden sm:inline">MENU</span>
        </button>

        {/* Desktop 4 Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.16em] uppercase text-[#A9C4CA]">
          <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors cursor-pointer">ABOUT</button>
          <button onClick={() => onNavigate('alkaline')} className="hover:text-white transition-colors cursor-pointer">THE WATER</button>
          <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">PROCESS</button>
          <button onClick={() => onNavigate('range')} className="hover:text-white transition-colors cursor-pointer">PRODUCT</button>
        </nav>
      </div>

      {/* Center: Brand Wordmark */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <button
          onClick={() => onNavigate('hero')}
          className="cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#20BFD3]"
        >
          <span className="font-display text-3xl sm:text-4xl font-black italic tracking-tighter text-white hover:text-[#7DEAF0] transition-colors drop-shadow-[0_0_12px_rgba(32,191,211,0.25)]">
            IONA
          </span>
        </button>
      </div>

      {/* Right: Audio + Action */}
      <div className="flex items-center justify-end gap-5 xl:gap-8 flex-1">

        {/* Ambient Sound Toggle */}
        <button
          onClick={toggleSound}
          className="p-2 rounded-full border border-white/10 hover:border-[#20BFD3]/60 text-[#A9C4CA] hover:text-[#7DEAF0] transition-all cursor-pointer relative"
          title={isAudioActive ? 'Mute Underwater Atmosphere' : 'Play Underwater Atmosphere'}
          aria-label="Toggle ambient underwater hydrophone"
        >
          {isAudioActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#20BFD3]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#20BFD3] animate-ping" />
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Primary Action Button */}
        <button
          onClick={() => (onOpenContact ? onOpenContact() : onNavigate('bottle'))}
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#20BFD3] text-xs font-semibold tracking-[0.14em] uppercase text-white hover:text-[#02080D] hover:bg-[#20BFD3] transition-all duration-300 shadow-[0_0_15px_rgba(32,191,211,0.15)] cursor-pointer"
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
