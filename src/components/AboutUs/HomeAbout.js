import React from 'react';
import './AboutUs.css';

const HomeAbout = () => {
    return (
        <div id="aboutUs" className="container about_us_home">
            <h2 className="mb-4">About Us</h2>
            <div className="d-flex justify-content-center row">

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                    <img className="img-fluid me-3" src="https://i.ibb.co/TRSQXw5/12.png" alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <h4>
                        Praesent massa orci, condimen vitae mattis quis, imperdiet
                        non massa.
                    </h4>
                    <p>
                        Health care in the United States is provided by many
                        distinct organizations, made up of insurance companies,
                        healthcare providers, hospital systems, and independent
                        providers. ... Healthcare coverage is provided through a
                        combination of private health insurance
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HomeAbout;