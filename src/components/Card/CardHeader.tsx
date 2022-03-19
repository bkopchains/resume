import React, { FC, ReactElement } from "react";

interface ICardHeader {
    titleText: string;
    rightDetailText: string | ReactElement<any, any> ;
    subTitleText?: string | ReactElement<any, any> ;
    noBorder?: boolean
}

const CardHeader: FC<ICardHeader> = (props) => {
    const {titleText, subTitleText, rightDetailText, noBorder} = props
    let subTitle = null;
    if(typeof subTitleText === 'string'){
        subTitle = subTitleText.toUpperCase();
    }
    else{
        subTitle = subTitleText
    }
    return (
        <div className={`Info-card-header ${noBorder ? "" : "Info-border"}`}>
            <div className="Info-card-header-title">
                <div>{titleText}</div>
                <div>{rightDetailText}</div>
            </div>
            <div className="Info-card-header-subtitle">{subTitle}</div>
        </div>
    )
}

export default CardHeader;