import React from "react";

export default function Image(props) {
  return (
    <div
      className="w-16 h-fit"
      style={{
        width: props.size ? props.size : undefined,
      }}
    >
      <img
        className="w-full h-full"
        src={props.url}
        alt=""
        onError={(e) => {
          e.target.src = "/images/default-image.jpg";
        }}
      />
    </div>
  );
}
