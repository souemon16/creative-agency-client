import React, { useContext, useEffect, useState } from 'react';
import './AdminSidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import logo from '../../../images/logos/logo.png';
import { userContext } from '../../../App';

const AdminSidenav = () => {

    const [user, setUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState('');

    useEffect(() => {
        fetch('https://fathomless-reaches-81823.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.userEmail })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
            <nav className="sidenav">
            <div className="logo"><Link to='/'><img src={logo} alt="Logo" ></img></Link></div>
            <div className="sidenav-links mt-5">
                 <div>
                    <Link to='/client-list'><li>  <FontAwesomeIcon className='mr-2' icon={faArchive} /> Service List</li></Link>
                    <Link to='/add-services'><li>  <FontAwesomeIcon className='mr-2' icon={faPlus} /> Add Services  </li></Link>
                    <Link to='/add-admin'><li> <FontAwesomeIcon className='mr-2' icon={faUserPlus} /> Make Admin </li> </Link>
                </div>
            </div>
        </nav>
    );
};

export default AdminSidenav;