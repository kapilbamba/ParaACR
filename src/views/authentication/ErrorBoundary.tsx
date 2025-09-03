import { Box, Typography } from "@mui/material";
import { IconAlertTriangle } from "@tabler/icons-react";
import PageContainer from "src/components/common/components/PageContainer";

const ErrorBoundryFallback = () => {
  return (
    <PageContainer title="404">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="90vh"
      >
        <IconAlertTriangle
          style={{
            width: "70px",
            height: "70px",
            color: "#cccccc",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            color: "#082f49",
            padding: "20px 0px",
          }}
        >
          It looks like we've run into an issue.
        </Typography>
        <button
          style={{
            backgroundColor: "#389fd7",
            color: "#fff",
            padding: "8px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "20px 0px",
          }}
          className="custombtn"
          onClick={() => {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/";
          }}
        >
          Try Again
        </button>
      </Box>
    </PageContainer>
  );
};

export default ErrorBoundryFallback;
