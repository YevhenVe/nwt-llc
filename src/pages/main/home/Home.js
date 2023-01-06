import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "components/customButton/CustomButton";
import { Link } from "react-scroll";
import { ModalContext } from "contexts/ModalContext";
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDown.svg";
import "./Home.scss";
import ModalWindow from "components/modalWindow/ModalWindow";
import ContactForm from "components/contactForm/contactForm";

const Home = () => {
  const [modal, setModal] = useContext(ModalContext);
  const modalSwither = () => setModal(!modal);
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
        <CustomButton label="get hiring" onClick={() => modalSwither()} />
        <Link className="link" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
          <div className="arrow-down">
            <ArrowDownIcon />
          </div>
        </Link>
      </div>
      {modal && (
        <>
          <ModalWindow>
            <div className="child" onClick={(e) => e?.stopPropagation()}>
              <ContactForm />
            </div>
          </ModalWindow>
        </>
      )}
    </div>
  );
};

export default Home;
