import React, { useState } from "react";
import CustomButton from "components/customButton/CustomButton";
import { useTranslation } from "react-i18next";
import Modal from "@mui/material/Modal";
import "./Hiring.scss";

const Hiring = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <div className="hiring-wrapper" name="info">
      <div className="hiring-label">
        <div className="pre-label">{t("hiring")}</div>
        <div className="after-label">{t("info")}</div>
      </div>
      <div className="hiring-content-wrapper">
        <div className="textbox">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
      <div className="download-btn">
        <CustomButton label="download" onClick={handleOpen} />
      </div>
      <Modal open={open} onClose={handleClose}>
        <>
          <a href="/">
            <CustomButton className="margin-bottom" label="For Individual" onClick={handleClose} />
          </a>
          <a href="/">
            <CustomButton className="margin-bottom" label="For Crews" onClick={handleClose} />
          </a>
          <a href="/">
            <CustomButton label="For Sub Contractors" onClick={handleClose} />
          </a>
          <div className="child" />
        </>
      </Modal>
    </div>
  );
};

export default Hiring;
