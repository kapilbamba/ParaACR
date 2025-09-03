import { Typography,  } from "@mui/material";
import React from "react";

const RequiredFormText = () => {
  return (
    <Typography variant="body1" display="flex" alignItems="center">
      <span
        style={{
          color: "#dc2626",
          fontSize: "1rem",
        }}
      >
        *
      </span>
      Required
    </Typography>
  );
};

export default RequiredFormText;
