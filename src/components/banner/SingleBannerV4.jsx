import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV4 = ({ banner }) => {
    const { thumb, subTitle, title, text, btnText, btnLink, shape } = banner

    return (
        <>
            <div className="swiper-slides banner-style-four">
                <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/img/banner/${thumb})` }}></div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 banner-box">
                            <div className="content">
                                <h4 className='banner-tag'>{subTitle}</h4>
                                <h2 className='banner-title'>{title}</h2>
                                <p className='banner-text'>{text}</p>
                                <div className="button">
                                    <Link className="btn btn-theme btn-md animation banner-button" to={`/${btnLink}#`}>{btnText}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-four-shape">
                    <img src={`/img/shape/${shape}`} alt="Image Not Found" />
                </div>
            </div>
        </>
    );
};

export default SingleBannerV4;