export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  features: string[];
  category: 'colchao' | 'travesseiro' | 'protetor';
  size?: string[];
  warranty?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  state: string;
  instagram: string;
  googleMaps: string;
  website: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}