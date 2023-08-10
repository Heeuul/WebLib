import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  title = "title",
  textValue,
  SetText,
  inputType = "text",
  style,
}) {
  return (
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      type={inputType}
      fullWidth
      value={textValue}
      onChange={(e) => SetText(e.target.value.toString())}
      style={style}
    />
  );
}
