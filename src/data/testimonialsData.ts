export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
  result: string;
}

export interface TikTokVideoCard {
  id: string;
  title: string;
  views: string;
  likes: string;
  duration: string;
  category: string;
  thumbnail: string;
  description: string;
}

export const TIKTOK_VIDEOS: TikTokVideoCard[] = [
  {
    id: 'vid-1',
    title: 'Watch an amateur blurry JPEG transform into an 8K Master Vector',
    views: '248.5K',
    likes: '19.2K',
    duration: '0:42',
    category: 'Vector Speedart',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    description: 'Fixing anchor points, precision bezier curves, and testing on dark/light background variants in Illustrator.',
  },
  {
    id: 'vid-2',
    title: 'Streetwear Brand Identity: From rough pen sketch to 3D Hoodie Render',
    views: '382.1K',
    likes: '34.8K',
    duration: '0:58',
    category: 'Merch Design',
    thumbnail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    description: 'Breakdown of custom distress brushes and typography kerning that made this drop sell out instantly.',
  },
  {
    id: 'vid-3',
    title: 'Why your current logo is killing your sales (Fix these 3 mistakes)',
    views: '194.0K',
    likes: '15.6K',
    duration: '0:35',
    category: 'Brand Advice',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    description: 'Testing contrast, small-screen legibility, and memorable silhouette theory.',
  },
  {
    id: 'vid-4',
    title: 'Designing an electric energy drink can in 3D: Dieline to 4K render',
    views: '165.7K',
    likes: '12.4K',
    duration: '0:48',
    category: 'Packaging 3D',
    thumbnail: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80',
    description: 'Prepress print specifications, spot varnish channels, and photorealistic lighting setup.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Founder & Creative Director',
    company: 'Apex Division Streetwear',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Major Graphics took our vague vision and turned it into an explosive brand identity. Our first apparel drop sold out in under 48 hours. The source files were pristine, separated for our screenprinter without a single hiccup.',
    rating: 5,
    project: 'Full Brand Suite & Merch',
    result: '1,200 units sold in 48h',
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Marketing Head',
    company: 'Basswave Music Group',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'We had an urgent festival lineup announcement and needed both huge 6x3m billboard vectors and animated TikTok promo cards in under 48 hours. Major Graphics delivered ahead of time and it stopped people in their tracks.',
    rating: 5,
    project: 'Event Poster & Social Suite',
    result: 'Record ticket sales in 3 days',
  },
  {
    id: 'test-3',
    name: 'Derrick Ochieng',
    role: 'Managing Partner',
    company: 'Kinetix Athletics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Before Major Graphics, we were using a generic logo from 2015 that looked completely amateur on our gym equipment. The new identity gave us instant authority. We saw a 42% spike in memberships immediately after re-branding.',
    rating: 5,
    project: 'Complete Gym Rebranding',
    result: '+42% New Memberships',
  },
  {
    id: 'test-4',
    name: 'Sarah Lindqvist',
    role: 'Co-Founder',
    company: 'Solstice Botanicals',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Communication was effortless via WhatsApp. They understood the high-end luxury feel we wanted without endless back-and-forth revisions. Our cosmetics line was even featured in British Vogue thanks to the packaging aesthetics!',
    rating: 5,
    project: 'Packaging & Luxury Identity',
    result: 'Featured in British Vogue',
  },
];
