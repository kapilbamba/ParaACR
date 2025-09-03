import { useTheme } from "@mui/material";

export default function useGetColor(title: any) {
  const theme = useTheme();
  let color = "",
    imageTitleColor = "";
  if (title === "SafetyTalks") {
    color = "#2c4563";
    imageTitleColor = "#fff";
  } else if (title === "Posters") {
    // color =  "#57b1ea";
    color = theme.palette.grey[500];
    imageTitleColor = "#fff";
  } else if (title === "Infographic") {
    // color = "#bc62f3";
    imageTitleColor = "#fff";
    color = theme.palette.grey[500];
  }

  return { color, imageTitleColor };
}
