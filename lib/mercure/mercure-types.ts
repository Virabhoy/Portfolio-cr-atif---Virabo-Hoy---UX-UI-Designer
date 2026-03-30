export interface ExperienceDetail {
  intro: string;
  sections: {
    title: string;
    text: string;
    icon?: string;
  }[];
  highlights: string[];
  tip: string;
}

export interface MercureExperience {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: "Gastronomy" | "Wine & Spirits" | "Cultural Experience";
  city: string;
  country: string;
  hotel: string;
  hotelUrl: string;
  image: string;
  author: string;
  date: string;
  mapPosition?: { top: string; left: string };
  featured?: boolean;
  detail?: ExperienceDetail;
}

export interface MapLocation {
  id: string;
  label: string;
  top: string;
  left: string;
  experienceSlug: string;
}

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}
