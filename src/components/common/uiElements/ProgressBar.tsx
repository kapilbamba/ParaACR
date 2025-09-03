import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
interface IProgressBar {
  color?: string;
  value?: any;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ProgressBar: React.FC<IProgressBar> = ({ color, value }) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={value || 40}
      sx={{
        "& .MuiLinearProgress-bar": {
          backgroundColor: color || "#308fe8",
        },
      }}
    />
  );
};

export default ProgressBar;
