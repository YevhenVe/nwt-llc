import React, { useState, useContext } from "react";
import { AuthContext } from "contexts/Context";
import AllLinks from "./AllLinks/AllLinks";
import CustomButtonHeader from "components/customButtonHeader/CustomButtonHeader";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Links.scss";

const SeparLinks = () => {
    const { currentUser } = useContext(AuthContext);
    const [location, setLocation] = useState(useLocation());
    const navigate = useNavigate();
    // Generate a random hexadecimal color code
    const getRandomColor = () => {
        let color = localStorage.getItem("randomColor");
        if (!color) {
            const letters = "0123456789ABCDEF";
            color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            localStorage.setItem("randomColor", color);
        }
        return color;
    };

    return (
        <AllLinks>
            <div
                className={`link ${location.pathname !== "/training" ? "" : "active"} `}
                onClick={() => navigate("/training")}
            >
                <CustomButtonHeader label="training" />
            </div>
            <div
                className={`link ${location.pathname !== "/partnership" ? "" : "active"} `}
                onClick={() => navigate("/partnership")}
            >
                <CustomButtonHeader label="partnership" />
            </div>
            {currentUser && (
                <div
                    className="avatar"
                    onClick={() => navigate("/adminlogin")}
                >
                    <p style={{ color: getRandomColor() }}>{currentUser?.email[0].toUpperCase()}</p>
                </div>
            )}
            {/* <div
                className={`link ${location.pathname !== "/adminlogin" ? "" : "active"} `}
                onClick={() => navigate("/adminlogin")}
            >
                <CustomButtonHeader label="login" />
            </div> */}
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
            <div
                className="hamburger-switcher"
                onClick={() => setBurgerSwitch(!burgerSwitch)}
            >
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
