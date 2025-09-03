import React from "react";
import { styled } from "@mui/material/styles";
import { Switch, SwitchProps } from "@mui/material";

interface MyCustomSwitchProps extends SwitchProps {
  loading?: boolean;
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 15,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        backgroundColor: "#8bc34a",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 11,
    height: 11,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    // backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    backgroundColor: "#fcb8a6",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const MyCustomSwitch = React.forwardRef<HTMLButtonElement, MyCustomSwitchProps>(
  function MyCustomSwitch(props, ref) {
    const { checked, onChange, loading, disabled, ...rest } = props;
    return (
      <CustomSwitch
        {...rest}
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={loading || disabled}
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
      />
    );
  }
);

export default MyCustomSwitch;
