import React, { FC }  from 'react';
import { Link, LinkProps, useLocation } from "react-router-dom";

interface ICustomLink extends LinkProps {
  to: string;
}

const CustomLinkNeu: FC<ICustomLink> = (props) => {
  const { to, children } = props;
  const location = useLocation();
  return (
    <Link style={{
      pointerEvents: location.pathname !== to ? 'inherit' : 'none',
      color: location.pathname !== to ? "" : "#E24E1B"
    }} className='bold-App-link' to={to}>{children}</Link>
  )
} 

export default CustomLinkNeu