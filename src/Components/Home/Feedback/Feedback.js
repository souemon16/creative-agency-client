import React from 'react';
import './Feedback.css';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';

const Feedback = () => {

    const feedback = [
        {
            image: client1,
            name: 'Nash Patrick',
            position: 'CEO, Manpal',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, esse!'
        },
        {
            image: client2,
            name: 'Miriam Balon',
            position: 'CEO, Tetra',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, esse!'
        },
        {
            image: client3,
            name: 'Bria Malone',
            position: 'CEO, Swift',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, esse!'
        }
    ]
    return (
        <section className="container feedback-section">
            <h1 className="text-center feedback-title">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>

            <div style={{marginTop: '100px'}} className="row">
                {
                    feedback.map(data =>
                        <div className="col-md-3 offset-1 feedback-card d-flex flex-column justify-content-around">
                            <div className='d-flex align-items-center mb-4'>
                                <div className='mr-3'>
                                    <img style={{height: '70px'}} src={data.image} alt="" />
                                </div>
                                <div>
                                    <h5 className='client-name'>{data.name}</h5>
                                    <h6 className="client-position">{data.position}</h6>
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