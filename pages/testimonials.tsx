import * as contentful from 'contentful'
import React from 'react'
import Testimonials from '../components/Testimonials/Testimonials'
import Header from '../components/Header/Header'
import Head from 'next/head'
import { Props } from '../components/Testimonials/Testimonials.types'

export const TestimonialsPage: React.FC<Props> = ({testimonials, mentees}) => {
    return <>
        <Head>
            <title>Kapeesh.dev | Testimonials</title>
            <meta name="description" content="What my colleagues and mentees have shared" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header title={'TestimonialsMentorshipTestimonialsMentorship'} pageTitle={'Testimonials'} subtitle={'Learning Together'}/>
        <Testimonials testimonials={ testimonials }/>

        <Header title={'MenteesMenteesMenteesMenteesMentees'} pageTitle={'Mentees'}/>
        <Testimonials testimonials={ mentees }/>
    </>
}

export async function getStaticProps() {
    const client = contentful.createClient({
                                               space: process.env.CONTENTFUL_SPACE_ID,
                                               accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
                                           })

    const testimonials = await client
        .getEntries({content_type: 'testimonial'})
        .then((response) => response.items);

    const mentees = await client
        .getEntries({content_type: 'mentees'})
        .then((response) => response.items);
    return {
        props: {
            testimonials,
            mentees
        }
    }
}


export default TestimonialsPage
