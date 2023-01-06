import React from "react";
import { useTranslation } from "react-i18next";
import { TextField, InputAdornment } from "@mui/material";

const FieldCustom = ({ name, type, placeholder, encType, icon, title }) => {
  const { t } = useTranslation();
  return (
    <div className="field">
      <TextField
        required
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
    </div>
  );
};

export default FieldCustom;
