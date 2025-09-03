import { Typography, useTheme } from "@mui/material";
import React from "react";

// Define the props type
interface DutiesCardProps {
  icon: JSX.Element;
  title: string;
  schedule: string;
  description: string;
  iconColor?: string;
  bgColor?: string;
  borderColor?: string;
}

const DutiesCard: React.FC<DutiesCardProps> = ({
  icon,
  title,
  schedule,
  description,
  iconColor,
  bgColor,
  borderColor,
}) => {
  const theme = useTheme();

  return (
    <div className="shadow-xl border-l-2 rounded-lg p-5 flex items-center gap-2  bg-white" style={{
      borderColor:borderColor
    }}>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center pr-2">
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>

          <Typography variant="body2">{schedule}</Typography>
        </div>
        <Typography
          variant="body2"
          className="!mt-2"
          color={theme.palette.slate.dark}
        >
        {description}
        </Typography>
      </div>

      <div
        className="w-[60px] h-[60px] border flex items-center justify-center rounded-full"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          color: iconColor,
        }}
      >
        {icon}{" "}
      </div>
    </div>
  );
};

export default DutiesCard;
