import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "components/footer/footer";
import CustomButton from "components/customButton/CustomButton";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="page-not-found-wrapper">
                <>
                    <div className="page-not-found-text">
                        <h1>{t("404 title")}</h1>
                        <p>{t("404 text")}</p>
                        <Link to={"/"}>
                            <CustomButton label="Return to Home Page" />
                        </Link>
                    </div>
                    <Footer />
                </>
            </div>
        </>
    );
};

export default NotFoundPage;
