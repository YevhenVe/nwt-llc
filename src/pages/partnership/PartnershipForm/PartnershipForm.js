import React, { useContext, useEffect, useRef } from "react";
import PartnershipImage from "assets/images/partnership.jpg";
import { LoadedContext } from "contexts/Context";
import { ReactComponent as LoaderAnimation } from "assets/icons/Loader.svg";
import { useTranslation } from "react-i18next";
import "./PartnershipForm.scss";

const PartnershipForm = () => {
    const { loaded, handleIframeLoad } = useContext(LoadedContext);
    const parallaxRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const parallaxFactor = 0.5;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(-${scrollTop * parallaxFactor}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="partnership-form-wrapper">
            <div
                className="partnership-backplate"
                ref={parallaxRef}
            >
                <img
                    className="partnership-image"
                    src={PartnershipImage}
                    alt="Partnership"
                />
            </div>
            <div className="partnership-title">We are looking for Partners</div>
            <div className="partnership-sub-title">
                "Partner with NWT" and then underneath it should say "A big upturn is expected in tower builds and the time to build partnerships for the future is now"
            </div>
            <div className="partnership-form">
                {!loaded && <LoaderAnimation />}
                <iframe
                    className="partnership-form-iframe"
                    src="https://forms.monday.com/forms/embed/bbdd7fc4aa001011c39ed6e9b9ce7391?r=use1"
                    onLoad={handleIframeLoad}
                    title="Partnership Form"
                ></iframe>
            </div>
        </div>
    );
};

export default PartnershipForm;
