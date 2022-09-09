import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement, useContext } from "react";
import cardContext from "./cardContext";

interface ICardHeader {
  titleText: string;
  rightDetailText: string | ReactElement<any, any>;
  subTitleText?: string | ReactElement<any, any>;
  noBorder?: boolean
  accordion?: boolean
}

const CardHeader: FC<ICardHeader> = (props) => {
  const { titleText, subTitleText, rightDetailText, noBorder, accordion } = props
  const { bodyOpen, toggleBodyOpen } = useContext(cardContext);

  let subTitle = null;
  if (typeof subTitleText === 'string') {
    subTitle = subTitleText.toUpperCase();
  }
  else {
    subTitle = subTitleText
  }

  const accordionClick = () => {
    if (accordion) {
      toggleBodyOpen();
    }
  }

  return (
    <div
      className={`neu-Info-card-header ${noBorder ? "" : "neu-Info-border"}  ${accordion ? "neu-Clickable" : ""}`}
      onClick={accordionClick}
    >
      <div className="neu-Info-card-header-title">
        <div>{titleText}</div>
        <div>{rightDetailText}</div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="neu-Info-card-header-subtitle">{subTitle}</div>
        {accordion && <FontAwesomeIcon icon={faAngleUp} className={`neu-Info-icon ${bodyOpen ? "neu-open" : ""}`} />}
      </div>
    </div>
  )
}

export default CardHeader;