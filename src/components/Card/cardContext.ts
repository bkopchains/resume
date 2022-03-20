import React from "react";

const cardContext = React.createContext({
    bodyOpen: false,
    toggleBodyOpen: () => { }
})

export default cardContext;