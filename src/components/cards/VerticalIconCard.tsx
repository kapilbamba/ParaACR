import React from "react";
import { Avatar, Card, Typography, useTheme } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import waveImg from "src/assets/images/shape_line.svg";

interface MemberCardProps {
  icon: JSX.Element;
  title: string;
  subTitle: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
}

const VerticalIconCard: React.FC<MemberCardProps> = ({
  icon,
  title,
  subTitle,
  bgColor,
  iconColor,
  borderColor,
}) => {
  const theme: any = useTheme();

  return (
    <div className="py-5 shadow-xl rounded-lg  grid grid-cols-3 items-center gap-6 relative bg-[#f5f5f5] border-2 border-white">
      <div
        className="flex items-center py-1 justify-center rounded-se-md rounded-ee-md border-l-0 border"
        style={{
          backgroundColor: bgColor,
          color: iconColor,
          borderColor: borderColor,
        }}
      >
        {icon}
      </div>
      <div className="col-span-2 pr-3">
        <Typography
          variant="h6"
          fontWeight={800}
          className="!mb-1 "
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          className="!mb-1 "
          color={theme.palette.slate.dark}
        >
          {subTitle}
        </Typography>

        <Avatar
          sx={{
            width: "20px",
            height: "20px",
            backgroundColor: theme.palette.primary.lighter,
            position: "absolute",
            right: 3,
            top: 4,
          }}
        >
          <BiChevronRight size={15} color={theme.palette.primary.dark} />
        </Avatar>
      </div>
    </div>
  );
};

export default VerticalIconCard;
