import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

const CustomizedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
  
    {...props}
    classes={{ popper: className }}
    arrow
    TransitionComponent={Zoom}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CustomToolTip({ title, children }: any) {
  return <CustomizedTooltip title={title}>{children}</CustomizedTooltip>;
}
