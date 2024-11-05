"use client";

import { Box, IconButton } from "@mui/material";
import S from "./SideFormMenu.module.scss";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React from "react";

const SideFormMenu = ({
  handleAddForm,
}: {
  handleAddForm: (type: string) => void;
}) => {
  return (
    <Box className={S.sideFormMenuContainer}>
      <IconButton onClick={() => handleAddForm("TEXT_FIELD_FORM")}>
        <TextFieldsIcon />
      </IconButton>
      <IconButton onClick={() => handleAddForm("RADIO_FORM")}>
        <RadioButtonCheckedIcon />
      </IconButton>
      <IconButton onClick={() => handleAddForm("CHECKBOX_FORM")}>
        <CheckBoxIcon />
      </IconButton>
    </Box>
  );
};

export default SideFormMenu;
