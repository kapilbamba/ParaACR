import { Card, Typography, useTheme } from "@mui/material";
import Profile from "src/assets/images/userProfile.jpeg";
import Logo from "src/assets/images/logo.png";
import SpoImg1 from "src/assets/images/aff.png";
import SpoImg2 from "src/assets/images/ioa.png";
import SpoImg3 from "src/assets/images/khelo-india.png";
import SpoImg4 from "src/assets/images/commonwealth.png";
import CafatIcon from "src/assets/images/cafaterea.svg";
import WaveImg from "src/assets/images/upper_wave.png";
import BottomWaveImg from "src/assets/images/bottom_wave.png";
import { getImageUrl } from "src/utils";
import {
  PiIdentificationCardDuotone,
  PiUserDuotone,
} from "react-icons/pi";

const PrintableIdCard = ({
  AcrName,
  PreferredName,
  Photo,
  QRCodeImage,
  ACRNo,
  Gender
}: any) => {
  const theme: any = useTheme();
  return (
    <Card className="!shadow-none !p-0">
      <div className="border border-dashed border-gray-400 rounded-md flex p-8 ">
        <div className="flex flex-col basis-1/2 relative overflow-hidden rounded-t-md">
          <img src={WaveImg} alt="wave" className="-mt-12 rounded-t-md" />

          <div className="grid grid-cols-2 gap-4 px-2 py-2">
            <div>
              <div className="w-[80%] border rounded-md">
                <img
                  src={getImageUrl("profile", Photo, Gender)}
                  alt="Profile"
                  className="rounded-md h-[20vh] object-contain"
                />
              </div>
              <Typography variant="h5" className="text-left pt-2 pl-1">
                {PreferredName}
              </Typography>
              <div className="flex items-center">
                <Typography
                  variant="subtitle1"
                  color={theme.palette.slate.dark}
                  className="pl-1"
                >
                  <PiUserDuotone className="mt-1 text-gray-500" />
                </Typography>

                <Typography
                  variant="subtitle1"
                  color={theme.palette.slate.dark}
                  className="pl-1"
                >
                  :
                </Typography>
                <Typography variant="subtitle1" className="pl-1 !font-semibold">
                  {AcrName}
                </Typography>
              </div>

              <div className="flex items-center">
                <Typography
                  variant="subtitle1"
                  color={theme.palette.slate.dark}
                  className="pl-1"
                >
                  <PiIdentificationCardDuotone className="mt-1 text-gray-500" />
                </Typography>

                <Typography
                  variant="subtitle1"
                  color={theme.palette.slate.dark}
                  className="pl-1"
                >
                  :
                </Typography>
                <Typography variant="subtitle1" className="pl-1 !font-semibold">
                  {ACRNo}
                </Typography>
              </div>
              <Typography variant="subtitle1" className="pl-1"></Typography>
            </div>
            <div className="flex flex-col">
              <img src={Logo} alt="Logo" className="w-full mx-auto" />
              <div
                className="p-2 text-center relative mt-auto rounded-md"
                style={{
                  backgroundColor: theme.palette.error.main,
                }}
              >
                <Typography
                  variant="h1"
                  className="!font-bold !text-[2.8rem]"
                  color={theme.palette.error.contrastText}
                >
                  KKFI
                </Typography>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-[30px] mb-[80px] z-30 px-2 relative">
            <div className="flex gap-4 items-center justify-center relative col-span-2">
              <div className="w-[30%] mt-3 flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <Typography variant="subtitle1" className="!font-bold">
                  TA
                </Typography>
              </div>
              <div className="w-[30%] mt-3 flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <img
                  src={CafatIcon}
                  alt="Profile"
                  className="rounded-md w-[40%]  "
                />
              </div>

              <div className="w-[30%] mt-3 flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <Typography variant="subtitle1" className="!font-bold">
                  CMD
                </Typography>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                src={
                  QRCodeImage ? getImageUrl("qr-codes", QRCodeImage) : Profile
                }
                alt={QRCodeImage}
                className="rounded-md w-[28%] mt-5 absolute"
              />
            </div>
          </div>
          <img
            src={BottomWaveImg}
            alt="wave"
            className=" absolute bottom-10 z-10"
          />

          <div
            className="h-20 px-3 flex items-center  justify-end rounded-b-md relative z-30"
            style={{
              backgroundColor: theme.palette.indigo.main,
            }}
          >
            <Typography
              variant="h1"
              className="!font-bold !text-[2.8rem]"
              color={theme.palette.indigo.contrastText}
            >
              01
            </Typography>
          </div>
        </div>
        <div className=" border border-dashed border-gray-400 mx-8"></div>
        <div className="flex flex-col basis-1/2 relative overflow-hidden rounded-t-md">
          <img src={WaveImg} alt="wave" className="-mt-12 rounded-t-md" />
          <Typography variant="h5" className="text-left pt-2 pl-1 !mb-3">
            Terms and Conditions
          </Typography>

          <Typography
            variant="body1"
            color="secondary.main"
            className="text-left pt-2 pl-1"
          >
            I agree that the following terms and conditions apply to the use of
            this accreditation card:
          </Typography>

          <ul className="gap-4 flex flex-col !list-decimal pl-5">
            <li>
              <Typography
                variant="body1"
                color="secondary.main"
                className="text-left pt-2 pl-1"
              >
                This Accreditation Card is personal, non-transferable, must be
                displayed at all times while in areas requiring accreditation
                and is valid only in areas specified on this Card.
              </Typography>
            </li>

            <li>
              <Typography
                variant="body1"
                color="secondary.main"
                className="text-left pt-2 pl-1"
              >
                This Accreditation Card is the property of KHO-KHO International
                who has the right at their sole discretion to suspend or revoke
                it at any time.
              </Typography>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-5 my-5">
            <div className="bg-slate-50 p-2 flex items-center gap-2 rounded-md border-slate-100 border ">
              <div className="w-[30%]  flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <Typography variant="subtitle1" className="!font-bold">
                  TA
                </Typography>
              </div>

              <Typography variant="subtitle1" className="!font-bold ">
                Training Area
              </Typography>
            </div>

            <div className="bg-slate-50 p-2 flex items-center gap-2 rounded-md border-slate-100 border ">
              <div className="w-[30%]  flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <img
                  src={CafatIcon}
                  alt="Profile"
                  className="rounded-md w-[60%]  "
                />
              </div>

              <Typography variant="subtitle1" className="!font-bold ">
                Cafeteria
              </Typography>
            </div>

            <div className="bg-slate-50 p-2 flex items-center gap-2 rounded-md border-slate-100 border ">
              <div className="w-[30%]  flex justify-center items-center border relative border-black h-10 bg-[#006666] p-1"></div>

              <Typography variant="subtitle1" className="!font-bold ">
                Field of play
              </Typography>
            </div>

            <div className="bg-slate-50 p-2 flex items-center gap-2 rounded-md border-slate-100 border ">
              <div className="w-[30%]  flex justify-center items-center border relative border-black h-10 bg-white p-1">
                <Typography variant="subtitle1" className="!font-bold">
                  CMD
                </Typography>
              </div>

              <Typography variant="subtitle1" className="!font-bold ">
                CMD
              </Typography>
            </div>
          </div>
          <div className="h-20 px-3 bg-slate-100  flex items-center  mt-auto justify-center gap-11 rounded-b-md relative z-30">
            <img src={SpoImg1} alt="Profile" className="rounded-md w-[16%]" />
            <img src={SpoImg2} alt="Profile" className="rounded-md w-[14%]" />
            <img src={SpoImg3} alt="Profile" className="rounded-md w-[16%]" />
            <img src={SpoImg4} alt="Profile" className="rounded-md w-[16%]" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PrintableIdCard;
