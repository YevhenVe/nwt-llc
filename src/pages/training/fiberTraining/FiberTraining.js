import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgram from "pages/training/fiberTraining/trainingProgram/TrainingProgram";
import TrainingContactForm from "pages/training/fiberTraining/trainingContacts/TrainingContactForm";
import TrainingVideo from "./trainingVideo/TrainingVideo";

const FiberTraining = () => {
    return (
        <>
            <Header />
            <TrainingContactForm />
            <TrainingVideo videoId={"m__sz-FkFj0?si=9_8VxJbjXb4sf_Kl"} />
            <TrainingProgram />
            <Footer />
        </>
    );
};

export default FiberTraining;
