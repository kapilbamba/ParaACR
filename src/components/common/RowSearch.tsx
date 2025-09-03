import React, { ChangeEvent } from "react";
import { InputAdornment } from "@mui/material";
import { BiX } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import CustomTextField from "./forms/input-elements/CustomTextField";

interface RowSearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  setSearchText: (value: string) => void;
  [x: string]: any;
}

export default function RowSearch({
  value,
  onChange,
  placeholder = "Search",
  setSearchText,
  ...rest
}: Readonly<RowSearchProps>) {
  return (
    <CustomTextField
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        backgroundColor: "#fff",
        "& .MuiInputBase-input": {
          padding: 1,
        },
        "& .MuiInputBase-input:focus": {
          boxShadow: "none",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{
              cursor: "pointer",
            }}
          >
            <FaSearch
              style={{
                cursor: "pointer",
              }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setSearchText("");
            }}
          >
            <BiX
              style={{
                cursor: "pointer",
              }}
            />
          </InputAdornment>
        ),
      }}
      color="secondary"
      {...rest}
    />
  );
}
