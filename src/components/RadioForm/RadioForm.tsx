'use client';

import React, { useState } from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import S from './RadioForm.module.css';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, IconButton, Input, Radio, RadioGroup } from '@mui/material';
import { IRadioArrayTypes } from './RadioForm.types';

const RadioForm = () => {
  const [radioArray, setRadioArray] = useState<IRadioArrayTypes[]>([
    { key: '1', title: '' },
  ]);

  const handleAddRadio = () => {
    setRadioArray([
      ...radioArray,
      { key: `${radioArray.length + 1}`, title: '' },
    ]);
  };

  return (
    <FormWrapper title={'Radio Form'} handleRemove={() => {}}>
      <Box>
        <RadioGroup>
          <Box className={S.radioBox}>
            <Box>
              <Radio disabled checked={false} />
              <Input size='small' />
            </Box>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
        </RadioGroup>
      </Box>

      <IconButton disableRipple color='info' className={S.addBtn}>
        <AddCircleOutlineIcon />
      </IconButton>
    </FormWrapper>
  );
};

export default RadioForm;
