import { useEffect, useState } from "react";
import "./LazyImage.css";

const LazyImage = ({ placeholderSrc, src, className, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc
      ? "loading2"
      : "loaded2 " + className;

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};
export default LazyImage;
