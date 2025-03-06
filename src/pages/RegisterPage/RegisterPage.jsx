import React from 'react'
import '../../assets/css/newstyle.css'
import RegisterForm from '../../components/form/RegisterForm';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV4 from '../../components/header/HeaderV4';

const RegisterPage = () => {
    return (
        <>
            <HeaderV4 />
            <BreadCrumb breadCrumb="Register" title1="Get Started with Expert Financial &" title2="Compliance Solutions Today!" bottomSpace="pb-0" />
            <RegisterForm />
            <FooterV1 />
        </>
    );
}

export default RegisterPage