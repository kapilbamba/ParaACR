import { Tabs, Tab, Paper, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "src/store/slice/app/AppSlice";

const CustomTab = ({ value = 'Men', onChange }: {
  value: string;
  onChange: (val: string) => void
}) => {

  const dispatch = useDispatch();

  const theme: any = useTheme();

  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50px",
      }}
    >
      <Tabs
        value={value}
        onChange={(event: React.ChangeEvent<{}>, newValue: string) => {
          onChange(newValue)
          dispatch(setCategorySelected(newValue))
        }}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          padding: "8px 10px",
          borderRadius: "50px",
          "& .Mui-selected": {
            backgroundColor: "white",
            borderRadius: "25px",
            color: "#389fd7 !important",
            border: "none",
          },
          "& .MuiTab-root": {
            color: "white",
            padding: "5px 10px",
            minHeight: "35px",
          },

          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="Men" value="Men" />
        <Tab label="Women" value="Women" />
      </Tabs>
    </Paper>
  );
};

export default CustomTab;
