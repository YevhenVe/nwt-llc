import React from "react";
import { useTranslation } from "react-i18next";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about-wrapper" name="about">
      <div className="about-label">
        <div className="pre-label">{t("about")}</div>
        <div className="after-label">{t("us")}</div>
      </div>
      <div className="about-content">
        <div className="about-content-width">
          <div className="about-text-wrapper">
            <div className="title-text">Lorem ipsum dolor sit amet consectetur. </div>
            <div className="main-text">
              Lorem ipsum dolor sit amet consectetur. Porta a facilisis venenatis vestibulum. Lobortis id commodo
              dictumst consectetur. Urna at quis quam mattis. Amet volutpat ridiculus tortor consectetur viverra id sem
              enim quis.
            </div>
          </div>
          <div className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
