import { Box, Typography, useTheme } from "@mui/material";
import PageContainer from "./PageContainer";
import { HandymanSharp } from "@mui/icons-material";

const ComingSoon = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <HandymanSharp
          sx={{
            color: theme.palette.grey[500],
            fontSize: "10vh",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            padding: "20px 0px",
          }}
        >
          This page is under development
        </Typography>
      </Box>
    </>
  );
};

export default ComingSoon;
