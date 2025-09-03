import {
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { BiCalendar } from "react-icons/bi";

import VsImg from "src/assets/images/vs.png";
import ShopAvtar from "../common/image/ShopAvtar";

const MatchResultCard = ({ match }: { match: any }) => {
  const theme = useTheme();

  // Add result properties (for example)
  const teamAResult = match.teamAResult || "N/A"; // Replace with actual match result
  const teamBResult = match.teamBResult || "N/A"; // Replace with actual match result
  const matchStatus = match.status || "Completed"; // Could be "Completed", "Ongoing", or "Upcoming"

  // Determine result label
  const resultLabel =
    teamAResult === teamBResult ? "Draw" : teamAResult > teamBResult ? "Team A Wins" : "Team B Wins";

  return (
    <div className="shadow p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-2">
        <Typography variant="h6">{match.matchTitle}</Typography>
        <div>
          <Typography
            variant="subtitle2"
            className="flex items-center gap-2 justify-end"
            color={theme.palette.slate.dark}
            gutterBottom
          >
            <BiCalendar /> {match.date} - {match.time}
          </Typography>
        </div>
      </div>

      {/* Teams and Score */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box className="flex flex-col items-center">
          <ShopAvtar
            type="country"
            variant="rounded"
            src={match.teamAFlag}
            sx={{ width: 40, height: 40, borderRadius: "5px", border:"1px solid #eee" }}
          />
          <Typography variant="subtitle1" className="!mt-2">
            {match.teamAName}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
            {teamAResult}
          </Typography>
        </Box>

        {/* VS Image */}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          <img src={VsImg} alt="vs" />
        </Typography>

        <Box className="flex flex-col items-center">
          <ShopAvtar
            type="country"
            variant="rounded"
            src={match.teamBFlag}
            sx={{ width: 40, height: 40, borderRadius: "5px", border:"1px solid #eee" }}
          />
          <Typography variant="subtitle1" className="!mt-2">
            {match.teamBName}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
            {teamBResult}
          </Typography>
        </Box>
      </Box>

      {/* Match Result */}
      <Box className="text-center !mt-2">
        <Typography variant="h6" color={matchStatus === "Completed" ? "textPrimary" : "warning.main"}>
          {resultLabel} - {matchStatus}
        </Typography>
      </Box>

      {/* Venue */}
      <Typography
        variant="body2"
        color="textSecondary"
        className="text-center !mt-2"
      >
        {match.venue || "Indira Gandhi Stadium, Delhi"}
      </Typography>
    </div>
  );
};

export default MatchResultCard;
