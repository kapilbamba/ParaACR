/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProductAvatar from "./ProductAvatar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { getImgUrl } from "src/http/server-base";

function FileAvatar(props) {
  const { src, download, type, ...otherProps } = props;
  const [imgStr, setImgStr] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const onDownload = async () => {
    if (typeof src === "string") {
      setImgStr(getImgUrl + `${type}/${src}`);
    }
  };

  React.useEffect(() => {
    if (download && typeof src === "string") onDownload();
    else {
      if (typeof src === "string") setImgStr(src);
      else if (src instanceof File) {
        const reader = new FileReader();
        reader.readAsDataURL(src);
        reader.onload = () => {
          if (typeof reader.result === "string") {
            setImgStr(reader.result);
          }
        };
      }
    }
  }, [src, download]);

  const handleImageClick = () => {
    if (imgStr) setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <ProductAvatar {...otherProps} src={imgStr} onClick={handleImageClick} />
      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        aria-labelledby="image-dialog-title"
        aria-describedby="image-dialog-description"
      >
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              padding: "1 2",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Image Preview
          </Typography>
        </DialogTitle>
        <DialogContent>
          <img src={imgStr} alt="Full size" className="object-contain" />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="secondary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default React.memo(FileAvatar);
