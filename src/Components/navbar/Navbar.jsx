import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-cont'>
            <div className='nav-first'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRZTmyBUndIUSOj3e2ppnTIjT38QyorgwWQ&s" alt="" />
            </div>
            <div className='nav-second '>
                <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="https://logowik.com/content/uploads/images/playstation-blue4074.logowik.com.webp" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Games</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PS5</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PS4</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Accessories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Store</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                                
                            </ul>
                            <form className="d-flex gap-4" role="search">
                                <button>Sign In</button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
