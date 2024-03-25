import React from "react";
import { ContextProvider } from "contexts/Context";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgram from "./trainingProgram/TrainingProgram";
import TrainingContactForm from "pages/training/trainingContacts/TrainingContactForm";
import "./TrainingMain.scss";

const TrainingMain = () => {
    return (
        <ContextProvider>
            <Header />
            <TrainingContactForm />
            <TrainingProgram />
            <Footer />
        </ContextProvider>
    );
};

export default TrainingMain;
