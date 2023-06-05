import React, { useContext, useEffect} from "react";
import Dealer from "./Dealer";
import NewDealer from "./NewDealer";
import { DealersContext } from "../context/dealers";

function DealerList({onSetCars, onSetCurrentDealer}){

    const {dealers, getDealers} = useContext(DealersContext);

    useEffect(()=> {
        getDealers();
    },[]);


    const dealershipList = dealers.map((dealer)=> (
        <Dealer key={dealer.id} dealer={dealer} onSetCars={onSetCars} onSetCurrentDealer={onSetCurrentDealer}/>
    ))
    return (
        <ul className="dealer-container">
            <hr/>
            <NewDealer />
            <h1>Dealer List:</h1>
            {dealershipList}
        </ul>
    )

    
}

export default DealerList;