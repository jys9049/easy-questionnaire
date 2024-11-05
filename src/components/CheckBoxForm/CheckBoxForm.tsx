"use client";

import React, { useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { Box, Button, Checkbox, IconButton, Input } from "@mui/material";
import { ICheckBoxArrayTypes, ICheckBoxProps } from "./CheckBoxForm.types";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import S from "./CheckBoxForm.module.scss";

const CheckBoxForm = ({
  id,
  title,
  value,
  handleTitleChange,
  handleInputChange,
  handleAddClick,
  handleCheckBoxRemove,
  handleRemove,
  handleRequireChange,
}: ICheckBoxProps) => {
  return (
    <FormWrapper
      title="CheckBox Form"
      handleRemove={() => handleRemove(id)}
      titleInputValue={title}
      handleChange={handleTitleChange}
      id={id}
      handleRequireChange={handleRequireChange}
    >
      {value.map((checkbox, idx) => (
        <Box className={S.checkBoxContainer} key={idx}>
          <Box className={S.checkBoxInputWrap}>
            <Checkbox disabled checked={false} />
            <Input
              id={checkbox.id}
              fullWidth
              sx={{
                "&::before": {
                  bottom: "inherit",
                },
                "&::after": {
                  bottom: "8px",
                },
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(id, e)
              }
              value={checkbox.title}
            />
          </Box>
          <IconButton onClick={() => handleCheckBoxRemove(id, checkbox.id)}>
            <CloseIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        disableRipple
        color="info"
        className={S.addBtn}
        onClick={() => handleAddClick(id)}
      >
        <AddCircleOutlineIcon />
      </Button>
    </FormWrapper>
  );
};

export default CheckBoxForm;
