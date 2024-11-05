import { Box, Input } from "@mui/material";
import S from "./TitleForm.module.scss";
import React from "react";
import { ITitleForm } from "./TitleForm.types";

const TitleForm = ({ value, handleChange }: ITitleForm) => {
  return (
    <Box className={S.inputContainer}>
      <Input fullWidth value={value} onChange={handleChange} />
    </Box>
  );
};

export default TitleForm;
