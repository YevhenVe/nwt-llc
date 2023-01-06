import React from "react";
import CustomButton from "components/customButton/CustomButton";
import { useTranslation } from "react-i18next";
import "./Hiring.scss";

const Hiring = () => {
  const { t } = useTranslation();
  return (
    <div className="hiring-wrapper" name="info">
      <div className="hiring-label">
        <div className="pre-label">{t("hiring")}</div>
        <div className="after-label">{t("info")}</div>
      </div>
      <div className="hiring-content-wrapper">
        <div className="textbox">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
      <div className="download-btn">
        <CustomButton label="download" onClick={() => console.log("clicked")} />
      </div>
    </div>
  );
};

export default Hiring;
