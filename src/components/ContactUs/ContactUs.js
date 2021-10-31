import React from 'react';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className="container">
            <div className="mt-5">
                <h2 className="bottom_underline text-center mb-4">Contact Info</h2>
                <div>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="card h-100 contact_i">
                                {/* icon */}
                                <i className="fas fa-home"></i>
                                <div className="card-body">
                                    <p className="card-text">Plot 38, Street 39, UpHill Town,</p>
                                    <p className="card-text">Newyork, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 contact_i">
                                {/* icon */}
                                <i className="fas fa-phone"></i>
                                <div className="card-body">
                                    <p className="card-text">+522 234 5678</p>
                                    <p className="card-text">890 (800) 126 58740</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 contact_i">
                                {/* icon */}
                                <i className="fas fa-envelope"></i>
                                <div className="card-body">
                                    <p className="card-text">info@healthcare-agency.org</p>
                                    <p className="card-text">care@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;