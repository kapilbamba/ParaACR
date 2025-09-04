import { Box, Typography, Button, useTheme, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PageContainer from "src/components/common/components/PageContainer";
import Logo from "../../assets/images/logos/para-logo.png";
import LoginBG from "../../assets/images/login_ban.jpg";


const LoginFailed = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <PageContainer
      title="Login Failed"
      description="this is Forgot Password page"
    >
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h4" textAlign="center">
                Sorry, Login Failed
              </Typography>
              <Typography
                color="slate.dark"
                variant="subtitle2"
                textAlign="center"
                mt={1}
              >
                {state?.message || "Invalid credentials"}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  marginTop: "50px",
                  "&:hover": {
                    backgroundColor: theme.palette.grey[500],
                    color: theme.palette.secondary.main,
                  },
                }}
                onClick={() => {
                  navigate(-1);
                  // navigate("/");
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

export default LoginFailed;
