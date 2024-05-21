import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import { useNavigate } from "react-router-dom";
import "./TrainingMain.scss";

const TrainingMain = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="training-box-wrapper">
                <div
                    className="training-box-tower"
                    onClick={() => navigate("/tower-training")}
                >
                    <p>Tower Training</p>
                </div>
                <div
                    className="training-box-fiber"
                    onClick={() => navigate("/fiber-training")}
                >
                    <p>Fiber Training</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TrainingMain;
