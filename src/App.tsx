import {
  CssBaseline,
  ThemeProvider,
  styled,
  useTheme,
  IconButton,
} from "@mui/material";
import { ThemeSettings } from "./theme/Theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ScrollToTop from "./components/shared/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  MaterialDesignContent,
  SnackbarKey,
  SnackbarProvider,
  useSnackbar,
} from "notistack";
import { BsX } from "react-icons/bs";
import { useLocation, useRoutes } from "react-router-dom";
import AllRoutes from "./routes/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPlatform, setToken } from "./store/slice/app/AppSlice";

const SnackbarCloseButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <BsX />
    </IconButton>
  );
};

const App = () => {
  const dispatch = useDispatch()
  const theme = ThemeSettings();
  const queryClient = new QueryClient();
  const t = useTheme();
  const routing = useRoutes(AllRoutes);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query string
  const token = queryParams.get('token');
  const platform = queryParams?.get("platform")

  useEffect(() => {
    if (token)
      dispatch(setToken(token))
    if (token)
      dispatch(setPlatform(token))
  }, [dispatch, token, platform])

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#afe6e3",
      color: t.palette.text.secondary,
      border: "1px solid",
      borderColor: t.palette.success.light,
      boxShadow: "none",
      width: "100%",
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: "#FDEDE8",
      color: t.palette.text.secondary,
      border: "1px solid",
      borderColor: t.palette.error.light,
      boxShadow: "none",
      width: "100%",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <ScrollToTop>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider
              Components={{
                success: StyledMaterialDesignContent,
                error: StyledMaterialDesignContent,
              }}
              maxSnack={5}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              autoHideDuration={3000}
              action={(snackbarKey) => (
                <SnackbarCloseButton snackbarKey={snackbarKey} />
              )}
            >
              {routing}
            </SnackbarProvider>
          </QueryClientProvider>
        </ScrollToTop>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
