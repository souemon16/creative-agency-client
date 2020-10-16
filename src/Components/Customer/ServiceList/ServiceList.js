import React, { useContext, useEffect, useState } from 'react';
import './ServiceList.css';
import Sidenav from '../Sidenav/Sidenav';
import graphics from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png';
import { userContext } from '../../../App';

const ServiceList = () => {
    const [user, setUser] = useContext(userContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course-list?email=${user.userEmail}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <main className="service-list">
            <Sidenav />
            <div className="service-list-section">
                <div className="service-list-title d-flex justify-content-between align-items-center">
                    <h4>Your Services</h4>
                    <h4> {user.userName} </h4>
                </div>
                <section className="service-section">
                    {
                        services.map(data => 
                            <div className="task">
                                <div className="d-flex justify-content-around align-items-center pt-3">
                                    <img src={`data:image/png;base64,${data.image.img}`} alt="task-Image"/>
                                    <span className="action badge badge-warning">{data.action}</span>
                                </div>
                            <h5 className="pl-5">{data.course}</h5>
                            <p className="text-secondary pl-5">{data.detail}</p>
                            </div>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default ServiceList;