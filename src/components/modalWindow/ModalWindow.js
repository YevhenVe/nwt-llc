import React, { useContext } from "react";
import { ModalContext } from "contexts/ModalContext";
import "./ModalWindow.scss";

const ModalWindow = ({ children }) => {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <div className="modal-window-wrapper" onClick={() => setModal(!modal)}>
      {children}
    </div>
  );
};

export default ModalWindow;
