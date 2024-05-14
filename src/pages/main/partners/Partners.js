import React from "react";
import imagesData from "./Partners.json";
import { useTranslation } from "react-i18next";
import Slider from "components/slider/Slider";
import "./Partners.scss";

const Parners = ({ imageArray }) => {
    imageArray = imagesData;
    const { t } = useTranslation();

    return (
        <Slider imageArray={imageArray}>
            <div className="label">
                <div className="pre-label">{t("trusted")}</div>
                <div className="after-label">{t("partners")}</div>
            </div>
        </Slider>
    );
};
export default Parners;
