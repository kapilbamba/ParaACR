import {  IconButton, useTheme } from "@mui/material";
import React, { ForwardedRef } from "react";

interface ITableActionIcon {
  onClick?: any;
  children: React.ReactNode;
  sx?: any;
  disabled?: any;
}


const TableActionIcon = React.forwardRef(function MyComponent(props:ITableActionIcon, ref:ForwardedRef<HTMLButtonElement>) {
  const theme:any = useTheme();
  const { children, onClick , disabled , sx} = props;
  return (
    <IconButton
      {...props}
      ref={ref}
      size="medium"
      sx={{
        color: disabled ? theme.palette.gray.light : theme.palette.gray.dark,
        cursor: disabled ? "not-allowed" : "pointer",
        margin: '0px 3px',

        ...sx
    
      }}
      onClick={disabled ? () => {} : onClick}
      className="group"
    >
      {children}
    </IconButton>
  );
});

export default TableActionIcon;
