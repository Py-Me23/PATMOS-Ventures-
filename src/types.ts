export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface NavigationLink {
  id: PageId;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string; // Used to fetch from Lucide dynamically
  summary: string;
  detailedDescription: string;
  features: string[];
  denmarkOperations: string;
  ghanaOperations: string;
  bgGradient: string;
}

export interface OfficeBranch {
  id: string;
  country: 'Denmark' | 'Ghana';
  regNumber?: string;
  city: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  workingHours: string;
  mapsEmbedUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

export interface ExecutiveItem {
  id: string;
  name: string;
  role: string;
  location?: string;
  bio: string;
  email?: string;
  flag?: string; // E.g., "🇩🇰" or "🇬🇭"
}
