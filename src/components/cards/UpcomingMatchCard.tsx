import {
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { BiCalendar } from "react-icons/bi";

import ShopAvtar from "src/components/common/image/ShopAvtar";
import VsImg from "src/assets/images/vs.png";
const UpcomingMatchCard = ({ match }: { match: any }) => {
  const theme = useTheme();
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box className="flex flex-col items-center">
          <ShopAvtar
            type="country"
            variant="rounded"
            src={match.teamAFlag}
            sx={{ width: 40, height: 40, borderRadius: "5px", border:"1px solid #eee" }}          />
          <Typography variant="subtitle1" className="!mt-2">
            {match.teamAName}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          <img src={VsImg} alt="vs" />
        </Typography>
        <Box className="flex flex-col items-center">
          <ShopAvtar
            type="country"
            variant="rounded"
            src={match.teamBFlag}
            sx={{ width: 40, height: 40, borderRadius: "5px", border:"1px solid #eee" }}          />
          <Typography variant="subtitle1" className="!mt-2">
            {match.teamBName}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        className="text-center !mt-2"
      >
        Indira gandhi stadium delhi
      </Typography>
    </div>
  );
};

export default UpcomingMatchCard;
