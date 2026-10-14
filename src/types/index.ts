export type ProjectCategory = 
  | 'all'
  | 'brand-identity'
  | 'social-media'
  | 'packaging-merch'
  | 'print-flyers'
  | 'vector-restoration';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  aspectRatio: string;
  description: string;
  year: string;
  turnaround: string;
  deliverables: string[];
  colors: string[];
  fontVibe: string;
  impactStat?: string;
  featured?: boolean;
}

export interface PricingOption {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  deliveryDays: string;
  description: string;
  popular?: boolean;
}

export interface PricingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface LeadSubmission {
  id: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  stylePreferences: string[];
  description: string;
  selectedAddons: string[];
  estimatedTotal: number;
  submittedAt: string;
}
