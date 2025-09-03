import React from "react";
import { Avatar, Card, Typography, Box, Grid, useTheme } from "@mui/material";
import NoImg from "src/assets/images/user.svg";
import {
  BiCalendar,
  BiDroplet,
  BiFemale,
  BiFlag,
  BiIdCard,
  BiMale,
  BiMapPin,
  BiUser,
} from "react-icons/bi";
import { getImageUrl } from "src/utils";
import dayjs from "dayjs";

export interface IParticipantDetailCardProps {
  data: any;
}

const ParticipantDetailCard: React.FC<IParticipantDetailCardProps> = ({
  data,
}) => {
  const theme: any = useTheme();
  return (
    <Grid container justifyContent="center">
      <Grid item md={12}>
        <Card className="relative before:absolute before:top-0 before:left-0 before:w-[12%] before:h-full before:rounded-s-xl before:bg-[#006666]/10">
          <div className="flex flex-wrap items-center gap-7 ">
            <Avatar
              src={ getImageUrl("profile", data.Photo,data.Gender) }
              className="border-l-8 border-orange-500 !rounded-s-lg !rounded-e-none"
              sx={{
                width: 220,
                height: 220,
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.common.white,
                boxShadow: theme.shadows[3],
              }}
            />

            <div className="flex flex-1 flex-col relative">
              <div className="flex items-center">
                <Typography
                  variant="h3"
                  className="flex flex-1 items-end gap-2"
                >
                  {data.PreferredName}
                </Typography>
                <img
                  src={getImageUrl("country", data?.Image)}
                  alt="CountryFlag"
                  className="w-[5%] rounded-md h-[5vh] object-contain"
                />
              </div>

              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.indigo.main,
                  marginTop: "5px",
                }}
              >
                {data.Role}
              </Typography>
              <Box className="w-full border-t border-dashed border-gray-300 h-1 my-2" />
              <div className="flex items-start justify-between">
                <ul className="grid grid-cols-3 gap-4 mt-5 w-full">
                  <li className="flex gap-2  ">
                    <BiCalendar className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {dayjs(data.DOB).format("MMM DD, YYYY")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Date of Birth
                      </Typography>
                    </div>
                  </li>
                  <li className="flex gap-2  ">
                    <BiUser className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.Gender}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Gender
                      </Typography>
                    </div>
                  </li>

                  <li className="flex gap-2  ">
                    <BiDroplet className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.BloodGroup ?? "N/A"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Blood Group
                      </Typography>
                    </div>
                  </li>
                  <li className="flex gap-2  ">
                    <BiIdCard className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.PassportNo ?? "N/A"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Passport No.
                      </Typography>
                    </div>
                  </li>
                  <li className="flex gap-2  ">
                    <BiIdCard className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.ACRNo}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Accreditation No.
                      </Typography>
                    </div>
                  </li>
                  <li className="flex gap-2  ">
                    <BiUser className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.SpouseName ?? "N/A"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Spouse's Name
                      </Typography>
                    </div>
                  </li>

                  <li className="flex gap-2  ">
                    <BiMale className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.FatherName}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Father Name
                      </Typography>
                    </div>
                  </li>

                  <li className="flex gap-2  ">
                    <BiFemale className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.MotherName ?? "N/A"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Mother Name
                      </Typography>
                    </div>
                  </li>

                  <li className="flex gap-2  ">
                    <BiFlag className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.Nationality}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        Nationality
                      </Typography>
                    </div>
                  </li>

                  <li className="flex gap-2  col-span-3 ">
                    <BiMapPin className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.PAddress},{data.PCity},{data.PCountry}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        PermanentAddress
                      </Typography>
                    </div>
                  </li>
                  <li className="flex gap-2  col-span-3 ">
                    <BiMapPin className="mt-1 text-gray-300" />
                    <div className="">
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {data.CAddress},{data.CCity},{data.CCountry}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.gray.dark,
                        }}
                      >
                        CurrentAddress
                      </Typography>
                    </div>
                  </li>
                </ul>
                <Avatar
                  src={
                    data.QRCodeImage
                      ? getImageUrl("qr-codes", data?.QRCodeImage)
                      : NoImg
                  }
                  sx={{
                    width: 250,
                    height: 250,
                    color: theme.palette.common.white,
                    borderRadius: "0px",
                  }}
                />
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ParticipantDetailCard;
