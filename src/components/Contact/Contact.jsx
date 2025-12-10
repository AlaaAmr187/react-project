import React from 'react'
import BlackStar from '../BlackStar/BlackStar'

export default function Contact() {
    return (
        <>
        <section>
            <div className="container">
                <h2 className='fs-1 text-center fw-bold text-uppercase mb-0 p-3'>conatct section</h2>
                <BlackStar/>
                <div className="contacts d-flex justify-content-center">
                    <form action="" className='d-flex flex-column align-items-center my-5 w-50'>
                        <input type="text" className='w-100 p-2 rounded my-4' placeholder='userName' />
                        <input type="text" className='w-100 p-2 rounded my-4' placeholder='userAge' />
                        <input type="email" className='w-100 p-2 rounded my-4'placeholder='userEmail' />
                        <input type="password" className='w-100 p-2 rounded my-4' placeholder='userPassword' />
                        <button className=' align-self-start px-3 py-2 rounded rounded-2 text-white border-0'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}
