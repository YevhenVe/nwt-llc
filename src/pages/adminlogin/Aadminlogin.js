import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Login from "components/login/Login";
import "./Aadminlogin.scss";
const Aadminlogin = () => {
    return (
        <>
            <Header />
            <div className="login-page-wrapper">
                <Login />
            </div>
            <Footer />
        </>
    );
};

export default Aadminlogin;
