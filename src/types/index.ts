// Portfolio Types
export interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  description?: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  image: string;
  content: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface PersonalInfo {
  name: string;
  profile: string;
  email: string;
  phone: string;
  image: string;
  about: string[];
  skills: Skill[];
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme Types
export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

// Animation Types
export interface AnimationProps {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  children: React.ReactNode;
} 