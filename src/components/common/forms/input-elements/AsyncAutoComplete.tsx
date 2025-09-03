/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { SxProps, styled, Theme } from "@mui/material";
import HighLightText from "./HighLightText";

export const CustomInput = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    color: "#2A3547",
    padding: "8px 14px !important",
  },
  "& .MuiAutocomplete-input": {
    padding: "2.5px 4px 2.5px 0px !important",
  },
  "& .MuiInputBase-input": {
    border: "none",
    "&:focus": {
      boxShadow: "none",
    },
  },
  "& .MuiFormHelperText-root": {
    margin: "4px 0px 0px 15px",
  },
}));

const Label = styled("label")(({ theme }) => ({
  display: "block",
   color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

export default function AsyncAutocomplete(props: {
  loading?: boolean;
  options: Array<Record<string, any>>;
  disabled?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  disableClearable?: boolean;
  defaultValue?: string | number;
  objFilter: {
    title: string;
    value: string;
    text?:boolean
  };
  label?: string;
  value?: any;
  id: string;
  onChangeOption: (value: any, values?: Record<string, any>) => void;
  TextInputProps?: {
    error?: boolean;
    helperText?: any;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  };
  sx?: SxProps<Theme>;
  multiple?: boolean;
  size?: "small" | "medium";
}) {
  const {
    value: valueOption,
    onChangeOption,
    TextInputProps,
    objFilter,
    options,
    loading,
    label,
    defaultValue,
    isRequired,
    id,
    sx,
    multiple,
    size,
    disabled,
    placeholder,
    disableClearable,
    // autocomplete,
  } = props;

  const [value, setValue] = React.useState<Array<{ [key: string]: any }>>([]);
  const [actualValue, setActualValue] = React.useState("");

  const v = React.useMemo(() => {
    if (typeof valueOption === "number") {
      const a = options?.filter(
        (values) => values?.[objFilter.value] === valueOption
      )[0];
      if (a) {
        return a;
      }
    } else if (typeof valueOption === "string") {
      const num = parseInt(valueOption);

      if (!isNaN(num) && !objFilter?.text) {
        const a = options?.filter(
          (values) => +values?.[objFilter.value] === num
        )[0];

        if (a) {
          return a;
        }
      } else {
        const a = options?.filter(
          (values) => values?.[objFilter.value] === valueOption
        )[0];
        if (a) {
          return a;
        }
      }
    }
    return null;
  }, [valueOption, options, objFilter.value , objFilter?.text]);

  const handleMultipleChange = (n: Array<{ [key: string]: any }>) => {
    let row_id: number[] = [];

    if (n !== null) {
      n.map((value) => {
        row_id.push(value[objFilter.value]);
      });
      setValue(n);
    }
    onChangeOption(row_id.toString());
  };

  useEffect(() => {
    if (multiple)
      if (!actualValue) {
        if (valueOption && options.length > 0) {
          const arr: Array<{ [key: string]: any }> = [];
          let a = valueOption?.split(",");
          // eslint-disable-next-line array-callback-return
          a.map((b: any) => {
            // eslint-disable-next-line eqeqeq
            let temparr = options?.filter(
              (values) => values?.[objFilter.value] === b
            );
            temparr && arr.push(...temparr);
          });
          setActualValue(valueOption);
          setValue(arr);
        }
      }
  }, [valueOption, options, multiple, actualValue, objFilter.value]);

  if (multiple) {
    return (
      <div >
        {label ? (
          <Label htmlFor={id}>
            {label}
            {isRequired ? (
              <span className="text-red-600 text-base">*</span>
            ) : (
              <span className="text-red-600 text-base invisible">*</span>
            )}
          </Label>
        ) : null}

        <Autocomplete
          id={id}
          value={value}
          multiple
          onChange={(e, n) => handleMultipleChange(n)}
          getOptionLabel={(option) => option[objFilter.title]}
          options={options}
          loading={loading}
          size="small"
          // fullWidth
          sx={sx}
          disabled={disabled}
          renderInput={(params) => (
            <CustomInput
              // sx={{
              //   "& .MuiInputBase-root": {
              //     paddingTop: "3px",
              //     paddingBottom: "3px",
              //   },
              //   "& .MuiInputBase-roo": {
              //     padding: "5px 20px 5px 10px",
              //   },
              // }}
              {...params}
              {...TextInputProps}
              // onKeyPress={(e) => e.preventDefault()}
              color="secondary"
              defaultValue={defaultValue}
              placeholder={placeholder || "Select"}
              InputLabelProps={{
                color: "secondary",
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          renderOption={(props, option, { inputValue }) => (
            <li {...props} key={option[objFilter.value]}>
              <HighLightText
                text={option[objFilter.title]}
                highListText={inputValue}
              />
            </li>
          )}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 pr-2">
      {label ?  <Label htmlFor={id}>
        {label}
        {isRequired ? (
          <span className="text-red-600 text-base">*</span>
        ) : (
          <span className="text-red-600 text-base invisible">*</span>
        )}
      </Label> : null}
     
      <Autocomplete
        id={id}
        value={v}
        onChange={(e, n) =>
          onChangeOption(n !== null ? n[objFilter.value] : "")
        }
        getOptionLabel={(option) => option[objFilter.title]}
        options={options}
        loading={loading}
        size={size || "small"}
        // fullWidth
        sx={sx}
        disabled={disabled}
        disableClearable={disableClearable}
        defaultValue={defaultValue}
        renderInput={(params) => (
          <CustomInput
            {...params}
            {...TextInputProps}
            placeholder={placeholder || "Select"}
            color="secondary"
            // onKeyPress={(e) => (autocomplete ? null : e.preventDefault())}

            // label={label}
            InputLabelProps={{
              color: "secondary",
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => (
          <li {...props} key={option[objFilter.value]}>
            <HighLightText
              text={option[objFilter.title]}
              highListText={inputValue}
            />
          </li>
        )}
      />
    </div>
  );
}
