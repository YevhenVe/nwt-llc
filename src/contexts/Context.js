import { use } from "i18next";
import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
export const LoadedContext = createContext();

export const ContextProvider = (props) => {
    const [themeSwitch, setThemeSwitch] = useState(() => localStorage.getItem("day-night") === "true");
    const [loaded, setLoaded] = useState(false);
    const colorLight = "--color-light";
    const colorDark = "--color-dark";
    const secondColorDark = "--second-color-dark";

    useEffect(() => {
        localStorage.setItem("day-night", themeSwitch);
        if (themeSwitch) {
            document.documentElement.style.setProperty(colorLight, "rgba(45, 45, 45, 1)");
            document.documentElement.style.setProperty(colorDark, "rgba(255, 255, 255, 1)");
            document.documentElement.style.setProperty(secondColorDark, "rgba(46, 70, 78, 1)");
        } else {
            document.documentElement.style.setProperty(colorLight, "rgba(248, 249, 249, 1)");
            document.documentElement.style.setProperty(colorDark, "rgba(45, 45, 45, 1)");
            document.documentElement.style.setProperty(secondColorDark, "rgba(248, 249, 249, 1)");
        }
    }, [themeSwitch]);

    const handleIframeLoad = () => {
        setLoaded(true);
    };

    return (
        <LoadedContext.Provider value={{ loaded, setLoaded, handleIframeLoad }}>
            <ThemeContext.Provider value={[themeSwitch, setThemeSwitch]}>{props.children}</ThemeContext.Provider>
        </LoadedContext.Provider>
    );
};
