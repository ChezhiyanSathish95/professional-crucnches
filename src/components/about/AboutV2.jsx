import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-two">
                            <div className="about-two-thumb">
                                <img src="/img/thumb/4.jpg" alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>10</strong> Years Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
                            <div className="about-two-info">
                                <h4 className="sub-title">About Professional Crunches</h4>
                                <h2 className="title">Your Trusted Partner for Finance Talent & Compliance Solutions</h2>
                                <p className='about-text'>
                                At Professional Crunches, we are at the forefront of transforming physical verification and professional hiring. We bridge the gap between businesses and top-tier finance professionals, offering both short-term assignments and permanent roles. With a network of 20,000+ finance experts, our presence spans 1,000+ cities, covering every state and union territory. Our mission is to empower businesses with expert insights, compliance solutions, and financial consulting to drive growth and efficiency.
                                </p>
                                <div className="about-grid-info">
                                    <Link className="btn-round-animation button-about-st" to="/services#">Discover More <i className="fa-solid fa-arrow-right"></i></Link>
                                    {/* <ul className="list-info-item">
                                        <li>
                                            <h4><Link to="#">Design <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="#">Digital Solution <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="#">Strategy <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li>
                                        <li>
                                            <h4><Link to="#">Branding <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;