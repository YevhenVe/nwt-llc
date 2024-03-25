import React from "react";
import { ThemeProvider } from "contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import "./PartnershipForm.scss";

const PartnershipForm = () => {
    const { t } = useTranslation();
    return (
        <ThemeProvider>
            <div className="partnership-form-wrapper">
                <div className="partnership-backplate">
                    <img
                        src="https://www.pragmaticinstitute.com/resources/wp-content/uploads/sites/6/2023/01/partnership-handshake-innovation-corporate-business-concept-2048x1365.jpg"
                        alt=""
                    />
                </div>
                <div className="partnership-title">We are looking for Partners</div>
                <div className="partnership-sub-title">
                    "Partner with NWT" and then underneath it should say "A big upturn is expected in tower builds and the time to build partnerships for the future is now"
                </div>
                <iframe
                    className="partnership-form-iframe"
                    src="https://forms.monday.com/forms/embed/bbdd7fc4aa001011c39ed6e9b9ce7391?r=use1"
                ></iframe>
            </div>
        </ThemeProvider>
    );
};

export default PartnershipForm;
