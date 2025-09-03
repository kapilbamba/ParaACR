import React from "react";
import { Chip, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { PiCalendarDotsDuotone } from "react-icons/pi";

import VsImg from "src/assets/images/vs.png";
import { getImageUrl } from "src/utils";

// Define the props type
interface MatchCardProps {
  TeamAImage: string;
  TeamAName: string;
  TeamBName: string;
  TeamBImage: string;
  EventDate: string;
  EventTime: string;
  Session: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  TeamAImage,
  TeamAName,
  TeamBImage,
  TeamBName,
  EventDate,
  EventTime,
  Session,
}) => {
  const theme = useTheme();
  return (
    <div className="grid grid-cols-1 gap-1">
      <Typography
        variant="subtitle1"
        fontWeight={600}
        className="flex items-center gap-1"
      >
        <PiCalendarDotsDuotone /> {dayjs(EventDate)?.format("MMM DD, YYYY")}{" "}
        {EventTime}
      </Typography>

      <div className="!shadow-lg bg-[url('./assets/images/wave.png')] bg-cover bg-center bg-white p-5 rounded-lg pb-2">
        <div className="flex justify-between items-center mb-2">
          <Typography variant="h6" fontWeight={600}>
            {Session}
          </Typography>

          <Chip
            label="Indra Gandhi stadium"
            size="small"
            sx={{
              backgroundColor: theme.palette.success.lighter,
              color: theme.palette.success.dark,
            }}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md shadow-md mb-1 bg-white">
              <img
                src={getImageUrl("country", TeamAImage)}
                alt={TeamAImage}
                className="w-3/4 border"
              />
            </div>
            <Typography variant="subtitle1">{TeamAName}</Typography>
          </div>

          <div className="flex justify-center flex-col items-center gap-2">
            <div className="flex justify-center items-center gap-6">
              <img src={VsImg} alt="vs" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-end">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-md shadow-md mb-1 bg-white">
              <img
                src={getImageUrl("country", TeamBImage)}
                alt={TeamBImage}
                className="w-3/4 border"
              />
            </div>
            <Typography variant="subtitle1">{TeamBName}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
