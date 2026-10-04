import { useState, useMemo } from 'react';
import Scene from './Scene';
import Navbar from '../navigation/Navbar';
import SideNavigation from '../navigation/SideNavigation';
import ProgressBar from '../navigation/ProgressBar';
import MenuModal from '../navigation/MenuModal';
import Loader from '../ui/Loader';
import Hero from '../sections/Hero';
import Philosophy from '../sections/Philosophy';
import Alkaline from '../sections/Alkaline';
import Ionised from '../sections/Ionised';
import Process from '../sections/Process';
import ProductBottle from '../sections/ProductBottle';
import ProductRange from '../sections/ProductRange';
import FAQ from '../sections/FAQ';
import { useLenis } from '../../animation/useLenis';
import { SECTIONS } from '../../lib/constants';
import { ambientSound } from '../ui/AmbientAudio';

export default function Experience() {
  const { scrollProgress, scrollTo } = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBottleSizeIndex, setSelectedBottleSizeIndex] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Compute active section index based on scrollProgress (0 to 1)
  const activeSectionIndex = useMemo(() => {
    const count = SECTIONS.length;
    const idx = Math.min(count - 1, Math.max(0, Math.floor(scrollProgress * count)));
    return idx;
  }, [scrollProgress]);

  const handleNavigate = (sectionId: string) => {
    ambientSound.playDropChime();
    const el = document.getElementById(sectionId);
    if (el) {
      scrollTo(el);
    }
  };

  const handleScrollNext = () => {
    ambientSound.playDropChime();
    const nextIdx = Math.min(SECTIONS.length - 1, activeSectionIndex + 1);
    const target = SECTIONS[nextIdx].id;
    handleNavigate(target);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#02080D] text-white overflow-hidden selection:bg-[#20BFD3] selection:text-[#02080D]">
      {/* Initial cinematic luxury loader */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Persistent Fixed 3D WebGL Canvas */}
      <Scene
        scrollProgress={scrollProgress}
        activeSectionIndex={activeSectionIndex}
        selectedBottleIndex={selectedBottleSizeIndex}
      />

      {/* Giant Low-Opacity Background Typography for Atmospheric Depth (PDF page 15) */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden">
        <div
          className="font-display font-black italic tracking-tighter text-white/[0.035] uppercase text-[28vw] leading-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${-(scrollProgress - 0.5) * 120}px, 0, 0)`,
          }}
        >
          {activeSectionIndex === 0 && 'IONA'}
          {activeSectionIndex === 1 && 'PURITY'}
          {activeSectionIndex === 2 && 'ALKALINE'}
          {activeSectionIndex === 3 && 'IONISE'}
          {activeSectionIndex === 4 && 'REFINE'}
          {activeSectionIndex === 5 && 'BOTTLE'}
          {activeSectionIndex === 6 && 'RESERVE'}
          {activeSectionIndex >= 7 && 'FOREVER'}
        </div>
      </div>

      {/* Fixed Cinematic Navigation */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigate={handleNavigate}
        activeSection={SECTIONS[activeSectionIndex]?.id || 'hero'}
      />

      <SideNavigation
        activeSectionIndex={activeSectionIndex}
        onNavigate={handleNavigate}
      />

      <ProgressBar
        scrollProgress={scrollProgress}
        onScrollNext={handleScrollNext}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* DOM Content Sections (Spaced along the scroll track) */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero onExplore={() => handleNavigate('philosophy')} />
        <Philosophy onLearnMore={() => handleNavigate('alkaline')} />
        <Alkaline />
        <Ionised />
        <Process />
        <ProductBottle onRotateBottle={() => ambientSound.playDropChime()} />
        <ProductRange
          selectedSizeIndex={selectedBottleSizeIndex}
          onSelectSize={(idx) => {
            setSelectedBottleSizeIndex(idx);
            ambientSound.playDropChime();
          }}
        />
        <FAQ
          onExperience={() => handleNavigate('bottle')}
          onNavigate={handleNavigate}
        />
      </div>
    </main>
  );
}
