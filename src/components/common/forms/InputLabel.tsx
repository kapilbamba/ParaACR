import React from "react";
import { styled } from "@mui/material";

const Label = styled("label")(({ theme }) => ({
  display: "block",
   color: theme.palette.grey[800],
  fontSize: "12px",
  paddingLeft: "10px",
}));

const InputLabel = ({
  label,
  isRequired,
  className,
}: {
  label: string;
  isRequired?: boolean;
  className?: any;
}) => {
  return (
    <Label className={className}>
      {label}
      {isRequired && <span className="text-red-600 text-base">*</span>}
    </Label>
  );
};

export default InputLabel;
