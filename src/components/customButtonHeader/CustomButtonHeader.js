import React from "react";
import { useTranslation } from "react-i18next";
import "./CustomButtonHeader.scss";

const CustomButtonHeader = ({ label }) => {
  const { t } = useTranslation();
  return (
    <div className="custom-button-header-wrapper">
      <button className="button">{t(`${label}`)}</button>
    </div>
  );
};

export default CustomButtonHeader;
