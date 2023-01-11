import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "components/customButton/CustomButton";
import { Link } from "react-scroll";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDown.svg";
import ContactForm from "components/contactForm/contactForm";
import Modal from "@mui/material/Modal";
import "./Home.scss";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <div className="wrapper-home" name="home">
      <div className="home-content-wrapper">
        <div className="pre-title">{t("COMMUNICATIONS SOLUTIONS")}</div>
        <div className="company-neme">
          New World
          <br />
          Telecom
        </div>
        <div className="slogan">
          Do what you can, with what you have, <br />
          where you are.
        </div>
        <CustomButton label="get hiring" onClick={handleOpen} />
        <Link className="link" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
          <div className="arrow-down">
            <ArrowDownIcon />
          </div>
        </Link>
      </div>
      <Modal open={open} onClose={handleClose}>
        <>
          <ContactForm />
          <div className="child" />
        </>
      </Modal>
    </div>
  );
};

export default Home;
