'use client';

import { TextField } from '@mui/material';

import React from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';

const TextFieldForm = () => {
  return (
    <FormWrapper title='TextField Form' handleRemove={() => {}}>
      <TextField multiline />
    </FormWrapper>
  );
};

export default TextFieldForm;
