import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  useTheme,
  IconButton,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import { resetAppInfo } from "../../../store/slice/app/AppSlice";
import { resetAuthInfo } from "../../../store/slice/user/userSlice";
import Scrollbar from "../../../components/common/Scrollbar";
import ChangePasswordModal from "./ChangePasswordModal";
import { getImageUrl, getNameChar } from "../../../utils";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);

  const { UserInfo } = state;

  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);

  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleLogout = () => {
    dispatch(resetAppInfo());
    dispatch(resetAuthInfo());

    navigate("/auth/login");
  };

  const theme = useTheme();

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          color: anchorEl2 ? "primary.light" : "inherit",
          backgroundColor: (theme) =>
            anchorEl2
              ? theme.palette.primary.lighter
              : theme.palette.primary.lighter,
          padding: 1,

          cursor: "pointer",
        }}
        onClick={handleClick2}
      >
        <Avatar
          sx={{
            width: 35,
            height: 35,
            fontSize: "15px",
            fontWeight: 500,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
          }}
        >
          {getNameChar(UserInfo?.Organisation)}
        </Avatar>
      </IconButton>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "360px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          },
        }}
      >
        <Scrollbar sx={{ height: "100%", maxHeight: "85vh" }}>
          <Box p={3}>
            <Stack direction="row" pb={1} spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.slate.light,
                  color: theme.palette.slate.dark,
                }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  fontWeight={600}
                  className=" break-all w-[250px] !block "
                >
                  {UserInfo?.Organisation}
                </Typography>

                <Typography
                  variant="subtitle2"
                  className=" break-all w-[250px] !block "
                  color="textPrimary"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {UserInfo?.EmailID}
                </Typography>
              </Box>
            </Stack>
            <Divider />

            <Divider />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="space-between"
              mt={2}
              gap={2}
            >
              <Box>
                <Button
                  onClick={() => setOpenChangePasswordModal(true)}
                  variant="outlined"
                  color="secondary"
                  disabled={UserInfo?.Microsoft}
                >
                  Change Password
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "6px 30px",
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          </Box>
        </Scrollbar>
      </Menu>

      <ChangePasswordModal
        open={openChangePasswordModal}
        onClose={setOpenChangePasswordModal}
      />
    </Box>
  );
};

export default memo(Profile);
