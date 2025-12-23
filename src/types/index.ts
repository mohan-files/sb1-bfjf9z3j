export interface Project {
  id: string;
  title: string;
  role: string;
  tech: string[];
  description: string;
  highlights: string[];
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
