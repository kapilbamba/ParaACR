import React, { useState, useEffect } from "react";
import { Button, Chip, Typography, useTheme } from "@mui/material";
import { BsDot } from "react-icons/bs";
import IndianFlag from "src/assets/images/indian-flag.png";
import AusImg from "src/assets/images/australia.png";
import NepImg from "src/assets/images/nepal.png";

interface CountdownChipProps {
  initialTime: number; // Time in seconds
}

const CountdownChip: React.FC<CountdownChipProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 240);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Chip
      label={formatTime(timeLeft)}
      sx={{
        backgroundColor: "gray.light",
      }}
    />
  );
};

interface MatchCardProps {
  title: string;
  team1: string;
  team2: string;
  team1Flag: string;
  team2Flag: string;
  score1: number;
  score2: number;
  initialTime: number;
  chipLabel: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  title,
  team1,
  team2,
  team1Flag,
  team2Flag,
  score1,
  score2,
  initialTime,
  chipLabel,
}) => {
  const theme: any = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="!shadow-lg wave_bg bg-cover bg-center bg-white p-5 rounded-lg relative mb-5 ">
      <div className="flex justify-between items-center mb-10">
        <Typography
          variant="subtitle2"
          fontWeight={600}
          className="text-center  flex items-center justify-center"
        >
          <sup className="   -right-[1.2%] !-top-[1em] text-red-600">
            <BsDot size={25} />
          </sup>
          {title}
        </Typography>

        <Button variant="contained" color="primary" size="small" onClick={() => setOpen(true)}>
          View Match
        </Button>
      </div>
      <div className="flex justify-between">
        {/* Left Team */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-md mb-1 bg-white">
            <img src={team1Flag} alt={team1} className="w-1/2" />
          </div>
          <Typography variant="subtitle1">{team1}</Typography>
          <Typography variant="body2" color="#389fd7">
            Attacking
          </Typography>
        </div>

        {/* Match Score */}
        <div className="flex justify-center flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <Typography variant="h1" color={theme.palette.primary.main}>
              {score1}
            </Typography>
            <Typography variant="h1" color={theme.palette.primary.main}>
              :
            </Typography>
            <Typography variant="h1" color={theme.palette.primary.main}>
              {score2}
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <CountdownChip initialTime={initialTime} />
            <Chip
              label="Turn 1"
              sx={{
                backgroundColor: theme.palette.gray.lighter,
                color: theme.palette.gray.dark,
              }}
            />
          </div>
        </div>

        {/* Right Team */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-md mb-1 bg-white">
            <img src={team2Flag} alt={team2} className="w-1/2" />
          </div>
          <Typography variant="subtitle1">{team2}</Typography>
          <Typography variant="body2" color="#389fd7">
            Defending
          </Typography>
        </div>
      </div>

     
    </div>
  );
};

const Matches: React.FC = () => {
  return (
    <div>
      <MatchCard
        title="Live Streaming - Men's Match"
        team1="Nepal"
        team2="India"
        team1Flag={NepImg}
        team2Flag={IndianFlag}
        score1={2}
        score2={3}
        initialTime={1800} // 30 minutes
        chipLabel="Men's Match"
      />

      <MatchCard
        title="Live Streaming - Women's Match"
        team1="Australia"
        team2="India"
        team1Flag={AusImg}
        team2Flag={IndianFlag}
        score1={1}
        score2={1}
        initialTime={1200} // 20 minutes
        chipLabel="Women's Match"
      />
    </div>
  );
};

export default Matches;
