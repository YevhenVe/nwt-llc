import React from "react";
import Header from "components/header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Contacts from "pages/main/contacts/Contacts";
import Footer from "components/footer/footer";

const Main = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Contacts />
            <Footer />
        </>
    );
};

export default Main;
