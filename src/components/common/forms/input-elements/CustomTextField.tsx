import React from "react";
import {
  Box,
  FormHelperText,
  TextField,
  styled,
  useTheme,
  TextFieldProps,
} from "@mui/material";

// Define props for CustomTextField
interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  isRequired?: boolean;
  error?: boolean;
  textLimit?: number;
  additionalText?: string;
  unitText?: string;
  labelWidth?: string;
  accept?: string;
  helperText?: any;
}
// Utility function to format the numvber to lakh format with commas

export const CustomInput = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  "& .MuiInputBase-inputMultiline": {
    // padding: "8px 0px !important",
  },
  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    color: "#ccc",
    opacity: "1",
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme?.palette?.secondary?.light,
    opacity: "1",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme?.palette?.gray?.lighter} !important`,
  },
  "& .MuiOutlinedInput-input": {
    color: theme?.palette?.text?.primary,
    padding: "10.5px 14px",
  },
}));

const Label = styled("label")(({ theme }) => ({
  display: "block",
   color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

const SmallLabel = styled("label")(({ theme }) => ({
  display: "block",
  color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

const defaultAccept =
  "application/pdf,image/png,image/jpeg,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  const theme = useTheme();
  const {
    label,
    isRequired,
    error,
    textLimit,
    value,
    accept,
    helperText,
    additionalText,
    unitText,
    labelWidth,
    ...inputProps
  } = props;

  const idStr = React.useMemo(() => {
    const random = Math.random().toString(36).substring(7);
    return `${props.type}-${random}`;
  }, [props.type]);
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {label ? (
        <Label
          htmlFor={idStr}
          sx={{
            paddingLeft: "10px",
          }}
        >
          {label}
          {isRequired ? (
            <span className="text-red-600 text-base">*</span>
          ) : (
            <span className="text-red-600 text-base invisible">*</span>
          )}
        </Label>
      ) : null}
      <CustomInput
        {...inputProps}
        value={value}
        id={idStr}
        size="small"
        autoComplete="nope"
        fullWidth
        error={error}
        inputProps={{ maxLength: textLimit, accept: accept || defaultAccept }}
      />
      {helperText ? (
        <FormHelperText error={error} sx={{ marginLeft: "13px" }}>
          {helperText}
        </FormHelperText>
      ) : null}
      {additionalText ? (
        <FormHelperText
          sx={{
            position: "absolute",
            right: "10px",
            top: "0%",
            color: theme.palette.grey[500],
            fontWeight: 600,
          }}
        >
          {additionalText}
        </FormHelperText>
      ) : null}
      {unitText && (
        <FormHelperText
          sx={{
            textAlign: "right",
            paddingRight: "10px",
            color: theme.palette.grey[500],
            fontWeight: 600,
          }}
        >
          {unitText}
        </FormHelperText>
      )}
    </Box>
  );
};

export default CustomTextField;
export { Label, SmallLabel };
