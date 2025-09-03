import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { MonthsData } from "src/utils";
import { RootState } from "src/store/Store";
import { setMonth } from "src/store/slice/app/AppSlice";

const MonthDropdown = ({ onChange }: any) => {
  const { month } = useSelector(
    (state: RootState) => state.appInfo?.DateFilter
  );

  const dispatch = useDispatch();

  function changeYearHandler(event: SelectChangeEvent) {
    if (onChange) {
      onChange(event.target.value as string);
    }
    dispatch(setMonth(event.target.value as string));
  }
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Select
        sx={{
          "& .MuiNativeSelect-select": {
            padding: "5px 20px 5px 10px !important",
          },
          backgroundColor: "#fff",
          border: "1px solid #cccccc",
          marginRight: "10px",
        }}
        value={month}
        onChange={(e) => changeYearHandler(e)}
      >
        {MonthsData.map((x: any) => (
          <MenuItem value={x?.id} key={x?.id}>
            {x.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MonthDropdown;
