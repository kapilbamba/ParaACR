import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { YearData } from "src/utils";
import { RootState } from "src/store/Store";
import { setYear } from "src/store/slice/app/AppSlice";
interface YearDropDownProps {
  onChange?: (val: string) => void;
}
const YearDropdown: React.FC<YearDropDownProps> = ({ onChange }) => {
  const { year } = useSelector((state: RootState) => state.appInfo?.DateFilter);
  const dispatch = useDispatch();

  function changeYearHandler(event: SelectChangeEvent) {
    const selectedYear = event.target.value as string;
    dispatch(setYear(selectedYear));

    if (onChange) {
      onChange(selectedYear);
    }
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
        value={year}
        onChange={changeYearHandler}
      >
        {YearData.map((x: any) => (
          <MenuItem value={x?.year?.toString()} key={x?.year}>
            {x.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearDropdown;
