export type Address = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type OpeningHourEntry = {
  day: string;
  hours: string;
  closed?: boolean;
};

export type DentalService = {
  id: string;
  name: string;
  description: string;
  image?: string;
  slug: string;
  active: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  credential: string;
  specialty: string;
  image?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  openByDefault?: boolean;
};

export type TrustStat = {
  id: string;
  value: string;
  label: string;
};

export type DifferentialItem = {
  id: string;
  title: string;
  description: string;
};

export type GalleryImage = {
  id: string;
  tag: string;
  image?: string;
  alt: string;
};
