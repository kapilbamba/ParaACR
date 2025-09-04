import { Box, Typography, Grid } from "@mui/material";
import Logo from "src/assets/images/logos/para-logo.png";
import PageContainer from "../../components/common/components/PageContainer";
import AuthLogin from "./AuthLogin";
import LoginBG from "../../assets/images/login_ban.jpg";

const Login = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Grid
        container
        justifyContent="center"
        spacing={0}
        sx={{ overflowX: "hidden", height: "100%" }}
      >
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
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
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
              height="100vh"
              // height={"calc(100vh - 75px)"}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  opacity: "0.5",
                  backdropFilter: "blur(4px)",
                  backgroundColor: " #111",
                },
              }}
            >
              <img
                src={LoginBG}
                alt="bg"
                className="w-full h-screen object-cover"
              />
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
            <Typography variant="h4" textAlign="center">
              Responsible Organization (RO) Login
            </Typography>
            <Typography
              color="slate.dark"
              variant="subtitle2"
              textAlign="center"
              mt={1}
            >
              Enter your email and password
            </Typography>
            <AuthLogin />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Login;
