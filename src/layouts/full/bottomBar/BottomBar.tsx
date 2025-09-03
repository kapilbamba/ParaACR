import { Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  PiListBullets,
  PiVideoConference,
  PiUsersFour,
  PiPhone,
  PiHouse,
} from "react-icons/pi";
import { RootState } from "src/store/Store";

const items = (isLogin: boolean) => [
  {
    title: isLogin ? "Dashboard" : "Home",
    href: isLogin ? "/mydashboard" : "/dashboard",
    icon: isLogin ? PiListBullets : PiHouse,
  },
  {
    title: "Matches",
    href: "matches",
    icon: PiVideoConference,
  },
  {
    title: "Teams",
    href: "/teams",
    icon: PiUsersFour,
  },
  {
    title: "Support",
    href: "/support",
    icon: PiPhone,
  },
];

const BottomBar = () => {
  const { UserID } = useSelector((state: RootState) => state?.user);
  const theme: any = useTheme();
  return (
    <div className="fixed bottom-1 shadow-lg shadow-slate-200 bg-[#f9e3bd] border border-[#ffc866] pb-1  rounded-full w-[95%] left-1/2 -translate-x-1/2  z-40">
      <ul className="grid grid-cols-4 gap-4">
        {items(Boolean(UserID))?.map((x) => (
          <li key={x.title}>
            <NavLink
              to={x.href}
              className="flex flex-col justify-center items-center"
            >
              {({ isActive }) => (
                <>
                  <p className={isActive ? "active_link" : "bottom_nav_link"}>
                    <x.icon
                      size={20}
                      color={isActive ? undefined : theme.palette.primary.main}
                    />
                  </p>
                  <Typography
                    variant="body2"
                    fontWeight={800}
                    className={
                      isActive
                        ? "active_link_text"
                        : "bottom_nav_link_text tracking-widest"
                    }
                  >
                    {x.title}
                  </Typography>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
