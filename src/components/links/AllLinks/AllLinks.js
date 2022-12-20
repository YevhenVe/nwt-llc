import React, { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { Link } from "react-scroll";
import CustomButtonHeader from "components/customButtonHeader/CustomButtonHeader";
import { ReactComponent as LightIcon } from "assets/icons/Light.svg";
import { ReactComponent as DarkIcon } from "assets/icons/Dark.svg";
import "./AllLinks.scss";

const AllLinks = () => {
  const [themeSwith, setThemeSwith] = useContext(ThemeContext);
  const themeSwither = () => setThemeSwith(!themeSwith);
  return (
    <>
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
    </>
  );
};

export default AllLinks;
