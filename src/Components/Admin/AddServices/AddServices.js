import React from 'react';
import './AddServices.css';
import AdminSidenav from '../AdminSidenav/AdminSidenav';

const AddServices = () => {
    return (
        <main className="add-services">
            <AdminSidenav/>
            <div className="client-section">
                <div className="client-title d-flex justify-content-between align-items-center">
                    <h4>Services List</h4>
                    <h4> Name </h4>
                </div>
            <div className="addService-form">
                <form action="">
                <div className='pl-4 pt-3' style={{width: '900px', height: '350px', backgroundColor: '#fff', borderRadius: '20px'}}>
                    <label htmlFor='title'>Service Title</label>
                    <input style={{width: '500px'}} type="text" name="title" id="title" placeholder="Enter Title" className="form-control"/>
                    <br/>
                    <label htmlFor='description'>Description</label>
                    <textarea style={{width: '500px'}} name="description" id="description" cols="30" rows="5" placeholder="Enter Description" className="form-control"></textarea>
                    <br/>
                    <label htmlFor="icon">Icon</label>
                    <input type="file" name="file" id="file"/>
                    <br/>
                    <br/>
                    <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </main>
    );
};

export default AddServices;