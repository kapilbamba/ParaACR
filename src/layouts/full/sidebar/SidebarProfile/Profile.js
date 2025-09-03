import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { IconPower } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

import img1 from "src/assets/images/profile/user-1.jpg";
import { setUserID } from "src/store/slice/user/userSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserID(null));
    navigate("/auth/login");
  };

  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${"secondary.light"}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Remy Sharp" src={img1} />

          <Box>
            <Typography variant="h6" color="textPrimary">
              Mathew
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Designer
            </Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Tooltip
              onClick={() => handleLogout()}
              title="Logout"
              placement="top"
              arrow
            >
              <IconButton color="primary" aria-label="logout" size="small">
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
};
