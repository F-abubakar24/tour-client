import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/booking')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // manage DELETE
    const handleDelete = id => {
        fetch(`http://localhost:4000/booking/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.confirm("Are You sure, You want to delete")
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    alert('Deleted Successfully');
                }
            })
    }

    return (
        <div className="manage_services_container">
            <h2 className="text-center text-primary">Manage services</h2>
            <div className="service-container">
                {
                    services.map(service => <div className="single-service">
                            <div className="service-img">
                                <img src={service.img} alt="" />
                            </div>
                            <div className="service-info">
                                <h3>{service.name}</h3>
                                <h4>
                                    <span>Price:</span> {"$" + service.price}
                                </h4>
                                <p>{service.description}</p>
                
                                <div className="mb-3 d-flex justify-content-evenly" style={{ textAlign: "center" }}>
                                    <button className="btn btn-warning">Update</button>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;
