/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProductAvatar from "./ProductAvatar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
function ProfileAvtar(props) {
  const { src, download, ...otherProps } = props;
  const [imgStr, setImgStr] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const onDownload = async () => {
    if (typeof src === "string") {
      setImgStr(src);
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

  const theme = useTheme();
  return (
    <div className="relative">
      <div className="cursor-pointer">
        <ProductAvatar
          {...otherProps}
          src={imgStr}
          onClick={handleImageClick}
          borderRadius={"50%"}
        />
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        aria-labelledby="image-dialog-title"
        aria-describedby="image-dialog-description"
        maxWidth={"lg"}
      >
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
            Image Preview
          </Typography>
          <Link to={imgStr} target="_blank" download>
            <img src={imgStr} alt="Full size" className="h-[50vh] rounded-md" />
          </Link>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            onClick={closeDialog}
            color="secondary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default React.memo(ProfileAvtar);
