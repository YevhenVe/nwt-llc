import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import PartnershipForm from "./PartnershipForm/PartnershipForm";
import "./PartnershipMain.scss";

const PartnershipMain = () => {
    return (
        <ThemeProvider>
            <Header />
            <PartnershipForm />
            <Footer />
        </ThemeProvider>
    );
};

export default PartnershipMain;
