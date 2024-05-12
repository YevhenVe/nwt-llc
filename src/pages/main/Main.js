import React from "react";
import Header from "components/header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Contacts from "pages/main/contacts/Contacts";
import Footer from "components/footer/footer";
import Clients from "./clients/Clients";
import Parners from "./partners/Partners";

const Main = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Clients />
            <Contacts />
            <Parners />
            <Footer />
        </>
    );
};

export default Main;
