import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ServiceV2Data from '../../jsonData/ServiceV2Data.json'
import SingleServiceV2 from './SingleServiceV2';

const ServicesV2 = () => {
    return (
        <>
            <div className="services-style-two-area bg-gray default-padding bottom-less st-home-services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mb-30 ">
                            <div className="service-style-two-heading bg-theme bg-cover text-light st-services-color">
                                <h5 className="sub-title">Our Services</h5>
                                <h2 className="title">Comprehensive Financial & Compliance Solutions</h2>
                                <div className="button-border-length mt-35 st-ser-btn">
                                    <Link to="/services#" className="btn-arrow-length">See All</Link>
                                </div>
                            </div>
                        </div>
                        {ServiceV2Data.map(service =>
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;