import { Box, Container } from "@mui/material";
import S from "./page.module.css";
import React from "react";
import TextBox from "@/components/TextBox/TextBox";

const AddFormPage = () => {
  return (
    <Container className={S.container}>
      <Box className={S.form}>
        <TextBox />
      </Box>
    </Container>
  );
};

export default AddFormPage;
