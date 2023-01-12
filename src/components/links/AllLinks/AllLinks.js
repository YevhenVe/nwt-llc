import React, { useContext, useState } from "react";
import { Tooltip } from "@mui/material";
import { ThemeContext } from "contexts/ThemeContext";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { ReactComponent as LightIcon } from "assets/icons/Light.svg";
import { ReactComponent as DarkIcon } from "assets/icons/Dark.svg";
import { ReactComponent as TranslateIcon } from "assets/icons/Translate.svg";
import CustomButtonHeader from "components/customButtonHeader/CustomButtonHeader";
import SpainFlag from "../../../assets/images/spain.png";
import USAFlag from "../../../assets/images/united-states.png";
import "./AllLinks.scss";

const AllLinks = () => {
  const [themeSwith, setThemeSwith] = useContext(ThemeContext);
  const [lngswitch, setLngswitch] = useState(() => localStorage.getItem("language") === "sp");
  const themeSwither = () => setThemeSwith(!themeSwith);
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <Link className="link" activeClass="active" to="home" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="home" />
      </Link>
      <Link className="link" activeClass="active" to="about" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="about us" />
      </Link>
      <Link className="link" activeClass="active" to="info" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="info" />
      </Link>
      <Link className="link" activeClass="active" to="team" smooth spy offset={-55} duration={300}>
        <CustomButtonHeader label="team" />
      </Link>
      <Link className="link" activeClass="active" to="contacts" smooth spy offset={-50} duration={300}>
        <CustomButtonHeader label="contacts" />
      </Link>
      <div
        className="light-dark-switcher"
        title={`${!themeSwith ? "Dark theme" : "Light theme"}`}
        onClick={() => themeSwither()}
      >
        {!themeSwith ? <LightIcon /> : <DarkIcon />}
      </div>
      <Tooltip
        title={
          <>
            <div className="language-switch" onClick={() => setLngswitch(!lngswitch)}>
              <div onClick={() => changeLanguage("en")} title="Switch to English">
                <img src={USAFlag} alt="EN" />
                <span>English</span>
              </div>
              <div onClick={() => changeLanguage("sp")} title="Switch to Spanish">
                <img src={SpainFlag} alt="SP" />
                <span>Spanish</span>
              </div>
            </div>
          </>
        }
        arrow
      >
        <div className="translate-icon">
          <TranslateIcon />
        </div>
      </Tooltip>
    </>
  );
};

export default AllLinks;
