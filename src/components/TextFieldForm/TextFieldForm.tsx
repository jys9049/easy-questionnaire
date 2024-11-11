"use client";

import { TextField } from "@mui/material";

import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { ITextFieldFormProps } from "./TextFieldForm.types";

const TextFieldForm = ({
  id,
  titleValue,
  handleTitleChange,
  handleChange,
  handleRequireChange,
  handleRemove,
}: ITextFieldFormProps) => {
  return (
    <FormWrapper
      title="TextField Form"
      titleInputValue={titleValue}
      id={id}
      handleChange={handleTitleChange}
      handleRemove={() => handleRemove}
      handleRequireChange={handleRequireChange}
    >
      <TextField id={id} multiline onChange={handleChange} fullWidth />
    </FormWrapper>
  );
};

export default TextFieldForm;
