export interface Testimonial {
  image?: string | undefined;
  name: string;
  title: string;
  blurb: string;
  link: string;
  map(element: (testimonial) => JSX.Element): string;
}

export interface Mentee {
  image?: string;
  name: string;
  title: string;
  blurb: string;
  link: string;
  map(element: (testimonial) => JSX.Element): string;
}

export interface Props {
  testimonials?: Testimonial;
  mentees?: Mentee;
}
