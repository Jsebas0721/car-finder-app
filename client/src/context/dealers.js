import React, { createContext, useState } from "react";

const DealersContext = createContext(null);

function DealersProvider({children}){
    
    const [dealers, setDealers]= useState([]);
    
    
    function getDealers(){
        fetch("/dealers")
        .then((resp)=> resp.json())
        .then(dealers => {
            setDealers(dealers)
            console.log(dealers) 
        })
    }

    function handleAddDealer(newDealer){
        setDealers([...dealers, newDealer])
        console.log("Dealer Created: ", newDealer)
    }

    return <DealersContext.Provider value={{dealers, setDealers, getDealers, handleAddDealer}}>{children}</DealersContext.Provider>
}

export { DealersContext, DealersProvider}