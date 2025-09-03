import { Box, Typography, Button, useTheme } from "@mui/material";
import { IconAlertTriangle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import PageContainer from "src/components/common/components/PageContainer";

const Error = () => {
  const theme = useTheme();
  return (
    <PageContainer title="404">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <IconAlertTriangle
          style={{
            width: "70px",
            height: "70px",
          }}
          color={theme.palette.grey[500]}
        />

        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            padding: "20px 0px",
          }}
        >
          Page not found
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/dashboard"
          disableElevation
        >
          Go Back to Home
        </Button>
      </Box>
    </PageContainer>
  );
};

export default Error;
