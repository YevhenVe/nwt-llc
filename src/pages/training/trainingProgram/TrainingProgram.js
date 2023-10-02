import React from "react";
import TrainingProgramDropdown from "./trainingProgramDropdown/TrainingProgramDropdown";
import Wer from "./TrainingProgram.json";
import "./TrainingProgram.scss";

const TrainingProgram = () => {
    return (
        <div className="training-program-wrapper">
            <div className="training-program-content">
                <h1>Coaxial Splicing training program</h1>
                {Wer.map((item) => (
                    <TrainingProgramDropdown key={item.id} img={item.img} label={item.label} text1={item.text1} text2={item.text2} text3={item.text3} />
                ))}
            </div>
        </div>
    );
};

export default TrainingProgram;
