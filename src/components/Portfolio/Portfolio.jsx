import React from 'react'
import img1 from '../../assets/poert1.png'
import Star from '../Star/Star'
import BlackStar from '../BlackStar/BlackStar'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portfolio() {
    return (
        <>
        <section className=' py-4'>
            <div className=" container-fluid container-md">
                <h2 className='fs-1 text-center fw-bold text-uppercase mb-3'>portfolio component</h2>
                <BlackStar/>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-1">
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1"><i class="fa-solid fa-plus"></i></div>
                                <img src={img1} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1"><i class="fa-solid fa-plus"></i></div>
                                <img src={img2} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1"><i class="fa-solid fa-plus"></i></div>
                                <img src={img3} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1"><i class="fa-solid fa-plus"></i></div>
                                <img src={img1} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1 bott"><i class="fa-solid fa-plus"></i></div>
                                <img src={img2} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="inner position-relative rounded rounded-3 overflow-hidden">
                            <div className="layer position-absolute top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center display-1"><i class="fa-solid fa-plus"></i></div>
                                <img src={img3} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
