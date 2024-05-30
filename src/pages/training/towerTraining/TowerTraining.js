import React from "react";
import LeftIllustration from "assets/images/towertraining-1.png";
import RightIllustration from "assets/images/towertraining-2.png";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import "./TowerTraining.scss";

const TowerTraining = () => {
    return (
        <>
            <Header />
            <div className="training-wrapper">
                <div className="training-main-title">
                    <div className="training-main-title-content">
                        NWT offers in-house crew members a streamlined training path for getting to work. Our safety manager is certified by Safety LMS and is authorized to provide:
                        <div className="training-main-title-content-list">
                            <ul>
                                <li>Competent Climber</li>
                                <li>Authorized Climber</li>
                                <li>Competent Rescuer</li>
                                <li>Authorized Rescuer</li>
                                <li>Competent Rigging ANSI 10.48</li>
                                <li>Authorized Rigging ANSI 10.48</li>
                            </ul>
                        </div>
                        We have our own training facility and provide practical and theoretical industry training. <br />
                        Our approach helps get you up-to-date on all the latest techniques and technologies.
                    </div>
                </div>
                <div className="training-img-wrapper">
                    <img
                        className="left-illustration"
                        src={LeftIllustration}
                        alt="left illustration"
                    />
                    <img
                        className="right-illustration"
                        src={RightIllustration}
                        alt="right illustration"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TowerTraining;
