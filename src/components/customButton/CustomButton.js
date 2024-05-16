import React from "react";
import { useTranslation } from "react-i18next";
import "./CustomButton.scss";

const CustomButton = ({ label, onClick, className, disabled, title }) => {
    const { t } = useTranslation();
    return (
        <div className="custom-button-wrapper">
            <button
                className={`button ${className}`}
                onClick={onClick}
                disabled={disabled}
                title={title}
            >
                {t(`${label}`)}
            </button>
        </div>
    );
};

export default CustomButton;
