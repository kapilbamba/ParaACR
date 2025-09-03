import { styled, Container, Box, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import React, {  useEffect } from "react";
import dayjs from "dayjs";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { resetAppInfo } from "src/store/slice/app/AppSlice";
import { setUserID, setUserInfo } from "src/store/slice/user/userSlice";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));
interface IFullLayout {
  children?: React.ReactNode;
}
const FullLayout: React.FC<IFullLayout> = ({ children }) => {
  const customizer = useSelector((state: any) => state.customizer);
  const { timestamp, UserID } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  useEffect(() => {
    if (timestamp) {
      if (+dayjs().diff(dayjs(timestamp), "minutes") > 720) {
        dispatch(setUserID(null));
        dispatch(setUserInfo(null));
        dispatch(resetAppInfo());
        localStorage.clear();
        window.location.reload();
      }
    } else {
      localStorage.clear();
    }
  }, [dispatch, timestamp]);

  if (!UserID) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <MainWrapper
      className="mainwrapper"
      sx={{
        backgroundColor: "#f7f7f8",
        position: "relative",
      }}
    >
      <Sidebar />

      <PageWrapper
        className="page-wrapper"
        sx={{
          paddingBottom: 0,
          ...(customizer.isCollapse && {
            [theme.breakpoints.up("lg")]: {
              ml: `${customizer.MiniSidebarWidth}px`,
            },
          }),
        }}
      >
        <Header />
        <Container
          sx={{
            maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
            backgroundColor: "#f7f7f8",
            padding: 0,
            paddingBottom: "50px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
        </Container>
        {/* <BottomBar /> */}
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
