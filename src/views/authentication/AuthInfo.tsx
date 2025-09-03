import { Box, Typography, Button, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import Logo from "src/assets/images/logos/logo.svg";
import PageContainer from "src/components/common/components/PageContainer";
import crmImage from "src/assets/images/logos/logo.svg";

const AuthInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <PageContainer title="Login" description="this is Login page">
      <Grid container spacing={0} sx={{ overflowX: "hidden", height: "100%" }}>
        <Grid
          item
          xs={12}
          md={7}
          lg={7}
          xl={8}
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
            position: "relative",
            "&:before": {
              content: '""',
              backgroundColor: (theme) => theme.palette.grey[500],
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Box position="relative">
            <Box
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height={"calc(100vh - 75px)"}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            >
              <img src={crmImage} alt="bg" />
              {/* <Typography variant="h2" textAlign="center" mt={3}>
                  Welcome to HONDA Admin
                </Typography> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={5} xl={4}>
          <Box p={4}>
            <Box
              px={3}
              sx={{
                width: "80%",
                margin: "auto",
                height: "45vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  marginBottom: "80px",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h4" textAlign="center">
                {state?.title || "Info"}
              </Typography>
              <Typography
                color="slate.dark"
                variant="subtitle2"
                textAlign="center"
                mt={1}
              >
                {state?.message || "Invalid credentials"}
              </Typography>
            </Box>
            <Box className="flex justify-center">
              <Button
                color="primary"
                variant="contained"
                sx={{
                  marginTop: "50px",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AuthInfo;
