import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modal, setModal] = useState("");

  return <ModalContext.Provider value={[modal, setModal]}>{props.children}</ModalContext.Provider>;
};
