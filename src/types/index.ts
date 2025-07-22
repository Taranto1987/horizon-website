export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  specifications: {
    height: string;
    density?: string;
    material: string;
    warranty: string;
  };
  category: 'colchao' | 'travesseiro' | 'protetor';
  available: boolean;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  googleMaps: string;
  website: string;
}