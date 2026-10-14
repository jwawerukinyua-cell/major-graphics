import { PricingOption, PricingAddon } from '../types';

export const PRICING_SERVICES: PricingOption[] = [
  {
    id: 'brand-identity-suite',
    name: 'Brand Identity & Master Logo Suite',
    category: 'Identity',
    basePrice: 180,
    deliveryDays: '48 to 72 Hours',
    description: '3 bespoke concept directions, vector master files (.AI, .EPS, .SVG, .PDF, 8K PNG), color palettes & brand guidelines.',
    popular: true,
  },
  {
    id: 'marketing-collateral-print',
    name: 'Corporate Brochure & Collateral Suite',
    category: 'Collateral',
    basePrice: 130,
    deliveryDays: '2 to 3 Days',
    description: 'Multi-page corporate brochure or product catalogue layout, CMYK print-ready with 3mm bleeds, plus interactive digital PDF.',
    popular: true,
  },
  {
    id: 'large-format-banners',
    name: 'Large-Format Roll-Up Banner & Backdrop',
    category: 'Large Format',
    basePrice: 95,
    deliveryDays: '24 to 48 Hours',
    description: 'Heavyweight weatherproof pull-up banner or event step-and-repeat backdrop design, high-density 1440 DPI print specs.',
  },
  {
    id: 'custom-packaging-labels',
    name: 'Custom Product Packaging & Label Dieline',
    category: 'Packaging',
    basePrice: 220,
    deliveryDays: '3 to 5 Days',
    description: 'Folding carton, can, pouch or bottle label dielines with spot UV channels, barcode placement, and 3D photorealistic mockups.',
  },
  {
    id: 'branded-apparel-merch',
    name: 'Branded Apparel & Merch Screenprint Pack',
    category: 'Merchandise',
    basePrice: 125,
    deliveryDays: '2 to 3 Days',
    description: 'Front & back print apparel artwork, screen separation films, embroidery digitization, and 3D garment mockups.',
  },
  {
    id: 'business-cards-stationery',
    name: 'Luxury Business Cards & Stationery Set',
    category: 'Stationery',
    basePrice: 85,
    deliveryDays: '24 to 48 Hours',
    description: 'Double-sided 350gsm card design, letterheads, invoice templates, envelopes with spot UV or gold foil channel layers.',
  },
  {
    id: 'tiktok-social-growth',
    name: 'TikTok Viral Hook & Social Media Kit',
    category: 'Digital',
    basePrice: 140,
    deliveryDays: '48 Hours',
    description: '10x custom 9:16 vertical hook templates, carousel slide layouts, profile picture & banners, and motion title cards.',
  },
];

export const PRICING_ADDONS: PricingAddon[] = [
  {
    id: 'spot-uv-foil',
    name: '✨ Spot UV / Gold Foil Prepress Separation Layers',
    price: 35,
    description: 'Dedicated 100% K vector channel plates for high-end spot varnish or metallic hot-stamp.',
  },
  {
    id: 'express-delivery',
    name: '⚡ Rush Production (Under 24 Hours)',
    price: 50,
    description: 'Dedicated priority queue with direct phone/WhatsApp milestone updates.',
  },
  {
    id: 'mockup-renders',
    name: '📸 4K 3D Photorealistic Packaging / Signage Mockups',
    price: 40,
    description: 'Hyper-realistic digital renders on real-world retail shelves, outdoor billboards, or apparel.',
  },
  {
    id: 'source-files',
    name: '📁 Master Layered Source Files (.AI, .EPS, .PSD)',
    price: 30,
    description: 'Full unmerged Adobe Creative Cloud source files with linked fonts and vectors.',
  },
  {
    id: 'brand-guide-pdf',
    name: '📘 Professional 24-Page Brand Identity Manual',
    price: 65,
    description: 'Clear rules on logo clear space, color codes (HEX, RGB, CMYK, Pantone), and font licensing.',
  },
];

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  timeline: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
}

export const READY_PACKAGES: PackageTier[] = [
  {
    id: 'starter',
    name: 'Corporate Identity Essentials',
    tagline: 'Ideal for launching a new business or establishing professional credibility',
    price: 190,
    timeline: '48 Hours',
    bestFor: 'Startups, SMEs, Independent Professionals',
    features: [
      '3 Bespoke Logo Design Directions',
      'Luxury Business Card Print-Ready Dieline',
      'Official Letterhead & Invoice Template',
      'High-Resolution Master Vectors (AI, EPS, SVG, PNG)',
      'Basic Brand Guidelines & Color Codes',
      '3 Revision Rounds Included',
      '100% Commercial Copyright Sign-Off',
    ],
  },
  {
    id: 'pro-brand',
    name: 'Complete Brand & Print Collateral',
    tagline: 'The full commercial package covering both digital presence and physical print',
    price: 450,
    timeline: '3 to 5 Days',
    popular: true,
    bestFor: 'Growing Companies, Retail Brands, Corporate Rebrands',
    features: [
      'Full Brand Identity System (Primary, Submark, Badge)',
      'Corporate Profile or Tri-fold Brochure (Print Ready)',
      'Pull-up Roll-Up Banner or Outdoor Signage Artwork',
      'Custom Product Packaging or Merch Tech Pack',
      'Comprehensive 24-Page Brand Identity Book (PDF)',
      '5 Photorealistic 3D Product & Signage Mockups',
      'Prepress Verification for Any Commercial Print Shop',
      'Direct WhatsApp Studio Line Access',
    ],
  },
  {
    id: 'monthly-retainer',
    name: 'Monthly Design & Print Retainer',
    tagline: 'Your dedicated creative department for ongoing collateral, social, and print campaigns',
    price: 850,
    timeline: 'Ongoing / 24-48h per request',
    bestFor: 'Agencies, Event Organizers, High-Volume E-Commerce',
    features: [
      'Unlimited Creative & Print Requests (1 active at a time)',
      'Flyers, Catalogues, Banners, Packaging Updates, Social Reels',
      'Lightning 24-48h Turnaround per asset',
      'Direct Access to Senior Graphic Designer',
      'All Master Source Files Included Automatically',
      'Print Vendor Coordination & File Prepress Approval',
      'Pause or Cancel with 7-Day Notice',
    ],
  },
];

export const CURRENCIES = [
  { code: 'KES', symbol: 'KSh ', rate: 130, label: 'KES (KSh)' },
  { code: 'USD', symbol: '$', rate: 1, label: 'USD ($)' },
  { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' },
  { code: 'ZAR', symbol: 'R ', rate: 18.5, label: 'ZAR (R)' },
];
