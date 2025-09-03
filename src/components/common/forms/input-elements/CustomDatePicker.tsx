import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Box, SxProps, Theme, styled } from "@mui/material";


const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.grey[400],
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.grey[200],
    },
  },
  "& .MuiOutlinedInput-input": {
    color: theme.palette.text.primary,
    padding: "10.5px 14px",
  },
  "& .MuiOutlinedInput-input.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[300],
  },
}));
const Label = styled("label")(({ theme }) => ({
  display: "block",
  color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));


export default function CustomDatePicker(props: {
  name?: string;
  disabled?: boolean;
  isRequired?: boolean;
  label?: string;
  value: any;
  minDate?: any;
  maxDate?: any;
  handleChange?: (d: any) => void | any;
  TextInputProps?: {
    error?: boolean;
    helperText?: any;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  };
  sx?: SxProps<Theme>;
}) {
  const {
    TextInputProps,
    name,
    value,
    label,
    isRequired,
    minDate,
    maxDate,
    disabled,
    handleChange,
  } = props;

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {label ? <Label
        sx={{
          paddingLeft: "10px",
        }}
      >
        {label}  {isRequired ? (
          <span className="text-red-600 text-base">*</span>
        ) : (
          <span className="text-red-600 text-base invisible">*</span>
        )}
      </Label> : null}
      <StyledDatePicker
        format="MMM DD, YYYY "
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        value={dayjs(value)}
        name={name}
        onChange={(value) =>
          handleChange ? handleChange(dayjs(value).format("YYYY-MM-DD")) : {}
        }

        slotProps={{
          textField: {
            ...TextInputProps,
            size: "small",
            InputProps: {
              readOnly: true,
              onFocus: (event) => event.target.blur(),
            },
          },
        }}
      />
    </Box>
  );
}
