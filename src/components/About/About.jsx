import React from 'react'
import Star from '../Star/Star'

export default function About() {
    return (
        <>
            <section className='home-bg py-5'>
                <div className="container py-5 my-4">
                    <h2 className='fs-1 text-center text-white fw-bold text-uppercase mb-0 p-5'>about component</h2>
                    <Star/>
                    <div className="my-5">
                        <div className="row row-cols-2 mb-5">
                        <div className="col text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        <div className="col text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
