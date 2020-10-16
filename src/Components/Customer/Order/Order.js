import React, { useContext, useState } from 'react';
import './Order.css';
import Sidenav from '../Sidenav/Sidenav';
import { userContext } from '../../../App';


const Order = () => {
    const [user, setUser] = useContext(userContext);
    const [client, setClient] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = {...client};
        newInfo[e.target.name] = e.target.value;
        setClient(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', client.name)
        formData.append('email', client.email)
        formData.append('course', client.course)
        formData.append('detail', client.detail)
        formData.append('price', client.price)
      
        fetch('http://localhost:5000/addClient', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
        return (
        <main className="order">
                <Sidenav/>
           <div className="order-section">
           <div className="order-title d-flex justify-content-between align-items-center">
                    <h4>Order</h4>
                    <h4> {user.userName} </h4>
                </div>
                <div className="order-form">
                    <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name="name" id="name" placeholder="Your Name / Company Name" className="form-control" required/>
                    <br/> 
                    <input onBlur={handleBlur} type="email" name="email" id="email" placeholder="Your Email Address" className="form-control" required/>
                    <br/>
                    <input onBlur={handleBlur} type="text" name="course" id="course" placeholder="Course Name" className="form-control" required/>
                    <br/>
                    <textarea onBlur={handleBlur} name="detail" id="detail" placeholder="Project Details" cols="30" rows="5" className="form-control" required></textarea>
                    <br/>
                    <input onBlur={handleBlur} type="number" name="price" id="price" placeholder="Price" />
                    <input onChange={handleFileChange} type="file" name="file" id="file" required/>
                    <br/>
                    <br/>
                    <button className='btn main-btn' type="submit">Send</button>
                    </form>
                </div>
           </div>
        </main>
    );
};

export default Order;