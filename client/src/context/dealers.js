import React, { createContext, useState } from "react";

const DealersContext = createContext(null);

function DealersProvider({children}){
    
    const [dealers, setDealers]= useState([]);
    const [currentDealer, setCurrentDealer] =useState([]);
    
    
    function getDealers(){
        fetch("/dealers")
        .then((resp)=> resp.json())
        .then(dealers => {
            setDealers(dealers)
        })
    }

    function handleAddDealer(newDealer){
        setDealers([...dealers, newDealer])
        console.log("Dealer Created: ", newDealer)
    }

    return <DealersContext.Provider value={{dealers, setDealers, getDealers, handleAddDealer, currentDealer, setCurrentDealer}}>{children}</DealersContext.Provider>
}

export { DealersContext, DealersProvider}