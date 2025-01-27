import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-cont'>
            <div className='nav-first'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRZTmyBUndIUSOj3e2ppnTIjT38QyorgwWQ&s" alt="" />
            </div>
            <div className='nav-second'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="https://logowik.com/content/uploads/images/playstation-blue4074.logowik.com.webp" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Games</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">PS5</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">PS4</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Accessories</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Store</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Support</a>
                                </li>
                                
                            </ul>
                            <form class="d-flex gap-4" role="search">
                                <button>Sign In</button>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
