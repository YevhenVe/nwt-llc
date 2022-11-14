import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ label, onClick }) => {
  return (
    <div className="custom-button-wrapper">
      <button className="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
