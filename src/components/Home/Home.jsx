import React from 'react'
import img from '../../assets/avataaars.svg'
import Star from '../Star/Star'
export default function Home() {
    return (
        <>
            <section className='home-bg'>
                <div className="container py-5">
                    <br />
                    <div className='d-flex justify-content-center align-items-center pb-5'>
                        <img src={img} alt="" className='img-w' />
                    </div>
                    <h2 className='fs-1 text-center text-white fw-bold text-uppercase mb-3'>start Framework</h2>
                    <Star/>
                    <p className='text-white text-center mt-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    )
}
