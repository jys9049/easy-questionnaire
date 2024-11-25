"use client";

import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import S from "./RadioForm.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Button,
  IconButton,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { IRadioFormProps } from "./RadioForm.types";

const RadioForm = ({
  id,
  title,
  value,
  handleTitleChange,
  handleInputChange,
  handleAddClick,
  handleRadioRemove,
  handleRemove,
  handleRequireChange,
}: IRadioFormProps) => {
  return (
    <FormWrapper
      title={"Radio Form"}
      handleRemove={() => handleRemove(id)}
      titleInputValue={title}
      handleChange={handleTitleChange}
      id={id}
      handleRequireChange={handleRequireChange}
    >
      <RadioGroup className={S.radioGroupStyle}>
        {value.map((radio, idx) => (
          <Box className={S.radioBox} key={idx}>
            <Box className={S.radioInputWrap}>
              <Radio disabled checked={false} />
              <Input
                id={radio.id}
                fullWidth
                sx={{
                  "&::before": {
                    bottom: "inherit",
                  },
                  "&::after": {
                    bottom: "8px",
                  },
                }}
                value={radio.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(id, e)
                }
              />
            </Box>
            <IconButton onClick={() => handleRadioRemove(id, radio.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))}
      </RadioGroup>
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

export default RadioForm;
