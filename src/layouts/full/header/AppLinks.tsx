import { Box, Typography, Grid, Stack, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/Store";
import { appsLink } from "./menuData";
import { setAppInfo } from "../../../store/slice/app/AppSlice";

const AppLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Rights } = useSelector((state: RootState) => state.user?.UserInfo);
  const theme: any = useTheme();
  return (
    <Grid container spacing={2} mb={4}>
      {appsLink(Rights || []).map((links: any, index: number) => {
        let Icon = links?.avatar;
        if (links.hidden) return <></>;
        return (
          <Grid
            item
            lg={4}
            key={`${links.title}${index}`}
            onClick={() => {
              if (links.disabled) return;
              if (links.title !== "/coming-soon") {
                dispatch(setAppInfo({ SelectedApp: links.title }));
              }
              navigate(links.href);
            }}
            className={`hover-text-primary ${
              !links.disabled
                ? "cursor-pointer"
                : "opacity-40 cursor-not-allowed	"
            }`}
          >
            <Stack
              direction="row"
              spacing={2}
              style={{
                filter: links.disabled ? " grayscale(100%)" : "inherit",
                borderBottom: "1px dashed",
                borderColor: theme?.palette?.gray?.lighter,
                paddingBottom: 10,
              }}
            >
              <Box
                minWidth="45px"
                height="45px"
                bgcolor={links.subtext === "Admin" ? "#1ba3a3" : "grey.100"}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {Icon && (
                  <Icon
                    size={25}
                    color={
                      links.subtext === "Admin"
                        ? "white"
                        : theme.palette.primary.dark
                    }
                  />
                )}
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  color="textPrimary"
                  className="text-hover"
                  sx={{
                    width: "240px",
                  }}
                >
                  {links.title}
                </Typography>
                <Typography
                  color={theme.palette.slate.dark}
                  variant="subtitle2"
                  fontSize="12px"
                  sx={{
                    width: "300px",
                  }}
                >
                  {links.subtext}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AppLinks;
