
export interface Props {
    testimonials: Testimonial,
    mentees: Mentee
}


export interface Testimonial {
    image?: string | undefined,
    name: string,
    title: string,
    blurb: string,
    link: string,
}

export interface Mentee {
    image?: string,
    name: string,
    title: string,
    blurb: string,
    link: string,
}
