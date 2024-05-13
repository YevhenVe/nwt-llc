import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LoadedContext } from "contexts/Context";
import CustomButton from "components/customButton/CustomButton";
import { ReactComponent as LoaderAnimation } from "assets/icons/Loader.svg";
import { Link } from "react-scroll";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDown.svg";
import Modal from "@mui/material/Modal";
import "./Home.scss";

const Home = () => {
    const { loaded, handleIframeLoad } = useContext(LoadedContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const { t } = useTranslation();

    return (
        <div
            className="wrapper-home"
            name="home"
        >
            <video
                autoPlay
                muted
                loop
            >
                <source
                    src="https://nwt-llc.com/static/media/herovideo.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="home-content-wrapper">
                <div className="pre-title">{t("COMMUNICATIONS SOLUTIONS")}</div>
                <div className="slogan">Plan, Execute, Deliver! </div>
                <CustomButton
                    label="Career Opportunities"
                    onClick={() => navigate("/career")}
                />
                <Link
                    className="link"
                    activeClass="active"
                    to="about"
                    smooth
                    spy
                    offset={-59}
                    duration={300}
                >
                    <div className="arrow-down">
                        <ArrowDownIcon />
                    </div>
                </Link>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <>
                    <div className="modal-content">
                        <div
                            className="modal-close-button"
                            onClick={handleClose}
                        >
                            🞪
                        </div>
                        <div className="employee-loader">{!loaded && <LoaderAnimation />}</div>
                        <iframe
                            src="https://forms.monday.com/forms/embed/841dbe78d20737008c792d3f09157e85?r=use1"
                            width="650"
                            height="500"
                            title="Employee form"
                            onLoad={handleIframeLoad}
                        />
                    </div>
                    <div className="child" />
                </>
            </Modal>
        </div>
    );
};

export default Home;
