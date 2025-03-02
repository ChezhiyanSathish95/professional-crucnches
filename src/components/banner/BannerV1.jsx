import React from 'react';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area" style={{ backgroundImage: 'url(img/shape/1.png)' }}>
                <div className="shape-left-top">
                    <img src="img/shape/2.png" alt="Shape" />
                </div>
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="information">
                                        <ReactWOW delay="500ms" duration="400ms">
                                            <h2 className="fadeInUp">Creative <strong>Solution</strong></h2>
                                        </ReactWOW>
                                        <ReactWOW delay="900ms" duration="400ms">
                                            <p className="fadeInUp">
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily perfectly.
                                            </p>
                                        </ReactWOW>
                                        <ReactWOW delay="1200ms" duration="400ms">
                                            <div className="button mt-40 fadeInUp">
                                                <Link className="btn btn-md btn-gradient animation" to="/contact-us#">Get Started</Link>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <ReactWOW>
                                            <img className="fadeInUp" src="img/thumb/3.jpg" alt="Banner Image" />
                                        </ReactWOW>
                                        <ReactWOW delay="500ms">
                                            <img className="fadeInDown" src="img/thumb/1.jpg" alt="Banner Image" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;