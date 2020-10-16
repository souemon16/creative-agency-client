import React from 'react';
import './HeaderMain.css';
import sideImg from '../../../images/logos/Frame.png';
import { useHistory } from 'react-router-dom';

const HeaderMain = () => {

    const History = useHistory()
    const handleSearch = () => {
        History.push(`/order`);
    };
    return (
        <main className='container main-header mt-4'>
        <div className="row d-flex justify-content-around align-items-center">
        <div className="col-md-5 col-sm-11">
            <h1 className="main-title">
                Let’s Grow Your
                Brand To The
                Next Level
        </h1>
            <p className='main-p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button onClick={handleSearch} className="btn main-btn">Hire Us</button>
        </div>
        <div className="col-md-6 col-sm-12">
        <img className='img-fluid' style={{width: '624.6px', height: '422.8px'}} src={sideImg} alt="side-img"/>
        </div>
        </div>
    </main>
    );
};

export default HeaderMain;