import { styled } from '@mui/material';
import React from 'react';

const Label2 = styled('label')(({ theme }) => ({
  display: "block",
   color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

const Label = ({ name, label, isRequired }) => {
  return (
    <Label2 htmlFor={name} pb="2">
      {label} {isRequired ? <span className="text-red-600 text-base">*</span> : null}
    </Label2>
  );
};

export default Label;
