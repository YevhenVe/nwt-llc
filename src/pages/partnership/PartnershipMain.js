import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import PartnershipForm from "./PartnershipForm/PartnershipForm";
import "./PartnershipMain.scss";

const PartnershipMain = () => {
    return (
        <>
            <Header />
            <PartnershipForm />
            <Footer />
        </>
    );
};

export default PartnershipMain;
