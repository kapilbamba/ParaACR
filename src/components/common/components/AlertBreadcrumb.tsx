import { Box, Button, Typography, useTheme } from "@mui/material";
import { BiSolidErrorCircle } from "react-icons/bi";

const AlertBreadcrumb = ({
  title,
  success,
  btnProps,
}: {
  title: string;
  success: boolean;
  btnProps?: {
    title: string | undefined;
    onClick?: VoidFunction;
    disabled?: boolean | undefined;
  };
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: success
          ? theme.palette.error.lighter
          : theme.palette.warning.lighter,
        border: "1px solid",
        borderColor: success
          ? theme.palette.error.dark
          : theme.palette.warning.dark,
        padding: "10px",
        borderRadius: "5px",
      }}
      className="flex items-center  !my-3"
    >
      <div className="flex flex-1 gap-2">
        <BiSolidErrorCircle
          size={25}
          color={success ? theme.palette.error.dark : theme.palette.warning.dark}
        />
        <Typography>{title}</Typography>
      </div>
      {
        btnProps?.title ? (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={btnProps?.onClick}
            disabled={btnProps?.disabled}
          >
            {btnProps?.title || "Button"}
          </Button>
        ) : null
      }
    </Box >
  );
};

export default AlertBreadcrumb;
