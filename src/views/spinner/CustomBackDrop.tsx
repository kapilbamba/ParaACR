import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { resetLoading } from "src/store/slice/app/AppSlice";
import { RootState } from "src/store/Store";

const CustomBackDrop = () => {
  const AppInfo = useSelector((state: RootState) => state.appInfo);
  const dispatch = useDispatch();
  const { open } = AppInfo?.Loading || {
    open: false,
    message: "",
  };
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setShowButton(false);
    let timer: string | number | NodeJS.Timeout | undefined;
    if (open) {
      timer = setTimeout(() => {
        setShowButton(true);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [open]);

  if (!open) return <></>;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
      {showButton && (
        <Button
          onClick={() => {
            dispatch(resetLoading());
            setShowButton(false);
          }}
        >
          Close
        </Button>
      )}
    </Backdrop>
  );
};

export default CustomBackDrop;
