import React from "react";
import { ContextProvider } from "contexts/Context";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import PartnershipForm from "./PartnershipForm/PartnershipForm";
import "./PartnershipMain.scss";

const PartnershipMain = () => {
    return (
        <ContextProvider>
            <Header />
            <PartnershipForm />
            <Footer />
        </ContextProvider>
    );
};

export default PartnershipMain;
