import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgram from "./trainingProgram/TrainingProgram";
import TrainingContactForm from "pages/training/trainingContacts/TrainingContactForm";
import "./TrainingMain.scss";

const TrainingMain = () => {
    return (
        <ThemeProvider>
            <Header />
            <TrainingContactForm />
            <TrainingProgram />
            <Footer />
        </ThemeProvider>
    );
};

export default TrainingMain;
