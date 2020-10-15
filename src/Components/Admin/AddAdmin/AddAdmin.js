import React from 'react';
import AdminSidenav from '../AdminSidenav/AdminSidenav';
import './AddAdmin.css';

const AddAdmin = () => {
    return (
        <main className="addAdmin">
            <AdminSidenav />
            <div className="addAdmin-section">
                <div className="addAdmin-title d-flex justify-content-between align-items-center">
                    <h4>Add Admin</h4>
                    <h4> Name </h4>
                </div>
                <div className="addAdmin-form">
                    <form action="">
                    <div className='pl-4 pt-3' style={{width: '900px', height: '300px', backgroundColor: '#fff', borderRadius: '20px'}}>
                    <label htmlFor='email'>Email</label>
                    <input style={{width: '450px'}} type="email" name="email" id="email" placeholder="jon@gmail.com" className="form-control"/>
                    <br/>
                    <button className='btn btn-success' type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddAdmin;