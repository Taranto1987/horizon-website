export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'colchao' | 'travesseiro' | 'protetor' | 'acessorio';
  price: {
    from?: number;
    to?: number;
    currency: 'BRL';
  };
  features: string[];
  specifications: {
    [key: string]: string;
  };
  images: string[];
  inStock: boolean;
  featured: boolean;
  warranty?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  instagram: string;
  website: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode?: string;
  };
  googleMaps?: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  product?: string;
}