import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  Chip,
  useTheme,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const NavItem = ({ item, level, pathDirect, onClick, hideMenu }) => {
  const location = useLocation();
  const customizer = useSelector((state) => state.customizer);
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon =
    level > 1 ? (
      <Icon stroke={1.5} size="1rem" />
    ) : (
      <Icon stroke={1.5} size="1.3rem" />
    );

  const ListItemStyled = styled(ListItem)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: `${item?.padding === false ? "2px 10px !important" : "8px 10px"}`,
    fontSize: "16px",
    fontWeight: 600,

    borderRadius: `${customizer.borderRadius}px`,
    backgroundColor: level > 1 ? "transparent " : "inherit",
    color: theme.palette.primary.contrastText,
    paddingLeft: hideMenu ? "10px" : level > 2 ? `${level * 15}px` : "10px",
    "&:hover": {
      backgroundColor: theme.palette.darkblue.lighter,
      color: theme.palette.darkblue.main,
    },
    "&.Mui-selected": {
      fontSize: "16px",
      fontWeight: 600,
      color: theme.palette.darkblue.main,
      backgroundColor: theme.palette.slate.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.darkblue.lighter,
        color: theme.palette.darkblue.main,
      },
    },
  }));

  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled
        button
        component={item.external ? "a" : NavLink}
        to={item.href}
        href={item.external ? item.href : ""}
        disabled={item.disabled}
        selected={
          location.pathname !== "/coming-soon"
            ? pathDirect.startsWith(item.href)
            : false
        }
        target={item.external ? "_blank" : ""}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: "36px",
            p: "3px 0",
            color:
              level > 1 && pathDirect.startsWith(item.href)
                ? `${theme.palette.secondary.dark}`
                : "inherit",
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          sx={{
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
          }}
        >
          {hideMenu ? (
            ""
          ) : (
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "0.8rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "180px",
                display: "inline-block",
              }}
            >
              {`${item.title}`}
            </Typography>
          )}
          <br />
          {item.subtitle ? (
            <Typography
              variant="caption"
              sx={{
                fontSize: "0.6rem",
              }}
            >
              {hideMenu ? "" : item.subtitle}
            </Typography>
          ) : (
            ""
          )}
        </ListItemText>

        {!item.chip || hideMenu ? null : (
          <Chip
            color={item.chipColor}
            variant={item.variant ? item.variant : "filled"}
            size="small"
            label={item.chip}
          />
        )}
      </ListItemStyled>
    </List>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  pathDirect: PropTypes.any,
  hideMenu: PropTypes.any,
  onClick: PropTypes.func,
};

export default NavItem;
