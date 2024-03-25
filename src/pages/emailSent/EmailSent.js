import React from "react";
import { useTranslation } from "react-i18next";
import { ContextProvider } from "contexts/Context";
import "./EmailSent";
import Footer from "components/footer/footer";

const EmailSent = () => {
    const { t } = useTranslation();
    setTimeout(() => window.location.replace("/"), 3000);
    return (
        <div className="page-not-found-wrapper">
            <ContextProvider>
                <div className="page-not-found-text">
                    <h1>{t("E-mail sent")}</h1>
                </div>
                <Footer />
            </ContextProvider>
        </div>
    );
};

export default EmailSent;
