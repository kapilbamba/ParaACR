/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSnackbar } from "notistack";
import { styled, Typography } from "@mui/material";
import { FileUploader as ReactFileUploader } from "react-drag-drop-files";
import noimg from "src/assets/images/upload.png";

const ImageContainer = styled("div")`
  --tw-border-opacity: 1;
  align-items: center;
  border-color: #d1dbd9;
  border-radius: 0.5rem;
  border-style: dashed;
  border-width: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;

  :hover {
    border-color: #000;
  }

  img {
    margin-left: auto;
    margin-right: auto;
  }
`;

const LabelContainer = styled("div")`
  text-align: center;
`;

export default function FileUploader(props) {
  const { handleChange, multiple, types } = props;
  const { enqueueSnackbar } = useSnackbar();

  const sizeError = (file) =>
    enqueueSnackbar(file, {
      variant: "error",
    });

  const typeError = (err) => enqueueSnackbar(err, { variant: "error" });

  return (
    <ReactFileUploader
      types={types || ["JPEG", "PNG", "JPG", "WEBP"]}
      onTypeError={typeError}
      onSizeError={sizeError}
      multiple={multiple || false}
      maxSize={2}
      handleChange={handleChange}
    >
      <ImageContainer sx={{ p: 1, minHeight: "fit-content", height: 100 }}>
        <LabelContainer>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Typography>
              <img
                src={noimg}
                alt="image-logo"
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </Typography>
            <div className="col-span-2">
              <Typography
                variant="body2"
                className="col-span-2 text-left"
                sx={{
                  color: "neutral.400",
                }}
              >
                Image size should be square (500) x (500), Image size must be
                less than 2 mb Support: jpeg, png, jpg
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                className="text-left !mt-2"
                color="black"
              >
                Drop your image here, or{" "}
                <span className="text-blue-700"> browse</span>
              </Typography>
            </div>
          </div>
        </LabelContainer>
      </ImageContainer>
    </ReactFileUploader>
  );
}
