import { Typography, useTheme } from "@mui/material";
import React from "react";
import { PiArrowFatLinesRightDuotone, PiUserDuotone } from "react-icons/pi";

const AccountCard = () => {
  const theme: any = useTheme();
  return (
    <div className="shadow rounded-lg bg-white grid grid-cols-3 gap-4 items-center  right-1  relative">
      <div className="bg-gray-100 p-5 rounded-se-lg rounded-ee-lg flex items-center justify-center">
        <PiUserDuotone size={35} />
      </div>
      <div className="flex flex-col col-span-2 gap-1 py-5">
        <Typography variant="h5">Volunteer</Typography>
        <Typography variant="body1" color={theme.palette.gray?.main}>
          Lorem ipsum dolor sit amet.
        </Typography>
        <div className="absolute bottom-1 right-1">
          <PiArrowFatLinesRightDuotone size={20} />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
