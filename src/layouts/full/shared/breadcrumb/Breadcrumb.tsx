import React from "react";
import {
  Typography,
  Button,
  Box,
  useTheme,
  SxProps,
  Theme,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CustomTab from "src/components/common/Tab";
interface IAddProps {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  component?: React.ReactNode;
  sx?: SxProps<Theme>;
}
interface ITodoCardProps {
  title: string;
  showBackButton?: boolean;
  addProps?: IAddProps;

  btnProps?: {
    title: string | undefined;
    onClick?: VoidFunction;
    disabled?: boolean | undefined;
  };
  component?: any;
  categoryProps?: {
    value: string;
    onChange: (val: string) => void;
  };
}
const Breadcrumb: React.FC<ITodoCardProps> = ({
  title,
  showBackButton,
  component,
  btnProps,
  categoryProps,
  addProps,
}) => {
  const theme: any = useTheme();
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        borderRadius: "8px",
        p: "10px 20px 10px 20px",

        margin: "20px 0px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: categoryProps?.value === 'Women' ? theme.palette?.error?.lighter : theme.palette?.gray?.light,
      }}
    >
      <Grid
        item
        md={6}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginRight: "20px",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item md={6} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 3,
          }}
        >
          {component || null}
          {categoryProps ? <CustomTab {...categoryProps} /> : null}
          {showBackButton ? (
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                padding: "6px 30px",
              }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
          ) : null}
          {btnProps?.title ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={btnProps?.onClick}
              disabled={btnProps?.disabled}
            >
              {btnProps?.title || "Button"}
            </Button>
          ) : null}
          {addProps?.title ? (
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "6px 30px",
              }}
              onClick={addProps.onClick}
              disabled={addProps?.disabled}
            >
              {addProps.title}
            </Button>
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Breadcrumb;
