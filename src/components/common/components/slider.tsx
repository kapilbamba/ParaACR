import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// Define the props type for the component
interface CustomSliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  marks?: { value: number; label: string }[];
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 10,
  marks = [
    { value: 0, label: "" },
    { value: 100, label: "" }
  ],
  onChange,
}) => {
  const [val, setVal] = React.useState<number>(value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    const newVal = newValue as number;
    setVal(newVal);
    onChange(newVal);
  };

  return (
    <Box>
      <Slider
        marks={marks}
        step={step}
        value={val}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        size="small"
        onChange={handleChange}
        sx={{
          "& .MuiSlider-thumb": {
            color: "white",
          },
          "& .MuiSlider-track": {
            color: "white",
          },
          "& .MuiSlider-rail": {
            color: "#ccc",
          },
          "& .MuiSlider-root": {
            padding: "0px",
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          color="white"
          onClick={() => {
            setVal(min);
            onChange(min);
          }}
          sx={{ cursor: "pointer" }}
        >
          {min}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          onClick={() => {
            setVal(max);
            onChange(max);
          }}
          sx={{ cursor: "pointer" }}
        >
          {max}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomSlider;
