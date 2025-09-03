import { useLocation } from "react-router";
import { Box, List, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { RootState } from "../../../store/Store";
import { toggleMobileSidebar } from "../../../store/slice/customizer/CustomizerSlice";
import NavCollapse from "./NavCollapse";
import Menuitems from "./menuItems/MenuItems";


const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf("/"));
  const customizer = useSelector((state: RootState) => state.customizer);
  const UserInfo = useSelector((state: RootState) => state?.user?.UserInfo);

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  const dispatch = useDispatch();

  return (
    <Box sx={{ pr: 3, pl: 2, pb: 5, pt: 1 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems(UserInfo?.Rights || [], pathname)?.map((item: any) => {
          if (item.subheader) {
            return (
              <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />
            );
          } else if (item?.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
