import React, { useEffect, useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { ReactComponent as LightIcon } from "assets/icons/Light.svg";
import { ReactComponent as DarkIcon } from "assets/icons/Dark.svg";
import CustomButtonHeader from "components/customButtonHeader/CustomButtonHeader";
import { Link } from "react-scroll";
import "./Links.scss";

const Links = () => {
  const [themeSwith, setThemeSwith] = useContext(ThemeContext);
  const colorLight = "--color-light";
  const colorDark = "--color-dark";
  const secondColorDark = "--second-color-dark";
  const themeSwither = () => setThemeSwith(!themeSwith);

  useEffect(() => {
    localStorage.setItem("day-night", themeSwith);
    if (themeSwith) {
      document.documentElement.style.setProperty(colorLight, "rgba(45, 45, 45, 1)");
      document.documentElement.style.setProperty(colorDark, "rgba(255, 255, 255, 1)");
      document.documentElement.style.setProperty(secondColorDark, "rgba(46, 70, 78, 1)");
    } else {
      document.documentElement.style.setProperty(colorLight, "rgba(248, 249, 249, 1)");
      document.documentElement.style.setProperty(colorDark, "rgba(45, 45, 45, 1)");
      document.documentElement.style.setProperty(secondColorDark, "rgba(255, 255, 255, 1)");
    }
  }, [themeSwith]);

  return (
    <div className="links-wrapper">
      <Link className="link" activeClass="active" to="home" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="home" />
      </Link>
      <Link className="link" activeClass="active" to="about" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="about us" />
      </Link>
      <Link className="link" activeClass="active" to="team" smooth spy offset={-60} duration={300}>
        <CustomButtonHeader label="team" />
      </Link>
      <Link className="link" activeClass="active" to="info" smooth spy offset={-55} duration={300}>
        <CustomButtonHeader label="info" />
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
    </div>
  );
};

export default Links;
