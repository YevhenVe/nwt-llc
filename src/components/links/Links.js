import React, { useState } from "react";
import AllLinks from "./AllLinks/AllLinks";
import "./Links.scss";

const Links = () => {
  const [burgerSwitch, setBurgerSwitch] = useState("");
  return (
    <>
      <div className="links-wrapper">
        <AllLinks />
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
        <AllLinks />
      </div>
    </>
  );
};

export default Links;
