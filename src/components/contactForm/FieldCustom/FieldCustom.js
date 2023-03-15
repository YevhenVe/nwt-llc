import React from "react";
import { useTranslation } from "react-i18next";
import { TextField, InputAdornment } from "@mui/material";

const FieldCustom = ({ name, type, placeholder, encType, icon, title, children, required }) => {
  const { t } = useTranslation();
  return (
    <div className="field">
      <TextField
        required={required}
        fullWidth
        id="searchTxt"
        placeholder={t(`${placeholder}`)}
        method="POST"
        size="small"
        type={type}
        name={name}
        encType={encType}
        title={t(`${title}`)}
        inputProps={{ accept: "application/pdf", multiple: true }}
        InputProps={{
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        }}
      />
      {children}
    </div>
  );
};

export default FieldCustom;
