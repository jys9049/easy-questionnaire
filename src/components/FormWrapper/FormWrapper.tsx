"use client";

import { Box, IconButton, Input, Switch, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import S from "./FormWrapper.module.css";
import React from "react";
import { IFormWrapperProps } from "./FormWrapper.types";

const FormWrapper = ({
  id,
  title,
  titleInputValue,
  handleChange,
  handleRemove,
  handleRequireChange,
  children,
}: IFormWrapperProps) => {
  return (
    <Box className={S.container}>
      <Box className={S.closeBox}>
        <Typography variant="body2" color="#999999">
          {title}
        </Typography>
        <IconButton onClick={() => handleRemove(id)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className={S.contents}>
        <Input
          id={id}
          className={S.input}
          placeholder="타이틀을 입력해주세요."
          value={titleInputValue}
          onChange={handleChange}
        />
        {children}
      </Box>
      <Box display={"flex"} className={S.requireBox}>
        <Switch size="small" color="warning" onChange={handleRequireChange} />
        <Typography variant="body2" color="#999999">
          required*
        </Typography>
      </Box>
    </Box>
  );
};

export default FormWrapper;
