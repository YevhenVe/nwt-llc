import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const FieldCustom = ({ name, type, placeholder, encType, icon, title }) => {
  return (
    <div className="field">
      <TextField
        required
        fullWidth
        id="searchTxt"
        placeholder={placeholder}
        method="POST"
        size="small"
        type={type}
        name={name}
        encType={encType}
        title={title}
        inputProps={{ accept: "application/pdf", multiple: true }}
        InputProps={{
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        }}
      />
    </div>
  );
};

export default FieldCustom;
