import {
  Box,
  IconButton,
  Input,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import S from "./TextBox.module.scss";
import React from "react";

const TextBox = () => {
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
      <Input className={S.input} placeholder="타이틀을 입력해주세요." />
      <Box display={"flex"} className={S.requireBox}>
        <Switch size="small" color="warning" />
        <Typography variant="body2">required*</Typography>
      </Box>
      <TextField multiline disabled />
    </Box>
  );
};

export default TextBox;
