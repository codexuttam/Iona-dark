export const COLORS = {
  bgPrimary: '#030709',
  deepSlate: '#081116',
  mineralStone: '#121C22',
  glacialIce: '#E5F3F5',
  mistCyan: '#B8DDE3',
  subtleAqua: '#6E98A0',
  glassHighlight: '#FFFFFF',
  white: '#FFFFFF',
  primaryText: '#FFFFFF',
  secondaryText: '#D6E2E7',
  mutedText: '#94A7B0',
};

export interface SectionDef {
  id: string;
  num: string;
  label: string;
  title: string;
}

export const SECTIONS: SectionDef[] = [
  { id: 'hero', num: '01', label: 'GENESIS', title: 'WATER IN ITS PUREST FORM' },
  { id: 'philosophy', num: '02', label: 'STILLNESS', title: 'THE ART OF STILLNESS' },
  { id: 'alkaline', num: '03', label: 'EQUILIBRIUM', title: 'SHAPED BY SUBTERRANEAN STONE' },
  { id: 'ionised', num: '04', label: 'RESONANCE', title: 'MOLECULAR HARMONY' },
  { id: 'process', num: '05', label: 'PROVENANCE', title: 'CENTURIES IN CREATION' },
  { id: 'bottle', num: '06', label: 'THE VESSEL', title: 'AN ARCHITECTURAL OBJECT' },
  { id: 'range', num: '07', label: 'COLLECTION', title: 'CURATED EDITIONS' },
  { id: 'questions', num: '08', label: 'INQUIRIES', title: 'THE SANCTUARY' },
];

export const PROCESS_STAGES = [
  {
    step: '01',
    name: 'GLACIAL ORIGIN',
    description: 'Prehistoric snowfall and alpine melt filtered through geological stone layers over centuries into a sealed aquifer.',
    depth: 'Subterranean Reservoir · 380m',
  },
  {
    step: '02',
    name: 'MINERAL INFUSION',
    description: 'Naturally enriched with bio-available magnesium, calcium, and silica from ancient granite and quartz strata.',
    depth: 'Geological Mineral Balance',
  },
  {
    step: '03',
    name: 'MOLECULAR CLARITY',
    description: 'Subtle micro-clustering and catalytic ionisation that aligns water molecules to reflect natural cellular resonance.',
    depth: 'Electrolytic Harmony',
  },
  {
    step: '04',
    name: 'HERMETIC SEAL',
    description: 'Bottled in clean-room stillness into architectural BPA-free crystal vessels to preserve living purity.',
    depth: 'Micro-Batch Allocation',
  },
];

export const PRODUCT_SIZES = [
  {
    size: '250 ML',
    name: 'On The Go',
    tag: 'Pocket Hydration',
    description: 'Ergonomically compact for high mobility, daily commutes, and swift active replenishment.',
    heightScale: 0.72,
    diameterScale: 0.85,
    specs: { height: '162mm', weight: '290g', cap: 'Aluminium Twist' },
  },
  {
    size: '500 ML',
    name: 'Everyday',
    tag: 'Signature Size',
    description: 'The golden balance between portability and day-long alkaline hydration clarity.',
    heightScale: 0.95,
    diameterScale: 0.98,
    specs: { height: '215mm', weight: '540g', cap: 'Aluminium Twist' },
  },
  {
    size: '750 ML',
    name: 'Selected Icon',
    tag: 'Flagship Edition',
    description: 'Our primary reference silhouette, engineered with heavy glass-like food grade resin and precision contours.',
    heightScale: 1.15,
    diameterScale: 1.05,
    specs: { height: '248mm', weight: '780g', cap: 'Precision Fluted' },
  },
  {
    size: '1 L',
    name: 'Active Lifestyle',
    tag: 'Maximum Capacity',
    description: 'Designed for intensive athletic performance, prolonged wellness routines, and desk-side focus.',
    heightScale: 1.32,
    diameterScale: 1.18,
    specs: { height: '280mm', weight: '1040g', cap: 'Reinforced Grip' },
  },
];

export const FAQS = [
  {
    q: 'What makes IONA different from regular water?',
    a: 'IONA undergoes a meticulous multi-tier bio-physical refinement that combines subterranean natural mineral water with proprietary micro-ionisation. This creates water with a silky, velvety mouthfeel, optimal pH 8.5+ alkalinity, and superior cellular hydration absorption.',
  },
  {
    q: 'Is IONA alkaline and ionised?',
    a: 'Yes, both. While standard alkaline waters often rely on added bicarbonate powders, IONA achieves stability through catalytic electrolytic ionisation and balanced organic electrolytes (magnesium, potassium, calcium) that maintain cellular pH harmony.',
  },
  {
    q: 'What is the exact pH level of IONA?',
    a: 'IONA is calibrated to a stable pH range of 8.5 to 8.8. This slightly alkaline state helps neutralize dietary acidity and reduces oxidative stress within modern high-performance lifestyles.',
  },
  {
    q: 'Where does IONA source its water from?',
    a: 'Our source is an ancient, protected artesian glacial aquifer nestled beneath dense geological granite strata, naturally filtered through mineral-rich subterranean stone for centuries prior to extraction.',
  },
  {
    q: 'Is the bottle recyclable and BPA-free?',
    a: 'Every IONA bottle is crafted from 100% recyclable, BPA/BPS-free, food-grade PET resin with ultra-low carbon footprint manufacturing. We also offer refillable architectural glass carafes in selected boutique regions.',
  },
  {
    q: 'Can I subscribe for scheduled deliveries?',
    a: 'Yes. The IONA Reserve membership provides automated monthly cases, temperature-controlled delivery, exclusive member batch access, and custom insulated carrier accessories.',
  },
];
