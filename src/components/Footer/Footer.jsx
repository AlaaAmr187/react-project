import React from 'react'

export default function Footer() {
    return (
        <>
        <footer id='blue'>
            <div className="container py-5">
                <div className="top row row-cols-3 text-center text-white py-5">
                    <div className="col">
                        <div className="">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    </div>
                    <div className="col">
                        <div className="">
                        <h3 className=''>AROUND THE WEB</h3>
                        <div className="media d-flex justify-content-center mt-3  ">
                            <div className=" rounded rounded-circle mx- border border-white border-1 mx-1 d-flex justify-content-center align-items-center">
                                <a href="" className='text-center text-white'><i class="fa-brands fa-facebook"></i></a>
                            </div>
                            <div className=" rounded rounded-circle mx- border border-white border-1 mx-1 d-flex justify-content-center align-items-center">
                                <a href="" className='text-center text-white'><i class="fa-brands fa-twitter"></i></a>
                            </div>
                            <div className=" rounded rounded-circle mx- border border-white border-1 mx-1 d-flex justify-content-center align-items-center">
                                <a href="" className='text-center text-white'><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div className=" rounded rounded-circle mx- border border-white border-1 mx-1 d-flex justify-content-center align-items-center">
                                <a href="" className='text-center text-white'><i class="fa-solid fa-globe"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="">
                        <h3>ABOUT FREELANCER</h3>
                        <p className='max-w'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bottom foter-bg">
                <div className="container">
                    <p className='mb-0 text-white py-4 text-center'>Copyright © Your Website 2021</p>
                </div>
                </div>
        </footer>
        </>
    )
}
