import React, { useContext } from 'react';
import './ServiceList.css';
import Sidenav from '../Sidenav/Sidenav';
import graphics from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png';
import { userContext } from '../../../App';

const ServiceList = () => {
    const [user, setUser] = useContext(userContext);
    const services = [ 
        {
            name: 'Graphics Design',
            image: graphics,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            action: 'Pending'
        },
        {
            name: 'Web development',
            image: webDev,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            action: 'Done'
        },
        {
            name: 'Graphics Design',
            image: graphics,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            action: 'Pending'
        },
        {
            name: 'Web development',
            image: webDev,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            action: 'Done'
        }
    ]
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
                                    <img src={data.image} alt="task-Image"/>
                                    <span className="action badge badge-warning">{data.action}</span>
                                </div>
                            <h5 className="pl-5">{data.name}</h5>
                            <p className="text-secondary pl-5">{data.description}</p>
                            </div>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default ServiceList;