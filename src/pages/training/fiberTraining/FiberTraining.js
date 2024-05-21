import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgram from "pages/training/fiberTraining/trainingProgram/TrainingProgram";
import TrainingContactForm from "pages/training/fiberTraining/trainingContacts/TrainingContactForm";

const FiberTraining = () => {
    return (
        <>
            <Header />
            <TrainingContactForm />
            <TrainingProgram />
            <Footer />
        </>
    );
};

export default FiberTraining;
