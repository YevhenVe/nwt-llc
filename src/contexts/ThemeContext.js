import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [themeSwith, setThemeSwith] = useState(() => localStorage.getItem("day-night") === "true");
  const colorLight = "--color-light";
  const colorDark = "--color-dark";
  const secondColorDark = "--second-color-dark";

  useEffect(() => {
    localStorage.setItem("day-night", themeSwith);
    if (themeSwith) {
      document.documentElement.style.setProperty(colorLight, "rgba(45, 45, 45, 1)");
      document.documentElement.style.setProperty(colorDark, "rgba(255, 255, 255, 1)");
      document.documentElement.style.setProperty(secondColorDark, "rgba(46, 70, 78, 1)");
    } else {
      document.documentElement.style.setProperty(colorLight, "rgba(248, 249, 249, 1)");
      document.documentElement.style.setProperty(colorDark, "rgba(45, 45, 45, 1)");
      document.documentElement.style.setProperty(secondColorDark, "rgba(248, 249, 249, 1)");
    }
  }, [themeSwith]);

  return <ThemeContext.Provider value={[themeSwith, setThemeSwith]}>{props.children}</ThemeContext.Provider>;
};
