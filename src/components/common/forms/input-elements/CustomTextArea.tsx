import React from 'react';
import { styled, FormHelperText, useTheme, Box } from '@mui/material';

const Label = styled('label')(({ theme }) => ({
  display: "block",
   color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

interface CustomTextAreaProps {
  textLimit?: number;
  label: string;
  name: string;
  isRequired?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  rows?: number;
  suggestionTextBottom?: string;
  additionalText?: string;
  style?: React.CSSProperties;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = (props) => {
  const {
    textLimit,
    label,
    name,
    isRequired,
    value,
    onChange,
    error,
    helperText,
    onBlur,
    disabled,
    rows,
    suggestionTextBottom,
    additionalText,
    style,
  } = props;

  const defaultStyle: React.CSSProperties = {
    border: error ? '1px solid #e67d34' : '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    padding: '10px',
  };

  const theme = useTheme();

  return (
    <Box sx={{ m: 0, width: '100%', position: 'relative' }}>
      <Label>
        {label} {isRequired ? <span className="text-red-600 text-base">*</span> : <span className="text-red-600 text-base invisible">*</span>}
      </Label>
      <textarea
        maxLength={textLimit}
        style={style || defaultStyle}
        name={name}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        rows={rows ?? 5}
        className="customTextArea"
      />
      <FormHelperText
        sx={{
          position: 'absolute',
          right: '10px',
          top: '0%',
          color: theme.palette.grey[500],
          fontWeight: 600,
        }}
      >
        {additionalText}
      </FormHelperText>
      {error && (
        <FormHelperText error={error} sx={{ marginLeft: '13px' }}>
          {helperText}
        </FormHelperText>
      )}
      {suggestionTextBottom && (
        <FormHelperText sx={{ marginLeft: '13px' }}>
          {suggestionTextBottom}
        </FormHelperText>
      )}
    </Box>
  );
};

export default CustomTextArea;
