import ReactMarkdown from 'react-markdown'
import React from 'react'
import styles from './Testimonials.module.css'

const Testimonials = ({testimonials}) => {
    return (
        <div className="container mx-auto px-4 py-4 md:py-10">
            { testimonials.map(testimonial => (
                <div key={ testimonial?.sys.id } className="flex mb-10 md:mb-40 items-center flex-col md:flex-row">
                    <picture
                        className={ `${ styles.picture } flex-shrink-0 relative block w-2/5 md:w-1/4 relative my-3 md:mr-20 md:w-1/6 pointer-events-none select-none` }>
                        { testimonial.fields.image?.fields.file.url.length > 0 && (<img src={ testimonial?.fields.image?.fields.file.url }
                                                                                        className="rounded-full"
                                                                                        alt={ testimonial?.fields.image?.fields.title }/>) }

                    </picture>
                    <div>
                        <h2 className="font-secondary tracking-tighter leading-5 md:text-3xl text-2xl mb-2 font-extrabold text-purple">
                            { testimonial?.fields.name }
                        </h2>
                        <h3 className="font-bold font-primary mb-6">
                            { testimonial?.fields.title }
                        </h3>
                        <div className="font-light font-primary text-base leading-6 tracking-wider">
                            <ReactMarkdown>{ testimonial?.fields.blurb }</ReactMarkdown>
                        </div>
                        <div className="flex flex-row mt-6 font-bold font-primary pr-8">
                            <ReactMarkdown>{ testimonial?.fields.link }</ReactMarkdown>
                        </div>
                    </div>
                </div>
            )) }

        </div>
    )
}

export default Testimonials
