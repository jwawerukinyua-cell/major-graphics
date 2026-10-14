export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: 'identity' | 'collateral' | 'large-format' | 'packaging' | 'merchandise' | 'digital';
  icon: string;
  items: string[];
  specs: {
    turnaround: string;
    materials: string;
    formats: string;
  };
  sampleImage: string;
}

export const ADVATECH_STYLE_SERVICES: ServiceOffering[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity & Logo Design',
    tagline: 'Design that speaks before you do.',
    description: 'From concept to full brand guidelines — logos, colour palettes, typography, and visual systems that make your brand unmistakable across every touchpoint.',
    category: 'identity',
    icon: 'PenTool',
    items: [
      'Logo design & variations (Primary, Submark, Icon)',
      'Comprehensive Brand Guideline documents (PDF)',
      'Curated Colour palette & Typography hierarchy',
      'Luxury Business card design & print prepress',
      'Complete Corporate Stationery suite (Letterheads, Envelopes)',
    ],
    specs: {
      turnaround: '48 to 72 Hours',
      materials: 'Vector AI, EPS, SVG, PDF & 8K PNG',
      formats: 'RGB, CMYK & Pantone Spot Color Systems',
    },
    sampleImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'marketing-collateral',
    number: '02',
    title: 'Marketing Collateral',
    tagline: 'Crafted to reflect your brand quality and convert.',
    description: 'Brochures, flyers, sales presentations, and corporate proposals designed to win tenders, impress stakeholders, and close high-value clients.',
    category: 'collateral',
    icon: 'FileText',
    items: [
      'Corporate brochures (Bi-fold, Tri-fold, Multi-page)',
      'Product catalogues & digital lookbooks',
      'Executive Sales presentations (PowerPoint & Keynote)',
      'Annual reports & audited financial booklets',
      'High-impact Proposals, Company Profiles & pitch decks',
    ],
    specs: {
      turnaround: '2 to 4 Days',
      materials: '170gsm–300gsm Art Paper & Silk Finish',
      formats: 'High-Res Print PDF (CMYK + 3mm Bleed) & Web Interactive',
    },
    sampleImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'large-format-printing',
    number: '03',
    title: 'Large-Format Printing & Signage',
    tagline: 'Vibrant, weather-resistant outdoor branding.',
    description: 'From VIP event backdrops and street banners to vehicle fleet wraps and corporate 3D signage — premium large-scale print production with high durability.',
    category: 'large-format',
    icon: 'Maximize2',
    items: [
      'Event backdrops & red carpet step-and-repeat frames',
      'Roll-up banners, teardrop flags & pull-up stands',
      'Outdoor building signs, 3D acrylic & LED illuminated letters',
      'Full vehicle wraps & commercial fleet branding',
      'Exhibition booth displays & trade-show backdrop walls',
    ],
    specs: {
      turnaround: '24 to 48 Hours',
      materials: 'Weatherproof Heavyweight Flex Banner, Vinyl & Canvas',
      formats: 'Eco-Solvent & UV Curable 1440 DPI High-Density Ink',
    },
    sampleImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'custom-packaging',
    number: '04',
    title: 'Custom Packaging & Labels',
    tagline: 'Retail shelf presence that outshines competitors.',
    description: 'Premium custom packaging engineering, die-cut dielines, and certified label printing for retail consumer goods, food & beverage, cosmetics, and pharmaceuticals.',
    category: 'packaging',
    icon: 'Package',
    items: [
      'Custom product packaging & folding carton artwork',
      'Waterproof roll labels & die-cut custom stickers',
      'Corrugated shipping boxes & luxury rigid unboxing sets',
      'Tamper-evident seals, metallic foil stamping & spot UV',
      'Protective pouch dielines & retail display packaging',
    ],
    specs: {
      turnaround: '3 to 5 Days',
      materials: '350gsm Kraft, Duplex Board, Matte Polypropylene',
      formats: 'Prepress Certified PDF/X-1a with Cut & Crease Vector Lines',
    },
    sampleImage: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'promotional-materials',
    number: '05',
    title: 'Promotional Materials & Branded Merch',
    tagline: 'Keep your brand top-of-mind long after the event.',
    description: 'High-quality branded merchandise, corporate gifts, and promotional items designed with precision embroidery, heat press, or screen printing.',
    category: 'merchandise',
    icon: 'Shirt',
    items: [
      'Branded apparel, custom polo shirts, hoodies & staff uniforms',
      'Corporate gift sets, vacuum insulated water bottles & mugs',
      'Conference materials, custom lanyards & PVC ID cards',
      'Desk & wall promotional calendars with custom branding',
      'Executive leatherette notepads, diaries & branded metal pens',
    ],
    specs: {
      turnaround: '3 to 7 Days (Bulk or Single Run)',
      materials: '100% Combed Cotton, Stainless Steel, Hardcover Bound',
      formats: 'Vector Screen Separations & Precision Laser Engraving Specs',
    },
    sampleImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'digital-tiktok-creative',
    number: '06',
    title: 'TikTok & Digital Motion Graphics',
    tagline: 'Major Graphics special: Thumb-stopping 9:16 viral assets.',
    description: 'Engineered specifically for modern businesses looking to scale on TikTok, Instagram Reels, and social ads. High-retention hooks and animated brand assets.',
    category: 'digital',
    icon: 'Video',
    items: [
      'TikTok vertical 9:16 carousel hooks & visual ad templates',
      'Motion logo reveals & kinetic stinger intros',
      'High-res vector restoration of pixelated old logos',
      'Product launch 3D video teasers and realistic mockups',
      'Social media highlight covers, badges & profile kits',
    ],
    specs: {
      turnaround: '24 to 48 Hours',
      materials: '1080x1920 MP4 (60 FPS), Layered PSD & Canva Links',
      formats: 'Algorithm-Tuned Safe Zones for TikTok & Reels UI',
    },
    sampleImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
  },
];

export const PRINT_FINISHES = [
  {
    name: 'Matte Lamination',
    badge: 'Executive',
    description: 'Non-reflective velvety texture that gives stationery and brochures an understated, luxury feel.',
    bestFor: 'Business cards, Company Profiles, Luxury Packaging',
  },
  {
    name: 'Gloss Lamination',
    badge: 'High Impact',
    description: 'Vibrant, high-shine coating that enhances photographic colors and protects against moisture and dirt.',
    bestFor: 'Event Flyers, Product Catalogues, Fast-Food Menus',
  },
  {
    name: 'Spot UV Varnish',
    badge: 'Premium Touch',
    description: 'Gloss coating applied only to specific logos or patterns, creating a tactile contrast against matte card.',
    bestFor: 'Brand Marks, Packaging Highlights, Executive Cards',
  },
  {
    name: 'Gold / Copper Foil Stamping',
    badge: 'Luxury Finish',
    description: 'Metallic foil hot-stamped into paper stock for unmistakable opulence and high perceived value.',
    bestFor: 'Certificates, High-End Packaging, VIP Invitations',
  },
];
