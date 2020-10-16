import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section container-fluid">
            <div style={{paddingTop: '50px'}} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="footer-title">
                        Let us handle your <br/> project, professionally.
                        </h1>
                        <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
                    </div>

                    <div className="col-md-6 mb-5">
                        <input type="email" name="email" id="email" placeholder="Your email address" className="form-control input-sm"/>
                        <br/>
                        <input type="text" name="name" id="name" placeholder="Your name / Company Name" className="form-control"/>
                        <br/>
                        <textarea name="message" placeholder="Your message" id="" cols="30" rows="10" className="form-control input-sm"></textarea>
                        <br/>
                        <button className="btn main-btn">Submit</button>
                        <br/>
                    </div>
                </div>
                <small className="copyright-title text-center">copyright Orange labs 2020</small>
            </div>
        </footer>
    );
};

export default Footer;