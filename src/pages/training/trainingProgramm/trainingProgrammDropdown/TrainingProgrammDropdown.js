import React, { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDown.svg";
import "./TrainingProgrammDropdown.scss";

const TrainingProgrammDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="training-programm-dropdown-wrapper">
      <div className="training-programm-title">
        <h3>{props.label}</h3>
      </div>
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <p className="training-button">
          <p>Read more</p>
          <div className={`arrow-down ${isOpen ? "arrow-down-closed" : ""}`}>
            <ArrowDownIcon />
          </div>
        </p>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <img src={props.img} alt="training illustration" />
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
        </div>
      )}
    </div>
  );
};

export default TrainingProgrammDropdown;
