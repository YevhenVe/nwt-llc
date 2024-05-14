import React from "react";
import Marquee from "react-marquee-slider";
import "./Slider.scss";

const Slider = ({ imageArray, children }) => {
    return (
        <div className="slider-wrapper">
            {children}
            <div className="slider">
                <div className="gradient-left" />
                <div className="gradient-right" />
                <Marquee velocity={25}>
                    {imageArray.map((imageArray, index) => (
                        <div
                            className="image-box"
                            key={index}
                        >
                            <img
                                src={imageArray.link}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Slider;
