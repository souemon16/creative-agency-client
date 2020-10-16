import React, { useEffect, useState } from 'react';
import './Feedback.css';

const Feedback = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review-list')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])

    return (
        <section className="container feedback-section">
            <h1 className="text-center feedback-title">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>

            <div style={{marginTop: '100px'}} className="row">
                {
                    feedback.map(data =>
                        <div className="col-lg-4 col-md-6 mb-3 offset-1 feedback-card d-flex flex-column justify-content-around">
                            <div className='d-flex align-items-center mb-4'>
                                <div className='mr-3'>
                                    <img style={{height: '70px'}} src={data.image} alt="" />
                                </div>
                                <div>
                                    <h5 className='client-name'>{data.name}</h5>
                                    <h6 className="client-position">{data.company}</h6>
                                </div>
                            </div>
                            <div>
                                <p className="text-secondary">{data.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Feedback;