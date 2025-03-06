import React from 'react';
import AchievementV1Data from '../../jsonData/AchievementV1Data.json'
import SingleAchievementV1 from './SingleAchievement';

const WhyChooseUsV1 = ({ chooseClass }) => {
    return (
        <>
            <div className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5">
                            <div className="achivement-counter" style={{ backgroundImage: 'url(img/shape/banner-4.png)' }}>
                                <div className="shape-animated-left-bottom">
                                    <img src="img/shape/11.png" alt="shape" />
                                </div>
                                <ul>
                                    {AchievementV1Data.map(achievement =>
                                        <SingleAchievementV1 achievement={achievement} key={achievement.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
                            <div className="choose-us-card">
                                <h4 className="sub-title">Why Choose Us</h4>
                                <h2 className="title">Most trusted partner in market research</h2>
                                <p>
                                At Professional Crunches, we don't just provide insights—we deliver real solutions that fuel business success.

                                </p>
                                <ul className="list-check">
                                    <li> Industry Expertise</li>
                                    <li>Data-Driven Insights</li>
                                    <li>Compliance & Auditing Excellence</li>
                                    <li>Nationwide Coverage</li>
                                    <li>Technology-Backed Solutions</li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV1;