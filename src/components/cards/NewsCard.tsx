import { ThemeContext } from "@emotion/react";
import { Avatar, Typography, useTheme } from "@mui/material";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { PiArrowRightBold, PiCalendarDotsDuotone } from "react-icons/pi";

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void; // Optional click handler
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <div
      className="news-card"
      onClick={onClick}
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px 0",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 8px" }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2 ">
            <PiCalendarDotsDuotone />
            <Typography variant="subtitle2">20 Nov, 2024</Typography>
          </div>

          <Avatar
            sx={{
              width: 25,
              height: 25,
              backgroundColor: theme.palette.success.lighter,
              color: theme.palette.success.main,
            }}
          >
            <PiArrowRightBold size={15} />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
