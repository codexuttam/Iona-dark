export const COLORS = {
  bgPrimary: '#02080D',
  deepNavy: '#04141D',
  darkAqua: '#06232D',
  oceanBlue: '#083E50',
  electricAqua: '#20BFD3',
  softCyan: '#7DEAF0',
  glassHighlight: '#DDFEFF',
  white: '#F7FFFF',
  primaryText: '#FFFFFF',
  secondaryText: '#A9C4CA',
};

export interface SectionDef {
  id: string;
  num: string;
  label: string;
  title: string;
}

export const SECTIONS: SectionDef[] = [
  { id: 'hero', num: '01', label: 'WATER', title: 'PURE WATER. REFINED.' },
  { id: 'philosophy', num: '02', label: 'PHILOSOPHY', title: 'WATER, REIMAGINED.' },
  { id: 'alkaline', num: '03', label: 'ALKALINE', title: 'BALANCED BY NATURE.' },
  { id: 'ionised', num: '04', label: 'IONISED', title: 'IONISED. REFINED.' },
  { id: 'process', num: '05', label: 'PROCESS', title: 'FROM NATURE TO YOU.' },
  { id: 'bottle', num: '06', label: 'OUR BOTTLE', title: 'DESIGNED FOR A BRIGHTER TODAY.' },
  { id: 'range', num: '07', label: 'RANGE', title: 'PURE BY DESIGN.' },
  { id: 'questions', num: '08', label: 'QUESTIONS', title: 'QUESTIONS' },
];

export const PROCESS_STAGES = [
  {
    step: '01',
    name: 'SOURCE',
    description: 'Naturally pure water drawn from deep protected subterranean aquifers, preserved from environmental pollutants.',
    depth: 'Subterranean Aquifer 380m',
  },
  {
    step: '02',
    name: 'PURIFY',
    description: 'Advanced multi-stage molecular filtration eliminating microscopic impurities while preserving structural integrity.',
    depth: '9-Stage Precision Filtration',
  },
  {
    step: '03',
    name: 'IONISE',
    description: 'Proprietary electromagnetic ionisation realigns molecular clusters, optimizing cellular bio-availability and energy.',
    depth: 'Electrolytic Cell Re-structuring',
  },
  {
    step: '04',
    name: 'REFINE',
    description: 'Infusion of essential balanced electrolytes and alkaline mineral complexes, achieving optimal pH 8.5+ equilibrium.',
    depth: 'Micro-mineral Equilibrium',
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
