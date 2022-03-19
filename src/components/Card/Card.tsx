import React, { FC } from "react";

const Card : FC = (props) => {
    const {children} = props;
    return <div className='Info-card'>
        {children}
    </div>
}

export default Card;