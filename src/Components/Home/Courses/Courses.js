import React, { useContext } from 'react';
import './Courses.css';
import appDev from '../../../images/icons/service1.png'
import graphics from '../../../images/icons/service2.png';
import webDev from '../../../images/icons/service3.png';
import { useSpring, animated } from 'react-spring';
import {Link, useHistory} from "react-router-dom";
import { serviceContext } from '../../../App';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Courses = () => {
    const [service, setService] = useContext(serviceContext);

    const History = useHistory();
    const handleOrder = () => {
        History.push(`/order`);
    }

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <section className="courses container">
            <h1 className="course-section-title text-center mb-5"> Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className="row mt-3 d-flex justify-content-around align-items-center">

                <animated.div
                    onClick={handleOrder}
                    className="col-sm-3 course-card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}>
                    <img src={appDev} alt="courses-img" className="img-fluid" />
                    <h3 className="courses-title">Web &#38; Mobile design</h3>
                    <p className="courses-description text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p> 
                </animated.div>


                <animated.div
                    onClick={handleOrder}
                    className="col-sm-3 course-card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}>
                    <img src={graphics} alt="courses-img" className="img-fluid" />
                    <h3 className="courses-title">Graphic design</h3>
                    <p className="courses-description text-secondary">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </animated.div>

                <animated.div
                    onClick={handleOrder}
                    className="col-sm-3 course-card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}>
                    <img src={webDev} alt="courses-img" className="img-fluid" />
                    <h3 className="courses-title">Web development</h3>
                    <p className="courses-description text-secondary">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </animated.div>

            </div>
        </section>
    );
};

export default Courses;