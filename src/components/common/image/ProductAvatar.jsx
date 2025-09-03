import { Avatar as MaterialAvatar } from "@mui/material";
import NoImg from "src/assets/images/noImg.svg";
export default function ProductAvatar(props) {
  const { imgRectangle, defaultImg, ...other } = props;

  const defaultImgProps = {
    ...other,
    ...(defaultImg ? defaultImg : {}),
  };
  return (
    <MaterialAvatar
      {...other}
      sx={{
        ...other.sx,
        backgroundColor: "#fff",
        boxShadow: imgRectangle ? 6 : "",
        objectFit: "contain",
      }}
    >
      {imgRectangle ? (
        <img src={NoImg} alt="no-img" className="h-[10vh] object-contain" />
      ) : (
        <>
          <MaterialAvatar
            {...defaultImgProps}
            src="src/assets/images/noImg.svg"
          />
        </>
      )}
    </MaterialAvatar>
  );
}
