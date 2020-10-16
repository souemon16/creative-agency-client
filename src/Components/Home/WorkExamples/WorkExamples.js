import React from 'react';
import './WorkExamples.css';
import exm1 from '../../../images/carousel-1.png';
import exm2 from '../../../images/carousel-2.png';
import exm3 from '../../../images/carousel-3.png';
import exm4 from '../../../images/carousel-4.png';
import exm5 from '../../../images/carousel-5.png';
import Slider from "react-slick";


const WorkExamples = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="container-fluid example-section d-flex flex-column align-items-center">
            <h1 className="text-center example-title">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            <div className="container">
                <Slider className='col-md-12 col-sm-12 carousel-img' {...settings}>
                    <div>
                        <img src={exm1} alt="carousel-image" className="img-fluid" />
                    </div>
                    <div>
                        <img src={exm2} alt="carousel-image" className="img-fluid" />
                    </div>
                    <div>
                        <img src={exm3} alt="carousel-image" className="img-fluid" />
                    </div>
                    <div>
                        <img src={exm4} alt="carousel-image" className="img-fluid" />
                    </div>
                    <div>
                        <img src={exm5} alt="carousel-image" className="img-fluid" />
                    </div>
                </Slider>

            </div>
        </section>
    );
};

export default WorkExamples;