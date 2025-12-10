import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4" id='blue'>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2 text-white text-uppercase" to={'/'}>Start Framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item px-3 fw-bold">
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" to={'/about'}>about</NavLink>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <NavLink className="nav-link text-white text-uppercase" to={'/portfolio'}>portfolio</NavLink>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <NavLink className="nav-link text-white text-uppercase" to={'/contact'}>contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
