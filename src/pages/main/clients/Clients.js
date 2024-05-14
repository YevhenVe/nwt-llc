import React from "react";
import imagesData from "./Clients.json";
import { useTranslation } from "react-i18next";
import Slider from "components/slider/Slider";
import "./Clients.scss";

const Clients = ({ imageArray }) => {
    imageArray = imagesData;
    const { t } = useTranslation();

    return (
        <Slider imageArray={imageArray}>
            <div className="label">
                <div className="pre-label">{t("our")}</div>
                <div className="after-label">{t("clients")}</div>
            </div>
        </Slider>
    );
};
export default Clients;
