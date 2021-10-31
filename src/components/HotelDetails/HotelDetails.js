import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import './HotelDetails.css'

const HotelDetails = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState();
    const { user } = useAuth()
    const [users, setUsers] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateUser = { ...users };
        updateUser.name = updateName;
        setUsers(updateUser);
    }

    // send users booking form data
    const onSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:4000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Order processed Successfully");
    
                    reset();
                }
            });
    };
    
    // load single users data
    useEffect(() => {
        fetch(`http://localhost:4000/hotels/${hotelId}`)
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [])

    // const { description, img, price, title} = hotel;
    

    return (
        <div className="container">
            <div className="row">



                <div className="single-service p-0 col-sm-12 col-md-12 col-lg-6" style={{marginTop: "100px", marginBottom: "100px"}}>
                    <div className="service-img">
                        <img className="img-fluid" src={hotel?.img} alt="" />
                    </div>
                    <div className="service-info p-3">
                        <h3>{hotel?.title}</h3>
                        <h4>
                            <span>Price:</span> {"$" + hotel?.price}
                        </h4>
                        <p>{hotel?.description}</p>
                    </div>
                </div>




                <div className="col-sm-12 col-md-12 col-lg-6 booking_form">
                    <div className="row single_service_wrapper">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto booking_wrapper">
                            <div className=" text-center">
                                <h2>Book Now</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-floating mb-3 mt-4">
                                        <input {...register("name")} value={user?.displayName || ""} onChange={handleNameChange} type="text" className="form-control" id="floatingInput" required placeholder=" "/>
                                        <label htmlFor="floatingInput">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input {...register("email")} value={user.email} type="email" className="form-control" id="floatingInput" required placeholder=" "/>
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input {...register("city")} type="text" className="form-control" id="floatingInput" required placeholder=" "/>
                                        <label htmlFor="floatingInput">City</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input {...register("phone")} type="tel" className="form-control" id="floatingInput" placeholder=" "/>
                                        <label htmlFor="floatingInput">Phone</label>
                                    </div>
                                    {/* <p className="text-danger">{error || userError}</p> */}
                                    <input className="work_btn" type="submit" value="Book" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HotelDetails;
