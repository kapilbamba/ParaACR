/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProductAvatar from "./ProductAvatar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  Typography,
} from "@mui/material";
import { getImgUrl } from "src/http/server-base";
import CropDialog from "./CropDialog";
import TableActionIcon from "../table/TableActionIcon";
import { IconCrop } from "@tabler/icons-react";

function ShopAvatar(props) {
  const { src, download, type, crop, ...otherProps } = props;
  const [imgStr, setImgStr] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [cropDialog, setCropDialog] = React.useState(false);

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
    <div className="relative">
      {crop?.image ? (
        <div className="absolute right-1 top-1 z-10 p-2">
          <Tooltip title="Crop Image">
            <TableActionIcon onClick={() => setCropDialog(true)}>
              <IconCrop
                size={30}
                className=" bg-primaryMain/30 hover:bg-primary-main/20 rounded-full text-white"
              />
            </TableActionIcon>
          </Tooltip>
        </div>
      ) : null}
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

      <CropDialog
        open={cropDialog}
        close={() => setCropDialog(false)}
        crop={crop}
        imgStr={imgStr}
      />
    </div>
  );
}

export default React.memo(ShopAvatar);
