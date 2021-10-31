import React from "react";
import { Carousel } from "react-bootstrap";
import banar1 from "../../images/banner/banar-1.jpg";
import banar2 from "../../images/banner/banar-2.jpg";
import banar3 from "../../images/banner/banar-3.jpg";
import './Banar.css';

const Banar = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h3>Upto 25% off on first booking Car!</h3>
                            <p>Taciti quasi, sagittis excepteur hymenaeos, Minus exercitationem wisi.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h3>Discover the World toGether!</h3>
                            <p>Taciti quasi, sagittis excepteur hymenaeos, Minus exercitationem wisi.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h3>choose your luxury hotel!</h3>
                            <p>Taciti quasi, sagittis excepteur hymenaeos, Minus exercitationem wisi.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banar;
