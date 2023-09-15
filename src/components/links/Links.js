import React, { useState } from "react";
import AllLinks from "./AllLinks/AllLinks";
import CustomButtonHeader from "components/customButtonHeader/CustomButtonHeader";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Links.scss";

const SeparLinks = () => {
  const [location, setLocation] = useState(useLocation());
  const navigate = useNavigate();
  return (
    <AllLinks>
      {location.pathname !== "/training" ? (
        <div className="link" onClick={() => navigate("/training")}>
          <CustomButtonHeader label="training" />
        </div>
      ) : (
        <div className="link active" onClick={() => navigate("/training")}>
          <CustomButtonHeader label="training" />
        </div>
      )}
    </AllLinks>
  );
};

const Links = () => {
  const [burgerSwitch, setBurgerSwitch] = useState("");

  return (
    <>
      <div className="links-wrapper">
        <SeparLinks />
      </div>
      <div className="hamburger-switcher" onClick={() => setBurgerSwitch(!burgerSwitch)}>
        {!burgerSwitch ? (
          <>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </>
        ) : (
          <>
            <div className="line-clicked one" />
            <div className="line-clicked two" />
          </>
        )}
      </div>
      <div className={`hamburger-links-wrapper ${!burgerSwitch ? "hamburger-links-wrapper-off" : ""}`}>
        <SeparLinks />
      </div>
    </>
  );
};

export default Links;
