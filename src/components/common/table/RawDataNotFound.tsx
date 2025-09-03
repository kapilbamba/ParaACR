import { Box, Paper, Typography, useTheme } from "@mui/material";
import { BiError } from "react-icons/bi";

const RawDataNotFound = ({ message }: { message?: string }) => {
  const theme = useTheme();

  return (
    <Paper sx={{ boxShadow: "none" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          color: theme.palette.secondary.light,
        }}
      >
        <BiError size={60} />
      </Box>
      <Typography
        gutterBottom
        align="center"
        variant="subtitle1"
        sx={{
          color: theme.palette.secondary.main,
        }}
      >
        {message ? message : "No Records Found"}
      </Typography>
    </Paper>
  );
};

export default RawDataNotFound;
