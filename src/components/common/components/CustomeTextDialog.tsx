import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Box from "@mui/material/Box";
import {
  CircularProgress,
  DialogContent,
  Typography,
  useTheme,
} from "@mui/material";
import { IconAlertTriangle } from "@tabler/icons-react";

interface IDeleteDialogProps {
  headerText?: any;
  title?: string | number | undefined;
  borderBtnText?: string;
  btnText?: string;
  open: boolean;
  onClickOk?: () => void;
  onClickClose?: (y?: boolean) => void;
}

const CustomeTextDialog: React.FC<IDeleteDialogProps> = (props) => {
  const {
    onClickOk,
    open,
    onClickClose,
    title,
    headerText,
    borderBtnText,
    btnText,
  } = props;
  const theme: any = useTheme();
  const [loading, setLoading] = React.useState(false);

  return (
    <Dialog open={open} maxWidth="xs" fullWidth scroll="paper">
      <DialogContent>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: theme?.palette?.slate?.main,
            marginBottom: "20px",
            paddingY: 1,
            paddingX: 2,
            borderRadius: "8px",
          }}
        >
          {headerText ?? "Please Confirm"}
        </Typography>
        <Box className="px-4 ">
          <Box className="flex items-center gap-2 py-5">
            <IconAlertTriangle fontSize={45} color="#faad14" />
            <Typography variant="subtitle2" textAlign="center">
              {title ?? "Are you sure you want to delete this record?"}
            </Typography>
          </Box>
          <Box className="flex  justify-end items-center gap-2 mt-5">
            <Button
              autoFocus
              onClick={() => onClickClose && onClickClose(false)}
              color="secondary"
              variant="outlined"
              size="small"
            >
              {borderBtnText || "No"}
            </Button>
            <Button
              autoFocus
              color="primary"
              variant="contained"
              size="small"
              onClick={async () => {
                setLoading(true);

                onClickOk && onClickOk();
                setLoading(false);
              }}
              disabled={loading}
              startIcon={
                loading && <CircularProgress color="inherit" size={18} />
              }
            >
              {btnText || "Yes"}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomeTextDialog;
