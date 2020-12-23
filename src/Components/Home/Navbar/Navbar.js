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
                <Link className="link" style={{textDecoration: 'none'}} to='/'><li><a href="#">Home</a></li></Link>
                <Link className="link" to="/order"><li><a href="#">Order Services</a></li></Link>
                <Link className="link" to="/service-list"><li><a href="#">Services</a></li></Link>
                <Link className="link" to='/client-list'><li><a href="#">Admin Panel</a></li></Link>
                <Link className="link" to='/login'><li><button className='btn nav-btn'>Login</button></li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;