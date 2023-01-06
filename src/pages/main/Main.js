import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { ModalProvider } from "contexts/ModalContext";
import Header from "components/header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Hiring from "pages/main/hiring/Hiring";
import Team from "pages/main/team/Team";
import Contacts from "pages/main/contacts/Contacts";
import Footer from "components/footer/footer";

const Main = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Home />
        <About />
        <Hiring />
        <Team />
        <Contacts />
        <Footer />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Main;
