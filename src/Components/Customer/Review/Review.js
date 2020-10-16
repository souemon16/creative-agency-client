import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidenav from '../Sidenav/Sidenav';
import './Review.css';


const Review = () => {
    const [user, setUser] = useContext(userContext);
    const [review, setReview] = useState({});

    const handleBlur = (e) => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
   
    const handleSubmit = () => {

        fetch('https://fathomless-reaches-81823.herokuapp.com/addReview', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log("Review Added"))

    }
    return (
        <main className="review">
            <Sidenav />
            <div className="review-section">
                <div className="review-title d-flex justify-content-between align-items-center">
                    <h4> Order </h4>
                    <h4> {user.userName} </h4>
                </div>
                <div className="review-form">
                <form action="">
                    <input onBlur={handleBlur} type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                    <br/>
                    <input onBlur={handleBlur} type="text" name="company" id="company" placeholder="Company's Name / Designation" className="form-control"/>
                    <br/>
                    <textarea onBlur={handleBlur} name="description" id="description" placeholder="Description" cols="30" rows="5" className="form-control"></textarea>
                    <br/>
                    <button onClick={handleSubmit} className='btn main-btn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Review;