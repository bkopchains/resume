import React, { FC } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

interface ICustomLink extends Omit<LinkProps, "to"> {
  href: string;
  style?: React.CSSProperties;
  title?: string;
  children?: React.ReactNode;
}

const CustomLinkBold: FC<ICustomLink> = (props) => {
  const { href, children, title, style, ...rest } = props;
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <Link
      {...rest}
      to={href}
      title={title}
      style={{
        pointerEvents: !isActive ? "inherit" : "none",
        color: !isActive ? "" : "#E24E1B",
        ...style,
      }}
      className="bold-App-link"
    >
      {children}
    </Link>
  );
};

export default CustomLinkBold;
