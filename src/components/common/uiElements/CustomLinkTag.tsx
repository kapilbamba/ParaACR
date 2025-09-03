import React, { ForwardedRef } from "react";
import { Link } from "react-router-dom";
import TableActionIcon from "../components/TableActionIcon";

interface ITableActionIcon {
  children: React.ReactNode;
  sx?: any;
  disabled?: any;
  to?: any;
  target?: "_blank" | "null";
}

const CustomLinkTag = React.forwardRef(function CustomLinkTag(
  props: ITableActionIcon,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { children, disabled, to, ...rest } = props;

  return (
    <Link to={disabled ? `#` : to} {...rest}>
      <TableActionIcon disabled={disabled}>{children}</TableActionIcon>
    </Link>
  );
});

export default CustomLinkTag;
