import { Avatar, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

const TabCard = ({
  title,
  image,
  icon: Icon,
  bgColor,
  IconColor,
  href,
  onClick,
}: any) => {
  const theme: any = useTheme();
  return (
    <NavLink to={onClick ? "#" : href} onClick={onClick}>
      <div className=" bg-white bg-[url('./assets/images/pattern/white_wave.png')] bg-contain bg-no-repeat bg-bottom flex flex-col justify-center items-center rounded-md p-2 px-1 shadow-xl border  h-full">
        {image ? (
          <img src={image} alt="warranty" className="w-[60%] mb-4 rounded-md" />
        ) : null}
        {Icon ? (
          <Avatar
            className="!mb-3"
            sx={{
              backgroundColor: bgColor,
              color: IconColor,
            }}
          >
            <Icon size={30} />
          </Avatar>
        ) : null}
        <Typography
          variant="subtitle2"
          fontWeight={600}
          className="text-center !leading-5"
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
      </div>
    </NavLink>
  );
};

export default TabCard;
