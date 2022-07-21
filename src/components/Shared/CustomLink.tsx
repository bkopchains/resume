import React, { FC }  from 'react';
import { Link, useLocation } from "react-router-dom";

interface ICustomLink {
  to: string;
}

const CustomLink: FC<ICustomLink> = (props) => {
  const { to, children } = props;
  const location = useLocation();
  return (
    <Link style={{
      pointerEvents: location.pathname !== to ? 'inherit' : 'none',
      color: location.pathname !== to ? "" : "#f08080"
    }} className='App-link' to={to}>{children}</Link>
  )
} 

export default CustomLink