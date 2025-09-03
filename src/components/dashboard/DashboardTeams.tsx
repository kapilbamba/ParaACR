import { Typography, useTheme, Box, Button } from "@mui/material";

import India from "src/assets/images/countries/indian.jpg";
import Nepal from "src/assets/images/countries/nepal.png";
import Indonasia from "src/assets/images/countries/indo.png";
import TabCard from "src/components/cards/TabCard";
import { NavLink } from "react-router-dom";

const tab1 = [
  { title: "India", image: India },
  { title: "Nepal", image: Nepal },
  { title: "Indonesia", image: Indonasia },
];

function DashboardTeams() {
  const theme: any = useTheme();

  return (
    <div className=" py-5">
      <div className="flex justify-between items-center mb-5">
        <Typography
          variant="h5"
          fontWeight={700}
          color={theme.palette.gray.dark}
        >
          Teams
        </Typography>
        <NavLink to="/teams">
          <Button size="small" variant="outlined" color="primary">
            View all
          </Button>
        </NavLink>{" "}
      </div>

      <div className="grid grid-cols-1 mt-2">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <div className="grid grid-cols-3 gap-4">
            {tab1?.map((x) => (
              <TabCard {...x} key={x.title} />
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default DashboardTeams;
