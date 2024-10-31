"use client";

import { Box, IconButton, Input, Switch, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import S from "./FormWrapper.module.css";
import React from "react";
import { IFormWrapperProps } from "./FormWrapper.types";

const FormWrapper = ({ title, handleRemove, children }: IFormWrapperProps) => {
  return (
    <Box className={S.container}>
      <Box className={S.closeBox}>
        <Typography variant="body2" color="#999999">
          {title}
        </Typography>
        <IconButton onClick={handleRemove}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className={S.contents}>
        <Input className={S.input} placeholder="타이틀을 입력해주세요." />
        {children}
      </Box>
      <Box display={"flex"} className={S.requireBox}>
        <Switch size="small" color="warning" />
        <Typography variant="body2" color="#999999">
          required*
        </Typography>
      </Box>
    </Box>
  );
};

export default FormWrapper;
