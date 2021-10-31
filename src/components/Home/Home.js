import React from 'react';
import AboutUs from '../AboutUs/HomeAbout';
import Banar from '../Banar/Banar';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banar></Banar>
            <AboutUs></AboutUs>
            <Services></Services>
            <OurWork></OurWork>
        </div>
    );
};

export default Home;