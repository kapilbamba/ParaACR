/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery, Box, Drawer, useTheme } from "@mui/material";
import SidebarItems from "./SidebarItems";
import Logo from "../shared/logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import {
  hoverSidebar,
  toggleMobileSidebar,
} from "../../../store/slice/customizer/CustomizerSlice";
import Scrollbar from "../../../components/common/Scrollbar";
import { useRef, useEffect } from "react";

const Sidebar = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();
  const ref = useRef();

  const toggleWidth =
    customizer.isCollapse && !customizer.isSidebarHover
      ? customizer.MiniSidebarWidth
      : customizer.SidebarWidth;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
  };

  const handleClick = (e) => {
    if (lgUp)
      if (ref && ref.current)
        if (!ref.current?.contains(e.target)) {
          onHoverLeave();
        }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return window.removeEventListener("click", handleClick);
  }, []);

  if (lgUp) {
    return (
      <Box
        ref={ref}
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          ...(customizer.isCollapse && {
            position: "absolute",
          }),
        }}
      >
        <Drawer
          anchor="left"
          open
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          variant="permanent"
          PaperProps={{
            sx: {
              transition: theme.transitions.create("width", {
                duration: theme.transitions.duration.shortest,
              }),
              width: toggleWidth,
              boxSizing: "border-box",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "0px",
              borderBottomRightRadius:"20px",
            },
          }}
        >
          <Box
          className="bg-gradient-to-br from-sky-600 to-indigo-500"
            sx={{
              // backgroundColor:"#1f4273",
              // backgroundImage:"linear-gradient(180deg, #d2e9fcb3 43.02%, #7ea3d9b3 79.37%)",
          // backgroundImage:"linear-gradient(180deg,#6366f1  43.02%,#0284c7  79.37%)",

              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              borderTopLeftRadius: "0px",

              color: customizer.activeSidebarBg === "#000" ? "" : "white",
              height: "100%",
            }}
          >
            <Box p={3}>
              <Logo />
            </Box>
            <Scrollbar sx={{ height: "calc(100% - 180px )" }}>
              <SidebarItems />
            </Scrollbar>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={customizer.isMobileSidebar}
      onClose={() => dispatch(toggleMobileSidebar())}
      variant="temporary"
        // className="bg-gradient-to-br from-sky-600 to-indigo-500"
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth,
          // backgroundColor: "#1f4273",
          backgroundImage:"linear-gradient(333deg,#6366f1  43.02%,#0284c7  79.37%)",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: "0px",

          color: customizer.activeSidebarBg === "#ffffff" ? "" : "white",
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <Box >
        <Logo />
      </Box>
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
