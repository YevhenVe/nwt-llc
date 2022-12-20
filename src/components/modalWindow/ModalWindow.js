import React, { useContext } from "react";
import { ModalContext } from "contexts/ModalContext";
import "./ModalWindow.scss";

const ModalWindow = ({ children }) => {
  const [modal, setModal] = useContext(ModalContext);
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-window-wrapper"
      onClick={() => {
        setModal(!modal);
        stopPropagation();
      }}
    >
      {children}
    </div>
  );
};

export default ModalWindow;
