import React, { FC, useState } from "react";
import cardContext from "./cardContext";

interface ICard {
  defaultClosed?: boolean
}

const Card: FC<ICard> = (props) => {
  const { children, defaultClosed } = props;
  const [bodyOpen, setBodyOpen] = useState<boolean>(defaultClosed ? !defaultClosed : true);
  const toggleBodyOpen = () => {
    setBodyOpen(!bodyOpen);
  }

  return <cardContext.Provider value={{ bodyOpen, toggleBodyOpen }}>
    <div className='neu-Info-card'>
      {children}
    </div>
  </cardContext.Provider>
}

export default Card;