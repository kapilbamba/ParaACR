import { Button, Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";
import PageContainer from "src/components/common/components/PageContainer";
import RegImage from "src/assets/images/form-reg.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <PageContainer title="Dashboard">
      <Card className="!mt-8">
        <CardContent>
          <Box className="flex flex-col justify-center items-center bg-[#f5f5f5] text-center min-h-[70vh] bg-[url('./assets/images/single_run.png')]  !bg-no-repeat relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('./assets/images/sit_kho.png')] before:bg-no-repeat before:bg-right-bottom before:opacity-20">
            <img src={RegImage} alt="player" className="w-[18vh] mb-[4%]" />
            <Typography variant="h3" color="primary" gutterBottom>
              Welcome to the Dashboard
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className="w-[30%]"
            >
              Here you can manage participants, track activities, and stay
              up-to-date with the latest information. Click the button below to
              proceed with participant registration.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/agency")}
              sx={{
                mt: 5,
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Participant Registration
            </Button>
          </Box>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
