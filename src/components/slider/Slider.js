import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Slider.scss";

const Slider = ({ imageArray, children }) => {
    const controls = useAnimation();
    const trackVariants = {
        visible: (i) => ({
            x: `-${i * 250}px`,
        }),
        hidden: { x: 0 },
    };

    const slides = Array.from({ length: 100 }, () => imageArray).flat();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <div className="slider-wrapper">
            {children}
            <div
                className="slider"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => controls.start("visible")}
            >
                <div className="gradient-left" />
                <div className="gradient-right" />
                <motion.div
                    className="slide-track"
                    initial="hidden"
                    animate={controls}
                    custom={slides.length}
                    variants={trackVariants}
                    transition={{ ease: "linear", repeat: Infinity, duration: 2000 }}
                >
                    {slides.map((imageArray, index) => (
                        <div
                            className="slide"
                            key={`${index}-${imageArray.link}`}
                        >
                            <img
                                src={imageArray.link}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Slider;
