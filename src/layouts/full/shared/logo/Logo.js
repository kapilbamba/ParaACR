import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, styled } from "@mui/material";
import LogoImage from "../../../../assets/images/logos/sepak-logo.png";
import collapseLogo from "../../../../assets/images/logos/sepak-logo.png";

const Logo = ({ lms }) => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    // height: customizer.TopbarHeight,
    width: customizer.isCollapse
      ? customizer.isSidebarHover
        ? "75%"
        : "40px"
      : "100%",
    overflow: "hidden",

    display: "block",
    margin: "auto",
    transition: "ease-in-out 0.5s",
  }));
  return (
    <LinkStyled
      to={lms ? "#" : "/"}
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "10px 0px",
      }}
    >
      {customizer.isCollapse ? (
        customizer.isSidebarHover ? (
          <img src={LogoImage} alt="" />
        ) : (
          <img className="" src={collapseLogo} alt="" />
        )
      ) : (
        <Box className="px-2 mx-auto  flex items-center gap-3">
          <img src={LogoImage} alt="logo" className="w-[70%] mx-auto" />
        </Box>
      )}
    </LinkStyled>
  );
};

export default Logo;
