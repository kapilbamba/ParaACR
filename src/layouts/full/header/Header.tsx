import {
  IconButton,
  Box,
  AppBar,
  useMediaQuery,
  Toolbar,
  styled,
  Typography,
  useTheme,
  Button,
  Badge,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { RiMenu2Fill } from "react-icons/ri";
import { BiBell, BiChat } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { enqueueSnackbar } from "notistack";

import Navigation from "./Navigation";
import {
  toggleMobileSidebar,
  toggleSidebar,
} from "../../../store/slice/customizer/CustomizerSlice";
import { RootState } from "../../../store/Store";
import Profile from "./Profile";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { PiBellRinging } from "react-icons/pi";
import { FaBriefcaseMedical } from "react-icons/fa";
import Scrollbar from "src/components/common/Scrollbar";

const titleMap = {
  "/acr": "Accreditation",
  "/accommodation": "Accommodation",
  "/administration": "Administration",
  "/admin": "Admin",
  "/cer": "Ceremonies",
  "/com": "Communications",
  "/cppm": "CPPM",
  "/fac": "Finance & Accounts",
  "/med": "Medical",
  "/mkt": "Marketing",
  "/prc": "Procurement",
  "/sec": "Security",
  "/spt": "Sport",
  "/tec": "Technology",
  "/tpt": "Transport",
  "/vdo": "Venue",
  "/vol": "Volunteer",
};
const Header = () => {
  const theme = useTheme();

  const { pathname } = useLocation();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const customizer = useSelector((state: RootState) => state.customizer);
  const dispatch = useDispatch();
  const [isNofication, setIsNofication] = useState(false);
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "rgba(255,255,255, 0.7)",
    borderBottom: "1px solid ",
    borderColor: theme?.palette?.gray?.light,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  const Title =
    Object.entries(titleMap).find(([key]) => pathname.startsWith(key))?.[1] ??
    "";
  const [notiData, setNotiData] = useState({
    isNofication: false,
    value: null,
  });

  const [modalData, setModalData] = useState<{
    open: boolean;
    value: Record<string, any> | null;
  }>({
    open: false,
    value: null,
  });

  const closeModal = () => setModalData({ open: false, value: null });

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled className="flex justify-between items-center">
        <Box className="flex items-center">
          <IconButton
            color="secondary"
            aria-label="menu"
            onClick={
              lgUp
                ? () => dispatch(toggleSidebar())
                : () => dispatch(toggleMobileSidebar())
            }
          >
            <RiMenu2Fill size="20" />
          </IconButton>
          <Navigation />
        </Box>
        {/* <Box
          sx={{
            backgroundColor: theme.palette.warning.light,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "-5px",
            padding: "7px 30px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          }}
        >
          {Title} Module
        </Box> */}
        <Box className="flex items-center gap-16">
          {/* <BiChat size={27} />
          {notiData?.isNofication ? (
            <Badge variant="dot" color="error">
              <BiBell
                size={27}
                className="cursor-pointer hover:text-primaryMain transition ease-in-out duration-200 hover:duration-500"
                onClick={() => {
                  setIsNofication(!isNofication);
                  setNotiData({ isNofication: false, value: null });
                }}
              />
            </Badge>
          ) : (
            <BiBell
              size={27}
              className="cursor-pointer hover:text-primaryMain transition ease-in-out duration-200 hover:duration-500"
              onClick={() => setIsNofication(!isNofication)}
            />
          )} */}

          <Profile />
        </Box>
      </ToolbarStyled>

      {modalData?.open && (
        <Dialog
          open={modalData.open}
          maxWidth="md"
          fullWidth
          onClose={closeModal}
        >
          <DialogContent>
            <Typography
              variant="h6"
              sx={{
                backgroundColor: theme?.palette?.slate?.main,
                marginBottom: "20px",
                paddingY: 1,
                paddingX: 2,
                borderRadius: "8px",
              }}
            >
              {modalData?.value?.Title || "-"}
            </Typography>

            <div className="grid grid-cols-3 gap-5">
              <div className="">
                <Typography fontSize="small">
                  {modalData?.value?.Description || modalData?.value?.Message}
                </Typography>
                <Typography variant="body2" color="gray.main">
                  Description
                </Typography>
              </div>

              <div className="flex flex-col justify-center">
                <Typography fontSize="small">Zuaib Khan</Typography>

                <Typography variant="body2" color="gray.main">
                  Reported By
                </Typography>
              </div>

              <div className="">
                <Typography fontSize="small">
                  {dayjs().format("MMM DD, YYYY")}
                </Typography>

                <Typography variant="body2" color="gray.main">
                  Date
                </Typography>
              </div>
            </div>

            {/* <div className="h-[60vh]">{direction}</div> */}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={closeModal}
              color="secondary"
              variant={"contained"}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;
export const NotificationModal = ({ theme, data }: any) => {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility

  const visibleNotifications = showAll ? data : data?.slice(0, 5);

  return (
    <div className="absolute shadow-lg border bg-white top-[88%] rounded-md w-[30%] right-32">
      <div className="flex justify-between p-5">
        <Typography variant="h5">Notification</Typography>
      </div>

      <ul className="!pl-0">
        <Scrollbar sx={{ maxHeight: "60vh" }}>
          {visibleNotifications?.map((x: any) => (
            <li
              className="px-5 py-4 hover:bg-slate-100 border-b border-dashed"
              key={x.NotificationID}
            >
              <Link
                to={x?.Source === "Medical" ? "/med/dashboard" : "/dashboard"}
                className="flex items-center gap-2"
              >
                <div className="flex justify-between w-full">
                  <div className="flex flex-1 items-center gap-2">
                    <div className="w-[40px] h-[40px] border rounded-full p-1 flex items-center justify-center">
                      {x?.Source === "Medical" ? (
                        <FaBriefcaseMedical color="red" />
                      ) : (
                        <PiBellRinging />
                      )}
                    </div>
                    <div className="flex flex-col flex-1">
                      <Typography variant="h6">{x.Title}</Typography>

                      <Typography
                        variant="subtitle2"
                        color={theme.palette.secondary.light}
                      >
                        {x.Description}
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="body2"
                    color={theme.palette.secondary.light}
                  >
                    {dayjs(x.DOC).format("MMM DD, YYYY")}
                  </Typography>
                </div>
              </Link>
            </li>
          ))}
        </Scrollbar>

        <div className="px-2 pt-5 pb-2">
          <Button
            variant="contained"
            color="primary"
            className="w-full mb-2"
            onClick={() => setShowAll(!showAll)}
          >
            View {!showAll ? "More" : "Less"}
          </Button>
        </div>
      </ul>
    </div>
  );
};
