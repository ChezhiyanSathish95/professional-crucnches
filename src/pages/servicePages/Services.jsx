import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesV1 from '../../components/services/ServicesV1';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';
import PriceV1 from '../../components/price/PriceV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ProcessV1 from '../../components/process/ProcessV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV5 from '../../components/header/HeaderV5';
import HeaderV4 from '../../components/header/HeaderV4';

const Services = () => {
    return (
        <>
           <HeaderV4 />
            <BreadCrumb breadCrumb="services" title1="Comprehensive Financial &
" title2="Compliance Solutions" />
            <ServicesV1 />
            {/* <WhyChooseUsV1 />
            <PriceV1 priceClass="default-padding bg-gray" />
            <TestimonialV1 />
            <ProcessV1 processClass="default-padding" /> */}
            <FooterV1 />
        </>
    );
};

export default Services;