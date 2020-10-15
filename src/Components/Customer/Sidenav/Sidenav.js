import React from 'react';
import './Sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faArchive, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import logo from '../../../images/logos/logo.png';

const Sidenav = () => {
    return (
        <nav className="sidenav">
            <div className="logo"><Link to='/'><img src={logo} alt="Logo" ></img></Link></div>
                <div className="sidenav-links mt-5">
                    <Link to='/order'><li>  <FontAwesomeIcon className='mr-2' icon={faShoppingCart} /> Order</li></Link>
                    <Link to='/review'><li>  <FontAwesomeIcon className='mr-2' icon={faCommentAlt} /> Review  </li></Link>
                    <Link to='/service-list'><li> <FontAwesomeIcon className='mr-2' icon={faArchive} /> Service List </li> </Link>
                </div>
        </nav>
    );
};

export default Sidenav;