import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-shore-74082.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // manage DELETE
    const handleDelete = id => {
        fetch(`https://stormy-shore-74082.herokuapp.com/booking/${id}`, {
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
        <div className="container orders">
            <h2 className="mb-5 text-center">Manage Orders</h2>
            <Row xs={1} md={2} className="g-4">
            {services.map(data => <Col>
                    <Card className="single_order">
                        <Card.Body>
                        <Card.Title>{data?.name}</Card.Title>
                        <Card.Text>
                            <h6>{data?.email}</h6>
                            <div className="my-2">
                                <span className="d-block"><span className="fw-bolder">City: </span>{data?.city}</span>
                                <span className="d-block"><span className="fw-bolder">Phone: </span>{data?.phone}</span>
                            </div>
                            <div className="mb-3 mt-4 d-flex justify-content-evenly" style={{ textAlign: "center" }}>
                                <button className="btn btn-warning">Update</button>
                                <button onClick={() => handleDelete(data?._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </div>
    );
};

export default ManageOrders;
