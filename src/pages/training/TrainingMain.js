import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import TrainingProgramm from "./trainingProgramm/TrainingProgramm";
import TrainingContactForm from "pages/training/trainingContacts/TrainingContactForm";
import "./TrainingMain.scss";

const TrainingMain = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <Header />
      <TrainingContactForm />
      <TrainingProgramm />
      <Footer />
    </ThemeProvider>
  );
};

export default TrainingMain;
