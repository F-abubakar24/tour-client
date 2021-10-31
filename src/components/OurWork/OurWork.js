import React from 'react';
import './OurWork.css';
import img1 from '../../images/our-work/img-1.jpg'
import img2 from '../../images/our-work/img-2.jpg'
import img3 from '../../images/our-work/img-3.jpg'
import img4 from '../../images/our-work/img-4.jpg'

const OurWork = () => {
    return (
        <div id="works" className="container our_works">
            <h2>Our Work</h2>
            <div className="row">
                <p className=" col-lg-8 col-md-12 col-sm-12">Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat.</p>
                <div className=" col-lg-4 col-md-12 col-sm-12 px-5">
                    <button className="float-end work_btn">View All</button>
                </div>
            </div>
            <div className="work_gallery mt-2 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid res_img" src={img1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-sm-12 img-fluid res_img"><img src={img2} alt="" /></div>
                            <div className=" col-lg-6 col-md-12 col-sm-12 img-fluid res_img"><img src={img3} alt="" /></div>
                        </div>
                        <div className="row mt-2">
                            <img className="img-fluid res_img" src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;