import React, { useEffect, useState} from "react";
import Dealer from "./Dealer";
import NewDealer from "./NewDealer";

function DealerList({onSetCars, onSetCurrentDealer}){

    const [dealers, setDealers]= useState([])

    useEffect(()=> {
        fetch("/dealers")
        .then((resp)=> resp.json())
        .then(dealers => {
            setDealers(dealers)
            console.log(dealers)
           
        })
    },[]);

    function handleAddDealer(newDealer){
        setDealers([...dealers, newDealer])
        console.log("Dealer Created: ", newDealer)
      }

    const dealershipList = dealers.map((dealer)=> (
        <Dealer key={dealer.id} dealer={dealer} onSetCars={onSetCars} onSetCurrentDealer={onSetCurrentDealer}/>
    ))
    return (
        <ul className="dealer-container">
            <hr/>
            <NewDealer onAddDealer={handleAddDealer}/>
            <h1>Dealer List:</h1>
            {dealershipList}
        </ul>
    )

    
}

export default DealerList;