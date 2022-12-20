import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ label, onClick, className }) => {
  return (
    <div className="custom-button-wrapper">
      <button className={`button ${className}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
