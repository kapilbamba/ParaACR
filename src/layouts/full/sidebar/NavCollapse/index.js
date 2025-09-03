import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ListItemIcon,
  ListItem,
  Collapse,
  styled,
  ListItemText,
  useTheme,
} from "@mui/material";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

import NavItem from "../NavItem";

const NavCollapse = (props) => {
  const { menu, level, pathWithoutLastPart, pathDirect, onClick, hideMenu } =
    props;

  const customizer = useSelector((state) => state.customizer);
  const Icon = menu.icon;
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuIcon =
    level > 1 ? (
      <Icon stroke={1.5} size="1rem" />
    ) : (
      <Icon stroke={1.5} size="1.3rem" />
    );

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    menu.children.forEach((item) => {
      if (pathname.startsWith(item.href)) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItem)(() => ({
    marginBottom: "2px",
    padding: "8px 10px",
    fontSize: "16px",
    fontWeight: 600,
    paddingLeft: hideMenu ? "10px" : level > 2 ? `${level * 15}px` : "10px",
    backgroundColor: open && level < 2 ? theme.palette.slate.contrastText : "",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor:
        pathname.includes(menu.href) || open
          ? theme.palette.slate.main
          : theme.palette.slate.main,
      color:
        pathname.includes(menu.href) || open
          ? theme.palette.indigo.main
          : theme.palette.indigo.main,
    },
    color:
      open && level < 2
        ? theme.palette.indigo.main
        : `inherit` && level > 1 && open
        ? theme.palette.secondary.contrastText
        : theme.palette.text.contrastText,
    borderRadius: `${customizer.borderRadius}px`,
  }));

  const submenus = menu.children?.map((item) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
        />
      );
    } else {
      return (
        <NavItem
          key={item.id}
          item={item}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    }
  });


  return (
    <React.Fragment key={menu.id}>
      <ListItemStyled
        button
        component="li"
        onClick={handleClick}
        // selected={pathWithoutLastPart === menu.href}
      >
        <ListItemIcon
          sx={{
            minWidth: "36px",
            p: "3px 0",
            color: "inherit",
          }}
        >
          {menuIcon}
        </ListItemIcon>
        <ListItemText color="inherit">
          {hideMenu ? "" : <>{menu.title}</>}
        </ListItemText>
        {!open ? (
          <IoChevronDownOutline size="1rem" />
        ) : (
          <IoChevronUpOutline size="1rem" />
        )}
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {submenus}
      </Collapse>
    </React.Fragment>
  );
};

export default NavCollapse;
