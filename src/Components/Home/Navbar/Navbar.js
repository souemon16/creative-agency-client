import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>
            <ul>
                <Link style={{textDecoration: 'none'}} to='/'><li><a href="#">Home</a></li></Link>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contact Us</a></li>
                <Link to='/login'><li><button className='btn nav-btn'>Login</button></li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;