import React, { useContext, useState } from 'react';
import './AddServices.css';
import Sidenav from '../../Customer/Sidenav/Sidenav';
import { serviceContext, userContext } from '../../../App';
import AdminSidenav from '../AdminSidenav/AdminSidenav';

const AddServices = () => {

        const [user, setUser] = useContext(userContext);
        const [service, setService] = useContext(serviceContext);
        const [file, setFile] = useState(null);

        const handleBlur = (e) => {
            const newService = {...service};
            newService[e.target.name] = e.target.value;
            setService(newService);
        }

        const handleFileChange = (e) => {
            const newFile = e.target.files[0];
            setFile(newFile);
        }

        const handleSubmit = (e) => {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', service.title)
            formData.append('description', service.description)
          
            fetch('https://fathomless-reaches-81823.herokuapp.com/add-service', {
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
            e.preventDefault();
          }
    return (
        <main className="add-services">
            <AdminSidenav />
            <div className="client-section">
                <div className="client-title d-flex justify-content-between align-items-center">
                    <h4>Services List</h4>
                    <h4> {user.userName} </h4>
                </div>
            <div className="addService-form">
                <form onSubmit={handleSubmit}>
                <div className='pl-4 pt-3' style={{width: '900px', height: '350px', backgroundColor: '#fff', borderRadius: '20px'}}>
                    <label htmlFor='title'>Service Title</label>
                    <input onBlur={handleBlur} style={{width: '500px'}} type="text" name="title" id="title" placeholder="Enter Title" className="form-control" required />
                    <br/>
                    <label htmlFor='description'>Description</label>
                    <textarea onBlur={handleBlur} style={{width: '500px'}} name="description" id="description" cols="30" rows="5" placeholder="Enter Description" className="form-control" required ></textarea>
                    <br/>
                    <label htmlFor="icon">Icon</label>
                    <input onChange={handleFileChange} type="file" name="file" id="file" required/>
                    <br/>
                    <br/>
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </main>
    );
};

export default AddServices;