import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Sponser = () => {
    return (
        <section style={{marginBottom: '150px'}} className="container mt-5">
            <div className="row d-flex justify-content-around">
                <img style={{width: '140px', height: '36px'}} src={slack} alt="Logos" className="img-fluid"/>
                <img style={{width: '129px', height: '44px'}} src={google} alt="Logos" className="img-fluid"/>
                <img style={{width: '99px', height: '56px'}} src={uber} alt="Logos" className="img-fluid"/>
                <img style={{width: '120px', height: '67px'}} src={netflix} alt="Logos" className="img-fluid"/>
                <img style={{width: '161px', height: '51px'}} src={airbnb} alt="Logos" className="img-fluid"/>
            </div>
        </section>
    );
};

export default Sponser;