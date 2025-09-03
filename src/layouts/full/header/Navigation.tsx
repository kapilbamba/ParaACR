import { Box, Menu, Typography, Button } from "@mui/material";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import AppLinks from "./AppLinks";

const Navigation = () => {
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  return (
    <Box className="flex items-center">
      <Link to="/">
        {/* <Typography variant="h6" ml={5}>
          Dashboard
        </Typography> */}
      </Link>
      {/* <Button
        color="inherit"
        sx={{
          bgcolor: anchorEl2 ? "slate.main" : "",
          color: anchorEl2
            ? "secondary.main"
            : (theme) => theme.palette.text.secondary,
          marginLeft: 5,
        }}
        onClick={handleClick2}
        endIcon={
          <FaAngleDown
            size="15"
            style={{ marginLeft: "-5px", marginTop: "2px" }}
          />
        }
      >
        <Typography variant="h6">Modules</Typography>
      </Button>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "66%",
            paddingHorizontal: 5,
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
          "& .MuiMenu-paper ul": {
            p: 0,
          },
        }}
      >
        <Box pt={4} px={2}>
          <AppLinks />
        </Box>
      </Menu> */}
    </Box>
  );
};

export default Navigation;
