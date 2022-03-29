import React, { FC, useContext } from "react";
import cardContext from "./cardContext";

const CardBody: FC = (props) => {
  const { bodyOpen } = useContext(cardContext);
  const { children } = props;
  return <div className={`Info-card-body ${bodyOpen ? '' : 'collapsed'}`}>
    {children}
  </div>
}

export default CardBody;