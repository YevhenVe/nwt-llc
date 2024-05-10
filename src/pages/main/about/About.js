import React from "react";
import SpecializeCard from "./specializeCard/SpecializeCard";
import SpecializeCardInfo from "./specializeCard/SpecializeCard.json";
import { useTranslation } from "react-i18next";

import "./About.scss";

const About = () => {
    const { t } = useTranslation();
    return (
        <div
            className="about-wrapper"
            name="about"
        >
            <div className="about-label">
                <div className="pre-label">{t("about")}</div>
                <div className="after-label">{t("us")}</div>
            </div>
            <div className="about-content">
                <div className="about-content-width">
                    <div className="about-text-wrapper">
                        <div className="title-text">{t("about title")}</div>
                        <div className="main-text">{t("about text")}</div>
                    </div>
                    <SpecializeCard />
                </div>
            </div>
        </div>
    );
};

export default About;
