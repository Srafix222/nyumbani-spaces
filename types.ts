export interface Property {
  id: string;
  title: string;
  price: number;
  currency: 'KES';
  location: string;
  county: string;
  bedrooms: number;
  bathrooms: number;
  main_image: string;
  images: string[];
  lqip?: string;
  type: 'Apartment' | 'Bungalow' | 'Maisonette' | 'Villa';
  status: 'available' | 'sold';
  listed_date: string;
  description: string;
  agent_id: string;
  averageRating?: number;
  reviewCount?: number;
  lat: number;
  lng: number;
}

export interface Agent {
  id: string;
  name: string;
  photo: string;
  lqip?: string;
  phone: string;
  email: string;
  organization: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  lqip?: string;
  author: string;
  date: string;
  content: string;
}

export interface Review {
  id: string;
  propertyId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}