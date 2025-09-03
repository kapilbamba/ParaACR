import {
  FormHelperText,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  useTheme,
} from "@mui/material";

const CustomCheckBox = ({
  isRequired,
  label,
  id,
  name,
  onChange,
  value,
  checkBoxLabel,
  error,
  helperText,
  disabled,
  checked,
  padding,
}: any) => {
  const theme = useTheme();

  return (
    <>
      <FormControl required={isRequired} error={error}>
        {label ? (
          <FormLabel
            sx={{
              display: "block",
              color: theme.palette.grey[800],
              fontSize: "12px",
              paddingLeft: "10px",
            }}
          >
            {label}
          </FormLabel>
        ) : null}

        <FormGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            sx={{
              marginRight: "0px",
            }}
            control={
              <Checkbox
                sx={{
                  padding: "1px 9px 0px 9px",
                }}
                size="small"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                disableRipple={true}
              />
            }
            label={undefined}
          />
          {checkBoxLabel}
        </FormGroup>

        {error ? (
          <FormHelperText
            sx={{
              color: "#f3704d",
            }}
          >
            {helperText}
          </FormHelperText>
        ) : null}
      </FormControl>
    </>
  );
};

export default CustomCheckBox;
