import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '7px',
    height: '46px',
    '& fieldset': {
      borderColor: theme.palette.grey[700],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-disabled fieldset': {
      borderColor: theme.palette.primary.light,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.primary,
    padding: '12px 14px', // optional: better vertical alignment
  },
  '& .MuiOutlinedInput-input::placeholder': {
    color: theme.palette.primary.light,
    opacity: 0.8,
  },
  '& .MuiOutlinedInput-root.Mui-disabled input': {
    color: theme.palette.primary.light,
  },
}));

export default CustomTextField;
