import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import S from "./FormWrapper.module.css";
import React from "react";

const FormWrapper = () => {
  return (
    <Box className={S.container}>
      <Box className={S.closeBox}>
        <Typography variant="body2" color="#999999">
          TextField
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FormWrapper;
