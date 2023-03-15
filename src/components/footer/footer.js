import React, { useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import { ReactComponent as LogoIcon } from "assets/icons/LogoFooter.svg";
import "./footer.scss";

const Footer = () => {
  const [themeSwith] = useContext(ThemeContext);
  const startYear = 2022;
  let nextYear = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo">
          {!themeSwith ? (
            <LogoIcon style={{ fill: "rgba(248, 249, 249, 1)" }} />
          ) : (
            <LogoIcon style={{ fill: "rgba(45, 45, 45, 1)" }} />
          )}
        </div>
        <div className="footer-copyright">
          <div className="footer-left" />
          <div className="copyright">
            © nwt-llc.com {startYear} {startYear !== nextYear ? <>- {nextYear}</> : <></>}
          </div>
          <div className="footer-right">
            <a href="https://eugeneve.github.io/" target="blank" title="Web Developer Website">
              Designed by EV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
