import React, { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDown.svg";
import "./TrainingProgramDropdown.scss";

const TrainingProgramDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="training-program-dropdown-wrapper">
      <div className="training-program-title">
        <h3>{props.label}</h3>
      </div>
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <div className="training-button">
          <p>Read more</p>
          <div className={`arrow-down ${isOpen ? "arrow-down-closed" : ""}`}>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div className={`dropdown-content ${isOpen ? "dropdown-content-close" : ""}`}>
        <img src={props.img} alt="training illustration" />
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </div>
    </div>
  );
};

export default TrainingProgramDropdown;
