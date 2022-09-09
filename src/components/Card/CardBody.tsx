import React, { FC, useContext } from "react";
import cardContext from "./cardContext";

const CardBody: FC = (props) => {
  const { bodyOpen } = useContext(cardContext);
  const { children } = props;
  return <div className={`neu-Info-card-body ${bodyOpen ? '' : 'neu-collapsed'}`}>
    {children}
  </div>
}

export default CardBody;