import React, { FC, useContext } from "react";
import cardContext from "./cardContext";

interface ICardBody {
  children?: React.ReactNode;
}

const CardBody: FC<ICardBody> = (props) => {
  const { bodyOpen } = useContext(cardContext);
  const { children } = props;
  return <div className={`neu-Info-card-body ${bodyOpen ? '' : 'neu-collapsed'}`}>
    {children}
  </div>
}

export default CardBody;