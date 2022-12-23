import CustomButton from "components/customButton/CustomButton";
import React from "react";
import "./Hiring.scss";

const Hiring = () => {
  return (
    <div className="hiring-wrapper" name="info">
      <div className="hiring-label">
        <div className="pre-label">hiring</div>
        <div className="after-label">info</div>
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
