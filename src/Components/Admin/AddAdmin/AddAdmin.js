import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidenav from '../../Customer/Sidenav/Sidenav';
import './AddAdmin.css';

const AddAdmin = () => {

    const [user, setUser] = useContext(userContext);
    const [admin, setAdmin] = useState("");
    console.log(admin);

    const handleBlur = (e) => {
        // const newAdmin = document.getElementById('email').value;
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleAddAdmin = (e) => {
        
        fetch('https://fathomless-reaches-81823.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => console.log("Admin Added"))

            e.preventDefault();
    }
    return (
        <main className="addAdmin">
            <Sidenav />
            <div className="addAdmin-section">
                <div className="addAdmin-title d-flex justify-content-between align-items-center">
                    <h4>Add Admin</h4>
                    <h4> {user.userName} </h4>
                </div>
                <div className="addAdmin-form">
                    <form action="">
                    <div className='pl-4 pt-3' style={{width: '900px', height: '300px', backgroundColor: '#fff', borderRadius: '20px'}}>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleBlur} style={{width: '450px'}} type="email" name="email" id="email" placeholder="jon@gmail.com" className="form-control" required/>
                    <br/>
                    <button onClick={handleAddAdmin} className='btn btn-success' type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddAdmin;