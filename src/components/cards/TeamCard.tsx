import React from "react";
import { Typography, useTheme } from "@mui/material";

import { getImageUrl } from "src/utils";
import LazyImage from "../common/image/LazyImage";

interface TeamCardProps {
  title: string;
  flagImg: string;
  borderColor?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ title, flagImg, borderColor }) => {
  const theme: any = useTheme();

  return (
    <div
      className={`grid grid-cols-1 gap-3 relative shadow-xl h-full bg-white border-b-4  p-6 pb-2 rounded-lg`}
      style={{ borderBottom: `4px solid ${borderColor}` }}
    >
      <div className="-mt-12 p-1 border bg-slate-50 rounded-lg text-center">
        <LazyImage
          src={flagImg ? getImageUrl("country", flagImg) : flagImg}
          placeholderSrc="loading"
          alt={flagImg}
          className="w-4/5 mx-auto rounded-md h-[8vh] object-contain"
        />
      </div>

      <Typography
        variant="h5"
        className=" text-center"
        color={theme.palette.secondary.main}
      >
        {title}
      </Typography>
    </div>
  );
};

export default TeamCard;
