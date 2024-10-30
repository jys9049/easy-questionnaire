import { Box, Container } from '@mui/material';
import S from './page.module.css';
import React from 'react';
import TextFieldForm from '@/components/TextFieldForm';
import RadioForm from '@/components/RadioForm';

const AddFormPage = () => {
  return (
    <Container className={S.container}>
      <Box className={S.form}>
        <TextFieldForm />
        <RadioForm />
      </Box>
    </Container>
  );
};

export default AddFormPage;
