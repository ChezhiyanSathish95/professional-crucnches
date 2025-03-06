import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV2 from '../../components/about/AboutV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV4 from '../../components/header/HeaderV4';
import ProcessV1 from '../../components/process/ProcessV1';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';

const AboutUs = () => {
    return (
        <>
            <HeaderV4 />
            <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" />
            <AboutV2 />
            <WhyChooseUsV2 />
            <ProcessV1 processClass="default-padding" />
            <WhyChooseUsV1 />
            <TeamV2 bgColor="bg-gray" />
            <TestimonialV2 />
            <FooterV1 />
        </>
    );
};

export default AboutUs;