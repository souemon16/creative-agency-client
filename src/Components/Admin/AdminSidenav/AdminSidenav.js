import React from 'react';
import './AdminSidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArchive, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import logo from '../../../images/logos/logo.png';

const AdminSidenav = () => {
    return (
        <nav className="sidenav">
            <div className="logo"><Link to='/'><img src={logo} alt="Logo" ></img></Link></div>
                <div className="sidenav-links mt-5">
                    <Link to='/client-list'><li>  <FontAwesomeIcon className='mr-2' icon={faArchive} /> Service List</li></Link>
                    <Link to='/add-services'><li>  <FontAwesomeIcon className='mr-2' icon={faPlus} /> Add Services  </li></Link>
                    <Link to='/add-admin'><li> <FontAwesomeIcon className='mr-2' icon={faUserPlus} /> Make Admin </li> </Link>
                </div>
        </nav>
    );
};

export default AdminSidenav;