export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Zap' | 'BarChart' | 'PenTool' | 'Smartphone';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}