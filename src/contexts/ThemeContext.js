import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [themeSwith, setThemeSwith] = useState(() => localStorage.getItem("day-night") === "true");

  return <ThemeContext.Provider value={[themeSwith, setThemeSwith]}>{props.children}</ThemeContext.Provider>;
};
