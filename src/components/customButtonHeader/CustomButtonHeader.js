import React from "react";
import "./CustomButtonHeader.scss";

const CustomButtonHeader = ({ label }) => {
  return (
    <div className="custom-button-header-wrapper">
      <button className="button">{label}</button>
    </div>
  );
};

export default CustomButtonHeader;
