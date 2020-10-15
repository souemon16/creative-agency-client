import React, { useContext, useState, useEffect } from 'react';
import './ClientList.css';
import AdminSidenav from '../AdminSidenav/AdminSidenav';
import { userContext } from '../../../App';

const ClientList = () => {

    const [user, setUser] = useContext(userContext);
    const [client, setClient] = useState({});
    
    useEffect(() => {
        fetch('http://localhost:5000/client-list')
        .then(res => res.json())
        .then(data => setClient(data))
    }, [])
    console.log(client);
    return (
        <main className="client-list">
            <AdminSidenav />
            <div className="client-section">
                <div className="client-title d-flex justify-content-between align-items-center">
                    <h4>Services List</h4>
                    <h4> {user.userName} </h4>
                </div>
                <div className="client-table">
                    <table className="table">
                        <thead style={{borderRadius: '10px'}} class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                       {
                           client.map(data => 
                            <tbody>
                            <tr>
                                <th scope="row">{data.name}</th>
                                <td>{data.email}</td>
                                <td>{data.course}</td>
                                <td>{data.detail}</td>
                                <td>
                                    <select id="status" name="Service Status">
                                        <option className="text-warning" value="volvo">On Going</option>
                                        <option className="text-danger" value="saab">Pending</option>
                                        <option className="text-success" value="fiat">Done</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                            )
                       }
                    </table>
                </div>
            </div>
        </main>
    );
};

export default ClientList;