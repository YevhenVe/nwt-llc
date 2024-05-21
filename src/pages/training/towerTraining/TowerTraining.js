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
                        NWT offers in-house crew members a streamlined training path for getting to work. Our safety manager is certified by Safety LMS to get you Climber, Rescuer and Rigger
                        certified. Our program also gets you the knowledge and insight to get NWSA TTT-1 passed. We have our own training tower, and are equipped to get you up to date on all the
                        latest techniques and technologies.
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
