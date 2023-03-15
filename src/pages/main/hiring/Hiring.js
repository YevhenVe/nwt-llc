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
        <div className="textbox">{t("onboarding package_title")}</div>
      </div>
      <div className="download-btn">
        <a
          href="https://drive.google.com/drive/folders/1E6Rh0KKtkPtl1bWjdkT5Q9yvyn8RlNYQ?usp=share_link"
          target="blank"
        >
          <CustomButton label={t("hiring_button_ind")} />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1ugaOt8YTJimZnLLUAGovoIswx4LdHw94?usp=share_link"
          target="blank"
        >
          <CustomButton label={t("hiring_button_sub")} />
        </a>
        <div className="child" />
      </div>
    </div>
  );
};

export default Hiring;
