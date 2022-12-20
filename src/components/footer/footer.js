import React from "react";
import { ReactComponent as LogoIcon } from "assets/icons/LogoFooter.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo">
          <LogoIcon />
        </div>
        <div className="footer-copyright"></div>
        <div className="footer-links"></div>
      </div>
    </div>
  );
};

export default Footer;
