import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropDialog = (props) => {
  const { open, close, imgStr, crop } = props;
  const cropperRef = createRef();

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const croppedCanvas = cropperRef.current?.cropper.getCroppedCanvas();

      if (croppedCanvas) {
        croppedCanvas.toBlob((blob) => {
          if (blob) {
            const file = new File(
              [blob],
              `${crop?.image?.name || "cropped-img"}.png`,
              {
                type: "image/png",
              }
            );
            crop?.handleChange(file);
            close();
          }
        }, "image/png");
      }
    }
  };

  return (
    <Dialog open={open} onClose={close} maxWidth="md" fullWidth>
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
          Crop Preview
        </Typography>
      </DialogTitle>
      <DialogContent className="flex ">
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%", objectFit: "contain" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={imgStr}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="secondary" variant="outlined">
          Close
        </Button>
        <Button onClick={getCropData} color="primary" variant="contained">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CropDialog;
