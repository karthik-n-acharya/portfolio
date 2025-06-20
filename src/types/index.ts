export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: 'work' | 'education';
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    impact?: string;
  };
}

export interface IExperienceData{
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  icon: string;
  clients: string | null;
}