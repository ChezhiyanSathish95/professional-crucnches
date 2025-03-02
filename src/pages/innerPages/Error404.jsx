import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import Error404Content from '../../components/error404/Error404Content';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV4 from '../../components/header/HeaderV4';

const Error404 = () => {
    return (
        <>
            <HeaderV4 />
            <Error404Content />
            <FooterV1 />
        </>
    );
};

export default Error404;