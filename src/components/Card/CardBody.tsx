import React, { FC } from "react";

const CardBody : FC = (props) => {
    const {children} = props;
    return <div className="Info-card-body">
        {children}
    </div>
}

export default CardBody;