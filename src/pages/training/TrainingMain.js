import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgram from "./trainingProgram/TrainingProgram";
import TrainingContactForm from "pages/training/trainingContacts/TrainingContactForm";
import "./TrainingMain.scss";

const TrainingMain = () => {
    return (
        <>
            <Header />
            <TrainingContactForm />
            <TrainingProgram />
            <Footer />
        </>
    );
};

export default TrainingMain;
