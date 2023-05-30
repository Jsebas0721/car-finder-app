import React, { useEffect, useState } from "react";
import Dealer from "./Dealer";

function DealerList(){

    const [dealers, setDealers]= useState([])

    useEffect(()=> {
        fetch("/dealers")
        .then((resp)=> resp.json())
        .then(dealers => setDealers((dealers)))
    },[]);

    const dealershipList = dealers.map((dealer)=> (
        <Dealer key={dealer.id} dealer={dealer}/>
    ))
    return (
        <ul className="dealer-container">
            <hr/>
            <h1>Dealer List:</h1>
            {dealershipList}
        </ul>
    )

    
}

export default DealerList;