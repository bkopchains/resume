import React, { FC, useState } from "react";
import cardContext from "./cardContext";


const Card: FC = (props) => {
    const { children } = props;
    const [bodyOpen, setBodyOpen] = useState<boolean>(false);
    const toggleBodyOpen = () => {
        setBodyOpen(!bodyOpen);
    }

    return <cardContext.Provider value={{bodyOpen, toggleBodyOpen}}>
        <div className='Info-card'>
            {children}
        </div>
    </cardContext.Provider>
}

export default Card;