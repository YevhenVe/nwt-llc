import React from "react";
import TrainingProgrammDropdown from "./trainingProgrammDropdown/TrainingProgrammDropdown";
import Wer from "./TrainingProgramm.json";
import "./TrainingProgramm.scss";

const TrainingProgramm = () => {
  return (
    <div className="training-programm-wrapper">
      <div className="training-programm-content">
        <h1>Coaxial Splicing treaing programm</h1>
        {Wer.map((item) => (
          <TrainingProgrammDropdown key={item.id} img={item.img} label={item.label} text1={item.text1} text2={item.text2} text3={item.text3} />
        ))}
      </div>
    </div>
  );
};

export default TrainingProgramm;
